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


## How to Configure
### 1. Configuration

Login to the Admin Magento, choose `Stores > Settings > Configuration > Mageplaza > Special Promotion`.

#### 1.1. General

- **Enable**: Select **yes** to activate the module features
- **Display Discount Detail**: If choose **Yes**, discount will be divided by rules and display details in collapsible form.

- **Maximum Discount for the Whole Cart**: Apply maximum discount for all products in cart for all rules with:
  - **No**: there will be no discount for the entire cart.
  - **Fixed amount**: apply maximum discount for the entire cart for rules with **Maximum Discount Type** is **Fixed amount**. Choose **Fixed amount** will show an extra field:
    - **Maximum Discount Amount**: Enter the maximum discountable amount according to **Fixed amount** to apply the discount for the entire cart
  - **Percent of cart subtotal**: Maximum discount for all shopping carts in rules with Maximum Discount Type is **Percent of cart subtotal**. Choose this will show an extra field:
    - **Maximum Discount Amount**: enter the maximum amount that can be discounted by **Percent** of cart subtotal to apply the discount for the entire cart
  
***Note***: The Configuration section is the maximum discount limit for the entire cart and prioritizes the maximum amount that can be discounted here first if the **Maximum Discount Type** of each rule all are selected.

**Example**: For each rule **Maximum Discount Type = Fixed amount** and **Maximum Discount Amount** is $ 10. But at **Configuration* of this module, **Maximum Discount for the Whole Cart** is also selected as **Fixed amount** and **Maximum Discount Amount** with only $ 5. So when customers order, the maximum discount for the entire cart is only $5.


#### 1.2. Cart Hint Message (coming soon)


- **Enable**: Select **Yes** to display **Cart Hint Message** to notify customers about the discount program.
- **Upsell Cart Hint**: If you select **Yes**, it will display a suggestion message in the shopping cart for discount programs if customer add to cart with the product or the amount is in the discount program but not yet eligible for a discount. For example: Buy 2 more bag to get 20% discount for whole order.

- **Display cart hints on coupon invalid**: Select **Yes** to enable displaying of message suggesting cart when coupon is invalid.

#### 1.3. Developer

- **Developer Mode**: select **Yes** to enable **Developer Mode**. When it is enabled, you can see discounts applied to specific products in your shopping cart via Developer Mode. It is not available for customers and applies only to Developer (admin).
- **White List IP(s)**: Enter the IP address which can see Developer Mode. It is possible to enter multiple IP addresses at the same time and they must be separated by a comma (,). For example: 192.168.1.20,192.168.2. *

### 2. Manage Rules

Login to the Magento Admin, choose `Marketing > Promotions > Cart Price Rules`.

#### 2.1. Grid

- Besides Magento available fields, there are also other information such as **Discount Type, Discount Amount, Item Action** so that admin can know the details of each rule and filter information easily.
- Admin can also perform some actions: **Delete rules**, **Change Status** with **Enable/ Disable** each rule or all rules.

#### 2.2. Create new Rules


#### 2.2.1. Rule Information
Enter and select all rule information such as Rule Name, Coupon, Coupon Code, etc. to start creating promotions.


#### 2.2.2. Conditions

Beside the existing conditions of Magento, we also add a number of conditions to create various promotions for your customers. If customers order satisfies the selected conditions, discounts will be applied.

Click (+) to select conditions for rules with **Orders subselection**.

- Choose different conditions here. Example: "If total paid amount equals or greater than 50 for a subselection of orders matching ALL of these conditions (leave blank for all orders)". If only the condition is selected here - without the extra conditions, it will apply to all orders.










Admin can choose to add extra conditions to attract your customers. Special offer for each customer group. Example: "If total paid amount equals or greater than $ 50 for a subselection of orders matching ALL of these conditions (leave blank for all orders) and Order Status contains Complete". If customer satisfies the selected conditions, discount will apply.

#### 2.2.3. Actions

- Apply: Select Discount Type for rules to apply a discount.
- Percent of product price discount: Reduce the price of goods by subtracting a percentage from the original price. Discount applies to each eligible item in the cart. Example: Discount Amount is 10. So if you meet the conditions, you will get a 10% discount from the original price.
- Fixed amount discount: Discount the product by deducting the fixed amount discount from the original price of each eligible item in the cart. Example: Discount Amount is 10. So will get a discount of $ 10 from the original price.
- Fixed amount discount for whole cart: Discount the entire cart by subtracting one Fixed amount from the total amount in the cart. -  - - Example: Discount Amount is 10. So will get a discount of $ 10 for the total amount of the entire cart.
- To-fixed amount discount: discount only to fixed amount compared to Subtotal of each product. For example: Discount Amount is 10, - - - Discount Qty Step is 30. So when in the cart with each Subtotal product with $ 30, the amount paid for that product is only $ 10.
- Buy X get Y free (discount amount is Y): Determine the amount that customers must buy to receive free quantities. For example: - ----- - Discount Amount (get Y) is 1, Discount Qty Step (Buy X) is 3. So if the condition is satisfied, when customers buy 3 products of the same type, if you buy the fourth product, it is still that product. If you buy Buy 3 tee shirts and get the 4th, you will receive a fourth product promotion.
- For each $ X spent, get $ Y discount: Determine the amount that customers have to buy with each product to receive a discounted amount. Example: Discount Amount (get $ Y) is 1, Discount Qty Step (Buy X) is 30. So when you have a cart with each Subtotal product with $ 30, you will get a discount of $ 1. Discounts for Subtotal products <$ 30 will not apply.
- For each $ X spent, get $ Y discount for the whole cart: Determine the amount that customers have to buy to receive a discounted amount compared to the entire cart. For example: Discount Amount (get $ Y) is 1, Discount Qty Step (Buy X) is 30. So the entire cart has a Subtotal of $ 30 and will be reduced by $ 1.
- Discount Amount: Enter the discounted amount in the Discount Amount field.
- Maximum Qty Discount is Applied To: Enter the maximum number of same products that may be eligible for a discount in the same cart. If the quantity of the same product exceeds the maximum permitted quantity, the discount will not be applied.
- Discount Qty Step (Buy X): Enter the amount in the Discount Qty Step (Buy X) field that the customer must purchase to receive the discount. For example: If you choose to apply a discount type For each $ X spent, get $ Y discount, Discount Qty Step (Buy X), then 30, you must buy with the Subtotal of each product in the cart to reach or exceed $ 30. Discount will apply. If the Subtotal is not reached $ 30, there is no discount for that product.
- Maximum Discount Type: Choose the maximum discount for each rule:
- No: there is no limit to the discount according to each rule.
- Fixed amount: apply maximum discount for rules for rules with Maximum Discount Type is Fixed amount. Show more fields:
- Maximum Discount Amount: Enter the maximum discountable amount according to Fixed amount to apply the discount for the entire cart. - - Example: Maximum Discount Amount is 10. So the maximum discount amount is no more than $ 10 compared to the entire cart.
- Percent of cart subtotal: Maximum discount for all shopping carts in rules with Maximum Discount Type is Percent of cart subtotal. Show more fields:
- Maximum Discount Amount: Enter the maximum amount that can be discounted by Percent of cart subtotal to apply the discount for the entire cart. Example: Maximum Discount Amount is 10. So the maximum discount amount should not exceed 10% of the entire cart.
- Note: Apply the maximum discount amount for each rule when the Configuration section with general field of Maximum Discount Type is not selected. Priority consider the amount of discount for
