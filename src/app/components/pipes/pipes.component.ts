import { Component, OnInit } from '@angular/core';
import { RupiahPipe } from 'src/app/pipes/rupiah.pipe';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  listUang= [
    {uang: 100000},
    {uang: 15000},
    {uang: 16000}
  ];

  listUang2= [];

  constructor(private rupiah: RupiahPipe) { }

  ngOnInit() {
    for (let index = 0; index < this.listUang.length; index++) {
     
      this.listUang2.push(this.rupiah.transform(this.listUang[index].uang,"$"));
      
    }
  }

}
