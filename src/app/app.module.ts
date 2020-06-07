import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListOverviewComponent } from './shopping-list-overview/shopping-list-overview.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListDetailComponent } from './shopping-list-detail/shopping-list-detail.component';
import {ShoppingListService} from "./shared/shopping-list.service";
import { HomeComponent } from './home/home.component';
import { ListFactoryComponent } from './shared/list-factory/list-factory.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { ListFormComponent } from './list-form/list-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import {AuthService} from "./shared/authentication.service";
import {TokenInterceptorService} from "./shared/token-interceptor.service";
import { PersonalListsComponent } from './personal-lists/personal-lists.component';
import { MylistDetailComponent } from './mylist-detail/mylist-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListOverviewComponent,
    ShoppingListComponent,
    ShoppingListDetailComponent,
    HomeComponent,
    ListFactoryComponent,
    ListFormComponent,
    LoginComponent,
    PersonalListsComponent,
    MylistDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ShoppingListService,
              AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
