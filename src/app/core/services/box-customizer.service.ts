import { Injectable } from '@angular/core';
import { BoxItem } from '../models/box.model';

@Injectable({ providedIn: 'root' })
export class BoxCustomizerService {

calculateTotal(basePrice: number, selectedItems: BoxItem[]): number {
    return selectedItems.reduce((acc, item) => acc + item.price, basePrice);
}

generateCustomOrderMessage(items: BoxItem[], total: number): string {
    const itemsList = items.map(i => `- ${i.name}`).join('\n');
    return `¡Hola! Quiero armar mi propia KajitA con:\n${itemsList}\nTotal: ${total} COP.`;
}
}