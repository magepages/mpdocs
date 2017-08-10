# Who Bought This Also Bought

**Who Bought This Item Also Bought** is a new extension developed by Mageplaza. By having this extension enabled, our team will help you provide your online store’s customers suggestions of the products related to the ones which they shoppers are viewing. This module is supposed to encourage buyers to keep purchasing other products in your online store. Hence, this satisfies your customers as well as boost your sales effectively


## How to Configure

Login to Magento Admin, go to Mageplaza > Who Bought This Item Also Bought > Configuration

![how to configure who bought this item also bought](https://i.imgur.com/ZkRdIen.png)

#### General Configuration

Go to `Admin Panel > Who Bought This Item Also Bought > Configuration`, select `General Configuration`

![configure](https://i.imgur.com/u4t58bE.png)

- `Enable Who Bought This Item Also Bought`: Select `Yes` to enable Mageplaza Who Bought This Item Also Bought Extension, select `No` to disable the extension
- `Process Order With Status`: Pick the order status which the module uses to suggest the products displayed in the block. You can select multiple order status at the same time.
- `Number of products displayed in the frontend`:
	- Enter a figure here to set the maximum number of suggested products displayed in the block
	- Leave empty or 0 to have all suggested products displayed in the block.

- `Reindex`
	- When the extension is enabled for the first time, or is switched from a disabled module to an enabled one, or when the selection(s) in Process Order with Status are changed, the RUN button must be clicked on.
	- Having the RUN button clicked on means that only orders with status chosen in Process Order with Status are enabled in the module.
	- If the RUN button is NOT clicked on, any order with formerly chosen status and latterly selected ones will be allowed in the module
	- If an online store has an excessive number of orders and products, to click the RUN button can cause …. for the site. In this case, the command line should be used to prevent negative impacts on the website.

#### Display on Product Page

Go to `Admin Panel > Who Bought This Item Also Bought > Configuration`, select `Display on Product Page`.

When a product is chosen, the item will be used to relate to other orders with the same status selected in Process Order with Status. The products appearing in those orders will be displayed in the Product Page in the quantity set in the field Number of products displayed in the Frontend 

![also bought on product page](https://i.imgur.com/Gd6soIY.png)

- `Enable`: Select Yes to enable and No to disable module in the Product Page
- `Title of Block`: Enter the name of suggested-products block displayed in the Product Page
	- The Block will be named Who Bought This Item Also Bought by default.
	- If you leave it empty, the block will be nameless
- `Position`: Choose the position at where you put the block in the Product page. There are two options:
	- At the top of the page
	- At the bottom of the page
- `Layout`: Choose the layout of suggested items in the Product Page
	- `Product Slider`: suggested products will be displayed in one line only, and all items will slip to the left in a certain period of time
	- `Multiple Lines`: suggested products will be displayed in a grid, with 5 items per line.

- `Show List`: Allow multiple selections
	- `Price`: Allows displaying price under a product image
	- `Add to Cart`: Product Allows customers to add an item to their carts without showing the details
	- `Review`: Allows showing the product’s rating and leading customers to the Review section of the product when the Review button is clicked.
	- `Add to Wish List & Add to Compare`: Displays the Add to Wish List and  Add to Compare buttons. When these buttons are clicked, the item will show up in the Wish List and Comparison List

#### Example of Who bought this item also bought

This example with the following configurations:

- `Layout`: Product slider
- `Position`: On the top of the page.
- `Show List`: Price, Add to cart, Review, Add to wishlist, Add to compare

![also bought frontend](https://i.imgur.com/JvR81o7.png)


#### Display on Category Page

Go to `Admin Panel > Who Bought This Item Also Bought > Configuration`, select `Display on Catalog Page`

When a category is chosen, all the products in the current category will be used to relate to other orders with the same status selected in Process Order with Status. The products appearing in those orders will be displayed in the Category Page in the quantity set in the field Number of products displayed in the Frontend 

![also bought on category page](https://i.imgur.com/4tdjW5y.png)


- `Enable`: Select Yes to enable and No to disable module in the Category Page
- `Title of Block`: Enter the name of suggested-products block displayed in the Product Page
	- The Block will be named Who Bought This Item Also Bought by default.
	- If you leave it empty, the block will be nameless
- `Position`:
	- `At the top of the page`: Displays the block at the top of the category page (under the BreadCrumbs and above products’ images)
	- `At the bottom of the page`: Displays the block at the bottom of the page (under all the products and above the Footer)
- `Layout`: Choose the layout of suggested items in the Category Page
	- `Product Slider`: suggested products will be displayed in one line only, and all items will slip to the left in a certain period of time
	- `Multiple Lines`: suggested products will be displayed in a grid, with 5 items per line.
- `Show List`: Allow multiple selections
	- `Price`: Allows displaying price under a product image
	- `Add to Cart`: Allows customers to add an item to their carts without showing the details
	- `Review`: Allows showing the product’s rating and leading customers to the Review section of the product when the Review button is clicked.
	- `Add to Wish List & Add to Compare`: Displays the Add to Wish List and  Add to Compare buttons. When these buttons are clicked, the item will show up in the Wish List and Comparison List

![sample of who bought this item also bought on category page](https://i.imgur.com/QUrsuqP.png)

#### Display on Cart Page

Go to `Admin Panel > Who Bought This Item Also Bought > Configuration`, select `Display on Cart Page`

After adding to cart, customers go to View and Edit Cart. In this page, all the products in their cart will be used to relate to other orders with the same status selected in Process Order with Status. The products appearing in those orders will be displayed in the Cart Page in the quantity set in the field Number of products displayed in the Frontend


![display on cart page](https://i.imgur.com/l5ibZXL.png)


- `Enable`: Select Yes to enable and No to disable module in the Cart Page
- `Title of Block`: Enter the name of suggested-products block displayed in the Cart Page
	- The Block will be named Who Bought This Item Also Bought by default.
	- If you leave it empty, the block will be nameless 
- `Position`:
	- `At the top of the page`: The block will be displayed at the top of the Cart Page (under the heading, above products and the Summary block)
	- `At the bottom of the page`: The block will be displayed at the bottom of the Cart Page (under the Apply Coupon button and above the Footer)
- `Layout`: Choose the layout of suggested items in the Cart Page
	- `Product Slider`: suggested products will be displayed in one line only, and all items will slip to the left in a certain period of time
	- `Multiple Lines`: suggested products will be displayed in a grid, with 5 items per line.
- `Show List`: Allow multiple selections
	- `Price`: Allows displaying price under a product image
	- `Add to Cart`: Allows customers to add an item to their carts without showing the details
	- `Review`: Allows showing the product’s rating and leading customers to the Review section of the product when the Review button is clicked.
	- `Add to Wish List & Add to Compare`: Displays the Add to Wish List and  Add to Compare buttons. When these buttons are clicked, the item will show up in the Wish List and Comparison List


![also bought on cart page](https://i.imgur.com/bmIju5s.png)