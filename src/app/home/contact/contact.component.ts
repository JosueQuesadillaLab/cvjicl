import { Component, OnInit , AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {Power1, Bounce , Linear  ,  Power3  , Power4  , Sine } from 'gsap/all';

declare var TimelineMax : any ; 

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit , AfterViewInit {

  @ViewChild('carrito' , {static : false} ) carrito : ElementRef;
  @ViewChild('carrito2' , {static : false} ) carrito2 : ElementRef;


  tl = new TimelineMax({repeat : -1 });
  tl2 = new TimelineMax({repeat : -1 });

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.tl
          
          .to(this.carrito.nativeElement , 2 , { x : "-700px" , ease : Power4.easeOut })
          .to(this.carrito.nativeElement , 2 , { x: "-1240px", y : "90px", ease: Power4.easeInOut } , "-=0.6")
          .to(this.carrito.nativeElement , 4 , { x : "-3500px" , ease : Power4.easeInOut } , "-=0.6" )
    ;


    // this.tl2
          
    //       .to(this.carrito2.nativeElement , 2 , { x : "-500px" , ease : Power1.easeIn })
    //       .to(this.carrito2.nativeElement , 1 , { x: "-2140px", y : "190px", ease: Power3.easeInOut } , "-=0.2")
    //       .to(this.carrito2.nativeElement , 3 , { x : "-3500px" , y : "-190px" , ease : Power3.easeInOut } , "-=0.8" )
    // ;

  }

}
