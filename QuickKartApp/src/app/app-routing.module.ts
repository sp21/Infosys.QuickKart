import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewProductsComponent } from './view-products/view-products.component';


const routes: Routes = [
  { path: 'Products', component: ViewProductsComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
