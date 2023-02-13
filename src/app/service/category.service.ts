import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environtment, HttpOptions } from 'src/environments/environtment';
import { Category } from '../model/category';
import { APIService } from './api.service';

const url = environtment.url

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends APIService<Category> {
  categories! : Category[]
  getAllCategory(){
    let httpOptions: HttpOptions = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: environtment.token
      })
    }
    this.getArray(url + '/categories', httpOptions).subscribe(data =>
      this.categories = data
    )
  }

}
