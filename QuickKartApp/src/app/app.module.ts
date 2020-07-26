import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ViewProductsComponent } from './view-products/view-products.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/Http';
import { ProductService } from './quickKart-Services/product-service/product.service';
import { ViewPurchaseComponent } from './view-purchase/view-purchase.component';
import { PurchaseService } from './quickKart-Services/purchase-service/purchase.service';
import { ViewCartComponent } from './view-cart/view-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewProductsComponent,
    LoginComponent,
    ViewPurchaseComponent,
    ViewCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductService, PurchaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
