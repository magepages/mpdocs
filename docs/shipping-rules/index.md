# Shipping Rules
## Overview

Default Magento only allows fixed shipping fees for item or order, admins can only set rules to free items/orders that can not custom the shipping price. [Mageplaza Shipping Rules module](http://www.mageplaza.com/magento-2-shipping-rules/) provides some solutions for admins to change, add or subtract shipments by the item or order. Or admins can create rules to apply shipping fees for certain days or time frames or apply shipping fees to each store or different customer groups.

## How to use
- The rule is applied on the frontend

![shipping rules](https://i.imgur.com/L6rlhBE.png)

- The rule is apllied in the backend

![shipping rules 1](https://i.imgur.com/xlL1aav.png)

## How to configure

From the Admin Panel, go to `Sales > Shipping Rules > Configuration`

![shipping rules 2](https://i.imgur.com/NcNUmpR.png)

### 1. Configuration

![shipping rules3](https://i.imgur.com/WCcgXpJ.png)

#### General

- **Enable**: Choose Yes to use the features of this module
- **Apply for Backend Order**: Choose Yes to apply the rule when admins create a new order

### 2. Manage Rules
#### How to add a new rules
- Step 1: Enter the full General information
- Step 2: Set the conditions to apply the rule in the `Conditions` section
- Step 3: Set up shipment calculation in `Actions` section

##### Step 1: Enter the full General information

- **Name**: Enter the name of the rule
- **Decription**: Enter a description for the rule
- **Status**: Select "Enable" to apply the rule
- **Select Shipping Methods**
  - Select the delivery method
  - You can choose from a variety of delivery methods

- **Store Views**
  - Only the products in the selected store will be applied the rule
  - Multiple stores can be selected at the same time

- **Customer Groups**
  - Apply the rule to the customers of the selected group
  - Multiple groups can be selected at the same time
  
- **From**: Choose the date/month/year to start applying the rule
- **To**: Select the date/month/year to end applying the rule
- **Select Days**
  - Select the day of the week to apply the rule
  - Multiple dates can be selected at the same time

- **Time From**
  - Select the hours of the day to start applying the rule
  - For countries located in different time zones, they will apply according to the hours configured for those countries. For example:
Viet Nam is in GMT +7. America is in GMT -5. Time From is 8:00 AM, then 8:00 AM of Vietnam and 8:00 AM of America will start applying the rule when there are buyers.
  
- **Time To**:
  - Select the hours of the day to finish applying the rule
  - For countries located in different time zones, they will apply according to the hours configured for those countries. For example:
Viet Nam is in GMT +7. America is in GMT -5. Time From is 17:00 PM, then 17:00 PM of Vietnam and 17:00 PM of America will not apply the rule when there are buyers.

- **Priority**
  - Enter the priority for synchronizing objects
  - The smaller the number, the higher the priority
  - For rules with equal priority, the priority will be based on what rules are created first.

![shipping rules4](https://i.imgur.com/LvWuyfE.png)

##### Step 2: Set the conditions to apply the rule in the Conditions section

- Select conditions to apply the rule
- You can set the conditions for **Cart** or **Product** section as *Subtotal  greater than  50, Total Items Quantity less than  5, etc*
- The condition to apply Shipping Rules will depend on `Cart Price Rules`.
  - Active if Cart Price Rules applied
    - Select the created rule in the `Cart Price Rules` to activate the rule for shipping
    - Multiple rules can be selected at the same time
    - If the customers use a coupon or purchase and satisfy the conditions of the selected rule in the `Cart Price Rules`, this rule will be applied to shipping without checking the applicable conditions of the selection above.

  - Inactive if Cart Price Rules applied
    - Select the created rule in the `Cart Price Rules` to activate the rule for shipping
    - Multiple rules can be selected at the same time
    - If the customers use a coupon or purchase and satisfy the conditions of the selected rule in the `Cart Price Rules`, this shipping rule will not apply without checking the applicable conditions of the selection above.
    - If one or more rules is selected in the `Active if Cart Price Rules applied` fields and `Inactive if Cart Price Rules applied` fields, the `Inactive if Cart Price Rules applied` field will be checked based on the `Inactive if Cart Price Rules applied`

![shipping rules5](https://i.imgur.com/T8phYaX.png)

##### Step 3: Set up shipment calculation in Actions section
###### Configure Calculation Shipping Fee

- **How to apply fee**

![shipping rules6](https://i.imgur.com/ivnS9py.png)

  - `How to apply fee = Re-calculate shipping fee`: Replace the old shipping fee calculation
  - `How to apply fee = Add extra fee`: Add the extra fee for the shipping
    - *Minimal fee change*: Enter the minimum change fee
    - *Maximal fee change*: Enter the maximum change fee

  - `How to apply fee = Subtract extra fee`: Discount the shipping surcharge
    - *Minimal fee change*: Enter the minimum change fee
    - *Maximal fee change*: Enter the maximum change fee
    - For example: Admins configure `Minimal fee change` is $5. After calculating the shipping fee will be $20. Original shipping fee is $10. The actual shipping fee will be $10 + $5 (if `How to apply fee = Add extra fee`) or $10 - $5 (if `How to apply fee = Subtract extra fee`). It's the same as with `Maximal fee change`

- `Minimal of Total Shipping Fee`: Enter the minimum shipping charge that the customers must pay
- `Maximal of Total Shipping Fee`: Enter the maximum shipping charge that the customers will pay
  - For example: Admins configure `Minimal of Total Shipping Fee` is $15. After calculating the shipping fee will be $12. The actual shipping fee will be $15. Similar to the `Maximal of Total Shipping Fee`, the Maximal of Total Shipping Fee is $25. After calculating the shipping fee is  30. The actual shipping fee will be $25.

![shipping rules7](https://i.imgur.com/nikv7Qo.png)

###### Configure Order Scope: Shipping fee is calculated for the Order

- **Type**

![shipping rules8](https://i.imgur.com/AuqQKmb.png)

  - `Type = Disable`: The shipping fee is not calculated for the Order
  - `Type = Fixed Amount`: The shipping fee is a fixed amount per order
  - `Type = Percentage of original shipping fee`: The shipping fee is the percentage of the original shipping fee. For example, you fill in 5%, the original shipment fee is $20, so the shipping fee is $1 (if the configuration of the `How to apply fee = Re-calculate shipping fee`)
  - `Type = Percentage of cart total`: Shipping fee is the percentage of total amount. For example: you fill in 5%, cart total is $200, so shipment fee is $10 (if configuration of `How to apply fee = Re-calculate shipping fee`)

    - `Cart Total includes`:
      - `Cart Total includes = Tax`: Shipping fee is calculated based on the total amount of the purchase including Tax
      - `Cart Total includes = Discount`: Shipping fee is calculated based on the total purchase amount after discount
      - Cart Total can be selected including Tax and Discount
      
      ![shipping rules9](https://i.imgur.com/affYta2.png)

- **Fee Amount**
  - Enter fixed shipment or percentage to charge ship
  - This field is not empty

###### Configure Cart Items Scope:

- **Type**

![shipping rules11](https://i.imgur.com/8fcuLLo.png)

  - `Type = Disable`: The shipping fee is not calculated for each product
  - `Type = Fixed Amount`: The shipping fee is a fixed amount per each order
  - `Type = Fixed amount with each of weight unit`: Shipping fee is calculated as a certain amount per unit weight. For example: you fill in $5, weight of item is 2kg, so shipping fee is $10 (if configuration of `How to apply fee = Re-calculate shipping fee`)
 - `Type = Percentage of cart total`: Shipping fee is the percentage of total amount. For example: you fill in 5%, cart total is $200, so shipping fee is $10 (if configuration of `How to apply fee = Re-calculate shipping fee`)
 
    - **Item price includes**
      - `Item price includes = Tax`: Shipment fee is based on the price of each product included Tax
      - `Item price includes = Discount`: Ship charges are calculated based on the price of each item after discount
      - You can choose the price of each product including Tax and Discount
      
      ![shipping rules12](https://i.imgur.com/g76dgXd.png)

- **Fee Amount**
  - Enter fixed shipment or percentage to charge ship
  - You are not allowed leaving this field blank

- Select the conditions for applying the rule to each product. Only when you purchase the selected products here, shipping fee is applied for each product. You can see the selected products in the `PREVIEW PRODUCTS` section

  - `Apply for free shipping items`
    - Select Yes to apply the rule to the products that are shipped free if the selected products are also in the same rule and that rule has a free shipping configuration when purchasing these products.

![shipping rules13](https://i.imgur.com/aXbKT0Z.png)

### 3. Compatible with [Mageplaza One Step Checkout](https://www.mageplaza.com/magento-2-one-step-checkout-extension/) 

![shipping rules14](https://i.imgur.com/QS2AJem.png)
















