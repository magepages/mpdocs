# Product Feed
## Overview

If customers sell their products on a variety of channels such as Google Shopping, Ebay, Amazon, etc and these channels use the same database, then they can automatically update their items by importing the exported data files from the original channels. Thanks to this, store owners can save more time and manage their sales channels with ease. That's also an awesome feature from [Mageplaza Product Feed extension](https://www.mageplaza.com/magento-2-product-feed/).

## Download & Install
- [Mageplaza Product Feed](https://www.mageplaza.com/magento-2-product-feed/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


## How to configure

From the Admin Panel, go to **Store > Settings > Configuration > Mageplaza Extensions > Product Feed > Configuration** 


!

### Configuration

From the Admin Panel, go to **Products > Product Feed > Configuration**, choose **General** section

!

#### General

* **Enable**: Choose "Yes" to use this module

#### Email Notification

* **Enable**: Choose "Yes" to enable the email notification for store owners
* **Send To**:
    * Enter the email to send the notification
    * Allow entering multiple emails. These emails are separated by commas.
    
* **Events**:
    * Choose the events that when it happens, the email notification will be sent
    * Be able to choose many events at once time
    
### Manage Feeds

#### How to create New Feed
* **Step 1**: Enter full information of General field
* **Step 2**: Choose Template type
* **Step 3**: Enter full information of Google Analytics
* **Step 4**: Choose the condition to export the file
* **Step 5**: Enter the Category Map for products
* **Step 6**: Setup the method to send the exported file
* **Step 7**: Check the update history of the exported file

##### Step 1: Enter full information of General field  

* From the Admin Panel, go to Products > Catalog > Product Feed > Manage Feeds
* In the right corner, choose `Add New Feed` button
* Enter the display name in the Grid Feed for the export type
* To cauto-update the products when running cron, choose Enable in the `Status` field
* Choose the store to get that store's product and generate the file
* Enter the export file name to send to the server

##### Step 2: Choose Template type

* Select the file format. There're 3 file formats: TXT, CSV, and XML
* Select the template format to export the file. There're 6 template formats. They are: Google Shopping XML, Google Shopping Review XML, Amazon Inventory XML, Amazone Marketplace XML, Facebook CSV, Ebay CSV
* Click on the `Load Template` button to display the template content
* For the template format is XML:
    * **Template Content**:The template content is displayed in this field. Admins can edit the template content here.
    * Add the values to the template by clicking on the `Insert Variable` button
    
* For the template format is CSV
    * Choose the character separating the fields when exporting the file in the `Field Separate` field
    * Select the character surrounding the fields when exporting the file in the `Field Around` field
    * To get the header field when exporting the file, choose "Yes" in the `Include Field Header` field
    * Allow adding any value you want into the `Fields Map` field. Please note that: The added values must be standard of Google or Facebook or Ebay, Amazon.
    
##### Step 3:  Enter full information of Google Analytics. These values will be added into URL of the product to know what the search engine is, what analytic keyword is, etc.

* Enter the value for the `Campaign Source` field
* Enter the value for the `Campaign Medium` field
* Enter the value for the `Campaign Name` field
* Enter the value for the `Campaign Term` field
* Enter the value for the `Campaign Content` field

##### Step 4: Choose the condition to export the file. All products meeting the conditions will be exported.
##### Step 5: Enter the Category Map for products. Admins can choose and classific according to the availabe suggestions. For the categories with the same level, it will get the classification type of the top-level category.

##### Step 6: Setup the method to send the exported file

* **Generate Config**: Choose the export type
    * **Generate Config = Manual**: Allow generating the file manually
    * **Generate Config = Cron**: Auto-generate the file
      * **Frequency = Daily**: Auto-generate the file daily
      * **Frequency = Weekly**: Auto-generate the file weekly
      * **Frequency = Monthly**: Auto-generate the file monthly
      * **Cron Run Time**: Setup the time to auto-generate the file at the time that you have setup. Please note that the time of Cron Job will be the timezone of UTC
      
* **Delivery Config**: Setup the method to send the exported file to the server
    * To send the exported file to the server, choose "Yes" in the `Delivery` field
    * Choose the method to send the file in the `Protocol` field: FTP or SFTP
      * For the FTP protocol, you can add the selection to use `Passive Mode` or not. We recommend that you should this mode to avoid  being blocked by firewalls/NATs/proxies from sending files to the server.
      
    * Enter the host name in the `Host Name` field
    * Enter the host name in the `User Name` field
    * Enter the password to access the host in the `Password` field
    * If you want to save the file, only enter the path in the `Directory Path` field. Note: You need to set the name the export file at the end of the path
    * To check whether it is connected to the host, press `Test Connection`


* **Step 7**: Check the update history of the exported file. Admins can check the update history of the file in the `history` field.


### Logs

From the Admin Panel, go to **Products > Catalog > Product Feed > Logs**

This section will record the change of feeds such as status, type, notification, etc. When you click on any file, it will automatically open the file.

!

#### Email notification about the status of the file

Click on the `View Logs`, it will redirect the email recipients to the Feed Logs page to view the logs details.

!

``Note``:
* After installing the extension, you need to download Liquid by running the command `bin/magento composer require liquid/liquid`





