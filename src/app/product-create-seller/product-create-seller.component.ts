import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {upFileArray} from "../../environments/firebase";
import {FireBaseService} from "../service/fire-base.service";
import {environtment} from "../../environments/environtment";
import {CategoryService} from "../service/category.service";
import {APIAny} from "../service/api-any.service";

@Component({
  selector: 'app-product-create-seller',
  templateUrl: './product-create-seller.component.html',
  styleUrls: ['./product-create-seller.component.scss']
})
export class ProductCreateSellerComponent implements OnInit{

  constructor(
    private bf: FormBuilder,
    public fire: FireBaseService,
    public categoryService: CategoryService,
    public api : APIAny,

  ) {
  }

  ngOnInit(): void {
    this.categoryService.getAllCategory()
  }

  formCreate = this.bf.group({
    id: 0,
    name: ['', [Validators.required, Validators.maxLength(100)]],
    price: [0, [Validators.required]],
    description: ['', [Validators.required, Validators.maxLength(2000)]],
    quantity: [0, [Validators.required]],
    category: this.bf.group({
      name: '',
      id: ['', [Validators.required]]
    }),
    status: this.bf.group({
      name: '',
      id: 0
    })
  })

  getValue(action: any) {
    let productDetail: any = this.formCreate.value;
    upFileArray(this.fire.files, () => {
      let urlImg = [];
      for (let file of this.fire.files) {
        urlImg.push({name: file.url})
      }
      productDetail.picture = urlImg;
      productDetail.description = this.htmlEscape(productDetail.description)
      console.log(productDetail);

      action(productDetail)
    })
  }

  htmlEscape(str: any) {
    return $('<div/>').text(str).html();
  }

  onSubmitSeller() {
    if (this.formCreate.valid) {
      this.getValue((data : any)=>{
        let url = environtment.url + "/seller/product"
        this.api.postMapping(url, data, (data1 : any)=>{
          console.log(data1)
        })
      })
    }
  }


}
