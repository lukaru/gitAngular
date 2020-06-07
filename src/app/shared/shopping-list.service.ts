import {Injectable} from '@angular/core';
import {Shoppinglist, Reciept, Item} from "./shoppinglist";
import {Observable, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {catchError, retry} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})

@Injectable()
export class ShoppingListService {
    shoppingLists: Shoppinglist[];
    private api = 'http://coronaneu.s1710456008.student.kwmhgb.at/api/';

    constructor(private http: HttpClient) {

    }

    getAll(): Observable<Array<Shoppinglist>>{
        return this.http.get(`${this.api}shoppingLists`).pipe(retry(3)).pipe(catchError(this.errorHandler));
    }

    getMy(id: number): Observable<Array<Shoppinglist>>{
        return this.http.get(`${this.api}shoppingLists/${id}`).pipe(retry(3)).pipe(catchError(this.errorHandler));
    }

    getAvailable(): Observable<Array<Shoppinglist>>{
        return this.http.get(`${this.api}available`).pipe(retry(3)).pipe(catchError(this.errorHandler));
    }

    getSingle(id: number): Observable<Shoppinglist>{
        return this.http.get(`${this.api}detail/${id}`).pipe(retry(3)).pipe(catchError(this.errorHandler));
    }

    getUser(id: number): Observable<Shoppinglist>{
        return this.http.get(`${this.api}user/${id}`).pipe(retry(3)).pipe(catchError(this.errorHandler));
    }

    create(shoppingList: Shoppinglist): Observable<any>{
        return this.http.post(`${this.api}list`, shoppingList)
            .pipe(retry(3)).pipe(catchError(this.errorHandler));
    }

    update(shoppingList: Shoppinglist): Observable<any>{
        return this.http.put(`${this.api}signin/${shoppingList.id}`, shoppingList)
            .pipe(retry(3)).pipe(catchError(this.errorHandler));
    }

    private errorHandler(error: Error | any): Observable<any> {
        return throwError(error);
    }
}
