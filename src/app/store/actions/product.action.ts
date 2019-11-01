import { Action } from '@ngrx/store';
import { Product } from '../models/product';
import { from } from 'rxjs';

export const ADD_PRODUCT = '[PRODUCT] Add Item';
export const EDIT_PRODUCT = '[PRODUCT] Edit Item';
export const DELETE_PRODUCT = '[PRODUCT] Delete Item';

export class AddProductAction implements Action {
  readonly type = ADD_PRODUCT;

  constructor(public payload: Product) {}
}

export class EditProductAction implements Action {
  readonly type = ADD_PRODUCT;

  constructor(public payload: Product) {}
}

export class DeleteProductAction implements Action {
  readonly type = ADD_PRODUCT;
}

export type ProductAction =
  | AddProductAction
  | EditProductAction
  | DeleteProductAction;
