import { Component, Input, OnInit } from '@angular/core';
import { NgxCarouselLibService } from './ngx-carousel-lib.service';

@Component({
  selector: 'lib-ngx-carousel-lib',
  template: `
    <ng-container *ngIf="currentSlide | async as currentSlide">
      <carousel-wrapper [slides]="slides" [currentSlide]="currentSlide.current">
        <div
          class="carousel"
          [ngStyle]="{
            height: isFullScreen ? 80 + '%' : '',
            width: isFullScreen ? 90 + '%' : ''
          }"
        >
          <ng-container *ngFor="let slide of slides; let i = index">
            <img *ngIf="i === currentSlide.current" [src]="slide.src" class="slide" />
          </ng-container>
        </div>
      </carousel-wrapper>
    </ng-container>
  `,
  styleUrls: ['./ngx-carousel-lib.component.scss'],
})
export class NgxCarouselLibComponent implements OnInit {
  @Input() height;
  @Input() width;
  @Input() slides;
  currentSlide = this.ngxCarouselLibService.currentSlide;
  isFullScreen = false;
  constructor(protected ngxCarouselLibService: NgxCarouselLibService) {}
  ngOnInit() {
    this.ngxCarouselLibService.setSlideLength(this.slides.length);
  }
}
