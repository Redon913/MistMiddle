import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../core/home/home.component';
import { ProductsComponent } from '../core/products/products.component';
import { BlogListComponent } from '../core/blog-list/blog-list.component';
import { BlogPageComponent } from '../core/blog-page/blog-page.component';
import { NotFoundComponent } from '../core/not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'blogs', component: BlogListComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'blog/:id', component: BlogPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
