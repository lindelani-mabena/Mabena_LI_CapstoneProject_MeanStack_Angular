import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpConnectionService } from '../http-connection.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.css']
})
export class AdminAddProductComponent implements OnInit {

  product: Product = new Product();
  constructor(private _HttpConnectionService:HttpConnectionService, private _Router:Router) { }

  ngOnInit(): void {
  }

  addProduct()
  {
    this._HttpConnectionService.addProduct(this.product).subscribe((result)=>
    {
      alert("Product Added");
      console.log(result);
      this._Router.navigate(['/products']);
    }, 
    (error)=>
    {
    })
  }

}
