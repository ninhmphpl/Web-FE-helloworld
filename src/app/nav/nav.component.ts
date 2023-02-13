import { Component, OnInit } from '@angular/core';
import { environtment } from 'src/environments/environtment';

const role = environtment.role

const employee = [
  {name : "Danh sách sản phẩm", path : '/employee'},
  {name : "Thêm sản phẩm", path : '/employee/product-create'},
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
    this.role = role;
    if(role == "EMPLOYEE"){
      this.nav = employee
    }
  }

}
