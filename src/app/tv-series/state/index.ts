import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../../state/app.state';
import * as fromTvSeries from './tv-series.reducer';

export interface State extends fromRoot.State {
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

