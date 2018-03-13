import { StorageService } from './../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { FoodServiceService } from '../services/food-service.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-receipe',
  templateUrl: './receipe.component.html',
  styleUrls: ['./receipe.component.scss']
})
export class ReceipeComponent  implements OnInit {
  ngUnsubscribe: Subject<any> = new Subject<any>();
  recipes: any;
  selectedItemIndex= -1;
  selectedItem: any;
  cartList: string[]= [];
  myCart = [];
  addToCartFlag= false;

  getReceipList() {
    this.foodService.getReceipList().subscribe(data => this.recipes = data.recipes);
  }
  listClick(item, index) {
    this.selectedItem = item;
    this.selectedItemIndex = index; 
    this.addToCartFlag = false;
  }
  addToCartList(selectedItem) {
    if(this.myCart.indexOf(selectedItem) === -1) {
      this.myCart.push(selectedItem);
      this.addToCartFlag = true;
    }
    this.storageService.setItem('myCart', this.myCart);
  }
  getListByRating() {
    this.foodService.getReceipByRating().subscribe(data => this.recipes = data.recipes);
  }
  getPopularList() {
    this.foodService.getReceipByPopularity().subscribe(data => this.recipes = data.recipes);
  }
  ngOnInit(): void {
    this.getReceipList();
  }
  constructor(private foodService: FoodServiceService, private storageService: StorageService) { }

}
