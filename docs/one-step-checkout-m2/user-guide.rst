

**One Step Checkout extension for Magento 2**, developed by Mageplaza, is the best marketing tool developed to help you reduce your store abandonment cart, increase conversion rate and totally grow your store revenue. That extension helps customers checkout quickly and conveniently in one page with all six steps. Many outstanding plugins such as Ajax loading, Google address suggestion, Auto-update order information, Apply coupon on the checkout page, Support multi payment methods will improve your checkout page and make it more powerful and more effective. 


Mageplaza One Step Checkout for Magento 2 User Guide will provide the detailed instructions to know **How to use** on the frontend and **How to Config** on the backend.

I. How to use
-----------

After adding the right products in the cart, the customer will be navigated to the checkout page. The checkout page will be shown with all six steps as the image below.

.. image:: https://i.imgur.com/IanLuma.png

A one-step checkout will be totally done on one page only by completing information and selecting options.

1.1. Log In / Sign Up
^^^^^^^^^^^^^^^^^^

* Proceed the checkout with customer's existed information by a click on the blue link "Already have an account, click here to login". A pop-up box will appear to allow buyers to fill in their accounts as below:
 
.. image:: https://imgur.com/FIxJWVa.jpg

* Otherwise, buyers are able to purchase without registering an account 
* Buyers can create a new account at the same time when selecting the box Create Account: 
 
.. image:: https://i.imgur.com/i0ULj5g.png

1.2. Shipping Address
^^^^^^^^^^^^^^^^^^

.. image:: https://i.imgur.com/rShUgYY.png 

* Customers enter their personal information into required fields (which are marked by a red ``*``).
* In the box Street Address, One Step Checkout helps displayìng a list of addresses suggested automatically by typing only one letter. Furthermore, Country, City and State/Province will be consequently auto-updated based on the selected street address.

1.3. Billing Address
^^^^^^^^^^^^^^^^^^

.. image:: https://i.imgur.com/TJdLmNm.png

* Buyers can tick the box **My billing and shipping address are the same** to have their item(s) delivered to their billing address. Otherwise, the **Billing Address** section allows buyers to fill in their information to check out.

1.4. Shipping Method
^^^^^^^^^^^^^^^^^^

.. image:: https://i.imgur.com/gq8EwTX.png

* Depending on the configuration in the backend, the shipping method will be variable to meet customers' requirements.
* Admin can add more other shipping methods at the backend ``Sale > Shipping Method``. You can refer `here <https://www.mageplaza.com/magento-2-create-shipping-method/>`_ for more information.
* Buyers can choose their favourable time to receive delivery at **Delivery Time**
* Also, buyers can enter their house security code if it's neccessary. 
* Moreover, One Step Checkout module allows buyers to leave their comments about the orders, products in the **Comments** field

1.5. Payment Method
^^^^^^^^^^^^^^^^^^

.. image:: https://i.imgur.com/QkguPLX.png

* One Step Checkout allows customers to quickly select their favorable payment method only by a single click.
* Admin can add more other payment methods at the backend ``Sale > Payment Method``. You can refer `here <https://www.mageplaza.com/magento-2-create-payment-method/>`_ for more information.

1.6. Order Review and Place Order
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. image:: https://i.imgur.com/bUR8yEx.png

* In the **Order Review** section, One Step Checkout allows buyers to easily adjust their item's quantity by using the minus/plus button.
* Subtotal, shipping fee, tax and grand total are displayed clearly by **One Step Checkout**.
* **One Step Checkout** enables customers to apply coupon in the **Apply Discount Code** box.
* The box **Sign up for newsletter** can be selected if customers desire to receive information from the online store via email.
* Terms and conditions will be displayed in a pop-up box and can be accepted by clicking on **I agree with terms and conditions**.
* Eventually, the one step checkout can be finished by a click on the **Place Order** button. The whole process is completed in one page only.


II. How to configure
----------------

Login to Magento Admin, following our given guide below to complete One Step Checkout configuration

* Field Management
* General Configuration
  
  * Display Configuration
  * Design Configuration
  * Terms & Conditions Configuration

2.1. Field Management
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

From the Admin Panel, go to ``Stores > One Step Checkout > Manage Fields``. Drag and drop tabs from Available fields to Sorted fields to have them appeared in the checkout page.

.. image:: https://i.imgur.com/i6URgSe.gif


2.2. Configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

2.2.1. General Configuration
''''''''''''''''''''''''''''''''''''

* Open the ``Stores > Settings > Configuration > Mageplaza Extensions > One Step Checkout > General Configuration`` section:

.. image:: https://i.imgur.com/J2q7jYR.png

* In the **Enable One Step Checkout** field: Select "Yes" to enable One Step Checkout extension.
* In the **One Step Checkout Page Title** field: Enter the page title you want.
* In the **One Step Checkout Description** field: Enter the short description to describe the One Step Checkout page.
* In the **Default Shipping Method** field: Set default shipping method in the checkout process.
* In the **Default Payment Method** field: Set default payment method in the checkout process.
* In the **Allow Guest Checkout** field: Select "Yes" to allow checking out as a guest. Also, guests can create an account on the checkout page.
* In the **Auto-redirect to One Step Checkout page** field: Select "Yes" to turn this function on
* In the **Show Billing Address** field: Select "Yes" to allow shipping items to a different address from billing address.
* In the **Use Auto Suggestion Technology** field: Select one of the following options:

  * No: if you don't want to use auto-suggestion technology
  * Google: if you select **Google** option, when the customer fills address fields, it will suggest a list of full addresses.

    * In **Google API Key** field: Insert the Key. About how to get this key, you can refer `this guide <https://developers.google.com/maps/documentation/javascript/get-api-key>`_.
    * In **Restrict the auto suggestion for a specific country** field: Select default country for Billing address and Shipping address.

2.2.2. Display Configuration
''''''''''''''''''''''''''''''''''''

Make your way to ``MStores > Settings > Configuration > Mageplaza Extensions > One Step Checkout > Display Configuration``, open the **Display Configuration** section, and continue with following:

.. image:: https://i.imgur.com/pK7x6Ee.png

* In the **Show Login Link** field: Set "Yes" to show the Login link which allows the customer to sign in. Leave "No" to disable this link. 
* In the **Show Order Review Section** field: The Order Review is enabled by default, if you want to disable to review order, let select "Disabled" option.
* In the **Show Product Thumbnail Image** field: Choose "Yes" to show thumbnail 
* In the **Discount Code Section** field: 

  * Select "No" to hide **Apply Discount Code** box on the Checkout page.
  * Select "In Payment Area" to display the **Apply Discount Code** box in the Payment Methods area.
  * Select “In Review Area” to display the **Apply Discount Code** box in the Review Area area.

* In the **Enable Gift Wrap** field: Select "Yes" if you allow the customer to choose Gift Wrap option. After choosing, the change will be applied automatically to the order.If you allow showing Gift Wrap option, two following fields will be shown:

 * **Calculate Method** field, select **Per Order** or **Per Item** to calculate the gift wrap fee based on the item quantity or the order total. Comment box will be shown at the Shipping Method area.
 * **Amount** field, enter the gift wrap fee. If you leave it blank, **Gift wrap fee = 0**
 
.. image:: https://i.imgur.com/2ltyWtX.png 
 
* In the **Show Order Comment** field: Select "Yes" to show the Order Comment box that allows the customer to enter their comment on the order.
* In the **Enable Gift Message** field: Select "Yes" to show the Gift Message box that allows the customer to enter their gift message.
* In the **Enable Gift Messages on item** field: This means you will be able to send gift message for each of item. Enable to use this function by choosing “Yes"

.. image:: http://imgur.com/iQ0FOEW.gif

* In the **Show Terms and Conditions** field: You can choose "No" to not display the *Terms and Conditions* OR select "YES" to display it in two different positions: **In Payment Area** and **In Review Area**.
* In the **Show Newsletter Checkbox** field:

  * Select "Yes" if you want to show Sign up newsletter selection.
  * Checked Newsletter by default will be displayed. Select "Yes" to keep this item be checked as always.

* In the **Enable Delivery Time** field: Set "Yes" to allow customers to note the time when they can receive the shipping items, some additional fields will be expanded 

.. image:: http://imgur.com/QpvpZmH.jpg

*
  * In the **House Security Code** field: Choose “Yes” if you want to display this selection.
  * In the **Date Format** field: Choose an appropriate format for the date and time. Here are 3 format provided: *Day/Month/Year*, *Month/Day/Year*, and *Year/Month/Day*.
  * In the **Days Off** field: choose day(s) not in your official working time. 
  * You can refer for more configure guide in `here <https://www.mageplaza.com/magento-2-delivery-time-extension/>`_.

.. image:: https://i.imgur.com/LGdENxO.png

* In the **Enable Survey** field: Set "Yes" to allow store owner can issue a survey question to buyers when they placed order successfully, some additional fields will be expanded.

  * **Survey Question**: The questionnaire is filled in this section
  * **Survey Answers**: Store owners can offer multiple answer options to their customers. Each of an answer options are displayed as a checkbox, which means that customers can select multiple answers at a time.
  * **Allow Customer Add Other Option**: Select "Yes" so that customers can make their own answers to survey questions.
  
2.2.3. Design Configuration
''''''''''''''''''''''''''''''''''''

* Open the **Design Configuration** section, and continue with following:

.. image:: https://i.imgur.com/xhCMHpj.png

* In the **Checkout Page Layout** field: Select one of the following layouts to have your checkout page be shown in four different interfaces

  * 1 column
  * 2 columns
  * 3 columns
  * 3 columns with Colspan

* In the **Design Style** field, there are 3 design styles for the One Step Checkout page

  * Default Design style 

.. image:: http://imgur.com/OHYrYIO.jpg    

* Flat Design style. If you choose this, you can customize colors of
 
  * Heading Background
  * Heading Text      

.. image:: https://i.imgur.com/DhWMdR4.png 

* Material Design style: If you choose this style, you’ll be able to change

  * Radio Button
  * Checkbox button
  * Material color
  
.. image:: https://i.imgur.com/kAfq91y.png  
  
* In the **Place Order button color** field: Choose the color for the place order button which should be a highlight to attract shoppers the most.
* In the **Custom CSS** field: You can add the CSS code to custom your own style.

2.2.4. Geo IP Configuration
''''''''''''''''''''''''''''''''''''

GeoIP allows you to lookup the approximate location of an IP address. If store owners enable this function, when a customer comes to the checkout page, State, country, city and zip code will be automatically entered based on his current IP address. Ask customers fill less, they will buy yours more! 

Enable GeoIP is pretty easy. Let's follow these steps in **GEO IP** section

* Uncheck the ``Use system value`` box
* Choose “Yes” to enable the GeoIP
* Click Download Library button and wait for a second to apply the change
* Click Save Config

.. image:: https://imgur.com/7nREABf.jpg

  
2.2.5. Terms and Conditions Configuration
''''''''''''''''''''''''''''''''''''

* Firstly, go to **Admin Panel > Mageplaza > One Step Checkout > Display Configuration**, set the **Show Terms and Conditions** field.

.. image:: http://imgur.com/va2YlUb.jpg

* Go to **Stores > Settings > Configuration > Sales > Checkout > Checkout Options**, set **Enable Terms and Conditions** to "Yes".

.. image:: http://i.imgur.com/0ELZRPq.png

* There is empty TOS in the Terms and Conditions list, now you have to add your TOS.

Go to **Admin > Stores > Settings > Terms and Conditions > Add New Condition**

.. image:: https://imgur.com/lfwmtIJ.gif

You can add multi Terms and Conditions for your Checkout page. The form will be displayed as the below image:

.. image:: http://imgur.com/WrQhDk8.jpg

* In **Status** field: Select "Enable" to show the terms and conditions.
* In **Applied** field: 
    * Select **Manually** if you want the customer to go through all TOS before clicking on Accept.
    * Select **Automatically** if you want the TOS to be checked by default.
* In **Checkbox Text** field: Enter the checkbox title.
* In **Content** field: Enter the content of the terms and conditions

Finally, choose **Save Condition** to finish.

.. _One Step Checkout extension for Magento 2: https://www.mageplaza.com/magento-2-one-step-checkout-extension/

