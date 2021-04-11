import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../core/pipes/pipes.module';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
  ],
  exports: [ListComponent]
})
export class SharedModule { }
