import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {ShoppingListOverviewComponent} from "./shopping-list-overview/shopping-list-overview.component";
import {ShoppingListDetailComponent} from "./shopping-list-detail/shopping-list-detail.component";
import {ListFormComponent} from "./list-form/list-form.component";
import {LoginComponent} from "./login/login.component";
import {PersonalListsComponent} from "./personal-lists/personal-lists.component";
import {MylistDetailComponent} from "./mylist-detail/mylist-detail.component";
// import {ListFormComponent} from "./list-form/list-form.component";


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'lists', component: ShoppingListOverviewComponent },
  { path: 'lists/:id', component: ShoppingListDetailComponent },
  { path: 'myList/:id', component: MylistDetailComponent },
  { path: 'makeList', component: ListFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'myList', component: PersonalListsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
