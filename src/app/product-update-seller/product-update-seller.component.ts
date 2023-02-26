import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {FireBaseService} from "../service/fire-base.service";
import {CategoryService} from "../service/category.service";
import {APIAny} from "../service/api-any.service";
import {upFileArray} from "../../environments/firebase";
import {environtment} from "../../environments/environtment";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-update-seller',
  templateUrl: './product-update-seller.component.html',
  styleUrls: ['./product-update-seller.component.scss']
})
export class ProductUpdateSellerComponent {

  id : any
  constructor(
    private bf: FormBuilder,
    public fire: FireBaseService,
    public categoryService: CategoryService,
    public api: APIAny,
    private routerActive: ActivatedRoute,
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

  onSubmitSeller() {
    if (this.formUpdate.valid) {
      this.getValue((data: any) => {
        let url = environtment.url + "/seller/product"
        this.api.putMapping(url, data, (data1: any) => {
          console.log(data1)
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
