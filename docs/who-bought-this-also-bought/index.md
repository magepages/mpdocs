# Who Bought This Also Bought

## Overview

[Who Bought This Item Also Bought](https://www.mageplaza.com/magento-2-who-bought-this-also-bought/) is a new extension developed by Mageplaza. By having this extension enabled, our team will help you provide your online store’s customers suggestions of the products related to the ones which they shoppers are viewing. This module is supposed to encourage buyers to keep purchasing other products in your online store. Hence, this satisfies your customers as well as boost your sales effectively

## Download & Install

You can download from the following resouces:

- [Mageplaza](https://www.mageplaza.com/magento-2-who-bought-this-also-bought/)
- [Magento Marketplace](https://marketplace.magento.com/mageplaza-module-who-bought-this-item-also-bought.html)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


## How to Configure

### 1. Configuration

Login to Magento Admin, go to `Stores > Settings > Configuration > Mageplaza Extension > Who Bought This Item Also Bought`

![](https://i.imgur.com/vKvgINR.png)

### 1.1. General Configuration

Go to `Stores > Settings > Configuration > Mageplaza Extension > Who Bought This Item Also Bought`, choose **General Configuration**


![](https://i.imgur.com/WgsVChJ.png)

* In **Enable** field: Select "Yes" to enable Mageplaza Who Bought This Item Also Bought Extension, select "No" to disable the extension
- In **Calculate Related Product Base On** field: 
![](https://i.imgur.com/t6TWi7x.png)
  
  - **Calculate Related Product Base On = Order**: Related products displayed in the **Who Bought block This Item Also Bought** are the products purchased together by order.
  - **Calculate Related Product Base On = Customer**: Related products displayed in the **Who Bought block This Item Also Bought** are
  the products purchased by the same customer.
* In **Process Order With Status** field: Pick the order status which the module uses to suggest the products displayed in the block. You can select multiple order status at the same time.
* **Suggest for free Items**: Select **Yes** to allow free products to be displayed in the **Who Bought This Item Also Bought** block if they are reindexed to the **Also Bought** list in the Log section.


### 1.2. Display on Product Page

Go to `Admin Panel > Who Bought This Item Also Bought > Configuration`, select **Display on Product Page**.

When a product is chosen, the item will be used to relate to other orders with the same status selected in Process Order with Status. The products appearing in those orders will be displayed in the Product Page.

* In **Enable** field: Select "Yes" to enable and No to disable module in the Product Page.
* In **Title of block** field
  * Enter the name of suggested-products block displayed in the Product Page
  * The Block will be named Who Bought This Item Also Bought by default.
  * If you leave it empty, the block will be nameless.
- In **Position** field: Choose the position at where you put the block in the Product page. There are two options:
![](https://i.imgur.com/wTj28zE.png)

  - **Main Content Top**: The Block of the extension is displayed above the main content
  ![](https://i.imgur.com/WrmymOr.png)

  - **Main Content Bottom**: The Block of the extension is displayed at the bottom of the main content
  ![](https://i.imgur.com/KNXIEW5.png)

  - **Before Native Related Products Block**: The Block of extension is displayed before **Related Products** Block
  ![](https://i.imgur.com/Lq0nHPi.png)

  - **After Native Related Products Block**: The Block of extension is displayed after **Related Products** Block
  ![](https://i.imgur.com/i7YFCty.png)

  - **Before Up-sells Products Block**: The Block of extension is displayed before **Up-sells Products** Block
  ![](https://i.imgur.com/o6PKuit.png)

  - **After Up-sells Products Block**: The Block of extension is displayed after **Up-sells Products** Block
  ![](https://i.imgur.com/NXKbIlG.png)

  - **Before Information Tab**: The Block of extension is displayed before the **Information Tab**
  ![](https://i.imgur.com/FheGCYz.png)

  - **Manually**: Admin can adjust the location of **Who Bought This Item Also Bought** by using widgets
* In **Layout**: 
  * **Product Slider**: Suggested products will be displayed in one line only, and all items will slip to the left in a period of time.
  * **Multiple Lines**: Suggested products will be displayed in a grid, with 5 items per line.
  
* In **Show List**: Allow multiple selections
  * **Price**: Allows displaying price under a product image
  * **Add to Cart**: Allows customers to add an item to their carts without showing the details
  * **Review**: Allows showing the product’s rating and leading customers to the Review section of the product when the Review button is clicked.
  * **Add to Wish List & Add to Compare**: Displays the **Add to Wish List** and **Add to Compare** buttons. When these buttons are clicked, the item will show up in the **Wish Lis**t and **Comparison List**
  
- **Number of products displayed**:
  - This is the field to limit the number of products displayed on the product page at frontend
  - If you leave this blank, all qualified products will be shown in Frontend
  

### 1.3. Display on Category Page

Go to `Admin Panel > Who Bought This Item Also Bought > Configuration`, expand **Display on Catalog Page** section.

When a category is chosen, all the products in the current category will be used to relate to other orders with the same status selected in Process Order with Status. The products appearing in those orders will be displayed in the Category Page.


* In **Enable** field: Select "Yes" to enable and No to disable module in the Category Page.
* In **Title of Block** field
  * Enter the name of suggested-products block displayed in the Product Page
  * The Block will be named Who Bought This Item Also Bought by default.
  * If you leave it empty, the block will be nameless
- In **Position** field:
![](https://i.imgur.com/XTeTVV4.png)

  - **Main Content Top**: The Block of the extension is displayed above the Main Content
  ![](https://i.imgur.com/rz66RR1.png)

  - **Main Content Bottom**: The Block of the extension is displayed under Main Content
  ![](https://i.imgur.com/CkETteI.png)

  - **Sidebar Main Top**: The extension's Block is displayed at the top of the sidebar
  ![](https://i.imgur.com/iSwwyHb.png)

  - **Sidebar Main Bottom**: The Extension block is displayed on the side of the sidebar
  ![](https://i.imgur.com/eAMTrYU.png)
   
* In **Layout**: Choose the layout of suggested items in the Category Page
  * **Product Slider**: Suggested products will be displayed in one line only, and all items will slip to the left in a period of time.
  * **Multiple Lines**: Suggested products will be displayed in a grid, with 5 items per line.
* In **Show List**: Allow multiple selections
  * **Price**: Allows displaying price under a product image
  * **Add to Cart**: Allows customers to add an item to their carts without showing the details
  * **Review**: Allows showing the product’s rating and leading customers to the Review section of the product when the Review button is clicked.
  * **Add to Wish List & Add to Compare**: Displays the Add to Wish List and  Add to Compare buttons. When these buttons are clicked, the item will show up in the Wish List and Comparison List
  
- **Number of products displayed**:
  - This is the field to limit the number of products displayed on the Catalog page at frontend
  - If you leave this blank, all qualified products will be shown in Frontend


### 1.4. Display on Cart Page

Go to `Admin Panel > Who Bought This Item Also Bought > Configuration`, select **Display on Cart Page** section.

After adding to cart, customers go to View and Edit Cart. In this page, all the products in their cart will be used to relate to other orders with the same status selected in Process Order with Status. The products appearing in those orders will be displayed in the Cart Page.

![](https://i.imgur.com/BXU3Lbs.png)

* In **Enable** field: Select "Yes" to enable and No to disable module in the Cart Page.
* In **Title of Block** field: 
  * Enter the name of suggested-products block displayed in the Cart Page.
  * The Block will be named Who Bought This Item Also Bought by default.
  * If you leave it empty, the block will be nameless 
- In **Position** field:
![](https://i.imgur.com/VUDqSdq.png)

  - **Main Content Top**: The Block of the Extension is displayed above the Main Content
  ![](https://i.imgur.com/Thd3dtB.png)

  - **Main Content Bottom**: The Block of the Extension is displayed under Main Content
  ![](https://i.imgur.com/rh4smyt.png)

  - **Before Cross-sells Product Block**: The block of the extension is displayed before Cross-sells Product Block
  ![](https://i.imgur.com/VZLx7WN.png)

  - **After Cross-sells Product Block**: The block of the extension is displayed after Cross-sells Product Block
  ![](https://i.imgur.com/sLztfu7.png)

* In **Layout** field: Choose the layout of suggested items in the Cart Page
  * **Product Slider**: Suggested products will be displayed in one line only, and all items will slip to the left in a certain period of time
  * **Multiple Lines**: Suggested products will be displayed in a grid, with 5 items per line.
* In **Show List** field: Allow multiple selections
  * **Price**: Allows displaying price under a product image
  * **Add to Cart**: Allows customers to add an item to their carts without showing the details
  * **Review**: Allows showing the product’s rating and leading customers to the Review section of the product when the Review button is clicked.
  * **Add to Wish List & Add to Compare**: Displays the Add to Wish List and  Add to Compare buttons. When these buttons are clicked, the item will show up in the Wish List and Comparison List

- **Number of products displayed**:
  - This is the field to limit the number of products displayed on the Shopping Cart page at frontend
  - If you leave this blank, all qualified products will be shown in Frontend
  
  
## 2. Logs

Login to Magento Admin, select `Store > Who Bought This Also Bought > Logs`

At the Grid **Also Bought Logs** shown the information: Main Product, Main Product Qty, Also Bought, Associate Product Qty, Total Combo

### Action: Update on Save & Update on Schedule

Go to **Magento Admin > System > Tools > Index Management**

![](https://i.imgur.com/0OycVaj.png)

- **Update on Save**: tick the **Who Bought This Item Also Bought** checkbox > **Action = Update on Save**
  - **Also Bought Logs** data is updated when **Save**
  - To update all data of **Also Bought** you can use the command line
- **Update by Schedule**: Tick the **Who Bought This Item Also Bought** checkbox > **Action = Update by Schedule**
  - **Also Bought Logs** data is updated by schedule
  - To update all data of Also Bought you can use the command line: `php bin / magento alsobought: reindex-all`

### API

**Who Bought Also Boughtv extension of Mageplaza supports using **REST API** to get a list of also bought products
- More details see [here](https://documenter.getpostman.com/view/6685698/SW7eykoq?version=latest)
- Instructions for creating tokens [here](https://devdocs.magento.com/guides/v2.3/get-started/authentication/gs-authentication-token.html)
