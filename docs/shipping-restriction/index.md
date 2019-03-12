# Shipping Restriction

## Overview

In fact, shop owners often want to limit the display of shipping methods based on criteria such as the view of the row, customer group, cart condition, product attributes, time limit or ability. Compatible with sales rules. Thanks to Mageplaza's Shipping Restriction extension, you will be able to achieve this and take full control of the use of in-store shipping methods and improve efficiency.
The Shipping Restriction utility is fully compatible with [Mageplaza's One Checkout Step](https://www.mageplaza.com/magento-2-one-step-checkout-extension/).

## How to download and install

- [Download Mageplaza Shipping Restriction](https://www.mageplaza.com/magento-2-shipping-restriction/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


## How to Configuration

From **Admin Panel**, go to `Stores > Shipping Restriction > Configuration`

![Imgur](https://i.imgur.com/g39bBQX.png)

### 1. Configuration

From the **Admin Panel**, go to `Stores > Shipping Restriction > Configuration`, select **General**

![Imgur](https://i.imgur.com/3EqNhqX.png)

### 2. Manage Rule

#### 2.1. Grid

- From the **Admin Panel**, go to `Stores > Shipping Restriction > Manage Rules`

![Imgur](https://i.imgur.com/ctkUae7.png)

- From **Manage Rules**, admin can capture basic information such as **ID, Name, Status, Method, Store View, Customer Groups, Sort Order, Action**.

- **Action**:
  - **Delete**: Select the rule you want to delete.
  - **Change Status**: Change the status of the selected rules.
  - **Edit**: Navigate to the edit page of the previously created rule information.
  
- Also, admin can **Filter, Change Store view, Hide/Show Columns**.

### 2.2. Create New Rule

From the **Admin Panel**, go to `Stores > Shipping Restriction > Manage Rules`, select **Add new**


#### 2.2.1. General

![Imgur](https://i.imgur.com/AOxl3ys.png)

![Imgur](https://i.imgur.com/3mwLpZ5.png)


- **Name**: Name the rule, which is the required field.
- **Description**: Enter the description for the rule.
- **Status**: Select "Enable" to allow the rule to be applied.
- **Store View(s)**:
  - Select store view. Only apply rules for products on selected stores.
- Many store views can be selected at the same time to display the rule.
- **Customer Group(s)**: Select one or more customer groups at the same time to use the rule. Non-selected customer groups will not apply the rule.
- **From**: Click on the calendar icon to select the date / month / year. The rule will start from the date / month / year you selected.
- **To**: Click the calendar icon to select the date / month / year to complete the rule application.
- **Select Day (s)**: Select the days of the week. The rule will be applied to the days of the week with the date / year / year you selected. The remaining days will not apply the rule.
- **Time from**:
  - Select the time of day to start applying the rule.
  - For countries located in different time zones, they will be applied according to the time selected for those countries. For example: Vietnam is in GMT +7, US in GMT -5. Time from 8 am, so 8 am in Vietnam and 8 am in the US will begin to apply the rule when customers buy goods.
- **Time to**:
  - Choose the time of day. The rule will end at the time you selected.
  - For countries located in different time zones, they will be applied according to the time selected for those countries. For example: Vietnam is in GMT +7, US in GMT -5. The end time is 19h in Vietnam and 19h in the US will not apply the rule when customers buy goods.
- **Priority**:
- Enter the priority for the rule.
- The smaller the number of priority rules, the higher the priority. 0 is the highest priority.


#### 2.2.2. Conditions

![Imgur](https://i.imgur.com/D23ICfh.png)

Chỉ đặt quyền hạn
Set conditions to apply the rule. All products that meet the conditions will apply the rule.
Đang dùng chế độ, depending on giá trị giá rẻ Cart (này sẽ Cross giá trị dưới đây)
Active if these Cart Price Rules are applied:
Select the rule created in Cart Price Rules to activate the Shipping rule.
Many rules can be selected at the same time.
If a customer uses a coupon or a purchase and meets the conditions of the rule selected in the Cart Price Rules, this rule will be applied to Shipping without checking the applicable conditions of the above option.
Inactive if these Cart Price Rules are applied:
Select the rule created in Cart Price Rules to activate the Shipping rule.
Many rules can be selected at the same time.
If the customer uses coupons or purchases and meets the conditions of the rule selected in the Price Price Cart, this rule will not be applied to Shipping without checking the applicable conditions of the above option. .
If one or more rules are selected at the same time in both Active if these Cart Price Rules are applied and Inactive if these Cart Price Rules are applied, then in case if these Cart Price Rules are applied, the rule is applied to Shipping will be checked based on the Inactive feature if these Cart Price Rules are applied.

#### 2.2.3. Actions

![Imgur](https://i.imgur.com/UX18isY.png)

Select Shipping Methods: Select the shipping method to apply the rule. You can choose multiple or all shipping methods to display them all.
Action: Select "Show" to display the selected shipping method.
Location: Select the location to apply the rule on:
Backend Order
Frontend Order
