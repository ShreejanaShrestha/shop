import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { Store, State } from '@ngrx/store';
import { CatalogState } from '../../store/reducers/catalog.reducer';
import { addProduct } from '../../store/actions/catalog.action';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.sass']
})
export class CatalogComponent implements OnInit {
  products$: Observable<Product[]>;
  constructor(private store: Store<CatalogState>) {}

  ngOnInit() {
    this.products$ = this.store
      .select<Product[]>('catalog')
      .pipe(map((state: any) => state.catalog));
  }

  addProduct(title: string, price: string, category: string) {
    this.store.dispatch(addProduct());
  }
}
