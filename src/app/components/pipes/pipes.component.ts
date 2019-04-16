import { Component, OnInit } from '@angular/core';
import { RupiahPipe } from 'src/app/pipes/rupiah.pipe';
import { ActivatedRoute } from '@angular/router';

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

  ballance: number = 0;

  constructor(private rupiah: RupiahPipe,private route: ActivatedRoute) { }

  ngOnInit() {

    for (let index = 0; index < this.listUang.length; index++) {
     
      this.listUang2.push(this.rupiah.transform(this.listUang[index].uang,"$"));
      
    }
  }

  getByPath(){
    // menerima path variable
    this.route.params.subscribe(
      params => {
          const balance = params['balance'];
          this.ballance = balance;
        }
    );
  }

  getByParam(){
    // menerima query params
    this.route.queryParams.subscribe(
      params => {
          const balance = params['balance'];
          this.ballance = balance;
        }
    );
  }

}
