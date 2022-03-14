import esriConfig from "https://js.arcgis.com/next/@arcgis/core/config.js";
import Map from "https://js.arcgis.com/next/@arcgis/core/Map.js";
import MapView from "https://js.arcgis.com/next/@arcgis/core/views/MapView.js";
import WMSLayer from "https://js.arcgis.com/next/@arcgis/core/layers/WMSLayer.js";
import LayerList from "https://js.arcgis.com/next/@arcgis/core/widgets/LayerList.js";

esriConfig.request.maxUrlLength = 400;

const map = new Map({
  basemap: {
    baseLayers: [],
  },
  layers: [],
});

const view = new MapView({
  container: "map",
  map: map,
});

let layerList = new LayerList({
  view: view,
});
// Adds widget below other elements in the top left corner of the view
view.ui.add(layerList, {
  position: "top-left",
});

view.ui.add(document.getElementById("description"), {
  position: "top-right",
});

function loadLayer() {
  const formData = Object.fromEntries(
    new FormData(document.getElementById("layerForm"))
  );

  map.layers.removeAll();
  map.layers.add(
    new WMSLayer({
      url: formData.url,
    })
  );
}

loadLayer();

document
  .getElementById("loadLayerButton")
  .addEventListener("click", () => loadLayer());
