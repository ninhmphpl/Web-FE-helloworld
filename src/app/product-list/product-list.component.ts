import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { ProductListPageService } from '../service/product-list-page.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{

  constructor(
    public pageService : ProductListPageService,
    public categoryService : CategoryService,
  ){}

  ngOnInit(): void {
    this.pageService.getListProduct(0);
  }


}