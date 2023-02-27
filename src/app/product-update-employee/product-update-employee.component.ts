import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {FireBaseService} from "../service/fire-base.service";
import {CategoryService} from "../service/category.service";
import {APIAny} from "../service/api-any.service";
import {ActivatedRoute} from "@angular/router";
import {OnloadService} from "../service/onload.service";
import {upFileArray} from "../../environments/firebase";
import {environtment} from "../../environments/environtment";

@Component({
  selector: 'app-product-update-employee',
  templateUrl: './product-update-employee.component.html',
  styleUrls: ['./product-update-employee.component.scss']
})
export class ProductUpdateEmployeeComponent {


  id : any
  constructor(
    private bf: FormBuilder,
    public fire: FireBaseService,
    public categoryService: CategoryService,
    public api: APIAny,
    private routerActive: ActivatedRoute,
    public onloadService : OnloadService,
  ) {
  }

  ngOnInit(): void {
    this.categoryService.getAllCategory()
    this.getProductDetail()
  }

  formUpdate = this.bf.group({
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
    let productDetail: any = this.formUpdate.value;
    upFileArray(this.fire.files, () => {
      let urlImg = [];
      for (let file of this.fire.files) {
        urlImg.push({name: file.url})
      }
      productDetail.picture = urlImg;
      productDetail.description = this.htmlEscape(productDetail.description)
      productDetail.id = this.id
      console.log(productDetail);
      action(productDetail)
    })
  }

  htmlEscape(str: any) {
    return $('<div/>').text(str).html();
  }

  message : any
  onSubmitSeller() {
    this.message = ''
    this.onloadService.onload = true
    if (this.formUpdate.valid) {
      this.getValue((data: any) => {
        let url = environtment.url + "/seller/product"
        this.api.putMapping(url, data, (data1: any) => {
          console.log(data1)
          this.onloadService.onload = false
          this.message = "Cập nhật thành công"
        })
      })
    }
  }

  getProductDetail() {
    this.id = Number(this.routerActive.snapshot.paramMap.get("id"))
    let url = environtment.url + "/product/" + this.id
    this.api.getMapping(url, (data: any) => {
      this.formUpdate.patchValue(data);
      this.fire.renderFormArrayImg(data.picture)
      console.log(this.fire.files)
    })
  }
}
