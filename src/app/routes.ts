import { Routes } from "@angular/router";
import { PageHomeComponent } from './page-home/page-home.component';
import { PageCatalogComponent } from './page-catalog/page-catalog.component';
import { PageCartComponent } from './page-cart/page-cart.component';
import { PageContactUsComponent } from './page-contact-us/page-contact-us.component';
import { PageErrorComponent } from './page-error/page-error.component';

export const appRoute: Routes = [
    {
        path: 'home',
        component: PageHomeComponent
    },
    {
        path: '',
        component: PageHomeComponent
    },
    {
        path: 'catalogo',
        component: PageCatalogComponent
    },
    {
        path: 'compra',
        component: PageCartComponent
    },
    {
        path: 'contactanos',
        component: PageContactUsComponent
    },
    {
        path: '**',
        component: PageErrorComponent
    }
];