# Better Product Options

## Overview

Adding custom product options is one of the great ways to make stores more profitable and can serve customers on your store in a better way. With [Mageplaza Better Product Options Extension](https://www.mageplaza.com/magento-2-better-product-options/), you can create more options for any product via Customize Option. This extension allows the admin to easily create Customize Options Template for options such as **Quantity, Advanced Pricing, Weight, Image, Tooltips Description, Depend Option** for products while the current Core Magento only allows setting **Title, Price and SKU** for the product. Also, you can perform **Assign Customize Option** at the template with Product ID/ SKU. 

This extension is compatible with [Mass Product Action](https://www.mageplaza.com/magento-2-mass-product-actions/), [Mageplaza Quick View](https://www.mageplaza.com/magento-2-quick-view/) and [Configurable Products Preselect](https://www.mageplaza.com/magento-2-configurable-preselect/).


## How to download and install

- [Download Mageplaza Better Product Options](https://www.mageplaza.com/magento-2-better-product-options/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)

## How to Configure

From the Admin Panel, go to `Stores > Configuration > Mageplaza > Better Product Options > Configuration`

![](https://i.imgur.com/fj30IoU.gif)

### 1. General Configuration 
From the Admin Panel, go to `Stores > Configuration > Mageplaza Extensions > Better Product Options > General Configuration`

![](https://i.imgur.com/wnQzNYp.png)

- **Enable**: Select **Yes** to enable the **Better Product Options** module
- **Link Options by Default**:
  - If **Yes** is selected, the options will be default linked to the template. Admin can only change the value on the template, then it will apply to all products assigned with those options.
  - If **No** is selected, by default the options will not link to the template.
- **Result after removing template**:
  - If **Delete the linked products options** is selected, when the template is deleted, the options in the products linked to this template are also deleted
  - If you select **Update the current linked products options**, when the template is deleted, the options in the products linked to this template before will not be linked with that template anymore.


### 2. Product Option Templates Grid

From Admin Panel, go to `Stores > Product Options > Manage Product Options Templates`

![](https://i.imgur.com/JY0klue.png)

- Here shown all the **Product Options Templates**
- From **Product Options Templates Grid**, admin can capture basic information of **Product Options Templates** such as **ID, Name, Status, Number of Products, Number of Options, Created Date, Action**
- **Action**:
  - **Delete**: Delete Product Options Templates created
  - **Change Status**: Change the Status of **Product Options Template**. There are 2 template states that are **Enable** and **Disable**
  - **Edit**: Navigate to the Product Options Templates information page created earlier.
  - Also, admin can **Filter, Sort, Search** for Product Options Templates.

### 3. Create New/ Edit Template

From Admin Panel, go to `Stores > Product Options > Manage Product Options Templates > Create New Template/ Edit Template`

#### 3.1. General Tab

![](https://i.imgur.com/PVniRJg.png)

- **Name**: Set a name for template. This is a required field.
- **Description**: Add a description for the template.
- **Status**:
  - **Yes**: Active the template
  - **No**: Disable the template, then the options for this template will be hidden at the frontend/ cart.

#### 3.2. Customizable Tab Options

![](https://i.imgur.com/zgeLw4i.png)

- Admin can create multiple Options in the same template by selecting **Add Option**
- **Option Title**: Enter a title for the Option. This is a required field.
- **Option Type**: Select Option Type. This is a required field. There are many different Option Types as shown below:

![](https://i.imgur.com/3A2iW2x.gif)

- ***Option Type = Text (Field/ Area)***

![](https://i.imgur.com/CyZoCXE.png)

- ***Option Type = File***

![](https://i.imgur.com/zdIztLb.png)

- ***Option Type = Date (Date & Time/ Date/ Time)***

![](https://i.imgur.com/lgfPfrT.png)
 
- ***Option Type = Select (Drop-down/ Radio Buttons/ Multiple Select/ Checkbox)***

![](https://i.imgur.com/6rJo8gY.png)

- **Required**: Tick this checkbox so that this option is required. Otherwise, do not select.
- **Disable**:
  - Tick **Disable**, the option will be disabled and not displayed at the frontend/ cart.
  - If not tick **Disable**, the option is used and displayed normally.
- **Default Value**: Select the default value for this option.


#### 3.3. Manage Assign Products Tab

![](https://i.imgur.com/Em4J3qt.png)

- **Assign By**: Select one of two assignment types: **Product SKUs or Product IDs**
- **Product SKUs/ Product IDs**: The name of this field depends on the **Assign By** field. Enter one or more Product SKUs/ IDs, separated by commas. Then click **Preview** to see the list of products to assign.

#### 3.4. Edit Product Form
- From the Admin Panel, go to `Products > Catalog > choose a Product> Customizable Tab Options`

![](https://i.imgur.com/d3iKyGm.png)

- **Import Options**: Clicking on this link, you are redirected to a new page to import options from other products into the current product.

![](https://i.imgur.com/hMhNjK1.png)

- **Add Option**: When you click here, you will see a form to create a new option.

![](https://i.imgur.com/3YEl8th.png)

- **Add Option From Template**: Clicking here will appear a popup to add options from the product options template chosen into this product.
  - In the options are taken from **Product Options Template**, there are some differences compared with the options created at the Product page as follows:

    ![](https://i.imgur.com/O4ATSyq.png)
    - **Template**: Enter the name of the Template to which this option will be added.
    - **Link Template**: Link this option to the template taken from **Better Options Template**.
      - If the template has many options, all options will be linked to template and vice versa.
      - If ticked this **Link Template** checkbox, all field of this option(s) will be disabled and unedited.
      - Unticked, it can be edited normally.

#### 3.5. Mass action at the Product Grid

- In addition to assigning the **Product Options Template** to products right after editing/ create template, we can perform the assignment of templates for the product at the **Product Grid** as follows:
- From the Admin Panel, go to `Products > Catalog` then select one or more Product then choose `Actions> Assign Product Options Templates`

![](https://i.imgur.com/5MjWKSN.gif)

## Frontend

- Image of ***Option Type = Text*** on Product View Detail page

![](https://i.imgur.com/CbRLd3I.png)

- Image of ***Option Type = File*** on Product View Detail page

![](https://i.imgur.com/aHcQYLt.png)

- Image of ***Option Type = Select*** on Product View Detail page

![](https://i.imgur.com/RrAgxs4.png)

- Image of ***Option Type = Date Time*** on Product View Detail page

![](https://i.imgur.com/V883rOc.png)
