import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  BUSINESS,
  NAV_LINKS,
  SERVICE_AREA_GROUPS,
} from '../../core/content';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="bg-brand-blue text-brand-white">
      <div
        class="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:px-12"
      >
        <div>
          <a routerLink="/" class="mb-4 inline-block">
            <img
              src="/images/son-shine-logo-1-recolored.png"
              alt="Son Shine Lawn Care"
              class="h-20 w-auto"
            />
          </a>
          <p class="max-w-xs text-sm leading-relaxed text-white/80">
            {{ tagline }}
          </p>
        </div>

        <div>
          <h3 class="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-white">
            Explore
          </h3>
          <ul class="space-y-2">
            @for (link of navLinks; track link.path) {
              <li>
                <a
                  [routerLink]="link.path"
                  class="text-sm text-white/70 transition hover:text-brand-yellow"
                >
                  {{ link.label }}
                </a>
              </li>
            }
          </ul>
        </div>

        <div>
          <h3 class="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-white">
            Service Area
          </h3>
          <ul class="space-y-2">
            @for (area of serviceAreas; track area) {
              <li class="text-sm text-white/70">{{ area }}</li>
            }
          </ul>
        </div>

        <div>
          <h3 class="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-white">
            Get In Touch
          </h3>
          <a
            [href]="phoneHref"
            class="mb-3 block text-lg font-semibold text-brand-yellow transition hover:brightness-95"
          >
            {{ phoneDisplay }}
          </a>
          @for (line of hours; track line) {
            <p class="text-sm text-white/70">{{ line }}</p>
          }
        </div>
      </div>

      <div class="border-t border-white/15">
        <div
          class="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-5 py-5 text-[11px] uppercase tracking-[0.14em] text-white/55 sm:flex-row sm:items-center sm:px-8 lg:px-12"
        >
          <p>© {{ year }} Son Shine Lawn Care</p>
          <p>Quality Work | Honest Service | Local Care</p>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  readonly navLinks = NAV_LINKS;
  readonly serviceAreas = SERVICE_AREA_GROUPS;
  readonly phoneDisplay = BUSINESS.phoneDisplay;
  readonly phoneHref = BUSINESS.phoneHref;
  readonly hours = BUSINESS.hours;
  readonly tagline = BUSINESS.tagline;
  readonly year = new Date().getFullYear();
}
