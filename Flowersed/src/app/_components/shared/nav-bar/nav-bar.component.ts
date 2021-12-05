import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../../../_services/auth-service.service";
import { User } from "../../../_models/user.model";
import { OrderService } from "../../../_services/order.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  user: User | null = null;

  constructor(
    private router: Router,
    private authService: AuthService,
    private oderService: OrderService) {
  }

  ngOnInit(): void {
    this.updateUser();

    this.authService.currentUserEmitter.subscribe(() => this.updateUser());
  }

  private updateUser() {
    this.authService.getCurrentUser$().subscribe(user => this.user = user.id ? user : null);
  }

  navigate(url: string) {
    this.router.navigateByUrl(url);
  }

  logOut(): void {
    this.authService.logOut();
  }

  openSideNaw(): void {
    this.oderService.isOrderSideNawOpened.next(true);
  }

}
