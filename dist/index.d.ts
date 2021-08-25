import type { Store } from './utils/store';
import AccessToken from './AccessToken';
export { default as AccessToken } from './AccessToken';
export * as storages from './storages';
export interface TokenSet {
    token_type: string;
    expires_in: number;
    access_token: string;
    refresh_token: string;
}
export interface YacProfile {
    user: string;
    avatar: string;
}
export interface ClientConfig {
    clientId: string;
    authorizationServer: string;
    scopes?: string[];
    redirectUri?: string;
}
export default class Yac {
    private config;
    private store;
    private initialized;
    constructor(config: ClientConfig, store: Store);
    login(prompt?: boolean): Promise<void>;
    handleCheckLogin(): Promise<void>;
    isInitialized(): boolean;
    cleanUrl(): void;
    handleCodeCallback(cleanUrl?: boolean): Promise<void>;
    refreshAccessToken(): Promise<AccessToken>;
    storeTokens(tokenSet: TokenSet): Promise<void>;
    exchangeCode(code: string, state: string): Promise<TokenSet>;
    getAccessToken(): Promise<AccessToken>;
    getProfile(): Promise<YacProfile | undefined>;
    logout(): void;
}
