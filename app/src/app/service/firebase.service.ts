import { Injectable } from '@angular/core';
import { LRLocation, Product } from '../model/base';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) { }

  public getPlaces(): any {
    return this.db.collection('locations').valueChanges();
  }

  /**
   * @param id - id of a location document inside firebase store
   */
  public getPlace(id: string): Observable<LRLocation> {
    return this.db.doc<LRLocation>(`locations/${id}`).valueChanges();
  }

  /**
   @param id - id of a location document inside firebase store
   */
  public getProductsForPlace(id: string): Observable<Product[]> {
    return this.db.doc(`locations/${id}`).collection<Product>('products').valueChanges();
  }
}
