# Who Viewed This Also Viewed

## Overview

Customers are more likely to make purchasing decisions when they see a product that other customers have seen. [Mageplaza Who Viewed This Also Viewed](https://www.mageplaza.com/magento-2-who-viewed-this-also-viewed/) extension provides an excellent solution for the owner to allow the most relevant product to be displayed on the Product Detail Page. By smart algorithms, the most viewed products will be automatically updated and proposed to customers. Thereby bring an amazing shopping experience for customers, while increasing revenue for store owners.

## How to download and install

- [Download Mageplaza Who Viewed This Also Viewed](https://www.mageplaza.com/magento-2-who-viewed-this-also-viewed/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


## How to use

- Products applied to this module is set by admin based on both **Product Types** and **Categories** that they belong to.

![](https://i.imgur.com/57vMSIY.png)

- This extension supports the recommendation of the most viewed products at the Product Detail page
  - **At varous positions**:
    - Top of Content
    - Bottom of Content
    - Replace Related Products
    - Before Related Products
    - After Related Products
    - Replace Up-sale Products
    - Before Up-sale Products
    - After Up-sale Products
  - **Select way to display the block**:
    - Grid
    - Slider
  - **Based on many criteria**:
    - With higher price 
    - In stock
    - In the same category
  - **Sort by**:
    - Name
    - Price
    - Relevant
    - Stock Qty
  - **Add the extra information**:
    - Add to Cart button
    - Add to Wish list button
    - Add to Compare button
    - Review Information


## How to Configure
### 1. Configuration
From the **Admin panel**, go to `Stores> Configuration> Mageplaza> Who viewed this also viewed`


![](https://i.imgur.com/a9aEzWb.png)


- Select **Enable = Yes** to enable the module
- **Block Title**:
  - Name the Block which will be displayed in Frontend
  - If left blank, the default title is `Who viewed this item also viewed`
- **Apply for**: Select **Product Detail Page** which can show the **Who viewed this also viewed block**. The block can only be displayed on the Product Detail pages of the products that meet both the **Product Type** and **Category** selected by the Admin
  - Admin can choose multiple options at Product Types and Categories
- **How to show**: there are 2 ways to display blocks including:
  - **AJAX Display**: `Who viewed this also viewed` block is loaded after the page has finished loading and will need a period to display in Frontend. This option will be good for the page loading speed
  - **Block Display**: `Who viewed this also viewed` block will be loaded when loading the page and displayed as soon as the page is finished loading. This option helps improve SEO for the page
- **Display Position**: Choose the position to display the block

![](https://i.imgur.com/inSmNw4.png)

  - **Top of Content**: Block is displayed above the Content of Product Page
  - **Bottom of Content**: Block is shown below the Content of Product Page
  - **Replace Related Products**: Block replaces the default Related Product Block of Magento
  - **Before Related Products**: Block is displayed above the default Related Product Block of Magento
  - **After Related Products**: Block is shown below the default Related Product Block of Magento
  - **Replace Up-sell products**: Block replaces the default Upsell Products Block of Magento
  - **Before Up-sell Products**: Block is displayed above the default Upsell Product Block of Magento
  - **After Up-sell Products**: Block is displayed below the default Upsell Product Block of Magento
- **Display Type**: You can select Slider mode or Grid mode
  - **Slider**: Products are displayed on 1 line, customers can click the arrow or hold and move the cursor to view all products in the block quickly.
  - **Grid**: Products are displayed into multiple lines (if there are multiple products)
- **Limit Number of Products**:
  - Limit the number of Product displayed in the block
  - If left blank or = 0, the maximum number of Product shown is 10
- **Show Products only with**: Choose the condition for Most-viewed Products to be displayed in Block
  - **With higher price**: Most-viewed Products have a price higher than the price of the product that the customers are watching
  - **In stock**: Most-viewed products must be available in stock
  - **In the same category**: Most-viewed products must have the same category as the Products that the customers are viewing
  - Admin can select multiple criteria at once
- **Sort by**: Choose the way to organize the products displayed in the block
  - **Name**: sorted by Alphabet
  - **Price**: sorted by price from high to low
  - **Relevant**: Arrange products according to the frequency viewed together. The more frequency these products are viewd together, the priority they will be displayed first. 
  - **Stock Qty**: show products with higher quantity in stock 
- **Check data in the last (days)**:
  - Set the amount of time that data is retrieved. Only products viewed during this period can be compared and displayed in the block (if they meet the conditions above).
  - The period is calculated in days
  - If left blank, default period = 30 days
- **Display additional information**: Allow admin to select the extra information on Product image in Block
  - Add to Cart button
  - Add to Wishlist button
  - Add to Compare button
  - Review Information
