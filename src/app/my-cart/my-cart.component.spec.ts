import { async, ComponentFixture, TestBed , fakeAsync } from '@angular/core/testing';
import { MyCartComponent } from './my-cart.component';
import { FoodServiceService } from '../services/food-service.service';
import { IFoodService } from '../interfaces/interfaces';
import { Observable } from 'rxjs/Observable';
describe('MyCartComponent', () => {
  let component: MyCartComponent;
  let fixture: ComponentFixture<MyCartComponent>;
  let mockAppDetails = {
    'publisher': 'The Pioneer Woman',
    'f2f_url': 'http://food2fork.com/view/47024',
    'title': 'Perfect Iced Coffee',
    'source_url': 'http://thepioneerwoman.com/cooking/2011/06/perfect-iced-coffee/',
    'recipe_id': '47024',
    'image_url': 'http://static.food2fork.com/icedcoffee5766.jpg',
    'social_rank': 100.0,
    'publisher_url': 'http://thepioneerwoman.com'
  };

  let mockCartResponse = {
    data: mockAppDetails,
    status: 0,
    messageKey: 'This is a sample Response'
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCartComponent ],
      providers: [
        FoodServiceService,
      ]
    })
    .compileComponents();
  }));

  class CartServiceStub implements IFoodService {
    getReceipByRating: () => void;
    getReceipByPopularity: () => void;
    getReceipList = () => {
      return Promise.resolve(mockCartResponse);
    }
  }
  it('should test get cart  detail', fakeAsync(() => {
        spyOn(CartServiceStub, 'getReceipList').and.callFake(() => {
            return Promise.resolve(mockCartResponse);
    });
  })
  beforeEach(() => {
    fixture = TestBed.createComponent(MyCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
