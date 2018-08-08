# Product Slider 
## I. Overview

In the default Magento, the products on your store are listed in bulk without any purpose. This will cause the difficulty in searching the desired products of customers. That's great that Mageplaza has developed Magento 2 Product Slider extension that can improve the order of products on your online store.

Product Slider for Magento 2 enables store owners to create many slider titles like featured products, bestsellers, most reviewed products, or new products, etc. This will be easy to attract visitors when they visit your website. Moreover, it also helps boost sales dramatically.

## II. How to configure

### 1. Configuration

Login to the **Magento Admin**, choose ``Stores > Settings > Configuration > Mageplaza Extensions > Product Slider``

![configuration](https://i.imgur.com/EPUmpxH.png)

#### 1.1. General Configuration

![general configuration](https://i.imgur.com/Kc1x4hd.png)

* In the **Enable** field: Choose Yes to enable Product Slider extension
* In the **Default Display Additional Information** field:
    * Select the options that can display with products on the slider
    * Allow choosing many options to display

#### 1.2. Slider Design Configuration

![slider design configuration](https://i.imgur.com/Xx5aPDh.png)

* In the **Is Responsive** field:
    * Choose `No` so that the number of products display on the browser is the default (3 products)
    
    ![product slider](https://i.imgur.com/H7xiwj4.png)
    
    * Choose `Yes` so that the number of products display on the slider can be changed when changing the size of the browser window. You can set this in the **Max item slider** field.

* In the **Max item slider** field: This section only displays when the **Is Responsive = Yes**. Set the number of products display on the slide when the browser window changes the size.
    * Example: Screen size max = 1000, Number of item is 5. The frontend will be displayed as the following:
    
    ![example](https://i.imgur.com/3mtx2xg.png)

* In the **Loop Slider** field: Choose "Yes" to allow the first products repeated when the slider runs to the end

![loop slider](https://i.imgur.com/Qd8WNkY.png)

![design template](https://i.imgur.com/1gMEqdO.gif)

* In the **Margin Between Items** field:
    * This is a place that allows you to set the distance between products in the slider
    * We recommend you should set the distance to be 10
    
    ![distance of products in the slider](https://i.imgur.com/cWIJzKa.png)
    
* In the **Next/Prev buttons** field:
    * Choose "Yes" so that the Prev/Next button is displayed on the frontend
    * When you click on Prev/Next button, Sliders will move the product to the left or the right
    
    ![next/prev button](https://i.imgur.com/p3rhGPd.png)
 
* In the **Show Dots Navigation** field:
    * You can choose "Yes" in this section to display dots representing the number of slider pages
    
  ![dots navigation](https://i.imgur.com/zmjevMN.png)
  
    * When clicking on Dots, products on the side slider will be displayed (in this case, it includes 5 products)

* In the **Lazy Load Images** field: Choose "Yes" to represent Lazy Load displayed when loading the image
* In the **Autoplay** field: Select "Yes" so that products on the slider will auto-move to the left after a certain period of time installed at the **Autoplay Timeout** section

![autoplay](https://i.imgur.com/KjVb8Tb.gif)


    
    



































==============
User Guide
==============

Welcome to User Guide of `Magento 2 Product Slider`_ extension. Actually, this is developer guide, not user guide. Because this extension is developed for Developers.


Why Mageplaza developed this module for Developers
----------------------------------------------------------------

- **Optimize performnace** do not slow your Magento 2 store by adding banner slider everywhere, every positions (~36 positions) on the site. 
- Details and quality documentations for developers.
- Implement with ease.
- No need, no added.
- Free, Open-source. 


List of Available Blocks
---------------------------

- ``Mageplaza\Productslider\Block\OnSaleProduct`` : **On Sale Products**
- ``Mageplaza\Productslider\Block\CategoryId`` : **CategoryId** , get products from specific category id
- ``Mageplaza\Productslider\Block\FeaturedProducts`` : **Featured Products**
- ``Mageplaza\Productslider\Block\NewProducts`` : **New Products**
- More (coming soon). Request more at ``support@mageplaza.com``

How to use
------------

We will show you how to use insert Product Slider in CMS page, Static Block, XML File, XML Data, .phtml file.


**1. CMS Page, CMS Static Block**

::

  {{block class="Mageplaza\Productslider\Block\NewProducts" template="Mageplaza_Productslider::productslider.phtml" products_count="8" heading="New Products" description="Here is your new products description"}}

You can paste the above block of snippet into CMS page such as Home page or specific CMS page or any CMS static block in Magento 2.


**2. XML File , XML Data**

:: 

	<block class="Mageplaza\Productslider\Block\NewProducts" name="product.slider.  newproduct" template="productslider.phtml">
	  <arguments>
	    <argument name="products_count" xsi:type="number">8</argument>
	    <argument name="margin" xsi:type="string">5</argument>
	    <argument name="heading" xsi:type="string">New Products</argument>
	    <argument name="description" xsi:type="string">Here is your new products   description </argument>
	  </arguments>
	</block>


Open layout file such as ``category_catalog_view.xml`` or XML Data and insert the above block of code, then all categories page will be added the product slider with 8 new products.



**3. .phtml file**

::

	<?php echo $block->getLayout()->createBlock('Mageplaza\Productslider\Block\NewProducts')->setTemplate('productslider.phtml')->toHtml();?>


Open a ``.phtml`` file and insert where you want to display the product slider.





Custom Style
-------------

You can custom template file at  ``app/code/Mageplaza/Productslider/view/frontend/templates/productslider.phtml``

.. important::
	In your theme, custom design, you should copy this file into your package and edit them instead of directly edit it. 




.. _Magento 2 Product Slider: https://www.mageplaza.com/magento-2-product-slider-extension/
