import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { pageRoute } from './page.routing';
import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';
@NgModule({
  declarations: [SearchComponent, ResultComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(pageRoute),
    SharedModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
