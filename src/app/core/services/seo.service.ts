import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root' // Isso garante que o serviço seja único para todo o site
})
export class SeoService {
    private title = inject(Title);
    private meta = inject(Meta);

    /**
     * Atualiza as meta tags dinamicamente
     * @param config Objeto com título, descrição e imagem opcional
     */
    updateMetaTags(config: { title: string, description: string, image?: string }) {
        // 1. Atualiza o título da aba/Google
        this.title.setTitle(config.title);

        // 2. Atualiza a descrição de busca
        this.meta.updateTag({ name: 'description', content: config.description });

        // 3. Atualiza as tags de redes sociais (WhatsApp/Instagram)
        this.meta.updateTag({ property: 'og:title', content: config.title });
        this.meta.updateTag({ property: 'og:description', content: config.description });

        if (config.image) {
            this.meta.updateTag({ property: 'og:image', content: config.image });
        }
    }
}