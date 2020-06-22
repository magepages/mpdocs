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

![](https://i.imgur.com/we9Upz8.png)

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

![](https://i.imgur.com/FJwNJeZ.png)


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

![](https://i.imgur.com/8RLHcnV.png)

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
  - To update all data of **Also Bought** you can use the command line: `php bin/magento alsobought:reindex-all`
  
- **Update by Schedule**: Tick the **Who Bought This Item Also Bought** checkbox > **Action = Update by Schedule**
  - **Also Bought Logs** data is updated by schedule
  - To update all data of Also Bought you can use the command line: `php bin/magento alsobought:reindex-all`
  
## 3. Widget

- Step 1: Select the Type
- Step 2: Complete the Storefront Properties section
- Step 3: Configure Widget Options to display Who bought this item also bought block

### Step 1: Select the Type

- On the Panel Admin, `Content > Elements > Widgets`
- In the upper-right corner of **Widgets** workplace, click on **Add Widget** button.
- In the Settings section:
  - Choose **Mageplaza Also Bought** type in the **Type** box.
  - Choose the current theme you are applying in the **Design Theme**.
  - Click **Continue** button.

![](https://i.imgur.com/QJznAgd.png)

### Step 2: Complete the Storefront Properties section

![](https://i.imgur.com/qXbXVOn.png)

- In the **Storefront Properties** section,
  - Enter **Widget Title** for the internal reference.
  - Assign the block to all store views in the **Assign to Store View** field or to any store view you want to apply the block.
  - Set the **Sort Order** if many blocks are placed at the same container. The block is at the top if the inserted value is zero.

![](https://i.imgur.com/XC6ebkk.png)

- In the **Layout Updates** section, click on **Layout Update** to set the layout.
  - Choose the [category](https://www.mageplaza.com/kb/how-to-create-a-new-category-in-magento-2.html), [product](https://www.mageplaza.com/kb/how-create-simple-product-magento-2.html), or [page](https://www.mageplaza.com/kb/how-to-add-a-new-cms-page-magento-2.html) where shows the block in the **Display on** field.
  - If set to a specific page, you need to choose **Page** you want to the block to display and set **Container** that is the position of the page the block appears.

### Step 3: Configure Widget Options to display Who bought this item also bought block

![](https://i.imgur.com/dcHmUv1.png)

- **Title of block**: Enter the name of the block
- **Layout**: Select the product display type in the block. There are 2 types of display: **Product Slider** and **Multiple Lines**
- **Show List**: you can select multiple options
  - **Price**: allows to display the price of the Product
  - **Add to Cart**: allows the customer to select the **Product into Cart** without viewing Product details
  - **Review**: displays the **Product Rating** and allows the customer to move to the **Product Review** section when clicking **Review**
  - **Add to Wish List & Add to Compare**: displays the icons of **Add to Wish List** and **Add to Compare**. When clicking on the icon, allowing customer to add products to WishList (need to log in) and add Products to comparison list to compare

### 4. API

**Who Bought Also Bought** extension of Mageplaza supports using **REST API** to get a list of also bought products

- More details see [here](https://documenter.getpostman.com/view/10589000/SzRxXrBi?version=latest)
- Instructions for creating tokens [here](https://devdocs.magento.com/guides/v2.3/get-started/authentication/gs-authentication-token.html)

### 5.GraphQL

#### 5.1. How to install

Run the following command in Magento 2 root folder:

```
composer require mageplaza/module-who-bought-this-item-also-bought-graphql
php bin/magento setup:upgrade
php bin/magento setup:static-content:deploy
```

#### 5.2. How to use

- To perform GraphQL queries in Magento, you need to do the following requirements:
  - Use Magento 2.3.x. Return your site to developer mode
  - Install the [ChromeiQL](https://chrome.google.com/webstore/detail/chromeiql/fkkiamalmpiidkljmicmjfbieiclmeij) extension for Chrome browser (currently does not support other browsers)
  - Set GraphQL endpoint as `http://<magento2-3-server>/graphql` in url box, click **Set endpoint**. (e.g. http://develop.mageplaza.com/graphql/ce232/graphql)
  - Perform a query in the left cell then click the **Run** button or **Ctrl + Enter** to see the result in the right cell
  - To see the supported queries for **Who bought this item also bought GraphQL** of Mageplaza, you can look in `Docs > Query > mpalsobought` in the right corner

![](https://i.imgur.com/csZlYRT.png)

- View Mageplaza supported GraphQl request [here](https://documenter.getpostman.com/view/10589000/SzRxXrBo?version=latest)
