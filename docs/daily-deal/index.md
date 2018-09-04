# Daily Deal
## Overview

Using discounts for items at certain times is a smart way to attract customers to purchase. [Mageplaza Daily Deal extension](https://www.mageplaza.com/magento-2-daily-deal/) will make it easy for shop owners to set a discount for each product. Each product will be set to display the discounted price, time left, item left, along with the status Upcoming/Running/Ended of the deal. In addition, Daily Deal has many outstanding features such as slider, flexible design, etc that support store owners to promote products, thereby stimulating the customer's purchases and increase sales for stores significantly.

## Download & Install
- [Mageplaza Daily Deal](https://www.mageplaza.com/magento-2-daily-deal/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)

## How to use
* Daily Deal only applies for Simple Product, Configurable Product, and Group Product
* Daily Deal is displayed  on the Category Page and Product Detail Page, including the information as Countdown, Deal Price, Percent Discount, the number of sold deals, and the number of left deals

![how to use](https://i.imgur.com/FoSG66j.png)

![how to use 1](https://i.imgur.com/LFrNldx.png)

* Customers can access on the pages as All Deal, New Deal, Best-seller Deal, Feature Deal if admins allows them to be displayed on the frontend
* Also, Deal can be installed to display on the slidebar, or the screen corner of the Store

## How to configure

Login to the Magento Admin, choose **Marketing > Daily Deal**

![how to configure](https://i.imgur.com/neyHUtw.png)

### 1. Manage Daily Deal
#### 1.1. Managerial Grid

![daily deal](https://i.imgur.com/kNC2id2.png)

* This is a place to store all created deals
* From the grid, admins can understand all basic information of the Deal as ID, deal applied products, the products SKU, the deal's status, Deal Price, Deal Quantity, Store View, Sale Quantity, Start On, End on, and Action
* Admins can perform some actions as the following:
    * **Edit**: Choose `Edit` in the Action column to edit the information on the Edit Deal page
    * **Delete**: Tick and choose 1 deal, choose `Action > Delete` (in the upper left of the grid) to delete the Deal
* Also, admins can filter, change store view, show/hide columns or export the grid

#### 1.2. Add New/ Edit Form

![products](https://i.imgur.com/yRnpgdz.png)

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

* The extension does not apply for **Bundle Product**
* Since the Configurable Product and Group Product are made up from **Simple Product** Components, so to set up the Deal for the **Configurable Product or Group Product**, you need to install for each product component. Details [here]()
* The deal of the **Configurable Product** displayed on Category Page is the highest deal in the products component. When choosing options color/siz/format, the deal will change itself according to the selected option.
* Group Product's deal is not displayed on Category Page, it only displays Deal Price at Product Detail Page.

### 2. Configuration
#### 2.1. General
From the Admin Panel, go to **Mageplaza > Daily Deal**

![general](https://i.imgur.com/sdFw2Ny.png)

* **Enable**: Choose Yes to enable this module
* **Show Qty of Remaining Items**: Choose Yes to display the Deal Qty on the frontend
* **Show Qty of Sold Items** : Choose Yes to display Qty of sold items on the frontend

##### 2.1.1. Countdown Timer

![countdown timer](https://i.imgur.com/ZhIkQCB.png)

* **Show countdown timer**: Select Yes so that the countdown timer can be displayed on the Product Detail Page
* **Outer background color**: Change the background color of the Countdown timer
* **Inner background color**: Change the background color of the Countdown timer
* **Text color**: Change the texy color of the countdown timer

##### 2.1.2. Discount Label

![discount label](https://i.imgur.com/YE4HSIw.png)

* **Show Discount Label**: Discount label can be displayed on the Category Page and the Product Detail Page. There are 3 options to choose:

![discount label](https://i.imgur.com/nVP72lM.png)

  * **No**: Discount Label is not displayed on the Frontend
  * **Under Price**: Discount Label is displayed below the price of the product
  * **Above Product Image**: Discount Label is displayed in the image area
  
* **Label**: Display the discount label on the frontend
* **Show On**:

![show on](https://i.imgur.com/UfEp2lE.png)

  * Only show this item when **Show Discount label = Above Product Image**
  * Select a location to display the Discount label on the product's image

* **Background Color**: Change the background color of the discount label
* **Border Color**: Change the color of the label border
* **Text Color**: Change the text color of the Discount label

#### 2.2. Deal Pages
##### 2.2.1. All Deals Page

![all deals page](https://i.imgur.com/MoFkc2V.png)

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

![new deals page](https://i.imgur.com/d2PZEve.png)

Similar to the settings of All Deals Page, but `New Deal Page` displays all Product Deal based on Deal Start Date. Any deal `RUNNING` that is started lastest will be displayed first

##### 2.2.3. Bestseller Deals Page

![bestseller deals page](https://i.imgur.com/eEAgxgY.png)

Similar to the settings of the All Deals Page, but the Bestseller Deals Page displays all Product Deals by old items. The deal `RUNNING` which is most bought by customers will be displayed first

##### 2.2.4. Feature Deals Page

![feature deals page](https://i.imgur.com/kMdPhPn.png)

Similar to the settings of the All Deals Page, but the Deal Page Feature displays the Product Deal based on the `Is Featured` attribute in the backend. Only deals `RUNNING` that have` Is Featured = Yes` are displayed on this page

#### 2.3. Sidebar Widget

![sidebar widget](https://i.imgur.com/deZ7IuX.png)

* **Enable**: Select Yes to enable the Deal feature in the Sidebar widget
* **Show Qty of Remaining Items**: Select Yes to display the remaining Deal quantity of the Product
* **Show Qty of Sold Items**: Select Yes to display the number of sold deal

##### 2.3.1. Random Deal

![random deal](https://i.imgur.com/CFdAfOw.png)

* **Show**: Choose Yes to display Block Random Deal on the sidebar. Product Deals are selected randomly
* **Block Title**:
    * Setup the title of Block Random Deal
    * If leaving this field blank, the block will not have the title
    
* **Show On**: Choose the position to show on the Top or Botton of the sidebar

![show on](https://i.imgur.com/p5mjzti.png)

* **Limit**:
    * Limit the maximum deals displaying in the block
    * If you leave this field blank or set this field as 0, the block will display one Product Deal randomly
    
##### 2.3.2. Top Selling Deal

![top selling deal](https://i.imgur.com/1UgxBky.png)

Similar to the setting of the Random Deal, but the `Top Selling Deal Block` displays Product Deal based on sold items. The deal `RUNNING` which is most bought by customers will be displayed first

##### 2.3.3. Upcoming Deal

![upcoming deal](https://i.imgur.com/I2locko.png)

Similar to the setting of the Random Deal, but the Upcoming Deal Deal displays the Deal based on the Deal Start Date (Start On). The deal that has not arrived on sale is displayed in this block

##### 2.3.4. Floating Slider Deal

![floating slider deal](https://i.imgur.com/Eo4siZy.png)

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

![snippet](https://i.imgur.com/LzGgpcr.png)

* With the command Snippet, admins can choose any position in the store to display the Daily Deal Block via pasting the command into the CMS Page, CMS Static Block of the store
* Daily Deal is displayed according to one or six types as the following: all, feature, new, upcoming, bestseller, random. If deleting `typing` in the command, it will be got the error.
* Change the number of deal displaying at a time on the slider in the block. If removing `num` in the command, the system will auto-get as 5 deals
* Change the total amount of Deal to be displayed on the Block. If you remove the `limit` in the statement, the system automatically gets the default as 5 deals
* Change the way to display the deal in the block. Admins can change to the `grid` or `slider`. If removing `display` in the command, the default will display according to the slider
* Change the title of the block. If removing `title` in the command, the default will display as `DAILY DEAL PRODUCTS`

### 3. Frontend
#### 3.1. Category Page

![category page](https://i.imgur.com/Ppn9tDz.png)

#### 3.2. Product Detail Page

![product detail page](https://i.imgur.com/WrN5F7y.png)

#### 3.3. Deal Pages

![deal pages](https://i.imgur.com/CfgoLum.png)

#### 3.4. Sidebar Widget

![sidebar widget](https://i.imgur.com/87ipMZM.png)

#### 3.5. Floating Deal Block

![floating deal block](https://i.imgur.com/2QEEitM.png)

#### 3.6. Snippet

For example: Displaying the Daily Deal on the `About Us` page by using the Snippet

* **Step 1**: In the backend, go to **Content > Elements > Page**, then edit the `About us` page

![snippet](https://i.imgur.com/WcpBJaj.png)

* **Step 2**: Insert the snippet code into the content of `About us` page

![about us page](https://i.imgur.com/g0PSYCT.png)

* **Step 3**: Save and check on the frontend

![about us page 2](https://i.imgur.com/RABN80d.png)

