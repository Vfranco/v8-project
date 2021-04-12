import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Stuff } from 'src/app/core/interfaces/stuffs.interface';
import { SearchService } from 'src/app/core/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  inputSearch = new FormControl();
  keywords: string[] = [];
  mockData: Array<Stuff> = [];
  search$: Observable<string[]>;
  isTyping: boolean = true;
  isData: number = 0;
  toHighLight: string = '';
  subscription: Subscription = null;

  constructor(private core: SearchService) { }

  ngOnInit(): void {
    this.initializeFormSearch();
    this.getMockData();
  }

  getMockData(): void {
    this.subscription = this.core.getData().subscribe(data => {
      this.keywords = Object.keys(data);
    });
  }

  initializeFormSearch(): void {
    this.search$ = this.inputSearch.valueChanges.pipe(startWith(''), map((value) => this.filterValue(value)));
  }

  filterValue(filterValue: string): string[] {
    this.toHighLight = filterValue;
    this.isTyping = (filterValue.length > 0) ? false : true;
    return this.keywords.filter(value => value.toLocaleLowerCase().includes(filterValue));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
