# GetMap is sent as POST

This repository contains a sample Application, which demonstrates that GetMap requests in the ArcGIS JS API v4 are sent as invalid encoded POST request, when the GetMap request URL exceeds the configured `maxUrlLength` of [@arcgis/core/config](https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html#request).

The `maxUrlLength` in this sample is set to `400` which will lead in most cases to invalid GetMap requests. Note: This is just for demo purpose, to enforce POST for GetMap requests.