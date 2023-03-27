import { countries$, filteredFlight$, selectedCountry$, selectedFlightICAO24$ } from "./main";
import { IFlight } from "./models/flight";

// set up drop down list of countries given flights
countries$.subscribe(countries => {
  // Clean up old junk
  const dropDownList = document.getElementById('selected-country');
  if (dropDownList) {
    dropDownList.remove();
  }

  // Make the new list
  const ddl = document.createElement('select');
  ddl.id = 'selected-country';
  ddl.innerHTML = `${Array.from(countries)
    .sort()
    .map(country => `<option value="${country}">${country}</option>`)
    .join('')
    }`;
  ddl.addEventListener('change', handleCountryChange);
  document.getElementById('app')?.appendChild(ddl);

});

function handleCountryChange(event: Event) {
  selectedCountry$.next(
    (event.target as HTMLSelectElement).value
  );
}


// List of flights
filteredFlight$.subscribe(flights => {
  console.log(flights);
  // clean up code
  const flightButtonList = document.getElementById('flight-buttons');
  if (flightButtonList) {
    flightButtonList.remove();
  }

  const flightButtons = document.createElement('div');
  flightButtons.id = 'flight-buttons';
  for (let flight of flights) {
    const btn = document.createElement('button');
    btn.innerText = flight.callsign;
    btn.addEventListener('click', () => selectFlight(flight));
    flightButtons.appendChild(btn);
  }
  document.getElementById('app')?.appendChild(flightButtons);

});

function selectFlight(flight: IFlight) {
  selectedFlightICAO24$.next(flight.icao24);
}