import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { APIAny } from '../service/api-any.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuaW5oMTIzNDUiLCJpYXQiOjE2NzcwNDk5ODcsImV4cCI6ODgwNzcwNDk5ODd9.y_cI0iHPBEA8YjTo7va1MhUBFz6edL4Mc9s0PXV4Kp4"
  })
};
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit{

  constructor(
    public api : APIAny,
    public http: HttpClient,
    ){}
    header = {
      headers : new HttpHeaders().set("Authorization" , "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuaW5oMTIzNDUiLCJpYXQiOjE2NzcwNDk5ODcsImV4cCI6ODgwNzcwNDk5ODd9.y_cI0iHPBEA8YjTo7va1MhUBFz6edL4Mc9s0PXV4Kp4")
    }
  
  ngOnInit(): void {
    this.http.get('http://localhost:8080/buyer/info', this.header).subscribe((data : any)=> console.log(data));
  }
}
