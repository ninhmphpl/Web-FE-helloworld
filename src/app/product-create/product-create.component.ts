import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormArray, FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {ProductCreateService} from "../service/product-create.service";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent {

  constructor(
    public service: ProductCreateService,
    private bf : FormBuilder
  ) {
  }

  // createForm = new FormGroup({
  //
  //   name: new FormControl(""),
  //   price: new FormControl(""),
  //   avatar: new FormControl(""),
  //   description: new FormControl(""),
  //   quantity: new FormControl(""),
  //   picture: new FormArray([]),
  //   category: new FormGroup({
  //     name: new FormControl("")
  //   }),
  // })

  formCreate = this.bf.group({
    name : ['' , [Validators.required]],
    price : [0 , [Validators.required]],
    avatar : ['' , [Validators.required]],
    description : ['' , [Validators.required]],
    quantity : [0 , [Validators.required]],
    category : [this.bf.group({
      name : ''
    }), Validators.required]
  })

    create() {
      if (!this.formCreate.valid){
        let a : any = this.formCreate.value;
        this.service.addProductDetail(a)
      }
    }



}
