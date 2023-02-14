import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductCreateComponent } from "./product-create/product-create.component";

const routes: Routes = [
  {
    path: "employee", children: [
      { path: '', component: ProductListComponent },
      { path: 'product-create', component: ProductCreateComponent }
    ]
  },
  { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: '', component: ProductListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
