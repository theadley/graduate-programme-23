import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.scss']
})
export class NameInputComponent {
  @Input() cupcake = '';
  @Output() cupcakeChange = new EventEmitter<string>();

  handleValueChange(event: Event) {
    this.cupcakeChange.emit((event.target as HTMLInputElement).value)
  }
}
