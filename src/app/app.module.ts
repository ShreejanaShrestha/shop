import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CatalogModule } from './components/catalog/catalog.module';

@NgModule({
  declarations: [AppComponent, CatalogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    CatalogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
