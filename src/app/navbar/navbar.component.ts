import { Component, OnInit } from '@angular/core';

import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('menuTrigger', [
      state('open', style({
        opacity: '1',
        height: '120px'
      })),
      state('closed', style({
        opacity: '0',
        height: '0'
      })),
      transition('closed => open', animate('200ms ease-in')),
      transition('open => closed', animate('100ms ease-out'))
    ])
  ]
})
export class NavbarComponent implements OnInit {
  appName = 'Angular 6 / Bootstrap 4 demo';

  isCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

}
