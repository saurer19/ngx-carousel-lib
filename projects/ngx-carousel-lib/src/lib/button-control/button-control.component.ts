import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'button-control',
  template:`
  <button>
    <ng-content></ng-content>
  </button>
  `,
  styleUrls:['./button-control.component.scss']
})

export class ButtonControlComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
