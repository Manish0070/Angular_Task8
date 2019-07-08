import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component implements OnInit {
  public childmessage = "" ;
  public message="";
  send(message){
    this.childmessage=message;
  }
  constructor() { }

  ngOnInit() {
  }

}
