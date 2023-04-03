import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {OpsState} from "./store/reducers/ops-attendance.reducer";
import {getOpsData} from "./store/actions/ops-attendance.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<OpsState>) {}

  ngOnInit() {
    this.store.dispatch(getOpsData());
  }
}
