# Gift Wrap Extension User Guide


## Overview

In order to improve consumption of products, especially during important holidays and days for customers, Mageplaza developed Gift Wrap extension. Gift Wrap allows to create / delete / edit / classify attractive gift packages to serve customers, view and manage order information with gift packages. And of course, customers can freely choose suitable gift packages. In addition, customers can add cards, add messages in the card to the recipient. The Gift Wrap utility is fully compatible with Mageplaza's One Checkout Step.

## How to download and install

- [Download Mageplaza Order Archive](https://www.mageplaza.com/magento-2-order-archive/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


## How to use

### 1. For Customer

- Customer can choose/ change the gift package.
- Send messages to recipients.

![Imgur](https://i.imgur.com/5sNvX1y.png)

2. Admin

- Create/ Edit gift package catalog
- Create/ Edit gift wrapping form
- Report on the product number, the package form of each cart


## How to Configuration

From the **Admin Panel**, go to `Marketing > Gift Wrap > Configuration`

![Imgur](https://i.imgur.com/WXZWvF4.png)



### 1. Configuration

From the **Admin Panel**, go to **Configuration**, select **General**

![Imgur](https://i.imgur.com/D4MeFLa.gif)

- **Enable**: Select `Yes` to turn on the Module.
- **Add Gift Wrap Button Label**: Choose the label for Gift Wrap button, default label is **Add Gift Wrap**.
- **Change Gift Wrap Button Label**: Choose the label for selected gift wrap, the default label is **Change Your Gift Wrap**.
- **Tax Class**: Select **Tax Class** that customers need to pay.

[Imgur](https://i.imgur.com/FgxMx8s.png)

- **Gift Wrap Icon**:
  - Click **Choose file** to select the icon displayed infront of **Add Gift Wrap** label in Frontend.
  - Only accept jpg, png and gif files
  
- **Gift Wrap Type**: 
  - **Item Only**: applicable to each type of product, displaying an extra field **Gift Wrap on Product View Page**
    - **Gift Wrap on Product View Page**: Choose "Yes" to wrap the gift on the **Product Detail Page**
    - For example: Cart has 3 products, customers can choose each type of Gift Wrap for each product
    
    ![Imgur](https://i.imgur.com/yIwLRR2.png)

  - **Per Cart**: Applies one Gift Wrap type to all products in the shopping cart, displaying the extra field **Notice for Customer**
    - **Notice for Customer**: Displays a notification to the customer, default message is `All items will be wrapped in one gift box by default`
    - For example: Cart has 3 products, customers can only choose one type of Gift Wrap to apply to all Product in Cart
    
    
    ![Imgur](https://i.imgur.com/YZlybUd.png)

- **Both**:
- Apply for each certain Product and for the shopping cart.
- For example: Cart has 3 Product, Customer can choose a Gift Wrap type, apply to package for all Product in Cart, or choose separately Gift Wrap for each Product
- Show both fields above (Gift Wrap on Product View Page and Gift Wrap on Product View Page)

- **Enable Gift Message**: Select "Yes" to display the message frame, display 2 more fields: Max Characters, Gift Message Fee.
- **Max Characters**: limit the maximum number of characters of the message, the default is 120.
- **Gift Message Fee**: set up the writing fee, default to 0.


### 2. Manage Category

From the **Admin Panel**, go to `Marketing > Gift Wrap > Manage Category`

#### 2.1. Manage Category Grid



- This is where the gift package catalog is displayed.
- From Manage Category, admin can capture basic information of Categories such as ID, Name, Status, Customer Groups, Store View, Sort Order, Action.
- Action:
- Delete: Delete the information on Manage Category page.
- Change Status: Change the status of the selected Categories.
- Edit: Go to the Category information editing page.
- In addition, admin can Filter, Change Store View, Hide / Display Columns.

- This is where the gift package catalog is displayed.
- From **Manage Category**, admin can capture basic information of Gift Wrap such as ID, Name, Status, Price Type, Amount, Image, Category, Sort Order, Action.
- **Action**:
  - **Delete**: Delete information on **Manage Gift Wrappers** page
  - **Change Status**: Change the status of the selected Gift Wrap.
  - **Edit**: Go to the **Category information editing page.
- In addition, admin can **Filter, Change Store View, Hide/Display Columns**.


#### 2.2. Create/Edit Category

From the **Admin Panel**, go to `Marketing> Gift Wrap > Manage Category > Create New Category/Edit`

![Imgur](https://i.imgur.com/z1Y0aUV.png)

- **Name**: Enter a name for the Category.
- **Status**: Select **Enable** to display the Category in Frontend.
- **Description**: Enter the description of the Category.
- **Store View**: Select a storeview for category.
- **Customer Group**: Select the customer group for which the Category will display.
- **Sort Order**: default is 0, the Category with smaller Sort Order will be displayed first at Frontend.


### 3. Manage GiftWrap

From the Admin Panel, go to `Marketing > Gift Wrap > Manage Gift Wrappers`

#### 3.1. Manage Gift Wrap Grid

![Imgur](https://i.imgur.com/ALNlEv5.png)

- This is where the gift package catalog is displayed.
- From **Manage Gift Wrappers**, admin can capture basic information of Gift Wrap such as ID, Name, Status, Price Type, Amount, Image, Category, Sort Order, Action.
- **Action**:
  - **Delete**: Delete information on **Manage Gift Wrappers** page
  - **Change Status**: Change the status of the selected Gift Wrap.
  - **Edit**: Go to the **Category information editing page.
- In addition, admin can **Filter, Change Store View, Hide/Display Columns**.


#### 3.2. Create/Edit Gift Wrap

From the **Admin Panel**, go to `Marketing> Gift Wrap > Manage Gift Wrap > Create New Gift Wrap`

![Imgur](https://i.imgur.com/51yao8Y.png)

- **Name**: Enter a name for Gift Wrap.
- **Status**: Select **Enable** to display Gift Wrap in Frontend.
- **Price**: Choose the type of gift price calculation:
  - **Fixed**: Calculate the price basing on cart total.
  - **By Qty**: Calculate price by product quantity. For example, the number of products is 2, get the price $ multiplied by 2
- **Amount**: Enter the gift package price.
- **Description**: Enter the description of Gift Wrap.
- **Image**: Select the image displayed in Frontend.
- **Category**: Select the gift package category.
- **Sort Order**: default to 0, Gift Wrap with smaller Sort Order will be displayed first at Frontend.


### 4. Manage History

From **Admin panel**, go to `Marketing > Gift Wrap > Manage History`

![Imgur](https://i.imgur.com/SH4podK.png)
