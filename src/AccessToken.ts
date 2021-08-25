export default class AccessToken {
  constructor(
    private value: string,
    private expiresAt: number
  ) {}

  static Invalid() {
    return new AccessToken('', 0);
  }

  isValid() {
    return this.expiresAt > 0 && !this.isExpired();
  }

  isExpired() {
    return Date.now() > this.expiresAt;
  }

  isAboutToExpire(inSeconds: number = 60) {
    return Date.now() > (this.expiresAt - 60);
  }

  toString() {
    return this.value;
  }

  getExpiresAt(): number
  {
    return this.expiresAt;
  }
}