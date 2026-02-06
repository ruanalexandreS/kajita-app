export interface BoxItem {
id: string;
name: string;
price: number;
quantity: number;
image: string;
description: string;
features?: string[];
cardMessage?: string;
}

export interface CustomizableBox {
id: string;
name: string;
basePrice: number;
items: BoxItem[];
}