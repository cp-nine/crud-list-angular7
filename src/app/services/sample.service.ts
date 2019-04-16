import { Injectable } from '@angular/core';

@Injectable()
export class SampleService {

  constructor() { }

  getNumber(){
    return 5;
  }
}
