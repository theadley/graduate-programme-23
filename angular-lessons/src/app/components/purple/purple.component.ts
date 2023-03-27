import {Component, OnDestroy, OnInit} from '@angular/core';
import {SharedDataService} from "../../services/shared-data.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-purple',
  templateUrl: './purple.component.html',
  styleUrls: ['./purple.component.scss']
})
export class PurpleComponent implements OnInit, OnDestroy {
  subscription: Subscription | undefined;

  constructor(private sharedDataService: SharedDataService) {
  }

  changeToPurple():void {
    this.sharedDataService.color = 'PURPLE';
  }


  ngOnInit(): void {
    this.subscription = this.sharedDataService.mySharedValue.subscribe(value => console.log(value))
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
