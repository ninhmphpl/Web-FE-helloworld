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
import { ProductCreateComponent } from './product-create/product-create.component';
import {ReactiveFormsModule} from "@angular/forms";
import { environtment } from 'src/environments/environtment';
import { ProductUpdateComponent } from './product-update/product-update.component';

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
    ProductCreateComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductUpdateComponent
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

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
