import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {

  height: number;
  weight: number;
  result: number;

  submitted = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;
    this.result = this.weight / (Math.pow(this.height / 100, 2));
  }

  reset() {
    this.height = 0;
    this.weight = 0;
  }
}
