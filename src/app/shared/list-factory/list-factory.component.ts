import { Component, OnInit } from '@angular/core';
import {Shoppinglist} from "../shoppinglist";

@Component({
  selector: 'bs-list-factory',
  templateUrl: './list-factory.component.html',
  styles: []
})
export class ListFactoryComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  static empty(): Shoppinglist {
    return new Shoppinglist(null, null, null, new Date(), [], false, '', '', []);
  }

  static fromObject(rawShoppinglist: any): Shoppinglist {
    return new Shoppinglist(
        rawShoppinglist.id,
        rawShoppinglist.helped_id,
        rawShoppinglist.helper_id,
        rawShoppinglist.due_date,
        rawShoppinglist.item,
        rawShoppinglist.status,
        rawShoppinglist.comment_helped,
        rawShoppinglist.comment_helper,
        rawShoppinglist.reciept,
    );
  }
}