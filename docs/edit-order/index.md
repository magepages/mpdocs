# Edit Order

## Overview

Currently, Magento 2 only allows editing **Customer Information** and **Address Information** at the view order page. If you want to edit other information, you must go to the separated **Edit Order** page, then the old order will automatically be canceled and the new order will be created. Also, admin can only edit other information (besides Customer and Address Information) when Order is Pending.

With [Mageplaza Edit Order](https://www.mageplaza.com/magento-2-edit-order/), the editing becomes easier than ever. This extension allows admin to edit information right at the order view page via slide popup without having to switch to another link. Quick Edit action is integrated to be able to edit all order information at the same time. In addition, this module automatically recalculates shipping fee if the order information changes and returns the item to stock if changing the item in the order.

Mageplaza Edit Order is fully compatible with [Customer Order Number](https://www.mageplaza.com/magento-2-custom-order-number/), [Multiple Shipping Flat Rate](https://www.mageplaza.com/magento-2-multi-flat-rates-shipping/), [Shipping Restriction](https://www.mageplaza.com/magento-2-shipping-restrictions/), [Payment Restriction](https://www.mageplaza.com/magento-2-payment-restrictions/).


## How to download and install

- [Download Mageplaza Edit Order](https://www.mageplaza.com/magento-2-edit-order/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


## How to Configuration

From the Admin Panel, go to `Stores > Settings > Configuration > Mageplaza Extensions > Edit Order`

![](https://i.imgur.com/jRiI98I.png)

### 1. Configuration
From the Admin Panel, go to `Stores > Setting > Configuration > Mageplaza Extensions > Edit Order`, select **General**

![](https://i.imgur.com/e9MomvA.png)

- **Enable**: Select **Yes** to turn on the Module.
- **Enable Quick Edit**:
  - Select **Yes** to display the **Quick Edit** button at the **Edit Order** page.
  - When clicked, the slide popup display can edit all information at the **Edit Order** page.
- **Auto Recalculate Shipping Fee**: Select **Yes** to auto apply the new shipping amount after updating ordered items or shipping addresses.

### 2. Edit Order

#### 2.1. Edit Order Information

From the Admin Panel, go to `Sales> Orders > View Order > Edit Order`, choose **Edit Order Information**

![](https://i.imgur.com/WLg7rn6.png)

- **Order Number**:
  - Edit the order number, the same as the previous order.
  - Do not leave the field blank.
- **Order Date**:
  - Choose the date and time of order.
  - Do not leave the field blank.
- **Status Order**: You can only change the order status in the same state.


#### 2.2. Edit Customer Information
From the Admin Panel, go to `Sales > Orders > View Order > Edit Order`, select **Edit Customer**

![](https://i.imgur.com/eua4wGR.png)

- **Select**: Choose to edit customer information

![](https://i.imgur.com/j78zM64.png)

- **Customer Email**:
  - **Edit Current Customer**: show the customer email in text format, allowing you to edit customer emails.
  - **Change Customer**: show a input ext box with **Select** button. Click on **Select** to show a filterable grid to choose one existed account on your store.
  - Choose **Save Information** to save the information change in Customer account page. 
- Note: In case you choose `Select = Edit Current Customer` then tick to `Save Information to Customer` and change that customer' s email, the sytem will generate a new customer account. 
 
  ![](https://i.imgur.com/gz8G1Rx.png)
  
 Under the Edit Customer Information Grid shown the similar fields to Magento Edit/Add New Customer:
  
- **Associate to Website**: Choose the associate website with the edition of customer information. This is a required field. 
- **Name Prefix**: Edit the Prefix of customer name 
- **First Name**: Edit customer first name. This is a required field.
- **Middle Name/ Initial**: Edit customer middle/ initial name. 
- **Last Name**: Edit customer last name. Do not leave the field blank.
- **Name Suffix**: Edit the Suffix of customer name
- **Customer Group**: Choose a group for customers.
- **Date of Birth**: Fill in customer date of birth
- **Tax/VAT Number**: Edit the tax information
- **Gender**: Choose the customer gender
- **Send Welcome Email From**: Choose the Magento storeview from which to send welcome email to customers when their email adress is changed. 

![](https://i.imgur.com/0rA0a4e.png)

- **Vertex Customer Code**: Enter the code to connect to Vertex Cloud which is used to calculate tax and sales. 


#### 2.3. Edit Billing Address/ Edit Shipping Address

From the Admin Panel, go to `Sales> Orders > View Order > Edit Order`, select **Edit** at **Edit Billing Address/ Edit Shipping Address**

Display information same as Magento but Edit Order extension will show Billing and Shipping Addresses via slide popup right at that view order page.

![](https://i.imgur.com/vyPA0jx.png)

![](https://i.imgur.com/j2MvYzH.png)

#### 2.4. Edit Payment Method

From the Admin Panel, go to `Sales > Orders > View Order > Edit Order`, select **Edit** at **Payment Information**

![](https://i.imgur.com/hjjyWIP.png)

Choose the available payment method at your store.

#### 2.5. Edit Shipping Method

From the Admin Panel, go to `Sales > Orders > View Order > Edit Order`, select **Edit** in the **Shipping & Handling Information** section

![](https://i.imgur.com/s7Echvm.png)

Select the Shipping Method available at the store.

#### 2.6. Edit Items Ordered

From the Admin Panel, go to `Sales> Orders> View Order> Edit Order`, select **Edit** in the **Items Ordered** section

![](https://i.imgur.com/ttH923u.png)

- Choose **Custom Price** buttons if you want to update product prices.
- **Custom**:
  - **Percent**: Discount = percent of price.
  - **Fixed Amount**: Discount = value enter to the box below

- **Action**:
  - **Remove**: Remove the product from the shopping cart.

- To add products to cart, click `Add Products > Select products > Add Selected Product(s) to Order`:

- Note: When changing Qty, adding product, removing product, you always need to click the `Update Items and Quantities > Update`.

![](https://i.imgur.com/hbCzpw5.png)

#### 2.7. Quick Edit

From the Admin Panel, go to `Sales> Orders > View Order > Edit Order`, select **Quick Edit**


![](https://i.imgur.com/SzpTz6F.png)

**Edit order and customer information**

![](https://i.imgur.com/vqLeIhf.png)

**Edit Billing Address**

![](https://i.imgur.com/zKZ48IW.png)

**Edit Shipping Address**

![](https://i.imgur.com/k70hk3F.png)

**Edit Items Ordered**

![](https://i.imgur.com/h4gKAfK.png)

Quick edit allows editing all order information at the same time.


### 3. Grid

![](https://i.imgur.com/gWAgIxH.png)

#### 3.1. Manage Logs

From the Admin Panel, go to `Sales > Edit Order > Manage Logs`

![](https://i.imgur.com/uuq89d7.png)

- This is where the order information was edited.
- From **Manage Logs**, admin can capture basic information such as **ID, Editor, Order Number, Edited Field, Created Date, Action**.
- **Action**:
  - **View**: Redirect to Logs page to view edited orders before.
  - In addition, admin can filter, change store view, hide/ display columns.

#### 3.2. View Logs

From the Admin Panel, go to `Sales > Edit Order > Manage Logs`, select **View Logs**

![](https://i.imgur.com/nl2JglK.png)

![](https://i.imgur.com/Ptm8iAa.png)

![](https://i.imgur.com/Ag1IyLR.png)

### 4. Compatible

#### 4.1. Compatible with Customer Order Number

Order numbers will include both letters and numbers. It will be beneficial for the website, especially new websites, the number of orders is low which likely create higher reliability.

![](https://i.imgur.com/QJac1Dh.png)

#### 4.2. Compatible with Multiple Shipping Flat Rate

In addition to the Magento Shipping Method, when installing the module [Multiple Shipping Flat Rate](https://www.mageplaza.com/magento-2-multi-flat-rates-shipping/), you can create more Shipping Methods to help admin and customers have more options.

![](https://i.imgur.com/RRkX34Z.png)

#### 4.3. Compatible with Shipping Restriction

Creating the **show/ hide the Shipping rule** which is displayed in both the backend and frontend.

![](https://i.imgur.com/CQpaDiu.png)

#### 4.4. Compatible with Payment Restriction

Creating the **show/ hide the Payment rule** which is displayed in both the backend and frontend.

![](https://i.imgur.com/JhOW4Ev.png)

#### 4.5. Compatible with One Step Checkout

![](https://i.imgur.com/G4RGUJW.png)

