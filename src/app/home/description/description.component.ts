import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Power3 , Power4  } from 'gsap/all';

declare var TimelineMax : any ; 
declare var ScrollMagic : any ;


@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})

export class DescriptionComponent implements OnInit , AfterViewInit {

  @ViewChild('block1' , {static: false} ) block1 : ElementRef;
  @ViewChild('block2' , {static: false} ) block2 : ElementRef;
  @ViewChild('parrafo1' , {static: false} ) parrafo1 : ElementRef;
  @ViewChild('parrafo2' , {static: false} ) parrafo2 : ElementRef;
  @ViewChild('pic' , {static: false} ) pic : ElementRef;
  @ViewChild('about' , {static: false} ) about : ElementRef;
  
  
  // @ViewChild('hello' , {static: false} ) hello : ElementRef;
  // @ViewChild('title' , {static: false} ) title : ElementRef;
  // @ViewChild('code' , {static: false} ) code : ElementRef;
  


  tl = new TimelineMax();
  tlhello= new TimelineMax();
  controller = new ScrollMagic.Controller();
  controller2 = new ScrollMagic.Controller();

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit(){

    // this.tlhello
    //     .to( this.hello.nativeElement, 3, { backgroundColor:"#1a202c", opacity: 1 } , "tween")
    //     .to( this.code.nativeElement, 10, { opacity: 0.4 , force3D:false, ease: Power4.easeOut } , "tween" , "-=1")        
    //     .to( this.title.nativeElement, 1, { color:"white", ease:Power3.easeOut} , "tween")


    // let ourSceneHello = new ScrollMagic.Scene({
    //       triggerElement: '.hello',
    //       triggerHook: 0.4,
    //       reverse: true
    //   })
    //   .setTween(this.tlhello)
    //   // .addIndicators(false)
    //   .addTo(this.controller);

    this.tl
        .to(this.block1.nativeElement, 1 , { width: 0 , height: 0 } , "omg")
        .to(this.block2.nativeElement, 1 , { left : "100%" , width: 0 , height: 0 } , "omg")
        .fromTo(this.parrafo1.nativeElement, 1 , { autoAlpha: 0 , y: "20px"} , { autoAlpha: 1 , y: "0px"} , "parr")
        .fromTo(this.parrafo2.nativeElement, 1 , { autoAlpha: 0 , y: "20px" } , { autoAlpha: 1  , y: "0px" } , "parr")
        .fromTo(this.pic.nativeElement, 1 , { opacity: 0  , y: "10px"} , { opacity: 0.7  ,  y: "0px" } , "parr")
        .fromTo(this.about.nativeElement, 1 , { autoAlpha: 0  , x: "170px"} , { autoAlpha: 1 , x: "50px"  } , "parr")

    let ourScene = new ScrollMagic.Scene({
          triggerElement: '.about',
          triggerHook: 0.4,
          reverse: false
      })
      .setTween(this.tl)
      // .addIndicators(false)
      .addTo(this.controller);

  

  }


}
