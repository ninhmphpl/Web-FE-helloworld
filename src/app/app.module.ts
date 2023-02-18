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
import { ProductUpdateComponent } from './product-update/product-update.component';
import { OnloadComponent } from './onload/onload.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { LocalComponent } from './local/local.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

// import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { EmployeeDetailComponent } from './employee-detail/employee-detail-component.service';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SignInSellerComponent } from './sign-in-seller/sign-in-seller.component';

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
    ProductUpdateComponent,
    OnloadComponent,
    PageErrorComponent,
    LocalComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    EmployeeEditComponent,
    SignInSellerComponent,

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
