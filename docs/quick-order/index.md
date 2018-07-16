# Quick Order

## Overview

Making a quick order has never been easy for any customer, especially for a wholesale customer. To solve this problem, Magento experts from Mageplaza have released Magento 2 Quick Order extension. Thanks to this extension, customers can order quickly by searching for the product name or SKU of that product. Ordering process becomes easier and easier than ever for your customers.

Quick Order extension can be used by both the Customer who has an account at the store and the Guest who has no account. We believe this module will help you improve your revenues and profits dramatically.

## How to use

To use this module, customers need to click on the Quick Order link or the button in the frontend. There's 3 positions that customers can find the Quick Order link or the button:

* Top Menu

!

* Next to Search Box

![next to search box](https://i.imgur.com/GDZ1YHO.png)

* Footer Link

![footer link](https://i.imgur.com/b3myLsO.png)

After clicking on the button/link of Quick Order, customers can access to the Quick Order page that its interface is displayed as below:

![interface of quick order](https://i.imgur.com/cIuOfxq.png)

* 1 - Add to cart button:

  * This button allows customers to add all products that they have selected in the virtual cart (in the area 4) into the real cart of the store in order to checkout.
  * If there's any error in this process, the system will take the page back the Quick Order page and all products in the virtual cart won't be lost.
  
* 2 - Checkout button: Similar to 1 - Add to cart button, the only difference is, instead of going to Shopping Cart Page, customers will be redirected to the Checkout page.

* 3 - Instant Search Box:
  * Customers can look for the product that they want to purchase by SKU or the product name when filling in this box.
  * The result will show the information and the images of the product that can adapt to the conditions customers enter.
  * The number of result will be controlled by the configuration from the admin.
  
* 4 - The virtual cart:
  * This the place where can store temporarily the products customers want to purchase.
  * At this field, customers can see all information of products, change options of the attribute, modify the quantity or add a new product as well as delete those products from the virtual cart.
  
* 5 - Add to cart button: Similar to 1 - Add to cart button
* 6 - Checkout buttonL Similar to 2 - Checkout button
* 7 - Add multiple product by SKU box:
  * When customers have known SKU and the attributes of the products, it's so easy for them to add these products to the virtual cart by SKU box.
  * Customers only need to fill the information of products as the following format: SKU, quantiy, option_1, option_2, etc.
  * Customers need to line up to add other products"
  * Finally, customers click on 9 - Add to list to add products to the virtual cart.
  * For example: 24-MB01,10,m,pink

* 8 - Add multiple product by CSV file
  * Customers need to download sample CSV file at first import by CSV to know the format in the CSV file.
  * With the CSV file satisfied, all products listed in that will be added into the virtual cart after clicking 9 - Add to list
  
* 9 - Add to list button: After customers enter the information into SKU box or upload the CSV file, they need to click on this button to add them into the virtual cart.
* 10 - Clear: When clicking this button, the virtual cart will be empty. All products in the virtual cart will be deleted.

## How to configuration

After logging into **Magento admin**, go to **Store > Settings > Configuration**, at **Mageplaza Extensions** tab, choose **Quick Order**.

### General Configuration

* This is the general configuration, which can be applied for the module.

![general configuration](https://i.imgur.com/rboZFTu.png)

* Enable: 
  * Choose Yes to enable this module
  * Quick Order link/button only displays if the module works well
  
* Route name: The URL of Quick Order page is the content that is filled in this field.
* Page title: Page Title of Quick Order page is the content that is filled in this field.
* Allow Customer Group: Only selected customers in this field can view the button/link of Quick Order page.
* Message: The notification filled in this item will be displayed with unselected customer group in the item above when they try to access on Quick Order page.
* Quick Order label: The label of Quick Order page will be formated in this item.
* Show Quick Order Link: There are 3 positions that Link/button of Quick Order page can be shown:
  * Top Menu:
  
  ![top menu](https://i.imgur.com/u9TRnF2.png)
  
  * Next to Search Box
  
  ![next to search box](https://i.imgur.com/u8fZsl1.png)
  
  * Footer Link
  
  ![footer link](https://i.imgur.com/aWwBYGY.png)
  
### Search

![search field](https://i.imgur.com/j4HCpFs.png)

* Autosearch minimum character:
  * The number entered here specifies the minimum number of characters that customers must enter to display the search result.
  * If this field is empty, the default is 2.
  
* Limit search results:
  * Enter the number of search result that you want to show in the search result grid
  * If this field is empty, the default is 10.
  
* Display product image: Choose Yes to display the image of the product in the Search Result field.
  
### Design

![design field](https://i.imgur.com/xUcOKzM.png)

* Heading Background Color: This field specifies the color of the Heading.
* Heading Text Color: This field specifies the text color of the Heading Text.
* Heading Background Button: This field specifies the color of buttons in the frontend.


  



