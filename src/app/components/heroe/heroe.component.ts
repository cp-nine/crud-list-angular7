import { Component, OnInit, Input, Output } from '@angular/core';
import { HEROES } from '../../models/mock-heroes';
import { Heroe } from 'src/app/models/heroe';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  @Input()
  heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }

  isEdit: boolean;
  addHeroe: boolean;

  @Input()
  isSelected: Heroe

  newHeroe = new Heroe(10, "Ikhsan Fauji", "Krew");



  nameEdit(){
    this.isEdit = !this.isEdit;
  }

  selectHeroe(heroe: Heroe){
    this.isSelected= heroe;
  }

  remove(i: number){
    this.heroes.splice(i, 1);
  }

  submitHeroe(formHeroe) {
    console.log(formHeroe);
    this.heroes.push(formHeroe);
    this.addHeroe = !this.addHeroe;
  }

  formAdd = ()=> {
    this.addHeroe = !this.addHeroe;
  }

}