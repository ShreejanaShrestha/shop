import { Action, createAction, props } from '@ngrx/store';
import { Product } from '../models/product.model';
import { from } from 'rxjs';

// export const ADD_PRODUCT = '[PRODUCT] Add Item';
// export const EDIT_PRODUCT = '[PRODUCT] Edit Item';
// export const DELETE_PRODUCT = '[PRODUCT] Delete Item';

export const addProduct = createAction(
  '[PRODUCT] Add Item',
  (title: string, price: string, category: string) =>
    ({ title, price, category } as Product)
);
