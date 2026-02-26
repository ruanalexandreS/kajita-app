import { Component, signal, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { inject as injectAnalytics } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';
import { isPlatformBrowser } from '@angular/common';

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
    const platformId = inject(PLATFORM_ID); // Identifica onde o código está rodando

    if (isPlatformBrowser(platformId)) { // Só entra aqui se for no navegador do cliente
      injectAnalytics();
      injectSpeedInsights();
      console.log('Vercel Analytics ativado no navegador! 🚀');
    }
  }
}