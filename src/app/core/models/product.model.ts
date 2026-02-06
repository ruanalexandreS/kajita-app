export interface Product {
id: number;
name: string;
price: number;
image: string;
isCustomizable: boolean; // Identifica se é uma caixa para montar
availableItems?: BoxItem[]; // Itens que podem ser colocados dentro
}

export interface BoxItem {
id: string;
name: string;
price: number;
}