export default class AccessToken {
    private value;
    private expiresAt;
    constructor(value: string, expiresAt: number);
    static Invalid(): AccessToken;
    isValid(): boolean;
    isExpired(): boolean;
    isAboutToExpire(inSeconds?: number): boolean;
    toString(): string;
    getExpiresAt(): number;
}
