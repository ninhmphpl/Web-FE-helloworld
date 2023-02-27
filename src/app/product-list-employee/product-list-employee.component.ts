import { Component } from '@angular/core';
import {ProductListPageService} from "../service/product-list-page.service";

@Component({
  selector: 'app-product-list-employee',
  templateUrl: './product-list-employee.component.html',
  styleUrls: ['./product-list-employee.component.scss']
})
export class ProductListEmployeeComponent {

  constructor(
    public pageService: ProductListPageService,
  ) {}

  ngOnInit(): void {
    this.pageService.getListProduct(0);
  }
}
