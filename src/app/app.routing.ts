import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

export const appRoute: Routes = [
  { path: '', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoute)
  ]
})
export class AppRouting { }
