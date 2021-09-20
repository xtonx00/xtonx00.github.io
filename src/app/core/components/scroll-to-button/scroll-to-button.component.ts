import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-scroll-to-button',
  templateUrl: './scroll-to-button.component.html',
  styleUrls: ['./scroll-to-button.component.scss']
})
export class ScrollToButtonComponent implements OnInit {

  @Input() nameToPass : string;

  constructor() {
    this.nameToPass = "";
  }

  ngOnInit(): void {
  }

  scrollToBottom(): void {
    var scrollingElement = (document.scrollingElement || document.body);
    scrollingElement.scrollTop = scrollingElement.scrollHeight;

  }
}
