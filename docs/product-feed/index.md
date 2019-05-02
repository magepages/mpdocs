# Product Feed
## Overview

If customers sell their products on a variety of channels such as Google Shopping, Ebay, Amazon, etc and these channels use the same database, then they can automatically update their items by importing the exported data files from the original channels. Thanks to this, store owners can save more time and manage their sales channels with ease. That's also an awesome feature from [Mageplaza Product Feed extension](https://www.mageplaza.com/magento-2-product-feed-extension/).

## Download & Install
- [Mageplaza Product Feed](https://www.mageplaza.com/magento-2-product-feed-extension/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


## How to configure

From the Admin Panel, go to **Store > Settings > Configuration > Mageplaza Extensions > Product Feed > Configuration** 


![](https://i.imgur.com/7HpNwml.png)

### Configuration

From the Admin Panel, go to **Products > Product Feed > Configuration**, choose **General** section

![](https://i.imgur.com/ur1t65k.png)

#### General

* **Enable**: Choose "Yes" to use this module

#### Email Alert

* **Enable**: Choose "Yes" to enable the email notification for store owners
* **Send to**:
    * Enter the email to send the notification
    * Allow entering multiple emails. These emails are separated by commas.
    
* **When**:
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
* **Generate Config**: Choose the export type
    * **Generate Config = Manual**: Allow generating the file manually
    * **Generate Config = Cron**: Auto-generate the file
      * **Frequency = Daily**: Auto-generate the file daily
      * **Frequency = Weekly**: Auto-generate the file weekly
      * **Frequency = Monthly**: Auto-generate the file monthly
      * **Cron Run Time**: Setup the time to auto-generate the file at the time that you have setup. Please note that the time of Cron Job will be the timezone of UTC


![](https://i.imgur.com/ZklAABr.gif)

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
    
    ![](https://i.imgur.com/2IumDRX.gif)
    
##### Step 3:  Enter full information of Google Analytics. These values will be added into URL of the product to know what the search engine is, what analytic keyword is, etc.

* Enter the value for the `Campaign Source` field
* Enter the value for the `Campaign Medium` field
* Enter the value for the `Campaign Name` field
* Enter the value for the `Campaign Term` field
* Enter the value for the `Campaign Content` field

![](https://i.imgur.com/58M0EQU.gif)

##### Step 4: Choose the condition to export the file. All products meeting the conditions will be exported.

![](https://i.imgur.com/3ADjKhR.gif)

##### Step 5: Enter the Category Map for products. Admins can choose and classific according to the availabe suggestions. For the categories with the same level, it will get the classification type of the top-level category.

![](https://i.imgur.com/LH6uzeK.gif)

##### Step 6: Setup the method to send the exported file
      
* **Delivery Config**: Setup the method to send the exported file to the server
    * To send the exported file to the server, choose "Yes" in the `Delivery` field
    * Choose the method to send the file in the `Protocol` field: FTP or SFTP
      * For the FTP protocol, you can add the selection to use `Passive Mode` or not. We recommend that you should this mode to avoid  being blocked by firewalls/NATs/proxies from sending files to the server.
      
    * Enter the host name in the `Host Name` field
    * Enter the host name in the `User Name` field
    * Enter the password to access the host in the `Password` field
    * If you want to save the file, only enter the path in the `Directory Path` field. Note: You need to set the name the export file at the end of the path
    * To check whether it is connected to the host, press `Test Connection`

![](https://i.imgur.com/RCGiNcQ.gif)

* **Step 7**: Check the update history of the exported file. Admins can check the update history of the file in the `Logs` field.

![](https://i.imgur.com/Ab0jMGq.gif)

### Logs

From the Admin Panel, go to **Products > Catalog > Product Feed > Logs**

This section will record the change of feeds such as status, type, notification, etc. When you click on any file, it will automatically open the file.

![](https://i.imgur.com/nzq45lj.gif)

#### Email notification about the status of the file

Click on the `View Logs`, it will redirect the email recipients to the Feed Logs page to view the logs details.

![](https://i.imgur.com/NgwNooY.png)

``Note``:
* After installing the extension, you need to download Liquid by running the command `bin/magento composer require liquid/liquid`or need to install the library
* When the extension is enabled, Manage Feed and Logs will be displayed


### The guide to download the library

Create the folder: lib/internal/Mageplaza
Go to the following path to [download the library of Product Feed here](https://gitlab.com/mageplaza/module-product-feed/tree/library)
Extract module-product-feed-library.zip into lib / internal / Mageplaza, rename the extracted file to ProductFeed.

![](https://i.imgur.com/X7fzai2.png)

Run the following command to install:

`php bin/magento setup:upgrade`


## FAQs

- Question: How to solve the issue of **Product URL does not show correctly**?

- Answer: Find the solution [here](https://www.mageplaza.com/kb/product-url-does-not-show-correctly.html). 


## Must-have extensions for your Magento stores

- Increase website traffic: [SEO](https://www.mageplaza.com/magento-2-seo-extension/)
- [Build leads](https://www.mageplaza.com/magento-2-better-popup/)
- Increase conversion rates: [One Step Checkout](https://www.mageplaza.com/magento-2-one-step-checkout-extension/), [Layered Navigation](https://www.mageplaza.com/magento-2-layered-navigation-extension/)
- We believe that you can sell more: [Gift Cards](https://www.mageplaza.com/magento-2-gift-card-extension/), [Auto Related Products](https://www.mageplaza.com/magento-2-automatic-related-products/), [Frequently Bought Together](https://www.mageplaza.com/magento-2-frequently-bought-together/), [Free shipping bar](https://www.mageplaza.com/magento-2-free-shipping-bar/), [Daily Deal](https://www.mageplaza.com/magento-2-daily-deal-extension/) , [Product Feed](https://www.mageplaza.com/magento-2-product-feed-extension/)
- Keep customers return: [Reward Points](https://www.mageplaza.com/magento-2-reward-points-extension/)
- Let your customer [become raving fans](https://www.mageplaza.com/magento-2-affiliate-extension/)
- Optimize your stores: [PDF Invoice](https://www.mageplaza.com/magento-2-pdf-invoice-extension/), [Custom Order Number](https://www.mageplaza.com/magento-2-custom-order-number/), [Stop return items issue](https://www.mageplaza.com/magento-2-size-chart/)
