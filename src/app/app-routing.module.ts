import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { BookListComponent} from './components/book-list/book-list.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { OrderComponent} from './components/order/order.component';
import { OrderSummaryComponent} from './components/order-summary/order-summary.component';

const routes: Routes = [
  { path:'', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'myaccount', component: MyAccountComponent},
	{ path: 'myprofile', component: MyProfileComponent },
  { path: 'book-list', component: BookListComponent },
  { path: 'book-detail/:id', component: BookDetailComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent},
  { path: 'checkout', component: OrderComponent},
	{ path: 'order-summary', component: OrderSummaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
