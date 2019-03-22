Delete Orders


## Overview

Every day there are many orders placed and processed. The management at the **Order Grid** in the Magento database are very risky and time-consuming for admins' work since they have to delete order one by one. The [Mageplaza Delete Order extension](https://www.mageplaza.com/magento-2-delete-orders/) makes it more convenient for the admin - either manually or automatically - to help them delete orders easily with a single or bulk delete command. Also, admin will receive an email notification when Order is Delete by schedule.


## How to download and install

- [Download Mageplaza Delete Orders](https://www.mageplaza.com/magento-2-delete-orders/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


## How to Configure
### I.Configuration
From the **Admin panel**, go to `Stores > Configuration > Mageplaza > Delete Orders`.

![Imgur](https://i.imgur.com/dFJpzZb.png)

#### 1.General

![Imgur](https://i.imgur.com/MvgjaEa.png)

Select **Enable = Yes** to enable the module.

#### 2. Automatic Delete Configuration

![Imgur](https://i.imgur.com/1r50764.png)

![Imgur](https://i.imgur.com/wsWjXc4.png)

Includes settings of au-delete orders. An Order can only be deleted automatically by schedule when and only if it satisfies all the conditions of: Purchase Date, Order Status, Customer Group, Store View, Shipping Country and Order Total.

- **Schedule For**:
  - Set the schedule for delete order daily, weekly or monthly.
  - With Daily, schedule will run automatically by date.
  - With Weekly, schedule will run automatically on every Monday.
  - With Monthly, schedule will run automatically on the 1st of the month.
  
- **Start Time**:
  - Set the starting time to delete order 
  - By that time of day, the schedule will be run automatically.
  
- **Excluded Period**:
  - Enter the period to apply delete order before it. 
  - For example, **Period = 10**, today is **December 31st, 2018**, all orders created before **December 21st, 2018** will be deleted (if they meet the conditions below).
  
- **Order Status**: Select order status to be applied Delete order. 
  
- **Customer Group(s)**: Choose the customer groups whose orders will be deleted auto by schedule

- **Store View(s)**: Select Store view where Order is purchased to apply Delete Orders

- **Shipping Countries**:
  - **All Countries**: Check all Orders.
  - **Specific Country**: Check for orders with **Shipping Address** at Country selected.
  
- **Order Total less than**: Limit the order's Maximum Value to apply delete order. 

- Besides delete orders automatically, Admin can also click the "Run Manually" button to delete specidic orders that meet all conditions 

- **Note**: Admin can also delete orders by using the command line `php bin / magento order: delete order_id`. For example: Admin wants to delete the order with **ID = 15**, admin on the command line running the command `php bin / magento order: delete 15`.


#### 3. Email Notification

![Imgur](https://i.imgur.com/1b3EGcY.png)

- **Enable**: Select **yes** to enable email sending to Admin every time an Order is deleted (including manual or auto deletion).

- **Sender**: There are 5 default types of Magento Sender for Admin to choose: **General Contact, Sales Representative, Customer Support, Custom Email 1, Custom Email 2**.

- **Email Template**:
  - Choose the default email template to send email notification of delete order to admins
  - To change Email Template, Admin can create another Email Template in `Marketing > Email Template`.
  - Instructions for creating new Email Template [here](https://www.mageplaza.com/kb/how-to-customize-email-template-transactional-email-magento-2.html).
  
- **Send To**:
  - Insert the email receipients a notification when Order is Delete.
  - Each email =must be separated by a commas (,).


### II. Grid

From **Admin panel**, go to `Sales > Orders`.

![Imgur](https://i.imgur.com/e3SrAHU.png)

- Admin can delete orders created by clicking on the order ID
- In case Admin wants to delete all order, click **Select All**, the system will select all created orders.

![Imgur](https://i.imgur.com/kg4ikwL.png)

- After Select order, admin click `Action > Delete` to delete order.

![Imgur](https://i.imgur.com/1NSnKah.png)

- Also, Admin can delete an order by clicking to **View** of the order.

![Imgur](https://i.imgur.com/iuFrIGv.png)

- Then click **Delete**.

![Imgur](https://i.imgur.com/p7N4glD.png)

- The system will show a popup, click **OK** to delete order

![Imgur](https://i.imgur.com/SNDHFwT.png)

III. Email

![Imgur](https://i.imgur.com/hjBYzVr.png)
