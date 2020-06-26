import { Component, OnInit  , AfterViewInit  } from '@angular/core';
import {Power1, Bounce , Linear  ,  Power2  , Power4 } from 'gsap/all';

declare var $ : any ; 
declare var TimelineMax : any ; 
declare var ScrollMagic : any ;

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit , AfterViewInit {

  skills : Array<any> = [];
  skillsdesigner : Array<any> = [];
  
  tl = new TimelineMax();
  controller = new ScrollMagic.Controller();


  constructor() {

    this.skills = [ "Angular"  , "React" , "Html5" , "Scss" , "Javascript" , "Typescript" , "Redux" , "Nodejs" , "Ajax" , "Git" , "Php" , "Wordpress"];

    this.skillsdesigner = [ "Photoshop" , "Sketch" , "Affinity Designer" , "Figma"];

  }

  ngOnInit() {
    // console.log(this.skills);
  }

  ngAfterViewInit(){

    this.tl
    .staggerFromTo($(".faDes"), 0.5 , { autoAlpha: 0 , y: "-30px", ease:Power4.easeInOut} , { autoAlpha: 1 , y: "0px", ease:Power4.easeInOut} , 0.05 , "tween")
    .staggerFromTo($(".faDev"), 0.5 , { autoAlpha: 0 , y: "-30px", ease:Power4.easeInOut} , { autoAlpha: 1 , y: "0px", ease:Power4.easeInOut} , 0.05 , "tween")

    

    let ourScene = new ScrollMagic.Scene({
        triggerElement: '.pskill',
        triggerHook: 0.3,
        reverse: false
    })
    .setTween(this.tl)
    .addTo(this.controller);
  
  }

}
