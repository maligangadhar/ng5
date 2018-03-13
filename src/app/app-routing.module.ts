import { MyCartComponent } from './my-cart/my-cart.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceipeComponent } from './receipe/receipe.component';
const routes: Routes = [
  {
    path: '',
    component: ReceipeComponent
  },
  {
    path: 'receipe',
    component: ReceipeComponent
  },
  {
    path: 'cart',
    component: MyCartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
