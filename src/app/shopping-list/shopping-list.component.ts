import {Component, Input, OnInit} from '@angular/core';
import { Shoppinglist} from "../shared/shoppinglist";

@Component({
  selector: 'a.bs-shopping-list-list-item',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  @Input() shoppingList: Shoppinglist;

  constructor() { }

  ngOnInit(): void {

  }

}
