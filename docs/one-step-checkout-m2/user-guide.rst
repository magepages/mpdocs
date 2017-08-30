

**One Step Checkout extension for Magento 2**, developed by Mageplaza, is the best marketing tool developed to help you reduce your store abandonment cart, increase conversion rate and totally grow your store revenue. That extension helps customers checkout quickly and conveniently in one page with all six steps. Many outstanding plugins such as Ajax loading, Google address suggestion, Auto-update order information, Apply coupon on the checkout page, Support multi payment methods will improve your checkout page and make it more powerful and more effective. 


Mageplaza One Step Checkout for Magento 2 User Guide will provide the detailed instructions to know **How to use** on the frontend and **How to Config** on the backend.

.. note:: Magento version compatibility
  Community: 2.1.x
  Enterprise: 2.1.x



I. How to use
-----------

After adding the right products in the cart, the customer will be navigated to the checkout page. The checkout page will be shown with all six steps as the image below.

.. image:: http://imgur.com/rSskloB.jpg

A one-step checkout will be totally done on one page only by completing information and selecting options.

Log In / Sign Up
^^^^^^^^^^^^^^^^^^

* Proceed the checkout with customers' existed information by a click on the blue link "Already have an account, click here to login". A pop-up box will appear to allow buyers to fill in their accounts as below:
 
.. image::  https://imgur.com/FIxJWVa.jpg

* Otherwise, buyers are able to purchase without using a personal account by filling the Billing Address section, or create a new account at the same time when selecting the box Create Account: 
 
.. image::  https://i.imgur.com/dtOQWQo.png

Billing Address
^^^^^^^^^^^^^^^^^^

.. image::  https://cdn.mageplaza.com/media/general/GJ1fp1j.png

* Customers enter their personal information: Full name, last name, and email.
* In the box Street Address, One Step Checkout helps display a list of addresses suggested automatically by typing only one letter. Furthermore, Country, City and State/Province will be consequently auto-updated based on the selected street address.

Shipping Address
^^^^^^^^^^^^^^^^^^

.. image::  https://cdn.mageplaza.com/media/general/Ka6hyFN.png

* Buyers can tick the box **My billing and shipping address are the same** to have their item(s) delivered to their billing address. Otherwise, the **Billing Address** section allows buyers to fill in their information to check out.

Shipping Method
^^^^^^^^^^^^^^^^^^

.. image::  https://cdn.mageplaza.com/media/general/fnbfXWK.png

* Depending on the configuration in the backend, the shipping method will be variable to meet customers' requirements.

Payment Method
^^^^^^^^^^^^^^^^^^

.. image::  https://cdn.mageplaza.com/media/general/xTHxbVV.png

* One Step Checkout allows customers to quickly select their favorable payment method only by a single click.

Order Review and Place Order
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. image::  https://cdn.mageplaza.com/media/general/img8Qdb.png

* In the **Order Review** section, One Step Checkout allows buyers to easily adjust their item's quantity by using the minus/plus button.
* The extension also helps remove or add more items immediately in the checkout by using the X button or by clicking the **Edit your Cart** button.
* Subtotal, shipping fee, tax and grand total are displayed clearly by **One Step Checkout**.
* **One Step Checkout** enables customers to apply coupon in the **Coupon Code** box.
* Allows customers to leave their comments about their order, product in the **Comments** field
* The box **Sign up for newsletter** can be selected if customers desire to receive information from the online store via email.
  
* Terms and conditions will be displayed in a pop-up box and can be accepted by clicking on **I agree with terms and conditions**.

* Eventually, the one step checkout can be finished by a click on the **Place Order** button. The whole process is completed in one page only.


II. How to configure
----------------

Login to Magento Admin, choose **Mageplaza > One Step Checkout** on the panel. Following our given guide below to complete One Step Checkout configuration

* Field Management
* General Configuration
  
  * Display Configuration
  * Design Configuration
  * Terms & Conditions Configuration

1. Field Management
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

From the Admin Panel, go to ``Mageplaza > One Step Checkout > Field Management``. Drag and drop tabs from Available fields to Sorted fields to have them appear in the Checkout page.

.. image::  https://cdn.mageplaza.com/media/general/e3ZCVhx.gif


2. Configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

2.1 General Configuration
''''''''''''''''''''''''''''''''''''

* Open the ``Magento Backend > Mageplaza > One Step Checkout > Configuration > General Configuration`` section:

.. image::  https://imgur.com/dKm43da.jpg

* In the **Enable One Step Checkout** field, select "Yes" to enable One Step Checkout extension.
* In the **One Step Checkout Page Title** field, enter the page title you want.
* In the **One Step Checkout Description** field, enter the short description to describe the One Step Checkout page.
* In the **Default Shipping Method** field, set default shipping method in the checkout process.
* In the **Default Payment Method** field, set default payment method in the checkout process.
* In the **Allow Guest Checkout** field, select "Yes" to allow checking out as a guest. Also, guests can create an account on the checkout page.
* In the **Auto-redirect to One Step Checkout page** field, select "Yes" to turn this function on
* In the **Can Show Billing Address** field, select "Yes" to allow shipping items to a different address from billing address.
* In the **Use Auto Suggestion Technology** field, select one of the following options

  * No: if you don't want to use auto-suggestion technology
  * Google: if you select **Google** option, when the customer fills address fields, it will suggest a list of full addresses.
  * Capture+ by PCA Predict:

* In the **Google API Key** field, insert the Key. About how to get this key, you can refer `this guide <https://developers.google.com/maps/documentation/javascript/get-api-key>`_.

* In the **Restrict the auto suggestion for a specific country** field, select default country for Billing address and Shipping address.

2.2 Display Configuration
''''''''''''''''''''''''''''''''''''

Mageplaza > One Step Checkout > Configuration >

* Open the **Display Configuration** section, and continue with following:

.. image::  http://imgur.com/1qZBwuo.jpg

* In the **Show Login Link** field, set "Yes" to show the Login link which allows the customer to sign in. Leave "No" to disable this link. 
* In the **Show Order Review Section** field, the Order Review is enabled by default, if you want to disable to review order, let select "Disabled" option.
* In the **Show Product Thumbnail Image** field, choose "Yes" to show thumbnail 
* In the **Discount Code Section** field, select "Enabled" to show Discount Code box on the Checkout page.
* In the **Enable Gift Wrap** field, select "Yes" if you allow the customer to choose Gift Wrap option. After choosing, the change will be applied automatically to the order.
* If you allow showing Gift Wrap option, two following fields will be shown:

 * **Calculate Method** field, select **Per Order** or **Per Item** to calculate the gift wrap fee based on the item quantity or the order total.
 * **Amount** field, enter the gift wrap fee.
 
* In the **Show Order Comment** field, select "Yes" to show the Order Comment box that allows the customer to enter their comment on the order.
* In the **Enable Gift Message** field, select "Yes" to show the Gift Message box that allows the customer to enter their gift message.
* In **Enable Gift Messages on item** field: this means you will be able to send gift message for each of item. Enable to use this function by choosing “Yes

.. image:: http://imgur.com/iQ0FOEW.gif

* In the **Show Terms and Conditions** field, you can choose "No" to not display the *Terms and Conditions* OR select "YES" to display it in two different positions: **In Payment Area** and **In Review Area**.
* In the **Show Newsletter Checkbox** field, select "Yes" if you want to show Sign up newsletter selection.
* In the **Enable Social Login On Checkout Page** field, choose "Yes" to allow the customers to login to their social network account. You should install `Social Login by Mageplaza <http://www.mageplaza.com/magento-2-social-login-extension>`_.
* In the **Enable Delivery Time** field, set "Yes" to allow customers to note the time when they can receive the shipping items, some additional fields will be expanded 

.. image:: http://imgur.com/QpvpZmH.jpg

*
  * In **House Security Code** field, choose “Yes” if you want to display this selection.
  * In **Date Format** field, choose an appropriate format for the date and time.
  * In **Days Off** field, choose day(s) not in your official working time.  
  
2.3 Design Configuration
''''''''''''''''''''''''''''''''''''

* Open the **Design Configuration** section, and continue with following:

.. image:: http://imgur.com/473TmyY.jpg 


* In the **Checkout Page Layout** field, select one of the following layouts to have your checkout page be shown in four different interfaces

  * 1 column
  * 2 columns
  * 3 columns
  * 3 columns with Colspan

* In Design Style field, there are 3 design styles for the One Step Checkout page

  * Default Design style 

.. image:: http://imgur.com/OHYrYIO.jpg    

* Flat Design style. If you choose this, you can customize colors of
 
  * Heading Background
  * Heading Text      

.. image:: http://imgur.com/Q3y8zK8.jpg 

* Material Design style: If you choose this style, you’ll be able to change colors of

  * Radio Button
  * Checkbox button
  * Material color
.. image:: http://imgur.com/XxhYtf1.jpg  
  
* In the **Heading Background Color** field, choose the color that matches your site.
* In the **Heading Text Color** field, choose the color for the heading text
* In the **Place Order button color** field, choose the color for the place order button which should be a highlight to attract shoppers the most.
* In the **Custom CSS** field, you can add the CSS code to custom your own style.

2.4 GeoIP Configuration
''''''''''''''''''''''''''''''''''''

GeoIP allows you to lookup the approximate location of an IP address. If store owners enable this function, when a customer comes to checkout page, State, country, city and zip code will be automatically completed based on his current IP address. Ask customers fill less, they will buy yours more! 

Enable GeoIP is pretty easy

* Uncheck the ``Use system value`` box
* Choose “Yes” to enable the GeoIP
* Click Download Library button and wait for a second to apply the change
* Click Save Config

.. image:: http://imgur.com/iQ0FOEW.jpg

  
2.5 Terms and Conditions Configuration
''''''''''''''''''''''''''''''''''''

* Firstly, go to **Admin Panel > Mageplaza > One Step Checkout > Display Configuration**, set the **Show Terms and Conditions** field.

.. image:: http://i.imgur.com/sdIrbIY.png

* Go to **Stores > Settings > Configuration > Sales > Checkout > Checkout Options**, set **Enable Terms and Conditions** to "Yes".

.. image:: http://i.imgur.com/0ELZRPq.png

* There is empty TOS in the Terms and Conditions list, now you have to add your TOS.

Go to **Admin > Stores > Settings > Terms and Conditions > Add New Condition**

You can add multi Terms and Conditions for your Checkout page.

.. image:: http://i.imgur.com/tOWECCm.gif

The form will be displayed as the below image:

.. image:: http://i.imgur.com/SDYyCe1.png

* In the **Status** field, select "Enable" to show the terms and conditions.
* In the **Applied** field, 
    * Select **Manually** if you want the customer to go through all TOS before clicking on Accept.
    * Select **Automatically** if you want the TOS to be checked by default.
* In the **Checkbox Text** field, enter the checkbox title.
* In the **Content** field, enter the content of the terms and conditions

Finally, choose **Save Condition** to finish.

.. _One Step Checkout extension for Magento 2: https://www.mageplaza.com/magento-2-one-step-checkout-extension/

