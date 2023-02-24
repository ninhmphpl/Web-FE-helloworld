import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ProductEditComponent} from "./product-edit/product-edit.component";
import {PageErrorComponent} from './page-error/page-error.component';
import {EmployeeListComponent as EmployeeListComponent} from "./employee-list/employee-list.component";
import {EmployeeDetailComponent} from "./employee-detail/employee-detail-component.service";
import {EmployeeEditComponent} from "./employee-edit/employee-edit.component";
import {CartComponent} from './cart/cart.component';
import {LoginComponent} from './login/login.component';
import {TestComponent} from './test/test.component';
import {SignupSellerComponent} from './signup-seller/signup-seller.component';
import { SignupBuyerComponent } from './signup-buyer/signup-buyer.component';
import { HomeComponent } from './home/home.component';
import { HomeManagerComponent } from './home-manager/home-manager.component';
import { ProductDetailDefaulComponent } from './product-detail-defaul/product-detail-defaul.component';

const routes: Routes = [
  {path:'',children:[
    {path:'',component:HomeComponent},
    {path:'manager',component:HomeManagerComponent},
  ]},
  {path:'employee',children:[
    {path:'detail/:d',component:EmployeeDetailComponent},
    {path:'edit/:d',component:EmployeeEditComponent},
    {path:'',component:EmployeeListComponent},
  ]},
  {path:'product',children:[
    {path:'detail/:id',component:ProductDetailDefaulComponent},
    {path:'edit/:id',component:ProductEditComponent},
    {path:'',component:ProductListComponent},
  ]},
  {path:'cart',component:CartComponent},
  {path:"signup",children:[
    {path:"seller",component:SignupSellerComponent},
    {path:"buyer",component:SignupBuyerComponent},
  ]},
  {path:'error',component:PageErrorComponent},
  {path:'login',component:LoginComponent},
  {path:'test',component:TestComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
