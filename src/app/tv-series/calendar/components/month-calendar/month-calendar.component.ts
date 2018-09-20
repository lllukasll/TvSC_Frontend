import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { CalendarDate } from '../../containers/calendar/calendarDate';
import { Moment } from 'moment';
import * as moment from 'moment';
import { ITvSeries } from '../../../tvSeries';

@Component({
  selector: 'app-month-calendar',
  templateUrl: './month-calendar.component.html',
  styleUrls: ['./month-calendar.component.scss']
})
export class MonthCalendarComponent implements OnInit {
  @Input() dayNames: any[];
  @Input() weeks: CalendarDate[][];
  @Input() sortedDates: CalendarDate[];
  @Input() currentDate: Moment;
  @Input() tvSeriesArray: ITvSeries[];
  @Output() prevMonth = new EventEmitter<void>();
  @Output() nextMonth = new EventEmitter<void>();

  setPrevMonth(): void {
    this.prevMonth.emit();
  }

  setNextMonth(): void {
    this.nextMonth.emit();
  }

  isSelectedMonth(date: moment.Moment): boolean {
    return moment(date).isSame(this.currentDate, 'month');
  }

  getDayTvSeries(day: number, month: number, year: number) {
    this.tvSeriesArray.map(x => x.date = moment(x.date));
    return this.tvSeriesArray.filter(x => x.date.year() === year &&
                                     x.date.month() === month &&
                                     x.date.date() === day);
  }

  constructor() {
    this.tvSeriesArray = [];
  }

  ngOnInit() {
  }

}
