import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {FireBaseService} from "../service/fire-base.service";
import {CategoryService} from "../service/category.service";
import {APIAny} from "../service/api-any.service";
import {OnloadService} from "../service/onload.service";
import {upFileArray} from "../../environments/firebase";
import {environtment} from "../../environments/environtment";
import {SellerService} from "../service/seller.service";

@Component({
  selector: 'app-product-create-employee',
  templateUrl: './product-create-employee.component.html',
  styleUrls: ['./product-create-employee.component.scss']
})
export class ProductCreateEmployeeComponent {

  constructor(
    private bf: FormBuilder,
    public fire: FireBaseService,
    public categoryService: CategoryService,
    public api : APIAny,
    public onloadService : OnloadService,
    public sellerService: SellerService,

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
  message : any
  sellerMeasser : any
  onSubmitSeller() {
    this.message = ''
    this.sellerMeasser = ''
    this.onloadService.onload = true
    if (this.formCreate.valid && this.sellerService.seller) {
      this.getValue((data : any)=>{
        let url = environtment.url + '/employees/create-product/' + this.sellerService.seller.id
        this.api.postMapping(url, data, (data1 : any)=>{
          console.log(data1)
          this.onloadService.onload = false
          this.message = "Tạo sản phẩm thành công"
          this.formCreate.reset()
          this.fire.files = []
        })
      })
    }else{
      this.sellerMeasser = 'Bạn phải chọn cửaa hàng để tạo sản phẩm'
    }
  }

}
