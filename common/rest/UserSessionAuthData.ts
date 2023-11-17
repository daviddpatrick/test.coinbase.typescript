export class UserSessionAuthData {
  private static _instance: UserSessionAuthData;
  public constructor() {
    if (UserSessionAuthData._instance) {
      return UserSessionAuthData._instance;
    }
    UserSessionAuthData._instance = this;
  }
  public static getInstance(): UserSessionAuthData {
    return UserSessionAuthData._instance;
  }
  private _uuid: string;
  private _rest: any;
  private _creds: any;
  public getCreds(): any {
    return this._creds;
  }

  public setCreds(value): void {
    this._creds = value;
  }
  public getRest(): any {
    return this._rest;
  }

  public setRest(value): void {
    this._rest = value;
  }

  public getUuid(): string {
    return this._uuid;
  }

  public setUuid(value): void {
    this._uuid = value;
  }
}
