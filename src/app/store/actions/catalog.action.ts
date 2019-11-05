import { createAction, props } from '@ngrx/store';
import { Product } from '../../models/product.model';

// export const ADD_PRODUCT = '[PRODUCT] Add Item';
// export const EDIT_PRODUCT = '[PRODUCT] Edit Item';
// export const DELETE_PRODUCT = '[PRODUCT] Delete Item';

export const addProduct = createAction(
  '[PRODUCT] Add Item',
  props<{ product: Product }>()
);
