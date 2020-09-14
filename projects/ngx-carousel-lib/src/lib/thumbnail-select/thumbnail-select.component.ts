import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'thumbnail-select',
  template: `<div></div>`,
})
export class ThumbnailSelectComponent implements OnInit {
  @Input() slides;
  constructor() {}

  ngOnInit() {}
}
