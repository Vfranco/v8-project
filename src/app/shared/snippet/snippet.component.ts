import { Component, Input, OnInit } from '@angular/core';
import { Stuff } from 'src/app/core/interfaces/stuffs.interface';

@Component({
  selector: 'app-snippet',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.scss'],
  host: {
    class: 'snippet mt-10 mb-7'
  }
})
export class SnippetComponent implements OnInit {

  @Input() data: Stuff;

  constructor() { }

  ngOnInit(): void {

  }
}
