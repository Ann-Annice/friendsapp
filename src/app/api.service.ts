import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  viewCourse=()=>{
    return this.http.get("http://dummyapifriends.herokuapp.com/view")
  }

  addCourse=(data:any)=>{
    return this.http.post("https://dummyapifriends.herokuapp.com/adddata",data)

  }
}