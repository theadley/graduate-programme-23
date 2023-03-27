import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Person} from "../models/person";
import {SharedDataService} from "../../services/shared-data.service";

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent implements OnInit, OnDestroy{
  @Input() person: Person | undefined;
  @Input() isLoading = false;
  @Output() killMe = new EventEmitter<null>();
  @Output() alterAgeBy = new EventEmitter<number>();

  @Input() alive = false;
  @Output() aliveChange = new EventEmitter<boolean>();

  BMIValue = 30;

  constructor(protected actuallyTheSameServiceLOL: SharedDataService) {
  }

  ngOnInit(): void {
    console.log("I'm alive!")
  }

  ngOnDestroy(): void {
    console.log("I'm ded!")
  }

  hideMe() {
    console.log('Hide! Quick!');
    this.killMe.emit();
  }

  increaseAge() {
    this.alterAgeBy.emit(1)
  }

  decreaseAge() {
    this.alterAgeBy.emit(-1)
  }

  changeColorToRed(): void {
    this.actuallyTheSameServiceLOL.color = 'red';
  }
}
