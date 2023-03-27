import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private _color = 'red';

  private _sharedValue = new BehaviorSubject(1);

  mySharedValue = this._sharedValue.asObservable();

  get color() {
    return this._color;
  }

  set color(value: string) {
    this._color = value.toLowerCase();
  }

  changeValue(newValue: number) {
    this._sharedValue.next(newValue);
  }
}
