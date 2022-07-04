# Order Attributes

## Overview

When shop owners understand more about customers, it's easy to increase sales and handle fast for their stores. Mageplaza Order Attributes extension allows admins to add custom fields to the checkout page. It helps the store owner to easily collect more information and increase customer satisfaction. This module provides a variety of custom fields such as Text Field, Text Area, Date, Yes/No, Dropdown, Single-select With Image, Multiple Select with Image, Single File Attachment, Content. Order Attributes will be managed easily on the grid order. Admins can also restrict them to customers group or store views.

Order Attributes is also displayed when admins creates the order in the backend.

## Download and Install

- [Download Mageplaza Order Attributes](https://www.mageplaza.com/magento-2-order-attributes/)
- [Installation Mageplaza extension](https://www.mageplaza.com/install-magento-2-extension/)

## How to configure

From the Admin Panel, go to `Sales > Order Attributes`

![](https://i.imgur.com/zyMYBu9.png)

### 1. Configuration

From the Admin Panel, go to `Sales > Order Attributes > Configuration`

![]([https://i.imgur.com/rpGyGI2.png](https://i.imgur.com/iE9RJoQ.png))

**General Configuration**

- **Enable**: Choose Yes to use this module

**Checkout Configuration**

- **Date Format**: Select the date format for attributes with Date or Date & Time type to show attributes on frontend.
- **Time Format**: Select the time format for attributes with Time or Date & Time type to show attributes on frontend.

### 2. Manage Attributes

#### 2.1. Grid

![](https://i.imgur.com/evdjT3L.png)

- This is a place to store all created Order Attributes
- From the Grid, admins can capture the basic information of Attribute such as: Default Label, Attribute Code, Type, Required, Position, Store View, Customer Group, Sort Order, Create At, Updated At and Action.
- To delete the Attribute, admins need to edit the attribute and click `Delete`
- In addition, admins can Filter, Change Store View, hide/show the Columns

#### 2.2. Add New Attribute
##### 2.2.1. Properties

![](https://i.imgur.com/JYrqF2W.png)

- **Default Label**: The default display name for Attributes in the Grid and Frontend
- **Attribute Code**:
  - Enter the Attribute code. Admins can use Attribute code to add some templates such as Order, Email, ...
  - Make sure you do not use spaces or more than 30 symbols.
  - If leaving this field, it is based on the Default Label field.

- **Input Type**: Select input/select data type. There are 11 input types that admins can choose

![](https://i.imgur.com/Xr0cfoq.png)

  - `Text`: The input type is a text line (not downstream).

![](https://i.imgur.com/VK6Si1v.png)

  - `Text Area`: The input type is a text. Customers can enter multiple lines of text in this field

![](https://i.imgur.com/v5wfkkd.png)

  - `Date`: This field has the format as Date. When accessing the checkout page, the field is assumed to be the current date.
  
 ![](https://i.imgur.com/5JH8dQs.png)
 
  - `Date & Time`: This field has the format as Date and Time 

 ![](https://i.imgur.com/kqVosDW.png)
 
  - `Time`: This field has the format as Time

  ![](https://i.imgur.com/2IT2GL2.png)
 
  - `Yes/No`: The field only includes 2 options as Yes or No.
 
 ![](https://i.imgur.com/KPsplFF.png)
 
  - `Dropdown`: The field has the format as Dropdown. Customers are only selected one of the options that admin has set in the backend

![](https://i.imgur.com/Tb02yNm.png)

- `Checkbox/Multi-Select`: The field has the format as Multiple-Select. Customers can choose one or more options that admins have set in the backend

![](https://i.imgur.com/AqMO26n.png)

- `Radio/Single-select with image`: Customers only choose one of the Images/Colors that admins have set

![](https://i.imgur.com/IoXzHw4.png)

- `Multiple-select with image`: Customers can choose one of the Images/Colors that admins have set

![](https://i.imgur.com/nLUAHQU.png)

- `Media Image`: Customers can upload the image file (only include the image file, not docs file or PDF files, etc) that they want. Besides, it is possible to limit file upload size in **Maximum File Size** and file upload format in **Allow File Formats**
- `Single File Attachment`: Customers can upload the attachment that they want. Besides, they can limit file upload size as well as file upload format by respectively filling in it in **Maximum File Size** field and **Allow File Formats** field.
- `Content`: Customers can insert the image and enter the text as well as edit them with ease.

![](https://i.imgur.com/PsGFja6.png)

- **Static Block**: Show attributes having block format. Show extra field:
  - **Select CMS Block**: Select blocks to display in orders.
  
  ![](https://i.imgur.com/WB6n47m.png)

- **Default Value**:
  - Only display with the Input Type as `Text Field, Text Area, Date, Yes/No, Content, Time, Date, Date & Time`
  - This value will be displayed as the value of the field if the attribute is displayed in the Frontend
  
- **Minimum Text Length**: 
  - The minimum length for the text
  - Shows when the Input Type is Text Field and Text Area
- **Maximum Text Length**:
  - The maximum length for the text
  - Shows when the Input Type is Text Field and Text Area
- **Minimum Value**:
  - The minimum value 
  - Shows when the Input Type is Date, Date & Time, Time
- **Maximum Value**:
  - The maximum value
  - Shows when the Input Type is Date, Date & Time, Time

- **Values Required**:
  - Select Yes to force the users to enter a value for the field
  - Not displayed with `Input Type = Media Image and Single File Attachment`

- **Input Validation**:
  - Only show when `Input Type = Text Field`
  - Stipulate the values that are accepted in this field, which is one of the following values:

![](https://i.imgur.com/obnwQut.png)

- **Input/Output Filter**:
  - Show when `Input Type = text field, text area`
  - It has the benefit as aiming to the HTML values that customers can enter the field
  - There're 3 options:
    - `None`: Ignore the check HTML, allow HTML tag that can work
    
 For example: test <p>HTML</p> is transformed into: 
 
 ![](https://i.imgur.com/tPkHK7n.png)
 
 - `Strip HTML Tags`: Remove the HTML tags that include in the field
 
 For example: test <p>HTML</p> is transformed into: 
 
 ![](https://i.imgur.com/1OQUnC0.png)
 
 - `Escape HTML Entities`: Encode the HTML tags that include in the field
 
 For example: test <p>HTML</p> is transformed into: 
 
 ![](https://i.imgur.com/EujqCGc.png)
 
 - `Add to Sales Order Grid`: Choose Yes so that the attribute is displayed in the grid at `Sale > Orders`
 - `Add to PDF Files`:
   - Show the compatiblity with Mageplaza PDF Invoice extensions (only apply for PDF Order)
   - You can refer the guide [here](https://www.mageplaza.com/kb/how-add-order-attributes-to-pdf-order-template.html)

- `Add to Confirmation Emails`:
  - Show to insert Order Attribute to the email confirm order
  - You can refer the guide [here](https://www.mageplaza.com/kb/how-insert-order-attributes-to-transactional-emails.html)

##### 2.2.2. Frontend Properties

![](https://i.imgur.com/I3WelJo.png)

- **Position**: We support 7 positions that can display Order Attribute:

  - None: Order Attribute doesn't show on the Frontend and in the Backend
  - Shipping Address
  - Shipping Method Top
  - Shipping Method Bottom
  - Payment Method Top
  - Payment Method Bottom
  - Order Summary

- **Use Tooltip**:

  - Select Yes to display the Tooltip ![](https://i.imgur.com/t4LOnHA.png) instructing the customers enter a value in the Field
  - Admins need to enter the Tooltip in the Manage Labels/Options so that the tooltip is displayed on the Frontend

- **Store View**: The attribute is only displayed in the selected Store View
- **Customer Group**: The attribute is only displayed to the Customer in the selected group
- **Add to Sales Order View**: Select Yes to display the Attribute at the Order of the Customer. Customers can check the content of the attribute that was filled after placing order.

- **Sort Order**:
  - Set the display order of the Attribute
  - 0 is the highest position
  - Admins need to pay attention when placing this dependency on another Attribute. It is possible that the attribute child will be displayed on the Attribute parent

##### 2.2.3. Manage Labels/Options

![](https://i.imgur.com/zErLyvq.png)

- **Manage Labels**:
  - Set the display name outside the frontend for the Attribute in each store view
  - If leaving this field blank, the Default Label is populated in the Properties tab

- **Manage Tooltips**:
  - Set up short instructional content of Attribute for Customer in each store
  - mIf left blank, the tooltip is not displayed on the Frontend

- **Manage Options**:
  - Only display with **Input Type = Dropdown, Multiple Select, Single-select with Image, Multiple-select with Image**
  - Admin can add options for Attribute in each store view for Customer to choose
  - Image is only displayed with **Input Type = Single-select with Image, Multiple-select with Image**. Admin can choose color or upload image for option


##### 2.2.4. Depend Attributes

![](https://i.imgur.com/QT77P7L.png)

- Select an attribute with drop type, Single-select with Image to parent field. Parent Field options are automatically loaded into Depend on options
- Attribute editing is only displayed when Customer selects the option selected in Depend on options. Admin can install depend on many options
- In addition, Attribute can also depend on one or more shipping methods
- When the Attribute has been added to another Attribute, just depend on the Shipping method, make sure the 2 dependents are selected so that the attribute is displayed.
- **Depend on countries**: Select one or multiple countriles to display attributes when customers make orders. Attributes will depend on each selected country. This extra field will be shown:
  - **Countries**: Select countries to apply attributes display. If left empty, will show attributes for all countries.


### 3. API
Mageplaza Order Attribute supports the use of API to get order attribute information, order information, fullfil attributes in order, upload file for order attributes which allows file to be uploaded.

View supported request <a href='https://documenter.getpostman.com/view/10589000/Szf5399x' target='_blank' rel='nofollow'>here</a>

See how can you create token-based authentication <a href='https://devdocs.magento.com/guides/v2.3/get-started/authentication/gs-authentication-token.html#integration-tokens' target='_blank' rel='nofollow'>here</a>

### 4. GraphQL
#### 4.1. How to install
Run the following command in Magento 2 root folder:
```
composer require mageplaza/module-order-attributes-graphql
php bin/magento setup:upgrade
php bin/magento setup:static-content:deploy

```

#### 4.2. How to use
Order Attribute GraphQL by Mageplaza allows you to get order attribute information, save ordr attribute when customers order via GrapQL

**Note**: To start using GraphQL, you need to return your site to developer mode and uee Magento 2.3.x

Check supported GraphQL request <a href='https://documenter.getpostman.com/view/10589000/Szf539EJ' target='_blank' rel='nofollow'>here</a>

## Frontend
### 1. Checkout page Magento

![](https://i.imgur.com/hDElEz4.png)

![](https://i.imgur.com/uVLlBA1.png)

### 2. Mageplaza One Step Checkout

![](https://i.imgur.com/9l0zg46.png)











