import { Routes } from "@angular/router";
import { ResultComponent } from "./pages/result/result.component";
import { SearchComponent } from "./pages/search/search.component";

export const routeApp: Routes = [
  { path: '', component: SearchComponent },
  { path: 'result', component: ResultComponent }
];
