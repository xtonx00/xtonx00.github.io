import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-background-color-handler',
  templateUrl: './background-color-handler.component.html',
  styleUrls: ['./background-color-handler.component.scss']
})
export class BackgroundColorHandlerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewChecked(): void {

    this.colorManager();

  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    window.addEventListener('scroll', () => {
      this.colorManager();
    })
  }

  colorManager(){
    const [redBg, greenBg, blueBg] = [0, 173, 181];             //background
    const [redChar, greenChar, blueChar] = [31, 36, 42];        //chars
    const backgroundHandler: any = document.querySelector('.backgroundHandler');

    const y: number = 1 + (window.scrollY || window.pageYOffset) / 150;
    let yChar: number = y * 1.75;
    if (!window.scrollY) {
      yChar = 1
    }
    const [rBg, gBg, bBg] = [redBg / y, greenBg / y, blueBg / y].map(Math.round);
    const [rChar, gChar, bChar] = [redChar * yChar, greenChar * yChar, blueChar * yChar].map(Math.round);

    backgroundHandler.style.backgroundColor = `rgb(${rBg}, ${gBg}, ${bBg})`;
    backgroundHandler.style.color = `rgb(${rChar}, ${gChar}, ${bChar})`;
  }
}
