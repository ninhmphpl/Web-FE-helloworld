import { Injectable } from '@angular/core';
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }
  validatorBirth(event: any) {
    let date = event.target.value
    alert(date)
    let eighteenYearsAgo = moment().subtract(18, "years");
    let birthday = moment(date);
    if (!birthday.isValid()) {
      alert("invalid date");
    } else if (eighteenYearsAgo.isAfter(birthday)) {
      alert("okay, you're good");
    } else {
      alert("sorry, no");
    }
  }
}
