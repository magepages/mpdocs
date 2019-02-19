# Catalog Permissions User Guide 

## Overview

Currently, for websites that have some pages you want to create their own preferences or restrict some groups of customers to visit that page. With the [Catalog Permissions](https://www.mageplaza.com/magento-2-catalog-permissions/), the admin can restrict access to catalogs with Category, Product Detail, and Static Page / Block pages for customer groups and IP addresses you want. In particular, you can redirect customers to another page when accessing restricted pages or hiding restricted pages in addition to the frontend. That's Mageplaza Catalog Permissions extension. 


## How to download and install:

- [Download Mageplaza Catalog Permissions](https://www.mageplaza.com/magento-2-catalog-permissions/)
- [Intall Catalog Permissions](https://www.mageplaza.com/install-magento-2-extension/)

## How to configure

## 1. Configuration

Login to the **Admin Magento**, choose `Stores> Configuration> Catalog Permissions`

### 1.1. General

- **Enable**: Select `Yes` to enable the module's feature. You can install [Call for Price extension](https://www.mageplaza.com/magento-2-call-for-price/) of Mageplaza to contact the store to ask for price or product information, the page you want to access is limited,...

- **Disable Catalog Search for**: Selecting customers who want to restrict **Catalog Search**, can choose to restrict multiple groups of customers at the same time. The customer group that is not selected will remain the Catalog Search normally. If you do not want to choose a group restriction, you can select Please Select to ignore this option. With the following customer group:
  - NOT LOGGED IN
  - General
  - Wholesale
  - Retail
- **Disable All Restrictions for IP (s)**:
  - Enter the desired IP address. It is possible to fill in multiple or one range of IP addresses separated by lines. For example: 123.16.32.1-123.16.32.99,...
  - If left blank, there is no IP address restriction.
  
  
#### 1.1.1. Restrict Category

- **Enable**: Select `Yes` to enable Restrict Category and will display a new group `Customer Group Restriction` under the `Content` tab when accessing the `Catalog> Categories`.

- **Redirect to URL**:
  - Enter Url in the Redirect to URL field, which will redirect to the url entered when accessing restricted categories.
  - If left blank, it will redirect to the 404 page by default.
- **Hide menu on Frontend**:
  - If `Yes` is selected, it will hide the Category outside the Frontend.
  - And vice versa, selecting `No` will not hide the Category outside the Frontend and will display as usual.
  
  
#### 1.1.2. Restrict Product

- **Enable**: select `Yes` to enable Restrict Product and will display a new group `Customer Group Restriction` under the `Content` tab when accessing `Catalog> Products`
- **Redirect to URL**:
  - Entering Url in the Redirect to URL field will redirect to the entered url when accessing restricted products.
  - If left blank, it will redirect to the 404 page by default.
- **Hide on Category Page & widget**:
  - If `Yes` is selected, it will hide the product on the category page and widget.
  - If `No` is selected, it will not hide Product on category page and widget and will display product as usual.
  
#### 1.1.3. Restrict Static Page

- **Enable**: select `Yes` to turn on Restrict Static Page and will display a new group `Customer Group Restriction` under the `Content` tab when accessing `Content> Pages`.

- **Redirect to URL**:
  - Enter Url into the Redirect to URL field, which will redirect to the url entered when accessing restricted Static Pages.
  - If left blank, it will redirect to the 404 page by default.
  
#### 1.1.4. Restrict Static Block

- **Enable**: select `Yes` to enable Restrict Static Block and will display a new group `Customer Group Restriction` under the `Content` tab when accessing Content> Blocks.

### 2. Edit Category

- Login to the Magento Admin, choose `Catalog> Categories`, edit choose a category you want Restrict Category.
- This section applies the configuration when editing for each Category. You can Restrict Category with each category here.
- Note: If the Restrict Category configuration is in the Configuration section and for each Category here, different priorities will be given to each category first.

- **Enable**:
  - It will default to `No` if Configuration Enable Restrict Category is enabled.
  - If `Yes` is selected, it will enable Restrict Category with the category you want to limit it. Show more Restriction Customers Group (s), Redirect To fields, Also Hide Menu, Start Date, End Date.
  - Selecting `No` will turn off Restrict Category with the category you do not want to limit it to customers.
  
- **Customer Group**: Select the group of customers to apply Restrict Category. Those groups that are not selected will not apply Restrict - Category to that category. You can select multiple customer groups at the same time. With the following customer groups:
  - NOT LOGGED IN
  - General
  - Wholesale
  - Retail
  
- **Redirect To**:
  - Enter Url in the Redirect To field, which will apply redirection when accessing the category you want to limit it to.
  - If left blank, it will redirect to the 404 page by default.
  - You can select `Use Config Settings` to use the redirect to the default url you configured at Configuration Restrict Category with Url - To Redirect field.
  
- **Also Hide Menu**:
  - Select `Yes` to display that category in Frontend. Otherwise, selecting `No` will not display that category in Frontend.
  - You can select `Use Config Settings` to default to use the configured value at Configuration Restrict Category with Hide field on Frontend menu.

- **Start Date**:
  - Click the Calendar box to select the start date for Restrict Category. Restrict Category does not apply if the date is not selected or not up to date.
  -  If you leave it blank, then selecting a date will start applying Restrict Category even after enabling Enable until End Date.
  
- **End Date**:
  - Click the Calendar box to select the end date for Restrict Category. Restrict Category does not apply or the date is not selected.
  - If left blank to choose an end date, it will start applying Restrict Category by the date selected in the Status Date field and will not end up applying Restrict Category until it is disabled for that category.
