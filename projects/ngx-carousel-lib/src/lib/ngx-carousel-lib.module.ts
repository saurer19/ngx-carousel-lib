import { NgModule } from '@angular/core';
import { NgxCarouselLibComponent } from './ngx-carousel-lib.component';
import { CommonModule } from '@angular/common';
import { ThumbnailSelectComponent } from './thumbnail-select/thumbnail-select.component';
import { CarouselWrapperComponent } from './carousel-wrapper/carousel-wrapper.component';
import { ButtonControlComponent } from './button-control/button-control.component';

@NgModule({
  declarations: [
    NgxCarouselLibComponent,
    ThumbnailSelectComponent,
    CarouselWrapperComponent,
    ButtonControlComponent
  ],
  imports: [CommonModule],
  exports: [NgxCarouselLibComponent],
})
export class NgxCarouselLibModule {}
