import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // backend'e istekte bulunmak için
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:44346/api/';

  constructor(private httpClient: HttpClient) { }
  
  getProducts():Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "products/getall"
    return this.httpClient.get<ListResponseModel<Product>>(newPath) // gelen değer any olarak atanır .bu yüzden <> arasına tür yazarak cast ederiz gibi bişey.  
  }

  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "products/getbycategory?categoryId="+ categoryId
    return this.httpClient.get<ListResponseModel<Product>>(newPath) // gelen değer any olarak atanır .bu yüzden <> arasına tür yazarak cast ederiz gibi bişey.  
  }
  
}
