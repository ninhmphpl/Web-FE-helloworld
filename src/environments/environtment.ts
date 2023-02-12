
import { HttpHeaders, HttpParams } from "@angular/common/http";

export interface HttpOptions{
  headers?: HttpHeaders | {[header: string]: string | string[]},
  // observe?: 'body' | 'events' | 'response',
  params?: HttpParams|{[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>},
  reportProgress?: boolean,
  // responseType?: 'arraybuffer'|'blob'|'json'|'text',
  withCredentials?: boolean,
}

export const environtment = {
    url : "http://localhost:8080",
    role : "ADMIN"
}
