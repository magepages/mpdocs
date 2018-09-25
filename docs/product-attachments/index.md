# Product Attachments
## Overview

## How to use

- Product Attachments can display on some following positions:
  * Product Tab
  
  ![product tab](https://i.imgur.com/DUHfpuH.png)
  
  * Under Product Social Link
  
  ![Under Product Social Link](https://i.imgur.com/xjXvHDO.png) 
  
  * Sidebar
  
  ![Sidebar](https://i.imgur.com/xjXvHDO.png) 
  
  * Some different positions according to Widget or Snippet
  
* Customers can perform two actions:
  * View Online
  * Download File
  
## How to configure

Login to the Magento Admin, choose `Catalog > Product Attachments`

![how to configure](https://i.imgur.com/BAptBXY.png)

Admins can add an attached file for the Product in 2 ways:
  * Create a file at the `Manage General File`. It's so quick and convenient if you want to apply an attached file for many products.
  * Create a file at `Catalog > Product (Grid or Edit Product)`: This way will help admins add various files for various products.
  
### 1. Configuration

From the Admin Panel, go to `Catalog > Product Attachments > Configuration`

#### 1.1. General

![general configuration](https://i.imgur.com/vfVIGUM.png)

* **Enable**: Choose Yes so that this module can work well
* **Block Title**: 
    * The content displayed on this field is the title of `Attachment block`
    * The title is displayed on the Frontend
    
* **Show On**: Admins can choose many positions to display **Product Attachments**. There're 3 positions as the following:
    * Product Tab
    * Under Add to Cart button
    * Sidebar

* **Manage Icons**:
    * Admins can add or remove icones in this field
    * The icons added in this field will display in the `Edit/Add New File` under Dropdown
    
#### 1.2. Default Value

![default value](https://i.imgur.com/V2w3NmA.png)

* All values selected in this section are taken as the default value of the product attachment when they are uploaded
* These values will be selected by default when adding new files, but admins can change these values while editing/adding new files.
* **Store View**: Stipulate the Store Views that Product Attachment is displayed on the Frontend
* **Customer Group**: Stipulate group customers that can perform `Customer Action`
* **Customer must login to download file**: Select "Yes" means that customers must login to view/download product attachment
* **Only available for verified buyers**: Select "Yes" means that Customers must have at least 1 order of this product to view/ ownload product attachment
* **Customer Action**:
  * View Online
  * Download

#### 1.3. Snippet

![snippet](https://i.imgur.com/0Ae2aDN.png)

* **CMS Page/Static Block**: Copy code and insert into the pages in the `Content > Page` section.
* **Template .phtml file**: Copy code and insert into the .phtml files of Magento or other extensions that you want to display Free Shipping Bar
* **Layout file**: Copy code and insert into .xml files of Magento or other extensions that you want to display Free Shipping Bar

### 2. Manage General File
#### 2.1. Managerial Grid

![managerial grid](https://i.imgur.com/npEXZBl.png)

* This is a place to save all attached files into the product.
* From the Grid, admins can understand the basic information of the file as ID, Label, Name, Status, Store View, Customer Group, Priority, Create Date, and Action.
* In the Action Dialog, admins can perform `Action Delete`: Admins need to tick and choose the question that they want to delete, then choose `Delete` in the Action box (upper left of Grid) to delete. A confirmation dialog will appear, select OK to continue deleting.
* In the Action column, admins click on `Edit` to edit the information of the attached files.
* Also, admins can filter, change store view, hide/



























