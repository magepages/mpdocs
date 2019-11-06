# Payment Restriction
## Overview

In practice, shop owners often want to limit the display of Payment Method based on multiple criteria such as Customer group, Cart condition, product attribute, time limit, or the compatibility with sales rule. Thanks to [Mageplaza Payment Restriction extension](https://www.mageplaza.com/magento-2-payment-restriction/), you will be able to achieve this and fully control the use of in-store payment methods and improve efficiency.

This extension is totally compatible with [Mageplaza One Step Checkout](https://www.mageplaza.com/magento-2-one-step-checkout-extension/).

## Download and Install

- [Download the Payment Restrictions](https://www.mageplaza.com/magento-2-payment-restriction/)
- [Install Mageplaza extension](https://www.mageplaza.com/install-magento-2-extension/)


## How to configure

### 1. Configuration

From the Admin Panel, go to `Sales > Payment Restriction > Configuration`, choose `General Configuration` section.

![](https://i.imgur.com/uKV1hUp.png)

- **Enable**: Choose "Yes" to enable the features of this module

### 2. Manage Rule
#### 2.1. Grid

From the Admin Panel, go to `Sales > Payment Restriction > Manage Rules`.

![](https://i.imgur.com/ZzYlWQU.png)

- This section will record all created rules with the basic information as *Name, Status, Method, Store view, Customer Groups, etc*
- Admins can perform some actions:
  - `Delete`: Choose the rule you want to delete
  - `Change status`: Tick to choose the rule that you want to change the status, choose "Running" to use the rules
  - `Edit`: Click on "edit" button onn any rule you want to edit the content
  - Also, admins can filter, change the store view, hide/show the grid and they can click on `Add New` button to create a new rule
  
#### 2.2. Create New Rul
##### How to Create New Rule

From the Admin Panel, go to `Sales > Payment Restriction > Configuration`, choose `Add New` button in the right corner


##### 2.2.1. General

![](https://i.imgur.com/vkp4CEY.png)

- **Name**: Set the name of the name
- **Description**: Enter the description for the rule
- **Status**: Choose "Enable" to apply the rule
- **Store View(s)**:
  - Choose Store view, rules will be redirected to display on the selected store. Only apply the rule for the products on the selected stores.
  - Multiple store views can be selected at the same time to display the rule
  
- **Customer Group(s)**: Choose one or many customer groups at the same time to use the rule. The unselected customer groups won't be applied the rule
- **From**: Click on Calendar box to choose date/month/year. The rule will start from date/month/year you have chosen. 
- **To**: Click on Calendar box to choose date/month/year to finish applying the rule
- **Select Day(s)**: Choose the days in week. The rule will be applied for the days in week with date/month/year you have chosen. The remaining days won't be applied the rule
- **Time from**:
  - Select the hours of the day to start applying the rule.
  - For countries located in different time zones, they will be applied according to the hours configured for those countries. For example, Viet Nam is in GMT +7, America is in GMT -5. Time from is 8.00 AM, then 8.00 AM in Viet Nam and 8.00 AM in America will start applying the rule when customers purchase.
  
- **Time to**:
  - Choose the hours of the day. The rule will finish diplaying at the time you have chosen.
  - For countries located in different time zones, they will be applied according to the hours configured for those countries. For example, Viet Nam is in GMT +7, America is in GMT -5. Time To is 6.00 PM, then 6.00 PM in Viet Nam and 6.00 PM in America will not apply the rule when customers purchase.

- **Priority**:
  - Enter the priority for the rule
  - The smaller the number of the rule priority, the higher priority. O is the highest priority.
  
##### 2.2.2. Conditions

![](https://i.imgur.com/RIErTB5.png)

**Apply the rule only if the following conditions are met (leave blank for all products)**

- Set the conditions to apply the rule. All products that meet the conditions will be applied the rule


**Apply the rule depending on Cart Price Rules (This will override the conditions above)**

  - **Active if these Cart Price Rules are applied:**
    - Select created the rule in the `Cart Price Rules` to activate the rule for Payment.
    - Multiple rules can be selected at the same time.
    - If customers use a coupon or purchase and satisfy the condition of the selected rule in the `Cart Price Rules`, this rule will be applied to the Payment without checking the applicable conditions of the selection above.

  - **Inactive if these Cart Price Rules are applied:**
    - Choose the created rule in the `Cart Price Rules` to activate the rule for Payment.
    - Multiple rules can be selected at the same time.
    - If customers use a coupon or purchase and satisfy the condition of the selected rule in the `Cart Price Rules`, this rule will not be applied to the Payment Restriction without checking the applicable conditions of the selection above.
    - If one or more rules is selected at the same time in the both `Active if Cart Price Rules applied` and `Inactive if Cart Price Rules applied` fields, then in the `Inactive if Cart Price Rules` field, the rule that is applied for Payment will be checked based on the feature of `Inactive if Cart Price Rules applied` field.


##### 2.2.3. Actions

![](https://i.imgur.com/SX5RNXO.png)

- **Select Payment Methods**: Choose the payment method to apply the rule. You can choose more or all payment methods to show all `Enabled Payment Methods`
- **Action**: Choose "Show" to display the selected payment methods
- **Apply for**: You can choose the position to apply the rule on:
  - Backend Order
  - Frontend Order




















