How to display insert product slider on category pages
=========================================================

Display products of a category 
---------------------------------

To display products of a category, add this code to Custom Layout Update of category page::

  <block class="Mageplaza\Productslider\Block\CategoryId" name="product.slider.category"
                    template="checkout.phtml">
     <arguments>
         <argument name="loop" xsi:type="string">1</argument>
         <argument name="products_count" xsi:type="string">8</argument>
         <argument name="category_id" xsi:type="string">6</argument>
         <argument name="heading" xsi:type="string">Checkout</argument>
         <argument name="description" xsi:type="string">Here is what`s trending on Luma  right now</argument>
     </arguments>
  </block>

Display on sale products 
---------------------------

To display on sale products, add this code to Custom Layout Update of category page::


 <block class="Mageplaza\Productslider\Block\OnSaleProduct" name="product.slider.onsale"
                   template="checkout.phtml">
    <arguments>
        <argument name="loop" xsi:type="string">1</argument>
        <argument name="products_count" xsi:type="string">8</argument>
        <argument name="heading" xsi:type="string">On OnSale Product</argument>
        <argument name="description" xsi:type="string">Here is your onsale products description</argument>
    </arguments>
 </block>



Add Block New Products
--------------------------

::

  <block class="Mageplaza\Productslider\Block\NewProducts" name="product.slider.  newproduct" template="productslider.phtml">
  	<arguments>
          <argument name="loop" xsi:type="string">1</argument>
          <argument name="products_count" xsi:type="number">8</argument>
          <argument name="margin" xsi:type="string">5</argument>
          <argument name="heading" xsi:type="string">On New Products</argument>
          <argument name="description" xsi:type="string">Here is your new products   description </argument>
   	</arguments>
   </block>



Add Block Featured Products
-----------------------------

::

  <block class="Mageplaza\Productslider\Block\FeaturedProducts" name="product.slider.  featured" template="productslider.phtml">
  	<arguments>
          <argument name="loop" xsi:type="string">1</argument>
          <argument name="products_count" xsi:type="number">8</argument>
          <argument name="margin" xsi:type="string">5</argument>
          <argument name="heading" xsi:type="string">Featured Products</argument>
          <argument name="description" xsi:type="string">Here is your featured products   description</argument>
   	</arguments>
  </block>


Arguments
------------

- `loop` : your slider can loop infinite or not.
- `products_count` : your amout  products you want to display.
- `category_id` : your category id you want to display it's product.
- `heading` : your heading.
- `description` : your decription to your products.





.. include:: ../ad_footer.rst