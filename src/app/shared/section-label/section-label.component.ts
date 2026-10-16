import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-label',
  standalone: true,
  host: { class: 'inline-flex' },
  template: `
    <div class="flex items-center gap-3">
      <span class="block h-px w-8 shrink-0 bg-brand-yellow"></span>
      <span
        class="text-xs font-semibold uppercase tracking-[0.18em]"
        [class.text-brand-black]="tone === 'dark'"
        [class.text-brand-yellow]="tone !== 'dark'"
      >
        {{ label }}
      </span>
    </div>
  `,
})
export class SectionLabelComponent {
  @Input({ required: true }) label!: string;
  @Input() tone: 'dark' | 'yellow' | 'light' = 'dark';
}
