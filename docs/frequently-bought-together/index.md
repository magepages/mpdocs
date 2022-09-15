# Frequently Bought Together

Mageplaza Frequently Bought Together extention will display native related products in the product page, and has the Add all items to cart feature that makes it easy for customers to add a list of items to their shopping cart. This extension suggests the right products which might attract buyers in further purchasing, or makes it easy for shoppers to find other products. It also dramatically increases the value of orders, sales, profits for your business.

## Download & Install

You can download from the following resouces:

- Mageplaza
- [Magento Marketplace](https://marketplace.magento.com/mageplaza-module-frequently-bought-together.html)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


## Overview 

Here how Frequently Bought Together block appears in your shopping site

![](https://i.imgur.com/3hARgQL.png)

![](https://i.imgur.com/hxmv2aa.png)

## How to configure

After logging to Magento Admin, navigate to ``Stores > Settings > Configuration > Mageplaza Extension > Frequently Bought Together
``

![](https://i.imgur.com/6oCEzog.png)

### General configuration

From the Admin Panel, go to ``Stores > Settings > Configuration > Mageplaza Extension > Frequently Bought Together``, choose ``General Configuration`` sections

![](https://i.imgur.com/2VCaJMl.png)

- In the **Enable Frequently Bought Together** field: choose "Yes" to enable extension. Here some rough sketch how this module works.
  - The Frequently Bought Together list is under the Product image and on the Product Description tab.
  - There will be a horizontal line separating the list from the Product image.
  - Products included in the Frequently purchased together list are from the Related Products in the Backend.
  
- **Method of Choosing Product**: Select the products to be displayed in the **Frequently Bought Together** block. The extension now supports displaying two types of products: **Related Product** and **Frequently Bought Together** Product. The configuration of these two types of products is guided below.

- In the **Block name** field
  - Name the Frequently Bought Together block displaying in Product page.
  - The block’s name will be displayed in default as “Frequently Bought Together”.
  - If you don’t need a name for block, leave it blank.
  
- In the **Number of Products** field
  - The number of the product is displayed by the default in the list as Number +1, including the selected products.
  - If leaving this field blank or = 0, it will display all Related Products in the list

- In the **Enable Add to Wishlist button** field
  - Choose Yes to display **Add all items to Wishlist** button on the frontend
  - **Add to Wishlist** button only works when you have logged in an account. If not, it will redirect to the login page
  
- In the **Remove Native Related Products Block** field
  - Choose Yes to not display **Block Related Products** that is the default of Magento
  - When you choose No, **Block Related Products** of Magento will show under the **Product Description Detail** field.
  
- In the **Separator Image** is the minor plus button among products
  - Valid file should be *jpg, *png and *gif
  - If you like our plus image as default, it’s ok to leave it blank.
  
- **Use Popup to Select Product Options**: Select **Yes** to display popup selecting the option for the product when clicking **Add To Cart**.
  
## How to add Related Products

Related Products refers those products which have a certain link to each other evaluated by buyer’s frequently shopping habit. So we will take The Related Products advantage apply it in the Frequently Bought Together extension. Based on the Related Products, the extension will filter out the products that can be purchased with the product that the customer is selecting, thereby helping customers shop more, increase store revenue.

Follow this instruction to know how to add your custom combination related product, offer visitors better choice.

- Back to the Magento’s Admin page again, choose `Products > Inventory > Catalog`, choose the product you want add Related Product to it.

![](https://i.imgur.com/c0vQHfY.png)

- Scroll down until the **Related Product, Up-sells, and Cross-sells** reaches your eyesight, choose black Add Related Product button.

![](https://i.imgur.com/FTZOBKe.png)

- In the **Add Related Products**, tick preferred items you wish to add. When you’ve done, choose red `Add Selected Product` near the header of the page.

![](https://i.imgur.com/DIOylfx.png)

- You will be redirected back to Product page, don’t forget clicking the `Save` button.

![](https://i.imgur.com/FcfII3o.png)

- Finally, check on the frontend. Go the the product detail page on the frontend to check again.

![](https://i.imgur.com/i38BWxM.png)

And now you can back to the live site to check the completed result.

## How to Add Frequently Bought Together Product

### Step 1: Open the Product details page in Admin

- Select `Products > Inventory > Catalog > Edit 1 Product`

![](https://i.imgur.com/eeGw2ZQ.png)

### Step 2: Add Related Product

- Under **Related Products, Up-Sells, Cross-Sells and Frequently Bought Together** on **Edit Product** page, select **Add Frequently Bought Together Products**. Note: You must **Enable** the extension to see the **Frequently Bought Together Product** section.

![](https://i.imgur.com/DnZjwaI.png)

- On the **Add Frequently Bought Together Products** page, tick the **Products** you want to add


![](https://i.imgur.com/kVfRPck.png)

- Select **Add Selected Products**

![](https://i.imgur.com/B73CxC4.png)

- Save the Product changes: Click **Save Config**


![](https://i.imgur.com/fGlrKGK.png)


## REST API Document

This extension supports retrieving and uploading data to the website using the REST API. Please check [this link](
https://documenter.getpostman.com/view/10589000/SzYXWeGM?version=latest) for more details. 

The instruction for creating Integration tokens can be seen from [here](https://devdocs.magento.com/guides/v2.3/rest/tutorials/orders/order-admin-token.html)

## GraphQL Document

This extension aslo supports getting and uploading data to the website using GraphQL. 

To use GraphQL, first run the following commands in the root Magento 2 directory:

```
composer require mageplaza/module-frequently-bought-together-graphql
php bin/magento setup:upgrade
php bin/magento setup:static-content:deploy
```

To start working with **Frequently Bought Together GraphQL** in Magento, you need to:

- Use Magento 2.3.x. Return your site to developer mode
- Install chrome extension (currently does not support other browsers)
- Set GraphQL endpoint as `http://<magento2-3-server>/graphql` in url box, click **Set endpoint**. (e.g. http://develop.mageplaza.com/graphql/ce232/graphql)

The module currently supports queries to retrieve a list of Frequently Bought Together products under certain conditional fields related to the product.

The details can be seen from [here](https://documenter.getpostman.com/view/10589000/SzYXVyE3?version=latest)



