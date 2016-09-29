======================================
How to display specific product IDs
======================================

In this guide, we will show you how to display specific product SKUs in product slider. 
In `Mageplaza Product Slider for Magento 2`_, there is **no Block/class ** supports this feature. So how?
No worry, there is very simple way to do this. First of all, you should create a **new category** and don't show this `category in Menu`.
Then associate products what you want to display in Product slider into this category. E.g in this guide, my category id is ``10`` then you can insert the following snippet to CMS static block, XML file or .phtml file



Add Block Category Id paste to CMS page
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

::

  {{block class="Mageplaza\Productslider\Block\CategoryId" template="Mageplaza_Productslider::productslider.phtml" products_count="8" category_id="10" heading="Category" description="Here is your category description"}}


Add Block New Products by file layout
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

::

  <block class="Mageplaza\Productslider\Block\NewProducts" name="product.slider.  newproduct" template="productslider.phtml">
  	<arguments>
          <argument name="products_count" xsi:type="number">8</argument>
          <argument name="margin" xsi:type="string">5</argument>
          <argument name="heading" xsi:type="string">New Products</argument>
          <argument name="description" xsi:type="string">Here is your new products   description </argument>
   	</arguments>
   </block>



.phtml file

::
	<?php echo $block->getLayout()->createBlock('Mageplaza\Productslider\Block\NewProducts')->setTemplate('productslider.phtml')->toHtml();?>



Promo suggestions:

This solution you can apply to:

- Hot products of your store
- Bestseller products (You may don't want to display real bestseller)
- Hot categories 




.. _Mageplaza Product Slider for Magento 2: https://www.mageplaza.com/magento-2-product-slider-extension/


