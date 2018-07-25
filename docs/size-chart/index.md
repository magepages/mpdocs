# Size Chart

## Overview

There is an obvious fact that every brand, every region has a different size regulation. Thanks to **Mageplaza Size Chart Extension**, it makes it easy for administrators to display the size chart for each product on the frontend. From there, customers can quickly determine the size to suit themselves, avoid the case of product return.

**Size Chart** will be displayed as a popup or inline or in the Product tab according to the choice of the Admin. With intuitive HTML customization, admins can edit charts become user-friendly, boosting sale revenues effectively.

## Download & Install

- [Mageplaza Size Chart](http://www.mageplaza.com/magento-2-size-chart/)
- [Magento Marketplace]
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)

## How to Configure
Login to the **Magento Admin**, choose **Catalog > Size Chart**

![how to configure](https://i.imgur.com/lStArzz.png)

### 1. Manage Rules 
#### 1.1. Basic management interface 

This field allows admins to stipulate the Size Chart display according to each of certain rule.

![manage rules](https://i.imgur.com/knRgdSu.png)

* This is a place where stores all Size Chart created.
* From the Grid, admins can capture the basic information of the rule as ID, Name, Display Type, Priority, Create Date, Update Date, Status, and Action.
* Admins can take some actions the following:
  * **Delete**: Admins need to choose the Size Chart Rule that they want to delete, then choose `Delete` in the Action box (in the left corner of the Grid) to remove. A confirmation dialog will be displayed, you choose OK to continue deleting.
  * **Change Status**: Admins need to choose the Size Chart Rule that they want to change the status, then choose **Change Status > Enable/Disable** in the `Action` box (in the left corner of the Grid) to change the status. Immediately, selected Size Chart rules will return to the selected status.
  * **Edit**: To edit a rule, admins choose Edit in the `Action` box (the last column on the right of the Grid).
  * **Quick Edit**: Admins can edit some fields of the rule on the Grid by clicking the mouse to the field you want to edit. The Grid will change as the following:
  
  ![the change of the grid](https://i.imgur.com/Zxsh4uR.png)
  
* Also, admins can filter, change store view, hide or appear the columns or Export Grid.

#### 1.2. Create a new rule {#create-new-rule}

After logging into the `Manage Rules` page, admins choose `Add Rule` to create a new template. After you `Save and Continue Edit`, the page will be auto-returned to the Edit Rule page.

##### 1.2.1. Information 

![information](https://i.imgur.com/V0sc5rM.png)

* **Name**: 
  * Set the name for the rule. This name only displays in the backend to distinguish between the different rules.
  * This is a required field.
* **Status**: Choose Enable so that the rule can work well. However, the product can apply it or not, this will depend on the condition, store view, and the priority.
* **Store view**: This is Store View that Size Chart rule will be applied. A website can have multiple store views. When admins choose Store View in this item, Size Chart rule will be applied in that Store View.
* **How to display**: We offer 3 ways for you to show Size Chart in the frontend.
  * **Popup**: Size Chart will display as the popup when you click on the Size Chart button. The position of the popup button depends on the attribute you enter in the `Attribute Code` field. This button will display when the `Attribute Code` is entered as a swatch/dropdown attribute.
  
  ![the position popup](https://i.imgur.com/eZWgoIO.png)
  
  * **Inline**: Size Chart is displayed on the frontend under the Social Link button.
  
  ![the position inline](https://i.imgur.com/clo5OIW.png)
  
  * **Product Tab**: Size Chart is displayed as a tab in the **Product information** block.
  
  ![product tab position](https://i.imgur.com/Zwj6mzA.png)
  
* **Attribute Code**:
  * Only show this field when you choose **How to display = Popup**
  * You need to fill in the attribute code of the **Swatch/dropdown attribute** to display the popup button just after that attribute.
  * To know the attribute code of **swatch/dropdown attribute**, you can go to the stores from the admin panel, choose **Attribute > Product**.
* **Rule's Priority**: When there're many rules applied to a product, any rule with a higher priority (smaller number) will be applied.
* **Template HTML**: With this customizable HTML, it is easy for you to design your desired template with the HTML command line.
* **Template CSS**: You can add CSS in this field so that your template becomes beautifully.
* **Demo Template**: We have available 6 templates for your reference. After choosing the desired template, please click on `Load Template` so that the content of the template is displayed in `Template HTML and Template CSS` field.

##### 1.2.2. Condition Rules

![condition rules](https://i.imgur.com/fyrRizS.png)


* This is a place you can choose the condition of the rule. The rule can be applied only when the products that satisfy the selected condition.
* You can plus/minus the condition by clicking on `+` or `x`
* You can change the status `True/False` of the condition by clicking on the bold text.

### 2. Configuration 
From the Admin Panel, please go to **stores > Settings > Configuration > Mageplaza Extensions > Size Chart**

#### 2.1. General Configuration 

![general configuration](https://i.imgur.com/QF0IVv4.png)

* Choose Yes to Enable this module.

#### 2.2. Size Chart Button Design 

This is a design for Size Chart Popup button.

![size chart button design](https://i.imgur.com/GScpY20.png)

* **Customize Size Chart Label**: Change the label of the popup button
* **Logo**:
  * The uploaded image can be used as the logo of the size chart and displayed on the Frontend
  * Accept jpg, png, gif files
  * If you leave blank this field, it will use the default Point Icon of Mageplaza Reward Point.
* **Text Color**: Change the text color of the Size Chart Label
* **Background Color**: Change the background color of the popup button
* **Border Color**: Change the color of the popup button

### 3. Size Chart in Products 

* To install a particular product without a rule, admins can select `Catalog > Product > Edit Product` and set the size chart rule for the product by using the attribute `size chart` 

![Size chart attribute](https://i.imgur.com/NlJmEAh.png)


* Attribute Size Chart includes 3 main options:
  * **Inherit from Category/Rule**: When this option is picked, Size Chart which is applied for the product will follow the Size Chart rule of the Category which the product belongs to (according to [Breadcrumbs](https://en.wikipedia.org/wiki/Breadcrumb_(navigation)) on Frontend)

Example: Product A belongs to two categories which are Women and Jackets.

Case 1: Customer reaches product A by the path: `Home > Women > Tops > Jackets > A`
In this particular case, the size chart for product A will be applied by Rule of category Jackets

Case 2: Customer reaches product A by the path: `Home > Women > A`
In this particular case, the size chart for product B will be applied by Rule of category Women

In case the option `Inherit from Category/Rule` is set for both categories Jackets and Women, all rules in Manage Rule will be filtered to meet the conditions, and the rule with higher priority will be applied on product A

  * **Disable**: The products won't apply the Size Chart Rule
  * **Select a rule created in Manage Rules**: Select any other Size Chart Rule and it is applied even if that rule's status is `Disable`
  
### 4. Size Chart in Categories 

* To set all products in the category by one certain Size Chart Rule, admins can select `Catalog > Categories`, and set the attribute Size Chart similar to when setting Size Chart in `Edit Product`.

![size chart in categories](https://i.imgur.com/CKzyz9B.png)

* If you select **Size Chart = Inherit from Category/Rule**, the selected products (Inherit from Category/Rule in the Edit Product) in the Category will be applied the rule with the satisfied condition and the highest (smallest) Priority.

## Frontend

* Size Chart extension is displayed in the frontend with 3 positions:
  * **Popup**: Size Chart will appear as a popup when you click on the Size Chart button. The position of the popup button depends on the attribute you enter in the `Attribute Code` field. The button will display when the `Attribute Code` is entered as a swatch/dropdown attribute

![the popup position](https://i.imgur.com/2Xpx1EZ.png)

  * **Inline**: Size Chart is displayed in the frontend under the Social Link button.
  
  ![inline position](https://i.imgur.com/T83KptK.png)
  
  * **Product Tab**: Size Chart is displayed as a tab in the Product Information block
  
  ![product tab position](https://i.imgur.com/XzUqwby.png)
  
## Error `Edit Product/Category` when uninstalling this extension manually

When you uninstall Mageplaza Size Chart extension, you can face some errors while Edit Product. At this time, you need to remove `mp_sizechart` attribute **BEFORE** uninstalling this module.

To remove `mp_sizechart` attribute, please follow some following steps:

**Step 1**: From the Admin Panel, choose Stores > Attributes > Product

![product attribute](https://i.imgur.com/ViEGcIG.png)

**Step 2**: Find the `mp_sizechart` attribute, click on the attribute and choose Delete button to delete this attribute

![product attribute](https://i.imgur.com/IKCI4yq.png)

**Step 3**: After deleting this attribute, if you want the attribute redisplay when you install a new extension, you need to delete module `Mageplaza_SizeChart` from `setup-module` table in the database, after that, upgrade the extension again.

![delete size chart](https://i.imgur.com/vhibeFe.png)

