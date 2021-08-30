import loginEndpoint from './login';
import type { Store } from './utils/store';
import AccessToken from './AccessToken';

export { default as AccessToken } from './AccessToken';
export * as storages from './storages';

export interface TokenSet {
  token_type: string,
  expires_in: number,
  access_token: string,
  refresh_token: string
}

export interface YacProfile {
  user: string,
  avatar: string
}

export interface ClientConfig {
  clientId: string,
  authorizationServer: string,
  scopes?: string[],
  redirectUri?: string
}

export default class Yac {
  private initialized: boolean = false;

  constructor(
    private config: ClientConfig,
    private store: Store,
  ) {}

  async login(prompt: boolean = true) {
    this.store.resetLoggedOut();
    const endpoint = await loginEndpoint(
      this.config.authorizationServer,
      this.config.clientId, {
      prompt: prompt,
      scopes: this.config.scopes,
      redirectUri: this.config.redirectUri
      }
    );
    this.store.saveVerifier(endpoint.state, endpoint.verifier);

    window.location.assign(endpoint.url);
  }

  async handleCheckLogin() {
    const search = new URLSearchParams(window.location.search);
    const state = search.get('state');
    const code = search.get('code');
    if (!state || !!code) {
      return;
    }

    this.store.removeVerifier(state);
    this.cleanUrl();
  }

  public isInitialized(): boolean {
    return this.initialized;
  }

  public cleanUrl() {
    const url = new URL(window.location.toString());
    url.search = '';
    window.history.replaceState(null, '', url.toString());
  }

  async handleCodeCallback(cleanUrl: boolean = true)
  {
    const search = new URLSearchParams(window.location.search);
    const code = search.get('code');
    const state = search.get('state');
    if (!code || !state) {
      return;
    }
    if (cleanUrl) {
      this.cleanUrl();
    }

    try {
      const tokenSet = await this.exchangeCode(code, state);
      this.storeTokens(tokenSet);
    } catch (e) {
      // Do nothing
    }
  }

  async refreshAccessToken(): Promise<AccessToken>
  {
    const refreshToken = this.store.getRefreshToken();
    if (!refreshToken) {
      return AccessToken.Invalid();
    }

    try {
      const tokenSet = await (fetch(`${this.config.authorizationServer}/token`, {
        method: 'POST',
        body: new URLSearchParams({
          client_id: this.config.clientId,
          grant_type: 'refresh_token',
          refresh_token: refreshToken,
        }).toString(),
        headers: new Headers({
          'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        }),
      }).then((r) => r.json()) as Promise<TokenSet>);

      this.storeTokens(tokenSet);
    } catch (e) {
      this.store.clear();
    }

    return this.store.getAccessToken();
  }

  async storeTokens(tokenSet: TokenSet)
  {
    if (!tokenSet.access_token) {
      this.store.clear();
      return;
    }

    const expireAt = Date.now() + tokenSet.expires_in * 1000;
    const accessToken = new AccessToken(tokenSet.access_token, expireAt);
    this.store.saveAccessToken(accessToken);
    this.store.saveRefreshToken(tokenSet.refresh_token);
  }

  async exchangeCode(code: string, state: string): Promise<TokenSet> {
    const verifier = this.store.getVerifier(state);
    if (!verifier) {
      throw new Error('Invalid state');
    }
    this.store.removeVerifier(state);

    return await fetch(`${this.config.authorizationServer}/token`, {
      method: 'POST',
      body: new URLSearchParams({
        client_id: this.config.clientId,
        grant_type: 'authorization_code',
        code_verifier: verifier,
        code,
      }).toString(),
      headers: new Headers({
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      }),
    }).then((r) => r.json()) as Promise<TokenSet>;
  }

  async getAccessToken(): Promise<AccessToken> {
    const token = this.store.getAccessToken();
    if (token.isAboutToExpire()) {
      return await this.refreshAccessToken();
    }

    return token;
  }

  async getProfile(): Promise<YacProfile|undefined> {
    const token = await this.getAccessToken();
    if (!token.isValid()) {
      return;
    }

    return fetch(`${this.config.authorizationServer}/r/profile`, {
      headers: new Headers({
        'Authorization': `Bearer ${token.toString()}`
      }),
      credentials: 'include'
    }).then((r) => {
      if (r.status === 401) {
        this.store.clear();
        return undefined;
      }

      return r.json()
    });
  }

  logout() {
    this.store.clear();
    this.store.setLoggedOut();
  }
}
