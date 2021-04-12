import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Stuff } from 'src/app/core/interfaces/stuffs.interface';
import { SearchService } from 'src/app/core/services/search.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, OnDestroy {

  resumeData: Array<Stuff> = [];
  limits: number = 0;
  pages: number = 1;
  key: string;
  subscription: Subscription[] = [];
  showResult: Stuff[] = [];
  currentPage: number = 0;
  nextPage: number = 5;

  constructor(private params: ActivatedRoute, private core: SearchService) { }

  ngOnInit(): void {
    this.getParam();
    this.getData();
  }

  getParam(): void {
    this.key = this.params.snapshot.paramMap.get('key');
  }

  getData(): void {
    this.subscription.push(this.core.getKeyData(this.key).subscribe((data) => {
      console.log(data);
      this.resumeData = data;
      this.showResult = (this.resumeData) ? this.resumeData.slice(this.currentPage, this.nextPage) : [];
      this.pages = Math.ceil(this.resumeData.length / 5);
      console.log(this.pages);
    }))
  }

  next(page: string): void {
    this.showResult = [];
    console.log(this.showResult);

    const index = ((parseInt(page) - 1) === 0) ? 0 : (parseInt(page) * 5) / 2;
    const results = (parseInt(page) * 5);

    this.showResult = (this.resumeData) ? this.resumeData.slice(index, results) : [];
    console.log(this.showResult, index, results);
  }

  ngOnDestroy(): void {
    this.subscription.forEach((observable) => observable.unsubscribe());
  }
}
