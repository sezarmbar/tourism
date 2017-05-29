import { Injectable } from '@angular/core';

@Injectable()
export class SharedDataService {
  card11:boolean;
  card12:boolean;
  card21:boolean;
  card22:boolean;

setcard11(card){
  this.card11 = card;
  localStorage.setItem('card11', card);
}
setcard12(card){
  this.card12 = card;
  localStorage.setItem('card12', card);
}
setcard21(card){
  this.card21 = card;
  localStorage.setItem('card21', card);
}
setcard22(card){
  this.card22 = card;
  localStorage.setItem('card22', card);
}
 getcard11(){
    return JSON.parse(localStorage.getItem('card11'));
  }
getcard12() {
    return JSON.parse(localStorage.getItem('card12'));
  }
getcard21() {
    return JSON.parse(localStorage.getItem('card21'));
  }
getcard22() {
    return JSON.parse(localStorage.getItem('card22'));
  }


  constructor() { }

}
