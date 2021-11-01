import {COORDINATES, ZOOM} from './constant.js';
import {renderCard} from './card.js';
import {makeFormsActive, makeFormsDisabled} from './form.js';
import {getData} from './api.js';
import {createOffersFiltered} from './filter.js';
import {showAlertNotGetData} from './util.js';

makeFormsDisabled();

const putCoordinatesInForm = (evt) => {
  document.querySelector('#address').value = `lat: ${evt.target.getLatLng()['lat'].toFixed(5)} lng: ${evt.target.getLatLng()['lng'].toFixed(5)}`;
};

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

const createAdvertisemenPopup = (point) =>  renderCard(point);

const mainPinIcon = L.icon({
  iconUrl: 'leaflet/images/marker-icon.png',
  iconSize: [25, 52],
  iconAnchor: [12, 52],
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

const nextButton = document.querySelector('.btn');

const createMarker = (advertisement, markerGroup) => {
  const {lat, lng} =  advertisement.location;

  const icon = L.icon({
    iconUrl: 'leaflet/images/marker-icon.png',
    iconSize: [25, 40],
    iconAnchor: [12, 40],
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

const rendering = (dataOffers) => {
  const mapFiltersForm = document.querySelector('.map__filters');
  const markerGroup = L.layerGroup().addTo(map);
  let advertisementsLength = 10;
  dataOffers.slice(0, 10).forEach((advertisement) => {
    createMarker(advertisement, markerGroup);
  });

  mapFiltersForm.addEventListener('change', () => {
    markerGroup.clearLayers();
    const filteredOffers = createOffersFiltered(dataOffers);
    filteredOffers.forEach((advertisement) => {
      createMarker(advertisement, markerGroup);
    });
    return createOffersFiltered(dataOffers);

  });

  nextButton.addEventListener('click', () => {
    markerGroup.clearLayers();

    dataOffers.slice(advertisementsLength, advertisementsLength + 10).forEach((advertisement) => {
      createMarker(advertisement, markerGroup);
    });
    advertisementsLength += 10;
  });
};

const setUserFormGet = (onSuccess, onErrors) => {
  getData(
    (offers) => onSuccess(offers),
    (mes) => onErrors(mes),
  );
};

setUserFormGet(rendering, showAlertNotGetData);
