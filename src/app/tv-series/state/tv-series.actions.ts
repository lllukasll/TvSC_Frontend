import { Action } from '@ngrx/store';
import { ITvSeries } from '../tvSeries';

export enum TvSeriesActionTypes {
  LoadTvSeries = '[TvSeries] Load',
  LoadTvSeriesSuccess = '[TvSeries] Load Success',
  LoadTvSeriesFailure = '[TvSeries] Load Fail'
}

export class LoadTvSeries implements Action {
  readonly type = TvSeriesActionTypes.LoadTvSeries;
}

export class LoadTvSeriesSuccess implements Action {
  readonly type = TvSeriesActionTypes.LoadTvSeriesSuccess;

  constructor(public payload: ITvSeries[]) { }
}

export class LoadTvSeriesFailure implements Action {
  readonly type = TvSeriesActionTypes.LoadTvSeriesFailure;

  constructor(public payload: string) { }
}

export type TvSeriesActions = LoadTvSeries
  | LoadTvSeriesFailure
  | LoadTvSeriesSuccess;
