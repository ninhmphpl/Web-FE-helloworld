import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { ProductCreateService } from "../service/product-create.service";
import { FireBaseService } from '../service/fire-base.service';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit{

  constructor(
    public service: ProductCreateService,
    public categoryService : CategoryService,
    private bf: FormBuilder,
    public fire : FireBaseService,
  ) {}
  ngOnInit(): void {
    this.categoryService.getAllCategory()
  }

  formCreate = this.bf.group({
    name: ['', [Validators.required, Validators.maxLength(100)]],
    price: [0, [Validators.required]],
    description: ['', [Validators.required, Validators.maxLength(200)]],
    quantity: [0, [Validators.required]],
    category: this.bf.group({
      name: '',
      id: ['', [Validators.required]]
    })
  })

  onSubmit() {
    if (this.formCreate.valid) {
      let a: any = this.formCreate.value;
      console.log(a)
      this.service.addProductDetail(a)
    }
  }

  



}
