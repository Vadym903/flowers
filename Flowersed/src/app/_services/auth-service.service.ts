import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthRequest } from "../_models/auth-request.model";
import { User } from "./user.model";
import { CookieService } from "ngx-cookie-service";
import { RegistrationRequest } from "../_models/registration-request.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUserSubject: BehaviorSubject<User>;
  public currentUser$: Observable<User>;
  public currentUserEmitter = new EventEmitter<boolean>();

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient,
              private router: Router,
              private dialogRef: MatDialog,
              private cookieService: CookieService) {
     // this.currentUserSubject = new BehaviorSubject<User>();
  }

  public getCurrentUser$(): Observable<User> {
    return this.http.get<User>(this.baseUrl + '/current_user/');
  }

  public getCurrentUser(): User | null {
      const user = this.cookieService.get('user');
      if (user) {
        return JSON.parse(user) as User;
      }
      return null;
  }

  public login(token: AuthRequest) {
    return this.http.post(this.baseUrl + '/token/', token)
      .pipe(
        map(response => {
          this.setCookie(response);
          this.getCurrentUser$().subscribe(user => {
            this.cookieService.set('user', JSON.stringify(user));
            this.currentUserEmitter.emit(true);
          })
          return response;
        }));
  }

  public registration(request: RegistrationRequest) {
    return this.http.post(this.baseUrl + '/register/', request);
  }

  public logOut(): void {
    this.router.navigateByUrl('/login');
    sessionStorage.clear();
    this.cookieService.deleteAll();
    this.currentUserEmitter.emit(false);
  }

  private setCookie(response: any): void {
    this.cookieService.set('access', response.access);
    this.cookieService.set('refresh', response.refresh);
  }

}
