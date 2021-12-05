export class User {
  public id?: number;
  public firstName?: string;
  public secondName?: string;
  public login?: string;
  public password?: string;
  public email?: string;
  public role?: string;
  public notification?: Notification[];
  public photoId?: number;
  public photoUrl?: string;
  public description?: string;

  constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }

}
