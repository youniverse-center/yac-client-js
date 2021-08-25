import Cookies from 'js-cookie';
import AccessToken from '../AccessToken';
import type { Store } from '../utils/store';

export default class SimpleStorage implements Store {
  constructor(private prefix: string) {}

  resetLoggedOut(): void {
    window.sessionStorage.removeItem(this.key('loggedOut'));
  }

  isLoggedOut(): boolean {
   return !!window.sessionStorage.getItem(this.key('loggedOut'));
  }

  setLoggedOut(): void {
    window.sessionStorage.setItem(this.key('loggedOut'), 'true');
  }

  removeVerifier(state: string): void {
    window.sessionStorage.removeItem(this.key(state));
  }

  getVerifier(state: string): string|null {
    return window.sessionStorage.getItem(this.key(state));
  }

  clear(): void {
    const regex = new RegExp(`^${this.prefix}-`);
    const keys = Object.keys(window.sessionStorage)
      .filter((key) => regex.test(key));
    
    keys.forEach((key) => {
      window.sessionStorage.removeItem(key);
    });

    Cookies.remove('yac-refresh-token');
    Cookies.remove('yac-access-token');
  }

  saveVerifier(state: string, verifier: string): void {
    window.sessionStorage.setItem(this.key(state), verifier);
  }

  removeState(state: string): void {
    window.sessionStorage.removeItem(this.key(state));
  }

  getAccessToken(): AccessToken {
    const data = Cookies.get('yac-access-token');
    if (!data) {
      return AccessToken.Invalid();
    }

    const [token, expiresStr] = data.split(';')
    const exipresAt = parseInt(expiresStr, 10);

    if (isNaN(exipresAt) || !token) {
      return AccessToken.Invalid();
    }

    return new AccessToken(token, exipresAt);
  }

  getRefreshToken(): string | undefined {
    return Cookies.get('yac-refresh-token')
  }

  saveAccessToken(accessToken: AccessToken): void {
    Cookies.set('yac-access-token', `${accessToken.toString()};${accessToken.getExpiresAt()}`, {
      sameSite: "strict"
    });
  }

  saveRefreshToken(refreshToken: string): void {
    Cookies.set('yac-refresh-token', refreshToken, {
      sameSite: "strict"
    });
  }
  
  private key(name: string) {
    return `${this.prefix}-${name}`;
  }
}