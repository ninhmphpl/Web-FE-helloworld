import { Component } from '@angular/core';
import { ProductListPageService } from '../service/product-list-page.service';

@Component({
  selector: 'app-control-product-page',
  templateUrl: './control-product-page.component.html',
  styleUrls: ['./control-product-page.component.scss']
})
export class ControlProductPageComponent {
  constructor(
    public pageService : ProductListPageService
  ){}
}
