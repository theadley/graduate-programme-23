import {Component} from '@angular/core';
import {CorrelatedOpsMember, NationalCallSign} from "../../models/duty";
import {Store} from "@ngrx/store";
import {OpsState} from "../../store/reducers/ops-attendance.reducer";
import {setSelectedOpsMember} from "../../store/actions/ops-attendance.actions";
import {Observable} from "rxjs";
import {
  selectCorrelatedOpsMembers,
  selectSelectedCorrelatedOpsMember,
} from "../../store/selectors/ops-attendance.selectors";

@Component({
  selector: 'app-duty-container',
  templateUrl: './duty-container.component.html',
  styleUrls: ['./duty-container.component.scss']
})
export class DutyContainerComponent {
  correlatedOPSMembers$: Observable<CorrelatedOpsMember[]>;
  selectedOpsMember$: Observable<CorrelatedOpsMember | undefined>;

  constructor(private store: Store<OpsState>) {
    this.correlatedOPSMembers$ = store.select(selectCorrelatedOpsMembers);
    this.selectedOpsMember$ = store.select(selectSelectedCorrelatedOpsMember);
  }

  selectOpsMember(opsMember: NationalCallSign) {
    this.store.dispatch(setSelectedOpsMember({selectedOpsMember: opsMember}))
  }
}
