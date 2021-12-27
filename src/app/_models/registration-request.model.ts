export class RegistrationRequest {
  constructor(public username?: string,
              public password?: string,
              public password2?: string,
              public email?: string,
              public first_name?: string,
              public phone?: string,
              public last_name?: string) {
  }
}
