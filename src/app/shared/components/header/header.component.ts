import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] as any
})
export class HeaderComponent {
  // Signal para o menu mobile
  isMenuOpen = signal(false);

  // Suas mensagens de contato que haviam "sumido"
  contactInfo = {
    email: 'kajita.planes@gmail.com',
    phones: '3170943854 - 3103348262'
  };

  toggleMenu() {
    this.isMenuOpen.update(val => !val);
  }
}