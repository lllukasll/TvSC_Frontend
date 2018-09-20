import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvSeriesComponent } from './tv-series.component';
import { Routes, RouterModule } from '@angular/router';
import { DayCalendarComponent } from './calendar/components/day-calendar/day-calendar.component';
import { WeekCalendarComponent } from './calendar/components/week-calendar/week-calendar.component';
import { MonthCalendarComponent } from './calendar/components/month-calendar/month-calendar.component';
import { CalendarComponent } from './calendar/containers/calendar/calendar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TvShowHolderComponent } from './calendar/components/month-calendar/tv-show-holder/tv-show-holder.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './state/tv-series.reducer';
import { TvSeriesEffects } from './state/tv-series.effects';
import { DetailsComponent } from './details/containers/details/details.component';

const tvSeriesRoutes: Routes = [
  { path: '', component: CalendarComponent },
  { path: 'details', component: DetailsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule.forChild(tvSeriesRoutes),
    NgbModule,
    StoreModule.forFeature('tvSeries', reducer),
    EffectsModule.forFeature(
      [ TvSeriesEffects ]
    ),
  ],
  declarations: [
    TvSeriesComponent,
    DayCalendarComponent,
    WeekCalendarComponent,
    MonthCalendarComponent,
    CalendarComponent,
    TvShowHolderComponent,
    DetailsComponent]
})
export class TvSeriesModule { }
