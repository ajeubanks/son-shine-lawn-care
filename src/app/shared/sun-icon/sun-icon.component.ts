import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sun-icon',
  standalone: true,
  template: `
    <svg
      [attr.width]="size"
      [attr.height]="size"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      [attr.aria-hidden]="true"
      class="shrink-0"
    >
      <circle cx="12" cy="12" r="4" [attr.stroke]="color" stroke-width="1.75" />
      <path
        [attr.stroke]="color"
        stroke-width="1.75"
        stroke-linecap="round"
        d="M12 2v2.2M12 19.8V22M22 12h-2.2M4.2 12H2M18.36 5.64l-1.56 1.56M7.2 16.8l-1.56 1.56M18.36 18.36l-1.56-1.56M7.2 7.2L5.64 5.64"
      />
    </svg>
  `,
})
export class SunIconComponent {
  @Input() size = 28;
  @Input() color = '#FFE500';
}
