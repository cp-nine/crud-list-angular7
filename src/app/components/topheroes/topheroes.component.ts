import { Component, OnInit } from '@angular/core';
import { SampleService } from 'src/app/services/sample.service';

@Component({
  selector: 'app-topheroes',
  templateUrl: './topheroes.component.html',
  styleUrls: ['./topheroes.component.css']
})
export class TopheroesComponent implements OnInit {

  constructor(private sampleService: SampleService) { }

  ngOnInit() {
  }

  checkService(){
    alert(this.sampleService.getNumber());
  }

}
