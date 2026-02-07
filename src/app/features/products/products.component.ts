import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxService } from '../../core/services/box.service'; //

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'] as any,
})
export class ProductsComponent {
  // Injetamos o serviço central
  private boxService = inject(BoxService);
  
  // Puxamos a lista reativa de itens diretamente do "cérebro" (service)
  items = this.boxService.items; 
}