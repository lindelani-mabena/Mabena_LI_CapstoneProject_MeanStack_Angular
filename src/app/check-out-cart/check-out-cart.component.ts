import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationGuardService } from '../services/authentication-guard.service';

@Component({
  selector: 'app-check-out-cart',
  templateUrl: './check-out-cart.component.html',
  styleUrls: ['./check-out-cart.component.css']
})
export class CheckOutCartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
