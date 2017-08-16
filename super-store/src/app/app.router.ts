import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { Error404PagesComponent } from './pages/error-404-pages/error-404-pages.component';

const routes: Routes = [
    //home
    {
        path: '',
        component: HomePageComponent
    },
    //products
    {
        path: 'products',
        component: ProductsPageComponent
    },
    //product
    {
        path: 'products/:slug/:id',
        component: ProductPageComponent
    },
    // handling 404
    {
        path: '**',
        component: Error404PagesComponent
    }
];

export const RoutingModule = RouterModule.forRoot(routes);
