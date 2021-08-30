import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { ProductCategoriesComponent } from './product-categories/product-categories.component';
import { FormsModule, NgForm } from '@angular/forms';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { ProductMoreInfoComponent } from './product-more-info/product-more-info.component';
import { CartComponent } from './cart/cart.component';
import { CheckOutCartComponent } from './check-out-cart/check-out-cart.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';
import { AdminUpdateProductComponent } from './admin-update-product/admin-update-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    ProductCategoriesComponent,
    UpdateProfileComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    ProductMoreInfoComponent,
    CartComponent,
    CheckOutCartComponent,
    AdminComponentComponent,
    AdminAddProductComponent,
    AdminUpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
