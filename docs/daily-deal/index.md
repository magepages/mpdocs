# Daily Deal
## Overview

Using discounts for items at certain times is a smart way to attract customers to purchase. [Mageplaza Daily Deal extension](https://www.mageplaza.com/magento-2-daily-deal/) will make it easy for shop owners to set a discount for each product. Each product will be set to display the discounted price, time left, item left, along with the status Upcoming/Running/Ended of the deal. In addition, Daily Deal has many outstanding features such as slider, flexible design, etc that support store owners to promote products, thereby stimulating the customer's purchases and increase sales for stores significantly.

## Download & Install
- [Mageplaza Daily Deal](https://www.mageplaza.com/magento-2-daily-deal/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)

## How to use
* Daily Deal only applies for Simple Product, Configurable Product, and Group Product
* Daily Deal is displayed  on the Category Page and Product Detail Page, including the information as Countdown, Deal Price, Percent Discount, the number of sold deals, and the number of left deals

![](https://i.imgur.com/FoSG66j.png)

![](https://i.imgur.com/LFrNldx.png)

* Customers can access on the pages as All Deal, New Deal, Best-seller Deal, Feature Deal if admins allows them to be displayed on the frontend
* Also, Deal can be installed to display on the slidebar, or the screen corner of the Store

## How to configure

Login to the Magento Admin, choose **Marketing > Daily Deal**

![](https://i.imgur.com/neyHUtw.png)

### 1. Manage Daily Deal
#### 1.1. Managerial Grid

![](https://i.imgur.com/kNC2id2.png)

* This is a place to store all created deals
* From the grid, admins can understand all basic information of the Deal as ID, deal applied products, the products SKU, the deal's status, Deal Price, Deal Quantity, Store View, Sale Quantity, Start On, End on, and Action
* Admins can perform some actions as the following:
    * **Edit**: Choose `Edit` in the Action column to edit the information on the Edit Deal page
    * **Delete**: Tick and choose 1 deal, choose `Action > Delete` (in the upper left of the grid) to delete the Deal
* Also, admins can filter, change store view, show/hide columns or export the grid

#### 1.2. Add New/ Edit Form

![](https://i.imgur.com/yRnpgdz.png)

* **Product**: The name of the product that is applied the deal. To select the product, click on `Select Product`. The name of the selected product will automatically appear in `Product` section
* **Original Price**:
    * The original price of the product will be automatically updated when the product is selected.
    * This price is displayed based on `Catalog > Product`.
    
* **Product Qty**:
    * The quantity of the product is automatically updated when the product is selected
    * This number is displayed based on `Catalog > Product`.
    
* **Status**: Select `Active` so that the deal can be active and displayed on the Frontend
* **Is Feature**: Select Yes so that the deal is displayed on `Feature Deal` and `Floating slider deal` pages
* **Deal Price**: Set the price you want to sell the product
* **Discount**:
    * This item will be automatically updated based on `Original Price` and `Deal Price`.
    * The discounted amount and the discounted percent will be displayed
    * `Discount = Original Price - Deal Price`
    * `% = (Deal Price/Original Price)* 100%`
    
* **Deal Qty**:
    * Set the quantity of the product you want to sell
    * The quantity of the deal can not exceed `Product Qty`
    
* **Qauntity of sold items**:
    * The quantity of sold items are automatically updated when the deal is purchased
    * The deal does not exceed `Deal Qty`
    
* **Store View**: A website can have multiple Store Views. The category is only visible with selected Store Views.
* **From Date**: Set the date to use the deal
* **To Date**: Set the end date using the deal

``Note``:
- *With Configurable và Bundle product, Daily Deal only supports the simple children products.*

- *Virtual Product, Downloadable Product are supported (in case price and qty are available)* 

### 2. Configuration
#### 2.1. General
From the Admin Panel, go to **Mageplaza > Daily Deal**

![](https://i.imgur.com/sdFw2Ny.png)

* **Enable**: Choose Yes to enable this module
* **Show Qty of Remaining Items**: Choose Yes to display the Deal Qty on the frontend
* **Show Qty of Sold Items** : Choose Yes to display Qty of sold items on the frontend

##### 2.1.1. Countdown Timer

![](https://i.imgur.com/8aTukVL.png)

* **Show countdown timer**: Select Yes so that the countdown timer can be displayed on the Product Detail Page
* **Clock Style**: Select clock type shown at frontend. There are 5 types:

![Imgur](https://i.imgur.com/p5pnBDy.png)

* **Outer background color**: Change the background color of the Countdown timer
* **Inner background color**: Change the background color of the Countdown timer
* **Number Clock**: Change number color of the Countdown timer
* **Text color**: Change the texy color of the countdown timer

##### 2.1.2. Discount Label

![](https://i.imgur.com/0YAkoHu.png)

* **Show Discount Label**: Discount label can be displayed on the Category Page and the Product Detail Page. There are 3 options to choose:
![](https://i.imgur.com/nVP72lM.png)

  * **No**: Discount Label is not displayed on the Frontend
  * **Under Price**: Discount Label is displayed below the price of the product
  * **Above Product Image**: Discount Label is displayed in the image area
  
* **Label**: Display the discount label on the frontend
* **Round percentage**: 
![Imgur](https://i.imgur.com/UidsBYC.png)

  * **No**: Do not make round the value on label
  * **Round up**: Round up the value on label
  * **Round down**: Round down the value on label
* **Show On**:
![](https://i.imgur.com/UfEp2lE.png)

  * Only show this item when **Show Discount label = Above Product Image**
  * Select a location to display the Discount label on the product's image

* **Background Color**: Change the background color of the discount label
* **Border Color**: Change the color of the label border
* **Text Color**: Change the text color of the Discount label

#### 2.2. Deal Pages
##### 2.2.1. All Deals Page

![](https://i.imgur.com/MoFkc2V.png)

* **Enable**:
    * Select Yes to display the All Deals Page on the Frontend.
    * The page will display all the Deal `RUNNING` of the store
    * Products are sorted based on the ID in the backend. The deal created before will be displayed first

* **Show Links**:
    * Select the position to display the All Deals Page link on the Frontend
    * Multiple positions can be selected to display
    * Don't show the link if you choose `Please Select`
    
* **Route**:
    * Setting the URL for the page.
    * `Default = dailydeal`
    * **Page Title**: Set the Title for All Deals Page
    
##### 2.2.2. New Deals Page

![](https://i.imgur.com/d2PZEve.png)

Similar to the settings of All Deals Page, but `New Deal Page` displays all Product Deal based on Deal Start Date. Any deal `RUNNING` that is started lastest will be displayed first

##### 2.2.3. Bestseller Deals Page

![](https://i.imgur.com/eEAgxgY.png)

Similar to the settings of the All Deals Page, but the Bestseller Deals Page displays all Product Deals by old items. The deal `RUNNING` which is most bought by customers will be displayed first

##### 2.2.4. Feature Deals Page

![](https://i.imgur.com/kMdPhPn.png)

Similar to the settings of the All Deals Page, but the Deal Page Feature displays the Product Deal based on the `Is Featured` attribute in the backend. Only deals `RUNNING` that have` Is Featured = Yes` are displayed on this page

#### 2.3. Sidebar Widget

![](https://i.imgur.com/deZ7IuX.png)

* **Enable**: Select Yes to enable the Deal feature in the Sidebar widget
* **Show Qty of Remaining Items**: Select Yes to display the remaining Deal quantity of the Product
* **Show Qty of Sold Items**: Select Yes to display the number of sold deal

##### 2.3.1. Random Deal

![](https://i.imgur.com/CFdAfOw.png)

* **Show**: Choose Yes to display Block Random Deal on the sidebar. Product Deals are selected randomly
* **Block Title**:
    * Setup the title of Block Random Deal
    * If leaving this field blank, the block will not have the title
    
* **Show On**: Choose the position to show on the Top or Botton of the sidebar

![](https://i.imgur.com/p5mjzti.png)

* **Limit**:
    * Limit the maximum deals displaying in the block
    * If you leave this field blank or set this field as 0, the block will display one Product Deal randomly
    
##### 2.3.2. Top Selling Deal

![](https://i.imgur.com/1UgxBky.png)

Similar to the setting of the Random Deal, but the `Top Selling Deal Block` displays Product Deal based on sold items. The deal `RUNNING` which is most bought by customers will be displayed first

##### 2.3.3. Upcoming Deal

![](https://i.imgur.com/I2locko.png)

Similar to the setting of the Random Deal, but the Upcoming Deal Deal displays the Deal based on the Deal Start Date (Start On). The deal that has not arrived on sale is displayed in this block

##### 2.3.4. Floating Slider Deal

![](https://i.imgur.com/Eo4siZy.png)

* **Show**: Select Yes to display the Floating Slider Deal Block in the corner of the screen. Deal Features are displayed in this block
* **Show on mobile**: Choose NO to disable Floating Slider Deal when it's on the mobile mode.
* **Block Title**:
    * Set the title of the Floating Slider Deal block
    * If leaving this field blank, the block has no the title

* **Show On**: Select the position displayed in the left corner or right corner of the screen
* **Number of Deals**:
    * Limit the maximum number of Deal that can be displayed in the Block
    * If leaving this field blank or set it as 0, the block displays one product deal randomly
    
* **Show after**:
    * When the floating bar is closed, it will automatically reappear after this time.
    * 0 means that it will not automatically reappear after being closed until the customers reload the page or move to a new page
    * Time is counted by seconds
    
#### 2.4. Snippet

![](https://i.imgur.com/LzGgpcr.png)

* With the command Snippet, admins can choose any position in the store to display the Daily Deal Block via pasting the command into the CMS Page, CMS Static Block of the store
* Daily Deal is displayed according to one or six types as the following: all, feature, new, upcoming, bestseller, random. If deleting `typing` in the command, it will be got the error.
* Change the number of deal displaying at a time on the slider in the block. If removing `num` in the command, the system will auto-get as 5 deals
* Change the total amount of Deal to be displayed on the Block. If you remove the `limit` in the statement, the system automatically gets the default as 5 deals
* Change the way to display the deal in the block. Admins can change to the `grid` or `slider`. If removing `display` in the command, the default will display according to the slider
* Change the title of the block. If removing `title` in the command, the default will display as `DAILY DEAL PRODUCTS`

#### 2.5 Automatic Create Deal

![](https://i.imgur.com/RgkOF6i.png)

- **Schedule For**: Set up the schedule in which deals are created automatically.
  - **Disable**: Disable auto-running deals by schedule
  - **Daily**: Auto-creating product deals daily
  - **Weekly**: Auto-creating product deals weekly
  - **Monthly**: Auto-creating product deals monthly
- **Start Time**: Date to start running deal
- **Apply for Categories**: Select category on which to create deals 
- **Special Price (Percent)**: Discount price (by percentage)
- **Number Product Created**: Number of products generated per cron run.
- **Qty**: Number of discount products
- **Day(s)**: Number of days applied deals
- **Run Manually**: Click this button to create and run deals manually

### 3. Frontend
#### 3.1. Category Page

![](https://i.imgur.com/Ppn9tDz.png)

#### 3.2. Product Detail Page

![](https://i.imgur.com/WrN5F7y.png)

#### 3.3. Deal Pages

![](https://i.imgur.com/CfgoLum.png)

#### 3.4. Sidebar Widget

![](https://i.imgur.com/87ipMZM.png)

#### 3.5. Floating Deal Block

![](https://i.imgur.com/2QEEitM.png)

#### 3.6. Snippet

For example: Displaying the Daily Deal on the `About Us` page by using the Snippet

* **Step 1**: In the backend, go to **Content > Elements > Page**, then edit the `About us` page

![](https://i.imgur.com/WcpBJaj.png)

* **Step 2**: Insert the snippet code into the content of `About us` page

![](https://i.imgur.com/g0PSYCT.png)

* **Step 3**: Save and check on the frontend

![](https://i.imgur.com/RABN80d.png)

### 4. API

Mageplaza's Daily Deal extension supports the use of the **Rest API** to add discount label and countdown timer data to individual products or all products. Also,  through the Rest API, you can retrieve, create and delete rule information.

- Details can be viewed [here](https://documenter.getpostman.com/view/5187684/SzKPV1se?version=latest).
- Instructions for [creating Integration tokens here](https://devdocs.magento.com/guides/v2.3/get-started/authentication/gs-authentication-token.html).

### 5. GraphQL

Run the following command in Magento 2 root folder:

```
composer require mageplaza/module-daily-deal-graphql
php bin/magento setup:upgrade
php bin/magento setup:static-content:deploy
```

To start working with **Daily Deal GraphQL** in Magento, you need to:

- Use Magento 2.3.x. Return your site to developer mode
- Install [chrome extension](https://chrome.google.com/webstore/detail/chromeiql/fkkiamalmpiidkljmicmjfbieiclmeij?hl=en) (currently does not support other browsers)
- Set **GraphQL endpoint** as `http://<magento2-3-server>/graphql` in url box, click **Set endpoint**. (e.g. http://develop.mageplaza.com/graphql/ce232/graphql)
- Perform a query in the left cell then click the **Run** button or **Ctrl + Enter** to see the result in the right cell
- To see the supported queries for **Daily Deal GraphQL** of Mageplaza, you can look in `Docs > Query > MpDailyDeals` in the right corner

![](https://i.imgur.com/rjNCvSi.png)

- Also, you can add discount label and countdown timer data into product query by Mageplaza Daily Deal extension. You can look at the right corner and go to `Doc > Query > product`.

![](https://i.imgur.com/M6vrkHl.png)

