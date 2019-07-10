# Special Promotions

## Overview

Customers always love shopping with sales and promotions. Having various and appealing promotion programs is an required features for online store thesedays. Understanding that need, [Mageplaza Special Promotions](https://www.mageplaza.com/magento-2-special-promotions/) for Magento 2 provides additional 18 rules can be applied on extra Customer Attribute and Order Attributes. The module also has popup suport allowing customers to choose coupon to apply. Especially, Discount Hint will be shown for customers to make them great suggestion of the quantity purchase so that they can get special discount. 

Mageplaza Special Promotions is fully compatible with [Banner Slider](https://www.mageplaza.com/magento-2-banner-slider-extension/) and [Better Coupon](https://www.mageplaza.com/magento-2-multiple-coupons/) extensions. 


## How to download and install

- [Download Mageplaza Special Promotions](https://www.mageplaza.com/magento-2-special-promotions/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


## How to use

- **Cart Hint** (Coming soon): Displays suggestions for discounts on shopping cart if customer add to cart with the product is in the discount program but not enough in quantity for a discount. For example: Buy 2 more bag to get 20% discount for whole order.

- **Display Discount Detail**: display discount information for each rule and details in collapsible form.

![Imgur](https://i.imgur.com/qSzHoBw.png)

## How to Configure
### 1. Configuration

Login to the Admin Magento, choose `Stores > Settings > Configuration > Mageplaza > Special Promotion`.

![Imgur](https://i.imgur.com/ijw5Syn.png)

#### 1.1. General

![Imgur](https://i.imgur.com/OzSa10L.png)

- **Enable**: Select **yes** to activate the module features
- **Display Discount Details**: If choose **Yes**, discount will be divided by rules and display details in collapsible form.

![Imgur](https://i.imgur.com/GswpdmB.png)

- **Max. Discount Base**: Apply maximum discount for all products in cart for all rules with:
  - **No**: there will be no discount for the entire cart.
  - **Fixed amount**: apply maximum discount for the entire cart for rules with **Maximum Discount Type** is **Fixed amount**. Choose **Fixed amount** will show an extra field:
    - **Max. Discount Amount**: Enter the maximum discountable amount according to **Fixed amount** to apply the discount for the entire cart
  - **Percent of cart subtotal**: Maximum discount for all shopping carts in rules with Maximum Discount Type is **Percent of cart subtotal**. Choose this will show an extra field:
    - **Max. Discount Amount**: enter the maximum amount that can be discounted by **Percent** of cart subtotal to apply the discount for the entire cart
  
***Note***: It is preferable to consider the smaller maximum discount amount if the maximum discount amount for the entire cart and for each rule both are selected.

**Example**: For each rule **Maximum Discount Type = Fixed amount** and **Maximum Discount Amount** is $ 10. But at **Configuration* of this module, **Maximum Discount for the Whole Cart** is also selected as **Fixed amount** and **Maximum Discount Amount** with only $ 5. So when customers order, the maximum discount for the entire cart is only $5.


#### 1.2. Cart Hint Message (coming soon)

![Imgur](https://i.imgur.com/Y0QPedr.png)

- **Enable**: Select **Yes** to display **Cart Hint Message** to notify customers about the discount program.
- **Upsell Cart Hint**: If you select **Yes**, it will display a suggestion message in the shopping cart for discount programs if customer add to cart with the product or the amount is in the discount program but not yet eligible for a discount. For example: Buy 2 more bag to get 20% discount for whole order.

![Imgur](https://i.imgur.com/p3ag4ga.png)

- **Display cart hints on coupon invalid**: Select **Yes** to enable displaying of message suggesting cart when coupon is invalid.

#### 1.3. Developer

- **Developer Mode**: select **Yes** to enable **Developer Mode**. When it is enabled, you can see discounts applied to specific products in your shopping cart via Developer Mode. If you leave this blanl, all the promotions programs will be accessable for every IP Address. 

![Imgur](https://i.imgur.com/ycXOTbw.png)

- **White List IP(s)**: Enter the IP address which can see Developer Mode. It is possible to enter multiple IP addresses at the same time and they must be separated by a comma (,). For example: 192.168.1.20,192.168.2. *

### 2. Manage Rules

Login to the Magento Admin, choose `Marketing > Promotions > Cart Price Rules`.

#### 2.1. Grid

![Imgur](https://i.imgur.com/CrPBI9e.png)

- Besides Magento available fields, there are also other information such as **Discount Type, Discount Amount, Item Action** so that admin can know the details of each rule and filter information easily.
- Admin can also perform some actions: **Delete rules**, **Change Status** with **Activate/ Inactivate** for each rule or all rules.

#### 2.2. Create new Rules


#### 2.2.1. Rule Information
Enter and select all rule information such as Rule Name, Coupon, Coupon Code, etc. to start creating promotions.

![Imgur](https://i.imgur.com/kxZk1LE.png)

![Imgur](https://i.imgur.com/PsUhgIv.png)

#### 2.2.2. Conditions

Beside the existing conditions of Magento, we also add a number of conditions to create various promotions for your customers. If customers order satisfies the selected conditions, discounts will be applied.

Click (+) to select conditions for rules with **Orders subselection**.

![Imgur](https://i.imgur.com/qZlNprv.png)

- Choose different conditions here. Example: "If **total paid amount equals or greater than $50** for a subselection of orders matching ALL of these conditions (leave blank for all orders)". If only the condition is selected here - without the extra conditions, it will apply to all orders.

![Imgur](https://i.imgur.com/K2hao6W.png)

- Admin can choose to add extra conditions to attract your customers. Example: "If **total paid amount equals or greater than $50** for a subselection of orders matching ALL of these conditions (leave blank for all orders) and **Order Status** contains **Complete**". If customer order satisfies the selected conditions, discount will apply.

![Imgur](https://i.imgur.com/x5R2A7K.png)

#### 2.2.3. Actions

![Imgur](https://i.imgur.com/4wEcmM7.png)

- **Apply**: Select **Discount Type** for promotion rules.
  - **Percent of product price discount**: Discount by a percentage from the original price. Discount applies to each eligible item in the cart. Example: **Discount Amount** is 10. So if any product meets the conditions, it will get a 10% discount from the original price.
  - **Fixed amount discount**: Discount for each product when purchasing a specific number of products in the same category. Example: Discount Amount is 10, Discount Qty Step (Buy X) is 3. If the customer buys 3 bags of Driven Backpack then they will receive a discount for each bag of $10. So the total discount is $30.
  - **Fixed amount discount for whole cart**: Discount the entire cart by a Fixed amount from the total amount in the cart.  Example: **Discount Amount** is 10. So will get a discount of $10 for the total cart amount. 
  - **To-fixed amount discount**: Discount only fixed amount if you buy enough quantity of selected products. Example: Discount Amount is 10, Discount Qty Step is 3. If customers buy 3 Driven Backpack bags and the amount paid for each bag is now only $10. So the amount of money you have to pay when buying 3 bags of Driven Backpack is only $30 
  - **Buy X get Y free (discount amount is Y)**: Set the quantity that customers must buy to receive free quantities. For example: **Discount Amount (get Y)** is 1, **Discount Qty Step (Buy X)** is 3. So if the condition is satisfied, when customers buy 3 products of the same type, if you buy the fourth product, it is still that product. If you buy Buy 3 tee shirts, you will receive a fourth product for free.
  - **For each $X spent, get $Y discount**: Set the amount that customers have to buy with each product to receive a discounted amount. Example: **Discount Amount (get $Y)** is 1, **Discount Qty Step (Buy X)** is 30. So when you have a cart with each **Subtotal** product is $30, you will get a discount of $1. Subtotal products price is smaller than $30 will not be applied discount.
  - **For each $X spent, get $Y discount for the whole cart**: Set the amount that customers have to buy to receive a discounted amount over the whole cart. For example: **Discount Amount (get $Y)** is 1, **Discount Qty Step (Buy X)** is 30. So the entire cart has a Subtotal of $30 and will be discounted by $1.

- **Discount Amount**: Enter the discounted amount in the **Discount Amount** field.

- **Maximum Qty Discount is Applied To**: Enter the maximum number of same products that can be eligible for a discount in the same cart. If the quantity of the same product exceeds the maximum permitted quantity, the discount will not be applied. If you leave this field blank or fill in 0 here, there will be no limited for same product quantity eligible for discount.  
- **Discount Qty Step (Buy X)**: Enter the amount in the Discount Qty Step (Buy X) field that the customer must purchase to receive the discount. For example: If you choose to apply a discount type For each $ X spent, get $ Y discount, Discount Qty Step (Buy X), then 30, you must buy with the Subtotal of each product in the cart to reach or exceed $ 30. Discount will apply. If the Subtotal is not reached $ 30, there is no discount for that product.

- **Maximum Discount Type**: Choose the maximum discount for each rule:
  - **No**: there is no limit to the discount according to each rule.
  - **Fixed amount**: apply maximum discount for rules with **Maximum Discount Type** is **Fixed amount**. Choose this will show an extra field:
    - **Maximum Discount Amount**: Enter the maximum discount amount according to **Fixed amount** to apply the discount for the whole cart. Example: **Maximum Discount Amount** is 10. So the maximum discount amount is no more than $10 of the whole cart value.
  - **Percent of cart subtotal**: Maximum discount for all shopping carts in rules with **Maximum Discount Type** is **Percent of cart subtotal**. Choose this will show an extra field:
    - **Maximum Discount Amount**: Enter the maximum amount that can be discounted by **Percent of cart subtotal** to apply the discount for the whole cart. Example: **Maximum Discount Amount** is 10. So the maximum discount amount should not exceed 10% of the whole cart value.
  
- **Note**: It is preferable to consider the smaller maximum discount amount if the maximum discount amount for the entire cart and for each rule both are selected.

- **Apply to Shipping Amount**: Select **yes** to apply the discount for **Subtotal** and **Shipping Amount**.
- **Discard Subsequent Rules**: Select **Yes** to stop applying other rules after this rule is applied
- **Free Shipping**: If the order is satisfied with the rule, select the option for Free Shipping configuration: 
  - **No**
  - **For matching items only**
  - **For shipment with matching items**
  
![Imgur](https://i.imgur.com/GViSGq4.png)

- **Addition Item Action**: Choose additional conditions to apply product discounts:
- **Cheapest item**: apply discount for the product with the lowest price in cart. Show an extra field:
  - **Qty of applied products**:
    - Enter the number in the field **Qty of applied products**. Example: The input value for the field is 3. In the cart there are 4 products: A ($ 10), B ($ 20), C ($ 30), D ($ 40). So disocunt will be applied for products A, B and C.
    - If left blank or fill in 0, there is default one product is applied for discount. 
    
- **Expensive item**: apply discount for the most expensive product in cart. Show an extra field:
  - **Qty of applied products**:
    - Enter the number in the field **Qty of applied products**. Example: The input value for the field is 3. In the cart there are 4 products: A ($ 10), B ($ 20), C ($ 30), D ($ 40). So disocunt will be applied for products B, C and D.
    - If left blank or 0, there is default one product is applied for discount. 
    
### 3. Example Cases    

Login to the Magento Admin, choose `Marketing > Promotions > Cart Price Rules`, click **Add new** button ti create new promotion program.

Please look at the below table, we will guide you to set up some typical rules by **Special Promotions** extension. 

![](https://i.imgur.com/tjAjXaZ.png)

![](https://i.imgur.com/6hDPu4s.png)

![](https://i.imgur.com/xWHPJH8.png)

