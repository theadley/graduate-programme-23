import { createAction, props } from '@ngrx/store';
import {NationalCallSign, OpsMemberContact, OpsVehicleAttendance} from "../../models/duty";

// API Actions
export const getOpsData = createAction(
  '[OpsAttendance] Get OPS Data'
);

export const getOpsMembersComplete = createAction(
  '[OpsAttendance] Get OPS Members Complete',
  props<{ opsMembers: NationalCallSign[] }>()
);

export const getOpsContactsComplete = createAction(
  '[OpsAttendance] Get OPS Contacts Complete',
  props<{ opsMembersContacts: OpsMemberContact[] }>()
);

export const getOpsAttendancesComplete = createAction(
  '[OpsAttendance] Get OPS Attendances Complete',
  props<{ opsMembersAttendances: OpsVehicleAttendance[] }>()
);

// UI Action

export const setSelectedOpsMember = createAction(
  '[OpsAttendance] Set Selected OPS Member',
  props<{ selectedOpsMember: NationalCallSign}>()
)
