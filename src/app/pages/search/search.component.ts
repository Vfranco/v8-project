import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  inputSearch = new FormControl();
  dataExample: string[] = [
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
    'Ten',
    'Eleven',
    'Twelve',
    'Thirteen',
  ];
  search$: Observable<string[]>
  isTyping: boolean = true;
  isData: number = 0;
  toHighLight: string = '';

  constructor() { }

  ngOnInit(): void {
    this.initializeFormSearch();
  }

  initializeFormSearch(): void {
    this.search$ = this.inputSearch.valueChanges.pipe(startWith(''), map((value) => this.filterValue(value)));
  }

  filterValue(filterValue: string): string[] {
    this.toHighLight = filterValue;
    this.isTyping = (filterValue.length > 0 || filterValue !== "") ? false : true;
    return this.dataExample.filter(value => value.toLocaleLowerCase().includes(filterValue));
  }
}
