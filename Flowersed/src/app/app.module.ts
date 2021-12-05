import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './_components/shared/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { NavBarComponent } from "./_components/shared/nav-bar/nav-bar.component";
import { CommonModule } from "@angular/common";
import { BouquetBuildComponent } from "./_components/user/bouquet-build/bouquet-build.component";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from "@angular/material/dialog";
import { CookieService } from "ngx-cookie-service";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { AuthInterceptor } from "./_interceptors/auth.interceptor";
import { ItemsComponent } from './_components/shared/items/items.component';
import { SingleItemComponent } from './_components/shared/items/single-item/single-item.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BucketComponent } from './_components/shared/bucket/bucket.component';
import { MatGoogleMapsAutocompleteModule } from "@angular-material-extensions/google-maps-autocomplete";
import { AgmCoreModule } from "@agm/core";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    BouquetBuildComponent,
    ItemsComponent,
    SingleItemComponent,
    BucketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    DragDropModule,
    HttpClientModule,
    MatDialogModule,
    MatSidenavModule,
    MatSelectModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatGoogleMapsAutocompleteModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD6n7NE2lUvSYe-ceVBJWxeIQ82oDQj39E', //AIzaSyDHU77kLxWEqd66AsT8lhssukgeqOVaANA
      libraries: ['places']
    })
  ],
  providers: [
    HttpClientModule,
    CookieService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
