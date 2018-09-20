import { ITvSeries } from '../tvSeries';
import { TvSeriesActionTypes, TvSeriesActions } from './tv-series.actions';

export interface TvSeriesState {
  tvSeries: ITvSeries[];
  error: string;
}

const initialState: TvSeriesState = {
  tvSeries: [],
  error: ''
};

export function reducer(state = initialState, action: TvSeriesActions): TvSeriesState {
  switch (action.type) {
    case TvSeriesActionTypes.LoadTvSeriesSuccess:
      return {
        ...state,
        tvSeries: action.payload,
        error: ''
      };
    case TvSeriesActionTypes.LoadTvSeriesFailure:
      return {
        ...state,
        tvSeries: [],
        error: action.payload
      };
    default:
      return state;
  }
}

