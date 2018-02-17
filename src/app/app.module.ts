import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { ItemsService } from './services/items.service';
import { RoutingComponent } from './routing.component';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    SearchPipe,
    AppComponent,
    ItemsComponent,
    ShopCartComponent,
    RoutingComponent 
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
