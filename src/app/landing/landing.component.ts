import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  friendsSelectorCount: any;
  tipSelected = null;
  totalBill: number = 0.00;

  constructor() {}

  ngOnInit() {
  }

  selectTip(value: number): void{
    this.tipSelected = value;
  }

  changeBill(value: number): void {
    this.totalBill *= 10;
    this.totalBill += value;
  }

  delete(): void{
    this.totalBill = Math.floor(this.totalBill / 10);
  }

}
