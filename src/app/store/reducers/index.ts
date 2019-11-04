import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { CatalogState, productReducer } from './catalog.reducer';

export interface State {
  products: CatalogState;
}

export const reducers: ActionReducerMap<State> = {
  products: productReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
