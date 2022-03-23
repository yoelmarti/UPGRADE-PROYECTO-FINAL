import L from 'leaflet'

export const IconLation = L.icon({
    iconUrl: require("../../assets/iconLocation.svg"),
    iconRetinaUrl: require("../../assets/iconLocation.svg"),
    iconAnchor: null,
    shadowAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    iconSize: [35,35],
    className: "leaflet-venue-icon"
});
