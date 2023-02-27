import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import {DragDropModule} from '@angular/cdk/drag-drop'; //>> Tạo chức năng kéo thả

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FilterComponent } from './filter/filter.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { environtment } from 'src/environments/environtment';
import { OnloadComponent } from './onload/onload.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { LocalComponent } from './local/local.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

// import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { EmployeeDetailComponent } from './employee-detail/employee-detail-component.service';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ControlProductPageComponent } from './control-product-page/control-product-page.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';
import { SignupSellerComponent } from './signup-seller/signup-seller.component';
import { SignupBuyerComponent } from './signup-buyer/signup-buyer.component';
import { HomeComponent } from './home/home.component';
import { HomeManagerComponent } from './home-manager/home-manager.component';
import { HeaderDefaultComponent } from './header-default/header-default.component';
import { HeaderManagerComponent } from './header-manager/header-manager.component';
import { BillBuyerComponent } from './bill-buyer/bill-buyer.component';
import { ProfileDefaultComponent } from './profile-default/profile-default.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { ProductDetailDefaulComponent } from './product-detail-defaul/product-detail-defaul.component';
import { HomeSellerComponent } from './home-seller/home-seller.component';
import { BillSellerComponent } from './bill-seller/bill-seller.component';
import { ProfileSellerComponent } from './profile-seller/profile-seller.component';
import { HeaderSellerComponent } from './header-seller/header-seller.component';
import { ProductListSellerComponent } from './product-list-seller/product-list-seller.component';
import { ProductCreateSellerComponent } from './product-create-seller/product-create-seller.component';
import { ProductUpdateSellerComponent } from './product-update-seller/product-update-seller.component';
import { ProfileBuyerEditComponent } from './profile-buyer-edit/profile-buyer-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    ProductComponent,
    FooterComponent,
    CategoryComponent,
    CarouselComponent,
    FilterComponent,
    ProductListComponent,
    ProductEditComponent,
    ProductListComponent,
    ProductDetailComponent,
    OnloadComponent,
    PageErrorComponent,
    LocalComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    EmployeeEditComponent,
    ControlProductPageComponent,
    CartComponent,
    LoginComponent,
    TestComponent,
    SignupSellerComponent,
    SignupBuyerComponent,
    HomeComponent,
    HomeManagerComponent,
    HeaderDefaultComponent,
    HeaderManagerComponent,
    ProductDetailDefaulComponent,
    BillBuyerComponent,
    ProfileDefaultComponent,
    ProfileInfoComponent,
    HomeSellerComponent,
    BillSellerComponent,
    ProfileSellerComponent,
    HeaderSellerComponent,
    ProductListSellerComponent,
    ProductCreateSellerComponent,
    ProductUpdateSellerComponent,
    ProfileBuyerEditComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environtment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    DragDropModule, //>> tạo chức năng kéo thả

    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
