import { Component, OnInit } from '@angular/core';
import {Shoppinglist} from "../shared/shoppinglist";
import {ListFactoryComponent} from "../shared/list-factory/list-factory.component";
import {ShoppingListService} from "../shared/shopping-list.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../shared/authentication.service";

@Component({
  selector: 'bs-mylist-detail',
  templateUrl: './mylist-detail.component.html',
  styleUrls: ['./mylist-detail.component.css']
})
export class MylistDetailComponent implements OnInit {

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
    console.log(this.shoppingList[params['id']]);
    this.bs.getSingle(params['id']).subscribe(list => console.log(list));
    console.log(this.shoppingList);
  }

  completeList(){
    console.log(this.shoppingList.status);

    if(this.shoppingList.status === false) {
      this.shoppingList.status = true;
    }

    console.log(this.shoppingList);

    this.bs.update(this.shoppingList).subscribe(res => {
      this.router.navigate(['../../lists', this.shoppingList.id], { relativeTo: this.route});
    });
  }

}
