import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { MobileCallBarComponent } from './shared/mobile-call-bar/mobile-call-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MobileCallBarComponent],
  host: { class: 'flex min-h-screen flex-col' },
  template: `
    <app-header />
    <main class="flex-1">
      <router-outlet />
    </main>
    <app-footer />
    <app-mobile-call-bar />
  `,
})
export class AppComponent {}
