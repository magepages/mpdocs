`Mageplaza Layered Navigation`_ is a smart map for your Magento 2 store. It's the shortest way for the shoppers to find what they want, especially when you have a bunch of items with various prices, attributes or brands.

 .. _Mageplaza Layered Navigation: https://www.mageplaza.com/magento-2-layered-navigation-extension/) 

Overview 
----------------

After enabling the module, the Layered Navigation will be displayed on the left sidebar on Categories pages.

.. image:: https://i.imgur.com/A0Cq43m.jpg

Layered Navigation Configuration
--------------------------------

The Configuration is available under ``Admin Panel > Mageplaza > Layered Navigation > Configuration``.

.. image:: https://i.imgur.com/xlUELeE.gif

* General configuration
* Filter configuration
* Design configuration


Here are the details for the settings of each tab.

1. General Configuration tab
--------------------------------

.. image:: https://i.imgur.com/abqzY73.png

* In the **Layered Navigation Enable** field: You can choose to use the Module `Layered Navigation` or not. Leave as **Yes** to enable and **No** to disable.
* In the **Enable Multi-Filters** field

  * By enabling this feature, the shoppers are allowed to choose more than 1 filter to find the desired items. You can also filter by multi-choose from multiple categories at the same time. For example: The shopper can choose to filter by **Color** with **Black**, **White** and **Size** with **Small**, **Large** at the same time. This can be also applied with multiple categories. 
  * To config this feature, go to `Enable Multi-filter` field, set "Yes/No" to "Enable/ Disable" 
  
.. image:: https://i.imgur.com/jSaFtmp.gif  

* In the **Scroll to Top** field

  * This feature allows the shoppers, after filtering, can automatically back to the top of the products list and start to find the desired items. 
  * On the **Scroll to Top after Filtering** field, you will have 2 options:
  
    * **YES** : After choosing a filter or click on the `Apply Filter` button, the site will automatically scroll up to the top-page.
    *  **NO** : After choosing a filter or click on the `Apply Filter` button, the site still stay at the current position.

* In the **Quick Lookup Options** field 

  * By enabling this feature, in each of the attribute group, there is a search box. The shoppers only need to insert the letters and the filter whose name contains this letter will be displayed. 
  * Go to **Enable Filter options** field to "Enable/ Disable" this feature by setting "Yes/ No".

.. image:: https://i.imgur.com/5GUCriq.gif

* In the **Display Out-of-stock option** field: There are 2 options to choose 

  * **Yes**: Show all the attributes and options even the product is currently out of stock. 
  * **No**: Hide all the attributes and options of the product which is currently out of stock.

* In the **Product Count** field: With this feature, there will have a number which is displayed next to the filter. This number allows the shoppers to know how many items which is matched the filter. For example: If the filter is displayed: **Cotton(2)**, that means there are 2 items which are matched the filter **Cotton**.

.. image:: https://i.imgur.com/ZfTnGp2.jpg

* In the **Display Product Count** field

  * Set **Yes** to display the number to the left of the filter name.
  * Set **No** to hide this number.

* In the **Expand by default** field 

  * **No** : The shoppers need to click on the attribute group name to expand the filters.
  * **Expand for desktop or mobile or both**: With other options, the attribute set will be expanded for each device type when customers enter the Category page.

* In the **Apply Filter button** field

  * The `Apply Filter` button allows the shoppers to choose when to apply the chosen filters. With this button, the shoppers don't need to wait for the page to reload again and again each time they choose a filter.
  * In **Add Apply Filter button** field, set "Yes" to show the button and leave "No" to disable. 
  * Here is how the ``Apply Filter`` button works, you can choose lots of attribute before applying it.  Also, SEO friendly URL is compatible with ``Apply Filter``'s search result. As you can the this example chose *Insulated* and *Cold*, and name of those attributes appears on the URL as well.

.. image:: https://imgur.com/Ve8nGAA.gif

* In the **Hide the Single-Select Filter after Selection** field: 
 * **Yes**: The single-select attribute will be hidden after filtering.
 * **No**: Show all attributes on the navigation bar after filtering, including single-select attributes.
 
2. Additional Filter 
------------------------------

2.1. Product State Filter
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The Product State Filterfeature allows the shoppers to filter the items by the **New**, **Sale**, and **Stock** status. Here is how the Product State Filter configuration will be displayed: 

.. image:: https://i.imgur.com/AQgHdc3.png

* In the **Group label** field: The name of the group attribute 
* In the **Position** field: Admin set the displaying priority for **Product State Filter**. The smaller number entered, the higher priority to show first. 
* In the **Expand by default** field: Choose **Yes** to automatically expand the group attribute `Rating` when shoppers go to the collection page.
* **Enable New Filter**, **Enable On Sales filter**, **Enable Stock filter**: Choose **Yes** to enable the filter and leave **No** to disable.
* **New label**, **On Sales label**, **Stock label**: Add the name for each label filter.
* **Exclude Categories**: Choose categories to exclude **Product State Filter**.

2.2. Rating Filter
^^^^^^^^^^^^^^^^^^^^^^^

This feature allows the shoppers can filter the items by the rating follows 5 levels from 1 star to 5 stars. For example: when you choose the option **4 stars and up**, the received result will display the items which have the 4-star and 5-star rating.

The Rating Filter configuration is available under the **Filter Configuration** tab.

.. image:: https://i.imgur.com/lwqEler.png

* In the **Enable Rating Filter** field: Choose "Yes" to enable and display the group attribute **Rating** on the Layered Navigation and leave "No" to disable this feature. When you choose "Yes", there are 2 more options for the modification
* In the **Group Label** : Adding the text as the group attribute's name.
* In the **Expand by default** : Choose "Yes" to automatically expand the group attribute **Rating** when shoppers go to the collection page.
* In the **Position** field: Admin can allow **Rating Filter** to show at different positions such as Top Sidebar, Bottom Sidebar, Below Category Filter.
* **Exclude Categories**: Choose categories to exclude **Rating Filter**.

3. SubCategory Slider 
-------------------------------

.. image:: https://i.imgur.com/BuAwUtK.png

- **Enable SubCategory Slider**: Slelect **Yes** to allow showing subcategories as slider on corresponding categories. 
*  **Display Type**: Choose displaying type for slider 
  * **Label**: Slider only shows subcategory name included in its category.
  *  **Image and Label**: Slider shows subcategory name and image included in its category.
- **Apply for Category**: Admin choose category to be shown in slider.
- **Auto Play**: Select **Yes** to allow slider to be auto activated 
- **Items per Slider**: Enter the number of item subcategory allowing to be shown on each slider.

.. image:: https://i.imgur.com/oXnrwz9.png

4. Filter by decimal attributes 
-------------------------------

Layered Navigation Professional edition also allows store owner can set up and visitor can filter decimal attributes.

* In the ``Attribute Information > Properties > Advanced Attribute Properties > Input Validation for Store Owner``, choose **Decimal Number** or **Intergal Number** to set your optional attribute.

.. image:: https://imgur.com/Z4txesm.jpg

* Follow ``Attribute Information > ProductsPage Navigation Properties``

  * In the **Use in ProductsPage Navigation** field choose *Filterable (with results)*
  * In the **Use in Search Results ProductsPage Navigation** choose *Yes* 
  * In the **Display Style** field, choose your preferred style as *Slider*, *Range* or *Slider and Range*

.. image:: https://imgur.com/XmNmCJR.jpg

For example with **Weight** option for which product has weight as 15 lb. In the frontend the search result can be filtered like: 

.. image:: https://imgur.com/mHR1l4E.jpg

5. Show Tooltip
-------------------------------

New version of Mageplaza Layered Navigation Professional allows store admins to set up tooltip for each attribute. Tooltip only apply for attribute types: Multiple Select, Dropdown, Price, Visual Swatch, Text Swatch.

Follow `Attribute Information > ProductsPage Navigation Properties`

- In the Use in **ProductsPage Navigation** field choose **Filterable (with results)**

.. image:: https://i.imgur.com/IE4VlxE.png

- **Show Tooltip**: Choose **Yes** to show Tooltip on attribute filter.
- **Tooltip Thumbnail**: Click **Choose File**, admin choose icon for tooltip. Leaving it blank, icon will be default value. 
*  **Tooltip Content**: Enter the content for tooltip. 
  *  If tooltip is left blank, it will be assigned with Admin value. 

.. image:: https://i.imgur.com/r2gU1Lw.png
