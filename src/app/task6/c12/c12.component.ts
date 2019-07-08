import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-c12',
  templateUrl: './c12.component.html',
  styleUrls: ['./c12.component.css']
})
export class C12Component implements OnInit {
@Output() public myEvent = new EventEmitter();
  constructor() { }
  public message = '';
  
  ngOnInit() {
  }
  printMe(value){
    this.myEvent.emit(value);
  }

}
