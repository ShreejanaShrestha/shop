import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  constructor(private http: HttpClient, private db: AngularFirestore) {}
  getCatalog() {
    return this.db.collection<Product>('products').valueChanges();
  }
  addProduct() {}
}
