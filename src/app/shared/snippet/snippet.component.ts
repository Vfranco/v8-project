import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snippet',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.scss'],
  host: {
    class: 'snippet mt-10 mb-7'
  }
})
export class SnippetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
