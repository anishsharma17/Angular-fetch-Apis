import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(private http:HttpClient) {
   }
   getData(){
     let url = "https://reqres.in/api/users";
     return this.http.get(url);
   }
}