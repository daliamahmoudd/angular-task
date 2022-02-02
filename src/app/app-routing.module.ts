import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './features/products/product-add/product-add.component';
//import { ProductAddComponent } from './features/products/product-add/product-add.component';

import { NavbarComponent } from './layout/navbar/navbar.component';
import { ProductdescriptionComponent } from './productdescription/productdescription.component';
import { ProductListComponent } from './features/products/product-list/product-list.component';
import { ProductListContainerComponent } from './features/products/product-list-container/product-list-container.component';
import { ProductItemComponent } from './features/products/product-item/product-item.component';


const routes: Routes = [
{ path: '', redirectTo: '/items', pathMatch: 'full' },
{path:'product-add',component:ProductAddComponent},
{path:'productInfo',component:ProductdescriptionComponent},
{path:'items',component:ProductListContainerComponent},
// {path:'faluty',component:falutyPage},
]
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
