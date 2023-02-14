import { HttpHeaders, HttpParams } from "@angular/common/http";
import { ErrorLoader } from "src/app/service/onload.service";

export interface HttpOptions {
  headers?: HttpHeaders | { [header: string]: string | string[] },
  // observe?: 'body' | 'events' | 'response',
  params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean> },
  reportProgress?: boolean,
  // responseType?: 'arraybuffer'|'blob'|'json'|'text',
  withCredentials?: boolean,
}

export const environtment = {
  url: "http://localhost:8080",
  role: "EMPLOYEE",
  token: "no Token",
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

export const errorLoader : ErrorLoader[] = [
  {status : 400 , name : "Request không hợp lệ", path : "/error", description : "Không có chi tiết về vấn đề này"},
  {status : 500 , name : "Đã xảy ra lỗi ở phía sever", path : "/error", description : "Không có chi tiết về vấn đề này"},
  {status : 404 , name : "Không tìm thấy địa chỉ", path : "/error", description : "Không có chi tiết về vấn đề này"},
  {status : 403 , name : "Không có quyền truy cập vào trang web", path : "/error", description : "Không có chi tiết về vấn đề này"},
]
