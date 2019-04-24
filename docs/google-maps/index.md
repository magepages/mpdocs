# Google Maps
## Overview

Magento's Contact Us page is too simple, it displays the text only. With the release of Mageplaza Google Maps, it allows adding Google Maps with an ease that is displayed on the contact us page. This also helps your online stores improve the trust of customers, especial when they know your location exactly.

## How to configure

### I. Configuration

Login to the Magento Admin, choose `Store > Settings > Configuration > Mageplaza Extensions > Google Maps`

![](https://i.imgur.com/zVsKDMB.png)

#### 1. General

![](https://i.imgur.com/eJpFv5M.png)

- **Enable**: Choose Yes to enable this feature
- **Insert on Contact Pgae**: Choose yes to insert Google Maps on Contact Page and show the `Position` field
- **Position**: There're 2 positions to display Google Maps on Contact Page, including Top and Bottom

#### 2. Map Settings
It supports 2 modes to set the maps as the following:

``Protocol = API``

![](https://i.imgur.com/lTB5hev.gif)

- **Google API Key**: Enter Google API Key. You can get the Google API Key [here](https://developers.google.com/maps/documentation/javascript/get-api-key)

- **Map Type**: There're 4 types to display maps on the frontend: Roadmap, Terrain, Satellite, and Hybrid.
- **Map Style**: This is a map style to display on the frontend. There're 10 popular map styles as below:

![](https://i.imgur.com/qcA6b3L.png)

- **Allow Map Dragging**: Choose Yes to allow dragging and dropping on the maps
- **Zoom Default**: The default zoom of the map when loading maps
- **Marker Icon**: Marker icon on the maps. You should the icon that has the size as 20x20 px.

- **Location Settings**: Map Setting > Location Settings

![](https://i.imgur.com/a6xcGzQ.png)

- **Address**: Enter the address shown on the map.
  - Click Get GPS coordinates button to load `Latitude` and `Longitude`.

- `Latitude`: Enter the latitude of the address
- `Longitude`: Enter the longitude of the address

``Protocol = Embed Code``:

This way, just embed the google iframe code to insert the map on the frontend without the map setting below

![](https://i.imgur.com/uRhLXWp.png)

- **Code**: Embed google iframe code. 

### II. Widget

By adding a widget, you can insert the map anywhere on your store.

#### How to create a widget

- **Step 1**: Login to Magento Admin, select Content> Elements> Widgets
- **Step 2**: Click the Add Widget button to start the widget installation

![](https://i.imgur.com/Ktx3Ou5.png)

- Choose `Type = Mageplaza Google Maps, Design Theme = Magento Luma`, then click on `Continue`

- **Step 3**: Fill in the information in the Storefrontend Properties section

![](https://i.imgur.com/uKSnP82.png)

- **Step 4**: Choose the position to show the widget

From `Layout Updates` > Click on `Add Layout Updates`:

![](https://i.imgur.com/qQWpc0E.png)

- **Step 5**: Save > System > Cache Management > Flush Magento Cache

## Frontend

### Use API

![](https://i.imgur.com/Gdlcw6o.png)

### Use Embed Code


![](https://i.imgur.com/raB1spF.png)









