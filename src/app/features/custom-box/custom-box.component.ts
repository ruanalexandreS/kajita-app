import { Component, signal, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule} from '@angular/common';
import { BoxService } from '../../core/services/box.service';
import { BoxItem } from '../../core/models/box.model';
import { PreFooterComponent } from '../../shared/components/pre-footer/pre-footer.component';

@Component({
    selector: 'app-custom-box',
    standalone: true,
    imports: [CommonModule, PreFooterComponent, RouterLink],
    templateUrl: './custom-box.component.html',
    styleUrls: ['./custom-box.component.scss'] as any
})
export class CustomBoxComponent {
    private boxService = inject(BoxService);

  // Agora a Home puxa os dados do mesmo lugar que a página de Productos
items = this.boxService.items;

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