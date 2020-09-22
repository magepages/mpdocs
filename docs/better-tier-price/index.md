# Better Tier Price

## Overview

Magento Tier Price allows salespeople to create certain discounts according to quantity for each product, encouraging customers to buy more products. With the [Mageplaza Better Tier Price Extension](https://www.mageplaza.com/magento-2-better-tier-price/), admin can make available Tier Price Groups to reduce setting time for each product. Besides, admin can target individual customers by creating Tier Price by each customer. Also, admin can install Mass Price Tier for multiple products at the same time by using mass action Update Attribute on the Products Grid page.


## How to download and install

- [Download Mageplaza Better Tier Price](https://www.mageplaza.com/magento-2-better-tier-price/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)

## How to Use

With this extension, Customer can perform the following actions:

#### Set Tier Price for each product at fixed price, discount by percentage and fixed discount

![](https://i.imgur.com/glw3IsZ.png)

#### Set the default Group Tier for products

![](https://i.imgur.com/7SZ5heO.png)

#### Set Price Tier for each specific customer

![](https://i.imgur.com/5LOy4Xs.png)

#### Support Tier Price setting for multiple products via mass action

![](https://i.imgur.com/7Ho1PDV.png)

## How to Configure

From the **Admin panel**, go to `Store > Configuration > Mageplaza Extensions > Better Tier Price`

### 1. Configuration

#### 1.1. General Tab

![](https://i.imgur.com/s1sd02M.png)


- **Enable**: Select **Yes** to enable the extension.
- **Enable Pricing Table**: Display Tier Price on **Product View** page in table including information of **Quantity, Save Amount, Price Per Item**.
- **Auto Qty Change**: If you choose **Yes**, after selecting an option from the **Tier Price table**, the number of products in the Qty box at the **Product View** page will automatically change according to that choice. This field is only applicable when **Enable Pricing Table = Yes**.
- **Only Show Optimal Options**: If you choose **Yes**, show only **Tier Prices** that can be applied on **Product View**.
- **Example**: For product A, which has a price of $ 10, Tier Price with option 1 is a 50% discount when buying 5 products and option 2 is a $ 2 discount (equivalent to a 20% discount) when buying 10 products. On the Product View page, only option 1 will be displayed.
- **Apply for Specific Customers**: If you choose **Yes**, Tier Price will be applied to each customer according to admin settings in the backend.
- **Title**: Set the title for the **Tier Price table** on the **Product View** page.

### 2. Configure Tier Price

#### 2.1 Setting for each product

![](https://i.imgur.com/YF9uTdC.png)


- Go to `Catalog > Products > Edit products > Advanced Pricing`
- **Tier Group**: The default Tier Tier, if selected, the product will automatically apply Tier Price in that Group.
- You can **Add New Tier Group or Edit Current Tier Group**. Clicking the **Add New / Edit** button next to the **Tier Group** field will display a popup containing the **New Add/Edit Tier Group** form. At this form, admin can set the name of the desired Tier Price option group or delete that Tier Group.

![](https://i.imgur.com/bNt6m5R.png)

- **Tier Price (s)**: install Tier Price according to Qty and desired price. For prices with 3 options: **Fixed Price, Discount Percent, Discount Amount**.
- **Tier Price for Specific Customer (s)**: Install Tier Price for each customer. When clicking on the **Customer field** will display a popup containing customer grid for admin to select the desired customer.

#### 2.2 Setting for multiple products

![](https://i.imgur.com/Z6S6sNx.png)

At **Products Grid**, admin can set Tier Price for **multiple products** at the same time by selecting the desired product, then selecting **mass action Update Attributes**, on the **Tier Price** tab. At this tab will display the same Tier Price setting as when creating Tier Price for each product above.

### 3. Rest API

Mageplaza Better Tier Price extension allows customers to use Rest APi to get information of the extension in product. 

See details request Rest API supported by Mageplaza [here](https://documenter.getpostman.com/view/10589000/T1LFpApq?version=latest).  

View Rest API Guidelines for Magento 2 [here](https://devdocs.magento.com/guides/v2.4/rest/bk-rest.html).

View Rest API Guidelines for Magento 2 [here](https://devdocs.magento.com/guides/v2.4/get-started/authentication/gs-authentication-token.html).

### 4. Frontend

![](https://i.imgur.com/U8FdCSf.png)

![](https://i.imgur.com/LK14tEC.png)

![](https://i.imgur.com/MYw2RO2.png)
