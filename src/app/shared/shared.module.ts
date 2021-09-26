import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
  ],
  imports: [
    // vendor
    CommonModule,
    RouterModule
  ],
  exports: [
    //vendor
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
