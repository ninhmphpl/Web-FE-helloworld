import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { ProductCreateService } from "../service/product-create.service";
import { FireBaseService } from '../service/fire-base.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent {

  constructor(
    public service: ProductCreateService,
    private bf: FormBuilder,
    public fire : FireBaseService,
  ) {}

  formCreate = this.bf.group({
    name: ['', [Validators.required]],
    price: [0, [Validators.required]],
    avatar: ['', [Validators.required]],
    description: ['', [Validators.required]],
    quantity: [0, [Validators.required]],
    category: this.bf.group({
      name: '',
      id: ['', [Validators.required]]
    })
  })

  onSubmit() {
    if (!this.formCreate.valid) {
      let a: any = this.formCreate.value;
      console.log(a)
      this.service.addProductDetail(a)
    }
  }

  



}
