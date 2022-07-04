# Product Feed
## Overview

If customers sell their products on a variety of channels such as Google Shopping, Ebay, Amazon, etc and these channels use the same database, then they can automatically update their items by importing the exported data files from the original channels. Thanks to this, store owners can save more time and manage their sales channels with ease. That's also an awesome feature from [Mageplaza Product Feed](https://www.mageplaza.com/magento-2-product-feed-extension/) extension.

## Download & Install
- [Mageplaza Product Feed](https://www.mageplaza.com/magento-2-product-feed-extension/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


## How to use

### Goole Shopping API:
- Register an account of Google Shopping API and go to this [link](https://www.google.com/retail/solutions/merchant-center/).
- After your account has been registered, you will see the value in the field **Merchant ID**. Save that **Merchant ID** value to connect with your website later. 

![](https://i.imgur.com/7O9A2AD.png)

- Go to [this link](https://console.cloud.google.com/apis/credentials?authuser=0&project) to get the information of **8Google Shopping API:** **Client ID** and **Client Secret** connect with your website. Click on **Create Credentials > OAuth client ID**.

![](https://i.imgur.com/Rfphasg.png)

- With the field **Application type**, you can choose **Web application**, enter the information like **Name**. Copy and paste the value of the field **Authorized Redirect URLs** of your website in the field **Authorized Redirect URLs** of **Google Shopping API**. Then click **Create** button to complete. 

![](https://i.imgur.com/hAG9uTB.png)

- Select **Ok** to complete creating **OAuth client ID**. Save the Client ID and Client Secret to connect with your website.

![](https://i.imgur.com/pnxxTQa.png)

## How to configure

From the Admin Panel, go to **Store > Settings > Configuration > Mageplaza Extensions > Product Feed > Configuration** 


![](https://i.imgur.com/7HpNwml.png)

### Configuration

From the Admin Panel, go to **Products > Product Feed > Configuration**, choose **General** section

![](https://i.imgur.com/QsikKMQ.png)

#### General

![](https://i.imgur.com/uJ9LBUu.png)

* **Enable**: Choose "Yes" to use this module
* **Categories Path for Product URLs**: Create the URL for the product. If select **Default**, the URl will be generated as the default Magento (Category with the smallest ID).
   * *Note*: Categories Path is only correct when setting `Use Categories Path for Product URLs = Yes`

![](https://i.imgur.com/j9r3GuW.png)

* **Enable Product Feed Report**: Select **Yes** to display the Product Feed Report on the Manage Feeds Grid.

#### Google Shopping API
- **Enable: Choose **Yes** to synchronize the value with Google Shopping API
- **Merchant ID, Client ID, Client Secret**: Enter the value of the fields you have already saved and set up here. 
- **Authorized Redirect URLs:** Copy and paste the value of this section in URLs of the **Authorized Redirect URLs of Google Shopping API. 
- Click **Get Access Token** button to check the connection with Google Shopping API. 

![](https://i.imgur.com/mI4y9Zo.png)

#### Email Alert

* **Enable**: Choose "Yes" to enable the email notification for store owners
* **Send to**:
    * Enter the email to send the notification
    * Allow entering multiple emails. These emails are separated by commas.
    
* **When**:
    * Choose the events that when it happens, the email notification will be sent
    * Be able to choose many events at once time
    
### Manage Feeds

#### Grid

* From the Admin Panel, go to Catalog > Product Feeds > Manage Feeds

![](https://i.imgur.com/axf2hPk.png)

* This is where all created feeds are displayed.
* Here admins can have basic information of the feed such as: ID, Name, Status, File Type, Execution Mode, Store, Action, Click, Impression, CTR,...
* Admins can select **Action** if they want to Delete, Generate, or Change Status Feed.
* Besides that, admins can also Filter, Export, Hide/Show the Columns
* *Note*: CTR (Click through rate)= (Click/ Impression) * 100%
  - *Click*: the number of clicks in the product link uploaded to the app or the feed file
  - *Impression*: the number of views of the product link uploaded to the app or the feed file

#### Product Feed Revenue Report

The Revenue Report is based on the statistic of the ordered products uploaded to the feed file or the app. The pie chart shown is the result of the Total Revenue field.

![](https://i.imgur.com/KS9cF4T.gif)

*Note*: Total Revenue and Refunded do not include the shipping fee.

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
* Choose the format to compress the file when downloading
* **Generate Config**: Choose the export type
    * **Generate Config = Manual**: Allow generating the file manually
    * **Generate Config = Cron**: Auto-generate the file
      * **Frequency = Daily**: Auto-generate the file daily
      * **Frequency = Weekly**: Auto-generate the file weekly
      * **Frequency = Monthly**: Auto-generate the file monthly
      * **Cron Run Time**: Setup the time to auto-generate the file at the time that you have setup. Please note that the time of Cron Job will be the timezone of UTC


![](https://i.imgur.com/ipzZygs.png)

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

![](https://i.imgur.com/qzKqMgV.gif)

* Here you can select the conditions for the feed. Only apply the rules for products meeting the conditions.

* **Maximum Product Displayed on Preview Product**: Enter the maximum number of products shown in the Preview Product. If left empty, the number of displayed products when clicking the Preview Products button will not be limited.

##### Step 5: Enter the Category Map for products. Admins can choose and classific according to the availabe suggestions. For the categories with the same level, it will get the classification type of the top-level category.

![](https://i.imgur.com/PHwQmfF.gif)

##### Step 6: Setup the method to send the exported file
      
* **Delivery Config**: Setup the method to send the exported file to the server
    * To send the exported file to the server, choose "Yes" in the `Delivery` field
    * Choose the method to send the file in the `Protocol` field: FTP or SFTP, HTTP Server, API, GraphQL.
      * For the FTP protocol, you can add the selection to use `Passive Mode` or not. We recommend that you should this mode to avoid  being blocked by firewalls/NATs/proxies from sending files to the server.
      * **HTTP Server**: Send to the HTTP server by sending POST request. For example: https://httpbin.org/post
      * **API / GraphQL**: Send the feed file to API, GraphQL by sending POST, GET,... requests. For example: http://mageplaza/rest/V1/mpProductfeed/feed/file/, http://mageplaza/graphql,...
      
    * Enter the host name in the `Host Name` field
    * Enter the host name in the `User Name` field
    * Enter the password to access the host in the `Password` field
    * **Private Key**: Click [...] and choose key file to connect with the server. You can skip choosing key file when your server can connect without key file. 
    * If you want to save the file, only enter the path in the `Directory Path` field. Note: You need to set the name the export file at the end of the path
    * **Request URL**: Show this field when selecting Protocol as HTTP Server, API, GraphQL. Enter URL to send POST, GET,...  request to HTTP Server, API; GraphQL.
    * **Headers**: Show this field when selecting Protocol as HTTP Server, API, GraphQL. Enter content to send POST, GET,...  request. For example: Content-Type: application/json 
    * To check whether it is connected to the host, press `Test Connection`

![](https://i.imgur.com/MK7NKN1.png)

* **Step 7**: Check the update history of the exported file. Admins can check the update history of the file in the `Logs` field.

![](https://i.imgur.com/Ab0jMGq.gif)

* **Step 8**: Synchronize product value with Google Shopping API

Choose the information of the fields in Magento appropriately to send data to Google Shopping API. 

<video autoplay muted loop playsinline width="100%" class="vautoplay">
<source src="https://www.mageplaza.com/media/extensions/product-feed/google-shopping-api.webm" type="video/webm">
     Product Feed
</video>

- **Google Shopping API Field**: Display the fields which are managed by Google Shopping API for this module based on the selected Magento fields. 
- **Magento Fields**:  
  -> Fill in the Magento fields to get the data corresponding to the fields of Google Shopping API. 
  -> If you leave this column blank or no value is existing, the Default value will be arquired and push to Google Shopping API. 
- **Internal Note**: Enter the description in the **Internal Note** section. This is only for admin to notice the information of the synchronization and is invaluable to data processing. 
- **Insert Variables**: Select the Magento Fields corresponding to the fields of Google Shopping API. 


### Logs

From the Admin Panel, go to **Products > Catalog > Product Feed > Logs**

This section will record the change of feeds such as status, type, notification, etc. When you click on any file, it will automatically open the file.

![](https://i.imgur.com/nzq45lj.gif)

#### Email notification about the status of the file

Click on the `View Logs`, it will redirect the email recipients to the Feed Logs page to view the logs details.

![](https://i.imgur.com/NgwNooY.png)


## How to Run Command to Generate Feed

To generate one or more feed quickly, you can run the following command line:

```
php bin/magento mp-productfeed:generate {id}
```
- In which: `{id}` is the Feed ID. If you do not fill Feed ID, all the feed will be generated. 

- Exmaple: Generate some feed that you want, running the command:

```
php bin/magento mp-productfeed:generate 1 3 4
```



``Note``:
* After installing the extension, you need to download Liquid by running the command `composer require liquid/liquid` or need to install the library
* When the extension is enabled, Manage Feed and Logs will be displayed
* To reload data of Report, you need to run the command: `php bin/magento mp-productfeed:report` 


## FAQs

- Question: How to solve the issue of **Product URL does not show correctly**?

- Answer: Find the solution [here](https://www.mageplaza.com/faqs/product-url-does-not-show-correctly.html). 


## Must-have extensions for your Magento stores

- Increase website traffic: [SEO](https://www.mageplaza.com/magento-2-seo-extension/)
- [Build leads](https://www.mageplaza.com/magento-2-better-popup/)
- Increase conversion rates: [One Step Checkout](https://www.mageplaza.com/magento-2-one-step-checkout-extension/), [Layered Navigation](https://www.mageplaza.com/magento-2-layered-navigation-extension/)
- We believe that you can sell more: [Gift Cards](https://www.mageplaza.com/magento-2-gift-card-extension/), [Auto Related Products](https://www.mageplaza.com/magento-2-automatic-related-products/), [Frequently Bought Together](https://www.mageplaza.com/magento-2-frequently-bought-together/), [Free shipping bar](https://www.mageplaza.com/magento-2-free-shipping-bar/), [Daily Deal](https://www.mageplaza.com/magento-2-daily-deal-extension/) , [Product Feed](https://www.mageplaza.com/magento-2-product-feed-extension/)
- Keep customers return: [Reward Points](https://www.mageplaza.com/magento-2-reward-points-extension/)
- Let your customer [become raving fans](https://www.mageplaza.com/magento-2-affiliate-extension/)
- Optimize your stores: [PDF Invoice](https://www.mageplaza.com/magento-2-pdf-invoice-extension/), [Custom Order Number](https://www.mageplaza.com/magento-2-custom-order-number/), [Stop return items issue](https://www.mageplaza.com/magento-2-size-chart/)
