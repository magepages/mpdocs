# Payment Restriction
## Overview


## How to configure

### 1. Configuration

From the Admin Panel, go to `Sales > Payment Restriction > Configuration`, choose `General Configuration` section.

![Imgur](https://i.imgur.com/cIht2lG.png)

- **Enable**: Choose "Yes" to enable the features of this module

### 2. Manage Rule
#### 2.1. Grid

From the Admin Panel, go to `Sales > Payment Restriction > Manage Rules`.

![Imgur](https://i.imgur.com/CoiEZQw.png)

- This section will record all created rules with the basic information as *Name, Status, Method, Store view, Customer Groups, etc*
- Admins can perform some actions:
  - `Delete`: Choose the rule you want to delete
  - `Change status`: Tick to choose the rule that you want to change the status, choose "Running" to use the rules
  - `Edit`: Click on "edit" button onn any rule you want to edit the content
  - Also, admins can filter, change the store view, hide/show the grid and they can click on `Add New` button to create a new rule
  
#### 2.2. Create New Rul
##### How to Create New Rule

From the Admin Panel, go to `Sales > Payment Restriction > Configuration`, choose `Add New` button in the right corner

![Imgur](https://i.imgur.com/BuYxsIm.png)

##### 2.2.1. General

![Imgur](https://i.imgur.com/7xOWr0c.png)

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

![Imgur](https://i.imgur.com/NUhirhB.png)

**Apply the rule only if the following conditions are met (leave blank for all products)**

- Set the conditions to apply the rule. All products that meet the conditions will be applied the rule

![Imgur](https://i.imgur.com/NUhirhB.png)

**Apply the rule depending on Cart Price Rules (This will override the conditions above)**

![Imgur](https://i.imgur.com/NUhirhB.png)

  - **Active if these Cart Price Rules are applied:**
    -  


##### 2.2.3. Actions


### 3. Compatible with Mageplaza One Step Checkout


















