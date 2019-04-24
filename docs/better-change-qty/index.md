# Better Change Qty

## Overview

For the convenience of customers when purchasing multiple products with various discount options, Mageplaza integrates the ability to display Magento tier price notifications into the [Better Change Qty module](). Customers can easily choose different options at different prices. With only 1 select option and Add To Cart, customers have added products to the cart conveniently, quickly without entering the number of products corresponding to Mgento's announcement to receive the same discount.

## Download & Install

- [Mageplaza Better Change Qty]()
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


## How to use

### 1. Display on Product View Page


#### 1.1 Option Template

![](https://i.imgur.com/G2xUblW.png) 

#### 1.2 Open Quantity

![](https://i.imgur.com/PAnIw2N.png)

### 2. Display on Product List Page

#### 2.1 Option Template

![](https://i.imgur.com/ULGnPfK.png)

#### 2.2 Open Quantity

![](https://i.imgur.com/XzoiMKE.png)

### 3. Display on Wish List Page

![](https://i.imgur.com/tka5N6V.png)

## How to Configure

From the **Admin Panel**, go to `Store > Settings > Configuration > MAGEPLAZA EXTENSIONS > Better Change Qty`

### Configuration 

#### General 

![](https://i.imgur.com/LPI8nPV.png)

- **Enable**: Select `Yes` to activate the module 

- **Change Qty Step** (number of items increase per option)

![](https://i.imgur.com/xIxPoOF.png)

  1. *Change Qty Step = Product Qty Increment*: Display step increasing by the number configured in Magento products
  
  For example: If **Qty Increments = 3** as in Magento product configuration; Step 1 is 1 product, Step 2 is 4 products, Step 3 is 7 products and so on. The difference of product quantity is 3. 
  
  ![](https://i.imgur.com/I1JYqpl.png)
  
  - **Limit Number of Options**
    - Enter the limits for displaying options
    - The default display is 10 options
    - If left blank or filled as 0, there will be no limit to the display of options
  
  
  
  2. *Change Qty Step = Fixed Value*: Display step as similar as in **Qty Step Value** configuration
  
  ![](https://i.imgur.com/uAbeOhi.png)
  

   - **Qty Step Value**: 
      - Enter the number of products for each time adding products to your cart. The number of products for each step will be increased by arithmetic progression
      - For example: If **Qty Step Value = 2**, every time you add product to the cart, you must add 2 products
      
   - **Limit Number of Options**
      - Enter the limits for displaying options
      - The default display is 10 options
      - If left blank or filled as 0, there will be no limit to the display of options     

  3. *Change Qty Step = Custom Value*: Display step increasing by the number configured in **Custom Step** field
    - **Custom Step**
      - Enter the number of products for each step
      - You can enter multiple steps with different product numbers, steps must be separated by a commas
      - For example: **Qty Step Value = 3,5,9**, means that Step 1 is 3 product, Step 2 is 5 prodducts and Step 3 is 9 products
      
- **Max Qty Step** (Set the maximum bumber of steps)

![](https://i.imgur.com/qlXnvOw.png)

  - **Max Qty Step = Stock Quantity**: Display the product number of each step until the product is out of stock. For example: **Quantity = 20** (as in product configuration), **Custom Step = 5,15,19,21** then it will so only thre steps which is 5,15,19
  

  - **Max Qty Step = Fixed Value**: Displays the maximum number of products for each time adding product to the cart.
    - `Max Qty Value`: Enter the maximum number of products to display the corresponding steps. For example: **Qty Step Value = 5**, **Max Qty Value = 25** then there are 5 steps is: 5,10,15,20,25
    
  - **Max Qty Step = Both**: Display the product number of each step until the number of products is equal to the configured value in **Max Qty Value** field or until the product runs out of stock (prioritize the smaller value). For example: **Stock Quantity = 50**, **Max Qty Value = 70** then step will stop at 50 products.
  
    - `Max Qty Value`: Enter the maximum number of products. For example: **Qty Step Value = 5**, **Max Qty Value = 25** and **Stock Qty = 30** then there are 5 steps is: 5,10,15,20,25
    
  - **Allow Open Qty**: Select `Yes` to show text box which allows customer to add quantity
  
  - **Option Template**
    - Template **Buy {{qty}}** is applied when product quantity is 1
    - If you leave this field blank, the default template will be used
  
  - **Option Template for Multiple Qty**
    - Template **Buy {{qty}} for {{price}} each** is applied when product quantity is more than 1
    - If you leave this field blank, the default template will be used
    
  - **Option Template with tier price**
    - Template **Buy {{qty}} for {{price}} each and save {{percent}}** is applied when tier price is applied as well
     - If you leave this field blank, the default template will be used
    - The **Options Template** will be displayed at the frontend as selecting type
    - You can use some variables that we support (all values of these variables are taken according to tier price configuration of Magento):
      - {{qty}}: Quantity of products
      - {{price}}: Product price
      - {{total}}: The total amount of the order with the chosen quantity
      - {{percent}}: Discount percentage
      
  - **Apply for Categories**
    - Select category to apply Qty step display
    - You can choose to display in multiple categories
    
  - **Apply for Product Types**
    - Select the product type to apply Qty step display
    - Can choose to display in many different types of products
    
  - **Apply on**
    - Select the page for applying Qty step display
    - You can select multiple pages to apply at once. There are 3 pages to choose from: Product List page, Product View page, Wish List page
  - **Hide Tier price notice**: Select `Yes` to hide tier price notice from Magento
  

`Note`: 

- All the products with check box appled to Better Change Qty must satisfied 3 fields: **Apply for Categories, Apply for Product Types, Apply on**
- For **Configurable products, Grouped products, Bundle products and Gift Card products**, the check box will not be displayed on the **Wish List page**
- For **Grouped products, Bundle products and Gift Card products**, they will not be displayed as the check box box on the **Product List page**



