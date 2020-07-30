import { Component, OnInit } from '@angular/core';
import {Mobile} from '../models/Mobile';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  public mobileObject : Mobile; // user defined ->  nan'ah create panathu
  public age : number;
  public name : string;


  constructor() {
      this.age = 6;
      this.name = "tamilselvan";
      this.name = "fazil";
   }

  ngOnInit() { }

}
