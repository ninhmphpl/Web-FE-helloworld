import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {ProductCreateService} from "../service/product-create.service";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent {

  constructor(
    public service: ProductCreateService,
    private routerActive: ActivatedRoute,
    private router: Router
  ) {
  }

  createForm = new FormGroup({
    id: new FormControl,
    name: new FormControl(""),
    price: new FormControl(""),
    avatar: new FormControl(""),
    description: new FormControl(""),
    quantity: new FormControl(""),
    picture: new FormArray([]),
    category: new FormGroup({
      name: new FormControl("")
    }),
  })

    create() {
      this.service.addProductDetail(this.createForm.value)
      this.createForm.reset()
      this.router.navigate(["/"]);
    }


}
