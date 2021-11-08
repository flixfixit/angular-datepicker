import { Component } from '@angular/core';

/** @title Datepicker with custom icon */
@Component({
  selector: 'datepicker-custom-icon-example',
  templateUrl: 'datepicker-custom-icon-example.html',
  styleUrls: ['datepicker-custom-icon-example.css'],
})
export class DatepickerCustomIconExample {
  minDate: Date;
  maxDate: Date;

  constructor() {
    // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0;
  };
}

/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
