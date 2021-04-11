import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../core/pipes/pipes.module';
import { SnippetComponent } from './snippet/snippet.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    ListComponent,
    SnippetComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
  ],
  exports: [
    ListComponent,
    SnippetComponent,
    FooterComponent
  ]
})
export class SharedModule { }
