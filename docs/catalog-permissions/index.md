# Catalog Permissions 

## Overview

Currently, for websites that have some pages you want to create their own promotion or restrict some customer groups to visit these pages. With the [Mageplaza Catalog Permissions extension](https://www.mageplaza.com/magento-2-catalog-permissions/), admin can restrict access to catalogs with Category, Product Detail, and Static Page/Block pages by customer groups and IP addresses. In particular, you can redirect customers to another page when accessing restricted pages or hiding restricted pages at the frontend. 

## How to download and install:

- [Download Mageplaza Catalog Permissions](https://www.mageplaza.com/magento-2-catalog-permissions/)
- [Intall Catalog Permissions](https://www.mageplaza.com/install-magento-2-extension/)

## How to configure

## 1. Configuration

Login to the **Admin Magento**, choose `Stores> Configuration> Catalog Permissions`

![Imgur](https://i.imgur.com/dVzgEXk.gif)

### 1.1. General

![Imgur](https://i.imgur.com/F8T0wlr.png)

- **Enable**: Select `Yes` to enable the module. You can install [Call for Price extension](https://www.mageplaza.com/magento-2-call-for-price/) of Mageplaza to contact the store to ask for price or product information or ask for the restricted page you want to access.


![Imgur](https://i.imgur.com/19IRxvu.png)


- **Disable Catalog Search for**: Selecting customers from whom you want to restrict **Catalog Search** at all the pages having the search tab. You can choose to restrict multiple customer groups at the same time. The customer group that is not selected will remain the Catalog Search normally. If you do not want to choose a group restriction, you can leave this option blank. With the following customer groups:
  - NOT LOGGED IN
  - General
  - Wholesale
  - Retail
  
  ![Imgur](https://i.imgur.com/Mo3fdQj.png)
  
  
- **WhitelistIP(s)**:
  - Enter the IP address you don't want to restrict access to restricted pages. It is possible to fill in multiple or one range of IP addresses separated by lines. For example: 123.16.32.1, 192.168.1.*, 192.168.*.*,...For the IP addresses that are not added will still have restricted access to the pages.
- If left blank, it is restricted to all IP addresses when accessing the restricted site.
  
  
#### 1.1.1. Restrict Category

![Imgur](https://i.imgur.com/eL8KiCi.png)

- **Enable**: Select `Yes` to enable Restrict Category and will display a new group `Customer Group Restriction` under the `Content` tab when accessing the `Catalog> Categories`.

- **Redirect To**: Select the page you want to redirect to when access to the restricted category:
  - **CMS Page**: Display the **Select CMS Page** field to select to redirect to the CMS Page when access to the restricted category.
    - **Select CMS Page**: Select CMS page. You can access `Content > Page`, click **Add New Page** to create more pages you want to redirect to.
    
    ![Imgur](https://i.imgur.com/BDR6uH6.png)

  - **Select Specific URL**: will display the **Specific URL** field to redirect to the Url you want when accessing the category is restricted.
    - **Specific URL**: Enter Url for the **Specific URL** field. If left blank or incorrectly entered, the URL format will redirect to the 404 page by default
- **Hide menu on Frontend**:
  - If `Yes` is selected, it will hide the Category outside the Frontend.
  - And vice versa, selecting `No` will not hide the Category outside the Frontend and will display as usual.
  
  
#### 1.1.2. Restrict Product

![Imgur](https://i.imgur.com/3jR2hKF.png)

- **Enable**: select `Yes` to enable Restrict Product and will display a new group `Customer Group Restriction` when accessing `Catalog > Products`
- **Redirect To**: Select the page you want to redirect to when access to the restricted product:
  - **CMS Page**: Display the **Select CMS Page** field to select to redirect to the CMS Page when access to the restricted product.
    - **Select CMS Page**: Select CMS page. You can access `Content > Page`, click **Add New Page** to create more pages you want to redirect to.
    
    ![Imgur](https://i.imgur.com/BDR6uH6.png)

  - **Select Specific URL**: will display the **Specific URL** field to redirect to the Url you want when accessing the restricted product.
    - **Specific URL**: Enter Url for the **Specific URL** field. If left blank or incorrectly entered, the URL format will redirect to the 404 page by default

- **Hide on Category Page & widget**:
  - If `Yes` is selected, it will hide the product on the category page and widget.
  - If `No` is selected, it will not hide Product on category page and widget and will display product as usual.
  
#### 1.1.3. Restrict Static Page

![Imgur](https://i.imgur.com/kubEvxv.png)

- **Enable**: select `Yes` to enable **Restrict Static Page** and will display a new group `Customer Group Restriction` when accessing `Catalog > Products`
- **Redirect To**: Select the page you want to redirect to when access to the restricted page:
  - **CMS Page**: Display the **Select CMS Page** field to select to redirect to the CMS Page when access to the restricted page.
    - **Select CMS Page**: Select CMS page. You can access `Content > Page`, click **Add New Page** to create more pages you want to redirect to.
    
    ![Imgur](https://i.imgur.com/BDR6uH6.png)

  - **Select Specific URL**: will display the **Specific URL** field to redirect to the Url you want when accessing the restricted product.
    - **Specific URL**: Enter Url for the **Specific URL** field. If left blank or incorrectly entered, the URL format will redirect to the 404 page by default

  
#### 1.1.4. Restrict Static Block

![Imgur](https://i.imgur.com/rxgIscf.png)

- **Enable**: select `Yes` to enable Restrict Static Block and will display a new group **Customer Group Restriction** when accessing `Content > Blocks`.

### 2. Edit Category

- Login to the Magento Admin, choose `Catalog> Categories`, new/edit choose a category you want Restrict Category.
- This section applies the configuration when choose new/edit for each Category. You can Restrict Category with each category here.
- Note: If the Restrict Category configuration is in the Configuration section and for each Category here, different priorities will be given to each category first.

![Imgur](https://i.imgur.com/oez4vp0.png)

- **Enable**:
  - It will default to `No` if Configuration Enable Restrict Category is enabled.
  - If `Yes` is selected, it will enable Restrict Category with the category you want to limit it. Show more Restriction Customers Group(s), Redirect To fields, Also Hide Menu, Start Date, End Date.
  - Selecting `No` will turn off Restrict Category with the category you do not want to limit it to customers.
  
- **Customer Group**: Select the group of customers to apply Restrict Category. Those groups that are not selected will not apply Restrict Category to that category. You can select multiple customer groups at the same time. With the following customer groups:
  - NOT LOGGED IN
  - General
  - Wholesale
  - Retail

- **Redirect To**: Select the page you want to redirect to when access to the restricted category:
  - **CMS Page**: Display the **Select CMS Page** field to select to redirect to the CMS Page when access to the restricted category.
    - **Select CMS Page**: Select CMS page. You can access `Content > Page`, click **Add New Page** to create more pages you want to redirect to.
    
    ![Imgur](https://i.imgur.com/BDR6uH6.png)

  - **Select Specific URL**: will display the **Specific URL** field to redirect to the URL you want when accessing the restricted category.
    - **Specific URL**: Enter Url for the **Specific URL** field. If left blank or incorrectly entered, the URL format will redirect to the 404 page by default

  
- **Also Hide Menu**:
  - Select `Yes` to hide that category in Frontend. Otherwise, selecting `No` will display that category in Frontend.
  - You can select `Use Config Settings` to default to use the configured value at Configuration Restrict Category with Hide field on Frontend menu.

- **Start Date**:
  - Click the Calendar box to select the start date for Restrict Category. Restrict Category does not apply if the date is not selected or not up to date.
  -  If you leave it blank, then selecting a date will start applying Restrict Category even after enabling Enable until End Date.
  
- **End Date**:
  - Click the Calendar box to select the end date for Restrict Category. Restrict Category does not apply or the date is not selected.
  - If left blank to choose an end date, it will start applying Restrict Category by the date selected in the Status Date field and will not end up applying Restrict Category until it is disabled for that category.
  
  
