import { Component } from '@angular/core';
import {Person} from "./components/models/person";
import {SharedDataService} from "./services/shared-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isTestAlive = true;
  isLoading = true;
  user: Person = {
    name: 'Tim',
    surname: 'Headley',
    age: 30
  }

  myClassList = ['text-blue-500', 'xs:text-red-50'];

  constructor(protected sharedDataService: SharedDataService) {
  }

  changeAgeBy(value: number): void {
    this.user.age += value;
  }

  changeColorToBlue(): void {
    this.sharedDataService.color = 'blue';
  }

  log(what: string) {
    console.log(what);
  }
}
