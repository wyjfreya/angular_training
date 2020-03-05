import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("pupu", "yan", "1@gmail.com", 50000),
    new SalesPerson("pupu2", "yan", "2@gmail.com", 60000),
    new SalesPerson("pupu3", "yan", "3@gmail.com", 70000),
    new SalesPerson("pupu4", "yan", "4@gmail.com", 80000)
  ];

  constructor() { }

  ngOnInit() {
  }

}
