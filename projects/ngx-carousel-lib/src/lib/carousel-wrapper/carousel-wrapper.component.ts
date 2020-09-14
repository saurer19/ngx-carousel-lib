import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgxCarouselLibService } from '../ngx-carousel-lib.service';

@Component({
  selector: 'carousel-wrapper',
  styleUrls: ['./carousel-wrapper.component.scss'],
  template: `
    <div
      [ngClass]="isFullScreen ? 'fullscreen-container' : 'container'"
      [ngStyle]="{
        width: isFullScreen ? '100%' : width + 'px',
        height: isFullScreen ? '' : height + 'px'
      }"
    >
      <div class="wrapper">
        <button-control
          *ngIf="!isFullScreen"
          class="open"
          (click)="onFullScreenClick()"
        >
          []
        </button-control>
        <div class="slider-container">
          <button-control class="control prev" (click)="onPreviousClick()">
            <!-- <span class="arrow left"></span> -->
            <
          </button-control>
          <button-control class="control next" (click)="onNextClick()">
            <!-- <span class="arrow right"> </span> -->
            >
          </button-control>
          <ng-content></ng-content>
        </div>
        <thumbnail-select *ngIf="isFullScreen"></thumbnail-select>
      </div>
      <div *ngIf="isFullScreen" class="close" (click)="onFullScreenClick()">
        <button-control>x</button-control>
      </div>
    </div>
  `,
})
export class CarouselWrapperComponent implements OnInit {
  @Input() width = 500;
  @Input() height = 300;
  @Input() slides;
  @Input() currentSlide: number;

  public isFullScreen = true;
  constructor(public ngxCarouselLibService: NgxCarouselLibService) {}

  ngOnInit() {}
  onPreviousClick() {
    this.ngxCarouselLibService.onPreviousClick(this.currentSlide);
  }
  onNextClick() {
    this.ngxCarouselLibService.onNextClick(this.currentSlide);
  }
  onFullScreenClick() {
    this.isFullScreen = !this.isFullScreen;
  }
}
