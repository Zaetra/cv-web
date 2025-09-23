import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { register, SwiperContainer } from 'swiper/element/bundle';
import { Autoplay } from 'swiper/modules';
register();


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true

})
export class App implements AfterViewInit {
  protected readonly title = signal('cv-web');
   @ViewChild('swiperEl', { static: true }) swiperEl!: ElementRef<SwiperContainer>;
   @ViewChild('swiperEl2', { static: true }) swiperEl2!: ElementRef<SwiperContainer>;
  items = Array(20).fill('Skills');


ngAfterViewInit() {
      const swiperEl = this.swiperEl.nativeElement;
      const swiperEl2 = this.swiperEl2.nativeElement;

    Object.assign(swiperEl, {
      slidesPerView: 8,
      loop: true,
      speed:1000,
    });

     Object.assign(swiperEl2, {
      slidesPerView: 8,
      loop: true,
      speed:1000,
    });

    swiperEl.initialize();
    swiperEl2.initialize();
  }

}
