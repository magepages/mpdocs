# Who Viewed This Also Viewed

## Overview

Customers are more likely to make purchasing decisions when they see a product that other customers have seen. [Mageplaza Who Viewed This Also Viewed](https://www.mageplaza.com/magento-2-who-viewed-this-also-viewed/) extension provides an excellent solution for the owner to allow the most relevant product to be displayed on the Product Detail Page. By smart algorithms, the most viewed products will be automatically updated and proposed to customers. Thereby bring an amazing shopping experience for customers, while increasing revenue for store owners

## How to download and install

- [Download Mageplaza Age Verification](https://www.mageplaza.com/magento-2-who-viewed-this-also-viewed/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


## How to use
- Products which applicable with this function is set by admin based on both Product Types and Categories that they belong to.

![Imgur](https://i.imgur.com/57vMSIY.png)

- This extension supports the recommendation of the most viewed products at Product Detail page
  - At varous positions:
    - Top of Content
    - Bottom of Content
    - Replace Related Product
    - Before Related Product
    - After Related Product
    - Replace Upsale Product
    - Before Upsale Product
    - After Upsale Product
  - Select way to display the block:
    - Grid
    - Slider
  - Based on many criteria:
    - With higher price 
    - In stock
    - In the same category
  - Sort by:
    - Name
    - Price
    - Relevant
    - Stock Qty
  - Add the extra information:
    - Add to Cart button
    - Add to Wish list button
    - Add to Compare button
    - Review Information


## How to Configure
### 1. Configuration
From the Admin panel, go to `Stores> Configuration> Mageplaza> Who viewed this also viewed`

- Select Enable = Yes to enable the module
- Block Title:
  - Name Block at will. The block name will be displayed in Frontend
  - If left blank, the default is `Who viewed this item also viewed`
- Apply for:
  - Is the criterion for selecting Product Detail Page which may be displaying the `Who viewed this also viewed block block`. The block can only be displayed on the Product Detail pages of the products that meet the Product Type and Category selected by the Admin
  - Admin can choose multiple options at Product Type and Category
- How to show: there are 2 ways to display blocks that you can choose
  - Ajax Display: `Who viewed this also viewed` block is loaded after the page has finished loading and will need a period of time to display in Frontend. This option will be good for the page loading speed
  - Block Display: `Who viewed this also viewed` block will be loaded always when loading the page and displayed as soon as the page is finished loading. This option helps improve SEO for the page
- Display Position: This is where you specify the Block of the extension to show where the Product Page is located

  - Top of Content: Block of the extension displayed above Content of Product Page
  - Bottom of Content: Block of extension shown below Content of Product Page
  - Replace Related Products: Block of extension replaces the default Related Product Block of Magento
  - Before Related Products: Block of the extension displayed above the default Related Product Block of Magento
  - After Related Products: Block of extension shown below of Magento's Related Product Block default
  - Replace Upsell products: Block of extension replaces the default Upsell Products Block of Magento
  - Before Upsell Products: Block of the extension displayed above the default Upsell Product Block of Magento
  - After Upsell Products: Block of the extension displays below the default Upsell Product Block of Magento
- Display Type: There are 2 modes. You can select Slider mode or Grid mode
  - Slider: Product displays on 1 line, Customer can click the arrow or hold and move the cursor to view all products in the block quickly.
  - Grid: displays all block products into multiple lines (if there are multiple Product)
- Limit Number of Products:
  - Limit the number of Product displayed in the block
  - If left blank or = 0, the maximum number of Product is shown is 10
- Hiển thị Products chỉ với: A criterion for Product to have multiple views displayed in Block
  - Giá là cao hơn các giá trị hiện thời: Product that is seen as much must have a price higher than the price of the product that the   Customer is watching
  - In stock: That much-viewed product must be stock
  - In the same category: That much-viewed product must have the same category as the Product that the Customer is viewing
  - Admin can select multiple criteria simultaneously
- Sort by: A criterion for organizing the products that are currently displayed in the block
  - Name: sorted by Alphabet
  - Price: sorted by price from high to low
  - Relevant:
  - Stock Qty: products with quantity and in stock are displayed
- Verify data to last (ngày):
  - Set the amount of time that data is retrieved. Only products viewed during this time period can be compared and displayed in the block (if they meet the conditions above).
  - The time period is calculated in days
  - If left blank, default = 30 days
- Hiển thị thông tin thêm: Allow admin to select the attached information on Product image in Block
  - Add to Cart button
  - Add to Wishlist button
  - Thêm vào Compare button
  - Review Information
