==============
User Guide
==============

List of Available Blocks
---------------------------

- ``Mageplaza\Productslider\Block\OnSaleProduct`` : **On Sale Products**
- ``Mageplaza\Productslider\Block\CategoryId`` : **CategoryId** , get products from specific category id
- ``Mageplaza\Productslider\Block\FeaturedProducts`` : **Featured Products**
- ``Mageplaza\Productslider\Block\NewProducts`` : **New Products**


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





How to change style of product slider
----------------------------------------

You can custom template file at  ``app/code/Mageplaza/Productslider/view/frontend/templates/productslider.phtml``



