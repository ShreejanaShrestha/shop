import * as fromCatalogAction from '../actions/catalog.action';
import { Product } from '../../models/product.model';
import { createReducer, createSelector, on, Action } from '@ngrx/store';

export interface CatalogState {
  products: Product[];
  loaded: boolean;
  loading: boolean;
}

const initialState: CatalogState = {
  products: [],
  loaded: false,
  loading: false
};

export const catalogReducer = createReducer(
  initialState,
  on(fromCatalogAction.loadProducts, state => ({ ...state, loading: true })),
  on(fromCatalogAction.loadProductsSuccess, (state, action) => ({
    loaded: true,
    loading: false,
    products: action.data
  })),
  on(fromCatalogAction.addProduct, (state, { product }) => ({
    loaded: true,
    loading: false,
    products: [...state.products, product]
  }))
);

export function reducer(state: CatalogState | undefined, action: Action) {
  return catalogReducer(state, action);
}

export const getCatalogProducts = (state: CatalogState) => state.products;
export const getCatalogLoaded = (state: CatalogState) => state.loaded;
export const getCatalogLoading = (state: CatalogState) => state.loading;
