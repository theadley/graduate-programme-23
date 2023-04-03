import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CorrelatedOpsMember} from "../../models/duty";


@Component({
  selector: 'app-duty-controller',
  templateUrl: './duty-controller.component.html',
  styleUrls: ['./duty-controller.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DutyControllerComponent {

  @Input() correlatedOpsMembers: CorrelatedOpsMember[] = [];

  toggleDutyStatusSwitch(event: boolean) {
    console.log('On Duty:', event);
  }
}
