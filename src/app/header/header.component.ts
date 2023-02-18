import { Component, OnInit } from '@angular/core';
import { environtment } from 'src/environments/environtment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
    
  role = ''
  ngOnInit(): void {
    this.role = environtment.role
  }

}
