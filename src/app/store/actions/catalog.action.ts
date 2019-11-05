import { createAction, props } from '@ngrx/store';
import { Product } from '../../models/product.model';

// export const ADD_PRODUCT = '[PRODUCT] Add Item';
// export const EDIT_PRODUCT = '[PRODUCT] Edit Item';
// export const DELETE_PRODUCT = '[PRODUCT] Delete Item';

export const loadProducts = createAction('[CATALOG] Load Items');
export const loadProductsSuccess = createAction(
  '[CATALOG] Load Items Successful',
  props<{ data: Product[] }>()
);

export const addProduct = createAction(
  '[CATALOG] Add Item',
  props<{ product: Product }>()
);
