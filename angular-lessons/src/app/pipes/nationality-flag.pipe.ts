import { Pipe, PipeTransform } from '@angular/core';
import {getCountryCodeByNationality} from "../utils/thankYouAnilSingh";

@Pipe({
  name: 'nationalityFlag'
})
export class NationalityFlagPipe implements PipeTransform {

  transform(nationality: string): string | undefined {
    const countryCode = getCountryCodeByNationality(nationality);
    if (countryCode === 'UNK') return undefined;
    return `https://flagsapi.com/${countryCode}/flat/64.png`;
  }

}
