import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './contact.component.html',
})
// Implementamos OnInit e OnDestroy para gerenciar o timer
export class ContactComponent implements OnInit, OnDestroy {
    currentImageIndex = 0;
    private autoPlayInterval: any; // Variável para guardar o timer

    contactImages = [
        'assets/images/products/kajita_plan.jpeg',
        'assets/images/products/kajita_telefono.jpeg',
        'assets/images/products/karija_horarios.jpeg'
    ];

    // INICIA O MOVIMENTO QUANDO A PÁGINA CARREGA
    ngOnInit() {
        this.startAutoPlay();
    }

    // PARA O MOVIMENTO QUANDO VOCÊ MUDA DE ABA (Importante para não travar o navegador)
    ngOnDestroy() {
        this.stopAutoPlay();
    }

    startAutoPlay() {
        // Muda a imagem a cada 3000 milissegundos (3 segundos)
        this.autoPlayInterval = setInterval(() => {
            this.nextImage();
        }, 3000);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
    }

    // Funções chamadas pelo HTML (agora com pause/resume)
    nextImage() {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.contactImages.length;
    }

    prevImage() {
        this.currentImageIndex = (this.currentImageIndex - 1 + this.contactImages.length) % this.contactImages.length;
    }

    pauseAutoPlay() {
        this.stopAutoPlay();
    }

    resumeAutoPlay() {
        this.startAutoPlay();
    }
}