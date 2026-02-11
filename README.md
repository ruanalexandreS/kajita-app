# 🎁 KajitA - Crea Momentos Únicos

O projeto **KajitA** é uma plataforma e-commerce boutique desenvolvida para facilitar a venda e personalização de caixas de presente (gift boxes) no mercado colombiano. O sistema permite que os clientes visualizem kits exclusivos, personalizem quantidades e finalizem o pedido diretamente via WhatsApp.

## 🚀 Funcionalidades Principais

* **Catálogo Dinâmico**: Exibição de 9 kits exclusivos (ex: *Netflix Night*, *Picnic en Pareja*, *Dulzura Express*) com detalhes completos de itens e preços em COP.
* **Cálculo Reativo**: Atualização instantânea do valor total conforme o usuário adiciona ou remove itens da sua "KajitA".
* **Integração com WhatsApp**: Geração automática de mensagens estruturadas para fechamento de pedido, enviando a lista de desejos do cliente diretamente para o vendedor.
* **SEO & Compartilhamento**: Implementação de metadados dinâmicos e Open Graph para que o link apareça com foto e descrição no Instagram e WhatsApp.

---

## 🛠️ Stack Tecnológica

O projeto foi construído utilizando as melhores práticas de arquitetura modular e escalável:

| Tecnologia | Finalidade |
| --- | --- |
| **Angular** | Framework principal para criação da SPA (Single Page Application). |
| **TypeScript** | Garantia de tipagem forte e segurança no desenvolvimento da lógica. |
| **Tailwind CSS** | Estilização moderna e responsiva focada em uma UI "Boutique". |
| **Angular Signals** | Gerenciamento de estado reativo para preços e quantidades. |
| **Vercel** | Hospedagem de alta performance com deploy contínuo. |

---

## 🏗️ Estrutura de Pastas (Arquitetura)

O projeto segue uma estrutura organizada para facilitar a manutenção e escalabilidade:

* **`core/`**: Contém os serviços globais (como `BoxService` e `SeoService`) e os modelos de dados (`BoxItem`).
* **`features/`**: Módulos principais do usuário, como a Home (`custom-box`) e a listagem de `products`.
* **`shared/`**: Componentes reutilizáveis em todo o site, como o `header`, `footer` e o `pre-footer`.
* **`public/`**: Armazena ativos estáticos como imagens e arquivos críticos para o Google (`robots.txt`, `sitemap.xml`).

---

## 🛠️ Como Executar o Projeto

Siga os passos abaixo para replicar o ambiente de desenvolvimento da **KajitA** na sua máquina local:

### Pré-requisitos

* **Node.js**: Versão 18 ou superior.
* **Angular CLI**: Instalado globalmente (`npm install -g @angular/cli`).

### Instalação e Execução

1. **Clone o repositório**:
```bash
git clone https://github.com/seu-usuario/kajita-app.git

```

2. **Entre na pasta do projeto**:
```bash
cd kajita-app

```

3. **Instale as dependências**:
```bash
npm install

```

4. **Inicie o servidor de desenvolvimento**:
```bash
ng serve

```

5. **Acesse no navegador**:
O site estará disponível em `http://localhost:4200`.

---

## 📊 Modelo de Dados (Interface)

Para garantir que cada caixa de presente tenha as informações corretas (preços, itens e imagens), utilizamos a interface **`BoxItem`**:

```typescript
export interface BoxItem {
  id: string;          // Identificador único
  name: string;        // Nome da KajitA (ex: Dulzura Express)
  price: number;       // Valor em COP
  quantity: number;    // Controle de estoque/pedido
  image: string;       // Caminho para o asset da imagem
  description: string; // Texto curto de apresentação
  features?: string[]; // Lista de itens inclusos
  cardMessage?: string;// Mensagem da tarjeta personalizada
}

```

## 🔍 SEO e Indexação

Como o foco do projeto é vendas, implementamos uma estratégia de SEO técnico para que o Google e as redes sociais leiam o site corretamente:

* **Serviço de SEO Centralizado**: O `SeoService` gerencia dinamicamente o título e as meta-tags de cada página.
* **Robots & Sitemap**: Localizados na pasta `/public`, esses arquivos guiam os robôs de busca pela estrutura do site.
* **Open Graph**: Configurado para exibir cards visuais atrativos quando o link é compartilhado no WhatsApp ou Instagram.

---

## 🚀 Deploy

O deploy é realizado de forma automática via **Vercel**, conectada diretamente ao branch `main` do GitHub. Toda vez que um novo `git push` é realizado, a plataforma compila e publica a versão mais recente em segundos.

---

## 📩 Contacto y Redes Sociales

* **Instagram**: [@kajita.planes](https://www.instagram.com/kajita.planes/) - Vitrine oficial de momentos únicos.
* **Web Oficial**: [kajita-app.vercel.app](https://kajita-app.vercel.app) - Plataforma de pedidos online.
* **Desarrollador**: **Ruan** - Estudante de Engenharia de Software na **Unicesumar**.

---
