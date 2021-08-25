import AccessToken from '../AccessToken';
import type { Store } from '../utils/store';
export default class SimpleStorage implements Store {
    private prefix;
    constructor(prefix: string);
    resetLoggedOut(): void;
    isLoggedOut(): boolean;
    setLoggedOut(): void;
    removeVerifier(state: string): void;
    getVerifier(state: string): string | null;
    clear(): void;
    saveVerifier(state: string, verifier: string): void;
    removeState(state: string): void;
    getAccessToken(): AccessToken;
    getRefreshToken(): string | undefined;
    saveAccessToken(accessToken: AccessToken): void;
    saveRefreshToken(refreshToken: string): void;
    private key;
}
