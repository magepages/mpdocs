`Mageplaza Layered Navigation`_ is a smart map for your Magento 2 store. It's the shortest way for the shoppers to find what they want, especially when you have a bunch of items with various prices, attributes or brands.

 .. _Mageplaza Layered Navigation: https://www.mageplaza.com/magento-2-layered-navigation-extension/) 

**Features List**


* Ajax Loading (**HOT**)
* Price Slider (**HOT**)
* SEO Friendly URL (**HOT**)
* Multi-Filters.
* Quick Lookup option.
* Product State Filter (**NEW**)
* Rating Filter (**NEW**) 
* Apply Filter Option. 
* Expand by Default.
* Scroll to Top after filtering. (**NEW**)
* Product Count.

Overview 
----------------

After enabling the module, the Layered Navigation will be displayed on the left sidebar on Categories pages.

.. image:: https://i.imgur.com/8vDDC3q.png

The Configuration is available under `Admin Panel > Mageplaza > Layered Navigation > Configuration`. 

.. image:: https://i.imgur.com/JxGogGp.png

In the configuration, there are 2 tabs: 

* General configuration.
* Filter configuration

Here are the details for the settings of each tab.

1. General Configuration tab
----------------------------------

.. image:: https://i.imgur.com/RAa3Gkv.png

1.1. Module Enable 
^^^^^^^^^^^^^^^^^^^^^

You can choose to use the Module `Layered Navigation` or not. Leave as **Yes** to enable and **No** to disable. 

1.2. Multi-Filters 
^^^^^^^^^^^^^^^^^^^^^

By enabling this feature, the shoppers are allowed to choose more than 1 filter to find the desired items. 

*For example*: The shopper can choose to filter by **Color** with *Black*, *White* and **Size** with *Small*, *Large* at the same time. 

Backend
'''''''''''''''''''''' 

To config this feature, go to `Enable Multi-filter` field, set **Yes/ No** to **Enable/ Disable**. 

Frontend 
'''''''''''''''''''''' 

.. image:: https://i.imgur.com/AqXNgog.gif

1.3. Scroll to Top 
^^^^^^^^^^^^^^^^^^^^^

This feature allows the shoppers, after filtering, can automatically back to the top of the products list and start to find the desired items. 

Backend
'''''''''''''''''''''' 

On the `Scroll to Top after Filtering` field, you will have 2 options:

* **YES** : After choosing a filter or click on the `Apply Filter` button, the site will automatically scroll up to the top-page.
*  **NO** : After choosing a filter or click on the `Apply Filter` button, the site still stay at the current position.

Frontend
'''''''''''''''''''''' 

.. image:: https://i.imgur.com/DgCXvFZ.gif

1.4. Quick Lookup Options
^^^^^^^^^^^^^^^^^^^^^

By enabling the **Quick Lookup Options** feature, in each of the attribute group, there is a search box. The shoppers only need to insert the letters and the filter whose name contains this letter will be displayed. 

Backend
'''''''''''''''''''''' 

Go to `Enable Filter options` field to **Enable/ Disable** this feature by setting **Yes/ No**.

Frontend
'''''''''''''''''''''' 

.. image:: https://i.imgur.com/iL4kSx6.gif

1.5. Display Out-of-stock option 
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

In `Display Out-of-stock option` field, there are 2 options to choose: 

* **Yes**: Show all the attributes and options even the product is currently out of stock. 
* **No**: Hide all the attributes and options of the product which is currently out of stock.

1.6. Product Count
^^^^^^^^^^^^^^^^^^^^^

With this feature, there will have a number which is displayed next to the filter. This number allows the shoppers to know how many items which is matched the filter.

*For example*: If the filter is displayed: **Cotton(2)**, that means there are 2 items which are matched the filter *Cotton*.

Backend 
'''''''''''''''''''''' 

In `Display Product Count` field: 

* Set **Yes** to display the number to the left of the filter name.
* Set **No** to hide this number.

Frontend
'''''''''''''''''''''' 

.. image:: https://i.imgur.com/TVWMyxa.png

1.7. Expand by default
^^^^^^^^^^^^^^^^^^^^^

In `Expand by default` field: 

* **Yes** : The attribute group will already be expanded when the shoppers go to the Categories page.
* **No** : The shoppers need to click on the attribute group name to expand the filters.

1.8. Apply Filter button
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The `Apply Filter` button allows the shoppers to choose when to apply the chosen filters. With this button, the shoppers don't need to wait for the page to reload again and again each time they choose a filter.

Backend
'''''''''''''''''''''' 

In `Add Apply Filter button` field, set **Yes** to show the button and leave **No** to disable. 

Frontend
'''''''''''''''''''''' 

Here is how the `Apply Filter` button works: 

.. image:: https://i.imgur.com/UKX3N3z.gif


2. Filter Configuration tab 
-----------------------------------

2.1. Product State Filter 
^^^^^^^^^^^^^^^^^^^^^

The `Product State Filter`feature allows the shoppers to filter the items by the **New**, **Sale**, and **Stock** status.

Backend
'''''''''''''''''''''' 

Here is how the `Product State Filter` configuration will be displayed: 

.. image:: https://i.imgur.com/FDYKUDj.png

* **Group label** : The name of the group attribute 
* **Expand by default**: Choose **Yes** to automatically expand the group attribute `Rating` when shoppers go to the collection page.
* **Enable New Filter**, **Enable On Sales filter**, **Enable Stock filter**: Choose **Yes** to enable the filter and leave **No** to disable.
* **New label**, **On Sales label**, **Stock label**: Add the name for each label filter.

2.2. Rating Filter
^^^^^^^^^^^^^^^^^^^^^

This feature allows the shoppers can filter the items by the rating follows 5 levels from 1 star to 5 stars. For example: when you choose the option **4 stars and up**, the received result will display the items which have the 4-star and 5-star rating.

The Rating Filter configuration is available under the `Filter Configuration` tab.

.. image:: https://imgur.com/n1patLV.jpg

* In the field **Enable Rating Filter**, choose *Yes* to enable and display the group attribute `Rating` on the Layered Navigation and leave *No* to disable this feature. When you choose *Yes*, there are 2 more options for the modification:
  
  * In **Group Label** : Adding the text as the group attribute's name.
  * In **Expand by default** : Choose *Yes* to automatically expand the group attribute `Rating` when shoppers go to the collection page.
   
* In the **Show as Slider** field

  * Choose *Yes* if you want to display Vertical Slider   
.. image:: https://imgur.com/csS25Fl.jpg

  * Choose *No* if you wish to keep the default Horizontal Rating filter.   
.. image:: https://imgur.com/HwUho1t.jpg 

Backend 
'''''''''''''''''''''' 



Frontend 
'''''''''''''''''''''' 

Here is how the Rating Filter works on the Frontend: 

.. image:: https://i.imgur.com/wznrUOp.gif

3. Attribute Configuration 
-------------------------------

Go to `Admin Panel > Stores > Products > Attribute`, then choose an attribute and go to `Layered Navigation Properties` tab.

Generally, after installing [Mageplaza Layered Navigation](https://www.mageplaza.com/magento-2-layered-navigation-extension/), this tab will show 4 mores options: 

.. image:: https://i.imgur.com/YbH50sR.png

* **Allow Multiple Filter** : By choose **Yes**, the shoppers are able to filter by multi-option in this group attribute. 

   *For example* : You can allow the shoppers to choose more than 1 filter in `Color` group attribute but only can choose 1 filter in `Style` group attribute.
   
* **Display Style** : Choose the display style of the group attribute. 

    The specific design for each style is mentioned in the *next section*.
    
* **Enable search option** : Choose to enable/ disable the **Quick Lookup Option** in this attribute group.

* **Expand by default** : Choose to automatically expand this attribute group or not when the shoppers go to the collection page.

4. Display Styles 
^^^^^^^^^^^^^^^^^^^^^

4.1 List
'''''''''''''''''''''' 

(General)

.. image:: https://i.imgur.com/QNzFBdf.png

4.2. Dropdown 
'''''''''''''''''''''' 

(General)

.. image:: https://i.imgur.com/8D5rWcS.gif

4.3. Swatch 
'''''''''''''''''''''' 

( for `Color` filter, `Size` filter) 

.. image:: https://i.imgur.com/ECQZ5RX.png

.. image:: https://i.imgur.com/vUJuJVX.png

4.4. Swatch and text
'''''''''''''''''''''' 

( for `Color` filter, `Size` filter) 

.. image:: https://i.imgur.com/MYV524M.png

4.5. Slider 
'''''''''''''''''''''' 

( for `Price` filter)

.. image:: https://i.imgur.com/g62QWAx.gif

4.6. Range 
'''''''''''''''''''''' 

( for `Price` filter) 

.. image:: https://i.imgur.com/66QgnNa.png

4.7. Slider and Range 
'''''''''''''''''''''' 

( for `Price` filter)

.. image:: https://i.imgur.com/BZ9RAZL.png
