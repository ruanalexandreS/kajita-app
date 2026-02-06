import { Routes } from '@angular/router';

export const routes: Routes = [
{
    path: '',
    loadComponent: () => import('./features/custom-box/custom-box.component').then(m => m.CustomBoxComponent),
    title: 'KajitA'
},
{ 
    path: 'contacto', 
    loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contacto | KajitA'
}
];