import { fromFetch } from "rxjs/fetch";
import { map, switchMap } from "rxjs/operators";
import { IFlight, IFlightAPIResponse } from "../models/flight";

export const flightArray$ = fromFetch("https://opensky-network.org/api/states/all").pipe(
  switchMap((response) => {
    return response.json() as Promise<IFlightAPIResponse>;
  }),
  map(result => {
    const flightArray = result.states.map(state => {
      const flight: IFlight = {
        icao24: state[0] as string ?? '0',
        callsign: state[1] as string ?? 'UNK',
        origin_country: state[2] as string ?? 'Bermuda Triangle Illuminati Confirmed',
        time_position: state[3] as number ?? 0,
        last_contact: state[4] as number ?? 0,
        longitude: state[5] as number ?? 0,
        latitude: state[6] as number ?? 0,
        baro_altitude: state[7] as number ?? 0,
        on_ground: state[8] as boolean ?? false,
        velocity: state[9] as number ?? 0,
        true_track: state[10] as number ?? 0,
        vertical_rate: state[11] as number ?? 0,
        sensors: state[12] as number[] ?? [],
        geo_altitude: state[13] as number ?? 0,
        squawk: state[14] as string ?? '',
        spi: state[15] as boolean ?? false,
        position_source: state[16] as number ?? 0,
        category: state[17] as number ?? 0,
      }
      return flight;
    })
    return flightArray;
  })
);