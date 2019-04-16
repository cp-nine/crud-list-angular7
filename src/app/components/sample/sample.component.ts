import { Component, OnInit } from '@angular/core';
import { SampleduaService } from 'src/app/services/sampledua.service';
import { Customer } from 'src/app/models/customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor(private sampleDuaService: SampleduaService, private route: Router) { }

  ngOnInit() {
  }

  checkService(){
    this.sampleDuaService.loopString("A");
  }

  data: any;

  submitCustomer(dataCustomer: Customer){
    this.data = this.sampleDuaService.listCustomer(dataCustomer);
  }

  openTest(){
    this.route.navigate(['/pipes'], {queryParams:{balance: 70000}});
  }

}
