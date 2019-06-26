# Abandoned Cart Email

## Overview

Cart abandonment is an action that consumers leave the website after adding a product to their virtual cart. Discount codes, Exit offers, and Security badges are some of the ways you can keep customers from recovering their carts. 

[Magento 2 Abandoned Cart Email](https://www.mageplaza.com/magento-2-abandoned-cart-email/) extension will help you solve this problem. This extension assists  you to determine which cart is having forgotten products, from those initial crumbs to send reminders, or be possible to send discounts to help shoppers easily recover their shopping cart and complete the checkout, which will absolutely skyrocket the value of orders, sales, profits for the store 


**Note**: 
* Mageplaza Abandoned Cart Email is totally compatible with Mageplaza SMTP extension
* The extension supports and keeps track of logged customers or entered emails by visitors when they're in the checkout page
* The module will be run depending on the Cronjob configuration


## How to configure

Login to Magento Admin, ``Marketing > Abandoned Cart Email`` to configure it in general

![](https://i.imgur.com/KaRgALH.png)

### 1. Configuration

#### 1.1 General Configuration
Go to ``Stores > Settings > Configuration > Mageplaza Extensions > Abandoned Cart Email`` then click on ``General Configuration``

![](https://i.imgur.com/TpAPlK5.png)

* **Enabled**: select “Yes” to enable Mageplaza Abandoned Cart Email extension
* **Send Email to Subscribers Only**: Select **Yes**, only sending abandoned cart email to registered and subscribed customers. If select **No**, sending email to all abandoned carts of registered customers which satisfy the conditions. 

* **Email**: This section is for the abandoned cart reminder email settings
  * Click the ``Add`` button to add a reminder email
  * **Send After** to change the email delivery time. The counting will be started from the last updated cart time, a reminder email will be sent to customers.
  * In the **Sender** to choose senders entitle. You will have 5 choices: General Contact, Sales Representative, Customer Support, Email Custom 1, Custom 2 Email
  * In the **Email Template** column, you can find some pre-made email templates. Otherwise, you can customize your own template by creating a new one at sidebar ``Marketing > Email Template``. The newly created template will automatically appear in this section
  * **Has coupon** is an optional selection. Choose “Yes” to submit a discount code. Coupon installation will be instructed later in [**1.3 Coupon**](https://docs.mageplaza.com/abandoned-cart-email/index.html#coupon)
  * Click the trash can icon![](https://i.imgur.com/62D0Zqz.png) to delete a email
  * Click the Send test icon to send a test email. To send a test mail successfully, admin has to provide at least one email address in the field ``Send Test Email to``. This feature is available for multi-stores also.
* **Send Test Email To**: This field is required only for the sending test email purpose. To guarantee that customers' data will not be leaked, only the most recent abandoned cart's information which belongs to a guest can be sent to this test email.
  
#### 1.2 Analytics
Google Analytics is integrated with Mageplaza Abandoned Cart extension. Go to ``Stores > Settings > Configuration > Mageplaza Extensions > Abandoned Cart Email`` and click on **Analytics**.

![](https://i.imgur.com/NIQ6wTo.png)

It manifests in this direct link in the frontend like
![](https://i.imgur.com/O9qLYDH.png)

* In the **Enable** field: Select “Yes” to use Google Analytics tool. Then, the Campaign Source, Campaign Medium, Campaign Name, Campaign Term, Campaign Content items will be displayed automatically
* In the **Campaign Source** field: the data of Campaign Source will appear in the Link back to Cart if it’s available. If you leave it blank, Source on frontend won’t be displayed.
* In the **Campaign Medium** field: the data of Campaign Medium will appear in the Link back to Cart if it’s available. If you leave it blank, Medium on frontend won’t be displayed
* In the **Campaign Name** field: data of Campaign Name will appear in the Link back to Cart if it’s available. If you leave it blank, Name on frontend won’t be displayed
* In the **Campaign Term** field: the data of Campaign Term will appear in the Link back to Cart if it’s available. If you leave it blank, Term on frontend won’t be displayed
* In the **Campaign Content** field: the data of Campaign Content will appear in the Link back to Cart if it’s available. If you leave it blank, Content on frontend won’t be displayed

#### 1.3 Coupon
Go to ``Stores > Settings > Configuration > Mageplaza Extensions > Abandoned Cart Email`` and click on **Coupon**.

![](https://i.imgur.com/jOcCvdM.png)

* In the **Rule** field: choose a principle to generate a discount code
  * Only those rules that are activated and generated automatically will be displayed in the configuration
  * How to create rules in `Marketing > Cart Price Rules` guide can be found [here](https://www.mageplaza.com/kb/how-create-a-cart-price-rule-in-magento-2.html)
* In the **Valid** field: Where to change the expiration date of a discount code
  * The discount code is only used during the time set since the code was created
  * Time will be counted in hour(s)
  * Discount code can’t be applied if this section is blank
* In the **Code Length** field: set the length of discount code. Code length does not include Prefix, Suffix, and Separators
* In the **Code Format** field, you can choose 3 formats for code:
  * Alphanumeric: Code consists of letters and numbers
  * Alphabetical: The code consists only of letters of the alphabet
  * Numeric: The code consists of digits from 0 to 9 only
* In the **Code Prefix** field: Add the prefix of the code in this section. Discount code won’t contain a prefix if the Code Prefix is left blank
* In the **Code Suffix** field: Add the suffix of the code in this section. Discount code won’t contain a suffix if the Code Suffix is left blank
* In the **Dash Every X Character** field: Between each X, there will be the number of characters in the Code set in this part.

An example of the Abandoned Cart Email sent to a customer

![](https://i.imgur.com/PB7n1bW.png)


#### 1.4. Real-time Reports

Go to `Stores > Settings > Configuration > Mageplaza Extensions > Abandoned Cart Email`, choose **Real-time Reports**

![](https://i.imgur.com/7J0uZ4I.png)

**How to measure Abandoned Cart**: Time to define an abandoned cart. The unit is minute.
Example: If we enter 30, then after 30 minutes, carts will be considered abandoned. The carts under 30 minutes will be in the Real Time column. 
**Default Date Range**: Day limit on **Cart Board** Page

![](https://i.imgur.com/BffbSdH.png)

Ex: Select **Default Date Range= 30 days** then at Cart Board page, the Cart will be shown in 30 days. See the picture below:

![](https://i.imgur.com/HvdyyLY.png)


### 2. Overall Reports

#### 2.1 Reports

Go to ``Marketing > Abandoned Cart Email > Overall Report``. 

![](https://i.imgur.com/3sqQXYX.png)

This is the place where archives the number of Abandoned Carts, the number of Abandoned Carts sent, the number of failed Abandoned Carts and the number of Abandoned Carts that were recovered in a period of time. 

There are two Report Time modes:
* **DAY**
  * When you select the **DAY** mode, adjust the **From** and **To** entries, the Report Time will be displayed on a daily basis
  * If the distance between **From** and **To** is too far apart, the distance between two days in Report Time will be increased
![](https://i.imgur.com/gvpQhk2.png)

* **MONTH**: When you select **MONTH** mode, adjust the **From** and **To** entries, the Report Time will be displayed on a monthly basis
![](https://i.imgur.com/O9Iz9vu.png)

#### 2.2 Logs

This is the place archiving abandoned cart emails which have been sent, including their ID, Subject, Receiver, Coupon, Sequent Number, Sent, Status (Sent/ Error) and Action (Preview/ Delete, Send Again)

From the **Admin panel**, follow ``Marketing > Abandoned Cart Email > Logs``
![](https://i.imgur.com/zmKitE3.png)

* **Action = Preview**: a pop-up window showing the email which has been sent will appear
![](https://i.imgur.com/AX0wnPF.png)

* **Action = Delete**: the selected emails will be deleted. You can choose multiple emails at the same time
* **Action = Send Again**: the selected email will be sent to customers again. This email has the same content as the selected email
* **Clear Logs** button: Click the Clear Logs button to quickly delete all the emails stored in the logs. The next email’s ID has nothing to do with the deleted one

 ### 3. Checkout Abandonment Report
 
 From Admin Panel, go to `Marketing > Abandoned Cart Email > Checkout Abandonment Report`
 
 ![](https://i.imgur.com/G7MHd75.png)

* Here will show statistics about Abandoned Cart Checkout 
* Display statistics on checkout cart and abandoned cart grid about quantity, rate (%), total revenue ($)
* Display statistics tables about abandoned cart after sending email (ACE):
* Statistics the number of abandoned cart after sending abandoned cart email
  * Number of emails sent
  * The amount can be saved after sending an email
  * Saved revenue
  * Checked out rate of abandoned cart

- Show detailed statistics in period (day/week/month/year/custom) by Grid

![](https://i.imgur.com/bH8Vql3.png)


### 4. Abandoned Product Report
From the Admin Panel, select `Marketing > Abandoned Cart Email > Abandoned Product Report`

![](https://i.imgur.com/nUff3Vp.png)

- Here listing 5 most abandoned products by time filter + group by. Each product will be shown in one specific color. 

![](https://i.imgur.com/mg5kSBm.png)
- Display information of abandoned products by time filter, **sort by = Abandoned Time** (number of times to be abandoned). The information includes:
  - Product Name
  - Thumbnails
  - SKU
  - Price
  - Abandoned Time: The number of the abandoned cart containing the product.
  - Qty: The total qty of the product in the abandoned cart.
  - Abandoned Revenue: the total value of the order of abandoned products.
  
  
### 5. Shopping Behavior Analysis

From Admin Panel, select `Marketing > Abandoned Cart Email > Shopping Behavior Analysis`

![](https://i.imgur.com/2itzrL5.png)

![](https://i.imgur.com/ogbD6I7.png)

- Here showing the times percentage when fields were filled/updated on the checkout page before the cart was abandoned.
- **Column chart**: displays the % value at the beginning and inside of the column. Color is changed by different %:
  -  0-40%: displayed in red.
  -  40-70%: display yellow.
  -  70-100%: displayed in green.
- Admin can choose to hide/ show columns at each statistics table. Clicking on **Hide optional fields**, the popup will show all the information fields in the table along with the checkbox; Any field that is checked will be displayed, unchecked ones will not display statistics.

![](https://i.imgur.com/SGZfbHL.png)

### 6. Cart Board

From the Admin Panel, select `Marketing > Abandoned Cart Email > Cart Board`

![](https://i.imgur.com/kLtKHWq.png)

- Here reported all the Cart types:
  - **Real-time**: cart will be here if abandoned cart time is less than the time to set at **How to measure Abandoned Cart** field in Configuration.
  - **Abandoned Cart**: in contrast to the **Real-time cart** column, cart will be here if the abandoned cart time is greater than the time to install **How to measure Abandoned Cart** field in Configuration, and this column only displays cart without email.
  - **Recoverable**: Just like the Abandoned Cart column but it just shows the cart with email address.
  - **Converted**: Show the ordered cart.
