# Configurable Products Preselect

## Overview

When customers access a page of any configurable product, it is hard for them to review and choose the attributes if no options are available. [Configurable Products Preselect of Mageplaza](https://www.mageplaza.com/magento-2-configurable-products-preselect/) supports displaying certain combinations of a Configurable product, helping to orient and save time for customers. With this extension, you can set the selections you like and display them by default at the **Product View Detail Page**. This extension also supports 4 types of Preselect: **The First Option of Each Attribute Option, Default Product, The Cheapest Product and The Most Expensive Product**. It is fully compatible with [Mageplaza Quick View & AJAX Cart](https://www.mageplaza.com/magento-2-quick-view/), [Mageplaza Seo](https://www.mageplaza.com/magento-2-seo-extension/) and [Layered Navigation](https://www.mageplaza.com/magento-2-layered-navigation-extension/seo-friendly-url.html).


## How to download and install

- [Download Mageplaza Configurable Products Preselect](https://www.mageplaza.com/magento-2-configurable-products-preselect/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


## How to Configure

From the Admin Panel, go to `Stores > Configuration > Mageplaza Extensions > Configurable Products Preselect > Configuration`

![](https://i.imgur.com/u1OIn9k.gif)

### 1. Configuration

From the Admin Panel, go to `Stores > Configuration > Mageplaza Extensions > Configurable Products Preselect > General Configuration`

![](https://i.imgur.com/Pixh4Pn.png)

- **Enable**: Select **Yes** to turn on the module Configurable Products Preselect.
- **Preselect Type**: There are 4 types of Preselect as follows:

![](https://i.imgur.com/n8ZBDC1.png)

- **First-option Preselect**: This type will default to taking the product with the first attributes set for Configurable Products
- **Cheapest-option Preselect**: This type will choose to display the product with the lowest price
- **Most Expensive-option Preselect**: This will choose to display the highest priced product.
- **Default-option Preselect**: This is the default pre-selected product. If you choose this type, go to the **Edit** page of each **Configurable Product** to select the Default option for that product at the **Configuration tab**. (details instruction at Part 2)
- **Preselect on Category Page**: If the child product has **Swatch Attribute**, it can be applied on Category page. To understand the Swatch Attribute you can refer it [here](https://www.mageplaza.com/kb/how-to-configure-swatches-in-magento-2.html).
  - Select **Yes** to enable this feature
  - Select **No** to disable this feature


### 2. Edit Configurable Product to select Default Preselect Option 

When  `Preselect Type = Default-option Preselect`, you can follow these steps to select **Default Preselect Option** for each product:

- **Step 1**: From Admin Panel, go to `Products > Catalog`
- **Step 2**: Filter products by `Type = Configurable Product`
- **Step 3**: Choose a product. Go to Tab **Configurations** and tick to select a product to set it as the **Default Preselect Option**.

![](https://i.imgur.com/U2VYR1S.png)

## Frontend

### 1. Category Page

![](https://i.imgur.com/mlLrGwW.png)

### 2. Product View Details

![](https://i.imgur.com/YlQDvDe.png)
