
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
* You can also filter by multi-choose from multiple categories at the same time

  .. image:: https://cdn.mageplaza.com/docs/ln-filter-by-attributes.gif

2. Price Slider
^^^^^^^^^^^^^^^

Price Slider allows sliding flexibly the bar to define price range instead of entering manually.

  .. image:: https://cdn.mageplaza.com/docs/ln-price-slider.png

3. Enable Shop by
^^^^^^^^^^^^^^^

**Shop by** section will list all filter activities for the displayed results.

  .. image:: https://cdn.mageplaza.com/docs/ln-shop-by.png
  
4. Hide Filter Attributes by Category
^^^^^^^^^^^^^^^

From the **Admin Panel**, go to ``Catalog > Categories`` 

**Hide Filter Attributes on Layered Navigation**: allow hiding attributes selected in the filer of the category

.. image:: https://i.imgur.com/mDFLo9I.png

For example: Select Price in the Jacket category, on the front end, Price will not appear in the filter part

.. image:: https://i.imgur.com/KhgJAwY.png

Note: To apply the filter attributes, you have to turn Anchor to Yes. See guide [here](https://docs.google.com/document/d/1ukn2zCIFkJGnsJI8gRq7BtGMcLPy-yJAvMiS86ksLls/edit).   

5. Render Categories Tree

From the **Admin Panel**, go to **Stores > Attributes > Product, choose category_ids > Display Properties**

**Render Category Tree** allows showing category filter tree

- **No**: does not show Category filter tree
- **Full Category Tree**:  show full of Category filter tree
- **Custom Category Tree**: allows users Category filter tree

.. image:: https://i.imgur.com/Z0xq7gz.png

- **Expand Subcategories > Click**: Filter is only shown when users click to expand
- **Expand Subcategories > Auto**: Fitler is automatically fully shown

.. image:: https://i.imgur.com/OS1w1Zt.png

.. image:: https://i.imgur.com/vEVXuHZ.png

- **Category Tree Depth**: Category Tree is shown with the number of selected layers 
- **Categories Level**:
  - **Root category**: Category Tree is shown from the root category

.. image:: https://i.imgur.com/e0PNDk0.png 

  - **Current Category**: Category Tree is shown from the current category
  
.. image:: https://i.imgur.com/tiQ2jvn.png   
  
  - **Current Category Childrens**: Category Tree is shown from the current category children 
  
.. image:: https://i.imgur.com/4fL4LIw.png

  - **Expand Subcategories**: If you choose **Click**, filter is shown when the user clock to expan. If you choose **Auto**, filter is automatically fully shown. 
  
.. image:: https://i.imgur.com/s1HuKx1.png

  
