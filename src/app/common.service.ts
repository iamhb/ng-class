import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// detail
export class CommonService {
  
    constructor() { }
  
    value : number = 0;

  // increment value by 1
  increaseValue(){
    this.value = this.value + 1;
  }

  // decrement value by 1
  decreaseValue(){
    this.value = this.value - 1;
  }
}
