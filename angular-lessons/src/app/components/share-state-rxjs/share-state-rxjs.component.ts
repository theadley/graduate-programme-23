import {Component, OnDestroy, OnInit} from '@angular/core';
import {SharedDataService} from "../../services/shared-data.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-share-state-rxjs',
  templateUrl: './share-state-rxjs.component.html',
  styleUrls: ['./share-state-rxjs.component.scss']
})
export class ShareStateRxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription | undefined;

  constructor(protected sharedDataService: SharedDataService) {
  }

  ngOnInit(): void {
    this.subscription = this.sharedDataService.mySharedValue.subscribe(value => console.log(value))
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  changeValue() {
    this.sharedDataService.changeValue(Math.random()*50);
  }

}
