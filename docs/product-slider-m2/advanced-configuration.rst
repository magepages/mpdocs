========================
Avanced configurations
========================



CMS Pages, CMS Static Block (Insert into Homepage)
--------------------------------------------------------

New Products
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

::

  {{block class="Mageplaza\Productslider\Block\NewProducts" template="Mageplaza_Productslider::productslider.phtml" products_count="8" heading="New Products" description="Here is your new products description"}}


Add Block On Sale Products paste to CMS page:
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

::

  {{block class="Mageplaza\Productslider\Block\OnSaleProduct" template="Mageplaza_Productslider::productslider.phtml" products_count="8" heading="OnSaleProduct Products" description="Here is your onsale product description"}}


Add Block Featured Products paste to CMS page
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

::

  {{block class="Mageplaza\Productslider\Block\FeaturedProducts" template="Mageplaza_Productslider::productslider.phtml" products_count="8" heading="FeaturedProducts Products" description="Here is your featured product description"}}


Add Block Category Id paste to CMS page
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

::

  {{block class="Mageplaza\Productslider\Block\CategoryId" template="Mageplaza_Productslider::productslider.phtml" products_count="8" category_id="6" heading="Category" description="Here is your category description"}}


Explaination
---------------

- ``products_count`` is your amout  products you want to display
- ``category_id`` is your category id you want to display it's product
- ``heading`` define your heading
- ``description`` define your decription to your products


Layout: XML File, XML Data
------------------------------

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


Add Block On Sale Products by file layout
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

::

  <block class="Mageplaza\Productslider\Block\OnSaleProduct " name="product.slider.  onsale" template="productslider.phtml">
   	<arguments>
          <argument name="products_count" xsi:type="number">8</argument>
          <argument name="margin" xsi:type="string">5</argument>
          <argument name="heading" xsi:type="string">On OnSale Product</argument>
          <argument name="description" xsi:type="string">Here is your onsale products   description</argument>
   	</arguments>
  </block>


Add Block Category Id by file layout
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

::

  <block class="Mageplaza\Productslider\Block\CategoryId" name="product.slider.  categoryid" template="productslider.phtml" category_id="3">
   	<arguments>
          <argument name="products_count" xsi:type="number">8</argument>
          <argument name="category_id" xsi:type="number">3</argument>
          <argument name="margin" xsi:type="string">5</argument>
          <argument name="heading" xsi:type="string">CategoryId</argument>
          <argument name="description" xsi:type="string">Here is your category   description</argument>
   	</arguments>
  </block>


Add Block Featured Products by file layout
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

::

  <block class="Mageplaza\Productslider\Block\FeaturedProducts" name="product.slider.  featured" template="productslider.phtml">
  	<arguments>
          <argument name="products_count" xsi:type="number">8</argument>
          <argument name="margin" xsi:type="string">5</argument>
          <argument name="heading" xsi:type="string">Featured Products</argument>
          <argument name="description" xsi:type="string">Here is your featured products   description</argument>
   	</arguments>
  </block>


.phtml file
^^^^^^^^^^^^^^


::
  <?php echo $block->getLayout()->createBlock('Mageplaza\Productslider\Block\NewProducts')->setTemplate('productslider.phtml')->toHtml();?>
