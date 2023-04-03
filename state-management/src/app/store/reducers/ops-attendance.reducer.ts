import { createFeature, createReducer, on } from '@ngrx/store';
import * as OpsAttendanceActions from '../actions/ops-attendance.actions';
import {NationalCallSign, OpsMemberContact, OpsVehicleAttendance} from "../../models/duty";

export const opsAttendanceFeatureKey = 'opsAttendance';

export interface OpsState {
  selectedOpsMember: NationalCallSign | null;
  opsMembers: NationalCallSign[];
  opsMembersContacts: OpsMemberContact[];
  opsMembersAttendances: OpsVehicleAttendance[];
}

export const initialState: OpsState = {
  selectedOpsMember: null,
  opsMembers: [],
  opsMembersContacts: [],
  opsMembersAttendances: []
};

export const reducer = createReducer(
  initialState,
  on(OpsAttendanceActions.getOpsMembersComplete, (state, {opsMembers}) => ({...state, opsMembers})),
  on(OpsAttendanceActions.getOpsAttendancesComplete, (state, {opsMembersAttendances}) => ({...state, opsMembersAttendances})),
  on(OpsAttendanceActions.getOpsContactsComplete, (state, {opsMembersContacts}) => ({...state, opsMembersContacts})),
  on(OpsAttendanceActions.setSelectedOpsMember, (state, {selectedOpsMember}) => ({...state, selectedOpsMember})),
);

export const opsAttendanceFeature = createFeature({
  name: opsAttendanceFeatureKey,
  reducer,
});

