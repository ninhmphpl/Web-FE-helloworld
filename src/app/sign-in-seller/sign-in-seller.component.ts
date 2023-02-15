import { Component, OnInit } from '@angular/core';
import { environtment } from 'src/environments/environtment';

@Component({
  selector: 'app-sign-in-seller',
  templateUrl: './sign-in-seller.component.html',
  styleUrls: ['./sign-in-seller.component.scss']
})
export class SignInSellerComponent implements OnInit{
  role! : string;
  ngOnInit(): void {
    this.role = environtment.role
  }

}
