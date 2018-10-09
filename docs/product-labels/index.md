# Product Labels
## Overview

Product Labels extension offer the feature that helps store owners display images, labels, characters, symbols on the products. This feature brings the customers the intuitive interface that allows them to know that Which products are being got the sale off and what percentage of sales is, etc. Also, when you integrate this module, store owners can easily attract customers to the best-selling products or products that they are planning for marketing to increase sales and revenues for their online stores.

## Documentation


## How to install

### Method 1: Install ready-to-paste package
- Download the latest version at [Mageplaza Product Labels for Magento 2]()


### Method 2: Install via composer (Recommend)

Run the following command in Magento 2 root folder
```
composer require mageplaza/magento-2-blog-extension
php bin/magento setup:upgrade
php bin/magento setup:static-content:deploy
```







## How to configure

From the Admin Panel, go to `Store > Settings > Configuration > Mageplaza Extensions > Product Labels > Configuration`

### Configuration

From the Admin Panel, go to  `Store > Settings > Configuration > Mageplaza Extensions > Product Labels > Configuration`, choose `General` section

#### General

* **Enable**: Choose Yes to use this module

### Manage Items
#### Create New Feed

- Step 1: Fill in the full information in the `General` section
- Step 2: Set the condition to apply the label display for the products in the `Where to Show` section
- Step 3: Design labels and images on the product in the `label design` section

##### Step 1: Fill in the full information in the `General` section

- **Name**: Enter the name of the item
- **Status**: Choose `Enable` tô display the label on the product
- **Store View**:
  - Only the selected products in the store display the label
  - Allow choosing many stores simultaneously
  
- **Customer Groups**:
  - Only the selected customer groups can see the label displayed on the product
  - Allow choosing many groups simultaneously
  
- **From**: Choose the start day displaying the label on the product
- **To**: Choose the finish displaying the label on the product
- **Stop further processing**: Choose Yes to allow displaying many labels on a product
  - The label will be applied until the created rule has `Status = Disable`, then it will stop
  
- **Priority**: 
  - Enter priority for synchronizing objects
  - The smaller the input number, the higher the priority. Items have the equal priority, the priority will be based on what item is created first.
  
##### Step 2: Set the condition to apply the label display for the products in the `Where to Show` section

- **Best seller**: Choose Yes to auto-assign the label for the bestselling products
- **Limit**: Enter the maximum number of best-selling products automatically labeled
- You can customize the product displayed the label by selecting the products shown below after clicking the `Preview Product` button or selecting the products of the category that will be displayed the label

##### Step 3: Design labels and images on the product in the `label design` section

Design the labels and images for the product on the `Product Page`

- **Template**: Choose the template for the label
- **Image**: Choose the images displaying on the product
- **Label**:
  - Fill in the label displaying on the product
  - Only support some following variables:
    - {{save_amount}}: Save amount
    - {{save_percent}}: Save percentage
    - {{price}}: Original Price
    - {{special_price}}: Special Price
    - {{day_left}}: Days left for special price. 
    - {{final_price}}: Final price
    - {{qty_left}}: Item Qty left
    - {{sku}}: Product SKU
    - {{att:code}}: Any product attribute code
    
- **Preview**: Store owners can edit the position of the label here by moving the mouse or they can edit the position or the font text at the following positions:
  - `Top`: Enter the interval of the image with the side margin
  - `Bottom`: Enter the interval of the image with the bottom margin
  - `Left`: Enter the interval of the image with the left margin
  - `Right`: Enter the interval of the image with the right margin
  - `Font family`: Choose the font for the label entered in the `Label` field
  
Or the store owners can edit the label themselvies as their want by adding CSS into the following field:
  - `Custom Style`: Enter CSS that you want to edit displaying the label as their want
  
Design the labels and images for the product on the `Product Liating` (the label will display on the product in the Category, Search Page or Layered Navigation if your website install Layered Navigation extension of Mageplaza)

  - **Same design with product page**
    - `Same design with product page = Yes`: Auto-get the design the as with Product Page above
    - `Same design with product page = No`: Display the design the same as Product Page above and admins can edit arbitrarily
    
### Frontend


  




























