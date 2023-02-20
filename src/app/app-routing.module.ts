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

const routes: Routes = [
  {path : 'employee' , children : [
    {path : 'detail/:id',component : EmployeeDetailComponent },
    {path : 'edit/:id',component : EmployeeEditComponent },
    {path : '', component : EmployeeListComponent},
  ]},
  {path : 'product', children : [
    {path : 'detail/:role/:id', component: ProductDetailComponent },
    {path : 'edit/:role/:id', component: ProductEditComponent },
    {path : 'list/:role', component: ProductListComponent },
  ]},
  {path : 'cart' , component : CartComponent},
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
