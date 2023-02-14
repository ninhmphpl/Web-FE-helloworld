import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { ProductCreateService } from "../service/product-create.service";
import { FireBaseService } from '../service/fire-base.service';
import { CategoryService } from '../service/category.service';
import { upFileArray } from 'src/environments/firebase';
import { Router } from '@angular/router';

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
    private router : Router,
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
      let productDetail: any = this.formCreate.value;
      console.log(productDetail)
      upFileArray(this.fire.files, ()=>{
        let urlImg = [];
        for (let file of this.fire.files){
          urlImg.push({name : file.url})
        }
        productDetail.picture = urlImg;
        console.log(productDetail);
        this.service.addProductDetail(productDetail, (id : number)=>{
          this.router.navigate(["/product-detail/" + id])
        })
      })
    }
  }

  



}
