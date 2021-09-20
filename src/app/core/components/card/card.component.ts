import { ProjectDto } from '../models/project-dto.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() project: ProjectDto;
  public imgSrc: string = "https://via.placeholder.com/1024x576";

  constructor() {
    this.project = new ProjectDto({});
  }

  ngOnInit(): void { }

}
