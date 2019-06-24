# Edit Order


## Overview
Currently, Magento only allows to edit Customer Information and Address Information at the view order page. If you want to edit other information, you must go to the private Edit Order page, then the old order will automatically be canceled and the new order will be created. And can only edit other information (besides Customer and Address Information) when Order is Pending.
But with Mageplaza Edit Order the editing becomes easier than ever. Extension allows admin to edit information at the order view page via slide popup without having to switch to another link, add Quick Edit action to be able to edit all order information at the same time. In addition, the admin allows to automatically calculate shipping fee if the order information changes

## How to download and install

- [Download Mageplaza Edit Order](https://www.mageplaza.com/magento-2-edit-order/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


## How to Configuration
From the Admin Panel, go to `Stores > Settings > Configuration > Mageplaza Extensions > Edit Order`

![Imgur](https://i.imgur.com/jRiI98I.png)

### 1. Configuration
From the Admin Panel, go to `Stores > Setting > Configuration > Mageplaza Extensions > Edit Order`, select **General**

![Imgur](https://i.imgur.com/ELfu8sj.png)

- **Enable**: Select **Yes** to turn on the Module.
- **Apply For Order With Status**:
  - Apply edit to an order with the selected status.
  - Can select multiple statuses.
- **Enable Quick Edit**:
  - Select **Yes** to display the **Quick Edit** button at the **Edit Order** page.
  - When clicked, the slide popup display can edit all information at the **Edit Order** page.
- **Auto Recalculate Shipping Fee**: Choose **Yes** to automatically calculate shipping fee if order information changes.


### 2. Edit Order

#### 2.1. Edit Order Information
From the Admin Panel, go to `Sales> Orders > View Order > Edit Order`, choose **Edit Order Information**

![Imgur](https://i.imgur.com/00HhSiY.png?1)

- **Order Number**:
  - Edit the order number, the same as the previous order.
  - Do not leave the field blank.
- **Order Date**:
  - Choose the date and time of order.
  - Do not leave the field blank.
- **Status Order**: You can only change the order status in the same state.


#### 2.2. Edit Customer Information
From the Admin Panel, go to `Sales > Orders > View Order > Edit Order`, select **Edit Customer**

![Imgur](https://i.imgur.com/SNw34rV.png?1)

- **Select**: Choose to edit customer information

![Imgur](https://i.imgur.com/DWqeg2l.png)

- **Customer Email**:
  - If you select **Edit Current Customer** option. it will show the customer email in text format, allowing you to edit customer emails.
  - If on select **Change Customer**, this field displays the form 
- **First Name**: Edit customer first name. Do not leave the field blank.
- **Middle Name/ Initial**: Edit customer middle/ initial name. Do not leave the field blank.
- **Last Name**: Edit customer last name. Do not leave the field blank.
- **Customer Group**: Choose a group for customers.


#### 2.3. Edit Billing Address/ Edit Shipping Address

From the Admin Panel, go to `Sales> Orders > View Order > Edit Order`, select **Edit Billing Address/ Edit Shipping Address**

Display information same as Magento but Edit Order extension will show Billing and Shipping Addresses via slide popup right at that view order page.

![Imgur](https://i.imgur.com/vw2Y3YR.png?1)

![Imgur](https://i.imgur.com/Du0ozDI.png?1)

#### 2.4. Edit Payment Method

From the Admin Panel, go to `Sales > Orders > View Order > Edit Order`, select **Edit Payment Method**

![Imgur](https://i.imgur.com/spBmZcT.png?1)

#### 2.5. Edit Shipping Method

From the Admin Panel, go to `Sales > Orders > View Order > Edit Order`, select **Edit Shipping Method**

![Imgur](https://i.imgur.com/NWN9QyM.png?1)

#### 2.6. Quick Edit

From the Admin Panel, go to `Sales> Orders > View Order > Edit Order`, select **Quick Edit**

![Imgur](https://i.imgur.com/xxDA22g.png)

![Imgur](https://i.imgur.com/o6ybPPE.png?1)

Quick edit allows editing all order information at the same time.


### 3.Grid

#### 3.1. Manage Logs

From the Admin Panel, go to `Sales > Edit Order > Manage Logs`

![Imgur](https://i.imgur.com/1VDf8il.png)

- This is where the order information was edited.
- From **Manage Logs**, admin can capture basic information such as **ID, Editor, Order Number, Overview Detail, Created Date, Action**.
- **Action**:
  - **View**: Navigate to the previously edited order information page.
  - In addition, admin can filter, change store view, hide/ display columns.

#### 3.2. View Logs

From the Admin Panel, go to `Sales > Edit Order > Manage Logs`, select **View Logs**
