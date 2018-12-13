
After the success of Professional Affiliate extension, Mageplaza continues to introduce the Ultimate version which provides further impressive features such as integrating with Report standard and Professional, Import/Export, API, sending coupons to friends, etc.


Mageplaza Affiliate User Guide will provide the detailed instructions to know **How to use** on the frontend and  **How to Config** on the backend.

How to Use
^^^^^^^^^^^^^^

After installing Affiliate module, the Affiliate link is available on the footer of your site. Click on the link and go to Affiliate Home Page. 

Affiliate Home Page
``````````````````````

Affiliate Home Page is already setup with CMS Block including Welcome Message and How does Affiliate Program work? If you want to change the text, it is possible to edit from the backend. In addition, all of active Affiliate Program will be displayed on the Affiliate Home Page.

.. image:: https://i.imgur.com/hqZGoQs.png

Look at the left panel on the page, the customer can sign up to become an affiliate.

.. image:: https://i.imgur.com/SVNIBSZ.png

My Credit Page
`````````````````

Each affiliate can manage every credit information such as available balance, holding balance, total earned, and total paid and all transactions related to the account are listed in detail.

.. image:: https://i.imgur.com/UdQrBST.png

Refer Friend Page
````````````````````

Affiliate module by Mageplaza allows affiliate refer friends via referral url, code and email. 

.. image:: https://i.imgur.com/iev4cun.png

Just insert friends' email addresses together with message to send invitation instantly on **Refer Friend page**.

Banners
````````````````````

.. image:: https://i.imgur.com/vWlqNNG.png

Click **Get banner link** to obtain the link and refer it to friends to get purchasing discount. 

.. image:: https://i.imgur.com/5FpdySk.png


My Withdrawal Page
````````````````````

.. image:: https://i.imgur.com/I83UxTI.png


Mageplaza Affiliate supports offline payment and Paypal payment for the withdrawal. Each created withdrawal will be saved and managed in Withdraw History. Let follow its status to know where the request is in the progress.

Affiliate Settings Page
`````````````````````````

Mark the box to register Affiliate Subscription.

.. image:: https://i.imgur.com/vMxRmLb.png

How to Configure
^^^^^^^^^^^^^^^^^^^

From the Admin Panel, go to `Stores > Configuration > Mageplaza Extensions > Affiliate > Configuration`

.. image:: https://i.imgur.com/0uQYsSN.png


1. Configuration
``````````````````````````````

.. image:: https://i.imgur.com/Ockt6Oa.png

1.1. General 
~~~~~~~~~~~~~~~~~~~~~~~

* **Enable**: Choose **Yes** to apply the feature of the module 

* **Cookie Expiration**

  * Enter the number of days to store cookies of this program. 
  
  * If skip it, the default (365) is used, that means Lifetime Commissions can be active.
  
* **Allow overriding cookies**: Choose **Yes** to override Affiliate code when a customer is referred by many Affiliates. 

* **Show Affiliate link on**: Choose the display position of the Affiliate link

  * `Show Affiliate link on = Footer Link`: Display the Affiliate link in the bottom of the page
  
  * `Show Affiliate link on = Top Link`: Display the Affiliate link in the top of the page along with the display of the link
  
* **My Account**

  * You can choose to display in both positions
  
  * The default display setting is in the **Top Link**
  
* **Custom CSS**

  * Admin can freely customize the display of the Affiliate site 
  
  * Supports HTML, CSS
    
1.1.1. Default Page
~~~~~~~~~~~~~~~~~~~~~~~

* **Affiliate homepage content**

  * Select CMS Block for Affiliate homepage content
  
  * The default display is: Affiliate Welcome homepage content

1.1.2. Affiliate URL
~~~~~~~~~~~~~~~~~~~~~~~

* **URL Style**: Choose the type to display URL

  * `URL Style = Hash`: Display URL  as `http://example.com#c123 <http://example.com/#c123>`_
  
  * `URL Style = Parameter`: Display URL  as `http://example.com/?c=123 <http://example.com/?c=123>`_

  
* **Custom parameter**

  * Enter the letter for the customization of Affiliate URL
  
  * If this field is left blank, the default value is "u". For example: ?u=123 or #u123
  
* **Parameter value**

  * `Parameter value = Affiliate ID`: Display the ID of Affiliate account on the **Refer URL** link in **My Account/ My Affiliate/ Refer Friend** outside the frontend. For example: ?u=1 or #u1
  
  * `Parameter value = Affiliate Code`: Display the code of Affiliate account on the **Refer URL** link outside the frontend. For example: ?u=b1dc or #ub1dc and display the code of Affiliate account in the **Refer Code** field in **My Account/ My Affiliate/ Refer Friend** outside the frontend
  
* **Length of Affiliate code**

  * Enter the length of Affiliate code
  
  * The default length is 6 characters 
  
  * It is recommended to enter a length between 3 and 32 characters to ensure safety

1.2. Account Configuration
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1.2.1. Affiliate Sign up
~~~~~~~~~~~~~~~~~~~~~~~~~

* **Default Affiliate Group**

  * Choose the default group whenever an account is registered as an Affiliate account
  
  * The original default group is General 
  
* **Require admin's approval**: Choose **No** so that when registering as an affiliate account, you don't need to go through the censorship of the store

* **Checked "Email notification" by default**: Select Yes to automatically check the **Receive affiliate email** box on the **My Account/My Affiliate/Setting** tab outside the frontend whenever an account is registered as an Affiliate account.

1.2.2.Terms and Conditions
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* **Enable Terms and Conditions**: Choose Yes to display Terms and Conditions in the Sign Up section which is outside the frontend

* **Checkbox Text**: Enter the checkbox text that is in the right of Terms and Conditions checkbox.

* **Terms and Conditions Title**: Enter the title for Terms and Conditions

* **Terms and Conditions Content**

  * Select CMS Block for Terms and Conditions Content
  
  * The default content is Affiliate terms & conditions
  
* **Checkbox is checked by default**: Choose **Yes** to automatically tick in the checkbox

1.2.3. Account Balance
~~~~~~~~~~~~~~~~~~~~~~~

* **Maximum of Affiliate Balance**

  * Enter the Maximum of Affiliate Balance
  
  * If Affiliate reach the milestone, none of commission is added 
  
  * If the field is left empty or entered as zero, Affiliate Balance will have no limitation
  
* **Allow negative balance**: If Affiliate's account balance is not enough to take back commission, allow the balance be negative number by choosing **Yes** in the respective field

1.3. Commission Configuration
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* **Earn commission from tax**: Choose Yes to earn commission from tax

* **Earn commission from Shipping**: Choose Yes to earn commission from shipping fee

1.3.1. Commission calculation process
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* **Allow Affiliate receiving commission when Invoice created**

  * Allow Affiliate receiving commission when Invoice created = **Yes**: Commissions received when creating an invoice
  
  * Allow Affiliate receiving commission when Invoice created = **No**: Commissions are only received when the order is in the completed state
  
  
* **Hold commission transactions for**

  * Enter the days between commission transaction for accounts. After that period of time, the transaction will no longer be kept
  
  * If the field is blank or entered as 0, the transaction will not be kept
  
  
* **Deduct commission from Affiliate's balance when the order is refunded/canceled**

  * Choose Yes to allow deducting the commission from the balance of the  branch when the order is refunded or canceled
  
  * The default allows deducting
  
  
1.4. Withdrawal Configuration
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* **Allow withdrawal request**: Select **Yes** to display the withdrawal request outside the frontend

* **Payment Method**

  * There are three withdraw methods which are Offline payment, Bank Transfer and Paypal payment
  
  * Enter the withdrawal fee for each form of withdrawal. You can enter the charge as a specific amount or a percentage of the total amount withdrawn
 
  * To allow displaying a withdraw's form outside the frontend, select **Active = Yes** corresponding to that form
  
* **The minimum balance in affiliate account for requesting withdrawal** 

  * Enter the minimum balance in the linked account to request a withdraw
  
  * If you leave blank or fill in as 0, you will not be limited when withdrawing
  
* **Minimum withdrawal amount**

  * Enter the minimum amount for each withdraws
  
  * The withdraw fee will be included in here
  
* **Maximum withdrawal amount** 

  * Enter the maximum amount for each withdraws
  
  * The withdraw fee will be included in here

1.5. Email Configuration
~~~~~~~~~~~~~~~~~~~~~~~~~

* **Email Sender**

  * Select the email sender
  
  * The default email sender is: General Contact 

1.5.1. Account Email
~~~~~~~~~~~~~~~~~~~~~~

* **Send Welcome Email**: Choose **Yes** to send the email when an  account registered as an Affiliate account

* **Welcome Email**

  * Choose the email template sending when  an  account registered as an Affiliate account
  
  * The default content of the template is Welcome Email (Default)
  
* **Welcome Email After Account Approved**

  * Choose the email template sending when the registered account is approved to be an Affiliate account by the store owner
  
  * The default content of the template is Welcome Email After Account Approved (Default)
  
1.5.2. Transaction Email` section
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* **Send Transaction Email**: Select **Yes**  to send a notification email whenever there is a transaction

* **Update Balance Email**

  * Select  the sending email template when there is a change in the balance
  
  * The default content of the template is Update Balance Email (Default)

1.5.3. Withdrawal Email
~~~~~~~~~~~~~~~~~~~~~~~~~

* **Send Withdrawal Email**: Select **Yes** to send a notification email when you withdraw money

* **Withdrawal Complete Email**

  * Select the sending email template when there is a change in the balance
  
  * The default content of the template is Withdraw Complete Email (Default)

1.6. Refer Friends Configuration
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* **Enable Refer Friends Feature**: Choose **Yes** to activate the introduce to friends function

* **Refer Sharing Email** 

  * Choose the email template which will be sent when introducing with friends through email
  
  * The default content of the template is Affiliate Sharing Email (Default)
  
* **Default Refer URL**

  * Insert the referral link. This link will display in the **My Account/My Affiliate/Refer Friend** tab
  
  * If empty, the default homepage url will be used.
  
* **AddThis.com ID**

  * Enter the AddThis ID to introduce it to friends through AddThis
  
  * If empty, default Public AddThis ID **ra-56e141d56e895f5c** will be used
  
* **Use Cloudsponge to retrieve email contacts**: Select **Yes** to allow access contacts from customer's account such as Gmail, Yahoo, Live, AOL, Outlook, etc.

* **Cloudsponge Key**

  * Enter the Cloudsponge key
  
  * The default key used is **a473483c2e256bd812bdc9a0bac867ecf1999a54**

1.6.1. Sending Email Content
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* **Default Subject Email**

  * Enter a title for the sending email
  
  * The default title is **Good product and services**
  
* **Default Email Body**

  * Enter the content for the sending email
  
  * The default content is **I've been shopping at {{store_name}} and feel really happy. They provide good service and reasonable prices.**
  
* **Default Message Shared via Social**

  * Enter content for sending messages when sharing through social networks
  
  * The default content is **I've been shopping at {{store_name}} and feel really happy. Check it out: {{refer_url}}.**

2. Manage Accounts
`````````````````````````````

2.1. Manage Grid
~~~~~~~~~~~~~~~~~~~~~~~~~

* **Display Affiliate account information**: account balance, total earned amount, account activity status,etc. Click the **View** link to see the account details.

* In this panel, admin can change status or delete the account

.. image:: https://i.imgur.com/Plbwpkv.png

2.2. Add New Account
~~~~~~~~~~~~~~~~~~~~~~~~~

.. image:: https://i.imgur.com/Os0qc4U.png

* **Affiliate Group**

.. image:: https://i.imgur.com/I3cPbFF.png

  * Select the group for the created Affiliate account
  
  * You are not allowed to leave this field empty
  
* **Referred By**: Enter the ID of the previously registered Affiliate account

* **Status**

.. image:: https://i.imgur.com/dGspIbc.png

  * *Status = Active*: The Affiliate account which is just created can start working now
  
  * *Status = Inactive*: The Affiliate account which is just created can't start working yet
  
  * *Status = Need Approved*: The Affiliate account which is just created needs to be approved by admin
  
* **Email Notification**: Choose **Yes** to receive notification emails when there is a change in your Affiliate account balance


3. Affiliate Groups
`````````````````````````````

3.1. Manage Grid
~~~~~~~~~~~~~~~~~~~~~~~~~

* There are five default groups: General, Bronze, Silver, Gold, Platinum

.. image:: https://i.imgur.com/mpPvZxT.png

3.2. Add New Group
~~~~~~~~~~~~~~~~~~~~~~~~~

.. image:: https://i.imgur.com/9R6thSZ.png

* **Name** 

  * Insert the group name
  
  * This field is compulsorily required 
  
4. Campaigns
`````````````````````````````

4.1 Edit Campaigns
~~~~~~~~~~~~~~~~~~~~~~~~~

  * **Step 1: Fill in the Campaign Information** 
  
  * **Step 2: Choose the conditions for applying the campaign**
  
  * **Step 3: Set up Discount**
  
  * **Step 4: Set up Commission**
  
  
Step 1: Fill in the Campaign Information
~~~~~~~~~~~~~~~~~~~~~~~~~

.. image:: https://i.imgur.com/uZEBybr.png

* **Name** 

  * Name your campaign
  
  * This is a required field
  
* **Description**: Fill in the description of your campaign
  
* **Status**: Sellect `yes` to apply the campaign
  
* **Website IDs**
  
  * Choose the website to  conduct the campaign
    
  * This is also a required field
    
* **Affiliate Groups**
  
  * Choose the group you want to conduct the campaign
    
  * This is another required field
    
* **Display**
  
  * *Display = Allow Guest*: Show the campaign for all visiters
    
  * *Display = Affiliate Member Only*: Show the campaign for Affiliate only
    
    
* **Active From Date**: Select the starting day for your campaign
  
* **Active ToDate**: Select the finishing day for your campaign
  
* **Sort Order**
  
  * Insert the sort order (or prioritized number) of your campaign
    
  * The smaller the number, the more prioritized your campaign is, which means that it will be shown and applied first. If the sort orders of different campaigns are the same, the module will then consider their ID numbers.
  
Step 2: Choose the conditions for applying the campaign
~~~~~~~~~~~~~~~~~~~~~~~~~
 
.. image:: https://i.imgur.com/LFy1DPq.png
  
* You can choose the products for a specific campaign by setting the rules for those products

* Or you can also choose the categories for applying the campaign

Step 3: Set up the Discount 
~~~~~~~~~~~~~~~~~~~~~~~~~

.. image:: https://i.imgur.com/4LIRPke.png

* **Apply**

  * *Apply = Percent of cart total*: Apply discount for the percentage of cart total
  
  * *Apply = Fixed amount discount for whole cart*: Apply a fixed discount for purchasing
  
* **Discount Amount**: Insert the amount or the percentage of discount for purchasing

* **Apply to Shipping Amount**: Choose **Yes** to apply discount for shipping

* **Apply Discount On Tax**: Choose **Yes** to apply discount for taxable payment 

* **Discount Description**: Insert the description for your discount policy

Step 4: Set up the Commission
~~~~~~~~~~~~~~~~~~~~~~~~~

.. image:: https://i.imgur.com/v1XYDwa.png

* There are two commision types:

  * **Percentage of grand total**: Commision is calculated based on the percentage of grand cart total 
  
  * **Fixed amount**: Commission is a fixed amount
  
* Choose type and value of commission in the 1st order and the next orders. You can set them to the same or separated option depending on your strategy.

4.2 Add New Campaigns
~~~~~~~~~~~~~~~~~~~~~~~~~

  * **Step 1: Fill in the Campaign Information** 
  
  * **Step 2: Choose the conditions for applying the campaign**
  
  * **Step 3: Set up Discount**
  
  * **Step 4: Set up Commission**
  
Step 1: Fill in the Campaign Information
~~~~~~~~~~~~~~~~~~~~~~~~~
  
.. image:: https://i.imgur.com/XHNV2u7.png

* **Name** 

  * Name your campaign
  
  * This is a required field
  
* **Description**: Fill in the description of your campaign
  
* **Status**: Select `yes` to apply the campaign
  
* **Website IDs**
  
  * Choose the website to  conduct the campaign
    
  * This is also a required field
    
* **Affiliate Groups**
  
  * Choose the group you want to conduct the campaign
    
  * This is another required field
    
* **Display**
  
  * *Display = Allow Guest*: Show the campaign for all visitors
    
  * *Display = Affiliate Member Only*: Show the campaign for Affiliate only
    
    
* **Active From Date**: Select the starting day for your campaign
  
* **Active ToDate**: Select the finishing day for your campaign
  
* **Sort Order**
  
  * Insert the sort order (or prioritized number) of your campaign
    
  * The smaller the number, the more prioritized your campaign is, which means that it will be shown and applied first. If the sort orders of different campaigns are the same, the module will then consider their ID numbers.

Step 2: Choose the conditions for applying the campaign
~~~~~~~~~~~~~~~~~~~~~~~~~
 
.. image:: https://i.imgur.com/Pa4HJIP.png
  
* You can choose the products for a specific campaign by set the rules for those products

* Or you can also choose the categories for applying the campaign

Step 3: Set up the Discount 
~~~~~~~~~~~~~~~~~~~~~~~~~

.. image:: https://i.imgur.com/quh5Pdk.png

* **Apply**

  * *Apply = Percent of cart total*: Apply discount for the percentage of cart total
  
  * *Apply = Fixed amount discount for whole cart*: Apply a fixed discount for purchasing
  
* **Discount Amount**: Insert the amount or the percentage of discount for purchasing

* **Apply to Shipping Amount**: Choose **Yes** to apply discount for shipping

* **Apply Discount On Tax**: Choose **Yes** to apply discount for taxable payment 

* **Discount Description**: Insert the description for your discount policy

Step 4: Set up the Commission
~~~~~~~~~~~~~~~~~~~~~~~~~

.. image:: https://i.imgur.com/ssRkpwe.png

* There are two commision types:

  * **Percentage of grand total**: Commision is calculated based on the percentage of grand cart total 
  
  * **Fixed amount**: Commission is a fixed amount
  
* Choose type and value of commission in the 1st order and the next orders. You can set them to the same or separated option depending on your strategy.

* Admin can add, edit, delete tier to apply for multi-level Affiliate account

* Admin can also create various campaigns

* For example: Campaign 1 has two tiers, the discount is 10%; campaign 2 has 2 tiers as well with 5% discount. A is Affiliate referring link to B as another Affiliate. When C buy the products using the link that B refers to, C will get the discount of 15% (10% + 5%). In this case, B will get the commision equal to the sum of tier 1 of campaign 1 and tier 1 of campaign 2. Whereas, A will get the commision of both tier 2 in the campaign 1 and campaign 2. 

5. Banners
`````````````````````````````

Add New Banner
~~~~~~~~~~~~~~~~~~~~~~~~~
 
.. image:: https://i.imgur.com/KQFTYxY.png


* **Title**

  * Insert the title for your banner

  * This is a required field

* **Content**

  * Click to **Insert Image** to choose image or upload from your library for your banner. The image link will be shown at the below text box

  * You can also insert text or html link in this text box

* **Redirect URL**

  * Insert the URL that admin want customers to click on

  * If it is left empty, the default displaying place is homepage

* **Related Campaign**

  * Choose the campaign for your banner. If customers buy products using that banner link, they will get the promotion of related campaigns and that banner is only shown for the Affiliate of related campaigns

  * You can choose the default campaign


* **Rel Nofollow**

  * Choose **Yes** to put the attribute rel="nofollow" into the banner link

  * Default setting is **No**

* **Status**: Choose **Yes** to show banner at frontend



6. Withdraws
`````````````````````````````

6.1. Manage Grid
~~~~~~~~~~~~~~~~~~~~~~~~~
 
* Allow to show the withdraw history of each Affiliate account including: The amount, the status, payment method, etc. Click **View** to see the details of each withdraw. 

* Admin can also change the status or delete the withdraw history.

.. image:: https://i.imgur.com/rrHQDV2.png

6.2. Add New Withdraws
~~~~~~~~~~~~~~~~~~~~~~~~~

.. image:: https://i.imgur.com/Fvw09Fg.png


* **Account** 

  * Click to this field to show the affiliate accounts that have positive balance which can be withdrawn
  
  * This field is required

.. image:: https://i.imgur.com/nMSnOGT.png

* **Amount**

  * Insert the withdraw amount which is including the fee of withdrawal
  
  * This is a required field
  
* **Fee**

  * Insert the withdraw fee
  
  * If you leave this field empty, the configuration value will be applied
  
* **Payment Method**

  * Choose the payment method for withdrawal
  
  * There are three payment methods: Offline payment, Bank Transfer, Paypal payment
  
* **Withdraw Reason**: Fill in the reason for withdrawal

* **Payment Detail**: 

  * For **Offline payment**, you need to insert the **Addresses**

.. image:: https://i.imgur.com/5w1uKvg.png


  * For **Bank Transfer**, insert the Bank account
  
.. image:: https://i.imgur.com/ywa7PZk.png


  * For **Paypal payment**, you need to fill in the **Paypal email** and **Transaction ID** 

.. image:: https://i.imgur.com/kE5UN64.png



7. Transactions
`````````````````````````````

7.1 Manage Grid
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* Show the transaction of each affiliate account including: the amount, status, the order that generates commission. Click **View** to see more details of each transaction. 

* Admin can also change the status or delete the transaction records.

.. image:: https://i.imgur.com/dcVRnAO.png


Assign to Affiliate Group
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

After adding the new Affiliate accounts, store admin can manage them in the **Accounts Management** grid.

* On the grid, find the Affiliate account needed to assign and open the **Edit** mode

* Choose the Affiliate group to assign. By the default, **Genera** is chosen

.. image:: https://cdn.mageplaza.com/docs/aff-assign-to-affiliate-group.gif


7.2. Add New Transaction
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. image:: https://i.imgur.com/JF485Db.png

* **Account** 

  * Click to this field to show the affiliate account and then you can choose the account to add transaction in
  
  * This is a required field
  
.. image:: https://i.imgur.com/2s45muY.png

* **Amount**

  * Insert the added amount. It can be a negative one
  
  * This is a compulsorily required field
  
* **Title**: Add the Title of transaction

* **Holding Transaction For**

  * Add the number of days that you want to keep the transaction records
  
  * If you leave it empty or insert 0, the transaction will be deleted 
  
  
8. Email
`````````````````````````````

8.1 Notification emails for successful registration the affiliate account
~~~~~~~~~~~~~~~~~~~~~~~~~~~~


.. image:: https://i.imgur.com/H2PwtVI.png


8.2 Notification emails for Affiliate account aproval
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. image:: https://i.imgur.com/IpPg0ZN.png


8.3 Notification emails for changing the Afiliate account balance
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. image:: https://i.imgur.com/c0iqHoi.png


8.4 Notification emails for completion of withdraw request
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. image:: https://i.imgur.com/1kYBnel.png



9. Reports
`````````````````````````````

9.1 Compatible with Mageplaza Reports Standard and Professional 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. image:: https://i.imgur.com/AsfxViv.png

**9.1.1 Top Affiliate**

* This card will show Top 5 Affiliate account who earn the highest commission in a specific period

**9.1.2 New Affiliate**

* This card shows the Top 5 Affiliate accounts which have been created most recently and also their time of registration.

**9.1.3 Bestsellers Affiliate**

* This card show the TOp 5 best seller products by Affiliate links. Click to **View Details** to see more best sellers

**9.1.4 Affiliate Transaction** 

* This card records all the affiliate transactions with three statuses: On Hold, Completed, Cancelled. It will be shown in Pie chart for better visualization.  

9.2 Affiliate  Reports
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

From the Admin Panel, go to Reports > Affiliate Reports

.. image:: https://i.imgur.com/DqZjPkt.png

**9.2.1 Best sellers**


.. image:: https://i.imgur.com/geQ4HzT.png

This field allows showing the information for best seller products including: name, SKU, price, number of product sold. Admin not only can filter the products by Magento default but they also can filter by store data, by date with an ease.

**9.2.2 Accounts**

.. image:: https://i.imgur.com/FUZPKvk.png

This field enables showing the information of Affiliate account such as the date receiving the commission, email, number of orders from affiliate link, total cart of order, commission amount. Beside filtering by some available filter options of Magento, admin also can filter by store, day, week, month and year easily.

**9.2.3 Sales**

.. image:: https://i.imgur.com/CsgmOFp.png

In this field, admin can view the sales and the commission of related Affiliate accounts by date. This module beside allows filtering by some available filter options of Magento, admin also can filter by store, day, week, month and year easily.


10. API
`````````````````````````````

* **Affiliate Ultimate** does support API. The API allows users to get a list with all their offers in the selected format (JSON) with the payout showcased in the selected currency. The list can be filtered by status (pending, approved, or cancel), order, account affiliate, transaction, withdraw and campaign; add new account affiliate, withdraw; delete account affiliate, campaign.

* Moreover, it can be customized to return only the selected fields (transaction, campaign, withdraw,  account affiliate, change status of account affiliate, campaign)

* You can see some syntaxes that we list [here]. Also, please refer the guide on how to create API [here] and creating token-based authentication [here]. 


11. Import/Export
`````````````````````````````

When admins want to change their Magento store system, for backup data purpose, we add the Import/Export function for all the data of Account Affiliate and Transaction of Affiliate. 

11.1 Import/Export Affiliate Account
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* **Import**

From the **Admin Panel**, go to *Sytem > Data Tranfer > Import*

.. image:: https://i.imgur.com/s9EibFJ.png

**Step  1**: Choose *Entity Type = Mageplaza Affiliate Account*

**Step 2**: Select Import behavior: You can Add/Update or Delete account

**Step 3**: Upload the import file from your computer. If you do not know what the file format is and which data to insert, please click to **Download Sample File** to see the example. 

**Step 4**: Check and import data


* **Export**

From the **Admin Panel**, go to *Marketing> Affiliate > Manage Accounts*

.. image:: https://i.imgur.com/XZzrtr9.png

* Click **Export** and choose the file format to download the data. Also, you can use this file to import to other system.

* **Note**: When import file to other system, please check the header to make sure it is compatible with that system. 


11.2 Import/Export Affiliate Transaction
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* **Import** 


From the **Admin Panel**, go to *Sytem > Data Tranfer > Import*

.. image:: https://i.imgur.com/XZMyGJ3.png

**Step 1**: Choose *Entity Type = Mageplaza Affiliate Transaction* 

**Step 2**: Select Import behavior: Add transaction

**Step 3**: Upload the import file from your computer. If you do not know what the file format is and which data to insert, please click to **Download Sample File** to see the example. 

**Step 4**: Check and import data

* **Export**

From the **Admin Panel**, go to *Marketing> Affiliate > Transactions*

.. image:: https://i.imgur.com/7eFckon.png

* Click **Export** and choose the file format to download the data. Also, you can use this file to import to other system.

* **Note**: When import file to other system, please check the header to make sure it is compatible with that system. Also be noted that all the data imported to orther system are in log. Therefore, you can not add transaction such as adding commission and withdrawal into these files. 

* Below are headers that this module support to import/export data. In which, the header with * is required.  

* **Affiliate Account**

.. image:: https://i.imgur.com/Ys2otp6.png

*Note*: If you do not insert the data in column, it will be set as NULL at the database. If you import the same email twice, the system will record the initial email and ID.

* **Transaction**

.. image:: https://i.imgur.com/KHVGOQN.png


*Note*: If you do not insert the date or time then the module will automatically get the date and time when you import the data. For the data imported with the actions as in the table above but shown at **Transaction Grid**, the **Action Type = Admin**
