import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../../store/app.states';
import * as fromTvSeries from './tv-series.reducer';

export interface State extends fromRoot.AppState {
  tvSeries: fromTvSeries.TvSeriesState;
}

// Selector functions
const getTvSeriesState = createFeatureSelector<fromTvSeries.TvSeriesState>('tvSeries');

export const getTvSeries = createSelector(
  getTvSeriesState,
  state => state.tvSeries
);

export const getError = createSelector(
  getTvSeriesState,
  state => state.error
);

