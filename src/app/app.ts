import { Component, signal, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'] as any
})
export class App implements OnInit {
  protected readonly title = signal('KajitA');

  private platformId = inject(PLATFORM_ID);

  async ngOnInit(): Promise<void> {
    if (isPlatformBrowser(this.platformId)) {
      const { inject: injectAnalytics } = await import('@vercel/analytics');
      const { injectSpeedInsights } = await import('@vercel/speed-insights');
      injectAnalytics();
      injectSpeedInsights();
    }
  }
}
