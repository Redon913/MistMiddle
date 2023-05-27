import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavModule } from '../nav/nav.module';

@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    BlogListComponent,
    BlogPageComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NavModule,
  ],
})
export class CoreModule {}
