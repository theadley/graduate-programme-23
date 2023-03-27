import { Pipe, PipeTransform } from '@angular/core';
import {Race} from "../models/f1";

@Pipe({
  name: 'filterRaces'
})
export class FilterRacesPipe implements PipeTransform {

  transform(races: Race[], filterText: string): Race[] {
    if (!races) return [];
    if(!filterText || filterText.length === 0) return races;

    const lowerFilterText = filterText.toLowerCase();

    return races.filter(race =>
      race.raceName.toLowerCase().indexOf(lowerFilterText) > -1 ||
      race.Circuit.circuitName.toLowerCase().indexOf(lowerFilterText) > -1 ||
      race.Circuit.Location.country.toLowerCase().indexOf(lowerFilterText) > -1
    );
  }

}
