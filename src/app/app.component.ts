import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-root',
  styles: [`
    :host {
      font-size: 0;
    }

    .clock {
      width: 50%;
      max-width: 480px;
      min-width: 320px;
      margin: 50px auto 0;
      border: 1px solid black;
    }
  `],
  template: `
    <div class="clock">
     <svg viewBox="-50 -50 100 100">
       <g stroke="black" stroke-width=".3">
         <circle cx="0" cy="0" [attr.r]="radius" fill="white"></circle>
         <line x1="0" y1="0" [attr.x2]="x2" [attr.y2]="y2"></line>
       </g>
       <g fill="red" stroke="red">
         <circle cx="0" cy="0" r=".5"></circle>
         <line stroke-width="1.1" x1="0" y2="0" [attr.x2]="-x2 * .4" [attr.y2]="-y2 * .4"></line>
       </g>
     </svg>
    </div>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class AppComponent implements OnInit {
  y2 = 0;
  x2 = 40;
  degree = 0;
  radius = 50;

  ngOnInit() {
    setInterval(() => {
      this.degree += 6;
      this.x2 = (this.radius - 10) * Math.cos(this.degree * Math.PI / 180);
      this.y2 = (this.radius - 10) * Math.sin(this.degree * Math.PI / 180);
    }, 1000);
  }
}
