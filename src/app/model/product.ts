import { ActivationStart } from "@angular/router";

export interface ProductSimple {
    id : number;
    name : string;
    price : number;
    sold : number;
    avatar : string;
    category : {
        id : number;
        name : string;
    }
}