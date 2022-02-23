import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderComponent } from './order/order.component';
import { foods } from './foods';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
  },
  {
    path: 'about', 
    component: AboutComponent,
  },
  {
    path: 'menu', 
    component: MenuComponent,
  },
  {
    path: 'cart', 
    component: OrderComponent,
  },
  {
    path: 'hero', 
    component: HeroComponent,
  },
  {
    path: 'product', 
    component: DetailsComponent,
  },
  {
    path: 'footer', 
    component: FooterComponent,
  },
  {
    path: 'foods', 
    component: OrderDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
