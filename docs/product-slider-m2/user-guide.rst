==============
User Guide
==============

List of Available Blocks
---------------------------

- ``Mageplaza\Productslider\Block\AbstractSlider`` to contain methods are used by classes extend
- ``Mageplaza\Productslider\Block\OnSaleProduct`` to get onsale products collection
- ``Mageplaza\Productslider\Block\CategoryId`` to get products collection by category id
- ``Mageplaza\Productslider\Block\FeaturedProducts`` to get featured products collection
- ``Mageplaza\Productslider\Block\NewProducts`` to get new products collection


CMS Pages, CMS Static Block (Insert into Homepage)
--------------------------------------------------------

Add Block New Products paste to CMS page
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



Example custom OWL
----------------------

When execute this code, responsive will be set with param in your admin config (if exists), if not it will be set default by OWL.

Enable infinity loop 
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To enable infinity loop, add this code to CMS page

::

  {{block class="Mageplaza\Productslider\Block\NewProducts" template="Mageplaza_Productslider::productslider.phtml" products_count="8" heading="New Products" description="Here is your new products description" items="4" loop="1"}}




Responsive slider
^^^^^^^^^^^^^^^^^^^

To enable the responsive slider, add this code to CMS page

::

  {{block class="Mageplaza\Productslider\Block\NewProducts" template="Mageplaza_Productslider::productslider.phtml" products_count="8" heading="New Products" description="Here is your new products description"  responsive="1" loop="1"}}


Navigation bar
^^^^^^^^^^^^^^^^^^^^^^^

To display the navigation bar, add this code to CMS page

::

  {{block class="Mageplaza\Productslider\Block\NewProducts" template="Mageplaza_Productslider::productslider.phtml" products_count="8" heading="New Products" description="Here is your new products description" items="4" nav="1" loop="1"}}


.. note:: 
      The navigation will not be displayed unless the number of items are less than products_count.



Set an item in the center of the product slider 
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To show an item in the center of the product slider, add this code to CMS page

::

  {{block class="Mageplaza\Productslider\Block\NewProducts" template="Mageplaza_Productslider::productslider.phtml" products_count="8" heading="New Products" description="Here is your new products description" items="4" loop="1" center="1"}}


.. note::
      Keep in mind that dots are not working here.


Merge the width of items when change the screen size
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To merge the width of items when change the screen size, add this code to CMS page

::

  {{block class="Mageplaza\Productslider\Block\NewProducts" template="Mageplaza_Productslider::productslider.phtml" products_count="8" heading="New Products" description="Here is your new products description" items="4" loop="1" margin="10" merge="1"}}


* Merge option requires data-merge="number_items_to_merge" on any child element (can be nested as well). There is a sibling option called mergeFit which fits merged elements to screen size.

* That same with this code in template file


Display items in origin width
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To show items in origin width, add this code to CMS page:

::

  {{block class="Mageplaza\Productslider\Block\NewProducts" template="Mageplaza_Productslider::productslider.phtml" products_count="8" heading="New Products" description="Here is your new products description" items="4" loop="1" margin="10" autoWidth="1"}}



Add the left and right padding style (in pixels) onto stage-wrapper
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To add the left and right padding style (in pixels) onto stage-wrapper, add this code to CMS page:

::

  {{block class="Mageplaza\Productslider\Block\NewProducts" template="Mageplaza_Productslider::productslider.phtml" products_count="8" heading="New Products" description="Here is your new products description" items="4" loop="1"margin="10" stagePadding="50"}}



Change direction from right to left 
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To change direction from right to left, add this code to CMS page:

::

  {{block class="Mageplaza\Productslider\Block\NewProducts" template="Mageplaza_Productslider::productslider.phtml" products_count="8" heading="New Products" description="Here is your new products description" items="4" loop="1"margin="10" rtl="1"}}



Autoplay 
^^^^^^^^^^^^

To autoplay, add this code to CMS page:

::

  {{block class="Mageplaza\Productslider\Block\NewProducts" template="Mageplaza_Productslider::productslider.phtml" products_count="8" heading="New Products" description="Here is your new products description" items="4" loop="1"margin="10" autoplay="1" autoplayTimeout="5000" autoplayHoverPause="1"}}




Display item's height according to heighest item 
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To display item's height according to heighest item, add this code to CMS page:

::

  {{block class="Mageplaza\Productslider\Block\NewProducts" template="Mageplaza_Productslider::productslider.phtml" products_count="8" heading="New Products" description="Here is your new products description" items="1" loop="1"margin="10" autoHeight="1"}}



At the moment works only with 1 item on screen. The plan is to calculate all visible items and change height according to heighest item.

 
How to change style of product slider
----------------------------------------

You can custom template file at 

Path: `app/code/Mageplaza/Productslider/view/frontend/templates/productslider.phtml:`



