By Mageplaza you can find many extensions that will help online stores improve customer search such as Magento 2 Layered Navigation and Magento 2 Advanced Search extension, and Magento 2 Shop by Brand extension is also one of such great tool. Similar to the navigation, Shop by Brand allows filtering by product attributes, but they are neither color or material or any physical features of the product. The plugin bases on brands (manufacturers) the products are made by.

In this helpful Mageplaza documentation, you will achieve the guide of **How to use** and **How to config** on the frontend and backend of Shop by Brand Magento 2 module. 

.. _Magento 2 Shop by Brand: https://www.mageplaza.com/magento-2-shop-by-brand/
.. _Magento 2 Layered Navigation: https://www.mageplaza.com/magento-2-layered-navigation-extension/

I. How to use
###############

As soon as installing Shop by Brand completely, your customers can easily search all products under the favorite brands in your inventory. Especially, on its interface, there are 4 ways of shopping by brand: 

* Mega menu
* Search Box
* Alphabet Search
* Search Category

You will follow these ways here.

1.1 Brands on Mega menu
***************
Right from the top of the Brand page, you’ll able to give a quick overview by a drop-down list brands are available on your storage. The result displays brand with its provided Logo and Label

.. image:: https://i.imgur.com/dneh5bC.gif

1.2 Search Box
***************
The search box on Magento 2 Shop by Brand has some functionalities that are alike to Magento 2 Ajax Search by Mageplaza. In the box, entering some words of the brand name and achieving the drop-down results instantly on the current page.

.. image:: https://i.imgur.com/wNIKZCz.gif

The brand results come with Brand Logo, Brand Name, and Brand Description. 

.. image:: https://i.imgur.com/xNsZsK0.png

1.3 Alphabet Search
***************
Alphabet Search, placed under Search Box, is represented including "Show All" and the alphabets. Depending on the first characteristic of the brand name, the user will tap on the respective button.

.. image:: https://i.imgur.com/dybAloX.gif

1.4 Search by Category
***************
You can generate specific categories for brands which direct your customers' minds to gravitate toward some certain brands, with fetching categories like "Feature Brands”, "Best Seller Brands”, “Mageplaza’s Brand”, etc. Do not hesitate to plan to promote brands you desire!

.. image:: https://i.imgur.com/UUiW2gM.jpg

II. How to configure
###############

2.1 Configuration
***************

Go to ``Catalog > Shop by Brand > Configuration`` is a bunch of the basic configuration you need to set up firstly.

.. image:: https://i.imgur.com/Ftbfl7l.png

2.1.1 General
^^^^^^^^^^^^^^^
At the Configuration tab, expand **General** section, please do the following:

.. image:: https://i.imgur.com/iOuQpOv.png

* **Enable** the module when choosing "Yes" to allow customers shop by brand
* From the existing list of the product attribute, set **Brand Attribute** to the correct choice. In this guide, *Manufacturer* is the option you have to select
* Enter **Brand Route**, if passing it, the default (brands) is applied
* Enter **Brand Link Title** or leave it as the default (Brands)
* In **Show Brand Link In** field choose the position of putting brand link: *Toplink*, *Footer link* and *Category*
* In **Show Brands in Category Menu**: includes No, Drop-down type và Gird type
  
  * **No**: Brands are not shown 
  * **Drop-down type**: show additional fields - What to show, Maximum brands to show, Show brands without products on menu
  
.. image:: https://i.imgur.com/9xhntO6.png

  * **What to show**: select the elements to display

.. image:: https://i.imgur.com/KWgyVpf.png 

    * **What to show = Logo Only** : show the brand logo only
    * **What to show = Label Only**: show the brand label only
    * **What to show = Logo and Label**: show both brand logo and label 
    
  * **Maximum brands to show**: enter the maximum number for brands displayed in the menu
  * **Show brands without products on menu**: Select **Yes** to display the brands with no products in the menu. If **No** is selected, the brands with no products will not be displayed
  
 .. image:: https://i.imgur.com/03EMnJd.png 
  
  * **Grid type**: show additional fields - What to show, Brand Menu Gird Layout, Maximum brands to show, Show brands without products on menu
  
.. image:: https://i.imgur.com/b3dRXt2.png

* In **What to show** select elements to display 

.. image:: https://i.imgur.com/u8Uewog.png

* **What to show = Logo Only**: Brands are shown with logos only
* **What to show = Label Only**: Brands are shown with lables only
* **What to show = Logo and Label**: Brands are shown with logos and lables

* In **Maximum brands to show**: fill in the number of brands to show in the menu
* In **Brand Menu Gird Layout**: Select the number of columns to show on the menu

.. image:: https://i.imgur.com/9j3azeg.png

* In **Show brands without products on menu**: Choose **Yes** to show brands having no products and **No** to not show them
* In **Show brands in drop-down category menu**: choose “Enable” to apply drop-down function at the mega menu.

.. image:: https://i.imgur.com/oVr2yHf.png

* **Show Brand Name on Product Listing Page**: Display Product Brand Name at product listing page such as category, Catalog Search
* **Show Brand Info in Product Page**:
  
  * **Show Brand Info in Product Page = Not show**: Not show brand information at product page in frontend
  * **Show Brand Info in Product Page = Brand Name**: Allow showing brand information at product page in frontend
  * **Show Brand Info in Product Page = Brand Description**: Allow showing brand description at product page in frontend
  * **Show Brand Info in Product Page = Brand Logo**: Show brand logo at product page in frontend. Show more fields: **Brand Logo Width in Product Page** and **Brand Logo Height in Product Page**.
  
    * **Brand Logo Width in Product Page**: Set the width for brand logo shown at frontend
    * **Brand Logo Height in Product Page**: Set the height for brand logo shown at frontend
    
    
2.1.2 All Brands Page Settings
^^^^^^^^^^^^^^^

Expand **All Brands Page Settings** section

.. image:: https://i.imgur.com/rBVSiTT.png

* In **Brand list name** type your prefered name for the Brand Page title
* In **Style of Brand List Page** includes options to choose the specific order of the brand list
  * List View
  * Alphabet Style
* In **Display Option** supports 3 kinds of performance
  * Logo only
  * Logo and Label
  * Label only 
* **Brand Logo Width**: Set logo width
* **Brand Logo Height**: Set logo height
* In **Style Color** select relevant color of the Shop by Brand's interface
* In **Show Brand Short Description** set up to show the brand’s description or not
* In **Show brands without products**: Choose **Yes** to show brands having no products or **No** to not show them
* In **Show Brand Description** set up to show the brand’s description or not
* In **Show Brand Product Quantity** option to enable/disable the number.
* In **Show Brand Quick View Popup** select “Yes” if you want to have it opened in Popup style
* Add **Custom Css** for your own style

2.1.2.1 Brand Filter Function
"""""""""""""""

.. image:: https://i.imgur.com/MfqltJj.png

* In **Show Brand Categories Filter**: choose “Yes” to enable Category filter
* In **Show Brand AlphaBet Filter** “Yes” is the default option
* In **Brand Alphabet** is where you rule the specific alphabet to be filtered, each of alphabet separated by a commas
* **Character Set** means encode key for your store’s language

2.1.2.2 Brand Search Setting
"""""""""""""""

.. image:: https://i.imgur.com/4pyvycS.jpg

* In **Show Search Block** select “Yes” to enable Instant Search at the Brand page
* In **Min char** default minimum number is 1
* In **Number of Search result** 0 will show unlimited drop-down search result
* In **Show Thumbnail Image** decides to display thumbnail image or not 

2.1.2.3 Feature Brand Settings
"""""""""""""""

.. image:: https://i.imgur.com/l7ytPEQ.jpg

* At **Show Feature Brands** choose to “Yes” to display.
* In **Display Featured Brands Style** we support 2 styles
  
  * Slider View
  * Simple View

* In **Title**, type a name for your feature brands block
* In **Display Information** allows
 
  * Logo only
  * Logo and Label

* In **Embedded Code** is where you show feature brand block in any place you want.

2.1.2.4 Brand Related Products
"""""""""""""""

.. image:: https://i.imgur.com/hiV5kHq.jpg

* In **Show Related Products** “Yes” means display brand related products block
* In **Title**, type a name for your brand related products block
* In **Limit** field, enter your prefer maximum number of products in the block


2.1.3 Brand Information
^^^^^^^^^^^^^^^
Click to expand **Brand Information**

.. image:: https://i.imgur.com/AX3UKVv.png

* In **Default Image** choose a custom stock for Brand. If passing, the product placeholder default image will be used.
* In **Default Block**, choose an available product block to be displayed 
* Choose to **Show Brand Image On Brand Page**, **Show Brand Description On Brand Page**, and **Show Brand Static Block On Brand Page** or not.

2.1.4 Sidebar
^^^^^^^^^^^^^^^

.. image:: https://i.imgur.com/Bg3feAv.png

2.1.4.1 Feature Brand Settings
"""""""""""""""

.. image:: https://i.imgur.com/6yyNONN.jpg 

* In **Show Feature Brands** option “”Yes”” is the default option.
* In **Title**, “Feature Brand” is the default name
* In **Show title** choose “Yes” to show the title you named

2.1.4.2 Brand List Thumbnail
"""""""""""""""

.. image:: https://i.imgur.com/DyOKrvh.png

* In **Show Brand Thumbnail**: “Yes” is the default option
* In **Title**, “Feature List” is the default name
* In **Brand's Qty Limit**: 7 brand names in the list is the default number

2.1.4.3 Category Brand
"""""""""""""""

.. image:: https://i.imgur.com/nf8ky94.png

* In **Show Category Brand**: “Yes” is the default option to display the block
* In **Title**, “Brand Category” is the default name
* In **Category's Qty Limit**: 7 categories in the list is the default number
* In **Show Brand Category Quantity** “Yes” is the default option


2.1.5 SEO 
^^^^^^^^^^^^^^^

.. image:: https://i.imgur.com/0h8CvwN.png

This is a new sweet treatment for marketing purpose, choose “No” if you don’t wish search engines index pagination pages.

2.2 Categories
***************
This is a separated module to manage Categories on filter searching. Also you can customized some crucial meta data tags like Meta Title, Meta Description, Meta Keywords or Meta Robot

Go to ``Catalog > Shop by Brand > Categories``

.. image:: https://i.imgur.com/arOPrFm.png

To create brand new category, click ``New Category`` red button.

.. image:: https://i.imgur.com/mvkmxn0.gif

To massively set brands into a specific category:

* Follow ``Catalog > Shop By Brand: Categories``
* Select the category you want to apply changes navigate, click ``Edit``
* Choose ``Brands`` at the left sidebar, a multi-select available brand list will show up.
* Click ``Save Category``

.. image:: https://i.imgur.com/AD5CeAY.gif

2.3 Manage Brands
***************
This module provide a short-cut way for navigating to "manufacturer" workplace, from here you will manage all available brands and create new one. Make you way to ``Catalog > Shop By Brand > Manage Brands``

To generate a new brand, follow these steps

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


2.4 Bulk import brands
***************
Shop by Brand extension from Mageplaza supports Magento 2 stores to bulk import brands via CSV file.

.. image:: https://i.imgur.com/Q6VkOUk.gif

Go to ``System > Data Transfer > Import > Import Settings > Entity Type`` field, choose "Mageplaza Shopbybrand" to expand *Import Behavior* and *File to Import* fields.

**Sample csv file**:

* Online: https://goo.gl/VqbZ5o
* Offline: ``Files/Sample/mageplaza_brand.csv``

.. image:: https://imgur.com/QqCNl2C.png

Follow those steps next
  * In **Import Behaviour** fiels, choose *Import Behaviour* as "Add/Update"
  * In **File to Import** field, browse your brand's CSV file in *Select file to Import*
  * Copy the file contains Brands in the csv file to the pub/media/import section of the site. (Note: For magento 2.3.3, you need to copy image file of brands and paste at the folder `/var/import/images`)

  
.. image:: https://imgur.com/AIeeY5y.jpg  

Back to the Import page, click ``Check data`` button

.. image:: https://imgur.com/KOxukYR.png

After Check Data is completed, select Import near footer to import brand to Shop By Brand. If the brand name in the csv file is included in the file to import, the import will be successful 

.. image:: https://imgur.com/IyUVDCA.png

And a report will inform this. Now you've done all the step to import brand by a CSV file.

.. image:: https://imgur.com/dadPjKH.png

2.5 Assign product to brand
***************
This guide helps you classify what brand a product is made by.

* On the Admin Panel, `Product > Inventory > Catalog`.
* Select an exact product you want to assign, and open `Edit` mode under **Action** column.
* On the settings page of the product, you will see ` Manufacturer` field that allows assigning a corresponding brand to that product.

.. image:: https://cdn.mageplaza.com/media/general/XxDH9n2.png

* ``Save`` the change to complete the brand attachment.
* When finish all, the brand logo will display on both Brand Listing Search and the product detailed page of the assigned product.

On Brand Listing

.. image:: https://cdn.mageplaza.com/media/general/4rGgrJF.png

On Product Page

.. image:: https://cdn.mageplaza.com/media/general/Cs7XSXT.png

.. _Magento 2 Advanced Search: https://www.mageplaza.com/magento-2-search-extension/
.. _How to Create Product Attribute in Magento 2: https://www.mageplaza.com/kb/how-to-create-product-attribute-magento-2.html


2.6. API
***************

Shop By Brand Extension form Mageplaza does support API which allows users:

* Get brand list
* Add/ edit/ delete brand
* Add products into brand
* Remove brand assigned for product
* Get the product list of brand 
* Get the brand's information assigned to the product according to the product's sku
* Get a list of feature brands
* Search for brands by name
- Get brand configuration

Guide to create token, please see `here`_

.. _here: https://devdocs.magento.com/guides/v2.3/get-started/authentication/gs-authentication-token.html


You can see more of how to get API Request by Shop By Brand Extension via this `document`_

.. _document: https://documenter.getpostman.com/view/10589000/SzRxXr2x?version=latest


2.7. GraphQL
***************

Run the following command in Magento 2 root folder:

``composer require mageplaza/module-shop-by-brand-graphql``

``php bin/magento setup:upgrade``

``php bin/magento setup:static-content:deploy``

Mageplaza's Shop By Brand extension supports store admins to get rule's information via GraphQL.

To start working with **Shop By Brand GraphQL** in Magento, you need to:

- Use Magento 2.3.x. Return your site to developer mode
- Supported GraphQl requests can be viewed at this link: https://documenter.getpostman.com/view/10589000/SzRxXr2y?version=latest
