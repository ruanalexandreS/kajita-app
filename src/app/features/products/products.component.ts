import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxService } from '../../core/services/box.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'] as any,
})
export class ProductsComponent {
  // Injeção de dependência do serviço central
  private boxService = inject(BoxService);

  // Puxamos os 9 itens diretamente da BoxService"
  items = this.boxService.items;

  // Cálculo reativo do total
  totalPrice = computed(() => {
    return this.items().reduce((acc, item) => acc + (item.price * item.quantity), 0);
  });

  // Função para aumentar ou diminuir a quantidade
  updateQuantity(id: string, delta: number): void {
    this.items.update(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + delta) }
          : item
      )
    );
  }

  // Finaliza o pedido chamando a função do WhatsApp no Serviço
  confirmOrder(): void {
    const selectedItems = this.items().filter(item => item.quantity > 0);
    const total = this.totalPrice();

    if (selectedItems.length > 0) {
      this.boxService.generateWhatsAppOrder(selectedItems, total);
    }
  }
}