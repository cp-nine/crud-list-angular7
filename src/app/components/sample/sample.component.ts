import { Component, OnInit } from '@angular/core';
import { SampleduaService } from 'src/app/services/sampledua.service';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor(private sampleDuaService: SampleduaService) { }

  ngOnInit() {
  }

  checkService(){
    this.sampleDuaService.loopString("A");
  }

  data: any;

  submitCustomer(dataCustomer: Customer){
    this.data = this.sampleDuaService.listCustomer(dataCustomer);
  }

}
