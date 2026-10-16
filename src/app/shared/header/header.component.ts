import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BUSINESS, NAV_LINKS } from '../../core/content';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass],
  template: `
    <header class="sticky top-0 z-50 bg-brand-blue">
      <div
        class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:px-12"
      >
        <a routerLink="/" class="flex shrink-0 items-center" aria-label="Son Shine Lawn Care home">
          <img
            src="/images/son-shine-logo-1-recolored.png"
            alt="Son Shine Lawn Care"
            class="h-12 w-auto sm:h-14"
          />
        </a>

        <nav class="hidden items-center gap-8 md:flex" aria-label="Primary">
          @for (link of navLinks; track link.path) {
            <a
              [routerLink]="link.path"
              routerLinkActive="text-brand-yellow"
              [routerLinkActiveOptions]="{ exact: link.path === '/' }"
              class="text-sm font-medium text-brand-white transition hover:text-brand-yellow"
            >
              {{ link.label }}
            </a>
          }
        </nav>

        <div class="flex items-center gap-3">
          <a
            [href]="phoneHref"
            class="hidden items-center gap-2 rounded-md bg-brand-yellow px-4 py-2.5 text-sm font-semibold text-brand-black transition hover:brightness-95 sm:inline-flex"
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
            Call for a Free Quote
          </a>

          <button
            type="button"
            class="inline-flex h-10 w-10 items-center justify-center text-brand-white md:hidden"
            [attr.aria-expanded]="menuOpen"
            aria-controls="mobile-nav"
            aria-label="Toggle menu"
            (click)="menuOpen = !menuOpen"
          >
            <span class="sr-only">Menu</span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              @if (!menuOpen) {
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" />
              } @else {
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" />
              }
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        class="border-t border-white/10 md:hidden"
        [ngClass]="menuOpen ? 'block' : 'hidden'"
      >
        <nav class="flex flex-col gap-1 px-5 py-4" aria-label="Mobile">
          @for (link of navLinks; track link.path) {
            <a
              [routerLink]="link.path"
              routerLinkActive="text-brand-yellow"
              [routerLinkActiveOptions]="{ exact: link.path === '/' }"
              class="py-2 text-sm font-medium text-brand-white"
              (click)="menuOpen = false"
            >
              {{ link.label }}
            </a>
          }
          <a
            [href]="phoneHref"
            class="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-brand-yellow px-4 py-3 text-sm font-semibold text-brand-black"
            (click)="menuOpen = false"
          >
            Call for a Free Quote
          </a>
        </nav>
      </div>
    </header>
  `,
})
export class HeaderComponent {
  readonly navLinks = NAV_LINKS;
  readonly phoneHref = BUSINESS.phoneHref;
  menuOpen = false;
}
