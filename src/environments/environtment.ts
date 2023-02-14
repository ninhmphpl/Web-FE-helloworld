import {HttpHeaders, HttpParams} from "@angular/common/http";

export interface HttpOptions {
  headers?: HttpHeaders | { [header: string]: string | string[] },
  // observe?: 'body' | 'events' | 'response',
  params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean> },
  reportProgress?: boolean,
  // responseType?: 'arraybuffer'|'blob'|'json'|'text',
  withCredentials?: boolean,
}

export const environtment = {
    url : "http://localhost:8080",
    role : "EMPLOYEE",
    token : "no Token",
    firebaseConfig: {
      apiKey: "AIzaSyAunDHJ-xdqfOP75d5FZrWKFXpvRHyKw84",
      authDomain: "product-2023.firebaseapp.com",
      projectId: "product-2023",
      storageBucket: "product-2023.appspot.com",
      messagingSenderId: "110504742968",
      appId: "1:110504742968:web:face4d722781780f6f16cd",
      measurementId: "G-Y5TVVQ4178"
    }
}
