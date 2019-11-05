import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromCatalog from '../../store/reducers/catalog.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CatalogEffect } from 'src/app/store/effects/catalog.effect';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('catalog', fromCatalog.catalogReducer),
    EffectsModule.forFeature([CatalogEffect])
  ]
})
export class CatalogModule {}
