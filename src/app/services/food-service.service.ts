import { Injectable } from '@angular/core';
import {IFoodService} from '../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import {Response , Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class FoodServiceService implements IFoodService {

  key = 'd17d8248c571f859daa7e7d2c398d3cb';
  getReceiptUrl = 'http://food2fork.com/api/search?key=' + this.key + '&q=shredded%20chicken';
  getReceiptByRatingUrl = 'http://food2fork.com/api/search?key=' + this.key + '&sort=t';
  getReceiptByPopularityUrl = 'http://food2fork.com/api/search?key=' + this.key + '&sort=r';
  constructor(private http: Http) { 
  }
  getReceipList () {
    return this.http.get(this.getReceiptUrl).map((res: Response) => res.json());
  }
  getReceipByRating () {
    return this.http.get(this.getReceiptByRatingUrl).map((res: Response) => res.json());
  }
  getReceipByPopularity () {
    return this.http.get(this.getReceiptByPopularityUrl).map((res: Response) => res.json());
  }
}






