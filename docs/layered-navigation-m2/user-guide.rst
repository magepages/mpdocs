
`Magento 2 Layered Navigation`_ extension is the advanced sitemap you can show on online store. It includes full of product attributes your customer need to filter the desired items and purchase them quickly. Especially, integrating Ajax technology allow showing all search results instantly on the current page without reloading the whole page.

Mageplaza Layered Navigation's User Guide will provide the detailed instructions to know **How to use** on the frontend and **How to Configure** on the backend.

.. _Magento 2 Layered Navigation: https://www.mageplaza.com/magento-2-layered-navigation-extension/

How to Use
-------------

Overview
^^^^^^^^^^^^^^^^^^^^

After enabling the module, Layered Navigation is shown with a list of product atributes on the left of the category page.

.. image:: https://cdn.mageplaza.com/docs/ln-layered-navigation-frontend.png

How to Configure
--------------------

* Login to Admin panel, ``Mageplaza > Layered Navigation > Configuration``
* In the **General Configuration**, Choose "Yes" in *Module Enable* to turn Layered Navigation on. No means the vice versa result.
* Click red button **Save Config** to save change.

.. image:: http://imgur.com/UCycyXE.gif  

1. Filter by multiple attributes
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

* Open the product attribute section and choose one option as need.
* Similar to other product attributes.
* Display the matched items via Ajax Loading.
* Add the favorite items to cart.
* You can also filter by multi-choose categories at the same time

  .. image:: https://cdn.mageplaza.com/docs/ln-filter-by-attributes.gif

2. Attribute Configuration 
-------------------------------

Go to ``Admin Panel > Stores > Products > Attribute``, then choose an attribute and go to `Layered Navigation Properties` tab.

2.1 Attribute Properties
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Generally, after installing Layered Navigation for Magento 2, this tab will show 4 mores options: 

.. image:: https://i.imgur.com/YbH50sR.png

* **Allow Multiple Filter** : By choose **Yes**, the shoppers are able to filter by multi-option in this group attribute. 

   *For example* : You can allow the shoppers to choose more than 1 filter in `Color` group attribute but only can choose 1 filter in `Style` group attribute.
   
* **Display Style** : Choose the display style of the group attribute. 

    The specific design for each style is mentioned in the *next section*.
    
* **Enable search option** : Choose to enable/ disable the **Quick Lookup Option** in this attribute group.

* **Expand by default** : Choose to automatically expand this attribute group or not when the shoppers go to the collection page.

2.2 Filter by decimal attributes
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Layered Navigation also allows store owner can set up and visitor can filter decimal attributes. 
* In the ``Attribute Information > Properties > Advanced Attribute Properties > Input Validation for Store Owner``, choose **Decimal Number** or **Intergal Number** to set your optinal attribute.

.. image:: https://imgur.com/Z4txesm.jpg

* Follow ``Attribute Information > ProductsPage Navigation Properties``

  * In **Use in ProductsPage Navigation** field choose *Filterable (with results)*
  * In **Use in Search Results ProductsPage Navigation** choose *Yes* 
  * In **Display Style** choose your preferred style as *Slider*, *Range* or *Slider and Range*

.. image:: https://imgur.com/XmNmCJR.jpg

For example with **Weight** option for which product has weight as 15 lb. In the frontend the search result can be filtered like: 

.. image:: https://imgur.com/mHR1l4E.jpg


3. Price Slider
^^^^^^^^^^^^^^^

Price Slider allows sliding flexibly the bar to define price range instead of entering manually.

  .. image:: https://cdn.mageplaza.com/docs/ln-price-slider.png

4. Enable Shop by
^^^^^^^^^^^^^^^

**Shop by** section will list all filter activities for the displayed results.

  .. image:: https://cdn.mageplaza.com/docs/ln-shop-by.png

