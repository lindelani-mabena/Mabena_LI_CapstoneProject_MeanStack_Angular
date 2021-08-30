import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './models/contact';
import { LoginModelReturn } from './models/login-model-return';
import { Product } from './models/product';
import { User } from './models/user';
import { UserLogin } from './models/user-login';

@Injectable({
  providedIn: 'root'
})
export class HttpConnectionService {

  private Users: Array<User> = [];

  cartItems:Array<Product>=[];



  constructor(private _HttpClient: HttpClient) {
  }
  RegisterUser(user: User): Observable<User> {
    return this._HttpClient.post<User>('http://localhost:5000/api/users', user);
  }
  getAllUsers(): Observable<Array<User>> {
    return this._HttpClient.get<Array<User>>('http://localhost:5000/api/users/');
  }

   Login(userLogin:UserLogin):Observable<LoginModelReturn>
  { 
    return this._HttpClient.post<LoginModelReturn>('http://localhost:5000/api/users/login',userLogin);
  }      
  addNewContactInfo(contact: Contact): Observable<Contact> {
    return this._HttpClient.post<Contact>('http://localhost:5000/api/contacts', contact)
  }
  getProducts(): Observable<Product[]> {
    return this._HttpClient.get<Product[]>('http://localhost:5000/api/products');
  }
  getProductsByCategory(strCategory: string): Observable<Product[]> {
    return this._HttpClient.get<Product[]>('http://localhost:5000/api/products' + { strCategory });
  }
  addProduct(productObj: Product): Observable<Product> {
    return this._HttpClient.post<Product>('http://expressapi/api/products', productObj);
  }

  getProductById(id:string):Observable<Product>
  {
    return this._HttpClient.get<Product>(`http://localhost:5000/api/products/${id}`);
  }
  addToDatabase(productItem:Product):Observable<Product[]>
  {
    return this._HttpClient.get<Product[]>('http://localhost:5000/api/products');
  }
  addToCart(productItem)
  {
    this.cartItems.push(productItem);
    console.log("added new item to cart")
  }

  DeleteProduct(id:any):Observable<Product>
  {
    return this._HttpClient.delete<Product>(`http://localhost:5000/api/products/${id}`);
  }
}
