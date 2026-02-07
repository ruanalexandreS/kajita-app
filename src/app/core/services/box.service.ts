import { Injectable, signal } from '@angular/core';
import { BoxItem } from '../models/box.model';

@Injectable({ providedIn: 'root' })
export class BoxService {
  private readonly PHONE = '573170943854';

  // Agora os itens moram aqui! Qualquer página pode puxar daqui.
  items = signal<BoxItem[]>([
    { 
      id: '1', name: 'Netflix Night', price: 45000, quantity: 0, 
      image: 'assets/images/products/netflix_night.jpeg',
      description: 'El cine en casa con todo el sabor.',
      features: ['Crispetas (Mantequilla/Dulce)', 'Papitas + Gomitas + Chocolatina', 'Gaseosas (2) 400 ml'],
      cardMessage: 'Hoy es noche de peli. ¡Disfruta!'
    },
    { 
      id: '2', name: 'Picnic en Pareja', price: 85000, quantity: 0, 
      image: 'assets/images/products/picnic_en_pareja.jpeg',
      description: 'Romántico, delicado y lleno de detalles.',
      features: ['2 Sandwiches/Wraps + Fruta picada', 'Snacks salados/dulces + 2 copas', 'Versión Vino: + Botella 375ml ó Jugo natural'],
      cardMessage: 'Gracias por este momento juntos'
    },
    { 
      id: '3', name: 'Fin de Semana Relax', price: 60000, quantity: 0, 
      image: 'assets/images/products/fin_de_semana_relax.jpeg',
      description: 'Desconexión total para dos.',
      features: ['Picada (Nuggets, salchicha, papas, salsas)', 'Snacks (papitas para picar)', 'Bebida: Six Pack ó 2 Jugos naturales ó 2 gaseosas 400 ml'],
      cardMessage: 'Es fin de semana... ¡a disfrutar!'
    },
    { 
      id: '4', name: 'Desayuno a la Cama ☀️', price: 55000, quantity: 0, 
      image: 'assets/images/products/desayuno_a_la_cama.jpeg',
      description: 'Sorprende desde el primer minuto.',
      features: ['Sándwich gourmet + Jugo natural', 'Yogurt con granola + Fruta', 'Opcional: Mini postre (+ $10,000 COP)'],
      cardMessage: 'Que tu día sea tan lindo como tú'
    },
    { 
      id: '5', name: 'Parche con Amigos', price: 80000, quantity: 0, 
      image: 'assets/images/products/parche_con_amigos.jpeg',
      description: 'Tarde de risas garantizada.',
      features: ['Snacks variados + Dulces + maní', '3 Gaseosas 400ml + Juego de cartas', '2 Six Pack'],
      cardMessage: '¡A reír se dijo!'
    },
    { 
      id: '6', name: 'Regreso a Clases', price: 50000, quantity: 0, 
      image: 'assets/images/products/regreso_a_clases.png',
      description: 'Motivación para el nuevo semestre o nuevo año escolar.',
      features: ['Agenda creativa + Esfero/Resaltador', 'Jugo + Snack saudável', 'Fruta picada'],
      cardMessage: '¡Este semestre es tuyo!'
    }
  ]);

  // Sua função de WhatsApp (mantida exatamente como você colocou)
  generateWhatsAppOrder(items: BoxItem[], total: number): void {
    let message = `¡Hola! Me gustaría pedir estas KajitAs:%0A%0A`;
    items.forEach(item => {
      message += `• ${item.quantity}x ${item.name} ($${item.price.toLocaleString('es-CO')})%0A`;
    });
    message += `%0A*Total: $${total.toLocaleString('es-CO')} COP*%0A`;
    message += `%0A¿Podrían confirmarme la disponibilidade para el domicilio? Gracias.`;
    const url = `https://wa.me/${this.PHONE}?text=${message}`;
    window.open(url, '_blank');
  }
}