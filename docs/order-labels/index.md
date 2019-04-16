# Order Labels

## Overview

[Mageplaza Order Labels extension](https://www.mageplaza.com/magento-2-order-labels/) provides a feature that allows the admin to customize the creation of columns containing labels to mark, sort orders in Order Grid explicitly, thereby easier to manage orders. With this module, admin can not only use an image or a piece of text to display the label but can also use a combination of both to display the label that you want to create. In addition, this module also allows manual assignment or automatic labeling of orders. Moreover, this module also displays and allows for Label editing in both Order Grid and Order Form. In particular, it also improves the Order Status display section and allows it to be displayed at Frontend so that customers can easily know how their order is in status.


## How to download and install

- [Download Mageplaza Order Labels](https://www.mageplaza.com/magento-2-order-labels/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)




## How to Configure
From the **Admin Panel**, go to `Stores > Configuration > Mageplaza Extensions > Order Labels`

### 1. Configuration
From the **Admin Panel**, go to `Stores > Configuration > Mageplaza Extensions > Order Labels > General Configuration`


- **Enable**: Select **Yes** to enable the Order Labels module.
- **Label’s Columns**: These are columns containing Label. There must be at least one column for a label.
- **Name**: The name of the column containing Label. This is a required field.
- **Is Multiple**: If you choose **Yes**, you can display many types of labels on a column for an order.
- **Show on Grid**: Select **Yes** to display Column to Order Grid
- **Show on Form**: Select the option to display Column to Order Form
- **Show on Form = Always**: Always display Column to Order Form
- **Show on Form = Only has label**: Only when Label is available for Column, will it display Column to Order Form
- **Show on Form = No**: Do not display Column to Order Form
- **Skip Manual Add Label**:
- If **Yes** is selected, the manual added will not be deleted by the program (If Yes, the label has been manually added will not be removed by schedule).
- If **No** is selected, manually added labels can still be deleted if the status of the order no longer satisfies the auto-tagging condition.
- **Auto Set Label**: Click **Run** to turn on auto-tagging


### 2. Management Grid Labels
From the **Admin Panel**, go to `Sales > Order Labels > Order Label`

- This is where the Order Labels are displayed
- From **Management Grid Labels**, admin can capture basic information of Order Labels such as: ID, Name, Column, Enable / Disable, Sort Order, Action
- **Action**:
- **Delete**: Delete Order Labels created.
- **Edit**: Navigate to the previously created Order Label information page.
- **Create New Label**: Create a new Order Label
- Also Admin can Filter, Sort, Search Order Labels


### 3. Create / Edit Label
From the **Admin Panel**, go to `Sales > Order Labels > Order Label > Add New Label`

#### 3.1. General
From the Admin Panel, go to Sales > Order Labels > Order Label > Add New Label, select General

##### 3.1.1. General Tab
- **Name**: Enter a name for Label, this is a required field
- **Code**: This is the code / symbol for Label.
- **Enable**: Select "Yes" to enable Label display on the column.
- **Select Column**: Select the column to display Label. The column list is taken from the Configuration section
- **Sort Order**: Shows the display priority of this Label compared to other Labels in a column if Is Multiple in the Configuration section is enabled.

##### 3.1.2. Display Tab
- **Display on**: Label display position. There are two options that are on Admin Grid and Admin Form
- **Display Type**: Select Label display type, there are 4 choices.
- **Image Only**: Only displayed in image format
- **Text Only**: Only displayed in text
- **Image + Text**: Displayed in images and text with the following
- **Text + Image**: Display in text and images with the following
- **Select Image**: Select the image to represent Label. It is recommended that you use a picture of 150x50 px size. Or you can use the icon. You can find the appropriate icon here.
- **Background Color**: Select the background color for Label.
- **Text Color**: Choose colors for text.


#### 3.2. Auto Assign Condition Tab
From the **Admin Panel**, go to `Sales > Order Labels > Order Label > Add New Label`, select **Auto Assign Condition**


- **Auto Assign Label**: Select Yes to enable the auto-tagging function for the Order that meets the selected condition.
- We will choose the condition to automatically assign this Label to the order that meets the selected conditions. These conditions are taken from Mageplaza's Order Attributes module. You can see how to install and use the Order Attributes module here.


### 4. Order Status
#### 4.1. Order Status Grid
From **Admin Panel**, go to `Stores > Setting > Order Status`

- This is where the list of order status is displayed.
- From Order Status, admin can easily grasp basic Order Status information such as Status, Status Code, Default Status, Visible on Storefront, Display, Action
- **Action**:
- **Unassign**: Unassign Status.
- Also Admin can Filter, Search Order Status.

#### 4.2. Create New / Edit Order Status
- From Admin Panel, go to Stores> Settings> Order Status> Create New Order Status
- If you want to Edit an Order Status, you just need to click on that Order Status and start editing the information.

#### 4.2.1. Order Status Information
- **Status Code**: Enter the code specific to Status. This is a required field.
- **Status Labels**
