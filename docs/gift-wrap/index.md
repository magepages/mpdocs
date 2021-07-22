# Gift Wrap 


## Overview

In order to improve consumption of products, especially during important holidays and customers' special days, Mageplaza developed Gift Wrap extension. Gift Wrap allows to create/ delete/ edit/ classify attractive gift packages to serve customers. Admins can view and manage order information with gift packages. And of course, customers can freely choose suitable gift packages. In addition, customers can add cards with messages to the recipient. The Gift Wrap plugin is fully compatible with Mageplaza's One Step Checkout.

## How to download and install

- [Download Mageplaza Gift Wrap](https://www.mageplaza.com/magento-2-gift-wrap/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


## How to use

- Customers can choose the Gift Wrap and Postcard

![](https://i.imgur.com/9hpRD7p.png)

- Change Gift Wrap 

![](https://i.imgur.com/QsBW9F6.png)

- Send messages to recipients.

![](https://i.imgur.com/PjOcVzF.png)


## How to Configuration

From the **Admin Panel**, go to `Marketing > Gift Wrap > Configuration`

![](https://i.imgur.com/WXZWvF4.png)



### 1. Configuration

From the **Admin Panel**, go to `Marketing > Gift Wrap > Configuration`, select **General**

![](https://i.imgur.com/rCQlTUL.png)

- **Enable**: Select `Yes` to turn on the Module.
- **Add Gift Wrap Button Label**: Choose the label for Gift Wrap button, default label is **Add Gift Wrap**.
- **Change Gift Wrap Button Label**: Choose the label for selected gift wrap, the default label is **Change Your Gift Wrap**.
- **Tax Class**: Select **Tax Class** that customers need to pay.

![](https://i.imgur.com/FgxMx8s.png)

- **Gift Wrap Icon**:
  - Click **Choose file** to select the icon displayed infront of **Add Gift Wrap** label in Frontend. 
  - **Delete image**: Delete the icon chosen. 
  - Only accept jpg, png and gif files
  - Provie suggested icon for admin

![](https://i.imgur.com/krxXiyX.png)
  
- **Gift Wrap Type**: 
  - **Per Item**: applicable to each type of product, displaying an extra field **Gift Wrap on Product View Page**
    - **Gift Wrap on Product View Page**: Choose "Yes" to wrap the gift on the **Product Detail Page**
    - For example: Cart has 3 products, customers can choose each type of Gift Wrap and postcard for each product
    
    ![](https://i.imgur.com/TTRuY6u.png)
    
  - **Per Cart**: Applies one Gift Wrap type to all products in the shopping cart, displaying the extra field **Notice for Customer**
    - **Notice for Customer**: Displays a notification to the customer, default message is `All items will be wrapped in one gift box by default`
    - For example: Cart has 3 products, customers can only choose one type of Gift Wrap and postcard to apply to all Product in Cart
   
    
    ![](https://i.imgur.com/ZumMDT3.png)

- **Both**:
  - Apply for each certain Product and for the shopping cart as well .
  - For example: A Cart has 3 products, customer can choose a Gift Wrap/Postcard type, apply for all Product in Cart, or choose separately Gift Wrap/Postcard for each Product
  - Show both fields above (**Notice to Customers** and **Gift Wrap on Product View Page**)

![](https://i.imgur.com/I8pbf3x.png)

- **Enable Gift Note**: Select `Yes` to display the message box, display 2 more fields: **Max Characters, Gift Message Fee**.
- **Max Characters**: limit the maximum number of characters of the message, the default is 120. (This limitation applies to both Gift Note and Gift Message on the frontend)
- **Gift Note Fee**: set the message fee, default fee is 0.
- **Description**: add a description for the Gift Note field, displayed under the Gift Note in the frontend  
![](https://i.imgur.com/UPLulgS.png) 

- **Show Gift Note Under Product On**: Choose to show gift message under porduct on the following pages: 

  - **Shopping Cart Page**
 
![](https://i.imgur.com/Dc2xCYk.png)

  - **Checkout Page**
  
  ![](https://i.imgur.com/OvY1nji.png)
  
  - **Mageplaza One Step Checkout**
  
  ![](https://i.imgur.com/kn31IHY.png)
  
- Show the Mageplaza One Step Checkout option when installing Mageplaza's One Step Checkout extension. With this module, customers can go through 6 steps of payment in one page, making it convenient for them to process with checkout.
- **Show Report Gift Wrappers**: Select Yes to allow the report to be displayed in Manage Gift Wrappers
- **Button Synchronize Wrap Histories**: in case the orders containing Gift wrap were created before the **Show Report Gift Wrappers** feature was updated, you need to click the **Synchronize Wrap Histories** button to synchronize the data for the report.

### 2. Manage Wrap Categories

From the **Admin Panel**, go to `Marketing > Gift Wrap > Manage Category`

#### 2.1. Manage Category Grid

![](https://i.imgur.com/i3fy8yP.png)

- This is where the gift package catalog is displayed.
- From **Manage Category**, admin can capture basic information of Gift Wrap such as ID, Name, Status, Price Type, Amount, Image, Category, Sort Order, Action.
- **Action**:
  - **Delete**: Delete information on **Manage Category Page** 
  - **Change Status**: Change the status of the selected Categories.
  - **Edit**: Redirect to the **Edit Category page** created before. 
- In addition, admin can **Filter, Change Store View, Hide/Display Columns**.


#### 2.2. Create/Edit Category

From the **Admin Panel**, go to `Marketing> Gift Wrap > Manage Category > Create New Category/Edit`

![](https://i.imgur.com/z1Y0aUV.png)

- **Name**: Enter a name for the Category. This is a required field.
- **Status**: Select **Enable** to display the Category in Frontend.
- **Description**: Enter the description of the Category.
- **Store View(s)**: Select a storeview for category shown at frontend. You can select multiple storeviews. 
- **Customer Group(s)**: Select the customer group for which the Category will display. You can select multiple customer groups. 
- **Sort Order**: default is 0, the Category with smaller Sort Order will be displayed first at Frontend.


### 3. Manage Gift Wrappers

From the Admin Panel, go to `Marketing > Gift Wrap > Manage Gift Wrappers`

#### 3.1. Manage Gift Wrappers Grid

![](https://i.imgur.com/dewIVcx.gif)

- This is where the gift wrap catalog is displayed
- **Report**: show Top Gift Wrap with the highest Total Revenue (display up to 30 gift wrap) and Top Postcard with the highest Total Revenue (display up to 30 postcards)
- From **Manage Gift Wrappers**, admin can capture basic information of Gift Wrap such as ID, Name, Status, Price Type, Amount, Image, Category, Sort Order, Action.
- **Action**:
  - **Delete**: Delete information on **Manage Gift Wrappers** page
  - **Change Status**: Change the status of the selected Gift Wrap/Postcard.
  - **Edit**: Redirect to the **Edit Gift Wrap/Postcard page** created before. 
- In addition, admin can **Filter, Change Store View, Hide/Display Columns**.


#### 3.2. Create/Edit Gift Wrap

From the **Admin Panel**, go to `Marketing> Gift Wrap > Manage Gift Wrap > Create New Gift Wrap`

![](https://i.imgur.com/YW2UDzH.png)

- **Name**: Enter a name for Gift Wrap. This is a required field. 
- **Status**: Select **Enable** to display Gift Wrap in Frontend.
- **Price**: Choose the type of gift price calculation:
  - **Fixed**: Calculate the price basing on cart total.
  - **By Qty**: Calculate price by product quantity. For example, the number of products is 2, get the price $ multiplied by 2
- **Amount**: Enter the gift package price.
- **Description**: Enter the description shown under Gift Wrap.

![](https://i.imgur.com/A1zETo6.png)


- **Image**: Select the image displayed in Frontend.
- **Quantity Limit**: limit the number of products that can be wrapped with one type of gift wrap per order.
- **Category**: Select the gift package category.
- **Sort Order**: default to 0, Gift Wrap with smaller Sort Order will be displayed first at Frontend.

### 3.3 Create/Edit Postcard 

From the Admin Panel, go to `Marketing > Gift Wrap > Manage Gift Wrap > Create New Postcard`

![](https://i.imgur.com/tuQw5Dy.png)

- **Name**: Enter a name for the Postcard, a required field
- **Status**: Select “Enable” to display Postcard in Frontend.
- **Price**: Select the type of gift wrapping price:
  - **Fixed**: Calculate the price according to the whole cart.
  - **By Qty**: Calculated according to the number of products. For example, the number of products is 2, multiply the price of $ by 2.
- **Amount**: Enter the package price.
- **Description**: Enter the description of the Postcard, the description will be displayed below the Postcard

![](https://i.imgur.com/oVFJcq3.png)

- **Image**: Select the image to display in the Frontend.
- **Category**: Select a gift wrapping category.
- **Sort Order**: default is 0, Postcards with smaller Sort Order numbers will be displayed first at Frontend.

### 4. Manage Wrapping Orders

From **Admin panel**, go to `Marketing > Gift Wrap > Manage History`

![](https://i.imgur.com/N6LAyx0.png)

- Here is the storage of the Gift Wrap products and messages that customers has ordered. 
- Admin can Filter, Change Store View, Hide/Show Columns or download information table in csv and xml file.

### 5. API

Mageplaza's Gift Wrap extension supports the use of the **Rest API** to add Gift Wrap data then allow the creation, classification of gift packages. Also, through the Rest API, Magento stores can view, delete and manage gift wrap order information.
- Details can be viewed [here](https://documenter.getpostman.com/view/5187684/SzKSTKv8?version=latest).
- Instructions for creating Integration tokens [here](https://devdocs.magento.com/guides/v2.3/get-started/authentication/gs-authentication-token.html).

### 6. GraphQL

Run the following command in Magento 2 root folder:

```
composer require mageplaza/module-gift-wrap-graphql
php bin/magento setup:upgrade
php bin/magento setup:static-content:deploy
```

With Gift Wrap extension developed by Mageplaza, admins can get Gift Wrap information via GraphQL.

To start working with **Gift Wrap GraphQL** in Magento, you need to:

- Use Magento 2.3.x. Return your site to developer mode
- View supported request GraphQL <a href='https://documenter.getpostman.com/view/5187684/SzKTuyMH?version=latest' target='_blank' rel='nofollow'>here</a>
