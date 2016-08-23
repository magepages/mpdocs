==============
User Guide
==============

List of Available Blocks
---------------------------

- `Mageplaza\Productslider\Block\AbstractSlider` to contain methods are used by classes extend
- `Mageplaza\Productslider\Block\OnSaleProduct` to get onsale products collection
- `Mageplaza\Productslider\Block\CategoryId` to get products collection by category id
- `Mageplaza\Productslider\Block\FeaturedProducts` to get featured products collection
- `Mageplaza\Productslider\Block\NewProducts` to get new products collection


CMS Pages, CMS Static Block (Insert into Homepage)
--------------------------------------------------------

Add Block New Products paste to CMS page
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

```

{{block class="Mageplaza\Productslider\Block\NewProducts" template="Mageplaza_Productslider::productslider.phtml" products_count="8" heading="New Products" description="Here is your new products description"}}

```

Add Block On Sale Products paste to CMS page:
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

```

{{block class="Mageplaza\Productslider\Block\OnSaleProduct" template="Mageplaza_Productslider::productslider.phtml" products_count="8" heading="OnSaleProduct Products" description="Here is your onsale product description"}}

```

Add Block Featured Products paste to CMS page
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

`::

{{block class="Mageplaza\Productslider\Block\FeaturedProducts" template="Mageplaza_Productslider::productslider.phtml" products_count="8" heading="FeaturedProducts Products" description="Here is your featured product description"}}


Add Block Category Id paste to CMS page
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

`::

{{block class="Mageplaza\Productslider\Block\CategoryId" template="Mageplaza_Productslider::productslider.phtml" products_count="8" category_id="6" heading="Category" description="Here is your category description"}}


Explaination
---------------

- products_count is your amout  products you want to display
- category_id is your category id you want to display it's product
- heading define your heading
- description define your decription to your products


Layout: XML File, XML Data
------------------------------

Add Block New Products by file layout
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

`::

<block class="Mageplaza\Productslider\Block\NewProducts" name="product.slider.newproduct" template="productslider.phtml">
	<arguments>
        <argument name="products_count" xsi:type="number">8</argument>
        <argument name="margin" xsi:type="string">5</argument>
        <argument name="heading" xsi:type="string">New Products</argument>
        <argument name="description" xsi:type="string">Here is your new products description </argument>
 	</arguments>
 </block>


Add Block On Sale Products by file layout
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

`::

<block class="Mageplaza\Productslider\Block\OnSaleProduct " name="product.slider.onsale" template="productslider.phtml">
 	<arguments>
        <argument name="products_count" xsi:type="number">8</argument>
        <argument name="margin" xsi:type="string">5</argument>
        <argument name="heading" xsi:type="string">On OnSale Product</argument>
        <argument name="description" xsi:type="string">Here is your onsale products description</argument>
 	</arguments>
</block>


Add Block Category Id by file layout
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

`::

<block class="Mageplaza\Productslider\Block\CategoryId" name="product.slider.categoryid" template="productslider.phtml" category_id="3">
 	<arguments>
        <argument name="products_count" xsi:type="number">8</argument>
        <argument name="category_id" xsi:type="number">3</argument>
        <argument name="margin" xsi:type="string">5</argument>
        <argument name="heading" xsi:type="string">CategoryId</argument>
        <argument name="description" xsi:type="string">Here is your category description</argument>
 	</arguments>
</block>


Add Block Featured Products by file layout
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

`::

<block class="Mageplaza\Productslider\Block\FeaturedProducts" name="product.slider.featured" template="productslider.phtml">
	<arguments>
        <argument name="products_count" xsi:type="number">8</argument>
        <argument name="margin" xsi:type="string">5</argument>
        <argument name="heading" xsi:type="string">Featured Products</argument>
        <argument name="description" xsi:type="string">Here is your featured products description</argument>
 	</arguments>
</block>



Example custom OWL
----------------------

When execute this code, responsive will be set with param in your admin config (if exists), if not it will be set default by OWL.

Enable infinity loop 
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To enable infinity loop, add this code to CMS page

`::

{{block class="Mageplaza\Productslider\Block\NewProducts" template="Mageplaza_Productslider::productslider.phtml" products_count="8" heading="New Products" description="Here is your new products description" items="4" loop="1"}}




Responsive slider
^^^^^^^^^^^^^^^^^^^

To enable the responsive slider, add this code to CMS page

`::

{{block class="Mageplaza\Productslider\Block\NewProducts" template="Mageplaza_Productslider::productslider.phtml" products_count="8" heading="New Products" description="Here is your new products description"  responsive="1" loop="1"}}


Navigation bar
^^^^^^^^^^^^^^^^^^^^^^^

To display the navigation bar, add this code to CMS page

`::

{{block class="Mageplaza\Productslider\Block\NewProducts" template="Mageplaza_Productslider::productslider.phtml" products_count="8" heading="New Products" description="Here is your new products description" items="4" nav="1" loop="1"}}


  .. note:: 
      The navigation will not be displayed unless the number of items are less than products_count.



Set an item in the center of the product slider 
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To show an item in the center of the product slider, add this code to CMS page

`::

{{block class="Mageplaza\Productslider\Block\NewProducts" template="Mageplaza_Productslider::productslider.phtml" products_count="8" heading="New Products" description="Here is your new products description" items="4" loop="1" center="1"}}


  .. note::
      Keep in mind that dots are not working here.


Merge the width of items when change the screen size
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To merge the width of items when change the screen size, add this code to CMS page

`::

{{block class="Mageplaza\Productslider\Block\NewProducts" template="Mageplaza_Productslider::productslider.phtml" products_count="8" heading="New Products" description="Here is your new products description" items="4" loop="1" margin="10" merge="1"}}


* Merge option requires data-merge="number_items_to_merge" on any child element (can be nested as well). There is a sibling option called mergeFit which fits merged elements to screen size.

* That same with this code in template file


Display items in origin width
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To show items in origin width, add this code to CMS page:

`::

{{block class="Mageplaza\Productslider\Block\NewProducts" template="Mageplaza_Productslider::productslider.phtml" products_count="8" heading="New Products" description="Here is your new products description" items="4" loop="1" margin="10" autoWidth="1"}}



Add the left and right padding style (in pixels) onto stage-wrapper
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To add the left and right padding style (in pixels) onto stage-wrapper, add this code to CMS page:

`::

{{block class="Mageplaza\Productslider\Block\NewProducts" template="Mageplaza_Productslider::productslider.phtml" products_count="8" heading="New Products" description="Here is your new products description" items="4" loop="1"margin="10" stagePadding="50"}}



Change direction from right to left 
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To change direction from right to left, add this code to CMS page:

`::

{{block class="Mageplaza\Productslider\Block\NewProducts" template="Mageplaza_Productslider::productslider.phtml" products_count="8" heading="New Products" description="Here is your new products description" items="4" loop="1"margin="10" rtl="1"}}



Autoplay 
^^^^^^^^^^^^

To autoplay, add this code to CMS page:

`::

{{block class="Mageplaza\Productslider\Block\NewProducts" template="Mageplaza_Productslider::productslider.phtml" products_count="8" heading="New Products" description="Here is your new products description" items="4" loop="1"margin="10" autoplay="1" autoplayTimeout="5000" autoplayHoverPause="1"}}




Display item's height according to heighest item 
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To display item's height according to heighest item, add this code to CMS page:

`::

{{block class="Mageplaza\Productslider\Block\NewProducts" template="Mageplaza_Productslider::productslider.phtml" products_count="8" heading="New Products" description="Here is your new products description" items="1" loop="1"margin="10" autoHeight="1"}}



At the moment works only with 1 item on screen. The plan is to calculate all visible items and change height according to heighest item.

 
How to change style of product slider
----------------------------------------

You can custom template file at 

Path: `app/code/Mageplaza/Productslider/view/frontend/templates/productslider.phtml:`






Banner Slider Options (OWL slider)
------------------------------------

- items: The number of items you want to see on the screen.
	- Type: number
	- Default: 3
- margin: margin-right(px) on item.
	- Type: Number 
	- Default: 0
-loop: Infinity loop. Duplicate last and first items to get loop illusion.
	- Type: Boolean 
	- Default: false
- center: Center item. Works well with even an odd number of items.
	- Type: Boolean 
	- Default: false
- mouseDrag: Mouse drag enabled.
	- Type: Boolean 
	- Default: true
- touchDrag:Touch drag enabled.
	- Type: Boolean 
	- Default: true
- pullDrag: Stage pull to edge.
	- Type: Boolean 
	- Default: true
- freeDrag: Item pull to edge.
	- Type: Boolean 
	- Default: false
- stagePadding: Padding left and right on stage (can see neighbours).
	- Type: Number 
	- Default: 0
- merge: Merge items. Looking for data-merge='{number}' inside item..
	- Type: Boolean 
	- Default: false
-mergeFit: Fit merged items if screen is smaller than items value.
	- Type: Boolean 
	- Default: true
- autoWidth: Set non grid content. Try using width style on divs.
	- Type: Boolean 
	- Default: false
- startPosition: Start position or URL Hash string like '#id'.
	- Type: Number/String 
	- Default: 0
-URLhashListener: Listen to url hash changes. data-hash on items is required.
	- Type: Boolean 
	- Default: false
- nav: Show next/prev buttons
	- Type: Boolean 
	- Default: false
- rewind: Go backwards when the boundary has reached.
	- Type: Boolean 
	- Default: true
- navText: HTML allowed.
	- Type: Array 
	- Default: [&#x27;next&#x27;,&#x27;prev&#x27;]
- navElement: DOM element type for a single directional navigation link.
	- Type: String 
	- Default: div
- slideBy: Navigation slide by x. 'page' string can be set to slide by page.
	- Type: Number/String 
	- Default: 1
- dots: Show dots navigation.
	- Type: Boolean 
	- Default: true
- dotsEach: Show dots each x item.
	- Type: Number/Boolean 
	- Default: false
- dotData: Used by data-dot content.
	- Type: Boolean 
	- Default: false
- lazyLoad: Lazy load images. data-src and data-src-retina for highres. Also load images into background inline style if element is not <img>
	- Type: Boolean 
	- Default: false
- lazyContent: lazyContent was introduced during beta tests but i removed it from the final release due to bad implementation. It is a nice options so i will work on it in the nearest feature.
	- Type: Boolean 
	- Default: false
- autoplay: Autoplay.
	- Type: Boolean 
	- Default: false
- autoplayTimeout: Autoplay interval timeout.
	- Type: Number 
	- Default: 5000
- autoplayHoverPause: Pause on mouse hover.
	- Type: Boolean 
	- Default: false
- smartSpeed: Speed Calculate. More info to come..
    - Type: Number 
    - Default: 250
- fluidSpeed: Speed Calculate. More info to come..
	- Type: Boolean 
	- Default: Number
- autoplaySpeed: autoplay speed.
	- Type: Number/Boolean 
	- Default: false
- navSpeed: Navigation speed.
	- Type: Number/Boolean 
	- Default: false
- dotsSpeed: Pagination speed.
	- Type: Boolean 
	- Default: Number/Boolean
- dragEndSpeed: Drag end speed.
	- Type: Number/Boolean 
	- Default: false
- callbacks: Enable callback events.
	- Type: Boolean 
	- Default: true
- responsive: Object containing responsive options. Can be set to false to remove responsive capabilities.
	- Type: Object 
	- Default: empty object
- responsiveRefreshRate: Responsive refresh rate.
	- Type: Number 
	- Default: 200
- responsiveBaseElement: Set on any DOM element. If you care about non responsive browser (like ie8) then use it on main wrapper. This will prevent from crazy resizing.
	- Type: DOM element 
	- Default: window
- video: Enable fetching YouTube/Vimeo/Vzaar videos.
	- Type: Boolean 
	- Default: false
- videoHeight: Set height for videos.
	- Type: Number/Boolean 
	- Default: false
- videoWidth: Set width for videos.
	- Type: Number/Boolean 
	- Default: false
- animateOut: Class for CSS3 animation out.
	- Type: String/Boolean 
	- Default: false
- animateInClass: Class for CSS3 animation in.
	- Type: String/Boolean 
	- Default: false
- fallbackEasing: Easing for CSS2 $.animate.
	- Type: String 
	- Default: swing
- info: Callback to retrieve basic information (current item/pages/widths). Info function second parameter is Owl DOM object reference.
    - Type: Function  
    - Default: false
- nestedItemSelector: Use it if owl items are deep nested inside some generated content. E.g 'youritem'. Dont use dot before class name.
	- Type: String/Class 
	- Default: false
- itemElement: DOM element type for owl-item.
    - Type: String 
    - Default: div
- stageElement: DOM element type for owl-stage.
    - Type: String 
    - Default: div
- navContainer: Set your own container for nav.
	- Type: String/Class/ID/Boolean 
 	- Default: false
- dotsContainer: Set your own container for nav.
    - Type: String/Class/ID/Boolean 
    - Default: false
