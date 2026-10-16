import { Component, Input } from '@angular/core';
import { BUSINESS, ServiceItem } from '../../core/content';

@Component({
  selector: 'app-service-card',
  standalone: true,
  template: `
    <article
      class="flex h-full flex-col border border-brand-soft bg-brand-white p-7 transition duration-300 hover:-translate-y-0.5 hover:shadow-soft"
    >
      <h3 class="mb-3 font-serif text-xl leading-snug text-brand-black md:text-[1.35rem]">
        {{ service.title }}
      </h3>
      <p class="mb-8 flex-1 text-sm leading-relaxed text-brand-muted">
        {{ description }}
      </p>
      <a
        [href]="phoneHref"
        class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-black transition hover:gap-3"
      >
        Call for Quote
        <span aria-hidden="true">→</span>
      </a>
    </article>
  `,
})
export class ServiceCardComponent {
  @Input({ required: true }) service!: ServiceItem;
  @Input() useDetail = false;

  readonly phoneHref = BUSINESS.phoneHref;

  get description(): string {
    return this.useDetail && this.service.detail
      ? this.service.detail
      : this.service.description;
  }
}
