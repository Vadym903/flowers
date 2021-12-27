import { Component, OnInit } from '@angular/core';
import { User } from "../../../_models/user.model";
import { AuthService } from "../../../_services/auth-service.service";

@Component({
    selector: 'app-user-page',
    templateUrl: './user-page.component.html',
    styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

    user: User;
    constructor(private userService: AuthService) {
    }

    ngOnInit(): void {
        this.userService.getCurrentUser$().subscribe( user => this.user = user);
    }

}
