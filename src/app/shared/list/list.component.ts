import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() data: Observable<string[]>;
  @Input() search: string;

  isData: boolean = true;
  toHightLight: string;

  constructor() { }

  ngOnInit(): void {
    this.checkData();
  }

  checkData() {
    this.data.subscribe((data) => this.isData = (data.length > 0) ? true : false);
  }
}
