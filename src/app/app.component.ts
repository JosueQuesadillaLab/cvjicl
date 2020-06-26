import {Component , OnInit  } from '@angular/core';

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

 ngOnInit() {
   
 }

 ngAfterViewInit(){
   //  console.log(this.box.nativeElement);
   //  TweenMax.to(this.box.nativeElement, 1.5, {rotation:"360", ease:Linear.easeNone, repeat:-1});
 }

 doIt() {
   //  TweenMax.fromTo(this.box.nativeElement, 2, {x: 20}, {x: 440, ease: Power1.easeOut});
   //  TweenMax.fromTo(this.box.nativeElement, 2, {y: 20}, {y: 440, ease: Bounce.easeOut});
    // TweenMax.to(this.box.nativeElement, 0.1, {rotation:"0", ease:Linear.easeNone});
 }

}