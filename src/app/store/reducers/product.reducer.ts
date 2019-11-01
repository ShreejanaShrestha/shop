import * as fromProductAction from '../actions/product.action';

export interface ProductState {
  title: string;
  price: string;
  category: string;
}

export const initialState: ProductState = {
  title: 'title',
  price: '100',
  category: 'tops'
};

export function reducer(
  state = initialState,
  action: fromProductAction.ProductAction
): ProductState {
  switch (action.type) {
    case fromProductAction.ADD_PRODUCT: {
      return {
        ...state
      };
    }

    default:
      return state;
  }
}
