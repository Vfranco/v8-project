import { Routes } from "@angular/router";
import { ResultComponent } from "./result/result.component";
import { SearchComponent } from "./search/search.component";

export const pageRoute: Routes = [
  { path: '', component: SearchComponent },
  { path: 'result', component: ResultComponent }
];
