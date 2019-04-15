import { Component, OnInit, Input } from '@angular/core';
import { TOPHEROES } from '../../models/mock-topheroes';
import { Heroe } from 'src/app/models/heroe';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  heroes = TOPHEROES;

  constructor() { }

  ngOnInit() {
  }

  isEdit: boolean;

  @Input()
  isSelected: Heroe;
  
  nameEdit(){
    this.isEdit = !this.isEdit;
  }

  selectHeroe(heroe: Heroe){
    this.isSelected= heroe;
  }

}
