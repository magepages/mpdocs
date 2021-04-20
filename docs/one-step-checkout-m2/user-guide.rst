

One Step Checkout extension for Magento 2, developed by Mageplaza, is the best marketing tool which helps you to reduce your store abandonment cart, increase conversion rate and totally grow your store revenue. That extension helps customers checkout quickly and conveniently in one page with all six steps. Many outstanding plugins such as Ajax loading, Google address suggestion, Auto-update order information, Apply coupon on the checkout page, Support multi payment methods will improve your checkout page and make it more powerful and more effective. 


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
* Buyers can choose their favourable time to receive delivery at **Delivery Time**. This extension is entirely compatible with OSC
* Also, buyers can enter their house security code if it's neccessary. 
* Moreover, One Step Checkout module allows buyers to leave their comments about the orders, products in the **Comments** field

1.5. Payment Method
^^^^^^^^^^^^^^^^^^

.. image:: https://i.imgur.com/QkguPLX.png

* One Step Checkout allows customers to quickly select their favorable payment method only by a single click.
* Admin can add more other payment methods at the backend ``Sale > Payment Method``. You can refer `here <https://www.mageplaza.com/magento-2-create-payment-method/>`_ for more information.

1.6. Order Review and Place Order
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. image:: https://i.imgur.com/iDfdvNN.png

* In the **Order Review** section, One Step Checkout allows buyers to easily adjust their item's quantity by using the minus/plus button. In addition, it allows editing each item:

.. image:: https://i.imgur.com/ZdgcRcT.png

* Subtotal, shipping fee, tax and grand total are displayed clearly by **One Step Checkout**.
* **One Step Checkout** enables customers to apply coupon in the **Apply Discount Code** box.
* The box **Sign up for newsletter** can be selected if customers desire to receive information from the online store via email.
* Customers may request the purchased product to be wrapped and send a gift message with that product.

.. image:: https://i.imgur.com/STkdBqh.png

* Terms and conditions will be displayed in a pop-up box and can be accepted by clicking on **I agree with terms and conditions**.
* Eventually, the one step checkout can be finished by a click on the **Place Order** button. The whole process is completed in one page only.
* Seal block is displayed to make sure this is the official checkout page of the store, not forged. 

1.7. Quickly add Product and Coupon by URL
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

* Customer can quickly add a certain number of Products by SKU by adding some information at the URL
* Supported Product Types include: Simple Product,  Child Configurable Product, Downloadable Product
* Customers can also quickly add Coupon when inserting information to the URL
* Adding Product: For example, adding 2 products whose SKU is MH01 and 3 products whose SKU is WSH12-28-Red to OSC at store with website: www.example.com

`www.example.com/onestepcheckout/?sku[MH01]=2&sku[WSH12-28-Red]=3`

- Add Coupon: For example, add a coupon with the code `COUPON123` to the OSC at the store with a website: www.example.com

`www.example.com/onestepcheckout/? coupon = COUPON123`

- Add Coupon and Product at the same time: For example, add 2 products with SKU as MH01 and coupon with code CO COONON123 to OSC at store with website: www.example.com

`www.example.com/onestepcheckout/?sku [MH01] = 2 & coupon = COUPON123`


II. How to configure
----------------

Login to Magento Admin, following our given guide below to complete One Step Checkout configuration

* Field Management
* Configuration
  * General Configuration
  * Display Configuration
  * Design Configuration
  
2.1. Manage Fields
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

2.1.1. Address Information
'''''''''''''''''''''''''''''''''''

From the Admin Panel, go to `Stores > One Step Checkout > Manage Fields`, choose **Address Information**. Drag and drop tabs from **Available** fields to **Sorted** fields to have them appeared in the checkout page. 

Here, admin can configure **Required** by checking the right corner of each field, changing the frame length by dragging and dropping (length can be dragged: 25%, 50%, 100%), drag and drop tabs from **Available** fields to **Sorted** fields to have them appeared in the checkout page:

.. image:: https://i.imgur.com/VDreW1S.gif

2.1.2. Shipping Method
'''''''''''''''''''''''''''''''

- From the Admin Panel, go to `Stores > One Step Checkout > Manage Fields`, chọn **Shipping Method**
- Drag and drop tabs from **Available** fields to **Sorted** fields to have them appeared in the checkout page.
- Please install Mageplaza Order Attributes to add more custom checkout fields.

.. image:: https://i.imgur.com/VTNfGfS.gif



2.1.3. Payment Method
'''''''''''''''''''''''''''''''

- From the Admin Panel, go to `Stores > One Step Checkout > Manage Fields`, chọn **Payment Method**
- Drag and drop tabs from **Available** fields to **Sorted** fields to have them appeared in the checkout page.
- Please install Mageplaza Order Attributes to add more custom checkout fields.

.. image:: https://i.imgur.com/iuhXSlT.gif

2.1.4. Order Summary
'''''''''''''''''''''''''''''''

- From the Admin Panel, go to `Stores > One Step Checkout > Manage Fields`, chọn **Order Summary**
- Drag and drop tabs from **Available** fields to **Sorted** fields to have them appeared in the checkout page.
- Please install Mageplaza Order Attributes to add more custom checkout fields.

.. image:: https://i.imgur.com/A8yV19E.gif


2.2. Configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

2.2.1. General Configuration
''''''''''''''''''''''''''''''''''''

* Open the ``Stores > Settings > Configuration > Mageplaza Extensions > One Step Checkout > General Configuration`` section:

.. image:: https://i.imgur.com/3JXDvwI.png

* In the **Enable One Step Checkout** field: Select "Yes" to enable One Step Checkout extension.
* In the **One Step Checkout Page Title** field: Enter the page title you want.
* In the **One Step Checkout Description** field: Enter the short description to describe the One Step Checkout page.
* In the **Default Shipping Method** field: Set default shipping method in the checkout process.
* In the **Default Payment Method** field: Set default payment method in the checkout process.
* In the **Allow Guest Checkout** field: 
  
  * Select "Yes" to allow checking out as a guest. Also, guests can create an account on the checkout page.
  * Select “No (require create account)” : Guest must enter password to create account at checkout
  * Select “No (require login)”: Guest must login before checkout

* In the **Auto-redirect to One Step Checkout page** field: Select "Yes" to turn this function on
* In the **Show Billing Address** field: Select "Yes" to allow shipping items to a different address from billing address.
* In the **Use Auto Suggestion Technology** field: Select one of the following options:

  * No: if you don't want to use auto-suggestion technology
  * Google: if you select **Google** option, when the customer fills address fields, it will suggest a list of full addresses.

    * In **Google API Key** field: Insert the Key. About how to get this key, you can refer `this guide <https://developers.google.com/maps/documentation/javascript/get-api-key>`_.
    * In **Restrict the auto suggestion for a specific country** field: Select default country for Billing address and Shipping address.
    
* **Enable GeoIP**: GeoIP allows you to lookup the approximate location of an IP address. If store owners enable this function, when a customer comes to the checkout page, State, country, city and zip code will be automatically entered based on his current IP address. Ask customers fill less, they will buy yours more! You need install `GeoIP Mageplaza Extension to use this function.

  * Select **No**: If you don’t want to use GeoIP
  
  * Select **Yes** to enable GeoIP Extension.

* **Route**: Allow admin to modify the URL route of One Step Checkout Page. You can left this field blank if you want to use the default route which is `onestepcheckout`.


2.2.2. Display Configuration
''''''''''''''''''''''''''''''''''''

Make your way to ``MStores > Settings > Configuration > Mageplaza Extensions > One Step Checkout`` 

* Open the **Display Configuration** section, and continue with following:

.. image:: https://i.imgur.com/MxGFUBR.png

* In the **Show Login Link** field: Set "Yes" to show the Login link which allows the customer to sign in. Leave "No" to disable this link. 
* Show/Hide Footer/Header: Depending on each theme that the checkout page will or will not display the Header/Footer of that page.

  * With themes which display, choose Yes in this section to make it also display in the One Step Checkout page and choose No to hide it
  
  * With themes which not, you can pass this config

* In the **Discount Code Section** field: 

  * Select "No" to hide **Apply Discount Code** box on the Checkout page.
  * Select "In Payment Area" to display the **Apply Discount Code** box in the Payment Methods area.
  * Select "In Review Area" to display the **Apply Discount Code** box in the Review Order area.
 
* In the **Show Order Comment** field: Select "Yes" to show the Order Comment box that allows the customer to enter their comment on the order.
* In the **Enable Gift Message on order** field: Select "Yes" to show the Gift Message box that allows the customer to enter their gift message.

.. image:: https://i.imgur.com/rfX18ct.gif

* In the **Enable Gift Messages on item** field: This means you will be able to send gift message for each of item. Enable to use this function by choosing “Yes"

.. image:: http://imgur.com/iQ0FOEW.gif

* In the **Show Terms and Conditions** field: You can choose "No" to not display the *Terms and Conditions* OR select "YES" to display it in two different positions: **In Payment Area** and **In Review Area**.



2.2.2.1. Review Cart Section
''''''''''''''''''''''''''''''''''''

.. image:: https://i.imgur.com/1NXqUR6.png

* In the **Show Order Review Section** field: The Order Review is enabled by default, if you want to disable to review order, let select "Disabled" option.
* Show Product List Toggle: Choose Yes so customers can shorten the product list before checkout
* In the **Show Product Thumbnail Image** field: Choose "Yes" to show thumbnail

2.2.2.2. Gift Wrap
''''''''''''''''''''''''''''''''''''

.. image:: https://i.imgur.com/tZG0Yxc.png

* Select "Yes" if you allow the customer to choose Gift Wrap option. After choosing, the change will be applied automatically to the order.If you allow showing Gift Wrap option, two following fields will be shown:

  * **Calculate Method** field, select **Per Order** or **Per Item** to calculate the gift wrap fee based on the item quantity or the order total. Comment box will be shown at the Shipping Method area.
  
  * **Amount** field, enter the gift wrap fee. If you leave it blank, **Gift wrap fee = 0**
  
2.2.2.3. Newsletter
''''''''''''''''''''''''''''''''''''

.. image:: https://i.imgur.com/znNzYws.png

* Select "Yes" if you want to show Sign up newsletter selection.
* Checked Newsletter by default will be displayed. Select “Yes” to keep this item be checked as always.

2.2.2.4. Survey
''''''''''''''''''''''''''''''''''''

.. image:: https://i.imgur.com/0DkKo3v.png

* Set "Yes" to allow store owner can issue a survey question to buyers when they placed order successfully, some additional fields will be expanded.

  * **Survey Question**: The questionnaire is filled in this section
  
  * **Survey Answers**: Store owners can offer multiple answer options to their customers. Each of an answer options are displayed as a checkbox, which means that customers can select multiple answers at a time.
  
  * **Allow Customer Add Other Option**: Select “Yes” so that customers can make their own answers to survey questions.

2.2.2.5. Seal Block
''''''''''''''''''''''''''''''''''''

* Seal Block always displays under Place Order button

.. image:: https://i.imgur.com/PKJoptF.png

* There are 3 display Seal Block options: 

* *Enable = No*: Not display Seal Block in One Step Checkout
  
.. image:: https://i.imgur.com/N2O88ts.png
  

* *Enable = Select Static Block*. When the admin selects this option, the Block option will be displayed to admin select the CMS block that he or she wants to act as Seal Block to show outside the Frontend. We also provide you seal block default which is One Step Checkout Seal Content to refer
  
.. image:: https://i.imgur.com/p3kXnox.png


* *Enable = Use Default Design*. When choosing this option, admin can customize the images and contents of Seal Block quickly and easily
  
.. image:: https://i.imgur.com/EXFwdXT.png

2.2.2.6. Static CMS Block
''''''''''''''''''''''''''''''''''''

.. image:: https://i.imgur.com/634SZ8G.png

* Choose Yes to insert Static CMS Blocks into Top/Bottom of One Step Checkout page or insert in Success Page. The display order is set in the Sort Order column 

2.2.3. Design Configuration
''''''''''''''''''''''''''''''''''''

* Open the **Design Configuration** section, and continue with following:

.. image:: https://i.imgur.com/N5hjf8m.png

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

2.2.4 Custom Fields Configuration
'''''''''''''''''''''''''

- Open the **Custom Fields Configuration** section, and continue with the following:

.. image:: https://i.imgur.com/DghTZ5u.png

- Add 3 default Custom Field with Custom Field 1 and 2 as Text, Custom Field 3 as Date:

.. image:: https://i.imgur.com/raBYXKd.png

2.3. Other configurations
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Sometimes you can't display some minor fields on the checkout page even you've enabled them in the backend configuration. Don't worry that there're no serious technical issue here, please follow those below instructions to display them properly.
  
2.3.1. Terms and Conditions Configuration
''''''''''''''''''''''''''''''''''''

Term and Conditions might not appear on the frontend due to:

* Term and Conditions hasn't been created yet. Follow ``Admin > Stores > Settings > Terms and Conditions > Add New Condition`` to create a new form.
* You haven't turn **Term** of Magento configuration on`yet. Please go to `Stores > Settings > Configuration > Sales > Checkout > Checkout Options``, set **Enable Terms and Conditions** to “Yes”.
* Then, refer `here <https://www.mageplaza.com/magento-2-one-step-checkout-extension/terms-and-conditions.html>`_ to learn how to enable the Term and Conditions on the checkout page.

.. image:: https://i.imgur.com/1Vuly6x.jpg 

2.3.2. Enable Gift Messages on item
''''''''''''''''''''''''''''''''''''

When you enable this option but can't see its icon on the frontend, you might not have allowed the product to have the message. Please log in to ``Catalog > Product``, choose that product you want it to have gift message, enable this below option and save the product.

.. image:: https://i.imgur.com/dEnrHDB.png

2.3.3. Add Shipping Method
''''''''''''''''''''''''''''''''''''

In general, Magento just displays two basic shipping methods are Flat Rate and Table Rates. To add another shipping method, go to ``Stores > Settings > Configuration``, enter ``Sale > Shipping Method`` and follow this `guide <https://www.mageplaza.com/kb/how-to-configure-shipping-method-magento-2.html>`_. 


2.3.4. Compatible One Step Checkout with Paypal
''''''''''''''''''''''''''''''''''''

- One Step Checkout Module can be compatible with **Paypal Payment Gateway**. To know more about Paypal, please visit `here <https://www.paypal.com/us/webapps/mpp/paypal-popup>`_
- Moreover, One Step Checkout also support **Braintree**, a Paypal service. To know more about Braintree, please visit `here <https://www.braintreepayments.com/>`_. 

- To configure the Payment methods integrated with One Step Checkout, go to ``Stores > Settings > Configuration > Sales > Payments Method``. Then choose the Payment method you want to configure. 

.. image:: https://i.imgur.com/iIbH2M2.png

-  For **Paypal Express Checkout Configuration**, please follow the guide `here <https://docs.magento.com/m2/ce/user_guide/payment/paypal-express-checkout.html>`_ 
- For **Braintree Configuration**, please follow the guide `here <https://docs.magento.com/m2/ce/user_guide/payment/braintree.html>`_ 


.. image:: https://i.imgur.com/8d8c2Er.png

2.3.5. Add comment into Order Confirmation Email
''''''''''''''''''''''''''''''''''''

To add comment into Order Confirmation Email, please refer the `guide here <https://www.mageplaza.com/faqs/how-add-comment-email-order-confirmations.html>`_

III. Compatible Order Attribute
----------------

.. image:: https://i.imgur.com/yVLN3aU.png

IV. Compatible Customer Attribute
----------------

.. image:: https://i.imgur.com/Zj9Laje.png
