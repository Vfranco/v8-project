import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  @Input() data: Observable<string[]>;
  @Input() search: string;

  isData: boolean = true;
  toHightLight: string;
  subscription: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.checkData();
  }

  checkData() {
    this.subscription = this.data.subscribe((data) => this.isData = (data.length > 0) ? true : false);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
