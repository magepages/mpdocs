# Countdown Timer

## Overview


In order to increase the accessibility ò customers and demand for products, Mageplaza developed the [Countdown Timer extension](https://www.mageplaza.com/magento-2-countdown-timer/). This module allows admin to add countdown timer displayed on the website for new products or promotional products. There are 2 types of countdown timer which are before the promotion sale and while running the promotion sale. In addition, there are 5 countdown timer templates available for admin to easily select and edit in accordance with the website design.

## How to download and install

- [Download Mageplaza Countdown Timer](https://www.mageplaza.com/magento-2-countdown-timer/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


## How to use

- [Front] Displays the countdown for the catalog
- [Front] Display countdown none product
- [Front] 5 design for clock


## How to Configuration
From the **Admin Panel**, go to `Content > Countdown Timer > Configuration`

### 1. Configuration
From the **Admin Panel**, go to `Content> Countdown Timer> Configuration`, select **General**

- **Enable**: Select **Yes** to turn on the module 


### 2. Countdown Timer

From the **Admin Panel**, go to `Content> Countdown Timer> Manage Rules`

- This is where the discount list is displayed.
- From Countdown Timer, admin can capture basic information of Countdown Timer such as ID, Name, Status, Customer Groups, Store View, Priority, Action.
- **Action**:
  - **Delete**: Delete the information on the Countdown Timer page.
  - **Change Status**: Change the status of the selected Countdown Timer.
  - **Edit**: Navigate to the previous Countdown Timer Infomation page.
  - In addition, admin can **Filter, Change Store View, Hide / Display Columns**.


### 3. New/Edit Countdown Timer

From the **Admin Panel**, go to `Content> Countdown Timer> Manage Rules> Add new`


#### 3.1. General

From the **Admin Panel**, go to `Content> Countdown Timer> Manage Rules> Add new`, select **General**

- **Name**: Enter a name for Countdown Timer, this is a required field
- **Status**: Select **Enable** to display **Countdown Timer** in **Frontend**.
- **Store View(s)**: Select the store in which Countdown Timer is displayed, you can select multiple stores
- **Customer Group(s)**: Select the customer group for which Countdown Timer will be visible, you can select multiple customer groups.
- **Apply for**: Countdown Timer applies to each option:
  - **None Product base**: not applicable based on product 
    - Displays two more field **Start countdown date** and **End countdown dates**.

  - **All products with special price**: Countdown Timer displayed on all products at Frontend.

  - **Specific Products with special price**: Choose to apply to specific products.
    - Show more item information **Conditions**

  - Inherit condition from Catalog Rules: inherit conditions from the catalog rule
    - Show additional **Select Catalog Price Rule** fields

- **Priority**: default value is 0. Countdown Timer has smaller Priority numbers that will be displayed first at Frontend.


#### 3.2. Display

From the **Admin Panel**, go to `Content> Countdown Timer> Manage Rules> Add new`, select **Display**


- **Display on**:
  - Select **position** to display the Countdown Timer in Frontend.
  - Only show the **Product View** option when **Apply for = Apply for product base**.
- **Snippet Code**: display the code segment.

- **Before Start**:

  - **Enable**: Select **Yes** to display Countdown Timer before product promotion start.
  - **Clock Style**: choose 1 of 5 available timer types.
  - **Template**: Use the `{{clock}}` variable, `{{save_amount}}` & `{{save_percent}}` to put in.
  - **Custom CSS**: Title, Message ... are all written in the Template field and formatted with Custom CSS
  
  
- **While Running**:

  - **Enable**: Select **Yes** to display **Countdown Timer** while product promotion.
  - **Clock Style**: choose 1 of 5 available clock types.
  - **Template**: Use the `{{clock}}` variable, `{{save_amount}}` & `{{save_percent}}` to put in.
  - **Custom CSS**: Title, Message,... are all written in the Template field and formatted with Custom CSS
