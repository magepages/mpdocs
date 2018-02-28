# Reward Points

## Overview
Nowadays, the perfect measure of success in e-commerce market is how many loyal customers who frequently place orders you have instead of those who create single purchase at your store. So any ideas to increase the interaction between customers and store owners to establish the great consumption cycle on your website?

Magento 2 Reward Points extension will allow earning unlimited reward points as well as use them flexibly as payment methods if necessary. By this way, it is not complicated to build the loyal customer network supplying the number of leads for the merchants.

```
The Reward Points system does not apply for guest customers.
```

## How to use

### I. For customers
Customers can earn reward point(s) and use them perfectly in these following areas:

#### 1.1. The checkout page
* Customers can use their earned reward point(s) to discount the order.
* This area also displays earning point(s) customers will receive when they place the order.
* You can find more detail in [here](https://docs.mageplaza.com/reward-points/index.html#checkout-page).

![i1](https://i.imgur.com/jcMn2Jf.png)

#### 1.2. View Cart Page (Shopping Cart)
* Consumers can have the same entitlements like when they’re on the checkout page.
* However, Earning Point(s) can’t be shown if admins disable the field [**Display Earning Points**](https://docs.mageplaza.com/reward-points/index.html#display-configuration) in Shopping Cart.
* Earning Point(s) can be changed according to each of the specific **Customer Group** and **Earning Rate** which are configured in the backend.

![i2](https://i.imgur.com/ZWlo0qF.png)

### II. For admins (store owners)
* Admins are able to create and manage **Earning Rate**, **Spending Rate** and **Transaction** as well as configure the Reward Points extension generally in the backend.
* Admins are able to apply changes to reward point(s) in the customer’s account and refunf point(s) in **Credit Memo** of the backend.
* Admin can’t use reward point(s) when creating a new order.

![i3](https://i.imgur.com/u35VRGO.png)

## How to configure
Login to your backend, then follow the path ``Mageplaza > Reward Points`` to complete below Reward Points configurations
* Earning Rate
* Spending Rate
* Transaction
* Configuration

```
Earning rate and Spending Rate are stored in the same table inside the database. Therefore, the admin will probably see a slightly difference in ID of rates.
```
![i4](https://i.imgur.com/UvI1wnn.png)

### I. Earning Rate
Go to ``Mageplaza > Reward Points: Earning Rate``

#### 1.1. General Management.
This is the place where admins can store created Earning Rates.

![i5](https://i.imgur.com/I5wjuX0.png)

* From the grid view, admins can acknowledge some fundamental information of **Earning Rate** such as **ID**, **Website**, **Customer Group**, **Money Spent**, **Earning Point** and **Priority**. Also, admins can:
  * **Delete**: Tick in the checkbox of the earning rate they want to delete, then choose “Delete” in the ``Action`` box (at the left of the grid). Choose “OK” in the confirmation message.
  * To edit an earning rate, choose “Edit” in the **Action** column.
* Admins can filter, hide/display **Column** or export rates.

#### 1.2. Add/Edit New Rate
After entering the Earning Rate interface, admins select ``Add New Rate`` to create a new earning rate. Then, click ``Save and Continue Edit``, the page will automatically switch to the **Edit Rate** page.

![i6](https://i.imgur.com/BTr4Efn.png)

* In the **Website** field: Choose website(s) you want to apply the earning rate.
* In the **Customer Group** field:
  * Only customers who belong to this group can be entitled this earning rate.
  * Customers belong to different groups can receive different earning rates even they purchase the same product.
* In the **Rate** field 
  * Indicates the conversion rate from X (currency) to Y (point)
  * Admins can fill out the appropriate rate in here. However, decimal numbers are not approved. If admins enter a decimal number, they will be rounded following the rule ``>= 0.5 to 1``, or  ``< 0.5 to 0``.
* In the **Priority** field: 
  * Indicates the priority of this earning rate when compare them to other earning rates.
  * 0 is the highest priority. The higher number, the lower its priority is.
  * If there’re existed earning rates have the same priority, rules will apply on the rate which has smaller ID.
 
### II. Spending Rate.
Follow the way ``Mageplaza > Reward Points: Spending Rate``

#### 2.1. General Management.
This is the place where admins can store created Spending Rates.

![i7](https://i.imgur.com/Di3Iwom.png)

* From the grid view, admins can acknowledge some fundamental information of an earning rate such as **ID**, **Website**, **Customer Group**, **Spending Point**, **Discount Received** and **Priority**. Also, admins can:
  * **Delete**: Tick in the checkbox of the spending rate they want to delete, then choose “Delete” in the ``Action`` box (at the left of the grid). Choose “OK” in the confirmation message.
  * To edit an earning rate, choose “Edit” in the **Action** column.
* Admins can filter, hide/display **Column** or export rates.

#### 2.2. Add/Edit New Rate.
After entering the Spending Rate interface, select ``Add New Rate`` to create a new spending rate. Then, click ``Save and Continue Edit``, the page will automatically switch to the **Edit Rate** page.

![i8](https://i.imgur.com/G1k9TBh.png)

* In the **Website** field: Choose wwebsite(s) you want to apply the spending rate.
* In **Customer Group** field
  * Only customers who belong to this group can use their point(s) following this spending rate.
  * Customers belong to different groups can use different spending rates even they purchase the same product.
* In **Rate** field 
  * Indicates the conversion rate from X (point) to Y (currency)
  * Admins can fill out the appropriate rate in here. However, decimal numbers are not approved. If admins enter a decimal number, they will be rounded following the rule ``>= 0.5 to 1``, or  ``< 0.5 to 0``.
* In **Priority** field 
  * Indicates the priority of this earning rate when compare them to other earning rates.
  * 0 is the highest priority. The higher number, the lower its priority is.
  * If there’re existed earning rates have the same priority, rules will apply on the rate which has smaller ID.

### III. Transaction.
The right path is ``Mageplaza > Reward Points: Transaction``.

#### 3.1. General Management.
This is the place where admins can create and manage transactions. By entering this interface, admins can add/minus customer’s reward point(s).

![i9](https://i.imgur.com/JOX0McB.png)

* From the grid view, admins can acknowledge some fundamental information of created transactions such as **ID**, **Customer**, **Action**, **Point(s)**, **Expire On**, **Date**, **Status**. Also, admins can:
  * **View**: To review a transaction, admin choose “View” in the **Action** column.
  * **Cancel**: To cancel a created transaction (in case its expiration date date hasn’t come yet), admins select in the checkbox, choose “Cancel” in the **Action** box (at the left of the grid).
  * **Expired**: Admins need to take this action if a transaction isn’t expired automatically. At this point, take the same action when admins view/cancel a transaction, choose “Expired” then process with the ``OK`` button.
* Admins can filter, hide/display **Column** or export rates.

#### 3.2. Add new transaction.
After entering Transaction tab, choose ``Add new transaction`` to generate a new transaction. Next, click ``Save and Continue Edit``, the page will direct to the **View Rate** page.

![i10](https://i.imgur.com/GD7Ag8H.png)
 

* In the **Customer** field
  * Click this section to display the store’s customer list in the popup form. Admins can only choose **1** from this customer list.
  * Name of the chosen customer will be added reward point(s).
  * Is you leave this field blank, there will be an error message.
* In the **Points** field
  * Enter the number of point(s) you want to add for the chosen customer.
  * If you enter negative numbers or leave it blank, there will be an error message.
  * If you enter decimal numbers, it will round the number down (*E.x: 1.8 = 1.1 = 1*)
* In the **Comment** field
  * Enter the comment that it will be sent along with the added point(s) to the chosen customer. 
  * You can left this field blank.
* In the **Points expire after** field
  * The added point(s) of this transaction will be expired after X day(s) from the time you create this transaction.
  * Admins have the right to add higher point(s) than the maximum point of the amount customer can accumulate (*E.x: max point = 1000, admins can add points to the customer balance = 1100 or more*).

#### 3.3. View Transaction.
Admin can review or expire a transaction in the **View Transaction** page.

![i11](https://i.imgur.com/keL0D6s.png)

### IV. Configuration.
Follow in the backend ``Mageplaza > Reward Points: Configuration``

#### 4.1. General Configuration.
This general configurations can apply for the whole module.

![i12](https://i.imgur.com/4gXJj5l.png)

* In the **Enable** field: Choose “Yes” to active the Reward Point extension from Mageplaza. 
* In the **Label in My Account Navigation** field: Enter the name of **Tab Reward Point** displaying on the frontend at the [My Account > Reward Point](https://docs.mageplaza.com/reward-points/index.html#my-account-my-points-reward) section.
* In the **Point Label** field
  * If customer balance is 0 or 1, this label will display on the frontend.
  * If you leave it blank, the default label is **Points**
* In the **Plural Point Label** field
  * If customer balance is 0 or 1, this label will display on the frontend.
  * If you leave it blank, the default label is **Points**
* In the **Zero Point Label** field
  * Enter the label when the customer balance back to 0. 
  * If you leave it blank, the default label is **0**
* In the **Show Point Icon** field: Choose “Yes” to display the point icon on the frontend.
* In the **Reward Point Icon** field
  * The upload image will be used as the point icon and be shown on the frontend.
  * JPG, PNG or GIF is accepted. There will be an error message if the input file is invalid.
  * If you leave it blank, the default icon will be use ![icon](https://i.imgur.com/fTGtFo4.png).
* In the **Maximum Available Point Balance** field
  * Set the maximum number of point(s) that the customer can accumulate by purchasing.
  * If the customer save up to this point(s), reward point(s) of the customer will not increase, and reward point(s) of products will not show on the frontend.
  * Admins can add point(s) to a customer without paying attention to this max value.
  * If the field is blank or  0, there will be no limitation to save up point(s)

#### 4.2. Earning Configuration.

##### 4.2.1. General
This displays general configurations regarding earning point(s)

![i13](https://i.imgur.com/kwE0PV9.png)

* In the **Rounding Method** field: There are 3 options for rounding
  * **Normal**: The number of points converted from the currency (USD, EUR, ...) will be rounded according to the normal rule. *E.x: 10.2 rounded to 10; 10.8 rounded to 11*.
  * **Rounding Up**: The number of points converted from the currency (USD, EUR, ...) will be rounded up. *E.x: 10.2 or 10.8 is rounded to 11*.
  * **Rounding Down**: The number of points converted from the currency (USD, EUR, ...) will be rounded down. *Ex: 10.2 or 10.8 is rounded to 10*.
* In the **Points Earning From Tax** field: Select “Yes” so the tax can be converted to earning point(s)
* In the **Earn points from shipping fee**: Select “Yes” to allow Shipping Fee to be converted to point(s).
* In the **Point Refund** field: When the customer places order, they will receive a certain amount of earning points. The shop owner selects “Yes” in this section to retrieve the points when that  customer refunds the order.

##### 4.2.2. Sales Earning Process.

![i14](https://i.imgur.com/xOi55oV.png)

* In the **Earning Points after Invoice created** field:
  * Select “Yes” to add earning point(s) to the customer right the time their invoice is created.
  * Select “No” to set additional earning point(s) after the order is completed.
* In the **Points Expired After** field
  * The entered number here is expiration day(s) of point(s), start to count from the day point(s) is added.
  * If this field is blank, added point(s) will be used indefinitely.

#### 4.3. Spending Configuration.
![i15](https://i.imgur.com/g5qAyke.png)

* In the **Discount Label** field: Discount Label which displays on the frontend will change according to the content of this section.
* In the **Minimum spending points per order** field
  * Set the minimum number of point(s) that customers must have in their balance to be able to use points for discounting orders.
  * If the number of point(s) in the customer balance is less than the minimum spending point, the Reward Points slider will not appear on the View Page or Checkout Page.
  * If you leave it blank or 0, the min point number is 0.
* In the **Maximum spending points per order** field:
  * Set the maximum number of point(s) that customers can use for the order.
  * If you leave it blank or 0, the maximum number of point(s) customers can spent is unlimited (possibly it’s the maximum number of points they have or the number of points is converted by SubTotal of Cart).
* In the **Spending Points on Shipping**: Select “Yes” to allow the customer can use their point(s) to reduce the shipping cost.
* In the **Restore spent points after order refunding** field: When the customer places an order, they can apply a certain amount of their reward point(s). Admins select “Yes” in this section to return point(s) to that customer if their order is refunded.
* In the **Use Max Point By Default** field: Select “Yes” to always set the customer's spending point(s) to the maximum that they can use.

#### 4.4. Display Configuration.

![i16](https://i.imgur.com/GDa0fkg.png)

* In the **Display Total Points Summary on Top Links** field: Select “Yes” to display the total number of reward point(s) that customer has on Top Link.

![i17](https://i.imgur.com/MdTaIp1.png)
 
* In the **Display Points Summary on Dashboard Page** field: Select “Yes” to display the total number of reward point(s) that customer has in the Reward Point tab.

![i8](https://i.imgur.com/bvfjpjF.png)

* In the **Display Earning Points on Product Details Page** field: Select “Yes” to display the product's earning point(s) number that customers will receive when purchasing products, on the Product Details page.

![i19](https://i.imgur.com/yUrM3xV.png)

* In the **Display Earning Points on Product Listing Page** field: Select “Yes” to display the product's earning point(s) number in the category that customers can earn when purchasing.

![i20](https://i.imgur.com/sHKToBo.png)

* In the **Display Earning Points on Minicart** field: Select “Yes” to show the total number of earning point(s) customers can receive when checking out the cart at the Minicart page.

![21](https://i.imgur.com/lG7GVJQ.png)

* In the **Display Earning Points on Shopping Cart** field: Select “Yes” to display the total number of earning point(s) customers can receive when checking out the cart at the View Cart Page. (Shopping Cart).

![i22](https://i.imgur.com/AJ15ok4.png)

#### 4.5. Email Configuration.

![i23](https://i.imgur.com/WuADaTe.png)

* In the **Enable Notification Email** field: Select “Yes” to allow notification emails to be sent to customers.
* In the **Sender Email** field: Admins can choose one of 5 available Magento Sender: General Contact, Sales Representative, Customer Support, Customer Email 1, Customer Email 2
* In the **Update Point Balance Email Template** field
  * Pre-installed email configuration that customers can receive the notification mail when their reward point(s) changes the balance.
  * To change **Email Template**, admins can create another one under ``Marketing > Email Template``.
  * How to create a new Email Template guide can be found [here](https://www.mageplaza.com/kb/how-to-customize-email-template-transactional-email-magento-2.html).
* In the **Point expires Email Template** field:
  * Pre-installed email configuration that customers can receive the notification mail when their reward point(s) is about to expire.
  * To change the Gift Card Email template, admins can create another one under ``Marketing > Email Template``.
  * How to create a new Email Template guide can be found [here](https://www.mageplaza.com/kb/how-to-customize-email-template-transactional-email-magento-2.html).
* In the **Send email reminder before a transaction expires** field
  * Set how many day(s) the email can sent before a transaction is about to expire.
  * If you leave the field blank or 0, reminder email will not be sent.
* In the **Subscribe customers by default** field: When a new customer subscribes to a store, their Reward Points Notification ignores email notifications in default. Select “Yes” in this section so that when their first transaction is made (they purchase or by the admin), Reward Points Notification is checked immediately.

### V. Manage Reward Point of Customer

![i22](https://i.imgur.com/qX4hUPG.png)

Admins can manage **Reward Points Balance**, **Transactions** and **Notification** of customers by going to ``Customer > Edit Customer > Reward Points``.

* In the **Reward Points Balance** field: Indicates the total reward point(s) the customer has.
* In the **Update Point Update Balance** field: Allows admins can change the balance by filling in **Update Point** and set its expiration date. Admins can also enter the reason for change in the **Comment** field
* In the **Reward Points Notification** field: Admins can register or cancel the subscribe on behalf of the customer when their balance is updated or point(s) is about to expire.
* In the **Reward Points History** grid: Displays information about all executed transactions: ID, Store View, Point, Point Spend, Date, Date Expired, Comment.

The **Balance**, **Notification** and **Transaction** information of the admin will be synchronized with the customer's frontend at ``My Account > My Points & Reward``.

### VI. Customer Frontend.

#### 6.1. My Account/My Points & Reward.
Customers can check the Reward Point information in this section after logging in:
* At **Reward Information**
  * The total reward point(s) that customer has.
  * Earning Rate and Spending Rate that customer is entitled (according to his **Customer Group** and **Website** is set in the backend).
  * The maximum number of points that the customer's balance can receive from orders.
  * The maximum number of days that point(s) can be used since that customer receives point(s).
* At **Transaction History**: Customers can know the transaction history in details
  * Made transaction(s) and its comment.
  * Number of changes point(s)
  * Date and time of the transaction
  * Expiration Dates of point(s)
  * Transaction status
* They can also sign up to receive updates when their balance changes or point(s) is about to expired.
* All information here is synchronized in the backend ``Customer > Reward Points``

![i23](https://i.imgur.com/70QxdpB.png)

#### 6.2. Checkout Page
* Customers can use the slider or text box to change reward point(s) they want to use.
* Used reward point(s) can be limited to a range.
  * Customers are only allowed to use their point(s) in this range.
  * If Subtotal has a value less than the minimum value of the limited value range, the **Apply Reward Point** section will not be displayed.
* Tick the checkbox **Maximize my discount with Point** to use all these possible points immediately
  * The total points that customer has if Total Point(s) < Max Point for per Order and Subtotal.
  * Max Point which indicates Max Point < Total Point and Subtotal.
  * Point(s) is equivalent to Subtotal if that point(s) is < Max Point and Total Point.
* The Order Summary box will display more sections about reward points to make the calculation easier.
* Spending Point can be used for Tax, Shipping Fee if it’s installed in the backend.
* The conversion rate between **Reward Point** and **Spending Point** depends on the Spending Rate configuration in the backend.

![i24](https://i.imgur.com/jYxvQV7.png)

#### 6.3. Other additional frontends.
* **Top link**: Displays the point(s) that customer is having.

![i25](https://i.imgur.com/IDryq1q.png)

* **Category Page**: Displays the earning point(s) per product.

![i26](https://i.imgur.com/vmV5tF1.png)

* **Product Detail Page**: Displays the earning point(s) per product.

![i27](https://i.imgur.com/lUOimPO.png)

* **MiniCart**: Displays the earning point(s) of all products in the cart.

![i28](https://i.imgur.com/R19AZQN.png)


 


 
  
    









