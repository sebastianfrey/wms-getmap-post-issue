import esriConfig from 'https://js.arcgis.com/next/@arcgis/core/config.js';
import Map from "https://js.arcgis.com/next/@arcgis/core/Map.js";
import MapView from "https://js.arcgis.com/next/@arcgis/core/views/MapView.js";
import WMSLayer from "https://js.arcgis.com/next/@arcgis/core/layers/WMSLayer.js";
import LayerList from "https://js.arcgis.com/next/@arcgis/core/widgets/LayerList.js";

esriConfig.request.maxUrlLength = 400;

const bootstrap = () => {
  const map = new Map({
    basemap: {
      baseLayers: [],
    },
    layers: [new WMSLayer({
      url: "https://sgx.geodatenzentrum.de/wms_topplus_open",
    })],
  });

  const spatialReference = {
    wkid: 25832,
  };

  const extent = {
    spatialReference,
    xmin: 530031.723903733,
    ymin: 5892333.447497229,
    xmax: 561004.9900602706,
    ymax: 5898786.21127984,
  };

  const view = new MapView({
    container: 'map',
    map: map,
    spatialReference,
    extent,
  });

  let layerList = new LayerList({
    view: view,
  });
  // Adds widget below other elements in the top left corner of the view
  view.ui.add(layerList, {
    position: "top-left"
  });

  view.ui.add(document.getElementById('description'), {
    position: "top-right"
  });
};

window.onload = bootstrap;