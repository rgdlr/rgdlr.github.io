"use strict";

import { ATTRIBUTE, getCoordinates } from "../../src/js/index.js";

const UNKNOWN_COORDINATE = "<i>unknown<i>";

const position = {
  latitude: window.document.querySelector(".position-latitude-value"),
  longitude: window.document.querySelector(".position-longitude-value"),
  altitude: window.document.querySelector(".position-altitude-value"),
};

const successCallback = (parameter) => {
  const { coords, timestamp } = parameter;
  const { latitude, longitude, altitude } = coords;

  position.latitude.innerHTML = latitude ?? UNKNOWN_COORDINATE;
  position.longitude.innerHTML = longitude ?? UNKNOWN_COORDINATE;
  position.altitude.innerHTML = altitude ?? UNKNOWN_COORDINATE;

  const box = {
    topLeft: longitude - 0.0025,
    topRight: latitude - 0.0025,
    bottomRight: latitude + 0.0025,
    bottomLeft: longitude + 0.0025,
  };

  const map = {
    class: "position-map-iframe",
    container: window.document.querySelector(".position-map"),
    element: window.document.createElement("iframe"),
    height: Math.min(250, window.screen.height * 0.25),
    footer: `"<br /><small><a href="https://www.openstreetmap.org/#map=14/40.4024/-3.7130">Ver mapa más grande</a></small>"`,
    src: `https://www.openstreetmap.org/export/embed.html?bbox=${box.topLeft}%2C${box.topRight}%2C${box.bottomLeft}%2C${box.bottomRight}&amp;layer=mapnik`,
    width: Math.min(500, window.screen.width * 0.9),
  };

  map.element.setAttribute(ATTRIBUTE.CLASS, map.class);
  map.element.setAttribute(ATTRIBUTE.HEIGHT, map.height);
  map.element.setAttribute(ATTRIBUTE.WIDTH, map.width);
  map.element.setAttribute(ATTRIBUTE.SRC, map.src);

  map.container.appendChild(map.element);
  // map.container.appendChild(map.footer);
};

getCoordinates(successCallback, successCallback);

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

// initMap("position-map-basic-map");
