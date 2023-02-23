import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { ProductListPageService } from '../service/product-list-page.service';



@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit{

  constructor(
    public categoryService: CategoryService,
    public pageService: ProductListPageService
  ) { }
  ngOnInit(): void {
    this.categoryService.getAllCategory()
  }

  


}
