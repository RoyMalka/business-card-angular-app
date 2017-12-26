import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment.prod';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';  
import { RouterModule, Routes } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemService } from './services/item.service';
import { CardService } from './services/card.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { CardComponent } from './components/card/card.component';
import { WebComponent } from './components/web/web.component';





const appRoute: Routes = [
  {path:'',component:WebComponent},
  {path:'card/:id',component:CardComponent}
]; 


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    NavbarComponent,
    AddItemComponent,
    CardComponent,
    WebComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebasecard, 'cardfs'),
    AngularFirestoreModule,
    FormsModule,
    RouterModule.forRoot(appRoute),
    MaterializeModule
  ],
  providers: [ ItemService , CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
