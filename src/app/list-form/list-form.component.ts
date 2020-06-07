import {ActivatedRoute, Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormArray, Validators} from '@angular/forms';

import {ListFactoryComponent} from '../shared/list-factory/list-factory.component';
import {ShoppingListService} from '../shared/shopping-list.service';
import {AuthService} from '../shared/authentication.service';
import {Shoppinglist} from '../shared/shoppinglist';
import {ListFormErrorMessages} from "./list-form-error-messages";

@Component({
    selector: 'bs-list-form',
    templateUrl: './list-form.component.html',
    styleUrls: ['./list-form.component.css']
})
export class ListFormComponent implements OnInit {
    listForm: FormGroup;
    list = ListFactoryComponent.empty();
    errors: { [key: string]: string } = {};l
    item: FormArray;

//   images: FormArray;

    constructor(
        private fb: FormBuilder,
        private bs: ShoppingListService,
        private route: ActivatedRoute,
        private router: Router,
        public authService: AuthService
    ) {
    }

    submitForm() {
        // filter empty values
        const list: Shoppinglist = ListFactoryComponent.fromObject(this.listForm.value);
        console.log(list);
        list.helped_id = this.listForm.value.helped_id;
        list.due_date = this.listForm.value.due_date; // jsut for testing
        list.comment_helped = this.listForm.value.comment_helped; // jsut for testing
        list.item = [];
        list.item['item_name'] = this.listForm.value.item_name;
        list.item['quantity'] = this.listForm.value.quantity;
        list.item['max_price'] = this.listForm.value.max_price;
        console.log(list);
        this.bs.create(list).subscribe(res => {
            this.list = ListFactoryComponent.empty();
            this.listForm.reset(ListFactoryComponent.empty());
            this.router.navigate(['../lists'], {relativeTo: this.route});
        });
    }

    initList() {
        this.listForm = this.fb.group({
            id: [this.list.helped_id, [
                Validators.required
            ]],
            due_date: this.list.due_date,
            comment_helped: this.list.comment_helped
        });
    }

    // aint nobody got time for that
    updateErrorMessage() {

    }

    addItem() {

    }


    ngOnInit() {
        this.listForm = this.fb.group({
            helped_id: [this.list.helped_id, Validators.required],
            due_date: [this.list.due_date, Validators.required],
            comment_helped: [this.list.comment_helped, Validators.max(800)],
            // // items: [this.list.item],
            item_name: [this.list.item[0]],
            quantity: [this.list.item[1]],
            max_price: [this.list.item[2]]
        });
        this.listForm.statusChanges.subscribe(() =>
            this.updateErrorMessages());
    }

    updateErrorMessages() {
        this.errors = {};
        for (const message of ListFormErrorMessages) {
            const control = this.listForm.get(message.forControl);
            if (control &&
                control.dirty &&
                control.invalid &&
                control.errors [message.forValidator] &&
                !this.errors [message.forControl]) {
                this.errors [message.forControl] = message.text;
            }
        }
    }

}