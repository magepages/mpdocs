# Magento 2 Abandoned Cart Email

## Overview

Cart abandonment is an action that consumers leave the website after adding a product to their virtual cart. Discount codes, Exit offers, and Security badges are some of the ways you can keep customers from recovering their carts. 

[Magento 2 Abandoned Cart Email](https://www.mageplaza.com/magento-2-abandoned-cart-email/) extension will help you solve this problem. This extension assists  you determine which cart is having forgotten products, from those initial crumbs to send reminders, or be possible to send discounts to help shoppers easily recover their shopping cart and complete the checkout, which will absolutely skyrocket the value of orders, sales, profits for the store 

```
*Note: Abandoned Cart Email is totally compatible with Mageplaza SMTP extension
```

## How to configure

Login to Magento Admin, ``Mageplaza > Abandoned Cart Email`` to configure it in general
![ACE1](https://i.imgur.com/Y39e92W.png)

### 1. Configuration

#### 1.1 General Configuration
A bunch of basic configurations you might want to take note, follow ``Mageplaza > Abandoned Cart Email > Configuration`` then expand ``General Configuration``

![ACE2](https://i.imgur.com/r3OHAXD.png)

* In **Enable** field: select “Yes” to enable Mageplaza Abandoned Cart Email extension
* In **Email** module is the abandoned cart reminder email settings
  * Click the ``Add`` button to add a reminder email
  * Click the trash can icon ![image](https://i.imgur.com/62D0Zqz.png) to delete a email
  * **Send After** to change the email delivery time. The counting will be started from the last updated cart time, a reminder email will be sent to customers.
  * In **Sender** to choose sender’s entitle. You will have 5 choices: General Contact, Sales Representative, Customer Support, Email Custom 1, Custom 2 Email
  * In **Email Template** column, you can find some pre-made email templates. Otherwise, you can customize your own template by creating a new one at sidebar ``Marketing > Email Template``. The newly created template will automatically appear in this section
  * **Has coupon** is an optional selection. Choose “Yes” to submit a discount code. Coupon installation will be instructed later in [**1.3 Coupon**](https://docs.mageplaza.com/abandoned-cart-email/index.html#coupon)
  
#### 1.2 Analytics
In this cup of tea, we integrated Abandoned Cart Email extension with Google Analytics - a reliable analysis tool considered as a very effective tool for webmasters and SEO people who want to index the information about their website. Expand **Analytics** section to navigate some basic functionalities

![ACE3](https://i.imgur.com/NIQ6wTo.png)

It manifests in this direct link in the frontend like
![ACE4](https://i.imgur.com/O9qLYDH.png)

* In **Enabled** field: Select “Yes” to use Google Analytics tool. Then, the Source, Medium, Name, Term, Content items will be displayed automatically
* In **Source** field: the data of Source will appear in the Link back to Cart if it’s available. If you leave it blank, Source on frontend won’t be displayed.
* In **Medium** field: the data of Medium will appear in the Link back to Cart if it’s available. If you leave it blank, Medium on frontend won’t be displayed
* In **Name** field: data of Name will appear in the Link back to Cart if it’s available. If you leave it blank, Name on frontend won’t be displayed
* In **Term** field: the data of Term will appear in the Link back to Cart if it’s available. If you leave it blank, Term on frontend won’t be displayed
* In **Content** field: the data of Content will appear in the Link back to Cart if it’s available. If you leave it blank, Content on frontend won’t be displayed

#### 1.3 Coupon
Expand the **Coupon** section to set up the discount code

![ACE5](https://i.imgur.com/f0el2jw.png)

* **Rule**: choose a principle to generate a discount code
  * Only those rules that are activated and generated automatically will be displayed in the configuration
  * How to create rules in Marketing > Cart Price Rules guide can be found [here](https://www.mageplaza.com/kb/how-create-a-cart-price-rule-in-magento-2.html)
* **Valid** is where to change expiration date of a discount code
  * The discount code is only used during the time set since the code was created
  * Time will be counted in hour(s)
  * Discount code can’t be applied if this section is blank
* In **Code Length** field: set the length of discount code. Code length does not include Prefix, Suffix, and Separators
* In **Code Format** field, you can choose 3 formats for code:
  * Alphanumeric: Code consists of letters and numbers
  * Alphabetical: The code consists only of letters of the alphabet
  * Numeric: The code consists of digits from 0 to 9 only
* **Code Prefix** you can add the prefix of the code in this section. Discount code won’t contain a prefix if the Code Prefix is left blank
* **Code Suffix** you can add the suffix of the code in this section. Discount code won’t contain a suffix if the Code Suffix is left blank
* In **Dash Every X Character** field: Between each X, there will be the number of characters in the Code set in this part.

An example of the Abandoned Cart Email sent to a customer

![ACE6](https://i.imgur.com/PB7n1bW.png)

### 2. Reports
``Mageplaza > Abandoned Cart Email: Reports`` This is the place where archives the number of Abandoned Carts, the number of Abandoned Carts sent, the number of failed Abandoned Carts and the number of Abandoned Carts that were recovered in a period of time. There are two Report Time modes:
* DAY
  * When you select the **DAY** mode, adjust the **From** and **To** entries, the Report Time will be displayed on a daily basis
  * If the distance between **From** and **To** is too far apart, the distance between two days in Report Time will be increased
![ACE7](https://i.imgur.com/gvpQhk2.png)

* MONTH: When you select **MONTH** mode, adjust the **From** and **To** entries, the Report Time will be displayed on a monthly basis
![ACE8](https://i.imgur.com/O9Iz9vu.png)

### 3. Logs
This is the place archiving abandoned cart emails which have been sent, including their ID, Subject, Receiver, Coupon, Sequent Number, Sent, Status (Sent / Error) and Action (Preview / Delete, Send Again)

![ACE9](https://i.imgur.com/zmKitE3.png)

* **Action = Preview**: a pop-up window showing the email which has been sent will appear
![ACE10](https://i.imgur.com/LpCjhCY.png)

* **Action = Delete**: the selected emails will be deleted. You can choose multiple emails at the same time
* **Action = Send Again**: the selected email will be sent to customers again. This email has the same content as the selected email
* **Clear Logs** button: Click the Clear Logs button to quickly delete all the emails stored in the logs. The next email’s ID has nothing to do with the deleted one

 





