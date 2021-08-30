import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  productItems =[];

  constructor() { }
  addItemToCart(productToBeAdded)
  {
    this.productItems.push(productToBeAdded);
    console.log(this.productItems);
    this.saveCartToLocalStorage();
  }

  saveCartToLocalStorage()
  {
    localStorage.setItem('savedItems', JSON.stringify(this.productItems));
  }

  retrieveCartItemsFromLocalStorage()
  {
    this.productItems =JSON.parse(localStorage.getItem('savedItems')) ??[];
    return this.productItems;
  }

  deleteCartItems()
  {
    localStorage.removeItem('savedItems');
    alert("Cart is emptied")
  }

}
