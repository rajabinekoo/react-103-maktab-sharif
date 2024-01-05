export class Session {
  private tokenKey: string = "sneaker-storage-access-token";
  public token: string | null = null;

  constructor() {
    this.token = window.sessionStorage.getItem(this.tokenKey);
  }

  setAccessToken(newToken: string) {
    this.token = newToken;
    window.sessionStorage.setItem(this.tokenKey, newToken);
  }

  logout() {
    this.token = null;
    window.sessionStorage.removeItem(this.tokenKey);
  }
}
