import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Shoppinglist, Item, Reciept} from "../shared/shoppinglist";
import { ShoppingListService } from "../shared/shopping-list.service";
import {AuthService} from "../shared/authentication.service";

@Component({
  selector: 'bs-shopping-list-overview',
  templateUrl: './shopping-list-overview.component.html',
  styleUrls: ['./shopping-list-overview.component.css']
})
export class ShoppingListOverviewComponent implements OnInit {

  shoppinglists: Shoppinglist[];

  // @Output() showDetailsEvent = new EventEmitter<Shoppinglist>();

  constructor(
      private bs: ShoppingListService,
      public authService: AuthService
  ){

  }

  ngOnInit(): void {
      this.bs.getAll().subscribe(res => this.shoppinglists = res);
  }

  getAvailable(): void {
    this.bs.getAvailable().subscribe(res => this.shoppinglists = res);
  }

}
