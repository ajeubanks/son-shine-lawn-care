import { Component } from '@angular/core';
import { BUSINESS, NEIGHBORHOODS } from '../../core/content';
import { SectionLabelComponent } from '../../shared/section-label/section-label.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionLabelComponent],
  template: `
    <!-- Mission -->
    <section class="bg-brand-white py-16 md:py-24">
      <div class="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <div>
          <app-section-label label="Our Mission" class="mb-5 block" />
          <h1 class="font-serif text-4xl leading-tight text-brand-black md:text-5xl">
            Service rooted in integrity.
          </h1>
        </div>
        <div class="border-l-2 border-brand-yellow pl-6 md:pl-10">
          <blockquote class="mb-6 font-serif text-lg leading-relaxed text-brand-black md:text-xl">
            {{ mission }}
          </blockquote>
          <p class="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
            — Son Shine Lawn Care
          </p>
        </div>
      </div>
    </section>

    <!-- Where We Work -->
    <section class="bg-brand-beige py-16 md:py-24">
      <div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div class="mb-10 max-w-2xl">
          <app-section-label label="Where We Work" class="mb-5 block" />
          <h2 class="mb-4 font-serif text-3xl text-brand-black md:text-5xl">
            Proudly serving our neighbors.
          </h2>
          <p class="text-sm leading-relaxed text-brand-muted md:text-base">
            Local service means local accountability. We proudly serve homeowners across coastal
            Georgia and nearby communities.
          </p>
        </div>
        <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          @for (place of neighborhoods; track place) {
            <li class="flex items-center gap-3 text-sm font-medium text-brand-black">
              <span
                class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-yellow"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="#000"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              {{ place }}
            </li>
          }
        </ul>
      </div>
    </section>
  `,
})
export class AboutComponent {
  readonly mission = BUSINESS.mission;
  readonly neighborhoods = NEIGHBORHOODS;
}
