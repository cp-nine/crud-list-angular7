import { Injectable, Input } from '@angular/core';
import { SampleService } from './sample.service';
import { Customer } from '../models/customer';
// import { CUSTOMERS } from '../models/mock-customer';

@Injectable({
  providedIn: 'root'
})
export class SampleduaService {

  // @Input()
  // customers = CUSTOMERS; // menggunakan costant dari luar (mock-customer) yang memiliki bentuk list
  customers:Customer[] = [];
  

  constructor(private sampleService: SampleService) { }

  loopString(a: string){
    let text: string="";
    for (let index = 0; index < this.sampleService.getNumber(); index++) {
      text += a;    
    }

    alert(text);
  }

  listCustomer(dataCustomer: Customer){

    this.customers.push(dataCustomer);

    return this.customers;

  }

}
