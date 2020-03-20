# Product Alerts

## Overview

These days, your customers may too busy to drop in your stores but they still want to update their interested products. Thanks to [Mageplaza Product Alerts extension](https://www.mageplaza.com/magento-2-product-alerts/), your customers can subscribe to get notification for out-of-stock products or price change. The notification emails of restock items or better prices will be sent to related customers. By this extension, online stores save a lot of time and effort for advertising since they can keep in touch with their potential customers, hence helps boost sales and profit significantly.

## Download & Install

- [Mageplaza Product Alerts](https://www.mageplaza.com/magento-2-product-alerts/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


## How to configure
 
### I. Configuration

Login to the **Magento Admin**, choose `Store > Configuration > Mageplaza > Product Alerts`


![](https://i.imgur.com/cnJ0HeN.png)


#### 1. General


![](https://i.imgur.com/OF7ugaP.png)


- **Enable**: Choose `Yes` to activate the module

- **Custom CSS**: Allow changing CSS. This field is applied to Product List and Product View page. For example: `.action.primary { background: #f311cd; }, .product.alert { background: pink`,...

- **Cron Schedule**: Insert the value to run cron which decides email sending frequency. With default cron will run every 1 hour. You can refer this [link](https://www.mageplaza.com/faqs/how-configure-cronjob.html) for detailed instruction.

For example: 
  - Insert  `*****` means that sending email of price change or restock notifications **each minute**
  - `20 */3 * * *` means that sending email at **minute 20th after every 3 hours**
  - **Run Daily** is `00***` means that cron will run at **00:00 every day**
  - **Run Weekly** is `00**7` means that email sent at **00:00 every Sunday**. If insert `00**1`, emails are sent at **00:00 every Monday**
  - **Run Monthly** is `001**` means that emails sent at **00:00 on 1st January 2019** 
  
`Note`: When entering values, between two values must be a space so that cron can be run. For example: `* * * * *`


#### 2. Alert for Price Changed Product


![](https://i.imgur.com/hPJ41E6.png)


- **Enable**: 
  - Choose `Yes` to allow notification email of price change of subscribed products. Install [SMTP](https://www.mageplaza.com/magento-2-smtp/) to avoid email to spam box.

  - When admins enable Price change alert, the link `Notify me when the price drops` appears in each product page
  
  - When customers click to that link, a popup displayed allows customers subscribe for notification of price change. All subscribers will get notification emails whenever their favored items are offered at a better price. 
  

![](https://i.imgur.com/SOpO6bW.png)


- **Apply for Customer Groups**: You can choose one or more customer groups to send emails.

- **Email Sender**: Select the store representative that you want to show in the notification emails. Here are the options: 


![](https://i.imgur.com/SpLRPPZ.png)


- **Email Template**: Access to `Marketing > Email Templates > Add New Template` to create Email Templates. Please choose the email template that you want to send for price change of products.

- **Text for subscribed customers**: This message will be displayed when customers have subscribed successfully. You can insert the text here, otherwise, the default message is: `Congratulations! You will receive a notification email when this product has just changed the price`


![](https://i.imgur.com/cehplY2.png)


##### 2.1 Popup configuration

![](https://i.imgur.com/IEUlKXj.png)


- **Popup Heading**: Add the Title for Popup. Allow showing popup when customers click to `Notify me when the price drops` and only show popup with not-log-in customers. The default heading is: `Stay tuned for any updates on this product's price!`

- **Popup Description**: Insert the description for your Popup. The default description is: `Subscribe Price-Change Alerts now! Register your email address to be the first to know when our product has any changes in price. You are always updated to get product pricing goodness!`

- **Email Placeholder**: Insert the Placeholder message for notifying customers that this is the field to add email addresses receiving notification. For example: `Your email address`

- **Button text**: Add the button name for popup. When customers insert the email correctly, click to this button to subscribe notification of price change. If you leave it blank, the default button is: `Notify me!`

- **Footer Content**: Insert the note or warning to your customers, which is displayed at the footer of Popup. If it is left blank, the default content is: `Kindly notice that the price notification email will be delivered only one time, and your email address will not be shared or published with anyone else.`






#### 3. Alert of Out Of Stock Product


![](https://i.imgur.com/6KNpbc4.png)


- **Enable**: 

  - Choose `Yes` to allow notification emails of restock of subscribed products. Install [SMTP](https://www.mageplaza.com/magento-2-smtp/) to avoid email to spam box.

  - When admin enable Out of stock alert, the link `Notify me when this product is in stock` appears in each product page
  
  - When customers click to that link, a popup displayed allows customers subscribe for notification of back-in-stock products. All subscribers will get notification emails whenever their favored items are restocked. 
  

![](https://i.imgur.com/O22s1hk.png)


- **Apply for Customer Groups**: You can choose one or more customer groups to send emails.

- **Email Sender**: Select the store representative that you want to show in the notification emails. Here are the options: 

![](https://i.imgur.com/SpLRPPZ.png)


- **Email Template**: Go to `Marketing > Email Templates > Add New Template` to create Email template. Please choose the email template that you want to send to your customers when their favorite items are restocked.

- **Show on Product Listing Page**: Select `Yes` to show the Button text field

  - **Button text**:  Name the Button to be shown at Product Listing Page. When customers click on this button, they can register to get notification emails of restock items. If you leave it empty, it will be `Notify me` as default.
  
  
  ![](https://i.imgur.com/0Q5AZ6J.png)
  

- **Text for subscribed customers**: Insert the message you want to send to customers. This text is displayed after subscribing successfully, so customers can subscribe only once. For example: `Congratulations! You will receive a notification email when this product has just come back to stock.`


![](https://i.imgur.com/4E4Yx2S.png)


##### 3.1. Popup Configuration


![](https://i.imgur.com/nTVzEBj.png)


- **Popup Heading**: 

  - Add the Title for Popup. Allow showing Popup when customers click to `Notify me!` and only show Popup with not-log-in customers (`Notify me!` button is the name set for Button text).
  
  - If you leave it blank, the default message is: `Grab your chance when this product back in stock!`

- **Popup Description**: Insert the description for your Popup. If you leave it empty, the default description is: `Subscribe Back-In-Stock Alerts now! Register your email address to be the first to know when our product comes back. Do not miss your chance!`

- **Email Placeholder**: Insert the Placeholder message for notifying customers that this is the field to add email addresses receiving notification. The default text if you leave this field blank is: `Your email address`

- **Button text**: Add the button name for popup. When customers insert the email correctly, click to this button to subscribe notification of restock products. If you leave it blank, the default button is: `Notify me!`

- **Footer Content**: Insert the note or warning to your customers, which is displayed at the footer of Popup. If it is left blank, the default content is: `Kindly notice that the back-in-stock email will be delivered only one time, and your email address will not be shared or published with anyone else.`


### II. Out of Stock Notification

Login to the **Magento Admin**, choose `Catalog > Product Alerts > Out of Stock Notification`


![](https://i.imgur.com/TubHdLc.png)


#### 1. Subscribers

- **New subscription**


![](https://i.imgur.com/7YAKVlW.png)


- **Edit subscription**


![](https://i.imgur.com/qnfFnJc.png)


- **Product SKU**: Insert the SKUs for products that customers want to be notified when they are out of stock and restocked as well. This is a required field.
- **Product Name**: This field allows showing the product name after customers subscribe the email notifications
- **Customer Email**: Insert the customer emails to get notification when products are in stock. This is a required field.
- **Customer Name**: This field allows showing the customers' name after they subscribe the email notifications, which are based on their email addresses. For customers who have not subscribed accounts on your site, they will be named as `Guest` 
- **Store View**: Select the store views whose products can be subscribed for out of stock notification. 
- **Status**: Show the product status after subscription. Status will be change along with the change of product SKU, Product name and Customer email.
- **Created At**: Show the time of subscription only after subscribing.
- **Last Send Date**: Show the last date of subscription

`Note`: When you click to `Save` or `Save and continue edit`, the system will send email to the customers who have subscribed notification. If you click `Sent` or `Resent`, the system will send emails to customers notifying of back in stock products. 


#### 2. Most Requested Products

##### 2.1. Most Requested Products

This part reports the most wanted products based on the data of customers subscription of restock items, which includes: Product name, Product SKU, Number of Requests, etc. The subscribed products which are canceled will not be reported here. 


![](https://i.imgur.com/J2rKzrY.png)


##### 2.2. Report 

Basing on the above data, this module enables generating the chart of most requested products. The horizontal axis is Product SKU whereas the vertical axis is Number of Requests. 


![](https://i.imgur.com/BjWGsr7.png)


### III. Product Price Alerts

Login to the **Magento Admin**, choose `Catalog > Product Alerts > Product Price Alerts`.


![](https://i.imgur.com/KrtjWtN.png)


#### 1. Subscribers

- **New subcription**


![](https://i.imgur.com/QbhsPwv.png)


- **Edit subcription**


![](https://i.imgur.com/YZbbSzZ.png)


- **Product SKU**: Insert the SKUs for products that customers want to be notified when they have better prices. This is a required field.
- **Product Name**: This field allows showing the product name after customers subscribe the email notifications
- **Customer Email**: Insert the customer emails to get notification when product prices are better. This is a required field.
- **Customer Name**: This field allows showing the customers' name after they subscribe the email notifications, which are based on their email addresses. For customers who have not subscribed accounts on your site, they will be named as `Guest` 
- **Store View**: Select the store views whose products can be subscribed of price change notification. 
- **Status**: Show the product status after subscription. Status will be change along with the change of product SKU, Product name and Customer email.
- **Created At**: Show the time of subscription only after subscribing.
- **Last Send Date**: Show the last date of subscription

`Note`: When you click to `save` or `Save and continue edit`, the system will send email to the customers who have subscribed notification. If you click `Sent` or `Resent`, the system wil send emails to customers notifying of back in stock products. 



#### 2. Most Requested Products

##### 2.1. Most Requested Products

This part reports the most wanted products based on the data of customers subscription of better price items, which includes: Product name, Product SKU, Number of Requests, etc. The subscribed products which are canceled will not be reported here. 


![](https://i.imgur.com/b4kNnuE.png)


##### 2.2. Report 

Using the above data, this module enables generating the chart of most requested products for better prices. The horizontal axis is Product SKU whereas the vertical axis is Number of Requests. 


![](https://i.imgur.com/BjWGsr7.png)


### IV. Edit product

Login to the **Magento Admin**, choose `Catalog > Products`.

This part records the subscribers' information ( both for out-of-stock products and better price products notifications, which includes: Customer name, Customer Email, Subscribe Date, Last Sent, Send Count.


![](https://i.imgur.com/jRbKxl5.png)

![](https://i.imgur.com/feY2bqg.png)


- **Stock Status (Magento default)**: Select the stock status including **In Stock** and **Out of Stock**. 

- **Back in Stock Notification**: Turn on this field to activate Stock Notification function.

  - Choose `Enable`, then the link `Notify me when this product is in stock` will be displayed on product page. This configuration applies for each product.
  - Customers can click to this link to subscribe for notification of back-in-stock products
  
- **Price Alert**: Turn on this field to activate Price Alert function.

  - Choose `Enable`, then the link `Notify me when the price drops` will be displayed on product page. This configuration applies for each product.
  - Customers can click to this link to subscribe for notification of price change products


  
### V. Email Notifications

#### 1. Price Change


**Notification of Successful subscription for price change** 


![](https://i.imgur.com/5Skufem.png)

**Price change notification**


![](https://i.imgur.com/kdZYXOK.png)


#### 2. Out of Stock


**Notification of Successful subscription for out of stock** 


![](https://i.imgur.com/3bss4KJ.png)


**Back in Stock Notification**


![](https://i.imgur.com/7vZ9Up1.png)


`Note`: Click `View Your List` button, visitors will be redirected to `My product alerts` where all the subscribed products of them are listed.  

### VI. Compatible with Reports extension 

Products Alert extension is fully compatible with [Mageplaza Reports extension](https://www.mageplaza.com/magento-2-reports-extension/). This allows admin to generate Reports of **Recent request stock available, Recent request price change, Most request price change and Most request stock available**. Click to **View Details** will redirect to **Grid** or **Most Requested Product** 

![](https://i.imgur.com/mjzaYvG.png)





## Frontend

At **My product alert**, customers can view their subscribed products of out-of-stock and price change notifications.


![](https://i.imgur.com/MES9qbJ.png)



## Note

- If you want to uninstall the extension, please use the composer to run the command: `bin/magento module:uninstall Mageplaza_ProductAlerts`

- In case you have deleted the extension manually, you need to delete the `mp_productalerts_price_alert` attribute and `mp_productalerts_stock_notify` as well in the data base or at backend 

  - **Method 1 Backend**: From the **Admin Panel**, go to `Stores > Attributes > Product`. At column **Attribute Code**, look for attribute `mp_productalerts_price_alert` and `mp_productalerts_stock_notify`, click to them and delete
  
![](https://i.imgur.com/IGz10AH.png)
  
  - **Method 2 Data base**: Navigate to **eav_attribute** table. At column **Attribute_code**, look for attribute `mp_productalerts_price_alert` and `mp_productalerts_stock_notify`, click to them and delete




![](https://i.imgur.com/8Wb93D4.png)

## API

Mageplaza's Product Alerts extension allows using the **Rest API** to view information about subcribers and requested products. In addition, the extension also supports direct subscriptions through API requests.

Details can be viewed [here](https://documenter.getpostman.com/view/10589000/SzRuXBU4?version=latest).

Instructions for creating Integration tokens [here](https://devdocs.magento.com/guides/v2.3/get-started/authentication/gs-authentication-token.html).

## GraphQL

Run the following command in Magento 2 root folder:

```
composer require mageplaza / module-product-alerts-graphql
php bin / magento setup: upgrade
php bin / magento setup: static-content: deploy
```
To start working with **Product Alerts GraphQL** in Magento, you need to:

- Use Magento 2.3.x. Return your site to developer mode

- Install [chrome extension](https://chrome.google.com/webstore/detail/chromeiql/fkkiamalmpiidkljmicmjfbieiclmeij?hl=en) (currently does not support other browsers)

- Set **GraphQL endpoint** as `http://<magento2-3-server>/graphql` in url box, click **Set endpoint**. (e.g. http://develop.mageplaza.com/graphql/ce232/graphql)

- The queries Mageplaza supports can be viewed [here](https://documenter.getpostman.com/view/10589000/SzS4RT6V?version=latest).

