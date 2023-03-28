import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {F1APIResponse} from "../models/f1";

@Injectable({
  providedIn: 'root'
})
export class F1Service {

  BASE_API_URL = `https://ergast.com/api/f1/`;
  constructor(private httpClient: HttpClient) { }

  getCurrentF1Season() {
    return this.httpClient.get<F1APIResponse>(`${this.BASE_API_URL}current.json`)
  }

  getF1Season(year = 'current') {
    return this.httpClient.get<F1APIResponse>(`${this.BASE_API_URL}${year}.json`)
  }
  getF1RaceResult(year = 'current', raceNumber = 1) {
    return this.httpClient.get<F1APIResponse>(`${this.BASE_API_URL}${year}/${raceNumber}/results.json`)
  }
}
