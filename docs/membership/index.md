# Membership

## Overview

[Mageplaza Membership extension](https://www.mageplaza.com/magento-2-membership/) will create a customer group management system based on customer group. Customers can purchase the right to join the customer group by acquiring membership products. This encourages customers to buy more with their appealing offers corresponding with their membership levels. As a member of your store, customers will be able to enjoy other benefits that the outsiders do not have. In particular, there will be an expiration for each membership. When it expires, it automatically switches to the default customer group or the admin can configure the transfer of the customer group.


## How to use

- **Product View & Item**: Display Membership product information on the **Product View Page**


- **Customer Dashboard**: This section will display the information and payment history of the membership products purchased by the customer. You can use the link on the Customer Dashboard above toplink. After expiration, the dashboard customer will still display the expire status of the membership with the "Re New" button.

- **Membership Page**: Display membership products at the Membership page


## How to configure

### 1. Configuration

Login to the **Magento Admin**, choose `Marketing> Membership> Configuration`.

#### 1.1. General

- **Enable**: Select **Yes** to enable the module's features.
- **Default Group**: Select customer group so that when the Membership expires, the customer will be transferred back to this default customer group. With the following customer groups:
  - General
  - Wholesale
  - Retail
- **Allow Override Membership**:
  - If you choose **Yes** so that when customers are membership, you can buy another membership product and buy a link to buy membership. And buy a new product at the customer dashboard.
  - Selecting **No**, customers in certain membership cannot buy products from other membership.
- **Allow membership Upgrade**:
  - If **Yes** is selected, the current membership upgrade will be allowed when it is not expired or expired and the membership dashboard upgrade link is available. Show more fields:
- **Upgrading Cost**: Choose the type of cost upgrade when you can upgrade your current membership:
- **Full Price**: When upgrading membership, the price will be calculated according to new membership and not deducted even if the old membership has not expired.
- **Deducted by Remaining Membership Duration**: When upgrading membership, the price will be deducted by the old membership if membership has not expired. Example: The old Membership you bought has a duration of 2 months, the price is $ 60. After 1 month of membership use, you can pack more membership with more convenience and benefits, ... you want to buy another membership but the old membership hasn't expired. When buying another membership, you can deduct the amount of the remaining time of the old membership.
- If you select **No**, you will not be allowed to upgrade membership if the membership is not expired or has expired.
- Show link membership dashboard on toplink: If you select **Yes**, the link membership dashboard will be displayed on toplink.
- After place order, change membership when: After buying membership, the customer applied that membership when:
- **Invoice created**: customer applies that membership when Invoice created (order created invoice). If not completed Invoice created will not be able to apply that membership.
- **Order complete**: customer applies that membership when Order complete (invoice + shipment). If you don't complete Order complete, you won't be able to apply that membership.



#### 1.2. Membership Page

- **Enable Membership Page**: Select **yes** to display the Membership page at the frontend and display 2 more Place membership page link on, Membership route.
- **Place membership page link on**: Select the membership page link above:
  - **Menu**: display membership page link on the menu bar.
  - **Footer Links**: displays membership page link in Footer Links.
- **Membership route**:
  - Enter a name for the membership page.
  - If left blank, the default is "Membership".
- **Snippet**: Can change the interface design for membership page with:
  - CMS
  - Phtml
  - Layout
  
### 2. Manage Membership

Login to the **Magento Admin**, choose `Marketing> Membership> Manage Membership`.

#### 2.1. Membership Grid


- This section records the membership creation information including Membership Name, Level, Status, No. Member, Customer Groups, Is Feature,...
- You can choose to edit membership and delete information to delete membership.
- Choose Change Status to change Active/Inactive status of membership.
- Filter the fields of information you want to search.

#### 2.2. Edit Membership
##### 2.2.1. General

- **Customer Group**: Select customer group for membership:
  - General
  - Wholesale
  - Retail
- **Status**: Select the status of membership with:
  - **Inactive**: membership will not work and does not appear in Frontend.
  - **Active**: Membership works and does membership on the frontend.
- **Level**:
  - Enter the level of membership for membership.
  - If left blank, the default is 0.
- **Default Duration**: Select the duration for membership to be calculated according to:
  - Day
  - Month
  - Year
- **Duration No.**:
  - Enter the number in the Duration No. field. to determine the duration of that membership.
  - If left blank, the default is 0.

##### 2.2.2. Display Config

- **Membership Name**:
  - Enter a name for membership. With each store view, you can name a membership replacement in the frontend.
  - If left blank, it will default to the value of the Default field.
  
- **Image**: Click Choose file to upload image file for membership. If left blank, use the default image.
- **Background Color**: Choose color for background membership.
- **Default Product**: Choose products to apply to membership, this product will be used to add to cart on page membership.
- **Benefit**:
  - Click Add Option to import premium content, benefit from buying membership and will be displayed in membership in addition to the frontend. You can enter your own benefits for each store view. If left blank will default to benefits.
  - With the benefits you want to display, click Delete.
- **Is Feature**: Choose "yes" to use all features for membership.
- **Sort Order**:
- Enter the number for the Sort Order field. If left blank, the default is 0.
- Smaller numbers will prioritize pre-arranged membership page.

##### 2.2.3. Members

This section records the information, status and duration of membership packages that customers use including information according to **Customer, Status, Start Date, End Date fields**.

##### 2.2.4. History

Here save the information and payment history of customers when buying membership including information according to **Customer, Status, Action fields, Pay Amount, Created Date**

### 3. Manage History

This Manage History section is like History in Manage Membership and is separated from it. It stores customer information and payment history when purchasing membership.


### 4. Membership Product

Login to the **Magento Admin**, choose `Catalog> Products`, click **Add New** to Create Membership Product.

- **Enable Product**: Select **Yes** to turn on product display in addition to the frontend.
- **Product Name**: Enter a name for the membership product. The required field must not be blank.
- **SKU**: Enter SKU for membership product. The required field must not be blank.
- **Membership**: Select membership will display membership products on the membership site for the selected membership.
- **Duration**: Choose the duration and price corresponding to membership membership:
- **Default**: Apply the product price of membership to the selected Duration Duration. Show more fields Price:
- **Price**: Enter the price into the Price field. This price will be applied according to the duration of membership products.
- **Permanent**: Apply membership price permanently with selected price. When the time is up, it will still display that price. Show more fields Price:
- **Price**: Enter the price into the Price field. This price will be applied permanently to membership products.
- **Custom**: Show more Duration, No., Price schools to enter each time and price separately when customers buy membership products.
- **Customer edit**
  - Login to the **Magento Admin**, choose `Customers> All Customers> Add New Customer/Edit Customer`.
  - Here Admin can change customer group manually and the customer in group will be assigned to the default duration of that membership.    - Upon expiration (in hours) will expire membership and pay the customer to the default group you configured at Configuration.
