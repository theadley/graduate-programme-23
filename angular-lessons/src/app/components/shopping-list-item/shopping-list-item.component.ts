import {Component, Input} from '@angular/core';
import {ShoppingListItem} from "../list-renderer/list-renderer.component";

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.scss']
})
export class ShoppingListItemComponent {
  @Input() item: ShoppingListItem | undefined;
  @Input() index: number | undefined;
}
