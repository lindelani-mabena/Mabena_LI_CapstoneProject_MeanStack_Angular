import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'protractor';
import { HttpConnectionService } from '../http-connection.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-admin-component',
  templateUrl: './admin-component.component.html',
  styleUrls: ['./admin-component.component.css']
})
export class AdminComponentComponent implements OnInit {

  constructor(private _HttpClientService:HttpConnectionService, private _Router:Router, private activeRoute: ActivatedRoute) { }
  productList: Array<Product> = [];
  ngOnInit(): void {
    this._HttpClientService.getProducts().subscribe((result)=>
    {
      this.productList = result;
      console.log(this.productList);
     
    },(error)=>
    {
      console.log("error is "+ error);
    });
  }

  DeleteProduct(id:any)
  {
    this._HttpClientService.DeleteProduct(id).subscribe((result)=>
    {
      alert("Deleted successfully")
      console.log(result);
      this._Router.navigate(['/admin-page'])

    },(error)=>
    {
      console.log("Deleted Successfully");
    })
  }

  reloadCurrentPage(){
    let currentUrl = this._Router.url;
    this._Router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
    this._Router.navigate([currentUrl]);
    });

  

}
}
