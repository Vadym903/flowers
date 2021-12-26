export class User {
  public id?: number;
  public username?: string;
  public role?: string;
  public is_superuser?: boolean;
  public phone?: string;
  public email?: string;
  public img?: string;

  constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
}
