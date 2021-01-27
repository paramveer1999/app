import { Component,OnInit, Output,OnChanges} from '@angular/core';
import {WeatherService} from './weather.service'
import {Observable} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Output() cityName:string;
  @Output() typing="";
  
  title = 'weatherapp';
  values;
  date;
  day;
  month;
  checking:number;
  constructor(private api:WeatherService){

    this.cityName="Delhi,in";
    this.sendData();
  }
  SendingData(value){
    this.cityName=value;
    console.log(this.cityName);
    this.sendData();
  }

  ngOnInit(){
 
  }
  data(event){
    this.cityName=event.target.value;
    // console.log(this.cityName);
    
  }
  
  sendData(){ 
    this.api.city=this.cityName;
    // this.api.consoleMe();
    this.api.getContacts().subscribe((data)=>{
      // console.log(data);
      console.log(data);
     
      this.setWeather(data);
    })
    
  }
  setWeather(data){
    this.values=data;
    
    let sunsetTime=new Date(this.values.sys.sunset*1000);
    this.values.sunset_time=sunsetTime.toLocaleTimeString();
    let currentDate=new Date();
    if(currentDate.getHours()<16){
      this.checking=1;

    }
    else if(currentDate.getHours()>=16&&currentDate.getHours()<=19){
      this.checking=2;
    }
    else{
      this.checking=3;
    }
    this.date=currentDate.getDate();
    this.month=currentDate.getMonth();
    
    if(this.month==0){
      this.month="January";
    }

    this.day=currentDate.getDay();
    if(this.day==1){
      this.day="Monday";
    }
    else if(this.day==2){
      this.day="Tuesday";
    }
    else if(this.day==3){
      this.day="Wednesday";
    }
    else if(this.day==4){
      this.day="Thursday";
    }
    else if(this.day==5){
      this.day="Friday";
    }
    else if(this.day==6){
      this.day="Saturday";
    }
    else if(this.day==7){
      this.day="Sunday";
    }
   
 
    this.values.isDay=(currentDate.getTime()<sunsetTime.getTime());
    this.values.temp_celcius=(this.values.main.temp-273.15).toFixed(0);
    this.values.temp_min=(this.values.main.temp_min-273.15).toFixed(0);
    this.values.temp_max=(this.values.main.temp_max-273.15).toFixed(0);
    this.values.temp_feels_like=(this.values.main.feels_like-273.15).toFixed(0);



  }
  
  
 
  
  
 
}
