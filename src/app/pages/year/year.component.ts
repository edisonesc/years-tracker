import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'
@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.scss']
})
export class YearComponent implements OnInit {  
  //view
  total: number;
  progress: number;

  // internal
  dateFormat = "YYYY-MM-DD";
  dateOfBirth: {month, day, year};

  //options
  targetYear;
  viewByUnit;
  viewByValue;

  isLoading: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.viewByUnit = localStorage.getItem('view_by_unit') || 'week';
    this.viewByValue = 1;
    this.targetYear = Number(localStorage.getItem('target_year')) || 90;
    this.dateOfBirth = JSON.parse(localStorage.getItem('date_of_birth'))
    this.initTable();
  }

  initTable() {      
    this.initProgress(this.viewByUnit);
    this.initTotal(this.viewByUnit);    
  }

  initProgress(unit) {    
    this.progress = 0;
    let startDate = moment(this.formatDateOfBirth()).startOf(unit).format(this.dateFormat);
    let endDate = moment().startOf(unit).format(this.dateFormat);    
    while(startDate <= endDate) {
      this.progress += 1;
      startDate = moment(startDate).add(this.viewByValue, unit).format(this.dateFormat);
    }
  }

  initTotal(unit) {
    this.total = 0;
    let startDate = moment(this.formatDateOfBirth()).startOf(unit).format(this.dateFormat);
    let endDate = moment(this.formatDateOfBirth()).add(this.targetYear, 'years').startOf(unit).format(this.dateFormat);
    while(startDate <= endDate) {
      this.total += 1;
      startDate = moment(startDate).add(this.viewByValue, unit).format(this.dateFormat);
    }
  }

  refreshTable() {    
    //loader
    this.initTable();     
  }

  formatDateOfBirth() {
    return `${this.dateOfBirth.month}-${this.dateOfBirth.day}-${this.dateOfBirth.year}`;
  }

  getTotalAsArray() {
    return new Array(this.total);
  }

  targetYearChanged(event) {    
    this.refreshTable();
    localStorage.setItem('target_year', event.toString());
  }

  viewBy(unit, value) {
    this.viewByUnit = unit;    
    this.viewByValue = value;
    localStorage.setItem('view_by_unit', this.viewByUnit.toString());
    this.refreshTable();
  }

}
