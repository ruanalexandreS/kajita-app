import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { inject as injectAnalytics } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'] as any
})
export class App implements OnInit {
  protected readonly title = signal('KajitA');
  ngOnInit(): void {
    // Inicializa a monitorização de tráfego assim que o site carrega
    injectAnalytics();
    injectSpeedInsights();
    const platformId = inject(PLATFORM_ID);
    if (isPlatformBrowser(platformId)) {
      injectAnalytics();
      injectSpeedInsights();
    }
  }
}