=============
User Guide
=============

`Magento 2 Zoho Integration`_ module is developed as a perfect intermediate tool that enables to connect third-party services via web API. This service is the advanced solution for integrating Customer Relationship Management (CRM) from Zoho System. By calling the APIs, Zoho Magento 2 extension allows synchronizing respectively all required Magento information to the data store of CRM System that is using on your store. Meanwhile, the transferred data includes both existing and new one and every operation of the synchronization is automatic once there is any event matching with the request. 

Magento 2 Zoho Integration is one of the cutting-edge tools by Mageplaza to help you modernize your management organization of the customer service. In this document, we will dig deeply into the guides how to transfer the data when integrating Zoho CRM system. 

First of all, please go to the backend of Integration module after purchasing. On the sidebar, click on `Integration` section, then you can see a list of configuration options: **Manage Apps**, **Manage Rules**, **Manage Logs**, **Settings**, and **Sync Manually**.

General Settings
--------------------

Under `Integration`, select `Settings` tab to set up the general before coming with the detailed configuration. 

.. image:: https://i.imgur.com/vRyAiTJ.gif

* On the left panel, expand `Mageplaza`, go to `General` sub-tab:

  * Open `Field` section, set the display value in case the field contains a null value. You can leave it empty or use the default value (0000).
  * Open `General Configuration`, request `The maximum number of record per cron job` without any limitation of that. Depending on your server, you feel free to offer the expectation number

  .. image:: https://i.imgur.com/Qp8hz1g.png

* Continue with `Setting` workplace, mouse down and hit the `ZohoCRM` sub-tab:
  * In the `Authentication` section, please tap on link **Get Zoho Authentication API Key** to take API from Zoho system (need to sign up/ sign in before accessing the API).
  * Move to `Identity Field`, enable to choose the data that must be checked if there is a new update of Lead and Contact with the comparison between Magento Field and ZohoCRM Field.

  .. image:: https://i.imgur.com/INXicsk.png 

Manage Apps
--------------

Under `Integration`, select `Manage Apps` tab.

.. image:: https://i.imgur.com/qvmDngh.gif

All existing apps are both shown on the grid through ID, Name, Type, Status, State, Created and Modified time, and Action (Edit/Delete).

Set a new app
^^^^^^^^^^^^^^^^^^

Magento 2 Integration allows building multiple apps by clicking on "Add new Apps" button.

* On the upper right hand, tap the drop-down arrow to choose **Zoho**- the app type as you need.

* Be navigated to **Zoho Information** page, do the following:
  * Enter `Name` for the new app
  * `Type` is blocked by the "Zoho" value that you have chosen before.
  * Insert `Authentication Token` you took from the website Zoho CRM System.

    .. Note:: Each authentication key is applied for only one time.

  * Set `Status` to "Enable" this means you allow synchronizing the data between Magento and Zoho CRM.

.. image:: https://i.imgur.com/uV9NcmD.gif

Edit App Information
^^^^^^^^^^^^^^^^^^

* On the grid management, under `Action`, tap **Select** link and go to `Edit` mode of which app you want to modify.
* You can change any information expecting from the app type.
* If the integration Zoho system into Magento store is successful, `State` is "Connected".

.. image:: https://i.imgur.com/JGgn0U3.gif
 
Manage Rules
---------------

Under `Integration`, select `Manage Rules` tab.

.. image:: https://i.imgur.com/YkySefC.gif

Store Admin is allowed to manage all created rules on the grid through ID, Name, Magento Entity, Entity Action, App Name, App Entity, App Action, Created, Status, and Action (Edit/Delete). 

Set a new rule
^^^^^^^^^^^^^^^

You can set unlimited rules from the backend. Depending on the apps are active (Enabled & Connected), a list of the apps will display when tapping the dropdown arrow on the upper-right corner of "Manage Rules" page.

* Choose the app you want to set the rule.
* Complete the rule information that is divided into two parts when a synchronization action occurs.
  * Magento Information:
  
    * Enter `Name` for that.
    * Choose one of `Entity` options including Customers, Invoices, Orders, Products, Shipments, and Subscribers.
    * Basing on the chosen entity, the corresponding `Action` options will be available to select.
  * App Information:  
    * App Name is already done and unchangeable.
    * Choose `App Entity`.
    * Basing on the chosen entity, the corresponding `App Action` options will be available to select.
* Set `Status` to "Enabled" for using.
* Then click on `Save and Continue Edit`.

.. image:: https://i.imgur.com/xcfJR8F.gif
    
* After saving, you need to continue setting mapping field for the automatic synchronizing.
* All data related to the entity will be listed there. When you tap on any field, **Mapping Field** popup box will appear to choose.

.. image:: https://i.imgur.com/VYWWwpg.gif

Edit Rule Information
^^^^^^^^^^^^^^^^^^^^^^^^^

* On the grid management, under `Action`, tap **Select** link and go to `Edit` mode of which rule you want to modify.
* It is possible to change Rule Name, Status and Mapping Fields.

.. image:: https://i.imgur.com/ncgVMO7.gif


Manage Logs
---------------

Integration Logs is the place to list all events for store owner's management. Especially, the admin must attend to "Status" and "Message" columns that notify the situation of each activity. Status of each event contains:

* **Pending** means the request is waiting to be accepted.
* **Processing** means the data is being synchronized from Magento to Zoho CRM System.
* **Completed** means the synchronizing is successful. 
* **Error** means there is any interrupt when auto-matching the data.

.. image:: https://i.imgur.com/mdbhw7H.gif

.. Sync Manually
.. ---------------


If there is any need of other CRM integrations, you can refer the following list:

* `Magento 2 Salesforce Integration`_
* `Magento 2 Quickbooks Integration`_
* `Magento 2 Vtiger CRM Integration`_
* `Magento 2 Odoo Integration`_


.. _Magento 2 Zoho Integration: https://www.mageplaza.com/magento-2-zoho-crm-integration-extension/

.. _Magento 2 Salesforce Integration: http://www.mageplaza.com/magento-2-salesforce-integration-extension/

.. _Magento 2 Quickbooks Integration: http://www.mageplaza.com/magento-2-quickbooks-integration-extension/

.. _Magento 2 Vtiger CRM Integration: http://www.mageplaza.com/magento-2-vtiger-integration-extension/

.. _Magento 2 Odoo Integration: http://www.mageplaza.com/magento-2-odoo-integration-extension/