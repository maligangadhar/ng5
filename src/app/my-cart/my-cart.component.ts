import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {

  ngUnsubscribe: Subject<any> = new Subject<any>();
  selectedCartItem= -1;
  constructor(private storageService: StorageService) { }
  myCartList= [];
  cartConfirmed = false;

  ngOnInit() {
    this.getMyCartList();
  }
  getMyCartList() {
    this.myCartList = this.storageService.getItem('myCart');
  }
  listClick(index) {
    this.selectedCartItem = index;
  }
  deleteFromCartList () {
    this.myCartList.splice(this.selectedCartItem, 1);
    this.storageService.setItem('myCart', this.myCartList);
  }
  confiredCartList () {
    this.cartConfirmed = true;
    this.storageService.clearItem('myCart');
    this.myCartList = [];
  }
}
