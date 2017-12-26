import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';
import { ItemService } from '../../services/item.service';
import { Card } from '../../models/Card';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';
import {ViewEncapsulation} from '@angular/core';
import { Url } from 'url';
import { Pipe } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';


let _url:string;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
 // styles: [`html /deep/ body { background-image: url('${_url}'); }`],
  encapsulation: ViewEncapsulation.None,
})

export class CardComponent implements OnInit {

  url:SafeResourceUrl;
  card: Card;
  cardId:string;
  
  constructor(private cardService:CardService ,private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) { 
    this.activatedRoute.params.subscribe(params => {
      this.cardId = params['id'];
      
      this.cardService.getItems().subscribe(cards =>{
        for(let card of cards){
          if(card.id == this.cardId ){
            this.card = card;
           //console.log(this.card.backround);
           // console.log(this.card);
            this.returnImage(this.card.backround);
            //console.log(this.card.safeBackround);
            this.url =this.transform( this.card.backround);
            console.log(this.url);
          }
        }
        });
      //console.log('this '+ this.cardId); // Print the parameter to the console. 
  });
  }

  ngOnInit() {


  }


  transform(url) {
   
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  returnImage(url){
    //console.log(this.sanitizer.bypassSecurityTrustResourceUrl(`url(${url})`));
    return this.card.safeBackround= this.sanitizer.bypassSecurityTrustResourceUrl(`url(${url})`);
  }





}
