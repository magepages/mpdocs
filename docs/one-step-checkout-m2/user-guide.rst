

`One Step Checkout extension for Magento 2`, developed by Mageplaza, is the best marketing tool in order to help you reduce your store abandonment cart, increase conversion rate and totally grow your store revenue. That extension helps customer checkout quickly and conveniently in one page with all six steps. Many outstanding plugins such as Ajax loading, Google address suggestion, Auto-update order information, Apply coupon on the checkout page, Support multi payment methods will improve your checkout page become more powerful and more effective. 


Mageplaza One Step Checkout for Magento 2 User Guide will provide the detailed instructions to know **How to use** on the frontend and **How to Config** on the backend.

How to use
-----------

 After adding the right products in the cart, the customer will be navigated to the checkout page. The checkout page will be shown with all six step as the image below.

.. image:: https://i.imgur.com/L3DL0Ur.png

Let enter fully the necessary fields to complete checkout steps as following easy guide

Log In / Sign Up
^^^^^^^^^^^^^^^^^^

* If the customer already has an account, they will enter the info to login at:
 
.. image::  https://i.imgur.com/2Ycj95V.png

* If the customer doesn't have an account yet, please create a new account at: 
 
.. image::  http://i.imgur.com/dtOQWQo.png

Billing Address
^^^^^^^^^^^^^^^^^^

.. image::  https://i.imgur.com/GJ1fp1j.png

* Customer enter their personal information: Full name, last name, and email.
* Enter some characters in the address field, Auto-suggest address technology will show the address suggestion, the customer just needs to choose the right one. Or another method, click on **Location** button and then customer address will be automatically fulfilled in corresponding fields.

Shipping Address
^^^^^^^^^^^^^^^^^^

.. image::  https://i.imgur.com/Ka6hyFN.png

* If customer want to ship to same address with billing address, just mark **Ship to same address**.
* If not, please leave a mark at **Ship to same address** field, the shipping address section will be shown with required information that needs to fill.
* Enter full your shipping address in the shipping address section

Shipping Method
^^^^^^^^^^^^^^^^^^

.. image::  https://i.imgur.com/fnbfXWK.png

* Depending on the configuration in the backend, the shipping method will be displayed for the customer choose.
* Choose the shipping method that suitable with customer requirement

Payment Method
^^^^^^^^^^^^^^^^^^

.. image::  https://i.imgur.com/xTHxbVV.png

* Choose the payment method
* Enter right information in the required fields

Order Review and Place Order
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. image::  https://i.imgur.com/img8Qdb.png

* Overview your order with product name, price, and quantity
* Customer can change/edit easily the product quantity by using minus or plus button.
* Customer can remove or add more product immediately in checkout page by using **x** button or clicking on **Edit your cart** button
* Check the Subtotal, Tax and Grant Total detail clearly
* In the **Coupon Code** field, enter the coupon code that customer want to apply, then click on **Apply Coupon** button
* Customer can leave their comments about their order, product in the **Comments** field
* Mark the **Sign up newsletter** if the customer would like to receive the newsletters from the provider.
  
* When complete, click on **Place order** button to complete the checkout process.


How to config
----------------

Login to Magento Admin, choose `Mageplaza > One Step Checkout` on the panel.

  .. image:: http://i.imgur.com/Rd5wE0o.png
  
Following our given guide below to complete One Step Checkout configuration

* Field Management
* General Configuration
* Display Configuration
* Design Configuration
* Terms & Conditions Configuration

Field Management
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

From the Admin Panel, go to `Mageplaza > One Step Checkout > Field Management`. 

.. image::  http://i.imgur.com/iTnpJWr.gif

You can freely to manage the fields on Checkout page by drag-and-drop.

.. image::  https://i.imgur.com/e3ZCVhx.gif


General Configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

* Open the **General Configuration** section:

.. image::  http://i.imgur.com/uNJ61f3.png

* In the **Enable One Step Checkout** field, select **Yes** to enable One Step Checkout extension.
* In the **One Step Checkout Page Title** field, enter the page title you want.
* In the **One Step Checkout Description** field, enter the short description to describe the One Step Checkout page.
* In the **Default Shipping Method** field, set default shipping method in the checkout process.
* In the **Default Payment Method** field, set default payment method in the checkout process.
* In the **Allow Guest Checkout** field, select **Yes** to allow checking out as a guest. Guest can create an account on the checkout page.
* In the **Can Show Billing Address** field, select **Yes** to allow customers can shipping to a different address from billing address.
* In the **Use Auto Suggestion Technology** field, select one of the following options

  * No: if you don't want to use auto-suggestion technology
  * Google: if you select `Google` option, when the customer fills address fields, it will suggest a list of full addresses.
  * Capture+ by PCA Predict:

* In the **Google API Key** field, insert the Key. About how to get this key, you can refer [this guide](https://developers.google.com/maps/documentation/javascript/get-api-key).
* In the **Restrict the auto suggestion for a specific country** field, select default country for Billing address and Shipping address.

Display Configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

* Open the **Display Configuration** section, and continue with following:

.. image::  http://i.imgur.com/x3jKP4z.png

* In the **Show Login Link** field, set **Yes** to show the Login link which allows the customer signs in. Leave **No** to disable this link. 
* In the **Show Order Review Section** field, the Order Review is enabled by default, if you want to disable to review order, let select **Disabled** option.
* In the **Discount Code Section** field, select **Enabled** to show Discount Code box on the Checkout page.
* In the **Enable Gift Wrap** field, select **Yes** if you allow the customer to chose Gift Wrap option. After choosing, the change will be applied automatically to the order.
* If you allow showing Gift Wrap option, two following fields will be shown:

 * **Calculate Method** field, select **Per Order** or **Per Item** to calculate gift wrap fee based on the items or order.
 * **Amount** field, enter the amount of gift wrap fee.
 
* In the **Show Order Comment** field, select **Yes** to show the Order Comment box that allows the customer to enter their comment in the order.
* In the **Enable Gift Message** field, select **Yes** to show the Gift Message box that allows the customer to enter their gift message to send friends
* In the **Show Terms and Conditions** field, you can choose **No** to not display the *Terms and Conditions* OR choose to display it in 2 different positions: **In Payment Area** and **In Review Area**.
* In the **Show Newsletter Checkbox** field, select **Yes** if you want to show Sign up newsletter selection.
* In the **Enable Social Login On Checkout Page** field, choose **Yes* to allow the customers to login to their social network account. You should install [Social Login by Mageplaza](http://www.mageplaza.com/magento-2-social-login-extension/).
* In the **Enable Delivery Time** field, set **Yes** to allow the customer to note the time when they can receive the shipping items, leave **No** to disable. 

Design Configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

* Open the **Design Configuration** section, and continue with following:

.. image::  http://i.imgur.com/1JFYbiV.png


* In the **Checkout Page Layout** field, select one of the following layouts:

  * 1 column
  * 2 columns
  * 3 columns
  * 3 columns with Colspan

* In the **Design Style** field, select one of the following style options:
    * Default
    * Flat
  
* In the **Heading Background Color** field, choose the color that matches your site.
* In the **Heading Text Color** field, choose color for the heading text
* In the **Place Order button color** field, choose the color for the place order button which should be a highlight to attract customer the most.
* In the **Custom CSS** field, you can add the CSS code to custom your own style.
  
Terms and Conditions Configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

* Firstly, go to `Admin Panel > Mageplaza > One Step Checkout > Display Configuration`, set the **Show Terms and Conditions** field to be **Yes** to enable the feature.

.. image:: https://imgur.com/tABpphV

* Go to `Stores > Settings > Configuration > Sales > Checkout > Checkout Options`, set `Enable Terms and Conditions` to **Yes**.

.. image:: http://i.imgur.com/0ELZRPq.png

* There is empty TOS in the Terms and Conditions list, now you have to add your TOS.

Go to `Admin > Stores > Settings > Terms and Conditions > Add New Condition`

You can add multi Terms and Conditions for your Checkout page.

.. image:: http://i.imgur.com/tOWECCm.gif

The form will be displayed as the below image:

.. image:: http://i.imgur.com/SDYyCe1.png

* In the **Status** field, select **Enable** to show the terms and conditions.
* In the **Applied** field, 
    * Select **Manually** if you want the customer to have to read all TOS before clicking on Accept.
    * Select **Automatically** if you want the TOS to be already accepted
* In the **Checkbox Text** field, enter the checkbox title.
* In the **Content** field, enter the content of the terms and conditions

Finally, choose **Save Condition** to finish.

.. _One Step Checkout extension for Magento 2: https://www.mageplaza.com/magento-2-one-step-checkout-extension/

