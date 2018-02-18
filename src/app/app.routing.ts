import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/items', pathMatch: 'full' },
  { path: 'items', component: ItemsComponent },
  { path: 'shopcart', component: ShopCartComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);