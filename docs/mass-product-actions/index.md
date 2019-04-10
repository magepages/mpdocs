# Mass Product Actions

## Overview

Sometimes, stores' admins want to change or edit products data in their store, they need to go to the edit link, then edit the product one by one manually. But what if you have to do it in large quantities? With [Mageplaza Mass Product Actions extension](https://www.mageplaza.com/magento-2-mass-product-actions/), we created more advanced features to help you handle bulk actions. To save your time and effort, the module will create additional mass action at product grid pages so that you can update many products at the same time. This extension makes it easy to handle products quickly and dramatically improve product management at your store.


## How to download and install

- [Download Mageplaza Mass Product Actions](https://www.mageplaza.com/magento-2-mass-product-actions/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)

## How to Configure

### I.Configuration

Login to the **Magento Admin**, go to `Stores > Configuration > Mageplaza > Mass Product Actions`.

![Imgur](https://i.imgur.com/RPNzFec.png)

#### 1. General

![Imgur](https://i.imgur.com/afo5xdd.png)

- Select **Enable = Yes** to enable the module.
- **Select Actions**: 
  - Click checkbox to activate Action. Admin csn choose mulitple actions
  - **Position**: Set the priority of Action shown on Grid
  - **Note**: 
    - The smaller the position is, the higher the priority of it
    - If two actions have same position, Grid will show Actions in order at **Select Actions** field

### II. Grid

Login to the **Magento Admin**, choose `Catalog > Products`.

![Imgur](https://i.imgur.com/6MO7DHB.png)

Click **Actions**, there, actions will be displayed according to **Enable Mass Action** configuration created at the **Configuration** section.

![Imgur](https://i.imgur.com/YMPwu2g.png)


#### 2.1. Change Attribute Set

- Admin can **Change Attribute Set** for one or multiple orders by clicking on **order ID**
- In case Admin wants to do mass action for all order, click **Select All**, the system will auto select all created orders.
  - Click **Select All on This Page**, the system will select all orders displayed on the grid.

![Imgur](https://i.imgur.com/DRF4rRj.png)

![Imgur](https://i.imgur.com/a80EfpM.png)

After selecting the order, Admin click **Action** and select **Change Attribute Set**. The system will display popup for admin to change product attributes.

#### 2.2 Quick Attributes Update

- Admin can perform **Quick Attributes Update** for one or multiple orders by clicking on **order ID**
- In case Admin wants to do mass action for all order, click **Select All**, the system will auto select all created orders.
  - Click **Select All on This Page**, the system will select all orders displayed on the grid.

![Imgur](https://i.imgur.com/QZvlwYd.png)

Admins change Update the Product Attributes by clicking to the checkbox. After finish action, click to **Submit**.

![Imgur](https://i.imgur.com/rdsYlyI.png)

#### 2.3. Update Category

- Admin can perform **Update Category** for one or multiple order by clicking on **order ID**
- In case Admin wants to do mass action for all order, click **Select All**, the system will auto select all created orders.
  - Click **Select All on This Page**, the system will select all orders displayed on the grid.

- After selecting the order, Admin click **Action** and select **Update Category**. The system will display popup for admin to perform the action

![Imgur](https://i.imgur.com/iCFafpJ.png)

- Admin changes the display of the product on the page by clicking **Remove Categories/Add Categories**.
  - Select **Remove Categories** if Admin wants to delete the current display position of the product.
  - Select **Add Categories** if Admin wants to display products at different pages.

- In addition, Admin can create a new display position for the product by clicking **New Category**.
  - **Category Name**: Enter a name for the Category. The system will report an error if this field is left blank.
  - **Parent Category**: Set the location for Category. The system will report an error if this field is left blank.
  - Click **Create Category** to complete creating the category.
  
  #### 2.4. Update Cross-sell Products

- Admin can perform **Update Cross-sell Products** for one or multiple order by clicking on **order ID**
- In case Admin wants to do mass action for all order, click **Select All**, the system will auto select all created orders.
  - Click **Select All on This Page**, the system will select all orders displayed on the grid.
  
  ![Imgur](https://i.imgur.com/DTYWz7E.png)

- After selecting the order, Admin click **Action** and select **Update Cross-sell Products**. The system will display popup for admin to perform the action

![Imgur](https://i.imgur.com/lifi5Ho.png)


Configuration to **display or delete Cross-sell products**.

- **Direction**:

  ![Imgur](https://i.imgur.com/HoUzwgR.png)

  - Select **One-way relation**: The action product will display or delete the selected product at Remove/Add Related Products.
  - Select **Mutual-way relations**: Products that perform actions and selected products at Remove/Add Related Products are related.

- **Remove Cross-sell Product(s)**: Admin selects the product to remove it from Cross-sell Products.
- **Add Cross-sell Product(s)**: Admin selects the product to display the product at Cross-sell Products.
- **Copy from Product(s)**: Admin selects the product to copy its Cross-sell products.

Admin selects the product by clicking **Select**. The system will display product grid for selecting 

![Imgur](https://i.imgur.com/vPJO9Sh.png)

Admin can choose one or more products by clicking on the desired product and click **Submit** to finish action.

![Imgur](https://i.imgur.com/6yk6neO.png)

#### 2.5. Copy Custom Options

- Admin can perform **Copy Custom Options** for one or multiple order by clicking on **order ID**
- In case Admin wants to do mass action for all order, click **Select All**, the system will auto select all created orders.
  - Click **Select All on This Page**, the system will select all orders displayed on the grid.
  
  ![Imgur](https://i.imgur.com/Q9gTNy0.png)

After selecting the order, Admin click **Action** and select **Copy Custom Options**. The system will display popup for admin to perform the action

![Imgur](https://i.imgur.com/tfqYA87.png)

Admin can choose one or more products by clicking on the desired product and click **Submit** to finish action.


#### 2.6. Update Images

- Admin can perform **Update Images** for one or multiple order by clicking on **order ID**
- In case Admin wants to do mass action for all order, click **Select All**, the system will auto select all created orders.
  - Click **Select All on This Page**, the system will select all orders displayed on the grid.

![Imgur](https://i.imgur.com/enRsaiZ.png)

After selecting the order, Admin click **Action** and select **Update Images**. The system will display popup for admin to perform the action. Admin changes the product image by clicking **Remove all images of selected products/Copy image(s) from other product(s).

![Imgur](https://i.imgur.com/GWfIKOD.png)

- **Remove all images of selected products**: Admin deletes the product image. The image of the product will be deleted in the backend and frontend.
- **Copy image(s) from other product(s)**: Admin copies images og other product's image. The image of the product will be displayed in the backend and frontend.

![Imgur](https://i.imgur.com/VLi8eQh.png)

Admin can choose one or more products by clicking on the desired product and click **Submit** to finish action.

#### 2.7. Update Inventory

- Admin can perform **Update Inventory** for one or multiple order by clicking on **order ID**
- In case Admin wants to do mass action for all order, click **Select All**, the system will auto select all created orders.
  - Click **Select All on This Page**, the system will select all orders displayed on the grid.
  
  ![Imgur](https://i.imgur.com/Q9gTNy0.png)

After selecting the order, Admin click **Action** and select **Update Inventory**. The system will display popup for admin to perform the action

![Imgur](https://i.imgur.com/BbVQDlD.png)

- Admin can Update Inventory by clicking to checbox **Change**
  - **Note**: With the products having **Use Config Settings** checkbox, Admin can click to that checkbox to update the inventory of products. 
- Choose **Manage Stock = Yes** to be enable to manage the inventory
- **Qty**: Add the products number in the inventory
- **Out-of-Stock Threshold**: Insert the number of out-of-stock products 
- **Minimum Qty Allowed in Shopping Cart/Maximum Qty Allowed in Shopping Cart**: Insert the maximum and minimum quantity allowed in Shopping Cart 
- **Qty Uses Decimals**: Choose **Yes** if the product quantity can be in decimal number
- Set **Backorders** from CMS block:

  ![Imgur](https://i.imgur.com/sKwsw3l.png)
  
  - **No Backorder**: Do not allow customers to backorder the out-of-stock product 
  - **Allow Qty Below 0**: Allow backorder when the product quantity is below 0 - cho phép đặt hàng backorder với số lượng ít hơn 0.
  - **Allow Qty Below 0 and Notify Customer**: Allow backorder when the product quantity is below 0 and notify customers that they can backorder  
  
- **Notify for Quantity Below**: Insert a number by which if product quantity is smaller, the module wil send notification to customers
- **Enable Qty Increments**: Select **Yes** and insert the incremental number. For example: You insert number 4, means that shopping cart of customers must be added up 4, 8, 12 products each time updated. 
- **Stock Availability**: Choose **In Stock** if the product is in stock and choose **Out of Stock** if it is running out in the inventory. 

![Imgur](https://i.imgur.com/W94uKnC.png)

- **Note**: With some fields having the following otptions:Với những fields có select như dưới đây, admin thực hiện lựa chọn với:
  - **Fixed value**: Only get the new value 
  - **Plus**: Add the new value to the previous one 
  - **Minus**: Minus the previous value by the new one. If the new value is greater than the old one, the value resulted is 0 
  
  ![Imgur](https://i.imgur.com/VyuXQai.png)


#### 2.8. Update Price

- Admin can perform **Update Price** for one or multiple order by clicking on **order ID**
- In case Admin wants to do mass action for all order, click **Select All**, the system will auto select all created orders.
  - Click **Select All on This Page**, the system will select all orders displayed on the grid.
  
  ![Imgur](https://i.imgur.com/Q9gTNy0.png)

After selecting the order, Admin click **Action** and select **Update Price**. The system will display popup for admin to perform the action

![Imgur](https://i.imgur.com/0OGkSYa.png)
  
- **Change Price**: Select the following actions

![Imgur](https://i.imgur.com/zr680Bc.png)

  - **Plus**: Plus the price value
  - **Plus by Percentage**: Plus the price by percentage
  - **Fixed value**: Use as fixed value
  - **Minus**: Minus the value
  - **Minus by Percentage**: Minus value by percentage
  - After you select one of the above options, two more fields will be shown
  
  ![Imgur](https://i.imgur.com/TysPcIP.png)
  
  - **Update using Cost = Yes**: The Price value will be updated based on Cost value 
  - **Value**: Insert the value. The system will notify an error if you leave this field blank or insert the wrong value. 
- **Change Cost**: Select to change product cost

![Imgur](https://i.imgur.com/UcMdAd1.png)

  - **Plus**: Plus the cost value
  - **Plus by Percentage**: Plus the cost by percentage
  - **Fixed value**: Use as fixed value
  - **Minus**: Minus the value
  - **Minus by Percentage**: Minus value by percentage
  - After you select one of the above options, one more field will be shown:
  
  ![Imgur](https://i.imgur.com/naXM7jy.png)
  
   - **Value**: Insert the value. The system will notify an error if you leave this field blank or insert the wrong value. 
   
- **Special Price**: Select to change the special price of products

![Imgur](https://i.imgur.com/UcMdAd1.png)

  - **Plus**: Plus the cost value
  - **Plus by Percentage**: Plus the cost by percentage
  - **Fixed value**: Use as fixed value
  - **Minus**: Minus the value
  - **Minus by Percentage**: Minus value by percentage
  - After you select one of the above options, some more fields will be shown:
  
  ![Imgur](https://i.imgur.com/LxOXKmh.png)
  
  - **Update using Price = Yes**: The Special Price value will be updated based on Price value
  - **Value**: Insert the value. The system will notify an error if you leave this field blank or insert the wrong value. 
  - **Special Price From Date**: Choose the day to begin applying special price 
  - **Special Price To Date**: Choose the day to finish applying special price 
  
  
- **Change Tier Price**: Select to change the tier price of products

#### 2.9. Update Related Products

- Admin can perform **Update Related Products** for one or multiple order by clicking on **order ID**
- In case Admin wants to do mass action for all order, click **Select All**, the system will auto select all created orders.
  - Click **Select All on This Page**, the system will select all orders displayed on the grid.

![Imgur](https://i.imgur.com/m6rKuvN.png)

After selecting the order, Admin click **Action** and select **Update Category**. The system will display popup for admin to perform the action

![Imgur](https://i.imgur.com/RK7wqDz.png)


Admin choose settings to **display or delete related products**.

- **Direction**:

![Imgur](https://i.imgur.com/HoUzwgR.png)

  - Select **One-way relation**: The action product will display or delete the selected product at Remove/Add Related Products.
  - Select **Mutual-way relations**: Products that perform actions and selected products at Remove/Add Related Products are related.

- **Remove Related Product(s)**: Admin selects the product to remove it from Related Products.
- **Add Related Product(s)**: Admin selects the product to display the product at Related Products.
- **Copy from Product(s)**: Admin selects the product to copy its related products.

Admin selects the product by clicking **Select**. The system will display product grid for selecting 

![Imgur](https://i.imgur.com/MQW6Mo7.png)

Admin can choose one or more products by clicking on the desired product and click **Submit** to finish selecting products.

![Imgur](https://i.imgur.com/NVy1ojM.png)

#### 2.10. Update Up-sell Products

- Admin can perform **Update Up-sell Products** for one or multiple order by clicking on **order ID**
- In case Admin wants to do mass action for all order, click **Select All**, the system will auto select all created orders.
  - Click **Select All on This Page**, the system will select all orders displayed on the grid.

![Imgur](https://i.imgur.com/m6rKuvN.png)


After selecting the order, Admin click **Action** and select **Update Up-sell Products**. The system will display popup for admin to perform the action

![Imgur](https://i.imgur.com/grcvlY4.png)

Configuration to **display or delete Up-sell products**.

- **Direction**:

![Imgur](https://i.imgur.com/HoUzwgR.png)

  - Select **One-way relation**: The action product will display or delete the selected product at Remove/Add Related Products.
  - Select **Mutual-way relations**: Products that perform actions and selected products at Remove/Add Related Products are related.
- **Remove Up-sell Product(s)**: Admin selects the product to remove it from Up-sell Products.
- **Add Up-sell Product(s)**: Admin selects the product to display the product at Up-sell Products.
- **Copy from Product(s)**: Admin selects the product to copy its Up-sell products.

Admin selects the product by clicking **Select**. The system will display product grid for selecting 

![Imgur](https://i.imgur.com/cctQfZM.png)

Admin can choose one or more products by clicking on the desired product and click **Submit** to finish select products.

![Imgur](https://i.imgur.com/Rftexs8.png)
  
#### 2.11. Update Website

- Admin can perform **Update Website** for one or multiple websites by clicking on **order ID**
- In case Admin wants to do mass action for all order, click **Select All**, the system will auto select all created orders.
  - Click **Select All on This Page**, the system will select all orders displayed on the grid.
  
![Imgur](https://i.imgur.com/kkVm4OB.png)

After selecting the order, Admin click **Action** and select **Update Websites**. The system will display popup for admin to choose actions to update websites

![Imgur](https://i.imgur.com/tIbtS8A.png)


Admin changes the display position of the product on the website by clicking **Remove Product From Websites/Add Product To Websites**.

- **Remove Product From Websites**: Admin select the website on which products are not displayed
- **Add Product To Websites**: Admin select the website on which allowing the product to display 
  - **Note**: In the case admin select both **Remove and Add Product From Websites**, the system will perform **Remove** first and then perform **Add Product From Websites**.



### III. Backend

#### 3.1. Change Attribute Set

![Imgur](https://i.imgur.com/rxkEJd6.png)

#### 3.2. Update Category

![Imgur](https://i.imgur.com/iSRzh65.png)

#### 3.3. Update Website

![Imgur](https://i.imgur.com/s0AwNgY.png)


#### 3.4. Update Related Products

![Imgur](https://i.imgur.com/TMGJQiB.png)

#### 3.5. Update Up-sell Products

![Imgur](https://i.imgur.com/OrxbmW1.png)

#### 3.6. Update Cross-sell Products

![Imgur](https://i.imgur.com/dwBaDkm.png)

#### 3.7. Copy Custom Options

- Custom options are displayed in the **Admin order page**.

![Imgur](https://i.imgur.com/9A5c7WR.png)

- Custom options are displayed in the **Admin order page**.

![Imgur](https://i.imgur.com/Fv7O9Jc.png)

- The Custom options results are displayed in the **order information**.

![Imgur](https://i.imgur.com/AVW2Tk8.png)

#### 3.8. Update Images

![Imgur](https://i.imgur.com/HudcOpP.png)

#### 3.9. Update Price

Tier Price shown on admin order page

![Imgur](https://i.imgur.com/qoDkMm0.png)

### IV. Frontend

#### 4.1. Update Category

![Imgur](https://i.imgur.com/8x0BiUp.png)


#### 4.2. Update Related Products

![Imgur](https://i.imgur.com/OwiZTK6.png)

#### 4.3. Update Up-sell Products

![Imgur](https://i.imgur.com/crzOrng.png)

#### 4.4. Update Cross-sell Products

![Imgur](https://i.imgur.com/iSo68go.png)

#### 4.5. Copy Custom Options

- Custom options displayed at **Product Page**

![Imgur](https://i.imgur.com/ycCoaSa.png)

- Custom options are displayed in the **Shopping Cart Page** after performing **Add products** to the cart.

![Imgur](https://i.imgur.com/HRulbn2.png)

- The Custom options results are displayed in the **order information**.

![Imgur](https://i.imgur.com/S9vH40Z.png)

#### 4.6. Update Images

![Imgur](https://i.imgur.com/YnsKMnj.png)

#### 4.7. Update Price

- Special Price shown on Category Product Page.

![Imgur](https://i.imgur.com/F1J8hgr.png)

- Special Price shown on Detail Product Page.

![Imgur](https://i.imgur.com/mx0zuyu.png)

- Tier price shown on Category product page

![Imgur](https://i.imgur.com/fgCKz6V.png)

- Tier price shown on Detail product page

![Imgur](https://i.imgur.com/4pCPCqe.png)
