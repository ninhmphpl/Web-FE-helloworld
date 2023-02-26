import {Component, OnInit} from '@angular/core';
import {ProductListPageService} from "../service/product-list-page.service";

@Component({
  selector: 'app-product-list-seller',
  templateUrl: './product-list-seller.component.html',
  styleUrls: ['./product-list-seller.component.scss']
})
export class ProductListSellerComponent implements OnInit{
  constructor(
    public pageService: ProductListPageService,
  ) {}

  ngOnInit(): void {
    this.pageService.getProductListSeller();
  }

}
