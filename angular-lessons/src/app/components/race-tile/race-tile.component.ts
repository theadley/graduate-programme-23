import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Race} from "../../models/f1";

@Component({
  selector: 'app-race-tile',
  templateUrl: './race-tile.component.html',
  styleUrls: ['./race-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RaceTileComponent {
  @Input() f1Race: Race | undefined;
  @Input() countryCode: string | undefined;
  @Output() click = new EventEmitter<Event>();

  onClick(event:Event) {
    this.click.emit(event);
  }
}
