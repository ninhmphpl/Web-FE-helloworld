import { Injectable } from '@angular/core';
import { Category } from '../model/category';
import { APIService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends APIService<Category> {
}
