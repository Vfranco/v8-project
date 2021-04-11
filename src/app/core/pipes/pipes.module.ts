import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightingPipe } from './highlighting.pipe';

@NgModule({
  declarations: [HighlightingPipe],
  imports: [
    CommonModule
  ],
  exports: [HighlightingPipe]
})
export class PipesModule { }
