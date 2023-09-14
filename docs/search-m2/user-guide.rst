Overview
#####

**Search extension** for Magento 2 was launched by Mageplaza is a perfect solution that improves your searching system. Our Search extension brings the most benefits for your customer in terms of finding preferred product. The relevant searching results will be shown immediately after customer enter the first letter of product name. Thus, this extension will help to save your customer's time, make customer satisfaction and make your sale increase definitely.

Mageplaza Search for Magento 2 User Guide will provide detailed instructions to know **How to use** on the frontend and **How to Configure** on the backend.

.. note:: 
  * This extension can be used in multiple stores.
  * All stores will be configured under Default Configuration.
  * To change the configuration of each store, admins have to uncheck "Use Website" at the left of each Option.
  * Extension’s configuration in each store will be applied to the selected store.
  * Configuration of this store won’t take impact on the other store’s configuration.

How to use
*****

On the frontend, the search box will be shown on the upper-right corner 
Customers only click on the search box. It will display 10 New Products or Most View Products or Best Seller Product immediately.

.. image:: https://i.imgur.com/jCouPin.png

* Customers are able to enter the character of product name on this box to search their preferred product.

.. image:: https://i.imgur.com/XnlY1hu.png

* Depends on the configuration in the backend, the search result will display product name, product thumbnail image, price and short description.
* The number of search result(s) will be set up in the backend.
* Customers will click on the result that they are finding, then be redirected to its product page automatically.

Algolia
*****

* To register an Algolia account, please visit https://dashboard.algolia.com/users/sign_in.

.. image:: https://i.imgur.com/5EeHBqa.png

* After logging in your new account, please go to **Settings > Applications** and click on **Create Application**. Fill in the required information to create the application based on your address.

.. image:: https://i.imgur.com/bHEVxnL.png

* Next, choose API Keys to collect information from the fields of Application ID, Search-Only API Key, Admin API key to connect with your website.

.. image:: https://i.imgur.com/cVOSFXw.png

How to configure
*****

After logging in to your Magento Admin, choose ``Store > Settings > Configuration > Mageplaza Extensions > Search``

.. image:: https://i.imgur.com/bLPAwim.png

Open **General Settings** section and do the following:

.. image:: https://i.imgur.com/7FbBTkQ.png

* In **Enable** field: Select "Yes" to enable this module.
* In **Maximum Number of Search Results** field:
	@@ -48,35 +53,61 @@ Open **General Settings** section and do the following:
* In **Limit number of characters in description section** field:

  * Indicates the maximum character of a product's short description that display on Search Result pages.
  * After changing this field, remember to click ``Save COnfig``, ``Reindex Search Data`` to apply changes on the frontend. 

* In the **Information Display** field: Chosen information will display on Search Result pages. 

* In the **Reindex Search Database** field, select one of the following

  * **Cronjob**: If your store has more than 3,000 SKUs, you should choose Cron job, it runs daily at 0AM your server time.
  * **After Product Save**: This option is a good choice for store has less than 3,000 products
  * **Manually** (used reindex button bellow): You have to click ``Reindex`` button everytime product's information changes.

Open **Search by category configuration** section and do the following:

.. image:: https://i.imgur.com/rtIhJue.png


* In the **Search by category configuration** field: This field allows customer the ability to search by Product and Category's name 

  * In the **Enable Search by Caetgory** field: Choose "Yes" to display Category search on the frontend. At that time, **Maximal Depth** will be shown in the backend.
  * In the **Maxiamal Depth** field: The entered number represents the level of displayed Category in the search box.

.. image:: https://i.imgur.com/d12rg6f.png

Open **Search Suggestion** section and do the following:

.. image:: https://i.imgur.com/ybbfr1w.png

* In the **Enable Search Suggestion** field: Choose "Yes" to allow products displaying when customers click on the search box.
* In the **Sort By** field:
  * Only display this field if `Enable Search Suggestion = Yes`
  * There're 3 types to sort the products: New Product, Most View Products, and Bestsellers  

Algolia Search
*****

.. image:: https://i.imgur.com/dI0SmCY.png

Enable: Choose **Yes** to synchronize the Search product to Algolia with each store view when an event occurs like Reindex Search Data( Manually), Cron job, and After Product Save.

Insert the key just created above to enter values into these fields: Application ID, Search-Only API Key, Admin API key.

Index Name Prefix: Insert a name for synchronizing to Algolia.

.. image:: https://i.imgur.com/XghMBfb.png

The search product are now synchronized to Algolia.

.. image:: https://i.imgur.com/qPB2WUx.png

That's all about the user guide of Mageplaza Search extension for Magento 2. If you still have any question, please feel free to contact us.
