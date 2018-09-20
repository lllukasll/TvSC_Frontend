import { TvSeriesService } from '../tv-series.service';

/* NgRx */
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as tvSeriesActions from './tv-series.actions';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class TvSeriesEffects {
  constructor(private tvSeriesSerivce: TvSeriesService,
              private actions$: Actions) { }

  @Effect()
  loadTvSeries$: Observable<Action> = this.actions$.pipe(
    ofType(tvSeriesActions.TvSeriesActionTypes.LoadTvSeries),
    mergeMap(action =>
      this.tvSeriesSerivce.getTvSeries().pipe(
        map(tvSeries => (new tvSeriesActions.LoadTvSeriesSuccess(tvSeries))),
        catchError(err => of(new tvSeriesActions.LoadTvSeriesFailure(err)))
      )
    )
  );
}
