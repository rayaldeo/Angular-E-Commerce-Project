import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { Produce } from '../api/Produce';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(private server:ServerService) { }

  public events: Produce[]=[];
  currentProduce:Produce;

  ngOnInit(){

    this.server.getProduce().subscribe(data => {console.log(this.events=data)});

  }

}
