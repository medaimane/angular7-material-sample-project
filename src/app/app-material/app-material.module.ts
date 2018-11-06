import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule,
         MatIconModule,
         MatGridListModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    MatGridListModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class AppMaterialModule { }
