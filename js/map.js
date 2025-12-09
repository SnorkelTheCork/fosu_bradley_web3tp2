import maplibregl from "maplibre-gl";

const carte = new maplibregl.Map({
  container: "map",
  style: "https://api.maptiler.com/maps/toner-v2/style.json?key=II3jaap2bE4SMRXXeMCe",
  center: [-76.046123, 40.0656206],
  zoom: 3,
  attributionControl: false
});
 