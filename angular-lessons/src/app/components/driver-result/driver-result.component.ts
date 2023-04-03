import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Result} from "../../models/f1";

@Component({
  selector: 'app-driver-result',
  templateUrl: './driver-result.component.html',
  styleUrls: ['./driver-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DriverResultComponent {
  @Input() driverResult: Result | undefined;
}
