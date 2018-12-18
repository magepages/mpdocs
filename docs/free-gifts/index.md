# Free Gifts
## Overview

[Mageplaza Free Gift Extension](https://www.mageplaza.com/magento-2-free-gifts/) allows shop owners to set free promotions and give free gifts when customers go shopping at their stores. In addition to setting up easy conditions for free gifts, admins can customize these rules with discounted products, customer groups, quantity restrictions, and so on. Thanks to this, customers are interested in shopping in your Magento store.

## How to use

- Customers can add Free Gift if the product is added to cart and applied the promotion. Free Gift will be added automatically or customers will select the gift they like depending on the installation of admins.
- When the product that is applied for promotion is removed from the cart, their free gifts are also removed.

![free gifts](https://i.imgur.com/3CFLTaG.png)

## How to configure

From the Admin panel, go to `Marketing > Free Gifts`

![free gifts1](https://i.imgur.com/dWZ4sT6.png)

### 1. Configuration

From the Admin panel, go to `Marketing > Free Gifts > Configuration`

![free gifts2](https://i.imgur.com/1qG9Zt9.png)

- **Enable**: Choose "Yes" to enable this module
- **Gift Icon**:
  - The image that is uploaded will be used to do Gift Icon and display on the frontend
  - Jpg, png, gif and svg files are accepted.
  - If you leave this field blank, it will use the default Gift Icon of Mageplaza Reward Point extension.
  - We recommend you should use the icon with the size as 20x20 px.
  
- **Button Label**:
  - This content will be shown on the frontend with the `Add Manual` mode
  - The content needs to show for customers to know that the products they had purchased are given a gift.
  
- **Button Color**: Set the background color of `Add gift` button
- **Text Color**: Set the text color that admins enter in the `Button Label` field

### 2. Manage Rule
#### 2.1. Grid
![free gifts3](https://i.imgur.com/nhPgvzc.png)

- This is a place to store all the created rules
- From the Grid, admins can capture the basic information of the rules such as *ID, Name, Status, State, Website, Customer Group, Priority and Action can be implemented with the Rule*
- In the `Actions` dialog, admins can perform the following actions:
  - `Delete`: Admin needs to tick the rule to delete, then select `Delete` in the `Actions` (upper left of the Grid) to delete. A confirmation dialog will appear, select `OK` to continue deleting
  - `Change Status`: Admins need to tick the Rule that they want to change the status, then select `Change Status > Active/Inactive` in the `Actions` dialog (top left of the Grid) to change. A confirmation dialog will appear, select `OK` to confirm the change.
  - In the `Action` column, click the `Edit` button to edit the information
  - In addition, admins can filter, change Store View, hide/show Columns, Export Grid or edit Inline.
  
  ![free gifts5](https://i.imgur.com/mJT42fV.png)
  
#### 2.2. Add New/Edit Form
##### 2.2.1. General tab

![Imgur](https://i.imgur.com/iqkEVix.png)
free gifts4

- **Name**: Enter the rule name. This name only displays in the backend to distinguish from other rules
- **Status**: Choose "Enable" to allow the rules to work
- **State**:
  - The status of the rule includes: Schedule, Running and Finish
  - This status will auto-change based on `Active From - Active To`

- **Website**: The rule is only applied for the selected website
- **Customer Group**: The rule is only applied for the selected customer group.
- **Active From**: Choose the day that the rule starts to be applied
- **Active To**: Choose the day that the rule finishes
- **Priority**:
  - With rules applied for a product, rules with higher priority are applied first
  - 0 is the highest priority
  
##### 2.2.2. Condition

![free gifts6](https://i.imgur.com/eBJefE1.png)

- This is a place that you select the conditions for the rule. Only products that meet the selected condisitons, the new rule is applied.
- You can add/remove the condition by clicking on `+` or `x`
- You can change the the correctness or wrongness of the condition by clicking on the bold text.

##### 2.2.3. Action

![free gifts7](https://i.imgur.com/vVxWUl3.png)

- **Type**: Choose how to add Free Gift to Cart:
  - `Automatic`: Free Gift is automatically added randomly from the Gift List
  - `Manually`: Customers can add their own Free Gift. Gift List will be displayed as a popup on the frontend

- **Number of gifts allowed**: Limit the free gift that customers can be received when applying this rule
- **Show notice for Gift**: Choose "Yes" to display when customers add a gift to the cart
- **Notice**: Display the message that customer has added free gift successfully
- **Stop further processing**: Select "Yes" to limit the number of rules applied to the product. Rules that have a lower priority than this rule or rules with a precedent but which are created later will not be applied

- *For example*: There are 6 rules, rule 4 has a priority of 10; rule 1 and 5 is 1; rule 2 is 10; rule 3 is 15; Rule 6 is 10. If you choose stop at 4, then this means:
  - Rule 1 and 5 with higher priority will be applied
  - Rule 3 is not applied because of lower priority
  - Rule 2 is applied by the same priority but it is created before
  - Tule 6 is not used because of the same priority but it's created later

- **Gift List**:
  - Contains basic information of the Gift including: *Product ID, Name, SKU, Original Price, Discount, Amount, Free shipping and Action*.
  - Admins click `Add` to add Free Gift or click `Delete` to delete Free Gift
  - There are 3 types of discounts that admins can choose for Free Gift:
    - `Free`: Gift is completely free
    - `Percent`: Gift is sold at X% of original price
    - `Fixed`: Gift is sold for X$

  - With each discount type, admins can set the amount of Discount Amount that you want
  - For each free gift, admins can allow Free Ship or not.

### Frontend

#### Frontend Cart

![free gifts8](https://i.imgur.com/39nHpU8.png)

#### Frontend Popup

![free gifts9](https://i.imgur.com/e5y4msh.png)


Please note that Frontend Popup is only shown with `Manually` type.
























