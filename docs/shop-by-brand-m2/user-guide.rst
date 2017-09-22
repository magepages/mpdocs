
By Mageplaza you can find many extensions that will help online stores improve customer search such as `Magento 2 Layered Navigation`_ and `Magento 2 Advanced Search`_ extension, and `Magento 2 Shop by Brand`_ extension is also one of such great tool. Similar to the navigation, Shop by Brand allows filtering by product attributes, but they are neither color or material or any physical features of the product. The plugin bases on brands (manufacturers) the products are made by. 

In this helpful Mageplaza documentation, you will achieve the guide of **How to use** and **How to config** on the frontend and backend of Shop by Brand Magento 2 module. 


I. How to use 
---------------

As soon as installing Shop by Brand completely, your customers can easily search all products under the favorite brands in your inventory. Especially, on its interface, there are two ways of shopping by brand: **Search Box** and **Alphabet Search**. You will follow these ways here.

1. Search Box
^^^^^^^^^^^^^^^^^^^

The search box on Magento 2 Shop by Brand has some functionalities that are alike to Magento 2 Ajax Search by Mageplaza. In the box, entering some words of the brand name and achieving the drop-down results instantly on the current page.

.. image:: https://cdn.mageplaza.com/media/general/wNIKZCz.gif

The brand results come with Brand Logo, Brand Name, and Brand Description. 

.. image:: https://cdn.mageplaza.com/media/general/xNsZsK0.png

2. Alphabet Search
^^^^^^^^^^^^^^^^^^^^^^^

Alphabet Search, placed under Search Box, is represented including "Show All" and the alphabets. Depending on the first characteristic of the brand name, the user will tap on the respective button.

.. image:: https://cdn.mageplaza.com/media/general/dybAloX.gif

II. How to configure
--------------------

Login to the backend of Magento 2 Shop by Brand. To cover full of the configuration as an administrator, you need to follow 3 parts: 

* Configuration
* Create new brand
* Assign brand to product

1. Configuration
^^^^^^^^^^^^^^^^^^^

**Configuration** tab is a bunch of the basic configuration you need to set up firstly. Go to `MAGEPLAZA > Shop by Brand > Configuration` then Expand **General** section, please do the following:

.. image:: https://i.imgur.com/25n3uM4.jpg

* Enable` the module when choosing "Yes" to allow customers shop by brand
* From the existing list of the product attribute, set `Brand Attribute` to the correct choice. In this guide, *manufacturer* is the option you have to select
* Enter `Brand route`, if passing it, the default (brands) is applied
* Enter `Brand Link title` or leave it as the default (Brands)
* in 




* Expand **All Brands Page Settings** section and do the following:

 

  * Choose to display Brand Logo only or display Logo and Label in `Display Option`
  * Select relevant color for the `Style Color` of Shop by Brand's interface
  * Set to `Show Brand Description` or not in the Brand Page
  * Add `Custom Css` for your own style.

.. image:: https://i.imgur.com/Z7wUVuc.png

  * Expand **Brand Search Settings** section,

    * Enable search box by setting "Yes" in `Show Search Block`
    * Set `Min chars`, that should be usually 1 or 2
    * Limit `Maximum Query Result` that match with the given request
    * Make brand image visible on the search by selecting "Yes".

.. image:: https://cdn.mageplaza.com/media/general/GgosIyw.png

  * Expand **Feature Brand Settings** section,
  
    * Choose to `Show Feature Brands` or not
    * Enter `Title` for feature brands or leave it as default (Feature Brands)
    * Choose `Display Information` of feature brands, Logo Only or Logo and Label
    * Use `Embedded Code` to show feature brand block in any place you want.
    
.. image:: https://cdn.mageplaza.com/media/general/uMrWGCA.png

* Click to expand **Brand Information**,

  * Choose `Default Image` for Brand. If passing, the product placeholder default image will be used.
  * Set `Default Block`
  * Choose to `Show Brand Image On Brand Page`, `Show Brand Description On Brand Page`, and `Show Brand Static Block On Brand Page` or not.
  
.. image:: https://cdn.mageplaza.com/media/general/GX7FMHY.png

2. Bulk import brands
^^^^^^^^^^^^^^^^^^^

Shop by Brand extension from Mageplaza supports Magento 2 stores to bulk import brands via CSV file.

.. image:: https://cdn.mageplaza.com/media/general/4jua9kb.gif

* Go to ``System > Data Transfer > Import > Import Settings > Entity Type`` field, choose "Mageplaza Shopbybrand" to expand *Import Behavior* and *File to Import* fields.

**Sample csv file**:

- Online: https://goo.gl/VqbZ5o

- Offline: ``Files/Sample/mageplaza_brand.csv``


.. image:: https://imgur.com/QqCNl2C.png
* Follow those steps next

  * In **Import Behaviour** fiels, choose *Import Behaviour* as "Add/Update"
  * In **File to Import** field, browse your brand's CSV file in *Select file to Import*
  * Copy the file contains Brands in the csv file to the pub / media / import section of the site
  
.. image:: https://imgur.com/AIeeY5y.jpg  

*Back to the Import page, click ``Check data`` button

.. image:: https://imgur.com/KOxukYR.png

* After Check Data is completed, select Import near footer to import brand to Shop By Brand. If the brand name in the csv file is included in the file to import, the import will be successful 

.. image:: https://imgur.com/IyUVDCA.png

And a report will inform this. Now you've done all the step to import brand by a CSV file.

.. image:: https://imgur.com/dadPjKH.png


3. Create new brand
^^^^^^^^^^^^^^^^^^^

* On the Admin Panel, ``Store > Attributes > Product``.
* Under **Attribute Code** column, search and choose "manufacturer", you will navigation its workplace.
* All brands are listed under **Manage Options** section, click on **Add option** on the bottom of the list, right after, a new row will appear.
* Click on `Save Config` to save the new brand.
* Tap **Setting** to open the "Brand Information" page for configuration.

* Under **Brand Information** section,

  * Set `Page Title` for the new brand
  * Create **URL Key**
  * Upload `Brand Image` from your computer
  * Set the brand to be displayed on featured brand slider or not in `Featured` field
  * Enter `Short Description` (appear on the search result) and `Description` (appear on Brand Listing) 
  * Choose the `CMS Block` to show brand as a static block on anywhere of your page. You can disable it by leave it blank.

* Expand **Meta Information** section, you can complete all fields for your better SEO, including:

  * Meta Title
  * Meta Keywords
  * Meta Description

* `Save Brand` to ensure that the configuration for the new brand is successful.

  .. note:: For the existing brands, you can edit their information via **Setting** button.

4. Assign product to brand
^^^^^^^^^^^^^^^^^^^

This guide helps you classify what brand a product is made by.

* On the Admin Panel, `Product > Inventory > Catalog`.
* Select an exact product you want to assign, and open `Edit` mode under **Action** column.
* On the settings page of the product, you will see ` Manufacturer` field that allows assigning a corresponding brand to that product.

.. image:: https://cdn.mageplaza.com/media/general/XxDH9n2.png

* `Save` the change to complete the brand attachment.
* When finish all, the brand logo will display on both Brand Listing Search and the product detailed page of the assigned product.

On Brand Listing
```````````````````

.. image:: https://cdn.mageplaza.com/media/general/4rGgrJF.png

On Product Page
`````````````````````

.. image:: https://cdn.mageplaza.com/media/general/Cs7XSXT.png

.. _Magento 2 Shop by Brand: https://www.mageplaza.com/magento-2-shop-by-brand/
.. _Magento 2 Layered Navigation: https://www.mageplaza.com/magento-2-layered-navigation-extension/
.. _Magento 2 Advanced Search: https://www.mageplaza.com/magento-2-search-extension/
.. _How to Create Product Attribute in Magento 2: https://www.mageplaza.com/kb/how-to-create-product-attribute-magento-2.html
