export interface LoginOptions {
    prompt?: boolean;
    scopes?: string[];
    redirectUri?: string;
}
interface LoginEndpoint {
    url: string;
    verifier: string;
    state: string;
}
export default function loginEndpoint(yacDomain: string, clientId: string, options: LoginOptions): Promise<LoginEndpoint>;
export {};
