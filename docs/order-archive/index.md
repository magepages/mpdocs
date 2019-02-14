# Order Archive for Magento 2

## Overview

Every day in online stores, there are many orders placed and processed, Magento's default Order Management Grid quickly becomes cluttered and difficult to control. Therefore, Admin must spend a long time to manage orders in his store. [Mageplaza Order Archive](https://www.mageplaza.com/magento-2-order-archive/) extension makes it possible for the admin to- manually or automatically- transfer orders in different states to the order storage (Order Archive), making order management easy and convenient. Admin will receive an email notification whenever the order is archived according to schedule. The order has been stored or not displayed in the Customer's Account, depending on the settings by admin. Furthermore, admins can also use the API to manage archived orders.

In addition, this extension is fully compatible with the [Mageplaza Delete Order](https://www.mageplaza.com/magento-2-delete-order/) extension, admins can delete the order even after it has been archived.

## How to download and install

- [Download Mageplaza Order Archive](https://www.mageplaza.com/magento-2-order-archive/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)

## How to use

- Admin can transfer orders from the **Grid order by default** to the **Grid Order Archive**, perform mass actions like the default Grid Order
- Set the time to store orders automatically
- Edit, turn off the feature **Send email notification** when the order is archived according to schedule
- Check API
- Use the Command line


## How to Configure
### 1. Configuration

From the **Admin panel**, go to `Stores> Configuration> Mageplaza> Order Archive`

![Imgur](https://i.imgur.com/wccAHvS.png)

#### 1.1. General Configuration

![Imgur](https://i.imgur.com/9Aogcl4.png)

- Select `Enable = Yes` to enable the module
- **Show Archive Order for Customer(s)**: Select `No` to have the orders transferred to the Archive be hidden from **My Orders** in **Customer's Dashboard**


#### 1.2. Schedule Configuration

![Imgur](https://i.imgur.com/uAQr1Jh.png)

- Includes settings related to automatic order storage. An order is only stored in schedule when and only if it satisfies all the conditions on **Purchase Date, Order Status, Customer Group, Store View, Shipping Country and Order Total**
- **Schedule**: set the cycle automatically according to daily, weekly or yearly
- **Start Time**:
  - Set the automatic storage time of each cycle
  - By that time of day, the schedule will be run automatically
- **Apply for Period Before**:
  - Set the time interval for automatic schedule application
  - The orders calculated from the moment the current number of days back and forth will be converted to Archive
  - For example, **Period = 10**, today is December 31st, 2018, all orders created from December 21st, 2018 and earlier will be transferred to Archive (if they meet the conditions below)
- **Order Status**:
  - Satisfactory orders can be archived automatically according to schedule
  - When selecting **Please Select**, no order can automatically be archived
- **Customer Group**: **Automatic Schedule** applies only to orders purchased by customers of the selected Customer group
- **Store View**: Select Store view where the order is placed
- **Shipping Country**:
  - **All Countries**: Check all Orders
  - **Specific Country**: Check for orders with **Shipping Address** at Country selected
- **Order Total Under**: Order's Maximum Total Paid 
- In addition to the way the schedule is run automatically, Admin can also click the `Run Manually` button to store orders that meet conditions whenever they want.


#### 1.3. Email Notification

![Imgur](https://i.imgur.com/ktURTSw.png)

- **Enable**: Select `Yes` to enable email sending feature to admin every time an order is stored (including manual or automatic storage)
- **Sender**: There are 5 default types of **Magento Sender** for Admin to choose: **General Contact, Sales Representative, Customer Support, Custom Email 1, Custom Email 2**
- **Email Template**:
  - This extension supports email to informs admin when the order is archived
  - To change **Email Template**, admin can create another Email Template in `Marketing> Email Template`.
  - Instructions for creating new Email Template [here](https://www.mageplaza.com/kb/how-to-customize-email-template-transactional-email-magento-2.html)
- **Send To**:
  - The chosen emails will receive a notification when the Archive is ordered
  - Each email is separated by commas (,)
  
  
### 2. Order Archive Grid

![Imgur](https://i.imgur.com/dWrvNDR.png)

- Similar to the default **Magento Grid Order**, the **Order Archive Grid** also has basic features such as **Filter, Add Columns or Export and View Order**
- In Grid, Admin can perform 3 main actions
  - **UnArchive**: The selected orders will be transferred to the default Grid Order
  - **Delete**: The selected Orders will be deleted from the database. This feature only works when the store owner installs the [Mageplaza Delete Order module](https://www.mageplaza.com/magento-2-delete-order/)
  - **View**: The **Detail Order page** will be displayed

![Imgur](https://i.imgur.com/UbeCAzW.png)


### 3. Command line

Admins can use the following command to archive or unarchive any order that they want: 

```
php bin / magento order: archive --id = "order_id"
php bin / magento order: unarchive --id = "order_id"
```

![Imgur](https://i.imgur.com/hcxnXa0.png)


### 4. API

Order Archive features **API integration** with the Rest API commands of Magento. By using the available order structures to check the order information, invoice, credit memo of the order, the admin can quickly capture the details of an order. Details about **Rest API Magento** [here](https://devdocs.magento.com/guides/v2.3/rest/tutorials/orders/order-intro.html)

**Instructions for using Postman to check order information with API**

#### Step 1: Get Access Token
- Log in to **Postman**, in the **Headers section** select **Key = Content-Type**, **Value = application/json**
- Use the **Post** and **Send** method with the following command:
`http://example.com/rest/default/V1/integration/admin/token`

![Imgur](https://i.imgur.com/iSJ5mA5.png)

- **Access Key** will be displayed in the **Body** section


#### Step 2: Use the REST API commands of Magento

- Open a new tab, at the **Headers** enter 2 Key:
  - **Authorization**: `bearer access_token`
  - **Content-Type**: `application/json`

![Imgur](https://i.imgur.com/hqv5YNr.png)

- **Send REST API command**

![Imgur](https://i.imgur.com/V0C6VLA.png)

- **Result**: 

![Imgur](https://i.imgur.com/XAiLCol.png)

### 5. Notification Email

![Imgur](https://i.imgur.com/Qk1RSkU.png)
