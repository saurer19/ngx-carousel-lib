import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NgxCarouselLibService {
  currentSlide = new BehaviorSubject<any>({ current: 0 });
  slidesLength = 0;
  onPreviousClick(prevValue) {
    const previous = prevValue - 1;
    this.setCurrentSlide(previous < 0 ? this.slidesLength - 1 : previous);
  }
  onNextClick(prevValue) {
    const next = prevValue + 1;
    this.setCurrentSlide(next === this.slidesLength ? 0 : next);
  }
  setSlideLength(slidesLength) {
    this.slidesLength = slidesLength;
  }
  private setCurrentSlide(value) {
    this.currentSlide.next({ current: value });
  }
}
