# Better Sorting

## Overview

Better Sorting by Mageplaza will help customers to have a compelling shopping experience, increase the ability to access and search easily and be friendly with customers. By supporting customers to arrange products by Bestseller, Most Viewed, Discount, Reviews count, Top Rated, New, Added to wishlist, Stock (quantity), etc, Better Sorting extension will boost your site traffic dramatically.

## Download & Install

- Mageplaza Better Sorting
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)

## How to use

Better Soring supports showing product by:

![](https://i.imgur.com/0yFl9Qu.png)

## How to configure

### 1. Configuration

Login to the **Magento Admin**, choose `Stores > Configuration > Better Sorting`.


![](https://i.imgur.com/tjOLc2v.gif)

#### 1.1. General

![](https://i.imgur.com/XYJmmWu.png)


- **Enable**: Select `Yes` to activate the Module and you can sort product as the product types you want. 
- **Show Out of Stock at the End**: Here are the options

![](https://i.imgur.com/nX7WGwN.png)


- **Base on stock label**: Display the **Out of Stock products** at the page bottom based on stock label. You can access to `Catalog > Products`, then change **Stock Status** field into **Out of stock** for any products shown at bottom page even though it still remains in inventory. 

![](https://i.imgur.com/NyZgCOw.png)

- **No**: Not display the **Out of Stock** product at the page bottom.

- **Base on qty (<1)**: Display the **Out of Stock** products at page bottom based on **product quantity (<1)**. Please go to `Catalog> Products` to change **Quantity**, if the product quantity is smaller than 1, those products will be shown at page bottom, otherwise, they will not be applied **Sorting** and hence display products as usual.

![](https://i.imgur.com/uv9stNr.png)

- **Default Sort by on Search Page**: Default sorting product on the search page. If the first sorting type is not enabled, the second one will be applied. For example, if the **Discount** Sorting type is not enabled, then the module will show product by **Bestseller**


![](https://i.imgur.com/0e7Nnoy.png)


#### 1.1.1. Discount

![](https://i.imgur.com/vD8V9G6.png)

- **Enable**:
  - Selecting `Yes` to allow sorting products by Discount items.
  - If `No`, not apply **Discount** product on Sorting but will apply the next enable product type as in **Default Sort By On Search Page**.
  
- **Label**:
  - Enter a name for product sorting by Discount.
  - This is a required field. 

- **Base on**: Select product sorting with Discount by:
  - **Percent**: Display products based on its percentage discount. Which one has more discount will be shown first.
  - **Amount**: Display products based on it's fixed discount amount. Which one has more discount will be shown first.

- **Apply On**: Select to show product sorting by Discount in:
  - **Category Page**: 
  
  ![](https://i.imgur.com/E5IXGNz.png)
  
  - **Search Page**:
  
  ![](https://i.imgur.com/vttTCBg.png)

- **Default Sort Direction**: Select the default sort direction with Discount:
  - **Ascending**: arrange discount products in the direction of increasing
  - **Descending**: arrange discount products in the direction of decreasing
  
- **Sort Order**:
  - Enter the number for the Sort Order field. Smaller numbers will prioritize the default display on Sort by
  - This is a required field. If left blank, a message shown: `Please enter a valid number in this field`

**Note**: With **Sort By Discount**, you can run this command to update the newest discount products data:

`php bin/magento indexer:reindex`

#### 1.1.2. Bestseller

![](https://i.imgur.com/v4UCSu8.png)

- **Enable**:
  - Selecting `Yes` to allow sorting products by **Bestseller**
  - If `No`, not apply **Bestseller** product on Sorting but will apply the next enable product type as in **Default Sort By On Search Page**
  
- **Label**:
  - Enter a name for product sorting by Bestseller
  - This is a required field

- **Time base (days)**:
  - Enter the number of days to sort the bestsellers. For example, you enter 10 days means that the best sellers product in 10 days most recently will be shown. Otherwise, you can access to **Dashboard**, click to **Reload Data** to see Bestseller Product. 
  
  ![](https://i.imgur.com/RjiYtqC.png)
  
  - If this field is left blank, the default is the entire time

- **Apply On**: Select to show product sorting by Bestseller in:
  - **Category Page**
  - **Search Page**

- **Default Sort Direction**: Select the default sort direction with Bestseller:
  - **Ascending**: arrange Bestseller products in the direction of increasing
  - **Descending**: arrange Bestseller products in the direction of decreasing

- **Sort Order**:
  - Enter the number for the Sort Order field. Smaller numbers will prioritize the default display on Sort by
  - This is a required field. If left blank, a message shown: `Please enter a valid number in this field`

**Note**: With **Sort By Bestsellers**, you can run this command to update the newest bestseller products data:

`php bin/magento indexer:reindex`

#### 1.1.3. Most Viewed

![](https://i.imgur.com/iZ21uhE.png)

- **Enable**:
  - Selecting `Yes` to allow sorting products by **Most Viewed**
  - If `No`, not apply **Most Viewed** product on Sorting but will apply the next enable product type as in **Default Sort By On Search Page**
  
- **Label**:
  - Enter a name for product sorting by **Most Viewed**
  - This is a required field

- **Time base (days)**:
  - Enter the number of days to arrange the **Most Viewed**. For example: You enter 10 days means that the **Most Viewed** product in 10 days most recently will be shown. Otherwise, you can access to **Dashboard**, click to **Reload Data** to see **Most Viewed** Product.
  
  ![](https://i.imgur.com/Oi5ERUq.png)
  
  - If this field is left blank, the default is the entire time

- **Apply On**: Select to show product sorting by Most Viewed in:
  - Category Page
  - Search Page

- **Default Sort Direction**: Select the default sort direction with **Most Viewed**:
  - **Ascending**: arrange Most Viewed products in the direction of increasing
  - **Descending**: arrange Most Viewed products in the direction of decreasing

- **Sort Order**:
  - Enter the number for the Sort Order field. Smaller numbers will prioritize the default display on Sort by
  - This is a required field. If left blank, a message shown: `Please enter a valid number in this field`

**Note**: With **Sort By Most Viewed**, you can run this command to update the newest most viewed products data:

`php bin/magento indexer:reindex`

#### 1.1.4. Top Rated


![](https://i.imgur.com/gUjuk89.png)


- **Enable**:
  - Selecting `Yes` to allow sorting products by **Top Rated**
  - If `No`, not apply **Top Rated** product on Sorting but will apply the next enable product type as in **Default Sort By On Search Page**
  
  
- **Label**:
  - Enter a name for product sorting by Top Rated
  - This is a required field

- **Apply On**: Select to show product sorting by Top Rated in:
  - Category Page
  - Search Page

- **Default Sort Direction**: Select the default sort direction with Top Rated:
  - **Ascending**: arrange Top Rated products in the direction of increasing
  - **Descending**: arrange Top Rated products in the direction of decreasing

- **Sort Order**:
  - Enter the number for the Sort Order field. Smaller numbers will prioritize the default display on Sort by
  - This is a required field. If left blank, a message shown: `Please enter a valid number in this field`

#### 1.1.5. Reviews Count

![](https://i.imgur.com/cyOv54b.png)

- **Enable**:
  - Selecting `Yes` to allow sorting products by **Reviews Count**
  - If `No`, not apply **Reviews Count** product on Sorting but will apply the next enable product type as in **Default Sort By On Search Page**
  
- **Label**:
  - Enter a name for product sorting by Reviews Count
  - This is a required field

- **Apply On**: Select to show product sorting by Reviews Count in:
  - Category Page
  - Search Page

- **Default Sort Direction**: Select the default sort direction with Reviews Count:
  - **Ascending**: arrange Reviews Count products in the direction of increasing
  - **Descending**: arrange Reviews Count products in the direction of decreasing

- **Sort Order**:
  - Enter the number for the Sort Order field. Smaller numbers will prioritize the default display on Sort by
  - This is a required field. If left blank, a message shown: `Please enter a valid number in this field`


#### 1.1.6. New Arrivals, Stock Quantity, Wishlist, Product Name, Price


![](https://i.imgur.com/CBhEOJU.png)

![](https://i.imgur.com/EUBt9D0.png)

![](https://i.imgur.com/AHBODEZ.png)


- **Enable**:
  - Selecting `Yes` to allow sorting products by **selected sorting type**
  - If `No`, not apply this product type on Sorting but will apply the next enable product type as in **Default Sort By On Search Page**
- **Label**:
  - Enter a name for product sorting by selected sorting type
  - This is a required field

- **Apply On**: Select to show product sorting by selected sorting type in:
  - Category Page
  - Search Page

- **Default Sort Direction**: Select the default sort direction with selected sorting type:
  - **Ascending**: arrange selected sorting products in the direction of increasing
  - **Descending**: arrange selected sorting products in the direction of decreasing

- **Sort Order**:
  - Enter the number for the Sort Order field. Smaller numbers will prioritize the default display on Sort by
  - This is a required field. If left blank, a message shown: `Please enter a valid number in this field`
  
  
**Note**: With **New Arrivals**, products only be applied to this Sorting type when admin set the field **Set Product as New From** for them. The products which is in-stock most recently will be displayed first then come sooner in-stock products. For products which is not choosen in this Sorting type or not be set up the time at **Set Product as New From** field, will not be considered as New Arrivals. Please access to `Catalog > Product`, then choose to edit any product and go to **Set Product as New From** to set the New Arrivals. 

![](https://i.imgur.com/psMGD37.png)
  
#### 1.1.7. Position, Relevance

![](https://i.imgur.com/dZkFXV1.png)

- **Enable**:
  - Selecting `Yes` to allow sorting products by **Position/Relevance**. With **Sort by Position**, only apply for **Category Page**, And for **Sort by Relevance**, only apply for Search page.
  - If `No`, not apply this product type on Sorting but will apply the next enable product type as in **Default Sort By On Search Page*
 
- **Label**:
  - Enter a name for product sorting by **Position/Relevance**
  - This is a required field
  

- **Default Sort Direction**: Select the default sort direction with selected sorting type:
  - **Ascending**: arrange selected sorting products in the direction of increasing
  - **Descending**: arrange selected sorting products in the direction of decreasing

- **Sort Order**:
  - Enter the number for the Sort Order field. Smaller numbers will prioritize the default display on Sort by
  - This is a required field. If left blank, a message shown: `Please enter a valid number in this field`
  
**Note**: With **Position**, Sort By Position when accessing `Catalog > Categories`, you can choose the to apply any category for Sort By Position then click to **Products tab** in Category to see their Positions.

- For example with **Bags** folder: 

![](https://i.imgur.com/nUk8Ttm.png)

### Notation

When you install the module, you should run the following command to update the newest product data:

```php bin/magento indexer:reindex```

When you want to uninstall the module, please go to database to delete it. Please access to **Views** table, et **Table** column, find and delete the old data.

![](https://i.imgur.com/Ydrs3T3.png)
