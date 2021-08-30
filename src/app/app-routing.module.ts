import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { AdminUpdateProductComponent } from './admin-update-product/admin-update-product.component';
import { CartComponent } from './cart/cart.component';
import { CheckOutCartComponent } from './check-out-cart/check-out-cart.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductCategoriesComponent } from './product-categories/product-categories.component';
import { ProductMoreInfoComponent } from './product-more-info/product-more-info.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationGuardAdminService } from './services/authentication-guard-admin.service';
import { AuthenticationGuardService } from './services/authentication-guard.service';
import { UpdateProfileService } from './update-profile.service';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'product-categories', component:ProductCategoriesComponent},
  {path:'login', component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'update-profile', component:UpdateProfileComponent},
  {path:'contact', component:ContactComponent},
  {path:'products', component:ProductsComponent},
  {path:'product-info/:id', component:ProductMoreInfoComponent},
  {path:'cart', component:CartComponent},
  {path:'checkout', component:CheckOutCartComponent},
  {path:'add-product', component:AdminAddProductComponent},
  {path:'admin-page',component:AdminComponentComponent},
  {path:'update-product',component:AdminUpdateProductComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
