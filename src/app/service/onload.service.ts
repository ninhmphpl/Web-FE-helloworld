import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { errorLoader } from 'src/environments/environtment';

export interface ErrorLoader{
  status? : number;
  name? : string;
  path? : string;
  description? : string;
}

@Injectable({
  providedIn: 'root'
})
export class OnloadService {
  onload = false
  error! : ErrorLoader

  constructor(
    private router : Router,
    private routerActive : ActivatedRoute
  ) {}
  
  errorRender(status : number){
    this.onload = false
    for (let err of errorLoader){
      if (status === err.status) {
        this.error = err
        this.router.navigate([err.path])
      }
    }
  }
}
