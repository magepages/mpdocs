# Delivery Time
## Overview

[Delivery Time](https://www.mageplaza.com/magento-2-delivery-time-extension) is an extension that supports for the checkout and delivery. With many outstanding features as setting the time, date for the delivery, and allowing leaving the comment when delivering, customers can easily setup the desired time which they want to receive the products. Also, thanks to these features, customers can know the day that the store doesn't work and deliver the products. This extension will definitely bring many interesting benefits for store owners.

Moreover, Delivery Time extension is totally compatible with our One Step Checkout extension.

## Download & Install
- [Download Mageplaza Delivery Time](https://www.mageplaza.com/magento-2-delivery-time-extension) 
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)

## I. How to use

After adding the right products in the cart, the customers will be navigated to the checkout page. Delivery Time will be displayed here:

![](https://i.imgur.com/qrpWYAY.png)

The customers can choose the day, time to receive the products and the related information to store owners as well as the shippers.

## II. How to configure

Login to Magento Admin, go to **Stores > Settings > Configuration > Mageplaza Extensions > Delivery Time > General Configuration**

![](https://i.imgur.com/s4GdkLc.png)

* **Enable**: Set “Yes” to allow customers to note the time when they can receive the shipping items
* **Enable Delivery Time**: Choose "Yes" so that customers can choose the time frame that they want to get the products. Admins need to set the time frame in the `Delivery Time` field.
* **Enable House Security Code**: Choose “Yes” if you want to display this field.
* **Enable Delivery Comment**: Choose Yes to display the comment field on the frontend. Also, customers can leave the note about their orders
* **Date Format**: Choose an appropriate format for the date and time. We offer 12 availble formats.
* **In the Days Off field**: Choose day(s) not in your official working time.
* **Date Off**: Choose any date that admins don't want to deliver.
* **Delivery Time**: Set the time frame to delivery during the day.

## III. GraphQL

### 3.1 How to install

Run the following command in Magento 2 root folder:

```
composer require mageplaza/module-delivery-time-graphql
php bin/magento setup:upgrade
php bin/magento setup:static-content:deploy
```

### 3.2 How to use

To start working with GraphQL in Magento, you need the following:
- Use Magento 2.3.x. Returns site to developer mode
- Install [chrome extension](https://chrome.google.com/webstore/detail/chromeiql/fkkiamalmpiidkljmicmjfbieiclmeij?hl=en) (currently does not support other browsers)
- Set **GraphQL endpoint** as `http://<magento2-3-server>/graphql` in url box, click **Set endpoint**. (e.g. http://develop.mageplaza.com/graphql/ce232/graphql)
- View  Mageplaza supported query <a href='https://documenter.getpostman.com/view/10589000/SzYXWeR9?version=latest' target='_blank' rel='nofollow'>here</a>

