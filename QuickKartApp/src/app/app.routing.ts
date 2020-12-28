import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ViewRatingComponent } from './view-rating/view-rating.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ViewPurchaseComponent } from './view-purchase/view-purchase.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { CommomLayoutComponent } from './commom-layout/commom-layout.component';
import { CustomerLayoutComponent } from './customer-layout/customer-layout.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UpdateCartComponent } from './update-cart/update-cart.component';
import { UpdateReviewCommentComponent } from './update-review-comment/update-review-comment.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'rating', component: ViewRatingComponent },
  { path: 'viewProducts', component: ViewProductsComponent },
  { path: 'viewPurchase', component: ViewPurchaseComponent },
  { path: 'cart', component: ViewCartComponent },
  { path: 'common', component: CommomLayoutComponent },
  { path: 'customer', component: CustomerLayoutComponent },
  { path: 'registerUser', component: RegisterUserComponent},
  { path: 'addReview', component: AddReviewComponent },
  { path: 'updateCart/:productId/:productName/:quantity/:quantityAvailable', component: UpdateCartComponent },
  { path: 'updateReview/:emailId/:productId/:productName/:reviewRating/:reviewComments', component: UpdateReviewCommentComponent },
  { path: '**', component: HomeComponent }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
