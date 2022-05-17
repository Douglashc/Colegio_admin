/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'dashboard',
        title: 'Dashboard',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/dashboard'
    },
    {
        id   : 'colegio',
        title: 'Colegios',
        type : 'collapsable',
        icon : 'mat_outline:home_work',
        children: [
            {
                id   : 'colegio.lista',
                title: 'Lista de colegios',
                type : 'basic',
                icon : 'heroicons_outline:book-open',
                link : '/lista-colegio'
            },
            {
                id   : 'colegio.registrar',
                title: 'Nuevo colegio',
                type : 'basic',
                icon : 'heroicons_outline:pencil',
                link : '/registrar-colegio'
            },
         
        ]
    }
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'dashboard',
        title: 'Dashboard',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/dashboard'
    },
    {
        id   : 'colegio',
        title: 'Colegios',
        type : 'collapsable',
        icon : 'mat_outline:home_work',
        children: [
            {
                id   : 'colegio.lista',
                title: 'Lista de colegios',
                type : 'basic',
                icon : 'heroicons_outline:book-open',
                link : '/lista-colegio'
            },
            {
                id   : 'colegio.registrar',
                title: 'Nuevo colegio',
                type : 'basic',
                icon : 'heroicons_outline:pencil',
                link : '/registrar-colegio'
            },
         
        ]
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'dashboard',
        title: 'Dashboard',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/dashboard'
    },
    {
        id   : 'colegio',
        title: 'Colegios',
        type : 'collapsable',
        icon : 'mat_outline:home_work',
        children: [
            {
                id   : 'colegio.lista',
                title: 'Lista de colegios',
                type : 'basic',
                icon : 'heroicons_outline:book-open',
                link : '/lista-colegio'
            },
            {
                id   : 'colegio.registrar',
                title: 'Nuevo colegio',
                type : 'basic',
                icon : 'heroicons_outline:pencil',
                link : '/registrar-colegio'
            },
         
        ]
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'dashboard',
        title: 'Dashboard',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/dashboard'
    },
    {
        id   : 'colegio',
        title: 'Colegios',
        type : 'collapsable',
        icon : 'mat_outline:home_work',
        children: [
            {
                id   : 'colegio.lista',
                title: 'Lista de colegios',
                type : 'basic',
                icon : 'heroicons_outline:book-open',
                link : '/lista-colegio'
            },
            {
                id   : 'colegio.registrar',
                title: 'Nuevo colegio',
                type : 'basic',
                icon : 'heroicons_outline:pencil',
                link : '/registrar-colegio'
            },
         
        ]
    }
];
