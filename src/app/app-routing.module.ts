import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductCreateComponent } from "./product-create/product-create.component";
import { PageErrorComponent } from './page-error/page-error.component';
import {AdminDisplayEmployeeComponent} from "./admin-display-employee/admin-display-employee.component";
import {AdminComponent} from "./admin/admin.component";
import {DetailEmployeeComponent} from "./detail-employee/detail-employee.component";
import {FormEmployeeComponent} from "./form-employee/form-employee.component";

const routes: Routes = [
  {
    path: "employee", children: [
      { path: '', component: ProductListComponent },
      { path: 'product-edit/:id', component: ProductCreateComponent }
    ]
  },
  {path : 'product-detail/:id', component: ProductDetailComponent },
  {path : 'error' , component: PageErrorComponent},
  {path : 'search' , component : AdminDisplayEmployeeComponent},
  {path : 'detail/:id',component : DetailEmployeeComponent },
  {path : 'formcreate/:id',component : FormEmployeeComponent },
  {path : '', component: ProductListComponent },
  {path : '', component : AdminComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
