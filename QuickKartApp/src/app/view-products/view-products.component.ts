import { Component, OnInit } from '@angular/core';
import { IProduct } from '../quickKart-Interfaces/product';
import { ICategory } from '../quickKart-Interfaces/category';
import { ProductService } from '../quickKart-Services/product-service/product.service';
@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  products: IProduct[];
  categories: ICategory[];
  filteredProducts: IProduct[];
  imageSrc: string;
  showMessage: boolean = false;
  constructor(private _productService: ProductService) { }
  searchByCategoryId: string = "0";
  searchByProductName: string;
  ngOnInit(): void {
    this.getProducts();
    this.getProductCategories();
    if (this.products == null) {
      this.showMessage = true;
    }
    this.filteredProducts = this.products;
    this.imageSrc = "../../assets/quickKart-images/add-item.jpg";
  }
  getProducts() {
    this._productService.getProducts().subscribe(
      responseProductData => {
        this.products = responseProductData;
        this.filteredProducts = responseProductData;
        this.showMessage = false;
      }
    );
  }
  getProductCategories() {
    this._productService.getProductCategories().subscribe(
      responseCategoryData => this.categories = responseCategoryData
    );
    //this.products = this._productService.getProducts();


    //this.categories = this._productService.getProductCategories();



    //if (this.products == null) {
    //  this.showMessage = true;
    //}
    //this.filteredProducts = this.products;
    //this.imageSrc = "../../assets/quickKart-images/add-item.jpg";
  }
  //searchProductByCategory(categoryId: string) {
  //  this.filteredProducts = this.products;
  //  if (categoryId == "0") {
  //    this.filteredProducts = this.products;
  //  }
  //  else {
  //    this.filteredProducts = this.products.filter(product => product.CategoryId.toString() == categoryId);
  //  }

  //}
  searchProduct(productName: string) {
    if (this.searchByCategoryId == "0") {
      this.filteredProducts = this.products;
    }
    else {
      this.filteredProducts = this.products.filter(prod => prod.CategoryId.toString() == this.searchByCategoryId);
    }
    if (productName != null || productName === "") {
      this.searchByProductName = productName;
      this.filteredProducts = this.products.filter(prod => prod.ProductName.toLowerCase().indexOf(productName.toLowerCase()) >= 0);
    }
    if (this.filteredProducts.length == 0) {
      this.showMessage = true;
    }
    else {
      this.showMessage = false;
    }
  }
  searchProductByCategory(categoryId: string) {
    if (this.searchByProductName != null || this.searchByProductName === "") {
      this.filteredProducts = this.products.filter(prod => prod.ProductName.toLowerCase().indexOf(this.searchByProductName.toLowerCase()) >= 0);

    }
    else {
      this.filteredProducts = this.products;
    }
    this.searchByCategoryId = categoryId;
    if (this.searchByCategoryId == "0") {
      this.filteredProducts = this.products;
    }
    else {
      this.filteredProducts = this.products.filter(prod => prod.CategoryId.toString() == this.searchByCategoryId);

    }
  }
}

