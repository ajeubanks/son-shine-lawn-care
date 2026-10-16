import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  BUSINESS,
  CORE_VALUES,
  SERVICES,
} from '../../core/content';
import { SectionLabelComponent } from '../../shared/section-label/section-label.component';
import { ServiceCardComponent } from '../../shared/service-card/service-card.component';
import { SunIconComponent } from '../../shared/sun-icon/sun-icon.component';
import { TestimonialSliderComponent } from '../../shared/testimonial-slider/testimonial-slider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    SectionLabelComponent,
    ServiceCardComponent,
    SunIconComponent,
    TestimonialSliderComponent,
  ],
  template: `
    <!-- Hero -->
    <section class="relative min-h-[88vh] overflow-hidden bg-neutral-900">
      <img
        src="/images/hero-lawn.jpg"
        alt="Manicured lawn with professional mowing stripes"
        class="absolute inset-0 h-full w-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/15"></div>

      <div
        class="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-5 py-24 sm:px-8 lg:px-12"
      >
        <div class="max-w-2xl animate-[fadeUp_0.7s_ease-out]">
          <div class="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-yellow">
            <app-sun-icon [size]="16" />
            <span>Locally Owned • Quality Driven</span>
          </div>

          <h1 class="mb-6 font-serif text-4xl leading-[1.1] md:text-5xl lg:text-6xl">
            <span class="text-brand-white">Dependable, High-Quality</span>
            <span class="italic text-brand-yellow"> Lawn Care </span>
            <span class="text-brand-white">You Can Trust</span>
          </h1>

          <p class="mb-8 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            Delivering exceptional workmanship, honest communication, and reliable service to keep
            your lawn looking its best.
          </p>

          <div class="mb-14 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              [href]="phoneHref"
              class="inline-flex items-center gap-2 rounded-md bg-brand-yellow px-6 py-3.5 text-sm font-semibold text-brand-black transition hover:brightness-95"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
                  stroke="currentColor"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Call Now for an Estimate
            </a>
            <a
              routerLink="/services"
              class="text-xs font-semibold uppercase tracking-[0.16em] text-brand-white transition hover:text-brand-yellow"
            >
              Explore Our Services →
            </a>
          </div>

          <div class="flex items-center gap-3">
            <div class="flex gap-1 text-brand-yellow" aria-label="5 star rating">
              @for (star of stars; track star) {
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  />
                </svg>
              }
            </div>
            <div>
              <p class="text-sm font-semibold text-brand-white">Trusted local care</p>
              <p class="text-xs text-white/70">Done right. Every time.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What We Do -->
    <section class="bg-brand-cream py-20 md:py-24">
      <div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div class="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <app-section-label label="What We Do" class="mb-4 block" />
            <h2 class="font-serif text-3xl text-brand-black md:text-5xl">
              Care that shows from the curb.
            </h2>
          </div>
          <p class="max-w-md text-sm leading-relaxed text-brand-muted lg:justify-self-end lg:text-base">
            From lawn maintenance and landscaping to tree removal, spraying applications, and much
            more—reliable, detail-focused care with no shortcuts.
          </p>
        </div>

        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          @for (service of services; track service.number) {
            <app-service-card [service]="service" />
          }
        </div>
      </div>
    </section>

    <!-- Why Son Shine -->
    <section class="bg-brand-white">
      <div class="grid lg:grid-cols-2">
        <div class="relative min-h-[320px] lg:min-h-[560px]">
          <img
            src="/images/why-lawn.jpg"
            alt="Lush green lawn with clean mowing stripes"
            class="absolute inset-0 h-full w-full object-cover"
          />
          <span class="absolute bottom-0 left-0 h-4 w-16 bg-brand-yellow"></span>
        </div>
        <div class="flex items-center px-5 py-16 sm:px-10 lg:px-16 lg:py-20">
          <div class="max-w-lg">
            <app-section-label label="Why Son Shine" class="mb-5 block" />
            <h2 class="mb-5 font-serif text-3xl leading-tight text-brand-black md:text-5xl">
              We care for your yard like it's our own.
            </h2>
            <p class="mb-10 text-sm leading-relaxed text-brand-muted md:text-base">
              Dependability is more than showing up. It is doing the small things right, communicating
              clearly, and leaving your property better than we found it.
            </p>
            <ul class="divide-y divide-brand-soft border-y border-brand-soft">
              @for (value of values; track value.title) {
                <li class="py-5">
                  <h3 class="mb-1 text-base font-semibold text-brand-black">{{ value.title }}</h3>
                  <p class="text-sm text-brand-muted">{{ value.description }}</p>
                </li>
              }
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Before & After -->
    <section class="bg-brand-cream py-20 md:py-24">
      <div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <app-testimonial-slider />
      </div>
    </section>
  `,
  styles: [
    `
      @keyframes fadeUp {
        from {
          opacity: 0;
          transform: translateY(16px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `,
  ],
})
export class HomeComponent {
  readonly phoneHref = BUSINESS.phoneHref;
  readonly services = SERVICES;
  readonly values = CORE_VALUES;
  readonly stars = [1, 2, 3, 4, 5];
}
