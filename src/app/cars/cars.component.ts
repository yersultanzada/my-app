import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  addCarStatus = false;
  textInput = '';
  textInput2 = '';
  textInput3 = 'Default';

  addCar() {
    this.addCarStatus = true;
  }

  constructor() {
  }

  onKeyup(event: Event) {
    this.textInput = (<HTMLInputElement>event.target).value;
  }

  onKeyup2(value) {
    this.textInput2 = value;
  }

  onKeyup3(event) {
    this.textInput3 = event.target.value;
  }
}
