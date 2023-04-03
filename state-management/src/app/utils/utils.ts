import {CorrelatedOpsMember, NationalCallSign, OpsMemberContact, OpsVehicleAttendance} from "../models/duty";

export function correlateAttendance(
  opsMembers: NationalCallSign[],
  contacts: OpsMemberContact[],
  attendances: OpsVehicleAttendance[]
): CorrelatedOpsMember[] {

  const correlatedOpsMembers: CorrelatedOpsMember[] = [];

  if (opsMembers && attendances && contacts) {
    console.time('Correlating');
    opsMembers.forEach(opsMember => {
      let foundAttendance: OpsVehicleAttendance | undefined = attendances.find(attendance => attendance.vehicleRegistration === opsMember.registration);
      if (!foundAttendance) {
        foundAttendance = {
          dateTime: new Date().toISOString(),
          vehicleRegistration: opsMember.registration,
          dutyDateTime: new Date().toISOString(),
        };
      }

      // Only works if we matched an attendance by registration - flaky af
      let foundContact = contacts.find(contact => contact.customerVehicleId === foundAttendance?.customerVehicleId);
      if (!foundContact) {
        foundContact = {
          alternativeNumber: '',
          customerVehicleId: foundAttendance?.customerVehicleId ?? 0,
          dateTime: new Date().toISOString(),
          previousAlternativeNumber: '',
          previousSMSNumber: '',
          smsNumber: '',
          updateDateTime: new Date().toISOString(),
          userName: ''
        };
      } else {
        foundContact = {...foundContact};
      }
      if (!foundContact.smsNumber || foundContact.smsNumber === 'null') {
        foundContact.smsNumber = '';
      }
      if (!foundContact.alternativeNumber || foundContact.alternativeNumber === 'null') {
        foundContact.alternativeNumber = '';
      }

      correlatedOpsMembers.push({
        opsMember: opsMember,
        attendance: foundAttendance,
        contact: foundContact
      });
    });
    console.timeEnd('Correlating');
  }

  return correlatedOpsMembers;
}
