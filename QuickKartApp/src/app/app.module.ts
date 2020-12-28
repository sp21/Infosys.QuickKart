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
import { ViewRatingComponent } from './view-rating/view-rating.component';
import { RatingService } from './quickKart-Services/rating-service/rating.service';
import { CartService } from './quickKart-Services/cart-service/cart.service';
import { HomeComponent } from './home/home.component';
import { CommomLayoutComponent } from './commom-layout/commom-layout.component';
import { routing } from './app.routing';
import { UserService } from './quickKart-Services/user-service/user.service';
import { CustomerLayoutComponent } from './customer-layout/customer-layout.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UpdateCartComponent } from './update-cart/update-cart.component';
import { UpdateReviewCommentComponent } from './update-review-comment/update-review-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewProductsComponent,
    LoginComponent,
    ViewPurchaseComponent,
    ViewCartComponent,
    ViewRatingComponent,
    HomeComponent,
    CommomLayoutComponent,
    CustomerLayoutComponent,
    AddReviewComponent,
    RegisterUserComponent,
    UpdateCartComponent,
    UpdateReviewCommentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [ProductService, PurchaseService, RatingService, CartService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
