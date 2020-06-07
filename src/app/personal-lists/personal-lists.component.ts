import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Shoppinglist, Item, Reciept} from "../shared/shoppinglist";
import {ShoppingListService } from "../shared/shopping-list.service";
import {AuthService} from "../shared/authentication.service";

@Component({
  selector: 'bs-personal-lists',
  templateUrl: './personal-lists.component.html',
  styleUrls: ['./personal-lists.component.css']
})
export class PersonalListsComponent implements OnInit {

  shoppinglists: Shoppinglist[];

  // @Output() showDetailsEvent = new EventEmitter<Shoppinglist>();

  constructor(
      private bs: ShoppingListService,
      public authService: AuthService
  ){

  }

  ngOnInit(): void {
    this.bs.getMy(localStorage.userId).subscribe(res => this.shoppinglists = res);
  }
}

