import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-tamil',
  templateUrl: './tamil.component.html',
  styleUrls: ['./tamil.component.css']
})
export class TamilComponent implements OnInit {


  constructor(public commonServ : CommonService) { }

  ngOnInit() { 
  }
  
}

// models