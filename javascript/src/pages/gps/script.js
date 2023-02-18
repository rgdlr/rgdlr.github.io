"use strict";

import { ATTRIBUTE, ELEMENT, EVENT, getCoordinates } from "../../js/index.js";

const successCallback = (parameter) => {
  if (!parameter || !parameter.coords || !parameter.timestamp) {
    return;
  }

  const UNKNOWN_COORDINATE = "<i>unknown<i>";
  const DELTA = 0.0025;
  const ZOOM = 17;

  const { coords, timestamp } = parameter;
  const { latitude, longitude, altitude } = coords;

  const position = {
    latitude: window.document.querySelector(".position-latitude-value"),
    longitude: window.document.querySelector(".position-longitude-value"),
    altitude: window.document.querySelector(".position-altitude-value"),
  };

  position.latitude.innerHTML = latitude ?? UNKNOWN_COORDINATE;
  position.longitude.innerHTML = longitude ?? UNKNOWN_COORDINATE;
  position.altitude.innerHTML = altitude ?? UNKNOWN_COORDINATE;

  const box = {
    topLeft: longitude - DELTA,
    topRight: latitude - DELTA,
    bottomLeft: longitude + DELTA,
    bottomRight: latitude + DELTA,
  };

  const map = {
    class: "position-map-iframe",
    container: window.document.querySelector(".position-map"),
    element: window.document.createElement(ELEMENT.IFRAME),
    footer: {
      class: "position-map-footer",
      element: window.document.createElement(ELEMENT.A),
      href: `https://www.openstreetmap.org/#map=${ZOOM}/${latitude}/${longitude}`,
      target: "_blank",
      text: "Open in Open Street Map",
    },
    height: Math.min(300, window.screen.height * 0.4),
    src: `https://www.openstreetmap.org/export/embed.html?bbox=${box.topLeft}%2C${box.topRight}%2C${box.bottomLeft}%2C${box.bottomRight}&amp;layer=mapnik`,
    width: Math.min(500, window.screen.width * 0.9),
  };

  map.element.setAttribute(ATTRIBUTE.CLASS, map.class);
  map.element.setAttribute(ATTRIBUTE.SRC, map.src);

  map.footer.element.textContent = map.footer.text;
  map.footer.element.setAttribute(ATTRIBUTE.CLASS, map.footer.class);
  map.footer.element.setAttribute(ATTRIBUTE.HREF, map.footer.href);
  map.footer.element.setAttribute(ATTRIBUTE.TARGET, map.footer.target);

  Array.from(map.container.children).forEach(
    (child) => !child.classList.contains("position-map-osm") && child.remove()
  );

  map.container.appendChild(map.element);
  map.container.appendChild(map.footer.element);
};

getCoordinates(successCallback, successCallback);

// TODO : useful but not necessary functionality

function shouldUpdateMap({ currentWidth, previousWidth }) {
  const isCurrentMobile = currentWidth.innerWidth < 550 || currentWidth.outerWidth < 550;
  const isPreviousMobile = previousWidth.innerWidth < 550 || previousWidth.outerWidth < 550;
  return isCurrentMobile || isPreviousMobile;
}

function updateMapOnResize() {
  let previousWidth = {
    innerWidth: window.innerWidth,
    outerWidth: window.outerWidth,
  };
  window.addEventListener(EVENT.RESIZE, (event) => {
    const currentWidth = {
      innerWidth: window.innerWidth,
      outerWidth: window.outerWidth,
    };
    if (shouldUpdateMap({ currentWidth, previousWidth })) {
      getCoordinates(successCallback, successCallback);
    }
    previousWidth = currentWidth;
  });
}

// TODO : use functionality in project : make (mobile map == vertical) + (desktop map == horizontal)

// const query = `(max-width: ${DEVICE.MAX_WIDTH.MOBILE.LARGE})`;
// const callback = () => console.info("Reached mobile breakpoint");
// matchMediaQueryOnMatches(query, callback);

// TODO : use OSM and/or Leaflet

// function initMap(id) {
//   const map = new OpenLayers.Map(id);
//   const layer = new OpenLayers.Layer.OSM();
//   const fromProjection = new OpenLayers.Projection("EPSG:4326"); // Transform from WGS 1984
//   const toProjection = new OpenLayers.Projection("EPSG:900913"); // to Spherical Mercator Projection
//   const position = new OpenLayers.LonLat(13.41, 52.52).transform(fromProjection, toProjection);
//   const zoom = 15;
//   map.addLayer(layer);
//   map.setCenter(position, zoom);
// }
// initMap("position-map-osm");
