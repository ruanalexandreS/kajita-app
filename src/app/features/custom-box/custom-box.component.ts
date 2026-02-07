import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule} from '@angular/common';
import { BoxService } from '../../core/services/box.service';
import { BoxItem } from '../../core/models/box.model';
import { PreFooterComponent } from '../../shared/components/pre-footer/pre-footer.component';

@Component({
    selector: 'app-custom-box',
    standalone: true,
    imports: [CommonModule, PreFooterComponent],
    templateUrl: './custom-box.component.html',
    styleUrls: ['./custom-box.component.scss'] as any
})
export class CustomBoxComponent {
    private boxService = inject(BoxService);

    // Nome unificado para 'items' para evitar erro de referência
    items = signal<BoxItem[]>([
        { id: '1', name: 'Netflix Night', price: 45000, quantity: 0, image: '/assets/images/products/netflix_night.jpeg', description: 'El cine en casa con todo el sabor.', features: ['Crispetas (Mantequilla/Dulce)', 'Papitas + Gomitas + Chocolatina', 'Gaseosas (2) 400 ml'], cardMessage: 'Hoy es noche de peli. ¡Disfruta!'},
        { id: '2', name: 'Picnic en Pareja', price: 85000, quantity: 0, image: '/assets/images/products/picnic_en_pareja.jpeg', description: 'Romántico, delicado y lleno de detalles. Incluye wraps, frutas y opción de vino.', features: ['2 Sandwiches/Wraps + Fruta picada', 'Snacks salados/dulces + 2 copas', 'Versión Vino: + Botella 375ml ó Jugo natural'], cardMessage: 'Gracias por este momento juntos' },
        { id: '3', name: 'Fin de Semana Relax', price: 60000, quantity: 0, image: '/assets/images/products/fin_de_semana_relax.jpeg', description: 'Desconexión total para dos.', features: ['Picada (Nuggets, salchicha, papas, salsas)', 'Snacks (papitas para picar)', 'Bebida: Six Pack ó 2 Jugos naturales ó 2 gaseosas 400 ml'], cardMessage: 'Es fin de semana... ¡a disfrutar!'},
        { id: '4', name: 'Desayuno a la Cama ☀️', price: 55000, quantity: 0, image: '/assets/images/products/desayuno_a_la_cama.jpeg', description: 'Sorprende desde el primer minuto.', features: ['Sándwich gourmet + Jugo natural', 
    'Yogurt con granola + Fruta', 'Opcional: Mini postre (+ $10,000 COP)'], cardMessage: 'Que tu día sea tan lindo como tú' },
        { id: '5', name: 'Parche con Amigos', price: 80000, quantity: 0, image: '/assets/images/products/parche_con_amigos.jpeg', description: 'Tarde de risas garantizada.', features: [
    'Snacks variados + Dulces + maní', '3 Gaseosas 400ml + Juego de cartas', '2 Six Pack'], cardMessage: '¡A reír se dijo!' },
        { id: '6', name: 'Regreso a Clases', price: 50000, quantity: 0, image: '/assets/images/products/regreso_a_clases.png', description: 'Motivación para el nuevo semestre o nuevo año escolar.', features: [
    'Agenda creativa + Esfero/Resaltador', 'Jugo + Snack saludable', 'Fruta picada'], cardMessage: '¡Este semestre es tuyo!'}
]);

    // Cálculo reativo: multiplica preço pela quantidade de cada item
    totalPrice = computed(() => {
        return this.items().reduce((acc, item) => acc + (item.price * item.quantity), 0);
    });

    // Função para as setas (aumentar/diminuir)
    updateQuantity(id: string, delta: number) {
        this.items.update(prevItems =>
            prevItems.map((item: BoxItem) =>
                item.id === id
                    ? { ...item, quantity: Math.max(0, item.quantity + delta) }
                    : item
            )
        );
    }

    confirmOrder() {
        const selected = this.items().filter((i: BoxItem) => i.quantity > 0);
        this.boxService.generateWhatsAppOrder(selected, this.totalPrice());
    }

    currentImageIndex = 0;

    contactImages = [
        'assets/images/products/kajita_plan.jpeg',    // Bonequinho com logo
        'assets/images/products/kajita_telefono.jpeg', // Bonequinho telefone
        'assets/images/products/karija_horarios.jpeg'  // Bonequinho horários
    ];

    nextImage() {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.contactImages.length;
    }

    prevImage() {
        this.currentImageIndex = (this.currentImageIndex - 1 + this.contactImages.length) % this.contactImages.length;
    }
}