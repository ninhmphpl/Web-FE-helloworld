import { Component, OnInit } from '@angular/core';
import { environtment, ROLE } from 'src/environments/environtment';
import { NavService } from '../service/nav.service';
import { RoleService } from '../service/role.service';

const employee = [
  {name : "Danh sách sản phẩm", path : '/product/list/EMPLOYEE'},
  {name : "Thêm sản phẩm", path : '/product/edit/EMPLOYEE/0'},
]
const admin = [
  {name : "Danh sách nhân viên", path : '/employee'},
  {name : "Thêm nhân viên", path : '/employee/edit/0'},
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
  public choice = 0

  constructor(
    public roleService : RoleService,
    public navService : NavService
  ){}

  ngOnInit(): void {

    if(this.roleService.role == ROLE.employee || this.roleService.role == ROLE.seller){
      this.nav = employee
    }
    if(this.roleService.role == ROLE.admin){
      this.nav = admin
    }
  }

}
