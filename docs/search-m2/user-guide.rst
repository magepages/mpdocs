Overview
#####

Search extension for Magento 2 was launched by Mageplaza that is the perfect solution that improves your searching system. Our Search extension brings the most benefits for your customer in terms of finding prefered product. The relevant searching results will be shown immediately after customer enter the first letter of product name. Thus, this extension will help to save your customer's time, make customer satisfaction and make your sale increase definitely.

Mageplaza Search for Magento 2 User Guide will provide the detailed instructions to know **How to use** on the frontend and **How to Configure** on the backend.


* This extension can be used in multiple stores.
* Stores will be defaulted under the Default Configuration.
* To change the configuration of each store, admins have to uncheck "Use Website" at the left of each Option.
* Extension’s configuration in each store will be applied to the selected store.
* Configuration of this store won’t take impact on the other store’s configuration.

How to use
*****

On the frontend, the search box will be shown on the upper-right corner 

.. image:: https://i.imgur.com/KJRjzEH.png

* Customers are able to enter the character of product name on this box to search their prefered product.
* Depends on the configuration in the backend, the search result will be shown product name, product small image, price and short description
* The quantity of search result will be set up in the backend.
* Customers will click on the result that they are finding, then redirect its product page.

How to configure
*****

After logging in to your Magento Admin, choose ``Mageplaza > Search > Configuration``

.. image:: https://i.imgur.com/tIZbYPc.png

Open **General Settings** section and do the following

.. image:: https://i.imgur.com/TmQayVy.png

* In **Enable** field: Select "Yes" to enable this module.
* In **Maximum Number of Search Results** field:

  * Enter the number of search result that you want to show in the search result grid.
  * If you leave it blank, the default is 10 results.

* In **Limit number of characters in description section** field:

  * Indicates the maximum character of a product's short description that display on Search Result pages.
  * After changing this field, remember to click ``Save COnfig``, ``Reindex Search Data`` to apply changes on the frontend. 

* In the **Information Display** field:
  
  * Option can be multiple chosen.
  * Chosen options will display on Search Result pages. 

* In the **Reindex Search Database** field, select one of the following
  
  * Cronjob: If your store has more than 3,000 SKUs, you should choose Cron job, it runs daily at 0AM your server time.
  * After Product Save: This option is a good choice for store has less than 3,000 products
  * Manually (used reindex button bellow): You have to click ``Reindex`` button everytime product's information changes.

* In **Search by category configuration** field: This field allows customer the ability to search by Product and Category's name 
  
  * In **Enable Search by Caetgory** field: Choose "Yes" to display Category search on the frontend. At that time, **Maximal Depth** will be shown in the backend.
  * In **Maxiamal Depth** field: The entered number represents the level of displayed Category in the search box.
 
.. image:: https://i.imgur.com/d12rg6f.png

That's all about the user guide of Mageplaza Search extension for Magento 2. If you still have any question, please feel free to contact us.



