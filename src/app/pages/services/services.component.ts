import { Component } from '@angular/core';
import { SERVICES } from '../../core/content';
import { SectionLabelComponent } from '../../shared/section-label/section-label.component';
import { ServiceCardComponent } from '../../shared/service-card/service-card.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [SectionLabelComponent, ServiceCardComponent],
  template: `
    <section class="bg-brand-cream py-16 md:py-24">
      <div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div class="mb-12 max-w-2xl">
          <app-section-label label="Our Services" class="mb-4 block" />
          <h1 class="mb-4 font-serif text-4xl text-brand-black md:text-5xl">
            Care that shows from the curb.
          </h1>
          <p class="text-base leading-relaxed text-brand-muted">
            From regular lawn maintenance and landscaping to tree removal, spraying applications,
            and much more—every job is built around dependable workmanship you can count on.
          </p>
        </div>

        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          @for (service of services; track service.number) {
            <app-service-card [service]="service" [useDetail]="true" />
          }
        </div>
      </div>
    </section>
  `,
})
export class ServicesComponent {
  readonly services = SERVICES;
}
