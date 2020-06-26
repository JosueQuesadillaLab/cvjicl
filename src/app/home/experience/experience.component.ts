import { Component, OnInit  , ViewChildren, ElementRef , ViewChild  , AfterViewInit } from '@angular/core';
import {Power1, Bounce , Linear  ,  Power2  , Power4 } from 'gsap/all';

declare var TweenMax : any ; 
declare var TimelineMax : any ; 
declare var $ : any ; 
declare var ScrollMagic : any ;


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit , AfterViewInit {

  @ViewChild('panelcard' , {static: false} ) box : ElementRef;
  @ViewChildren('years') years: ElementRef;

  tl = new TimelineMax();
  controller = new ScrollMagic.Controller();

  job: number = 1;

  constructor() { }

  ngOnInit() {

  }

  showJobs( index ){

    this.job = index;

    switch ( index ) {
      case 1:
        TweenMax.to(this.box.nativeElement, 0.7 , {y: "-10px", ease:Power4.easeInOut});
        break;
      
      case 2:
          TweenMax.to(this.box.nativeElement, 0.7 , {y: "-340px", ease:Power4.easeInOut});
          break;

      case 3:
        TweenMax.to(this.box.nativeElement, 0.7 , {y: "-760px", ease:Power4.easeInOut});
        break;

      case 4:
        TweenMax.to(this.box.nativeElement, 0.7 , {y: "-1260px", ease:Power4.easeInOut});
        break;
    
      default:
        break;
    }

  }




  ngAfterViewInit(){

    this.tl
        .staggerFromTo($(".years"), 0.7 , { autoAlpha: 0 , y: "-30px", ease:Power4.easeNone} , { autoAlpha: 1 , y: "0px", ease:Power4.easeNone} , 0.1 )
        .fromTo(this.box.nativeElement , 0.7 , { autoAlpha: 0 , y: "-30px" } , { autoAlpha: 1 , y: "0px" } , "-=0.7");

    let ourScene = new ScrollMagic.Scene({
          triggerElement: '.jobs',
          triggerHook: 0.3,
          reverse: false
      })
      .setTween(this.tl)
      // .addIndicators(false)
      .addTo(this.controller);

  }


}
