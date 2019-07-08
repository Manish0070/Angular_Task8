import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C2Component } from './c2/c2.component';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [C2Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [C2Component]
})
export class Task2Module { }
