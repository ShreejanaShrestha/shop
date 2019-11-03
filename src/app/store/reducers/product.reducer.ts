import * as fromProductAction from '../actions/product.action';
import { Product } from '../models/product.model';
import { createReducer, on } from '@ngrx/store';

export interface ProductState {
  products: Product[];
  selectedProduct?: number;
}
const initialState: ProductState = {
  products: []
};

const productReducer = createReducer(
  initialState,
  on(fromProductAction.addProduct, state => ({
    ...state,
    selectedProduct: undefined
  }))
);

// export function reducer(state: ProductState | undefined, action: Action) {
//   return productReducer(state, action);
// }
