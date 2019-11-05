import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { Store } from '@ngrx/store';
import { CatalogState } from '../../store/reducers/catalog.reducer';
import { addProduct, loadProducts } from '../../store/actions/catalog.action';
import * as fromStore from '../../store';
import { Observable, from } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { selectAllProducts } from '../../store';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.sass']
})
export class CatalogComponent implements OnInit {
  products$: Observable<Product[]>;
  constructor(
    private store: Store<CatalogState>,
    private db: AngularFirestore
  ) {}

  ngOnInit() {
    this.store.dispatch(loadProducts());
    this.products$ = this.store.select(selectAllProducts);
  }

  addProduct(title: string, price: string, category: string) {
    const product = {
      title,
      price,
      category
    } as Product;
    this.store.dispatch(addProduct({ product }));
  }
}
