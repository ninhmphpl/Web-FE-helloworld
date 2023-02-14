import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductCreateComponent } from "./product-create/product-create.component";
import { PageErrorComponent } from './page-error/page-error.component';

const routes: Routes = [
  {
    path: "employee", children: [
      { path: '', component: ProductListComponent },
      { path: 'product-edit/:id', component: ProductCreateComponent }
    ]
  },
  { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: 'error' , component: PageErrorComponent},
  { path: '', component: ProductListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
