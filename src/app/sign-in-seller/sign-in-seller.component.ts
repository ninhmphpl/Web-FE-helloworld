import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environtment } from 'src/environments/environtment';
import { AddressService } from '../service/address.service';
import { APIAny } from '../service/api-any.service';
import { SignInSellerService } from '../service/sign-in-seller.service';

declare var $: any;
declare var bootstrap : any
declare var modalToggle : any

@Component({
  selector: 'app-sign-in-seller',
  templateUrl: './sign-in-seller.component.html',
  styleUrls: ['./sign-in-seller.component.scss']
})
export class SignInSellerComponent implements OnInit {
  role: string = environtment.role

  constructor(
    public serviceSeller: SignInSellerService,
    public api: APIAny,
    public serviceAddress: AddressService,
    public fb: FormBuilder,

  ) { }

  sellerForm = this.fb.group({
    phoneNumber: ["", [Validators.pattern('^0[0-9]{9}$'), Validators.required]],
    name: ["", [Validators.maxLength(100), Validators.required]],
    user: this.fb.group({
      username: ["", [Validators.pattern(/^([a-zA-Z0-9]{6,32})$/), Validators.required]],
      password: ["", [Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{6,32})$/), Validators.required]]
    }),
    repassword: ['', [Validators.required]],
    addressDetail: ['', [Validators.required]],
  })

  ngOnInit(): void {
    this.role = environtment.role;
    this.serviceAddress.getProvince()
  }

  messenger = ''
  onSubmit() {
    let modal : any = $('#exampleModal')
    let data: any = this.sellerForm.value
    let url = environtment.url + "/sigin/seller"
    if (data.user?.password != data.repassword) {
      this.messenger = "Mật khẩu bạn nhập không đúng"
      return
    }

    if (this.sellerForm.valid && !this.checkUsername && this.checkAddress()) {
      this.messenger = ''
      data.address = this.serviceAddress.address
      data.repassword = null
      data.address.detail = data.addressDetail
      data.addressDetail = null
      this.api.postMapping(url, data, (back: any) => {
        // modal.modal('toggle'); //>> npm install jquery --save
        modal.modal('show');
        // modal.modal('hide');
      })
    } else {
      this.messenger = "Thông tin của bạn chưa hợp lệ"
    }
  }

  open(){
    let a = document.getElementById("boottrap")
    a?.click()
  }


  addressMessage = ''
  checkAddress() {
    let address = this.serviceAddress.address
    if (
      address.district.id > 0 &&
      address.ward.id > 0 &&
      address.district.id > 0
    ) {
      this.addressMessage = ""
      return true
    }
    this.addressMessage = "Vui Lòng nhập địa chỉ"
    return false
  }


  checkUserName() {
    setTimeout(() => {
      let url = environtment.url + "/sigin/check-user-exist/" + this.sellerForm.controls.user.controls.username.value
      this.api.getMapping(url, (data: any) => this.checkUsername = data)
    }, 1000)
  }
  checkUsername = false





}
