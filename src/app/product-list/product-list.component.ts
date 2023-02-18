import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environtment, ROLE } from 'src/environments/environtment';
import { APIAny } from '../service/api-any.service';
import { CategoryService } from '../service/category.service';
import { ProductListPageService } from '../service/product-list-page.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  role: any = ''
  constructor(
    public pageService: ProductListPageService,
    public categoryService: CategoryService,
    private activeRouter: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.pageService.getListProduct(0);
    this.categoryService.getAllCategory();
    this.getRole()
  }

  getRole(): any {
    let role: any = this.activeRouter.snapshot.paramMap.get("role");
    console.log(role);

    if ((role == ROLE.employee) || (role == ROLE.seller)) {
      this.role = role
      console.log(this.role);
      environtment.role = role
    }
  }


}