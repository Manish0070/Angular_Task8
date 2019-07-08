import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c10',
  templateUrl: './c10.component.html',
  styleUrls: ['./c10.component.css']
})
export class C10Component implements OnInit {
 public message = '';

  constructor() { }

  ngOnInit() {
  }
  myMessage(value) {
    this.message = value;
  }
 

}
