===========
User Guide
===========

Introduction
----------------

`One Step Checkout extension for Magento 2`_ was developed by Mageplaza is the best marketing tool in order to help you reduce your store abandonment cart, increase conversion rate and totally grow your store revenue. That extension helps customer checkout quickly and conveniently in one page with all six steps. Many outstanding plugins such as Ajax loading, Google address suggestion, Auto-update order information, Apply coupon on checkout page, Support multi payment methods will improve your checkout page become more powerful and more effective. 

User guide
---------------

Mageplaza Search for Magento 1 User Guide will provide the detailed instructions to know **How to use** on the frontend and **How to Config** on the backend.

How to use
^^^^^^^^^^^^^

 After adding the right products in the cart, customer will be navigated to checkout page. The checkout page will be shown with all six step as image below.

.. image:: https://i.imgur.com/L3DL0Ur.png

Let enter fully the necessary fields to complete checkout steps as following easy guide

Log In / Sign Up
~~~~~~~~~~~~~~~~~~~~~~~~

* If customer have already an account, they will enter the info to login at:
 
.. image::  https://i.imgur.com/2Ycj95V.png

* If customer still don't have an account, please create a new account at: 
 
.. image::  http://i.imgur.com/dtOQWQo.png

Billing Address
~~~~~~~~~~~~~~~~~~

.. image::  https://i.imgur.com/GJ1fp1j.png

* Customer enter their personal information: Full name, last name, email
* Enter some characters in address field, Auto-suggest address technology will show the address suggestion, customer just choose the right one. Or other method, click on **Location** button and then customer address will be automatically fillfull in corresponding fields

Shipping Address
~~~~~~~~~~~~~~~~~~~

.. image::  https://i.imgur.com/Ka6hyFN.png

* If customer want to ship to same address with billing address, just mark **Ship to same address**
* If not, please leave mark at **Ship to same address** field, the shipping address section will be shown with required information that need to fill.
* Enter full your shipping address in the shipping address section

Shipping Method
~~~~~~~~~~~~~~~~~~~

.. image::  https://i.imgur.com/fnbfXWK.png

* Depending on the configuration in the backend, the shipping method will be displayed for customer choosing.
* Just choose the shipping method that suitable with customer requirement

Payment Method
~~~~~~~~~~~~~~~~~~

.. image::  https://i.imgur.com/xTHxbVV.png

* Choose the payment method
* Enter right information in the required fields

Order Review and Place Order
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. image::  https://i.imgur.com/img8Qdb.png

* Overview your order with product name, price and quantity
* Customer can change/edit easily the product quantity by using minus or plus button.
* Customer can remove or add more product immediately in checkout page by using **x** button or clicking on **Edit your cart** button
* Check the Subtotal, Tax and Grant Total detail clearly
* In the **Coupon Code** field, enter the coupon code that customer want to apply, then click on **Apply Coupon** button
* Customer can leave their comments about their order, product in the **Comments** field
* Mark the **Sign up newsletter** if customer would like to receive the newsletters from provider.
  
* When complete, click on **Place order** button to complete checkout process.


How to config
^^^^^^^^^^^^^^^^^

Following our given guide below to complete One Step Checkout configuration

* General Configuration
* Display Configuration
* Design Configuration
* Terms & Conditions Configuration

General Configuration
~~~~~~~~~~~~~~~~~~~~~~~~~~

* On the Admin panel, click **Stores**. In the **Settings** section, select **Configuration**.
* Select **One Step Checkout** under **Mageplaza** in the panel on the left to show the extension configuration.

Or other method

* Click on **One Step Checkout** on the Admin Panel to show the extension configuration if available.

.. image::  https://i.imgur.com/fSj2Py1.png

* Open the **General Configuration** section, and continue with following:

.. image::  https://i.imgur.com/F0y1cQa.png

 * In the **Enable One Step Checkout** field, select **Yes** to enable One Step Checkout extension
 * In the **One Step Checkout Page Title** field, enter the page title you want
 * In the **One Step Checkout Description** field, enter the short description to describe the One Step Checkout page
 * In the **Default Country** field, select default country for Billing address and Shipping address.
 * In the **Default Shipping Method** field, set default shipping method in the checkout process.
 * In the **Default Payment Method** field, set default payment method in the checkout process.
 * In the **Allow Guest Checkout** field, select **Yes** to allow checking out as a guest. Guest can create an account in the checkout page.
 * In the **Allow shipping To Different Address** field, select **Yes** to allow customers can shipping to a different address from billing address.
 * In the **Use Auto Suggestion Technology** field, select one of the following options

  * No: if you don't want to use auto suggestion technology
  * Google: if you select `Google` option, when customer fills address fields, it will suggest a list of full addresses.
  * Capture+ by PCA Predict:

Display Configuration
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* Open the **Display Configuration** section, and continue with following:

.. image::  http://i.imgur.com/ZgPzns6.png

 
 * In the **Show Order Review Section** field, the Order Review is enabled by default, if you want to disable to review order, let select **Disabled** option.
 * In the **Show Product Thumbnail Image** field, select **Yes** allow to show product thumbnail image
 * In the **Thumbnail Image Width** field, enter the width in pixel 
 * In the **Thumbnail Image Height** field, enter the height in pixel
 * In the **Show Edit Cart Link** field, select **Yes** to allow showing edit cart link
 * In the **Discount Code Section** field, select **Enabled** to show Discount Code box in Checkout page.
 * In the **Apply Coupon Button** field, if **Disabled**, Coupon code will be validated automatically after enter coupon code.

.. image::  http://i.imgur.com/arz1MdP.png

 * In the **Order Comment** field, selec **Enabled** to show the Order Comment box that allow to customer enter their comment in order.
 * In the **Gift Message** field, select **Enabled** to show the Gift Message box that allow to customer enter their gift message to send friends
 * In the **Gift Wrap** field, select **Enabled** if you allow customer to chose Gift Wrap option

 * If you allow to show Gift Wrap option, two following fields will be shown

  * **Calculate Method** field, select **Per Order** or **Per Item** to calculate gift wrap fee based on item or order.
  * **Amount** field, enter the amount of gift wrap fee.

 * In the **Newsletter Checkbox** field, select **Enabled** if you want to show Sign up newsletter selection
 * In the **Checked Newsletter by default** field, select **No** if you don't want to check newsletter by default

Design Configuration
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* Open the **Design Configuration** section, and continue with following:

.. image::  https://i.imgur.com/k8RJkLN.png


 * In the **Checkout Page Layout** field, select one of the following layout

  * 1 column
  * 2 columns
  * 3 columns

 * In the **Popup Effect** field, select one of the following effects to show the popup

  * Zoom
  * Newspaper
  * Horizontal move
  * Move from top
  * 3D unfold
  * Zoom-out

 * In the **Heading** field, select **Icon** or **Number** to display in heading
 * In the **Heading Style** field, there are 3 choices for you

  * Style 1
  * Style 2
  * Style 3

 * In the **Heading Text Color** field, choose color for the heading text
 * In the **Heading Background Color** field, select one of following option to match your site

  * Default
  * Orange
  * Green
  * Black
  * Blue
  * Dark blue
  * Pink
  * Red
  * Violet
  * Custom

 * In the **Custom Heading Background Color** field, choose the color code that is suitable with your brand
 * In the **Place Order button color** field, choose the color for the place order button which should be highlight to attract customer the most.
 * In the **Add jQuery Library** field, should select **No** if you have ready jQuery in all pages.

Terms and Conditions Configuration
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* Open the **Terms and Conditions Configuration** section, and continue with following: 

.. image::  https://i.imgur.com/wazTHSO.png

 * In the **Terms and Conditions (TOS)** field, select **Yes** to show the terms and conditions
 * In the **Have to read TOS before checking the checkbox** field, select **No** if you want customers have to read all TOS before clicking on Accept 
 * In the **Checkbox Text** field, 
 * In the **Terms and Conditions Title** field, enter the title of the terms and conditions 
 * In the **Terms and Conditions Content** field, enter the content of the terms and conditions


.. _One Step Checkout extension for Magento 2: https://www.mageplaza.com/magento-2-one-step-checkout-extension/

Community Support
~~~~~~~~~~~~~~~~~~~

Ask for helps on `Magento Community`_

.. _Magento Community: http://magento.stackexchange.com/
