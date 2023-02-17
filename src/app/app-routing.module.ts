import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductCreateComponent } from "./product-create/product-create.component";
import { PageErrorComponent } from './page-error/page-error.component';
import {EmployeeListComponent as EmployeeListComponent} from "./employee-list/employee-list.component";
import {EmployeeDetailComponent} from "./employee-detail/employee-detail-component.service";
import {EmployeeCreateComponent} from "./employee-create/employee-create.component";
import { SignInSellerComponent } from './sign-in-seller/sign-in-seller.component';

const routes: Routes = [
  {path : 'employee' , children : [
    {path : 'detail/:id',component : EmployeeDetailComponent },
    {path : 'edit/:id',component : EmployeeCreateComponent },
    {path : '', component : EmployeeListComponent},
  ]},
  {path : 'product', children : [
    {path : 'detail/:id', component: ProductDetailComponent },
    {path : 'edit/:id', component: ProductCreateComponent },
    {path : '', component: ProductListComponent },
  ]},
  {path : "sign-in" , children : [
    {path : "seller" , component : SignInSellerComponent}
  ]},
  {path : 'error' , component: PageErrorComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
