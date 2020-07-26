import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/Http';
import { IProduct } from '../../quickKart-Interfaces/product';
import { Observable } from 'rxjs';
import { ICategory } from '../../quickKart-Interfaces/category';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: IProduct[];
  categories: ICategory[];
  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    let productDetails = this.http.get<IProduct[]>("http://localhost:11990/api/Product/GetProducts");
    return productDetails;
  }
  getProductCategories(): Observable<ICategory[]> {
    let categoriesDetails = this.http.get<ICategory[]>("http://localhost:11990/api/Category/Getcategories");
    return categoriesDetails;
  }
}
