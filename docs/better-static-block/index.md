# Better Static Block


## Overview

It is pretty easy for admin to create Blocks in Magento 2 from [Magento Admin panel](https://www.mageplaza.com/magento-2-module-development/create-admin-menu-magento-2.html). Store owners display Blocks in anywhere. However, with [Better Static Block extension](https://www.mageplaza.com/magento-2-better-static-block/) of Mageplaza, we create more helpful features such as: displaying blocks by customer groups and websites, setting time for auto-displaying blocks, allowing admin to duplicate available blocks, support different types of content (video, image, text,...) and so on. This extension helps shop owners have flexibility in advertising products and significantly improve the efficiency of your store. 

## How to download and install

- [Download Mageplaza Better Static Block](https://www.mageplaza.com/magento-2-better-static-block/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


## How to Configure

### I. Configuration

Login to the **Magento Admin**, choose `Store > Configuration > Mageplaza > Better Static Block`

![Imgur](https://i.imgur.com/SR92TMt.png)


#### 1. General

![Imgur](https://i.imgur.com/uNL0bnN.png)

- Select **Enable = Yes** to enable the module.
- **Manage Labels**:
  - Enter a name for Label at the **Name** field
    - **Note**: This is a required field.
  - Click **Browse** to select the image for label.
  - Admin can press **Delete** if you want to delete labels.
  - Click **Add Option** to create additional Label.


### II. Grid

Login to the **Magento Admin**, choose `Content > Blocks`

![Imgur](https://i.imgur.com/xVEgNyS.png)


#### 1. Grid

![Imgur](https://i.imgur.com/hm7UumS.png)

- This grid record all transaction of creating static blocks
- At the form grid, Admin can understand all the basic information of static blocks like: ID, title, identifier, Store view, Status, Created, Modified, Customer Groups, Label, State, Active From, Active To, Active On Day, From Time, To Time, Action.

- Admin can perform some of the following actions:
  - **Edit**: Select **Edit** in the **Action** column to edit the information on the edit block page.
  - **Delete**: Select the block to delete  Action > Delete  .
  - **Change Status**: Select a block to change status.


#### 2. Add New / Edit Form

##### 2.1. General

![Imgur](https://i.imgur.com/dh8FBYE.png)

- **Enable**: Select **Yes** to display the block.
- **Block Title**: Create a display name for the block. The system will report an error if left blank.
- **Identifier**: Create key for block, block key is not allowed to overlap. The system will report an error if left blank.
- **Store View**: Select the store that displays the block. The system will report an error if left blank.
- **Customer Groups**: Select the group of customers to apply block display.
- **Select Labels**: Select label for block. A block may have multiple labels.
- **Show/Hide Editor**: Create content to display for blocks.


##### 2.2. Activate Setting

![Imgur](https://i.imgur.com/WqMzp0j.png)

- **From Date**: Select the start date of the block display.
- **To Date**: Select the end date of the block display.
- **Select Day(s)**: Select the day of the week to display the block.
- **Active by Time**: Select **Yes** to display the time setting for the block.
- **From Time**: Select the time to start displaying the block.
- **To Time**: Select the time to end the block display.
- In addition, Admin can perform:
  - **Save**: Save block
  - **Save & Duplicate**: Admin saves the block and at the same time creates more blocks like that with increasing Identifier.
  - **Save & Close**: Admin saves the block and returns to the grid page.


### III. Show block at frontend

- To display the block at the frontend, please go to **Magento Admin**, select `Content > Widgets`.

![Imgur](https://i.imgur.com/HUzi3CW.png)

- Choose **Add Widget** to set the display for block.

![Imgur](https://i.imgur.com/LSZJVO6.png)

- **Type**: Select the display type, here we choose **CMS Static Block**

![Imgur](https://i.imgur.com/18UQBiz.png)

- **Design Theme**: At the design section, select **Magento Luma**.
- After creating the **Type** and **Design Theme**, click **Continue**.

![Imgur](https://i.imgur.com/ZPy0hru.png)

- **Storefront Properties**:
  - **Widget title**: Enter a name for the widget.
  - **Assign to Store Views**: Select the store to display the widget.
  - **Sort order**: Set the position for displaying widgets in the same container.
- **Layout Updates**:
  - **Display On**: Select the display area
- **Widget Options**:

![Imgur](https://i.imgur.com/aSj7Et7.png)

- Admin click **Select Block** to select the displayed block. Pop up system shown will contain all blocks for admin to choose.

![Imgur](https://i.imgur.com/QYNzmdb.png)

### IV. Grid

![Imgur](https://i.imgur.com/jAwQgZp.png)
