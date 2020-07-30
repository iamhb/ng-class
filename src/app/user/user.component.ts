import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 
  public user : User;

  public typedName: string;
  public typedAge : string;
  public typedEmail :string;

  constructor() { }

  ngOnInit() { }

  // showing user entered data in console log
  showUserData(){
    console.log("in function");
    console.log(this.typedName);
    console.log(this.typedAge);
    console.log(this.typedEmail);

    // let userDummyObject = {
    //     name : this.typedName,
    //     age: this.typedAge,
    //     email : this.typedEmail,
    // };
    // console.log(userDummyObject);

    this.user = {
        name : this.typedName, 
        age: Number(this.typedAge),      
        email : this.typedEmail,
    }
    

    // console.log(this.user);
    
    
  }
}
