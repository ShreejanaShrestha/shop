import {
  ActionReducerMap,
  MetaReducer,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { CatalogState, catalogReducer } from './catalog.reducer';

export interface AppState {
  catalog: CatalogState;
}

export const reducers: ActionReducerMap<AppState> = {
  catalog: catalogReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];

export const selectCatalog = createFeatureSelector<CatalogState>('catalog');

// export const selectCatalog = (state: AppState) => state.catalog;

// export const selectCatalog = (state: AppState) => state.catalog;

export const selectAllProducts = createSelector(
  selectCatalog,
  (state: CatalogState) => state.products
);
