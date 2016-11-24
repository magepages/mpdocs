=============
User Guide
=============


If you are owning an online store and building up a physical shop as well, are you ready to bring both to be more intimate with your targeted consumers? `Magento 2 Store Locator exension`_ will help you shorten the distance wherever you are loacted. By this way, you can put  store icons each of which represent exactly the store address on Google Map. Installing Store Locator module on your Magento 2 store, your customer can find out the nearest place from their current positions when they visit your online store. This is the greatest and shortest way for online clients to seek and pick up expected products. 

In this helpful Mageplaza documentation, you will achieve the user guide of **How to use** and **How to config** on the frontend and backend of Store Locator Magento 2 module. 


How to use
-------------

After completing the installation of Store Locator module, **How to use** will give you good experience as a real customer. The following list is everything that you can do with the module at your website.

Search by impressive ways
^^^^^^^^^^^^^^^^^^^^^^^^^^

Store Locator allows the user to find all brick-and-mortar shops around the exact radius from their places. Thus, you also know the customers not only search by area but also search by radius for the fastest finding.

Search by radius
`````````````````````

"Search by radius" is a smart slider and you feel free to move the distance as need.

.. image:: https://i.imgur.com/MEZQDNk.gif

If not dragging and dropping, you can insert a number into the box put next to the slider. 

Search by area
````````````````````

"Search by area" allows the seeker to enter address in search box to load the nearest store. However, there is no need to type manually, the finder tool already applies `Google Address Suggestion`_ via embeded Google Map API and allows auto-complete the address instead. 

.. image:: https://i.imgur.com/jEZWgqR.gif

Store Information 
^^^^^^^^^^^^^^^^^^^

Basing on the given information, the best stores will instantly appear together with many attached info including Store Name, Address(Contry, City, State/Province), Zip/Postal Code, Website, Email, and even Working Hour. All of them are both useful for the customer's visit. In addition, as a store admin, you can also upload some of store images to preview the store. 

.. image:: https://i.imgur.com/1LSuBwX.png 

Google Map Functionality
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Google Map Appearance
````````````````````````

Embeding Google Map API means enabling the map on the store locator interface. At that time, each store that is finded by the customer will display on Google Map with store icon. When click on the icon, the store information also appears as admin's settings.

..image:: https://i.imgur.com/v9dkSUp.png

Get Direction
````````````````

For more convenience, the customers will be clearly guided by Google Map Direction. There are two methods they can get the street direction:

**Direction on Map**

.. image:: https://i.imgur.com/QIf3O7a.png

**360-degree street view**

.. image:: https://i.imgur.com/wi0IhJH.png

How to config
---------------

Login to Magento 2 backend, you will have full of admin controls here.

Basic Configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

On the left panel, `Store Locator > Settings`, General Settings is divided into four sections: General, Map Settings, Language options, and Hour of Operation.

.. image:: https://i.imgur.com/wYl1HIB.png

General
`````````````

**General** settings permit to enable the store locator module by choosing "Yes" in `Enable` field. Beside, you can set the specific name and URL of module in breadcrumb like *Homepage > Store Locator* 

.. image:: https://i.imgur.com/t1CWGvC.png 

Map Settings
````````````````

This settings is the workplace you can connect your store locator module with Google Map, anaadvacned solution for the fast location.

Under **Map Settings** section, you need to do as the following:

* Take Google Map API key when clicking on `here` text link, and fill it into `Google Map API Key` field.
* Enabling `Location Autocomplete` means the module will automatically complete the location address in the search box.
* Set `Full map start` to "Yes" to autodisplay the map on the store finder.
* Allow showing the clear direction from the search place to your store by choosing "Yes" in the `Direction` field.
* Accept `Max Distance` when you search stores around a radius chosen before.
* Set the `Default Address` in the search address box.
* Set the `Default Distance` when searching by radius. If not change, the system will find your stores around the default radius.
* Possibly auto-detect customer's position via `AutoGeocode`
* Enter the number of stores displaying in store list in the `Stores Limit` field.
* Select `Distance Unit`: Mile or Kilometer (Km)

.. image:: https://i.imgur.com/9mQtRtB.png

Language options
`````````````````````

Regarding your store languge, Store Locator makes you free to convert into the native language. You can modify all words and phrases for the most effective customer awareness:

* Address Error Alert
* Autogeocode Error Alert
* Distance Error Alert
* Distance Unit Language: Mile, Miles, Kilometer, and Kilometers
* No results title
* No results description

.. image:: https://i.imgur.com/NslySAu.png

Hour of Operation
````````````````````

You will set `Time to closing` as a notification the store will out of work. As the taken photo, the status is auto changed into "Closing soon" if the current time is less than the store's closing time by 30 minutes. 

.. image:: https://i.imgur.com/GPtIJHJ.png 

Create Store Location
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Make step as the path: `Store Locator > Location`, on the **Location** page, do as following:

* On the right corner, tap **Add new location** button.
* Under **Location Information**, there are 4 sub-tabs of the new location information on the left panel: Location, Tags, Holidays, and Meta Data.

Entere Location Information
``````````````````````````````

.. image:: https://i.imgur.com/JN8c6zH.gif

* Firstly, you will config the general information of the new store location

  * Enter `Name` for the location.
  * If need, you can wirte some descriptions in the text area in order to attract more customers to your stores.
  * Update `Location Image` as a store avatar by choosing a file image from your computer.
  * Generate the specific URL in the `URL Key` field that direct to that store. If missing it, the radom URL will be used.
  * Assign the new store to `Store View`.
  * Select `Marker` (store type) and `Hours of Operation` (store's working time).

* Next, complete **Contact** of the new store including:

  * Contact Person
  * Phone #1
  * Phone #2
  * Phone #3
  * Fax
  * Email
  * Website

  All of them are visible when customers search your store by Magento 2 Store Locator.

* The final thing is **Address Information**. In this section, Mageplaza also supports Google Address Suggestion to fulfill all related fields which are:

  * City
  * Zip/Post Code
  * Country
  * Latitude
  * Longitude

  The locating on map is ready here.

.. image:: https://i.imgur.com/HBDlgS8.gif 

* Remember say "Yes" for `Enable` to show the store loaction in the store list.
Assign to Tags
``````````````````

On the left panel, open `Tags` tab, enable to tick many tags from the existing list.

.. image:: https://i.imgur.com/0sGfYtL.png 

Select Holidays Time
`````````````````````

Similar to Tags, you can select the holiday time as well.

.. image:: https://i.imgur.com/gdYiL5f.png

Fill out Meta Data
```````````````````````

Meta Data is very useful for SEO. Raise your SEO rank via:

* Meta Title
* Meta Keywords
* Meta Description

.. image:: https://i.imgur.com/7zSKMuz.png

Create Store Marker
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Go to `Store Locator > Marker`.

.. image:: https://i.imgur.com/2ijMzpg.gif

Creating new store marker means set a new style of store (restaurant, book store, cafe, etc), then it might be assigned to specific store.

* Click on **Add New Marker** button
* Enter `Marker Name`
* Apply separate icon for each marker by uploading the personal image.
* `Save Marker` to complete.

Create Store Tag
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Still in the configuration, go to `Store Locator > Tags`

.. image:: https://i.imgur.com/y7S9xMA.gif

* Hover over the right corner of **Tag** page, click on **Add new Tag** button

* Under **Tab Information** section, you need to:
  * Set `Name` for the tag
  * Leave `Short Description` if need
  * To show this tag, choose "Yes" in `Enable` field

* In the **Location**, you are allowed to attach it to multiple available store location.

.. image:: https://i.imgur.com/3YUUWSf.png

* `Save Tag` to complete.

Set Working Hours
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Provide vistors the working time of your stores in detail (from Monday to Sunday).

Follow the guide: `Store Locator > Hours of Operation`.

.. image:: https://i.imgur.com/djc3PSv.gif

* Click on **Add New Hours of Operation**
* `Name` for the new one
* Set opening and closing time of each day

Set Holoday Time
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Notify the vistors which holiday you will not be available.

Go to `Store Locator > Holidays`

.. image:: https://i.imgur.com/oGpFXAP.gif

* Start with **Holiday Information**
  * Set new name for that holiday.

   .. note:: Store holiday's name cannot duplicate 

  * Insert start and end time of the holiday through Calendar icon
  * You can describe about this holiday in the `Short Description` text area
  * `Enable` is "Yes" to show it
* Choose more than one location to show that holiday

.. image:: https://i.imgur.com/VV17bEk.png

* `Save Holiday` to complete.


.. _Magento 2 Store Locator: https://www.mageplaza.com/magento-2-store-locator-extension/
.. _Google Address Suggestion: https://www.mageplaza.com/magento-2-one-step-checkout-extension/google-address-suggestion.html