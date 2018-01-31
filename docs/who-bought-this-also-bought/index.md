# Who Bought This Also Bought

## I. Overview

[Who Bought This Item Also Bought](https://www.mageplaza.com/magento-2-who-bought-this-also-bought/) is a new extension developed by Mageplaza. By having this extension enabled, our team will help you provide your online store’s customers suggestions of the products related to the ones which they shoppers are viewing. This module is supposed to encourage buyers to keep purchasing other products in your online store. Hence, this satisfies your customers as well as boost your sales effectively


## II. How to Configure

Login to Magento Admin, go to Mageplaza > Who Bought This Item Also Bought > Configuration

![how to configure who bought this item also bought](https://cdn.mageplaza.com/media/general/ZkRdIen.png)

### 2.1. General Configuration

Go to `Admin Panel > Who Bought This Item Also Bought > Configuration`, select **General Configuration**

![configure](https://cdn.mageplaza.com/media/general/u4t58bE.png)

* In **Enable Who Bought This Item Also Bought** field: Select "Yes" to enable Mageplaza Who Bought This Item Also Bought Extension, select "No" to disable the extension
* In **Process Order With Status** field: Pick the order status which the module uses to suggest the products displayed in the block. You can select multiple order status at the same time.
* In **Number of products displayed in the frontend** field
  * Enter a figure here to set the maximum number of suggested products displayed in the block
  * Leave empty or 0 to have all suggested products displayed in the block.
* In **Reindex** field
  * When the extension is enabled for the first time, or is switched from a disabled module to an enabled one, or when the selection(s) in Process Order with Status are changed, the RUN button must be clicked on.
  * Having the RUN button clicked on means that only orders with status chosen in Process Order with Status are enabled in the module.
  * If the RUN button is NOT clicked on, any order with formerly chosen status and latterly selected ones will be allowed in the module
  * If an online store has an excessive number of orders and products, to click the RUN button can cause …. for the site. In this case, the command line should be used to prevent negative impacts on the website.

### 2.2. Display on Product Page

Go to `Admin Panel > Who Bought This Item Also Bought > Configuration`, select **Display on Product Page**.

When a product is chosen, the item will be used to relate to other orders with the same status selected in Process Order with Status. The products appearing in those orders will be displayed in the Product Page in the quantity set in the field Number of products displayed in the Frontend 

![also bought on product page](https://cdn.mageplaza.com/media/general/Gd6soIY.png)

* In **Enable** field: Select "Yes" to enable and No to disable module in the Product Page.
* In **Title of block** field
  * Enter the name of suggested-products block displayed in the Product Page
  * The Block will be named Who Bought This Item Also Bought by default.
  * If you leave it empty, the block will be nameless.
* In **Position** field: Choose the position at where you put the block in the Product page. There are two options:
  * At the top of the page
  * At the bottom of the page
* In **Layout** field: Choose the layout of suggested items in the Product Page
  * **Product Slider**: Suggested products will be displayed in one slider only, and all items will slip to the left in a period of time
  * **Multiple Lines**: Suggested products will be displayed in a grid, with 5 items per line.
* In **Show List** field: Allow multiple selections
  * **Price**: Allows displaying price under a product image
  * **Add to Cart**: Product Allows customers to add an item to their carts without showing the details
  * **Review**: Allows showing the product’s rating and leading customers to the Review section of the product when the Review button is clicked.
  * **Add to Wish List & Add to Compare**: Displays the Add to Wish List and  Add to Compare buttons. When these buttons are clicked, the item will show up in the Wish List and Comparison List

*This example is configured with the following settings:*
  * Layout: Product slider
  * Position: On the top of the page.
  * Show List: Price, Add to cart, Review, Add to wishlist, Add to compare

![also bought frontend](https://cdn.mageplaza.com/media/general/JvR81o7.png)


### 2.3. Display on Category Page

Go to `Admin Panel > Who Bought This Item Also Bought > Configuration`, expand **Display on Catalog Page** section.

When a category is chosen, all the products in the current category will be used to relate to other orders with the same status selected in Process Order with Status. The products appearing in those orders will be displayed in the Category Page in the quantity set in the field Number of products displayed in the Frontend 

![also bought on category page](https://cdn.mageplaza.com/media/general/4tdjW5y.png)


* In **Enable** field: Select "Yes" to enable and No to disable module in the Category Page.
* In **Title of Block** field
  * Enter the name of suggested-products block displayed in the Product Page
  * The Block will be named Who Bought This Item Also Bought by default.
  * If you leave it empty, the block will be nameless
* In **Position** field:
  * **At the top of the page**: Displays the block at the top of the category page (under the BreadCrumbs and above products’ images)
  * **At the bottom of the page**: Displays the block at the bottom of the page (under all the products and above the Footer)
* In **Layout**: Choose the layout of suggested items in the Category Page
  * **Product Slider**: Suggested products will be displayed in one line only, and all items will slip to the left in a period of time.
  * **Multiple Lines**: Suggested products will be displayed in a grid, with 5 items per line.
* In **Show List**: Allow multiple selections
  * **Price**: Allows displaying price under a product image
  * **Add to Cart**: Allows customers to add an item to their carts without showing the details
  * **Review**: Allows showing the product’s rating and leading customers to the Review section of the product when the Review button is clicked.
  * **Add to Wish List & Add to Compare**: Displays the Add to Wish List and  Add to Compare buttons. When these buttons are clicked, the item will show up in the Wish List and Comparison List

![sample of who bought this item also bought on category page](https://cdn.mageplaza.com/media/general/QUrsuqP.png)

### 2.4. Display on Cart Page

Go to `Admin Panel > Who Bought This Item Also Bought > Configuration`, select **Display on Cart Page** section.

After adding to cart, customers go to View and Edit Cart. In this page, all the products in their cart will be used to relate to other orders with the same status selected in Process Order with Status. The products appearing in those orders will be displayed in the Cart Page in the quantity set in the field Number of products displayed in the Frontend


![display on cart page](https://cdn.mageplaza.com/media/general/l5ibZXL.png)


* In **Enable** field: Select "Yes" to enable and No to disable module in the Cart Page.
* In **Title of Block** field: 
  * Enter the name of suggested-products block displayed in the Cart Page.
  * The Block will be named Who Bought This Item Also Bought by default.
  * If you leave it empty, the block will be nameless 
* In **Position** field:
  * **At the top of the page**: The block will be displayed at the top of the Cart Page (under the heading, above products and the Summary block)
  * **At the bottom of the page**: The block will be displayed at the bottom of the Cart Page (under the Apply Coupon button and above the Footer)
* In **Layout** field: Choose the layout of suggested items in the Cart Page
  * **Product Slider**: Suggested products will be displayed in one line only, and all items will slip to the left in a certain period of time
  * **Multiple Lines**: Suggested products will be displayed in a grid, with 5 items per line.
* In **Show List** field: Allow multiple selections
  * **Price**: Allows displaying price under a product image
  * **Add to Cart**: Allows customers to add an item to their carts without showing the details
  * **Review**: Allows showing the product’s rating and leading customers to the Review section of the product when the Review button is clicked.
  * **Add to Wish List & Add to Compare**: Displays the Add to Wish List and  Add to Compare buttons. When these buttons are clicked, the item will show up in the Wish List and Comparison List

![also bought on cart page](https://cdn.mageplaza.com/media/general/bmIju5s.png)
