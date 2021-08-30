import { Component, OnInit } from '@angular/core';
import { HttpConnectionService } from '../http-connection.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: Contact = new Contact();
  constructor(private _HttpConnectionService:HttpConnectionService) { }

  ngOnInit(): void {
  }

  contactUs()
  {
    this._HttpConnectionService.addNewContactInfo(this.contact).subscribe(result=>
      {
        console.log("A new contact has been successfully added");
      }, 
      (error)=>
      {
        console.log("The error is "+ error)
      }) 
  }

}
