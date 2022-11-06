import { Component, OnInit } from '@angular/core';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataLoaded =false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(response => {  // bu kod bloğunun içindekiler sırayla çalışır .dışındakiler bu işlemin yani parantez içinin bitmesini beklemeden çalışır.
      this.products= response.data;   
      this.dataLoaded = true;
    });
  }
}