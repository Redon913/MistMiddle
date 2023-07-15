import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { environment } from 'src/environments/environment';
import { productRequest } from '../model/model';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  constructor(private dataService: DataService) {}

  getCategory() {
    return this.dataService.getData(environment.apiUrl + 'getProductCategory/');
  }

  getAllProducts(req: productRequest) {
    return this.dataService.getData(
      environment.apiUrl +
        'getAllProducts/' +
        req.productId +
        '/' +
        req.sortType +
        '/' +
        req.filterCategory
    );
  }

  getBlogs(req: number) {
    return this.dataService.getData(environment.apiUrl + 'getBlogs/' + req);
  }
}
