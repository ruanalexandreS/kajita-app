import { Injectable, signal } from '@angular/core';
import { BoxItem } from '../models/box.model';

@Injectable({ providedIn: 'root' })
export class BoxService {
  private readonly PHONE = '573170943854';

  // Qualquer página pode puxar os items daqui.
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
    },
    { 
      id: '7', name: 'Cumpleañero', price: 45000, quantity: 0, 
      image: 'assets/images/products/cumpleanero.jpeg', 
      description: '¡Feliz vuelta al sol! 🎂',
      features: ['Mini torta (postre) + Velita decorativa', 'Snacks dulce/salado + Confetti', 'Gaseosa 400 ml'],
      cardMessage: '¡Feliz Cumpleaños! Que este año sea maravilloso'
    },
    { 
      id: '8', name: 'Amor propio - Self Care', price: 65000, quantity: 0, 
      image: 'assets/images/products/self_care.jpeg', 
      description: 'Un día para ti, te lo mereces.',
      features: ['Té + Mascarilla facial', 'Chocolate + Frutos secos + Sándwich', 'Vela aromática'],
      cardMessage: 'Respira. Te lo mereces.'
    },
    { 
      id: '9', name: 'Dulzura Express', price: 40000, quantity: 0, 
      image: 'assets/images/products/dulzura_express.jpeg', 
      description: 'Alegría instantánea para el día.',
      features: ['Milo en caja o Alpin (leche saborizada)', 'Merengón', 'Gomitas + chocolatinas'],
      cardMessage: 'Un antojo para alegrarte el día.'
    }
  ]);

  // Função do WhatsApp
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