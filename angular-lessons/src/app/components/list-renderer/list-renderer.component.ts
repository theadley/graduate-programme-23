import { Component } from '@angular/core';

export interface ShoppingListItem {
  id: number;
  name: string;
  done: boolean;
}

@Component({
  selector: 'app-list-renderer',
  templateUrl: './list-renderer.component.html',
  styleUrls: ['./list-renderer.component.scss']
})
export class ListRendererComponent {
  renderThisList: ShoppingListItem[] = [
    {
      id: 1,
      name: 'Cupcake mix',
      done: false
    },{
      id: 2,
      name: 'Eggs',
      done: false
    },{
      id: 3,
      name: 'Milk',
      done: false
    },{
      id: 4,
      name: 'Flour',
      done: false
    }
  ];

  trackShoppingListItem(index: number, item: ShoppingListItem) {
    return item.id;
  }
}
