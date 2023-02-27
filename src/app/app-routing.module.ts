import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { EmployeeListComponent as EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail-component.service';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';
import { SignupSellerComponent } from './signup-seller/signup-seller.component';
import { SignupBuyerComponent } from './signup-buyer/signup-buyer.component';
import { HomeComponent } from './home/home.component';
import { HomeManagerComponent } from './home-manager/home-manager.component';
import { ProfileDefaultComponent } from './profile-default/profile-default.component';
import { ProductDetailDefaulComponent } from './product-detail-defaul/product-detail-defaul.component';
import { HomeSellerComponent } from './home-seller/home-seller.component';
import { BillSellerComponent } from './bill-seller/bill-seller.component';
import { ProfileSellerComponent } from './profile-seller/profile-seller.component';
import { ProductUpdateSellerComponent } from './product-update-seller/product-update-seller.component';
import { ProductDetailSellerComponent } from './product-detail-seller/product-detail-seller.component';
import { HomeEmployeeComponent } from './home-employee/home-employee.component';
import { ProductDetailEmployeeComponent } from './product-detail-employee/product-detail-employee.component';
import { ProductCreateEmployeeComponent } from './product-create-employee/product-create-employee.component';
import { ProductUpdateEmployeeComponent } from './product-update-employee/product-update-employee.component';
import { ProfileBuyerEditComponent } from './profile-buyer-edit/profile-buyer-edit.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: '', component: HomeComponent },
      { path: 'manager', component: HomeManagerComponent },
      { path: 'profile', component: ProfileDefaultComponent }
    ]
  },
  {
    path: 'employee', children: [
      { path: 'detail/:id', component: ProductDetailSellerComponent },
      { path: 'update/:id', component: ProductUpdateSellerComponent },
      { path: '', component: HomeEmployeeComponent }
    ]
  },
  {
    path: 'product', children: [
      { path: 'detail/:id', component: ProductDetailDefaulComponent },
      { path: 'edit/:id', component: ProductEditComponent },
      { path: '', component: ProductListComponent }
    ]
  },
  { path: 'cart', component: CartComponent },
  {
    path: 'signup', children: [
      { path: 'seller', component: SignupSellerComponent },
      { path: 'buyer', component: SignupBuyerComponent }
    ]
  },
  {
    path: 'seller', children: [
      { path: 'bill', component: BillSellerComponent },
      { path: 'profile', component: ProfileSellerComponent },
      { path: 'update/:id', component: ProductUpdateSellerComponent },
      { path: 'detail/:id', component: ProductDetailSellerComponent },
      { path: '', component: HomeSellerComponent }
    ]
  },
  {
    path: 'buyer', children: [
      { path: 'edit/:id', component: ProfileBuyerEditComponent }
    ]
  },
  { path: 'error', component: PageErrorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'test', component: TestComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
