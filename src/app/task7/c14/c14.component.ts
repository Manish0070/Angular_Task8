import { Component, OnInit } from '@angular/core';
import { SiblingInteractionServiceService } from '../../sibling-interaction-service.service';

@Component({
  selector: 'app-c14',
  templateUrl: './c14.component.html',
  styleUrls: ['./c14.component.css']
})
export class C14Component implements OnInit {

  constructor(private siblingService: SiblingInteractionServiceService) { }
  siblingMessage: any;
  ngOnInit() {
    this.siblingService.message.subscribe(data => {
         this.siblingMessage = data;
    });
  }
}
