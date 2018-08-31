# Daily Deal
## Overview



## Download & Install
- [Mageplaza Daily Deal]()
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)

## How to use
* Daily Deal only applies for Simple Product, Configurable Product, and Group Product
* Daily Deal is displayed  on the Category Page and Product Detail Page, including the information as Countdown, Deal Price, Percent Discount, the number of sold deals, and the number of left deals

!

!

* Customers can access on the pages as All Deal, New Deal, Best-seller Deal, Feature Deal if admins allows them to be displayed on the frontend
* Also, Deal can be installed to display on the slidebar, or the screen corner of the Store

## How to configure

Login to the Magento Admin, choose **Mageplaza > Daily Deal**

!

### Manage Daily Deal
#### 1.1. Managerial Grid

!

* This is a place to store all created deals
* From the grid, admins can understand all basic information of the Deal as ID, deal applied products, the products SKU, the deal's status, Deal Price, Deal Quantity, Store View, Sale Quantity, Start On, End on, and Action
* Admins can perform some actions as the following:
    * **Edit**: Choose `Edit` in the Action column to edit the information on the Edit Deal page
    * **Delete**: Tick and choose 1 deal, choose `Action > Delete` (in the upper left of the grid) to delete the Deal
* Also, admins can filter, change store view, show/hide columns or export the grid

#### 1.2. Add New/ Edit Form

!

* **Product**: The name of the product that is applied the deal. To select the product, click on `Select Product`. The name of the selected product will automatically appear in `Product` section
* **Original Price**:
    * The original price of the product will be automatically updated when the product is selected.
    * This price is displayed based on `Catalog > Product`.
    
* **Product Quantity**:
    * The quantity of the product is automatically updated when the product is selected
    * This number is displayed based on `Catalog > Product`.
    
* **Status**: Select `Active` so that the deal can be active and displayed on the Frontend
* **Is Feature**: Select Yes so that the deal is displayed on `Feature Deal` and `Floating slider deal` pages
* **Deal Price**: Set the price you want to sell the product
* **Discount**:
    * This item will be automatically updated based on `Original Price` and `Deal Price`.
    * The discounted amount and the discounted percent will be displayed
    * `Discount = Original Price - Deal Price`
    * `% = (Deal Price/Original Price)* 100%`
    
* **Deal Quantity**:
    * Set the quantity of the product you want to sell
    * The quantity of the deal can not exceed `Product Quantity`
    
* **Qauntity of sold items**:
    * The quantity of sold items are automatically updated when the deal is purchased
    * The deal does not exceed `Deal Quantity`
    
* **Store View**: A website can have multiple Store Views. The category is only visible with selected Store Views.
* **From Date**: Set the date to use the deal
* **To Date**: Set the end date using the deal

``Note``:

* 

Extension does not apply to Bundle Product
Since the Configurable Product and Group Product are composed of Simple Product Components, it is recommended to set up a Deal for the Configurable Product or Group Product to be installed for each component product. Details here
Deal of the Configurable Product displayed in Category Page is the highest Deal in the component products. When choosing options color / size / format, Deal will change itself according to the option selected.
Group Product Deal is not displayed in Category Page, it only displays Deal Price at Product Detail Page.
