import { Component, OnInit } from '@angular/core';
import { Product, productRequest } from 'src/app/model/model';
import { DataService } from 'src/app/providers/data.service';
import { TransferService } from 'src/app/providers/transfer.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less'],
})
export class ProductsComponent implements OnInit {
  rand!: number;
  first: number = 0;
  rows: number = 10;

  sort: { name: string; code: string; icon: string }[] = [
    { name: 'Price - Low to High', code: 'LTH', icon: 'pi pi-arrow-down' },
    { name: 'Price - High to Low', code: 'HTL', icon: 'pi pi-arrow-up' },
    { name: 'Alphabetical [A-Z]', code: 'ATZ', icon: 'pi pi-star' },
    { name: 'Alphabetical [Z-A]', code: 'ZTA', icon: 'pi pi-star' },
  ];

  selectedSort: { name: string; code: string; icon: string } = {
    name: 'Price - Low to High',
    code: 'SPD',
    icon: 'pi pi-arrow-down',
  };

  totalProducts: number = 0;

  selectedCategories: any = null;

  categories: any[] = [];
  products: Product[] = [];

  options = [
    { label: 5, value: 5 },
    { label: 10, value: 10 },
    { label: 20, value: 20 },
    { label: 50, value: 50 },
  ];

  content: string =
    'Lorem ipsum dolor sit amet, consectetur adipisicing  elit. Inventore sed consequuntur error\nrepudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam\nperferendis esse, cupiditate neque\nquas!\nLorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa rerum id architecto eaque cum sapiente\nrepudiandae aliquam provident maxime corporis saepe nihil eveniet, sit delectus, voluptatem magni\nofficia vero? Consequatur?';

  constructor(private transferService: TransferService) {
    this.getCategories();
    this.getAllProducts(-1, this.selectedSort.code, this.selectedCategories);
  }

  ngOnInit() {
    this.rand = Math.floor(Math.random() * 4) + 1;
  }

  private getCategories() {
    this.transferService.getCategory().subscribe((res) => {
      this.categories = res;
    });
  }

  private getAllProducts(
    pId: number,
    sortBy: string = this.selectedSort.code,
    filter: string = this.selectedCategories
  ) {
    const request: productRequest = {
      productId: pId,
      sortType: sortBy,
      filterCategory: filter,
    };
    console.log(request);

    this.transferService.getAllProducts(request).subscribe((res) => {
      this.products = res;
      this.totalProducts = this.products.length;
    });
  }

  onPageChange(event: any) {
    // console.log(event.first, event.rows);

    this.first = event.first;
    this.rows = event.rows;
  }

  onSortChange(event: any) {
    this.getAllProducts(-1);
  }
}
