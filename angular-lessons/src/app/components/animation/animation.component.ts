import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      state('purple', style({
        height: '300px',
        opacity: 1,
        backgroundColor: 'purple',
        color: 'white'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
      transition('* => *', [
        animate('1s 0.3s ease-in-out')
      ]),
    ]),
  ],
})
export class AnimationComponent {
  state = 'open';

  setState(state: 'open' | 'closed' | 'purple') {
    this.state = state;
  }
}
