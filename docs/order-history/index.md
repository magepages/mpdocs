# Order History

## Overview

Normally, it is very time consuming and complicated for admin to be able to monitor and manage each customer's order. But with the [Mageplaza Order History extension](https://www.mageplaza.com/magento-2-order-history/), it is completely easy and convenient. The module allows to add statistics of ordered products by customers, hide / show order statistics by product on Product Edit page. In addition, the module can export data in CSV and Excel XML format.
The Mageplaza Order History extension is fully compatible with Mageplaza Delete Orders, enabling the admin to manage and delete orders quickly.

## How to download and install

- [Download Mageplaza Order History](https://www.mageplaza.com/magento-2-order-history/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)

## How to Configuration
From Admin Panel, go to `Stores > Order History > Configuration`

### 1.Configuration

From the Admin Panel, go to `Stores > Order History > Configuration`, select **General**

- Enable: Select **Yes** to turn on the Module.
- **Show Item Details at the Order tab**: Select **Yes** to display the product grid purchased by the customer on the **Orders** tab in **Customer Detail Backend**.
- Show **Ordered Products History** on **Customer Details Page**:
  - Select **Yes** to display the **Order Product History** tab which shows a list of products that this customer has purchased, each product is on one row.
  - If the order has many product types, when displayed in the table, it will divide the cart into multiple rows, one for each type of product, and they have the same Order ID number.
- **Show Related Orders History on Product Edit Page**: Select **Yes** to display the **Order History** tab which show s order data by product on **Product Details Page**.

### 2. Orders tab on Customer Details Page
From the Admin Panel, go to `Customers > All Customers > Edit Customers> Order`

- Here shown **sucessfully ordered products**.  
- From the table, admin can capture the following information: **ID, Purchase Point, Purchase Date, Bill-to Name, Ship-to Name, Grand Total (Purchased), Status, Action, Item Detail (Name, SKU, Qty, Item Status)**.
- In addition, admin can also filter, export table information to the machine in two forms, CSV and Excel XML.
- Below is the information export from the grid:


### 3. Ordered Produce History tab on Customer Details Page
From the Admin Panel, go to `Customers > All Customers > Edit Customers > Ordered Products History` 

- This is where the list of products this customer has purchased is displayed.
- From the table, admin can capture the following information: Order ID, Order Status, Product Name, Product SKU, Qty, Discount, Item Status, Order Total.
- When you click on the product, go to the product details page.
- In addition, admin can Sort, Filter, Search, Export table information to the machine in two forms of CSV, Excel XML.
- Information is displayed when the export of the table:

### 4. Related Orders History tab on Product Edit Page
From the Admin Panel, go to `Catalog > Products > Product Edit > Related Orders History`

- This is where order statistics are based on products.
- From the table, the admin can capture the following information: ID, Status, Purchase Point, Purchase Date, Customer Name, Customer Email, Original Price, Order Price, Qty, Grand Total (Purchased), Action.
- **Action**:
  - **View**: Displays the order information of that product of the customer.
  - In addition, admin can **Sort, Filter, Search, Export** table information to the machine in two forms of CSV, Excel XML.
- Information is displayed when the export of the table:
