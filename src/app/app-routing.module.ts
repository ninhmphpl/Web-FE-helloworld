import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from "./product/product.component";
import {AdminDisplayEmployeeComponent} from "./admin-display-employee/admin-display-employee.component";
import {ProductListPageService} from "./service/product-list-page.service";
import {AdminListPageService} from "./service/admin-list-page-service";
import {AdminComponent} from "./admin/admin.component";

const routes: Routes = [
  {path:'search' , component : AdminDisplayEmployeeComponent},
  {path:'', component : AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
