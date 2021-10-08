import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public nameToPass : string = "CONTATTI";

  constructor() { }

  // ngAfterViewInit(): void {
  //   //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //   //Add 'implements AfterViewInit' to the class.
  //   window.onbeforeunload = function () {
  //     window.scrollTo(0, 0);
  //   }
  // }




  ngOnInit(): void { }

}
