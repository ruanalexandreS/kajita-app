import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { BoxService } from '../../core/services/box.service';
import { BoxItem } from '../../core/models/box.model';

@Component({
    selector: 'app-custom-box',
    standalone: true,
    imports: [CommonModule, DecimalPipe],
    templateUrl: './custom-box.component.html',
    styleUrls: ['./custom-box.component.scss'] as any
})
export class CustomBoxComponent {
    private boxService = inject(BoxService);

    // Nome unificado para 'items' para evitar erro de referência
    items = signal<BoxItem[]>([
        { id: '1', name: 'Netflix Night', price: 45000, quantity: 0, image: '/assets/images/products/netflix_night.jpeg' },
        { id: '2', name: 'Picnic en Pareja', price: 85000, quantity: 0, image: '/assets/images/products/picnic_en_pareja.jpeg' },
        { id: '3', name: 'Fin de Semana Relax', price: 60000, quantity: 0, image: '/assets/images/products/fin_de_semana_relax.jpeg' },
        { id: '4', name: 'Desayuno a la Cama ☀️', price: 55000, quantity: 0, image: '/assets/images/products/desayuno_a_la_cama.jpeg' },
        { id: '5', name: 'Parche con Amigos', price: 80000, quantity: 0, image: '/assets/images/products/parche_con_amigos.jpeg' },
        { id: '6', name: 'Regreso a Clases', price: 50000, quantity: 0, image: '/assets/images/products/regreso_a_clases.png' }
    ]);

    basePrice = signal(15000); // Valor da decoração base da KajitA

    // Cálculo reativo: multiplica preço pela quantidade de cada item
    totalPrice = computed(() => {
        const selectedTotal = this.items().reduce((acc, item) => acc + (item.price * item.quantity), 0);
        return selectedTotal > 0 ? selectedTotal + this.basePrice() : 0;
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

    // No seu CustomBoxComponent
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