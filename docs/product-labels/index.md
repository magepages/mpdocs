# Product Labels
## Overview

Product Labels extension offers the feature that helps store owners display images, labels, characters, symbols on the products. This feature brings the customers the intuitive interface that allows them to know that Which products are being got the sale off and what percentage of sales is, etc. Also, when you integrate this module, store owners can easily attract customers to the best-selling products or products that they are planning for marketing to increase sales and revenues for their online stores.

## Documentation
- Download Mageplaza Product Labels extension
- [How to install](https://www.mageplaza.com/install-magento-2-extension/)

## I. How to install

### Install via composer (Recommend)

Run the following command in Magento 2 root folder
```
composer require mageplaza/module-product-labels
php bin/magento setup:upgrade
php bin/magento setup:static-content:deploy
```


## II. How to configure

From the Admin Panel, go to `Content > Product Labels > Configuration`

![](https://i.imgur.com/IizVFc3.png)

### Configuration

From the Admin Panel, go to  `Content > Product Labels > Configuration`

![](https://i.imgur.com/dcFYmnV.gif)

#### General

* **Enable**: Choose Yes to use this module
* **Limit The Number Of Labels Per Product**: Enter the number of labels that can be displayed on each product. The default value of the field is 2. If left blank, the number of labels displayed per product is not limited.
* **Show Labels On Pages**: Select one or more pages to show labels on the frontend. Pages that are not chosen will not display any labels.
* **Show Labels with Related Products:** Select **Yes** to display labels of Related Products on the Product Details page
* **Show Labels with Upsell Products:** Select **Yes** to display labels of Upsell Products on the Product Details page
* **Show Labels with Cross-sell Products:** Select **Yes** to display labels of Cross-sell Products on the Product Details page
* **Hide Label when Variable equal to zero**: Select **Yes** to hide labels when the value of the variable is 0 or the variable name is incorrect

**On Sale Product Setting**

* **Min Value of Discount Amount Variable**: The minimum value of the {{discount}} variable shown in the label.
* **Min Value of Discount Percentage Variable**: The minimum value of the {{discount_percent}} variable shown in the label.
* **Rounding Method of Discount Percentage**: The value of Rounding Method applied to the {{discount_percent}} variable can be changed with all label display rules.
  * **Normal**: The number of points converted from the currency (USD, EUR, …) will be rounded according to the normal rule. *E.x: 10.2 rounded to 10; 10.8 rounded to 11.*
  * **Rounding Up**: The number of points converted from the currency (USD, EUR, …) will be rounded up. *E.x: 10.2 or 10.8 is rounded to 11.*
  * **Rounding Down**: The number of points converted from the currency (USD, EUR, …) will be rounded down. *Ex: 10.2 or 10.8 is rounded to 10.*


**New Product Setting**

* **How to set the New Products**: There are 2 ways to set products as new products: 
  * **New from Date** and **New to Date**
  * **Create date product**:
    * **Number of Days**: The maximum number of days from the Create day of product until today, which depends when `How to set the New Products = Create Date`
 
**Stock Status Label Setting**

* **Displays Label When The Product Is Out Of Stock**: If **Yes**, the out of stock products are only sticked with  the ‘Out of Stock’ Label.
* **‘Out of Stock’ Label**: Select a label to display with out of stock products

### Manage Rules

From the Admin Panel, go to `Content > Product Label > Manage Rules` 

![](https://i.imgur.com/oCbmGNB.png)

#### Create New Feed

- Step 1: Fill in the full information in the `General` section
- Step 2: Set the condition to apply the label display for the products in the `Where to Show` section
- Step 3: Design labels and images on the product in the `label design` section

##### Step 1: Fill in the full information in the `General` section

![](https://i.imgur.com/jmHx5Vs.png)

- **Name**: Enter the name of the item
- **Status**: Choose `Enable` tô display the label on the product
- **State**:
  - State includes 4 statuses: **NONE, QUEUE, RUNNING, DONE**. When a new rule is created, the status is **NONE**
  - The change of the state depends on the date that you apply the rule
  
- **Store View**:
  - Only the selected products in the store display the label
  - Allow choosing many stores simultaneously
  
- **Customer Group(s)**:
  - Only the selected customer groups can see the label displayed on the product
  - Allow choosing many groups simultaneously
  
- **From Date**: Choose the start day displaying the label on the product
- **To Date**: Choose the finish displaying the label on the product
- **Stop further processing**: Choose Yes to limit the number of the rule that applied for a product (based in the priority and ID)
  - For example: Whether there are 4 rules created as Rule 1, Rule 2, Rule 3, and Rule 4 and the priority respectively is 0, 5, 3, 3. 
    - All rules are set as `Stop further processing = No`. This means that all rules are applied.
    - Edit the Rule 3, and choose `Stop futher processing = Yes`. After you Apply Rule, the rules are applied as Rule 1 (has the higher priority) and Rule 3. Rule 2 (the priority is lower) and Rule 4 (created later) are not applied.
    
- **Priority**: 
  - Enter priority for synchronizing objects
  - The smaller the input number, the higher the priority. Items have the equal priority, the priority will be based on ID.
  
  
##### Step 2: Set the condition to apply the label display for the products in the `Where to Show` section

![](https://i.imgur.com/JMZI4Cf.png)

- **Best seller**: Choose Yes to auto-assign the label for the bestselling products
- **New Products**: If Yes, display label on all products that are new products and meet the conditions
- **On Sale Product**: If Yes, display label on all products are on a discount or Special Price and meet the conditions
- **Limit**: Enter the maximum number of best-selling products automatically labeled
- You can customize the product displayed the label by selecting the products shown below after clicking the `Preview Product` button or selecting the products of the category that will be displayed the label. You will see all products meet the conditions in the `PREVIEW PRODUCTS` field

##### Step 3: Design labels and images on the product in the `label design` section

![](https://i.imgur.com/ndkeU2j.gif)  

Design the labels and images for the product on the `Product Page`

- **Template**: Choose the template displaying on the product
- **Image**: Choose the images displaying on the product
- **Image Size**:
  - Enter the length and width of the image
  - If you use the available template, the length and width of the image will be automatically loaded when you load the template
- **Show Label if Stock is lower than**: The label will be shown at the products having fewer stocks than the entered number. If left empty, the label will be shown at all products that follow the rule.
- **Label**:
  - Fill in the label displaying on the product
  - Only support some following variables:
    - {{discount}}: Discount amount
    - {{discount_percent}}: Discount percentage
    - {{current_price}}: Original Price
    - {{attribute_code}}: Any product attribute code
    
- **Font family**: Choose the text font for labels
- **Font size**: Enter the size of labels
- **Label color**:
  - Choose the color for labels
  - The default color will be changed according to the template
  
- **Custom CSS**: You can edit the labels as your want
- **Select position**: You can edit the display position of labels here by moving the mouse or edit the display position of labels by choosing the positions respectively with the squares on the side.
- **Tooltip**: Enter text for tooltip shown when hovering on the label.
  
Design the labels and images for the product on the `Product Listing` (the label will display on the product in the Category, Search Page or Layered Navigation if your website installs Layered Navigation extension of Mageplaza.

  - **Same design with product page**
    - `Same design with product page = Yes`: Auto-get the design the same as with `Product Page` above
    - `Same design with product page = No`: Display the design the same as `Product Page` above and admins can edit arbitrarily   
    
## III. Frontend
#### Display on the Product Listing

![](https://i.imgur.com/1QmoqfC.png)

#### Display on the Product Page

![](https://i.imgur.com/gEOG0Tz.png)

#### Display on the Mini Cart

![](https://i.imgur.com/AKvHpeh.png)

#### Display on the Shopping Cart Page

![](https://i.imgur.com/l6g0irs.png)

#### Display on the Checkout Page

![](https://i.imgur.com/cPgQr4c.png)

#### Display on the One Step Checkout Page

![](https://i.imgur.com/G4spJhJ.png)

## IV. API

**Product Labels** extension of Mageplaza supports the use of the **Rest API** to view a detailed list of all labels that the admin has created.

- Details can be viewed [here](https://documenter.getpostman.com/view/10589000/SzYXWeLf?version=latest).
- Instructions for creating **Integration tokens** are [here](https://devdocs.magento.com/guides/v2.3/get-started/authentication/gs-authentication-token.html).

## V. GraphQL

Run the following command in Magento 2 root folder:

```
composer require mageplaza/module-product-labels-graphql
php bin/magento setup:upgrade
php bin/magento setup:static-content:deploy
```

To start working with Product Labels GraphQL in Magento, you need the following:

- Use Magento 2.3.x. Return your site to developer mode
- Install [chrome extension](https://chrome.google.com/webstore/detail/chromeiql/fkkiamalmpiidkljmicmjfbieiclmeij?hl=en) (currently does not support other browsers)
- Set **GraphQL endpoint** as `http://<magento2-3-server>/graphql` in url box, click **Set endpoint**. (e.g. http://develop.mageplaza.com/graphql/ce232/graphql)

View Mageplaza-supported queries [here](https://documenter.getpostman.com/view/10589000/SzYXVygT?version=latest)

## VI. Widget
### Step 1: Select the Type

- On the Panel Admin, go to `Content > Elements > Widgets`
- In the upper-right corner of **Widgets** workplace, click on the **Add Widget** button.

![](https://i.imgur.com/U1xtaT6.png)

- In the Settings section:
  - Choose **Mageplaza Product Labels** type in the **Type** box.
  - Choose the current theme you are applying in the **Design Theme**.
  - Click the **Continue** button.

### Step 2: Complete the Storefront Properties section

- In the **Storefront Properties** section:
  - Enter **Widget Title** for the internal reference.
  - Assign the block to all store views in the **Assign to Store View** field or to any store view you want to apply the block.
  - Set the **Sort Order** if many blocks are placed at the same container. The block is at the top if the inserted value is zero.

- In the **Layout Updates** section, click on **Add Layout Update** to set the layout.
  - Choose the [category](https://www.mageplaza.com/kb/how-to-create-a-new-category-in-magento-2.html), [product](https://www.mageplaza.com/kb/how-create-simple-product-magento-2.html), or [page](https://www.mageplaza.com/kb/how-to-add-a-new-cms-page-magento-2.html) to show the block in the **Display on** field.
  - If set to a specific page, you need to choose the Page you want the block to display and set Container that is the position of the page the block appears.

![](https://i.imgur.com/F2xWRoF.png)

### Step 3: Widget Options

- Click the button **Select Label…** to select label

![](https://i.imgur.com/Lzs8BPL.png)

You can also add widget on Pages or Blocks via **Insert Widget**

![](https://i.imgur.com/pOGVLax.gif)






