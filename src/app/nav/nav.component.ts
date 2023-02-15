import { Component, OnInit } from '@angular/core';
import { environtment } from 'src/environments/environtment';

const employee = [
  {name : "Danh sách sản phẩm", path : '/employee'},
  {name : "Thêm sản phẩm", path : '/employee/product-edit/0'},
]
const admin = [
  {name : "Danh sách nhân viên", path : '/employee'},
  {name : "Thêm nhân viên", path : '/employee/product-edit/0'},
]

interface Nav {
  name : string
  path : string
}
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
  public nav : Nav[] = []
  public role! : string;
  public choice = 0

  ngOnInit(): void {
    this.role = environtment.role;
    if(this.role == "EMPLOYEE"){
      this.nav = employee
    }
    if(this.role == "ADMIN"){
      this.nav = admin
    }
  }

}
