import type AccessToken from 'src/AccessToken';
export interface Store {
    clear(): void;
    saveVerifier(state: string, verifier: string): void;
    getVerifier(state: string): string | null;
    removeVerifier(state: string): void;
    getAccessToken(): AccessToken;
    saveAccessToken(accessToken: AccessToken): void;
    getRefreshToken(): string | undefined;
    saveRefreshToken(refreshToken: string): void;
    setLoggedOut(): void;
    isLoggedOut(): boolean;
    resetLoggedOut(): void;
}
