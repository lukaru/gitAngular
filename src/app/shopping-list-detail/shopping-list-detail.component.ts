import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Shoppinglist } from "../shared/shoppinglist";
import {ActivatedRoute, Router} from "@angular/router";
import {ShoppingListService} from "../shared/shopping-list.service";
import {ListFactoryComponent} from "../shared/list-factory/list-factory.component";
import {AuthService} from "../shared/authentication.service";

@Component({
  selector: 'bs-shopping-list-detail',
  templateUrl: './shopping-list-detail.component.html',
  styles: []
})
export class ShoppingListDetailComponent implements OnInit {
  shoppingList: Shoppinglist = ListFactoryComponent.empty();


  constructor(
      private bs: ShoppingListService,
      private route: ActivatedRoute,
      private router: Router,
      public authService: AuthService
  ) {}

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    this.bs.getSingle(params['id']).subscribe(list => this.shoppingList = list[0]);
    this.bs.getSingle(params['id']).subscribe(list => console.log(list));
    console.log(this.shoppingList);
  }

  updateStatus(){
    console.log(this.shoppingList.helper_id);

    if(this.shoppingList.helper_id == null){
      this.shoppingList.helper_id = localStorage.userId;
    }

    console.log(this.shoppingList.helper_id);

    this.bs.update(this.shoppingList).subscribe(res => {
  this.router.navigate(['../../lists', this.shoppingList.id], { relativeTo: this.route})
})
}


}
