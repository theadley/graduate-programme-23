import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import * as OpsAttendanceActions from '../actions/ops-attendance.actions';
import {DutyService} from "../../services/duty.service";


@Injectable()
export class OpsAttendanceEffects {

  getOpsMembers = createEffect(()=> {
    return this.actions$.pipe(
      ofType(OpsAttendanceActions.getOpsData),
      switchMap(() =>
        this.opsService.getNationalCallSignsObs()
          .pipe(
            map(res =>
              OpsAttendanceActions.getOpsMembersComplete({opsMembers: res})
            ),
            catchError(err => {
              console.error(err);
              return EMPTY;
            })
          )
      )
    )
  });

  getOpsMembersContacts = createEffect(()=> {
    return this.actions$.pipe(
      ofType(OpsAttendanceActions.getOpsData),
      switchMap(() =>
        this.opsService.getOpsContactsObs()
          .pipe(
            map(res =>
              OpsAttendanceActions.getOpsContactsComplete({opsMembersContacts: res})
            ),
            catchError(err => {
              console.error(err);
              return EMPTY;
            })
          )
      )
    )
  });

  getOpsMembersAttendances = createEffect(()=> {
    return this.actions$.pipe(
      ofType(OpsAttendanceActions.getOpsData),
      switchMap(() =>
        this.opsService.getDutyStatusesObs()
          .pipe(
            map(res =>
              OpsAttendanceActions.getOpsAttendancesComplete({opsMembersAttendances: res})
            ),
            catchError(err => {
              console.error(err);
              return EMPTY;
            })
          )
      )
    )
  });

  constructor(private actions$: Actions, private opsService: DutyService) {}
}
