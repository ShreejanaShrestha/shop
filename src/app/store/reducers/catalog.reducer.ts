import * as fromProductAction from '../actions/catalog.action';
import { Product } from '../../models/product.model';
import { createReducer, on } from '@ngrx/store';
import { Action } from 'rxjs/internal/scheduler/Action';

export interface CatalogState {
  catalog: Product[];
}
const initialState: CatalogState = {
  catalog: [{ title: 'item1', price: '100', category: 'men' }]
};

export const productReducer = createReducer(
  initialState,
  on(fromProductAction.addProduct, state => ({
    ...state
  }))
);

// export function reducer(state: CatalogState | undefined, action: Action) {
//   return productReducer(state, action);
// }
