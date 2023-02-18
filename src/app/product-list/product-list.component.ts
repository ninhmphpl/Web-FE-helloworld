import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environtment, ROLE } from 'src/environments/environtment';
import { RoleService } from '../service/role.service';
import { APIAny } from '../service/api-any.service';
import { CategoryService } from '../service/category.service';
import { ProductListPageService } from '../service/product-list-page.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  constructor(
    public pageService: ProductListPageService,
    public categoryService: CategoryService,
    private activeRouter: ActivatedRoute,
    public roleService : RoleService,
  ) { }

  ngOnInit(): void {
    this.pageService.getListProduct(0);
    this.categoryService.getAllCategory();
    this.roleService.getRoleByParam(
      this.activeRouter.snapshot.paramMap.get("role")
    )
  }

}