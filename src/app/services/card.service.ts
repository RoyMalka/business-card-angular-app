import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Card } from '../models/Card';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class CardService {

  cardsCollection: AngularFirestoreCollection<Card>;
  cards: Observable<Card[]>;
  itemDoc: AngularFirestoreDocument<Card>;

  constructor(public afs:AngularFirestore) { 

   //this.cards = this.afs.collection('Cards').valueChanges();

   this.cardsCollection = this.afs.collection('Cards');
   this.cards = this.cardsCollection.snapshotChanges().map(changes => {
     return changes.map(a=> {
       const data =a.payload.doc.data() as Card;
       data.id = a.payload.doc.id;
       return data;
     });
   });
  
  }

  // addItem(item: Item){
  //   this.itemsCollection.add(item);
  // }
  getItems(){
    return this.cards;

  }

  getCardById(id){
    return this.cards;

  }

  // deleteItem(item: Item){
  //   this.itemDoc = this.afs.doc(`items/${item.id}`);
  //   this.itemDoc.delete();
  // }

  // updateItem(item: Item){
  //   this.itemDoc = this.afs.doc(`items/${item.id}`);
  //   this.itemDoc.update(item);
  // }
}

