# Product Alerts

## Overview

These days, your customers may too busy to drop in your stores but they still want to update their interested products. With Product Alerts-new extension from Mageplaza, your customers can register to get notification for out-of-stock-products or price change. The notification emails will be sent to related customers of restock items or better prices. By this extension, online stores can save a lot of time and effort for advertising since they keep in touch with their potential customers, hence helps boost sales and profit significantly.

## Download & Install

- [Mageplaza Product Alerts]()
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)

## How to configure
 
### I. Configuration

Login to the **Magento Admin**, choose `Store > Configuration > Mageplaza > Product Alerts`

![Imgur](https://i.imgur.com/cnJ0HeN.png)

#### 1. General

![Imgur](https://i.imgur.com/Plytmdc.png)

- **Enable**: Choose `Yes` to activate the module
- **Custom CSS**: Allow changing CSS. This field is applied to Product List and Product View page

#### 2. Alert When Product Price Change

![Imgur](https://i.imgur.com/WvnLRT1.png)

- **Enable**: Choose `Yes` to allow notification email of price change of subscribed products. Install [SMTP](https://www.mageplaza.com/magento-2-smtp/) to avoid email to spam box.

- **Apply for Customer Groups**: YOu can choose one or more customer groups to send emails.

- **Email Sender**: Select the store representative that you want to show in the notification emails. Here are the options: 

![Imgur](https://i.imgur.com/SpLRPPZ.png)

- **Email Template**: Access to `Marketing > Email Templates > Add New Template` to create Email Templates. Please choose the email template that you want to send for price change of products.

- **Text for subscribed customers**: This text is displayed after subscribing successfully, so customers can subscribe only once

##### 2.1 Popup configuration

- **Popup Heading**: Add the Title for Popup. Allow showing popup when customers click to `Notify me when the price drops` and only show popup with not-log-in customers.

- **Popup Description**: Insert the description for your Popup

- **Email Placeholder**: Insert the email for notification of price change

- **Add me to email list label**: Enable this field to allow checkbox for customers to add their emails to the store mailing list

- **Footer Content**: Insert the note or warning to your customers, which is displayed at the footer of Popup

#### 3. Alert When Product Out Of Stock

![Imgur](https://i.imgur.com/Wpfi2R0.png)

- **Enable**: Choose `Yes` to allow notification emails of restock of subscribed products. Install [SMTP](https://www.mageplaza.com/magento-2-smtp/) to avoid email to spam box.

- **Apply for Customer Groups**: YOu can choose one or more customer groups to send emails.

- **Email Sender**: Select the store representative that you want to show in the notification emails. Here are the options: 

![Imgur](https://i.imgur.com/KwZe4kV.png)

- **Email Template**: Go to `Marketing > Email Templates > Add New Template` to create Email template. Please choose the email template that you want to send to your customers when their favorite items are restocked.

- **Show on Product Listing Page**: Select `yes` to show the Button text field

  - **Button text**:  Name the Button to be shown at Product Listing Page. When customers click on this button, they can register to get notification emails of restock items. If you leave it empty, it will be `Notify me` as default.
  
  ![Imgur](https://i.imgur.com/FneDROS.png)

- **Text for subscribed customers**: This text is displayed after subscribing successfully, so customers can subscribe only once.

##### 3.1. Popup Configuration

- **Popup Heading**: Add the Title for Popup. Allow showing Popup when customers click to `Notify me when the price drops` and only show Popup with not-log-in customers.

- **Popup Description**: Insert the description for your Popup

- **Email Placeholder**: Insert the email for notification of price change

- **Add me to email list label**: Enable this field to allow checkbox for customers to add their emails to the store mailing list

- **Footer Content**: Insert the note or warning to your customers, which is displayed at the footer of Popup

#### 4. Product Alert Run Settings

![Imgur](https://i.imgur.com/frLLcKy.png)

- **Frequency**: Choose to send emails errors by Daily/Weekly/Monthly
- **Start Time**: Choose the starting time to send email errors
- **Error Email Recipient**: Insert the email which will receive the email errors
- **Error Email Sender**: Insert the email which represents your store to send the email errors
- **Error Email Template**: Choose Error Email Template to send the email errors

### II. Out of Stock Notification

Login to the **Magento Admin**, choose `Catalog > Product Alerts > Out of Stock Notification`.

![Imgur](https://i.imgur.com/TubHdLc.png)

#### 1. Subscribers

- **New subcription**

![Imgur](https://i.imgur.com/7YAKVlW.png)

- **Edit subcription**

![Imgur](https://i.imgur.com/Xkl2Ysg.png)

- **Product SKU**: Insert the SKUs for products that customers want to be notified when they are out of stock and restocked as well
- **Product Name**: This field allows showing the product name after customers subscribe the email notifications
- **Customer Email**: Insert the customer emails to get notification when products are in stock
- **Customer Name**: This field allows showing the customers' name after they subscribe the email notifications, which are based on their email addresses. For customers who have not subscribed accounts on your site, they will be named as `Guest` 
- **Store View**: Select the store views whose products can be subscribed for out of stock notification. 
- **Status**: Show the product status after subcription. 
- **Created At**: Show the time of subscription only after subscribing.
- **Last Send Date**: Show the last date of subscription

#### 2. Most Requested Products

##### 2.1. Most Requested Products

This part reports the most wanted products based on the data of customers subscription of restock items, which includes: Product name, Product SKU, Number of Requests, etc. 

![Imgur](https://i.imgur.com/J2rKzrY.png)

##### 2.2. Report 

Basing on the above data, this module enables generating the chart of most requested products. The horizontal axis is Product SKU whereas the vertical axis is Number of Requests. 

![Imgur](https://i.imgur.com/BjWGsr7.png)

### III. Product Price Alerts

Login to the **Magento Admin**, choose `Catalog > Product Alerts > Product Price Alerts`.

![Imgur](https://i.imgur.com/KrtjWtN.png)

#### 1. Subscribers

- **New subcription**

![Imgur](https://i.imgur.com/QbhsPwv.png)

- **Edit subcription**

![Imgur](https://i.imgur.com/YZbbSzZ.png)

- **Product SKU**: Insert the SKUs for products that customers want to be notified when they have better prices
- **Product Name**: This field allow showing the product name after customers subscribe the email notifications
- **Customer Email**: Insert the customer emails to get notification when product prices are better
- **Customer Name**: This field allows showing the customers' name after they subscribe the email notifications, which are based on their email addresses. For customers who have not subscribed accounts on your site, they will be named as `Guest` 
- **Store View**: Select the store views whose products can be subscribed of price change notification. 
- **Status**: Show the product status after subscription. 
- **Created At**: Show the time of subscription only after subscribing.
- **Last Send Date**: Show the last date of subscription

#### 2. Most Requested Products

##### 2.1. Most Requested Products

This part reports the most wanted products based on the data of customers subscription of better price items, which includes: Product name, Product SKU, Number of Requests, etc. 

![Imgur](https://i.imgur.com/b4kNnuE.png)

##### 2.2. Report 

Using the above data, this module enables generating the chart of most requested products for better prices. The horizontal axis is Product SKU whereas the vertical axis is Number of Requests. 

![Imgur](https://i.imgur.com/BjWGsr7.png)

### IV. Edit product

Login to the **Magento Admin**, choose `Catalog > Products`.

This part records the subscribers' information ( both for out-of-stock products and better price products notifications, which includes: Customer name, Customer Email, Subscribe Date, Last Sent, Send Count.

![Imgur](https://i.imgur.com/syfNX1u.png)

- **Stock Status (Magento default)**: Select the stock status including **In Stock** and **Out of Stock**. 
- **Back in Stock Notification**: 
  - `Enable` this field to show the link `Notify me when this product is in stock` on the product page
  -  Visitors can click to this link to subscribe to the products. When they are in stock, customers will get email notifications
  
- **Price Alert**: 
  - `Enable` this field to show the link `Notify me when the price drops` on the product page
  -  Visitors can click to this link to subscribe to the products. When they are at better prices, customers will get email notifications
  
  ![Imgur](https://i.imgur.com/EPwIPBW.png)
  
### V. Email Notifications

#### 1. Price Change


**Notification of Successful subscription for price change** 

![Imgur](https://i.imgur.com/jMdHMAy.png)


**Price change notification**

![Imgur](https://i.imgur.com/wNot0vg.png)


#### 2. Out of Stock


**Notification of Successful subscription for out of stock** 

![Imgur](https://i.imgur.com/ZloAPTG.png)


**Back in Stock Notification**

![Imgur](https://i.imgur.com/YNgbTfO.png)


## Frontend

At **My product alert**, customers can view their subscribed products of out-of-stock and price change notifications.

![Imgur](https://i.imgur.com/Ynl14cj.png)
