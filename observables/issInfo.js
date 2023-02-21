import { issPos$ } from "./obs";

issPos$.subscribe((issPosUpdate) => {
  const box = document.getElementById("iss-info");

  const content = `
  <h1>${issPosUpdate.name}</h1>
  <div class="info">
  <span>Altitude: ${Math.round(issPosUpdate.altitude)}km</span>
  <span>Velocity: ${Math.round(issPosUpdate.velocity)}km/h</span>
  <span>Visibility: ${issPosUpdate.visibility}</span>
  <span>Time: ${new Date(issPosUpdate.timestamp * 1000)}</span>
  <span>Latitude: ${Math.round(issPosUpdate.latitude * 100000) / 100000}</span>
  <span>Longitude: ${
    Math.round(issPosUpdate.longitude * 100000) / 100000
  }</span>
  </div>
  `;

  box.innerHTML = content;
});
