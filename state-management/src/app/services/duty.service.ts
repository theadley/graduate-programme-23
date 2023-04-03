import { Injectable } from '@angular/core';
import {NationalCallSign, OpsMemberContact, OpsVehicleAttendance} from "../models/duty";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DutyService {
  constructor(private http: HttpClient) { }

  getNationalCallSignsObs() {
    return this.http.get<NationalCallSign[]>('assets/callsigns.json');
  }

  getOpsContactsObs() {
    return this.http.get<OpsMemberContact[]>('assets/contacts.json');
  }

  getDutyStatusesObs() {
    return this.http.get<OpsVehicleAttendance[]>('assets/duty.json');
  }
}
