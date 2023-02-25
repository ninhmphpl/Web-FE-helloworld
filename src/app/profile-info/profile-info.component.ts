import {Component, OnInit} from '@angular/core';
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit{
  buyer : any
  constructor(private userService : UserService) {
  }

  ngOnInit(): void {
    this.userService.getBuyerAction((data : any)=> this.buyer = data)
  }

}
