import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(private server:ServerService) { }

  events: any[] =[];
  currentEvent: any = {id: null, name: '', description: '', date: new Date()};

  ngOnInit(){
    this.getEvents();
  }


  private getEvents() {
    this.server.getEvents().then((response: any) => {
      console.log('Response', response);
      });
    }

}
