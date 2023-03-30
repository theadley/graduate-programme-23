import {Component, OnInit} from '@angular/core';
import {NationalCallSign} from "../../models/duty";
import {DutyService} from "../../services/duty.service";

@Component({
  selector: 'app-duty-container',
  templateUrl: './duty-container.component.html',
  styleUrls: ['./duty-container.component.scss']
})
export class DutyContainerComponent implements OnInit{
  opsMembers: NationalCallSign[] = [];
  selectedOpsMember: NationalCallSign | undefined;

  constructor(private dutyService: DutyService) { }

  ngOnInit(): void {
    // Set up call
    this.dutyService.getNationalCallSigns();

    // Listen for changes
    this.dutyService.nationalCallSigns$.subscribe(opsDudes => this.opsMembers = opsDudes);

  }

  selectOpsMember(opsMember: NationalCallSign) {
    this.selectedOpsMember = opsMember;
  }
}
