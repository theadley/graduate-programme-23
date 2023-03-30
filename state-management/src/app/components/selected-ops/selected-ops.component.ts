import {Component, Input, OnInit} from '@angular/core';
import {NationalCallSign, OpsMemberContact, OpsVehicleAttendance} from "../../models/duty";
import {DutyService} from "../../services/duty.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-selected-ops',
  templateUrl: './selected-ops.component.html',
  styleUrls: ['./selected-ops.component.scss']
})
export class SelectedOpsComponent implements OnInit{
  objectKeys = Object.keys; // oof jank
  _selectedOpsMember: NationalCallSign | undefined;
  @Input() set selectedOpsMember(opsMember: NationalCallSign) {
    this._selectedOpsMember = opsMember;
    this.correlateAttendance();
  }

  opsMembersContacts: OpsMemberContact[] = [];
  latestOpsVehicleAttendances: OpsVehicleAttendance[] = [];

  attendanceWithContacts: {attendance: OpsVehicleAttendance, contact: OpsMemberContact} | null = null;

  constructor(private dutyService: DutyService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    // Get Data
    this.dutyService.getOpsContacts();
    this.dutyService.getDutyStatuses();

    // Process Data
    this.dutyService.opsContacts$.subscribe(contacts => {
      this.opsMembersContacts = contacts;
      this.correlateAttendance();
    });

    this.dutyService.dutyStatuses$.subscribe(attendances => {
      this.latestOpsVehicleAttendances = attendances;
      this.correlateAttendance();
    });

  }

  correlateAttendance() {
    this.attendanceWithContacts = null;
    if (this._selectedOpsMember && this.latestOpsVehicleAttendances && this.opsMembersContacts) {

      let foundAttendance: OpsVehicleAttendance | undefined = this.latestOpsVehicleAttendances.find(attendance => attendance.vehicleRegistration === this._selectedOpsMember?.registration);
      if (!foundAttendance) {
        foundAttendance = {
          dateTime: this.datePipe.transform(new Date(), 'yyyy-MM-ddTHH:mm:ss.SSS') + '0000Z',
          vehicleRegistration: this._selectedOpsMember.registration,
          dutyDateTime: this.datePipe.transform(new Date(), 'yyyy-MM-ddTHH:mm:ss.SSS') + '0000Z',
        };
      }

      // Only works if we matched an attendance by registration - flaky af
      let foundContact = this.opsMembersContacts.find(contact => contact.customerVehicleId === foundAttendance?.customerVehicleId);
      if (!foundContact) {
        foundContact = {
          alternativeNumber: '',
          customerVehicleId: foundAttendance?.customerVehicleId ?? 0,
          dateTime: this.datePipe.transform(new Date(), 'yyyy-MM-ddTHH:mm:ss.SSS') + '0000Z',
          previousAlternativeNumber: '',
          previousSMSNumber: '',
          smsNumber: '',
          updateDateTime: this.datePipe.transform(new Date(), 'yyyy-MM-ddTHH:mm:ss.SSS') + '0000Z',
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

      // For updating later
      this.attendanceWithContacts = {attendance: foundAttendance, contact: foundContact};
    }
  }
}
