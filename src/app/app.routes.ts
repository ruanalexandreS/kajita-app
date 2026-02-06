import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/custom-box/custom-box.component').then(m => m.CustomBoxComponent),
        title: 'KajitA'
    },
    {
        path: 'productos',
        loadComponent: () => import('./features/custom-box/custom-box.component').then(m => m.CustomBoxComponent),
        title: 'Productos | KajitA'
    },
    {
        path: 'sobre-mi',
        loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent),
        title: 'Sobre mí | KajitA'
    },
    {
        path: 'contacto',
        loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent),
        title: 'Contacto | KajitA'
    }
];