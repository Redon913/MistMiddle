import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/model';
import { DataService } from 'src/app/providers/data.service';
import { TransferService } from 'src/app/providers/transfer.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less'],
})
export class ProductsComponent implements OnInit {
  rand!: number;
  selectedCategories: any = null;
  selectedProducts: any = null;

  categories: any[] = [];
  products: Product[] = [];

  constructor(private transferService: TransferService) {
    this.getCategories();
    this.getAllProducts(-1);
  }

  ngOnInit() {
    this.rand = Math.floor(Math.random() * 4) + 1;
  }

  getCategories() {
    this.transferService.getCategory().subscribe((res) => {
      this.categories = res;
    });
  }

  getAllProducts(request: number) {
    this.transferService
      .getAllProducts(request)
      .subscribe((res) => (this.products = res));
  }
}
