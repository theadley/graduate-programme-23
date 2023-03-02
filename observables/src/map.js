import { issPos$ } from "./obs";

const map = L.map("map").setView([51.505, -0.09], 13);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const historyOfPos =
  JSON.parse(localStorage.getItem("polyLine")).filter(
    (latlng) => latlng[0] && latlng[1]
  ) ?? [];
let polyLine;

issPos$.subscribe((pos) => {
  if (!pos || !pos.latitude || !pos.longitude) return; // gaurd clause
  historyOfPos.push([pos.latitude, pos.longitude]);
  localStorage.setItem("polyLine", JSON.stringify(historyOfPos));
  if (polyLine) {
    map.removeLayer(polyLine);
  }
  polyLine = L.polyline(historyOfPos, { color: "red" }).addTo(map);
  map.flyTo([pos.latitude, pos.longitude], map.getZoom(), { duration: 1 });
});
