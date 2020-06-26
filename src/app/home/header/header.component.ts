import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import {Power1, Bounce , Linear  ,  Power2  , Elastic } from 'gsap/all';
import { interval, Subscription } from 'rxjs';

declare var TimelineMax : any ; 

const secondsCounter = interval(300);

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit , AfterViewInit  {

  @ViewChild('developer' , {static: false} ) title1 : ElementRef;
  @ViewChild('frontend' , {static: false} ) title2 : ElementRef;
  @ViewChild('backend' , {static: false} ) title3 : ElementRef;
  @ViewChild('name' , {static: false} ) name : ElementRef;
  @ViewChild('cdmx' , {static: false} ) cdmx : ElementRef;
    
  tl = new TimelineMax();

  year: any = 1988 ;
  subscriptionYear : Subscription ; 
  
  constructor() { }

  ngOnInit() {


    this.subscriptionYear = secondsCounter.subscribe( n => {
      ++this.year;
      if( this.year == 2020 ){
        this.subscriptionYear.unsubscribe();
      }
    });


  }


  ngAfterViewInit(){
  
      this.tl
        .set(this.title2.nativeElement , { x: "20%"})
        .fromTo(this.title1.nativeElement, 1.8 , { autoAlpha: 0 , y: "-200px"} , { autoAlpha: 1 , y: "0px"} , "tween")
        .fromTo(this.title2.nativeElement, 1.8 , { autoAlpha: 0 , y: "200px"} , { autoAlpha: 1 , y: "0px" , delay: 0.4} , "tween")
        .fromTo(this.title3.nativeElement, 1.2, {  autoAlpha: 0 , x: "400px"} , {  autoAlpha: 1 , x: "0px" , ease:Elastic.easeOut}, "moveleft")
        .to(this.title2.nativeElement,1 , { display:"inline-block" , x: "0px" , ease:Elastic.easeOut } , "moveleft")        
        .fromTo(this.name.nativeElement, 0.5 , { autoAlpha: 0 , y: "20px"} , { autoAlpha: 1 , y: "0px" } , "-=0.9")
        .fromTo(this.cdmx.nativeElement, 0.5 , { autoAlpha: 0 , y: "-20px"} , { autoAlpha: 1 , y: "0px" } , "-=0.9")
      ;

  }


 

}
