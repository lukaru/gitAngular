import { Item } from './item';
export { Item } from './item';
import { Reciept } from './reciept';
export { Reciept } from './reciept';

export class Shoppinglist {
    constructor(
      public id: number,
      public helped_id: number,
      public helper_id: number,
      public due_date: Date,
      public item: Item[],
      public status: boolean,
      public comment_helped?: string,
      public comment_helper?: string,
      public reciept?: Reciept[]

    ){}
}
