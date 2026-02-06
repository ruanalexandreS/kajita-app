import { Injectable } from '@angular/core';
import { BoxItem } from '../models/box.model';

@Injectable({ providedIn: 'root' })
export class BoxService {
  // Número comercial
  private readonly PHONE = '573170943854';

  generateWhatsAppOrder(items: BoxItem[], total: number): void {
  let message = `¡Hola! Me gustaría pedir estas KajitAs:%0A%0A`;
    
    // Listagem dos itens selecionados
    items.forEach(item => {
    message += `• ${item.quantity}x ${item.name} ($${item.price.toLocaleString('es-CO')})%0A`;
  });

    // Rodapé com o total calculado e saudação
    message += `%0A*Total: $${total.toLocaleString('es-CO')} COP*%0A`;
    message += `%0A¿Podrían confirmarme la disponibilidad para el domicilio? Gracias.`;

    // Abre o link oficial do WhatsApp
    const url = `https://wa.me/${this.PHONE}?text=${message}`;
    window.open(url, '_blank');
  }
}