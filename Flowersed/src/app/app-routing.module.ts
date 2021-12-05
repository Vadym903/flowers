import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./_components/shared/login/login.component";
import { BouquetBuildComponent } from "./_components/user/bouquet-build/bouquet-build.component";
import { ItemsComponent } from "./_components/shared/items/items.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'bouquet-build', component: BouquetBuildComponent},
  {path: 'items', component: ItemsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
