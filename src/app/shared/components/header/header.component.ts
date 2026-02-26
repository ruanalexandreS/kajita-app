import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] as any
})
export class HeaderComponent {
  // Signal para o menu mobile
  isMenuOpen = signal(false);

  contactInfo = {
    email: 'kajita.planes@gmail.com',
    phones: '3238864914'
  };

  toggleMenu() {
    this.isMenuOpen.update(val => !val);
  }
}