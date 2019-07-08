import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-c8',
  templateUrl: './c8.component.html',
  styleUrls: ['./c8.component.css']
})
export class C8Component implements OnInit {
  @Output() public parent = new EventEmitter();
  get(event) {
     this.parent.emit(event);
   }

  constructor() { }

  ngOnInit() {
  }

}
