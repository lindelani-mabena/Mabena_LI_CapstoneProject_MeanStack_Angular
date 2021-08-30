import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpConnectionService } from '../http-connection.service';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-more-info',
  templateUrl: './product-more-info.component.html',
  styleUrls: ['./product-more-info.component.css']
})
export class ProductMoreInfoComponent implements OnInit {

  id: string;
  selectedProduct:Product;
  cartItems =[];

  constructor(private _HttpConnectionService:HttpConnectionService, private _route: ActivatedRoute, private _CartService:CartService, private _Router:Router) { }

  ngOnInit(): void {
    this.id= this._route.snapshot.paramMap.get('id');
    console.log("Id is" + this.id);
    this._HttpConnectionService.getProductById(this.id).subscribe((result)=>
    {
      console.log("result is "+ result)
      this.selectedProduct = result;
      console.log("selected "+this.selectedProduct._id);
    },(error)=>
    {
      console.log("error is " + error);
    });
  }


  buyThisProduct(selectedProduct)
  {

    this.cartItems = this._CartService.retrieveCartItemsFromLocalStorage();
    for (var i=0; i< this.cartItems.length;i++)
    {
      if(selectedProduct._id ==this.cartItems[i]._id)
      {
        alert("product is already in cart");
        return;
      }
    }

    this._CartService.addItemToCart(selectedProduct);
    alert(selectedProduct.name +" item added to the cart");
    this._Router.navigate(['/cart']);
  }

}
