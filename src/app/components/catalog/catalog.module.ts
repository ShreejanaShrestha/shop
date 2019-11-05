import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromCatalog from '../../store/reducers/catalog.reducer';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('catalog', fromCatalog.catalogReducer)
  ]
})
export class CatalogModule {}
