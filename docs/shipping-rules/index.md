# Shipping Rules
## Overview

Default Magento only allows fixed shipping fees for item or order, admins can only set rules to free items / orders that can not be custom shipping price. The Shipping Rules module provides some solutions for admins to change, add or subtract shipments by item or order. Or admins can create rules to apply ship fees for certain days or time frames or apply shipping fees to each store or different customer groups.

## How to use
- The rule is applied on the frontend
- The rule is apllied in the backend

## How to configure

From the Admin Panel, go to `Sales > Shipping Rules > Configuration`

### 1. Configuration

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

##### Step 2: Set the conditions to apply the rule in the Conditions section

- Select conditions to apply the rule
- You can choose which products apply the rule or which conditions satisfy the rule. You can find products that meet the conditions in the `PREVIEW PRODUCTS` section
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



##### Step 3: Set up shipment calculation in Actions section
###### Configure Calculation Shipping Fee

- **How to apply fee**
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


###### Configure Order Scope: 

- Type
  - Type = Disable: No shipping fee for Order
  - Type = Fixed Amount: The shipment fee is a fixed amount per order
  - Type = Percentage of original shipping fee: The shipping charge is the percentage of the original shipping fee. For example: fill 5%, initial shipping fee is $ 20. The shipment fee is $ 1 or $ 20 + $ 1 or $ 20 - $ 1 (depending on how to apply the fee).
  - Type = Percentage of cart total: Shipment charge is the percentage of total amount. For example, fill 5%, cart total $ 200, initial shipping $ 20. The shipment fee is $ 10 or $ 20 + $ 10 or $ 20 - $ 10 (depending on how to apply the fee).
    - Cart Total includes
      - Cart Total includes = Tax: The shipment fee is based on the total amount of the purchase including Tax
      - Cart Total includes = Discount: Ship charges are calculated based on the total purchase amount after discount
      - Cart Total can be selected including Tax and Discount

- Fee Amount
  - Enter fixed shipment or percentage to charge ship
  - This field is not empty

###### Configure Cart Items Scope:

- Type
  - Type = Disable: No shipping charge for each product
  - Type = Fixed Amount: The shipment fee is a fixed amount per order
  - Type: Fixed amount with each of weight unit: Ship charge is calculated as a certain amount per unit weight. For example, fill $ 5, the weight of the item is 2kg, the original shipment fee is $ 20. The shipment fee is $ 10 or $ 20 + $ 10 or $ 20 - $ 10 (depending on how to apply the fee).
  - Type = Percentage of cart total: Shipment charge is the percentage of total amount. For example, fill 5%, cart total $ 200, initial shipping $ 20. The shipment fee is $ 10 or $ 20 + $ 10 or $ 20 - $ 10 (depending on how to apply the fee).
    - Item price includes
      - Item price includes = Tax: Shipment fee is based on the price of each product included Tax
      - Item price includes = Discount: Ship charges are calculated based on the price of each item after discount
      - You can choose the price of each product including Tax and Discount

- Fee Amount
  - Enter fixed shipment or percentage to charge ship
  - This field is not empty

- Select the conditions for applying the rule to each product. Only purchase the selected products here to apply shipping charges for each product. You can see the selected products in the PREVIEW PRODUCTS section

  - Apply for free shipping items
    - Select Yes to apply the rule to the products that are shipped free if the products selected are also in the same rule and that rule has a free configuration ship when purchasing these products.






















