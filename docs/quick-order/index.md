# Quick Order

## Overview

Making a quick order has never been easy for any customer, especially for wholesale customers. To solve this problem, Magento experts from Mageplaza have released Magento 2 Quick Order extension. Thanks to this extension, customers can order quickly by searching for the product name or SKU of that product. Ordering process becomes easier than ever for your customers.

Quick Order extension can be used by both the Customer who has an account at the store and the Guest who has no account. We believe that with the help of this module, you can improve the revenues and profits dramatically.

## Download & Install
- Mageplaza Quick Order
- [How to install](https://www.mageplaza.com/install-magento-2-extension/)

## How to use

To use this module, customers need to click on the Quick Order link or the button in the frontend. There're 3 positions that customers can find the Quick Order link or the button:

* **Top Menu**

![](https://i.imgur.com/rE9mlwa.png)

* **Next to Search Box**

![](https://i.imgur.com/GDZ1YHO.png)

* **Footer Link**

![](https://i.imgur.com/b3myLsO.png)

After clicking on the button/link of Quick Order, customers can access to the Quick Order page that its interface is displayed as below:

![](https://i.imgur.com/77urGjp.png)

* 1 - **Add to cart button**:

  * This button allows customers to add all products that they have selected in the virtual cart (in area 4) into the real cart of the store in order to checkout.
  * If there's an error in this process, the system will take the page back the Quick Order page and all products in the virtual cart won't be lost.
  
* 2 - **Checkout button**: Similar to 1 - Add to cart button, the only difference is, instead of going to Shopping Cart Page, customers will be redirected to the Checkout page.

* 3 - **Instant Search Box**:
  * Customers can look for the product that they want to purchase by SKU or the product name when filling in this box.
  * The result will show the information and the images of the product that can adapt to the conditions customers enter.
  * The number of the result will be controlled in the configuration by the admin.
  * When admins change Currency or other information of the products, maybe 'Search' will make the information display incorrect. Therefore, admins need to access `pub/media/mageplaza`, remove Search item and Refresh the Quick Order page to update the information for the system.
  
* 4 - **The virtual cart**:
  * This the place where can store temporarily the products customers want to purchase.
  * At this field, customers can see all information of products, change options of the attribute, modify the quantity or add a new product as well as delete those products from the virtual cart.
  * The price displaying in the virtual cart is the original price of each product, not count Tax.
  
* 5 - **Add to cart button**: Similar to 1 - Add to cart button
* 6 - **Checkout button**: Similar to 2 - Checkout button
* 7 - **Add multiple products by SKU box**:
  * When customers have known SKU and the attributes of the products, it's so easy for them to add these products to the virtual cart by SKU box.
  * Customers only need to fill the information of products as the following format: SKU, qty, size:M, color: Black
  * Customers need to line up to add other products.
  * Finally, customers click on 9 - Add to list to add products to the virtual cart.
  * For example: MH02, 9, size:M, color:Red

* 8 - **Add multiple products by CSV file**:
  * Customers need to download sample CSV file at first import by CSV to know the format in the CSV file.
  * With the CSV file satisfied, all products listed in that will be added into the virtual cart after clicking `Upload Now`
  
* 9 - **Add to list button**: 
  * After customers enter the information into SKU box or upload the CSV file, they need to click on this button to add them into the virtual cart.
  * This button only works if the SKU box has the information.

* 10 - **Clear All List**: When clicking this button, the virtual cart will be empty. All products in the virtual cart will be deleted.

## How to configure

After logging into **Magento admin**, go to **Store > Settings > Configuration > Mageplaza Extensions > Quick Order**.

### General Configuration

* This is the general configuration, which can be applied for the module.

![](https://i.imgur.com/ziwjbNc.png)

* **Enable**: 
  * Choose Yes to enable this module
  * Quick Order link/button only displays if the module works well
  
* **Route name**: The URL of Quick Order page is the content that is filled in this field.
* **Page title**: Page Title of Quick Order page is the content that is filled in this field.
* **Allow Customer Group**: Only selected customers in this field can view the button/link of the Quick Order page.
* **Message**: The notification filled in this item will be displayed with unselected customer group in the item above when they try to access on the Quick Order page.
* **Quick Order label**: The label of Quick Order page will be formated in this item.
* **Show Quick Order Link**: There are 3 positions that Link/button of Quick Order page can be shown:
  * **Top Menu**
  
  ![](https://i.imgur.com/xdhJxKn.png)
  
  * **Next to Search Box**
  
  ![](https://i.imgur.com/u8fZsl1.png)
  
  * **Footer Link**
  
  ![](https://i.imgur.com/aWwBYGY.png)
  
### Search

![](https://i.imgur.com/j4HCpFs.png)

* **Auto search minimum character**:
  * The number entered here specifies the minimum number of characters that customers must enter to display the search result.
  * If this field is empty, the default is 2.
  
* **Limit search results**:
  * Enter the number of search result that you want to show in the search result grid
  * If this field is empty, the default is 10.
  
* **Display product image**: Choose Yes to display the image of the product in the Search Result field.
  
### Design

![](https://i.imgur.com/xUcOKzM.png)

* **Heading Background Color**: This field specifies the color of the Heading.
* **Heading Text Color**: This field specifies the text color of the Heading Text.
* **Heading Background Button**: This field specifies the color of buttons in the frontend.

### Rest API
Mageplaza Quick Order extension support the use of REST API to view information of products in quick order. Besides, extension supports adding and deleting products to/from quic order directly via API requests. 

View details [here](https://documenter.getpostman.com/view/10589000/TVYDezUh)

View guidelines to create Integration tokens [here](https://devdocs.magento.com/guides/v2.3/get-started/authentication/gs-authentication-token.html).

### GraphQL

Run the following command in Magento 2 root folder:

`composer require mageplaza/module-quick-order-graphql`

`php bin/magento setup:upgrade`

`php bin/magento setup:static-content:deploy`

To start working with Report Pro GrahpQL in Magento, you need to follow these requests: 
- Use 2.3.x. Take the site back to **Developer mode**
- Place GraphQL endpoint as http://<magento2-3-server>/graphql on URL field, click **Set endpoint**. (e.g. http://develop.mageplaza.com/graphql)

View details of queries supported by Mageplaza Quick Order [here](https://documenter.getpostman.com/view/10589000/TVYDfKW9)
  



