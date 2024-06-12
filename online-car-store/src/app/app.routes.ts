import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductReviewComponent } from './pages/product-review/product-review.component';
export const routes: Routes = [
    {
path:"home",
component:HomeComponent

},
    {
path:"products",
component:ProductsComponent
    
},{
    path:"product/:id",
    component:ProductReviewComponent
},
    {
        path:'',
redirectTo: "/home",
pathMatch:'full'

    }
];
