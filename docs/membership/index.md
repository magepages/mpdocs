# Membership

## Overview

[Mageplaza Membership extension](https://www.mageplaza.com/magento-2-membership/) will create a customer group management system based on customer group. Customers can purchase the right to join the customer group by acquiring membership products. This encourages customers to buy more with their appealing offers corresponding with their membership levels. As a member of your store, customers will be able to enjoy other benefits that the outsiders do not have. In particular, there will be an expiration for each membership. When it expires, it automatically switches to the default customer group or the admin can configure the transfer of the customer group.


## How to use

- **Product View & Item**: Display information of Membership product on the **Product View Page**

![Imgur](https://i.imgur.com/l6GbDi8.png)


- **Membership Dashboard**: This section will display the information and payment history of the membership purchased by the customer. You can use the link **Membership Dashboard** at toplink. After memebership is expired, the Membership Dashboard will display the expire status of the membership with the **Re New** button. And the **Upgrade** button is displayed when the membership has not expired. You can click the **Upgrade** button to upgrade the membership package at a better price and offer, and the site only has membership levels higher than the current membership.

![Imgur](https://i.imgur.com/gU3PJEa.png)

- **Membership Page**: Display memberships at the **Membership page** if they had ordered the default products

![Imgur](https://i.imgur.com/ZNUcbX2.png)


## How to configure

### 1. Configuration

Login to the **Magento Admin**, choose `Marketing> Membership> Configuration`.

![Imgur](https://i.imgur.com/W65mF0n.gif)

#### 1.1. General

![Imgur](https://i.imgur.com/o7qPv7p.png)

- **Enable**: Select **Yes** to enable the module's features.

- **Default Group**: Select default customer group so that when the Membership expires, the customer will be transferred back to this default customer group. With the following customer group options:
  - General
  - Wholesale
  - Retail
  
- **Allow Overriding Membership**:
  - If you choose **Yes** so that when customers had bought and used membership, they can buy another membership product
  - Selecting **No**, customers in certain membership cannot buy products from other membership types. They only can buy other memebership products if their current memberships are exprired.
  
  ![Imgur](https://i.imgur.com/A3xXY6v.png)
  
- **Allow Upgrading Membership**:
  - If **Yes** is selected, the current membership will be allowed to upgrade even when it is not expired. Showing a **upgrade** button on **My Membership** at frontend. You can click the **Upgrade** button to upgrade the membership package at a better price and offer, and the site only has membership levels higher than the current membership. Show extra fields as following: 
  
    - **Upgrading Cost**: Choose the type of cost upgrade when customer can upgrade your current membership:
      - **Full Price**: When upgrading membership, the price will be calculated according to new membership price and not be discounted even if the old membership has not expired.
      - **Deducted by Remaining Membership Duration**: When upgrading membership, the price will be deducted by the old membership if membership has not expired. Example: The old Membership you bought has a duration of 2 months, the price is $60. After 1 month of membership use, you want to use another membership which cost $100 but the old membership hasn't expired. When buying this new membership, your membership price is deducted by the amount of the remaining time of the old membership (which means that you only have to pay $70)
      
  - If you select **No**, you will not be allowed to upgrade membership if the membership is not expired.

**Note**: The deduction time will be converted to seconds and rounded up to the hour unit. Example: Your membership is 2 hours long and has been used for several minutes. Time will be rounded up, you will only be deducted 1 hour. 

- **Show Membership Dashboard Link at Toplink**: If you select **Yes**, the link membership dashboard will be displayed on toplink.

![Imgur](https://i.imgur.com/edg3RTy.png)

- **After Order Placed, Activate Membership When**: After buying membership product, the customer can apply that membership when:
  - **Invoice created**: customer applies that membership when Invoice created (order is created with invoice). If not Invoice is not created completely, membership will not be applied. For example: when customers buy one membership product and 1 non-vertual product ( ex: Joust Duffle Bag). Membership only be applied when customers place the order and invoice is created.  
  - **Order complete**: customer applies that membership when Order complete (invoice and shipment are created). If not, you won't be able to apply that membership. For example, when customers buy one membership product and 1 non-vertual product ( ex: Joust Duffle Bag). Membership only be applied when customers place the order and invoice as well as shipment is generated.  



#### 1.2. Membership Page

![Imgur](https://i.imgur.com/DuwBjqn.png)

- **Enable**: Select **yes** to display the Membership page at the frontend and display 2 more **Place membership page link on** and **Membership route**.
- **Place Membership Page Link on**: Select the membership page link displayed on:
  - **Menu**: display membership page link on the menu bar.
  
  ![Imgur](https://i.imgur.com/kgSBGJD.png)

  - **Footer Links**: displays membership page link on Footer Links.
  
  ![Imgur](https://i.imgur.com/8CZcGcG.png)
  
- **Membership route**:
  - Enter a route for the membership page.
  - If left blank, the default is "Membership".
  
  !https://i.imgur.com/njhPp1M.png
  
- **Snippet Code**: Can add the following code to insert membership page anywhere you want:
  
  ![Imgur](https://i.imgur.com/bTW8tu5.png)
  
### 2. Manage Membership

Login to the **Magento Admin**, choose `Marketing> Membership> Manage Membership`.

#### 2.1. Membership Grid

![Imgur](https://i.imgur.com/TeaeaUU.png)

- This section records the membership creation information including Membership Name, Level, Status, No. Member, Customer Groups, Is Feature,...You can add membership when creating customer groups. To set customer group, please go to `Customers > Customer Group`, click **Add new customer group**
- You can choose to edit membership and delete information to delete membership.
- Choose Change Status to change Active/Inactive status of membership.
- Filter the fields of information you want to search.

#### 2.2. Edit Membership
##### 2.2.1. General

![Imgur](https://i.imgur.com/QDWXAsH.png)

- **Customer Group**: Select customer group for membership:
  - General
  - Wholesale
  - Retail
- **Status**: Select the status of membership with:
  - **Inactive**: membership will not work and does not appear in Frontend.
  - **Active**: Membership works and does membership on the frontend.
- **Level**:
  - Enter the level of membership. Only higher levers can be displayed on **Upgrade Page**
  - If left blank, the default level is 0.
- **Default Duration**: Select the duration for membership by:
  - Day
  - Month
  - Year
- **Duration No.**:
  - Enter the number in the **Duration No.** field to determine the duration of that membership. Only apply this configuration if you choose Duration at **Membership product** is in Default value. 
  - If left blank or insert "0", membership will be applied unlimited time. 

##### 2.2.2. Display Config

![Imgur](https://i.imgur.com/fFM0xpc.png)

- **Membership Name**:
  - Enter a name for membership. With each store view, you can name a membership replacement in the frontend.
  - If left blank, it will default to the value of the Admin field.
  
- **Image**: Click Choose file to upload image file for membership. If you cannot find the suitable image for specific memembership, it will left empty.

- **Background Color**: Choose color for background membership. 

![Imgur](https://i.imgur.com/2po2dbS.png)

- **Default Product**: Choose products to apply to membership, this product will be used to add to cart on page membership. If you do not choose default product, membership will not be shown on **Membership Page**

- **Benefit**:
  - Click **Add Option** to enter promotion programs, benefit from buying membership and thế benefits will be displayed in membership at frontend. You can enter specific benefits for each store view. 
  - With the benefits you want to remove, click **Delete**.
  
- **Is Feature**: Choose **yes** to use **Featured** for membership.

![Imgur](https://i.imgur.com/U3jHe99.png)

- **Sort Order**:
  - Enter the number for the Sort Order field. If left blank, the default is 0.
  - Membership with smaller numbers will prioritize pre-arranged in membership page.

##### 2.2.3. Members

This section records the information, status and duration of membership packages that customers use including **Customer, Status, Activation Date, Expiration Date** fields.

##### 2.2.4. History

Here save the information and payment history of customers when buying each membership, which including **Customer, Action, Pay Amount, Duration, Purchased Date, Activation Date**

![Imgur](https://i.imgur.com/ZIRIS6Y.png)

### 3. Manage History

The information in this **Manage History** section is similar to **History in Manage Membership** but here are all membership histories. It stores customer information and payment history when purchasing membership.

![Imgur](https://i.imgur.com/5t8vKno.png)


### 4. Membership Product

Login to the **Magento Admin**, choose `Catalog> Products`, click **Add Product** to create Membership Product

![Imgur](https://i.imgur.com/pnLyFy3.gif)

- **Enable Product**: Select **Yes** to display membership product at frontend.
- **Product Name**: Enter a name for the membership product. This is a required field.
- **SKU**: Enter SKU for membership product. This is a required field.
- **Membership**: Choosing membership to apply for membership products, if membership products are set up by Membership as a default product, it will not be possible to change membership.
- **Duration**: Choose the duration and price corresponding to membership products:
  - **Default**: Apply the product price of membership to the selected Duration Duration. Show more fields Price:
    - **Price**: Enter the price into the Price field. This price will be applied according to the duration of membership products.
  - **Permanent**: Apply membership price permanently with selected price. When the time is up, it will still display that price. Show more fields Price:
    - **Price**: Enter the price into the Price field. This price will be applied permanently to membership products.
  - **Custom**: Show more Duration, No., Price schools to enter each time and price separately when customers buy membership products.

**Note**: 
- To update the newest products, please run the following commands: `php bin/magento indexer:reindex`
- 

- **Customer edit**
  - Login to the **Magento Admin**, choose `Customers> All Customers> Add New Customer/Edit Customer`.
  - Here Admin can change customer group manually and the customer in group will be assigned to the default duration of that membership.    - Upon expiration (in hours) will expire membership and pay the customer to the default group you configured at Configuration.
