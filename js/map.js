import {COORDINATES, ZOOM} from './constant.js';
import {renderCard} from './card.js';
import {createOffersArray} from './data.js';
import {putCoordinatesInForm} from './util.js';
import {makeFormsActive, makeFormsDisabled} from './form.js';

makeFormsDisabled();
const allAdvertisements = createOffersArray();

const map = L.map('map-canvas')
  .on('load', () => {
    makeFormsActive();
    document.querySelector('#address').value = `lat: ${COORDINATES.Latitude} lng: ${COORDINATES.Longitude}`;
  })
  .setView({
    lat: COORDINATES.Latitude,
    lng: COORDINATES.Longitude,
  }, ZOOM);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const createAdvertisemenPopup = (point) => renderCard(point);

const mainPinIcon = L.icon({
  iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: COORDINATES.Latitude,
    lng: COORDINATES.Longitude,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  putCoordinatesInForm(evt);
});

const markerGroup = L.layerGroup().addTo(map);

const createMarker = (advertisement) => {
  const {lat, lng} =  advertisement.spotLocation;

  const icon = L.icon({
    iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

  marker.addTo(markerGroup).bindPopup(createAdvertisemenPopup(advertisement));
};

const nextButton = document.querySelector('#housing-type');

allAdvertisements.slice(0, 2).forEach((advertisement) => {
  createMarker(advertisement);
});

let advertisementsLength = 2;

nextButton.addEventListener('change', () => {
  markerGroup.clearLayers();

  allAdvertisements.slice(advertisementsLength, advertisementsLength + 2).forEach((advertisement) => {
    createMarker(advertisement);
  });
  advertisementsLength += 2;
  nextButton.remove();
});
