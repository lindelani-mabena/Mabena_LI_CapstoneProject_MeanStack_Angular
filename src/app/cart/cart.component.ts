import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productItems = [];
  constructor(private _CartService:CartService, private _Router:Router) { }

  ngOnInit(): void {
  this.productItems= this._CartService.retrieveCartItemsFromLocalStorage();
  alert("cart items" + this.productItems);
  console.log(this.productItems);


  }

  EmptyCart()
  {
    this._CartService.deleteCartItems();
    this._Router.navigate(['/products']);
  }

  removeFromCart(id)
  {
    alert("attempting to delete item");
      for(var i=0; i< this.productItems.length;i++)
      {
        let item = this.productItems[i];
        if(item.id==id)
        {
          this.productItems.splice(i, 1);
          break;
        }
      }
      localStorage.setItem('savedItems', JSON.stringify(this.productItems));
  }

}
