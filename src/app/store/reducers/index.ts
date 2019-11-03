import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { ProductState } from './product.reducer';

export interface State {
  products: ProductState;
}

export const reducers: ActionReducerMap<State> = {
  products: productReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
