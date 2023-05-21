import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  constructor(private dataService: DataService) {}

  getCategory() {
    return this.dataService.getData(environment.apiUrl + 'getProductCategory/');
  }

  getAllProducts(req: number) {
    return this.dataService.getData(
      environment.apiUrl + 'getAllProducts/' + req
    );
  }

  getBlogs(req: number) {
    return this.dataService.getData(environment.apiUrl + 'getBlogs/' + req);
  }
}
