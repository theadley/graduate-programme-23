import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromOpsAttendance from '../reducers/ops-attendance.reducer';
import {correlateAttendance} from "../../utils/utils";

export const selectOpsAttendanceState = createFeatureSelector<fromOpsAttendance.OpsState>(
  fromOpsAttendance.opsAttendanceFeatureKey
);

export const selectOpsMembers = createSelector(
  selectOpsAttendanceState,
  (state) => state.opsMembers
);

export const selectOpsMembersContacts = createSelector(
  selectOpsAttendanceState,
  (state) => state.opsMembersContacts
);

export const selectOpsAttendances = createSelector(
  selectOpsAttendanceState,
  (state) => state.opsMembersAttendances
);

export const selectSelectedOpsMember = createSelector(
  selectOpsAttendanceState,
  (state) => state.selectedOpsMember
);

// Derived State Selectors
export const selectCorrelatedOpsMembers = createSelector(
  selectOpsMembers,
  selectOpsMembersContacts,
  selectOpsAttendances,
  (opsMembers, opsMembersContacts, opsMembersAttendances) => correlateAttendance(opsMembers, opsMembersContacts, opsMembersAttendances)
);

export const selectSelectedCorrelatedOpsMember = createSelector(
  selectSelectedOpsMember,
  selectCorrelatedOpsMembers,
  (opsMember, correlatedOpsMembers) =>
    correlatedOpsMembers.find(member => member.opsMember.nationalCallSignId === opsMember?.nationalCallSignId)
);
