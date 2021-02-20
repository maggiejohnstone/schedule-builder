import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() {
  }

  public sayHello(): void {
    console.log(`Hello, world!`);
  }


}
