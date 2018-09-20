import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import * as moment from 'moment';
import * as _ from 'lodash';
import { Subscription, Observable } from 'rxjs';
import { CalendarDate } from './calendarDate';
import { ITvSeries } from '../../../tvSeries';
import * as fromTvSeries from '../../../state';
import * as tvSeriesActions from '../../../state/tv-series.actions';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, AfterViewInit {
  currentDate = moment();
  dayNames = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
  weeks: CalendarDate[][] = [];
  sortedDates: CalendarDate[] = [];

  mediaQuery$: Subscription;
  activeMediaQuery: string;
  choosenCalendar: string;
  calendarChanged: boolean;
  tmp: boolean;

  tvSeriesArray$: Observable<ITvSeries[]>;
  errorMessage$: Observable<string>;

  constructor(private observableMedia: ObservableMedia, private store: Store<fromTvSeries.State>) {
    this.calendarChanged = false;
    this.choosenCalendar = 'day';
    this.tmp = true;
    this.generateCalendar();
  }

  ngOnInit() {
    this.store.dispatch(new tvSeriesActions.LoadTvSeries());
    this.tvSeriesArray$ = this.store.pipe(select(fromTvSeries.getTvSeries));
    this.errorMessage$ = this.store.pipe(select(fromTvSeries.getError));
  }

  changeCalendar(value: string): void {
    this.choosenCalendar = value;
    this.calendarChanged = true;
  }

  isToday(date: moment.Moment): boolean {
    return moment().isSame(moment(date), 'day');
  }

  isSelectedMonth(date: moment.Moment): boolean {
    return moment(date).isSame(this.currentDate, 'month');
  }

  prevMonth(): void {
    this.currentDate = moment(this.currentDate).subtract(1, 'months');
    this.generateCalendar();
  }
  nextMonth(): void {
    this.currentDate = moment(this.currentDate).add(1, 'months');
    this.generateCalendar();
  }

  generateCalendar(): void {
    const dates = this.fillDates(this.currentDate);
    const weeks: CalendarDate[][] = [];
    while (dates.length > 0) {
      weeks.push(dates.splice(0, 7));
    }
    this.weeks = weeks;
  }

  fillDates(currentMoment: moment.Moment): CalendarDate[] {
    const firstOfMonth = moment(currentMoment).startOf('month').day();
    const firstDayOfGrid = moment(currentMoment).startOf('month').subtract(firstOfMonth, 'days');
    const start = firstDayOfGrid.date();
    return _.range(start, start + 42)
            .map((date: number): CalendarDate => {
              const d = moment(firstDayOfGrid).date(date);
              return {
                today: this.isToday(d),
                mDate: d,
              };
            });
  }

  ngAfterViewInit() {
    setTimeout(_ => {
        if (this.calendarChanged === false) {
          this.mediaQuery$ = this.observableMedia.subscribe((change: MediaChange) => {
            this.activeMediaQuery = `${change.mqAlias}`;
            if (this.activeMediaQuery === 'xs' || this.activeMediaQuery === 'sm') {
              // Small screen
              this.choosenCalendar = 'day';
            } else if (this.activeMediaQuery === 'md') {
              this.choosenCalendar = 'week';
            } else {
              // Bigger screen
              this.choosenCalendar = 'month';
            }
          });
        }
      }
    );
  }

}
