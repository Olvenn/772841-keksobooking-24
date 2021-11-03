import {COORDINATES, ZOOM, OFFERSHOWSLENGTH} from './constant.js';
import {renderCard} from './card.js';
import {makeFormsActive, makeFormsDisabled} from './form.js';
import {getData} from './api.js';
import {createOffersFiltered} from './filter.js';

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

  const createCard = (offers) => {
    offers.slice(0, OFFERSHOWSLENGTH).forEach((advertisement) => {
      createMarker(advertisement, markerGroup);
    });
  };

  createCard(dataOffers);

  const renderFilteredData = (dataOfferss) =>  {
    const filteredOffers = createOffersFiltered(dataOfferss);
    createCard(filteredOffers);
  };

  const change = (cb) => {
    mapFiltersForm.addEventListener('change', () => {
      markerGroup.clearLayers();
      cb();
    });
  };

  change(_.debounce(
    () => renderFilteredData(dataOffers),
    500,
  ));

};

const setUserFormGet = (onSuccess, onErrors) => {
  getData(
    (offers) => onSuccess(offers),
    (message) => onErrors(message),
  );
};

export {setUserFormGet, rendering};
