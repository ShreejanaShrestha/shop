import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, switchMap } from 'rxjs/operators';
import { CatalogService } from 'src/app/services/catalog.service';
import { EMPTY } from 'rxjs';
import { loadProducts, loadProductsSuccess } from '../actions';
import { Product } from 'src/app/models/product.model';

@Injectable()
export class CatalogEffect {
  constructor(
    private actions$: Actions,
    private catalogService: CatalogService
  ) {}

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      switchMap(() =>
        this.catalogService.getCatalog().pipe(
          map((products: Product[]) => loadProductsSuccess({ data: products })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
