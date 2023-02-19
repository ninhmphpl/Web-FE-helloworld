import { Component } from '@angular/core';
import { ProductListPageService } from '../service/product-list-page.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  constructor(
    public productService : ProductListPageService
  ){}

}
