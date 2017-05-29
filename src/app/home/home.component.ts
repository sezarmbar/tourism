import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared/shared-data.service';

@Component({
  selector: 'tour-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 card11:boolean;
  card12:boolean;
  card21:boolean;
  card22:boolean;

  constructor(private sharedData: SharedDataService) { }

  ngOnInit() { 
    this.card11 = this.sharedData.getcard11();
    this.card12 = this.sharedData.getcard12();
    this.card21 = this.sharedData.getcard21();
    this.card22 = this.sharedData.getcard22();
  }
  setcard11(value) {
    this.card11 = value;
    this.sharedData.setcard11(value);
  }
  setcard12(value) {
    this.card12 = value;
    this.sharedData.setcard12(value);
  }
  setcard21(value) {
    this.card21 = value;
    this.sharedData.setcard21(value);
  }
  setcard22(value) {
    this.card22 = value;
    this.sharedData.setcard22(value);
  }
}
