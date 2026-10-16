import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { TESTIMONIALS, TestimonialSlide } from '../../core/content';

@Component({
  selector: 'app-testimonial-slider',
  standalone: true,
  imports: [NgClass],
  template: `
    <div>
      <div class="mb-8 flex items-end justify-between gap-6">
        <div>
          <div class="mb-4 flex items-center gap-3">
            <span class="block h-px w-8 bg-brand-yellow"></span>
            <span class="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
              Before &amp; After
            </span>
          </div>
          <h2 class="font-serif text-3xl text-brand-black md:text-5xl">
            Results you can see.
          </h2>
        </div>
        <div class="flex gap-2 pb-1" role="tablist" aria-label="Testimonial slides">
          @for (slide of slides; track slide.author; let i = $index) {
            <button
              type="button"
              class="h-1 w-8 transition"
              [ngClass]="i === activeIndex ? 'bg-brand-yellow' : 'bg-brand-soft'"
              [attr.aria-label]="'Show slide ' + (i + 1)"
              [attr.aria-selected]="i === activeIndex"
              (click)="goTo(i)"
            ></button>
          }
        </div>
      </div>

      <div class="grid overflow-hidden border border-brand-soft bg-brand-white lg:grid-cols-2">
        <div class="relative min-h-[280px] lg:min-h-[420px]">
          @for (slide of slides; track slide.author; let i = $index) {
            <img
              [src]="slide.image"
              [alt]="slide.imageLabel"
              class="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
              [ngClass]="i === activeIndex ? 'opacity-100' : 'opacity-0'"
            />
          }
          <span
            class="absolute bottom-5 left-5 bg-brand-yellow px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-black"
          >
            {{ active.imageLabel }}
          </span>
        </div>

        <div
          class="flex min-h-[280px] flex-col justify-between bg-brand-yellow p-8 md:p-10 lg:min-h-[420px]"
        >
          <div>
            <p class="mb-4 font-serif text-5xl leading-none text-brand-black">“</p>
            <blockquote class="font-serif text-xl leading-relaxed text-brand-black md:text-2xl">
              {{ active.quote }}
            </blockquote>
          </div>
          <div class="mt-10">
            <div class="mb-3 flex items-center gap-3">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-full border border-brand-black text-xs font-semibold text-brand-black"
              >
                {{ active.initials }}
              </div>
              <div>
                <p class="text-sm font-semibold text-brand-black">{{ active.author }}</p>
                <p class="text-xs text-brand-black/70">{{ active.role }}</p>
              </div>
            </div>
            <div class="flex gap-1 text-brand-black" aria-label="5 star rating">
              @for (star of stars; track star) {
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  />
                </svg>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class TestimonialSliderComponent implements OnInit, OnDestroy {
  readonly slides: TestimonialSlide[] = TESTIMONIALS;
  readonly stars = [1, 2, 3, 4, 5];
  activeIndex = 0;
  private timer?: ReturnType<typeof setInterval>;

  get active(): TestimonialSlide {
    return this.slides[this.activeIndex];
  }

  ngOnInit(): void {
    this.timer = setInterval(() => this.next(), 6000);
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  goTo(index: number): void {
    this.activeIndex = index;
  }

  next(): void {
    this.activeIndex = (this.activeIndex + 1) % this.slides.length;
  }
}
