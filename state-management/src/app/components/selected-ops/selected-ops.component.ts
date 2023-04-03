import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CorrelatedOpsMember} from "../../models/duty";


@Component({
  selector: 'app-selected-ops',
  templateUrl: './selected-ops.component.html',
  styleUrls: ['./selected-ops.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectedOpsComponent{
  @Input() selectedCorrelatedOPSMember: CorrelatedOpsMember | undefined;
}
