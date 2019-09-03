

`Mageplaza Affiliate extension <https://www.mageplaza.com/magento-2-affiliate-extension/>`_ for Magento 2 is the greater choice than ever if you want to build an Affiliate program that is crazy enough to drive traffic and sales increase promptly, get qualified leads, and also enhance your brand awareness. Our Affiliate program allows you to pay affiliates amount of commissions.


Mageplaza Affiliate User Guide will provide the detailed instructions to know **How to use** on the frontend and  **How to Config** on the backend.

How to Use
^^^^^^^^^^^^^^

After installing Affilliate module, Affiliate link is available on the footer of your site. Click on the link and go to Affiliate Home Page. 

Affiliate Home Page
``````````````````````

Affiliate Home Page is already setup with CMS Block including Welcome Message and How does Affiliate Program work? If you want to change the text, it is possible to edit from the backend. In addition, all of active Affiliate Program will be displayed on the Affiliate Home Page.

.. image:: https://i.imgur.com/hqZGoQs.png

Look at the left panel on the page, the customer can sign up to become an affiliate.

.. image:: https://i.imgur.com/SVNIBSZ.png

My Credit Page
`````````````````

Each affiliate can manage every credit information such as available balance, holding balance, total earned, and total paid and all transactions related to the account are listed in detail.

.. image:: https://i.imgur.com/PwqIyJw.png

Refer Friend Page
````````````````````

Affiliate module by Mageplaza allows affiliate refer friends via referral url, code and email. 

.. image:: https://i.imgur.com/B4VRIzq.png

Just insert friends' email addresses together with message to send invitation instantly on **Refer Friend page**.

My Withdrawal Page
````````````````````

.. image:: https://i.imgur.com/O4RnMKe.png

Mageplaza Affiliate supports offline payment and Paypal payment for the withdrawal. Each created withdrawal will be saved and managed in Withdraw History. Let follow its status to know where the request is in the progress.

Affiliate Settings Page
`````````````````````````

Mark the box to register Affiliate Subcription.

.. image:: https://i.imgur.com/fAlNhr3.png

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
  
  * `Show Affiliate link on = Top Link`: Display the Affiliate link in the top of the page along with the link **My Account**

  * You can choose to display in both positions
  
  * If admin does not choose the position to display Affiliate link, the link only show on Frontend at My Account Page when customers login. 
  
* **Custom CSS**

  * Admin can freely customize the display of the Affiliate site 
  
  * Supports HTML, CSS
    
1.1.1. Default Page
~~~~~~~~~~~~~~~~~~~~~~~

.. image:: https://i.imgur.com/fLYZyf5.png

* **Affiliate homepage content**

  * Select CMS Block for Affiliate homepage content
  
  * The default display is: Affiliate Welcome homepage content

1.1.2. Affiliate URL
~~~~~~~~~~~~~~~~~~~~~~~

.. image:: https://i.imgur.com/oDoq0Os.png

* **URL Style**: Choose the type to display URL

  * `URL Style = Hash`: Display URL  as `http://example.com#c123 <http://example.com/#c123>`_
  
  * `URL Style = Parameter`: Display URL  as `http://example.com/?c=123 <http://example.com/?c=123>`_

  
* **Custom parameter**

  * Enter the letter for the customization of Affiliate URL. Those parameters here will be inserted in front of the **Refer code**
  
  * If this field is left blank, the default value is "u". 

For example: refer code is 123, Custom parameter is abc
* Hash: http://example.com#abc123
* Parameter: http://example.com/?abc=123

  
* **Parameter value**

  * `Parameter value = Affiliate ID`: Display the ID of Affiliate account on the **Refer URL** link in **My Account/ My Affiliate/ Refer Friend** outside the frontend. For example: ?u=1 or #u1
  
  * `Parameter value = Affiliate Code`: Display the code of Affiliate account on the **Refer URL** link outside the frontend. For example: ?u=b1dc or #ub1dc and display the code of Affiliate account in the **Refer Code** field in **My Account/ My Affiliate/ Refer Friend** outside the frontend
  
* **Length of Affiliate code**

  * Enter the length of Affiliate code
  
  * The default length is 6 characters 
  
  * It is recommended to enter a length between 3 and 32 characters to ensure safety

1.2. Account Configuration
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. image:: https://i.imgur.com/HjU8a3e.png

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
  
* **Checkbox is checked by default**: Choose **Yes** to automiautomatically tick in the checkbox

1.2.3. Account Balance
~~~~~~~~~~~~~~~~~~~~~~~

* **Maximum of Affiliate Balance**

  * Enter the Maximum of Affiliate Balance
  
  * If Affiliate reach the milestone, none of commission is added 
  
  * If the field is left empty or entered as zero, Affiliate Balance will have no limitation
  
* **Allow negative balance**: If Affiliate's account balance is not enough to taking back commission, allow the balance be negative number by choosing **Yes** in the respective field

1.3. Commission Configuration
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. image:: https://i.imgur.com/VHPXbyX.png

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
  
  
* **Deduct commission from Affiliate's balance when the order is refunded/cancelled**

  * Choose Yes to allow deduct the commission from the balance of the  branch when the order is refunded or cancelled
  
  * The default allows deducting
  
  
1.4. Withdrawal Configuration
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. image:: https://i.imgur.com/1poa1lR.png

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

.. image:: https://i.imgur.com/1DsCf51.png

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

.. image:: https://i.imgur.com/Msmg2xS.png

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
  
* **AddThis.com Classname**: allows to display the social share button in the **Referral Via Social Networks** outside the frontend.
  * Enter the class name **AddThis**. You can go to your AddThis.com account, then click **Get the code** in the upper right corner, then scroll down to the **Setup Inline Tools** section, you will see the screenshot as below:
  
  .. image:: https://i.imgur.com/dsZjvgJ.png
  
* If this field is left blank, the system will use the default value *addthis_sharing_toolbox*
* Display the social button share at Referral Via Social Networks outside the frontend:

.. image:: https://i.imgur.com/0XlWHxV.png
  
  
* **Use Cloudsponge to retrieve email contacts**: Select **Yes** to allow access contacts from customer's account such as Gmail, Yahoo, Live, AOL, Outlook, etc.

* **Cloudsponge Key**

  * Enter the Cloudsponge key
  
  * The default key used is **a473483c2e256bd812bdc9a0bac867ecf1999a54**

1.6.1. Sending Email Content
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. image:: https://i.imgur.com/gWSLuL6.png

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

* **Display Affiliate account information**: account balance, total earned amount, account activity status,etc. Click the **Edit** link to see the account details.

* In this panel, admin can delete the account by clicking to the account checkbox, then choose `Action > Delete`


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
  
  * *Status = Need Approved*: he Affiliate account which is just created needs to be approved by admin
  
* **Email Notification**: Choose **Yes** to receive notification emails when there is a change in your Affiliate account balance


3. Affiliate Groups
`````````````````````````````

3.1. Manage Grid
~~~~~~~~~~~~~~~~~~~~~~~~~

* There are five default groups: General, Bronze, Sliver, Gold, Platinum

.. image:: https://i.imgur.com/mpPvZxT.png

3.2. Add New Group
~~~~~~~~~~~~~~~~~~~~~~~~~

.. image:: https://i.imgur.com/9R6thSZ.png

* **Name** 

  * Insert the group name
  
  * This field is compulsorily required 
  
4. Campaigns
`````````````````````````````

With Affiliate Standard, the system creates a Campaign by default, you can edit this campaign's information to match your store development strategy.

.. image:: https://i.imgur.com/z6thKwa.png

* **Edit Campaigns**

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
  
* **Discription**: Fill in the discription of your campaign
  
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
  
* You can choose the products for a specific campaign by set the rules for those products

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

In this section, allowing to configure the Tier 1 as follow:

.. image:: https://i.imgur.com/v1XYDwa.png

* There are two commision types:

  * **Percentage of grand total**: Commision is calculated based on the percentage of garnd cart total 
  
  * **Fixed amount**: Commission is a fixed amount
  
* Choose type and value of commission in the 1st order and the next orders. You can set them to the same or separated option depending on your strategy.

5. Withdraws
`````````````````````````````

5.1. Manage Grid
~~~~~~~~~~~~~~~~~~~~~~~~~
 
* Allow to show the withdraw history of each Affiliate account including: The amount, the status, payment method, etc. Click **Edit** to see the details of each withdraw. 

* Admin can also change the status or delete the withdraw history.

.. image:: https://i.imgur.com/rrHQDV2.png

5.2. Add New Withdraws
~~~~~~~~~~~~~~~~~~~~~~~~~

.. image:: https://i.imgur.com/Fvw09Fg.png


* **Account** 

  * Click to this field to show the affilicate account that have positive balance which can be withdrawn
  
  * This field is required

.. image:: https://i.imgur.com/nMSnOGT.png

* **Amount**

  * Insert the withdraw amount which is including the fee of withdrawal
  
  * This is a required field
  
* **Fee**

  * Inseart the withdraw fee
  
  * If you let this field empty, the configuration value will be applied
  
* **Payment Method**

  * Choose the payment method for withdrawal
  
  * There are three payment methods: Offline payment, Bank Tranfer, Paypal payment
  
* **Withdraw Reason**: Fill in the reason for withdrawal

* **Payment Detail**: 
  
  * For **Offline payment**, you need to insert the **Addresses**

  .. image:: https://i.imgur.com/wgy8Wt6.png


  * For **Bank Tranfer**, insert the Bank account
  
  .. image:: https://i.imgur.com/NX2JkE9.png


  * For **Paypal payment**, you need to fill in the **Paypal email** and **Transaction ID** 

  .. image:: https://i.imgur.com/GxDDU1q.png


- **Payment Email**: Enter the Paypal email who receive commission 
- **Paypal transaction Id**:  Enter Paypal transaction ID

6. Transactions
`````````````````````````````

6.1 Manage Grid
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* Show the transaction of each affiliate account including: the amount, status, the order that generates commission. Click **View** to see more details of each transaction. 

* Admin can also change the status or delete the transaction records.

.. image:: https://i.imgur.com/2eWCqAI.png


Assign to Affiliate Group
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

After adding the new Affiliate accounts, store admin can manage them in the **Accounts Management** grid.

* On the grid, find the Affiliate account needed to assign and open the **Edit** mode

* Choose the Affiliate group to assign. By the default, **Genera** is chosen

.. image:: https://cdn.mageplaza.com/docs/aff-assign-to-affiliate-group.gif

6.2. Add New Transaction
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. image:: https://i.imgur.com/JF485Db.png

* **Account** 

  * Click to this field to show the affilicate account and then you can choose the account to add transaction in
  
  * This is a required field
  
.. image:: https://i.imgur.com/2s45muY.png

* **Amount**

  * Insert the added amount. It can be a negative one
  
  * This is a compusorily required field
  
* **Title**: Add the Title of transatction

* **Holding Transaction For**

  * Add the number of days that you want to keep the transaction records
  
  * If you leave it empty or inseart 0, the transaction will be deleted 
  
7. Email
`````````````````````````````

7.1 Notification emails for successful registration the affiliate account
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. image:: https://i.imgur.com/v0aXJNY.png

7.2 Notification emails for Affiliate account aproval
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. image:: https://i.imgur.com/BuHof4t.png

7.3 Notification emails for changing the Afiliate account balance
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. image:: https://i.imgur.com/c0iqHoi.png

7.4 Notification emails for completion of withdraw request
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. image:: https://i.imgur.com/1kYBnel.png











