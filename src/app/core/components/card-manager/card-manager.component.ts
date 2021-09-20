import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-card-manager',
  templateUrl: './card-manager.component.html',
  styleUrls: ['./card-manager.component.scss']
})
export class CardManagerComponent implements OnInit {

  public projects: any = [];


  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {

    this.httpClient.get("/assets/db.json")
      .pipe(tap(data => {
        // console.log(data);
        this.projects = data;
      }))
      .subscribe()



  }

}
