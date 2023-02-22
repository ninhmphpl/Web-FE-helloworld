import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";
import { PageErrorComponent } from './page-error/page-error.component';
import {EmployeeListComponent as EmployeeListComponent} from "./employee-list/employee-list.component";
import {EmployeeDetailComponent} from "./employee-detail/employee-detail-component.service";
import {EmployeeEditComponent} from "./employee-edit/employee-edit.component";
import { SignInSellerComponent } from './sign-in-seller/sign-in-seller.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path : 'employee' , children : [
    {path : 'detail/:id',component : EmployeeDetailComponent },
    {path : 'edit/:id',component : EmployeeEditComponent },
    {path : '', component : EmployeeListComponent},
  ]},
  {path : '', children : [
    {path : 'detail', component: ProductDetailComponent },
    {path : 'edit', component: ProductEditComponent },
    {path : '', component: ProductListComponent },
  ]},
  {path : 'cart' , component : CartComponent},
  {path : "sign-in" , children : [
    {path : "seller" , component : SignInSellerComponent}
  ]},
  {path : 'error' , component: PageErrorComponent},
  {path : 'login', component: LoginComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
