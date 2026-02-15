import { Component, signal, computed, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BoxService } from '../../core/services/box.service';
import { BoxItem } from '../../core/models/box.model';
import { PreFooterComponent } from '../../shared/components/pre-footer/pre-footer.component';

@Component({
    selector: 'app-custom-box',
    standalone: true,
    imports: [CommonModule, PreFooterComponent, RouterLink],
    templateUrl: './custom-box.component.html',
    styleUrl: './custom-box.component.scss'
})
export class CustomBoxComponent implements OnInit {
    // 1. Injeções de Dependência
    private boxService = inject(BoxService);
    private titleService = inject(Title);
    private metaService = inject(Meta);

    // 2. Propriedades da Classe (Devem ficar fora das funções)
    items = this.boxService.items;
    currentImageIndex = 0;
    contactImages = [
        'assets/images/products/kajita_plan.jpeg',
        'assets/images/products/kajita_telefono.jpeg',
        'assets/images/products/karija_horarios.jpeg'
    ];

    // 3. Cálculos Reativos
    totalPrice = computed(() => {
        return this.items().reduce((acc, item) => acc + (item.price * item.quantity), 0);
    });

    // 4. Ciclo de Vida: SEO acontece ao iniciar
    ngOnInit(): void {
        this.titleService.setTitle('KajitA | Regalos Personalizados');

        this.metaService.addTags([
            { name: 'description', content: 'Crea momentos únicos con nossas cajitas de regalo personalizadas en Colombia.' },
            { name: 'keywords', content: 'regalos, detalles, cajas surpresa, Colombia, KajitA' },
            { name: 'robots', content: 'index, follow' }
        ]);

        this.metaService.addTags([
            { property: 'og:title', content: 'KajitA - Crea Momentos Únicos' },
            { property: 'og:image', content: 'assets/images/logo_og.png' }
        ]);
    }

    // 5. Métodos da Classe (Funções que o HTML vai chamar)
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
        this.boxService.generateWhatsAppOrder(selected, this.totalPrice()); //
    }

    nextImage() {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.contactImages.length;
    }

    prevImage() {
        this.currentImageIndex = (this.currentImageIndex - 1 + this.contactImages.length) % this.contactImages.length;
    }
}