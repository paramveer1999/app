import { Injectable, Input } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }
  @Input() city:string; 
  url="https://community-open-weather-map.p.rapidapi.com/weather?q="

getContacts(){
  let httpHeaders=new HttpHeaders({
    "x-rapidapi-key": "aef09fab79msheb6d7a83aa0ce99p16b7ebjsnbd27587bbf42",
    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"

  });
  return this.http.get(this.url+`${this.city}`,{headers:httpHeaders}); 
 


}

 


 

}
