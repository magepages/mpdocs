# Reports Professional

Previously, Mageplaza has released Reports module that helps shop owners statistically and more easily manage the number of customers, the number of transactions, or the total amount of money your store earned in a day/year/etc. In order to meet the higher demands of the store manager, we have upgraded this module to a new version to help shop owners manage as well as see clearly the growth or declining rate of sectors that need to be managed, such as the number of best-selling products, countries or provinces with the highest number of purchases.

## How to configure

Login to the Magento admin panel, choose `Store > Settings > Configuration > Mageplaza Extensions > Reports`

![](https://i.imgur.com/KmSr5GG.png)


### 1. General 

![](https://i.imgur.com/IGClDwN.png)

* In the **Module Enable** field: Choose `Yes` to enable this module.
* In the **Enable Chart** field: Select `Yes` to show the graph.
* In the **Enable Compare** field: select `Yes` to display the comparison.

### 2. Display outside the dashboard

- In addition to the cards available in the Standard version, the Pro version provides additional mostly used cards, including:
  - **Abandoned Carts**
  - **Stock vs Sold**
  - **Sales by Customer Group**
  - **Refresh Statistics**
  
- The **Report Pro** also allows administrators to view the report details of some cards when clicking on **View Details** of Chart

![](https://i.imgur.com/6qy9GOX.png)

- Detail Report Pages are displayed in **Mageplaza Report**: 

![](https://i.imgur.com/QhzmEgL.png)


### Bestsellers

Click on the **View Details** section in the right corner of the card to see the details of the **Bestsellers** section.

![](https://i.imgur.com/zbEJ3EP.png)

In this field, store owners can view the details of the bestsellers for a period of time to be configured. Also, shop owners can also compare that product with another product when they view the detail of each product.

![](https://i.imgur.com/9AWva9u.png)

Store owners can add the SKU of products that they want to compare with the first product they choose, then click on the **Apply** button to add the product data as well as compare them. Besides, they can also filter according to various fields that aren't included in the default of Magento.

### Sales By Location

Click on the **View Details** in the right corner of the card to view the detail of **Sale By Location** section

![](https://i.imgur.com/PVvDyEV.png)

In this section, shop owners can view which country has the largest number of orders or total. Not only that, when they click on each country, they can view the regions of the country that have the most number of purchases. Then, when they click on the regions, it will display the purchase details of that region.

![](https://i.imgur.com/CDGjIBO.png)

### Sales by Customer Group

Click on the **View Details** in the right corner of the card to view the details of the **Customer Group** field

![](https://i.imgur.com/5VxvGxW.png)

This section shows the groups of customers that have purchased and the number shown on the chart helps the store owner to easily see which group of customers buy the most. From that, they can make useful marketing strategies to improve the revenues for stores.

### Customers

Click on **View Details** section in the right corner of the card to view the detail of the **Customers** field

![](https://i.imgur.com/eDqxTxp.png)

**Customers** card will display customer details of which customer groups buy the most. This will help store owners have policies or incentives for these customers.

### Stock & Sold

Click on the **View Details** in the right corner of the card to see the detail of **Stock & Sold** field

![](https://i.imgur.com/APtpu7K.png)

This field will allow store owners to know what time and how many items were sold so that store owners can easily manage as well as add the items that are about to run out.

### Abandoned Carts

Click on the **View Details** in the right corner of the card to view the detail of **Abandoned Carts** field

![](https://i.imgur.com/6qPyLpJ.png)

Abandoned Carts says at what time the number of unpaid carts equates to the cost of the loss is how much. This section also tells store owners which time period has the most shopping cart is not paid the most and then, take measures to resolve them.


### Refresh Statistics

Instead of waiting for the statistics to be updated update once per day by cron, the admin can refresh them immediately with **Massaction** in Grid **Refresh Statistics**. Admin can refresh the following 4 grids:
- Abandoned Carts
- Bestsellers
- Sales By Customer
- Sales By Location

![](https://i.imgur.com/K8zzoUA.png)

Two supported **Massactions** are:
- **Refresh Lifetime Statistics**: refreshes all data from the beginning until the refresh time of the selected grid
- **Refresh Statistics for the Last Day**: Refresh the data of the selected grid within the last 24 hours

The admin can use the command line to refresh the statistics
```
php bin / magento mp-reports: reindex --type = "lifetime" {id}
php bin / magento mp-reports: reindex --type = "recent" {id}
```
For example:

- Refresh all tables:

```
php bin / magento mp-reports: reindex --type = "recent"
```

- Refresh the tables by id:

```
php bin / magento mp-reports: reindex --type = "recent" 1 2

```
























