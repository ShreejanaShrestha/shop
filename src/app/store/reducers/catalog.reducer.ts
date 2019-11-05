import * as fromProductAction from '../actions/catalog.action';
import { Product } from '../../models/product.model';
import { createReducer, createSelector, on } from '@ngrx/store';

export interface CatalogState {
  products: Product[];
  loaded: boolean;
  loading: boolean;
}

const initialState: CatalogState = {
  products: [{ title: 'item1', price: '100', category: 'men' }],
  loaded: false,
  loading: true
};

export const catalogReducer = createReducer(
  initialState,
  on(fromProductAction.addProduct, (state, { product }) => ({
    loaded: true,
    loading: false,
    products: [...state.products, product]
  }))
);

export const getCatalogProducts = (state: CatalogState) => state.products;
export const getCatalogLoaded = (state: CatalogState) => state.loaded;
export const getCatalogLoading = (state: CatalogState) => state.loading;
