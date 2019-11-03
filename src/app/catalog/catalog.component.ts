import { Component, OnInit } from '@angular/core';
import { Product } from '../store/models/product.model';
import { Store, State } from '@ngrx/store';
import { ProductState } from '../store/reducers/product.reducer';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.sass']
})
export class CatalogComponent implements OnInit {
  products: Product[];
  constructor(private store: Store<State>) {}

  ngOnInit() {}

  addProduct(name) {
    this.store.dispatch(addProduct('testItem', '100', 'men'));
  }
}
