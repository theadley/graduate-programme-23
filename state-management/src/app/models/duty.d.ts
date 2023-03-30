export interface NationalCallSign {
  nationalCallSignId: number;
  username: string;
  nationalCode: string;
  province: string;
  name: string;
  cell: string;
  registration: string;
  make: string;
  model: string;
  tems: boolean;
  deleted: boolean;
  makeId: number;
  modelId: number;
}
export interface OpsVehicleAttendance {
  opsVehicleAttendanceId?: number;
  dateTime: string;
  customerVehicleId?: number;
  vehicleRegistration: string;
  vehicleAlias?: string;
  dutyStatus?: string;
  dutyUser?: string;
  dutyDateTime: string;
  dutyUserId?: number;
  obreferenceNumber?: number;
  dutyStatusId?: number;
}
export interface OpsMemberContact {
  alternativeNumber: string;
  customerVehicleId: number;
  dateTime: string;
  previousAlternativeNumber: string;
  previousSMSNumber: string;
  smsNumber: string;
  updateDateTime: string;
  userName: string;
}
export interface CorrelatedOpsMember {
  opsMember: NationalCallSign;
  attendance: OpsVehicleAttendance;
  contact: OpsMemberContact;
}
