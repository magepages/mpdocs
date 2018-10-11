# Product Attachments
## Overview

With attachments that admins have installed on the product, Mageplaza Product Attachments Extension allows users to get the full information about the product they are interested in with ease. Depending on admins that customers can view online or download files, and also log the view/download actions that customers have done. Product Attachments module supports admins to upload many types of files and the unlimited number of attachments for each product. This is a great tool helping your store better than ever.

## How to use

- Product Attachments can display on some following positions:
  * Product Tab
  
  ![product tab](https://i.imgur.com/D2T2B7J.png)
  
  * Under Product Social Link
  
  ![Under Product Social Link](https://i.imgur.com/YHXvi8X.png)
  
  * Sidebar
  
  ![Sidebar](https://i.imgur.com/ptWqkqp.png)
  
  * Some different positions according to Widget or Snippet
  
* Customers can perform two actions:
  * View Online
  * Download File
  
## How to configure

Login to the Magento Admin, choose `Catalog > Product Attachments`

![how to configure](https://i.imgur.com/XPCbNnU.png)

Admins can add an attached file for the Product in 2 ways:
  * Create a file at the `Manage General File`. It's so quick and convenient if you want to apply an attached file for many products.
  * Create a file at `Catalog > Product (Grid or Edit Product)`: This way will help admins add various files for various products.
  
### 1. Configuration

From the Admin Panel, go to `Catalog > Product Attachments > Configuration`

#### 1.1. General

![general configuration](https://i.imgur.com/d1U2MUT.png)

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
    
    ![manage icons](https://i.imgur.com/xnt4YyN.png)
    
#### 1.2. Default Value

![default value](https://i.imgur.com/Ly10kJs.png)

* All values selected in this section are taken as the default value of the product attachment when they are uploaded
* These values will be selected by default when adding new files, but admins can change these values while editing/adding new files.
* **Store View**: Stipulate the Store Views that Product Attachment is displayed on the Frontend
* **Customer Group**: Stipulate group customers that can perform `Customer Action`
* **Customer must login to download file**: Select "Yes" means that customers must login to view/download product attachment
* **Only available for verified buyers**: Select "Yes" means that Customers must have at least 1 order of this product so that Product Attachments display it for customers to view.
* **Customer Action**:
  * View Online
  * Download

#### 1.3. Snippet

![snippet](https://i.imgur.com/P4CNPsJ.png)

* **CMS Page/Static Block**: Copy code and insert into the pages in the `Content > Page` section.
* **Template .phtml file**: Copy code and insert into the .phtml files of Magento or other extensions that you want to display Free Shipping Bar
* **Layout file**: Copy code and insert into .xml files of Magento or other extensions that you want to display Free Shipping Bar

### 2. Manage General Files
#### 2.1. Managerial Grid

![managerial grid](https://i.imgur.com/z52Pl1u.png)

* This is a place to save all attached files into the product.
* From the Grid, admins can understand the basic information of the file as ID, Label, Name, Status, Store View, Customer Group, Priority, Create Date, and Action.
* In the Action Dialog, admins can perform `Action Delete`: Admins need to tick and choose the question that they want to delete, then choose `Delete` in the Action box (upper left of Grid) to delete. A confirmation dialog will appear, select OK to continue deleting.
* In the Action column, admins click on `Edit` to edit the information of the attached files.
* Also, admins can filter, change store view, hide/show columns or export grid

#### 2.2. Add New/Edit Form

##### 2.2.1. General

![general](https://i.imgur.com/8kUbwga.png)

* **File Label**:
  * Set the file label to display on the Frontend
  * The label needs to set close to the content of attached files so that customers can understand before viewing/downloading.
  
* **File Name**:
  * Set the name for the file. This name will replace for uploaded the file name.
  * This name will display on the Frontend when customers click on the attached files to view/download.
  * If leaving this field blank, take the name of the uploaded file.
  
* **File**:
  * Upload the file from your PC
  * We support you some following file formats:
  * The file name will display on the Frontend if admins don't enter the file name.

* **Icon**:
  * The icon will auto-update when admins upload the file according to the file format.
  * Admins can change into the icon that they want.
  * To upload a new icon, admins need to install in the Configuration
  
* **Status**: Choose "Enable" so that the attached file can display on the Frontend.
* **Store View**: One website can have many store views. Product Attachment only displays in the selected store views.
* **Customer Group**: Stipulate which customer group can see and perform actions with the attached file. 
* **Logged in Customer**: Select "Yes" to allow only customers who are logged into the store to view/download the file
* **Verified buyers**: Select "Yes" to indicate for customers who have purchased the product to view/download the attached file.
* **Customer Action**:
  * **View Online**: Customers who meet the conditions of the Store, Group, Login and Verify will be able to view the contents of the attached file.
  * **Download**: Customers who meet the conditions of Store, Group, Login and Verify will be able to download attachments

* **Priority**:
  * At the same location, Product Attachment that has a higher priority will be sorted first.
  * 0 is the highest priority.
  
##### 2.2.2. Assign To

![assign to](https://i.imgur.com/8kUbwga.png)

* This is a place for you to select the conditions for the rule. Only available on selected products, the new rule can be applied.
* You can add/remove the condition by clicking on `+` or `x`
* You can change the true/false of the condition by clicking `bold` text
* Admins can review the products satisfied the condition when clicking on `Preview Products`

![assign to 2](https://i.imgur.com/vWo8Yhn.png)

### 3. Add the attached file in the `Catalog > Products`

* Admins can add directly in the Grid or go to `Edit Product Page` to add the file.

  * Grid
![add the attached file](https://i.imgur.com/ZN2e1EK.png)

  * Edit Product Page
  
![Edit Product Page](https://i.imgur.com/NaxHGLb.png)

* By one of two ways, admins can set the display location of the attached files and upload files easily.
* All product attachments are displayed here, including the files created in the `Manage Product` (if that file is assigned to this product).
* When you click on an attached file, a popup is displayed and admins can quickly edit the file information.

![Imgur](https://i.imgur.com/aT3ryWQ.png)

* The information is similar to the information when adding new files in `Manage General File`

### 4. Report

![report](https://i.imgur.com/alxCdgn.png)

* Record the information about actions performed by the customer on the Product Attachments such as: File Label, File Name, Customer Implementation, Product, Action, Store View, Customer Group and Action Date.
* Admins can clear logs if they want.

### 5. Import File

* The import function is built based on the import function of Magento.
* Note that admins must select `Entity Type = Mageplaza Product Attachments`

![import file](https://i.imgur.com/PtFR0AW.png)

* After importing, Product Attachment files are stored in `Manage General File`
* To know more Magento's import, please visit [here](https://www.mageplaza.com/kb/how-to-import-products-magento-2.html)


















