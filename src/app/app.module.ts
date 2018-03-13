import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReceipeComponent } from './receipe/receipe.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { FoodServiceService} from './services/food-service.service';
import { BroadcastService} from './services/broadcast.service';
import { StorageService} from './services/storage.service';
import { MyCartComponent } from './my-cart/my-cart.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
@NgModule({
  declarations: [
    AppComponent,
    ReceipeComponent,
    MyCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AngularFontAwesomeModule
  ],
  providers: [
    FoodServiceService,
    BroadcastService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
