

`Magento 2 Affiliate`_ extension from Mageplaza is the greater choice than ever if you want to build an Affiliate program that is crazy enough to drive traffic and sales increase promptly, get qualified leads, and also enhance your brand awareness. Our Affiliate program allows you to pay affiliates amount of commissions 


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

.. image:: https://i.imgur.com/JNdDc6y.png

Just insert friends' email address together with message to send invitation instantly on Refer Friend page.

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

* `Enable`: Choose **Yes** to apply the feature of the module 
* `Cookie Expiration`
  * Enter the number of days to store cookies of this program. 
  * If skip it, the default (365) is used, that means Lifetime Commissions can be active.
* `Allow overriding cookies`: Choose **Yes** to override Affiliate code when a customer is referred by many Affiliates. 
* `Show Affiliate link on`: Choose the display position of the Affiliate link
  * Show Affiliate link on = Footer Link: Display the Affiliate link in the bottom of the page
  * Show Affiliate link on = Top Link: Display the Affiliate link in the top of the page along with the display of the link **My Account**
  * You can choose to display in both positions
  * The default display setting is in the **Top Link**
* Custom CSS
  * Admin can freely customize the display of the Affiliate site 
  * Supports HTML, CSS
    
1.1.1. Default Page
~~~~~~~~~~~~~~~~~~~~~~~

* Affiliate homepage content
  * Select CMS Block for Affiliate homepage content
  * The default display is: Affiliate Welcome homepage content

1.1.2. Affiliate URL
~~~~~~~~~~~~~~~~~~~~~~~

* `URL Style`: Choose the type to display URL
  * URL Style = Hash: Display URL  as [http://example.com#c123](http://example.com/#c123)
  * URL Style = Parameter: Display URL  as [http://example.com/?c=123](http://example.com/?c=123)
* `Custom parameter`
  * Enter the letter for the customization of Affiliate URL
  * If this field is left blank, the default value is "u". For example: ?u=123 or #u123
* `Parameter value`
  * Parameter value = Affiliate ID: Display the ID of Affiliate account on the **Refer URL** link in **My Account/ My Affiliate/ Refer Friend** outside the frontend. For example: ?u=1 or #u1
  * Parameter value = Affiliate Code: Display the code of Affiliate account on the **Refer URL** link outside the frontend. For example: ?u=b1dc or #ub1dc and display the code of Affiliate account in the **Refer Code** field in **My Account/ My Affiliate/ Refer Friend** outside the frontend
* `Length of Affiliate code`
  * Enter the length of Affiliate code
  * The default length is 6 characters 
  * It is recommended to enter a length between 3 and 32 characters to ensure safety

1.2. Account Configuration
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1.2.1. Affiliate Sign up
~~~~~~~~~~~~~~~~~~~~~~~~~

* Default Affiliate Group
  * Choose the default group whenever an account is registered as an Affiliate account
  * The original default group is General 
* `Require admin's approval`: Choose **No** so that when registering as an affiliate account, you don't need to go through the censorship of the store
* `Checked "Email notification" by default"`: Select Yes to automatically check the **Receive affiliate email** box on the **My Account/My Affiliate/Setting** tab outside the frontend whenever an account is registered as an Affiliate account.

1.2.2.Terms and Conditions
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* `Enable Terms and Conditions`: Choose Yes to display Terms and Conditions in the Sign Up section which is outside the frontend
* `Checkbox Text`: Enter the checkbox text that is in the right of Terms and Conditions checkbox.
* `Terms and Conditions Title`: Enter the title for Terms and Conditions
* `Terms and Conditions Content`
  * Select CMS Block for Terms and Conditions Content
  * The default content is Affiliate terms & conditions
  * `Checkbox is checked by default`: Choose **Yes** to automiautomatically tick in the checkbox

1.2.3. Account Balance
~~~~~~~~~~~~~~~~~~~~~~~

* `Maximum of Affiliate Balance`
  * Enter the Maximum of Affiliate Balance
  * If Affiliate reach the milestone, none of commission is added 
  * If the field is left empty or entered as zero, Affiliate Balance will have no limitation
* `Allow negative balance`: If Affiliate's account balance is not enough to taking back commission, allow the balance be negative number by choosing **Yes** in the respective field

1.3. Commission Configuration
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* Earn commission from tax: Choose Yes to earn commission from tax
* Earn commission from Shipping: Choose Yes to earn commission from shipping fee

1.3.1. Commission calculation process
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* Allow Affiliate receiving commission when Invoice created
  * Allow Affiliate receiving commission when Invoice created = **Yes**: Commissions received when creating an invoice
  * Allow Affiliate receiving commission when Invoice created = **No**: Commissions are only received when the order is in the completed state
* Hold commission transactions for
  * Enter the days between commission transaction for accounts. After that period of time, the transaction will no longer be kept
  * If the field is blank or entered as 0, the transaction will not be kept
* Deduct commission from Affiliate's balance when the order is refunded/cancelled
  * Choose Yes to allow deduct the commission from the balance of the  branch when the order is refunded or cancelled
  * The default allows deducting
  
1.4. Withdrawal Configuration
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* `Allow withdrawal request`: Select **Yes** to display the withdrawal request outside the frontend
* `Payment Method`
  * There are three withdraw methods  which are Offline payment, Bank Transfer and Paypal payment
  * Enter the withdrawal fee for each form of withdrawal. You can enter the charge as a specific amount or a percentage of the total amount withdrawn
  * To allow displaying a withdraw's form outside the frontend, select **Active = Yes** corresponding to that form
* `The minimum balance in affiliate account for requesting withdrawal` 
  * Enter the minimum balance in the linked account to request a withdraw
  * If you leave blank or fill in as 0, you will not be limited when withdrawing
* `Minimum withdrawal amount`
  * Enter the minimum amount for each withdraws
  * The withdraw fee will be included in here
* `Maximum withdrawal amount` 
  * Enter the maximum amount for each withdraws
  * The withdraw fee will be included in here

1.5. Email Configuration
~~~~~~~~~~~~~~~~~~~~~~~~~

* `Email Sender`
  * Select the email sender
  * The default email sender is: General Contact 

1.5.1. Account Email
~~~~~~~~~~~~~~~~~~~~~~

* `Send Welcome Email`: Choose **Yes** to send the email when an  account registered as an Affiliate account
* `Welcome Email`
  * Choose the email template sending when  an  account registered as an Affiliate account
  * The default content of the template is Welcome Email (Default)
* `Welcome Email After Account Approved`
  * Choose the email template sending when the registered account is approved to be an Affiliate account by the store owner
  * The default content of the template is Welcome Email After Account Approved (Default)
  
1.5.2. Transaction Email` section
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* `Send Transaction Email`: Select **Yes**  to send a notification email whenever there is a transaction
* `Update Balance Email`
  * Select  the sending email template when there is a change in the balance
  * The default content of the template is Update Balance Email (Default)

1.5.3. Withdrawal Email
~~~~~~~~~~~~~~~~~~~~~~~~~

* `Send Withdrawal Email`: Select **Yes** to send a notification email when you withdraw money
* `Withdrawal Complete Email`
  * Select the sending email template when there is a change in the balance
  * The default content of the template is Withdraw Complete Email (Default)

1.6. Refer Friends Configuration
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* `Enable Refer Friends Feature`: Choose **Yes** to activate the introduce to friends function
* `Refer Sharing Email` 
  * Choose the email template which will be sent when introducing with friends through email
  * The default content of the template is Affiliate Sharing Email (Default)
* `Default Refer URL`
  * Insert the referral link. This link will display in the **My Account/My Affiliate/Refer Friend** tab
  * If empty, the default homepage url will be used.
* `AddThis.com ID`
  * Enter the AddThis ID to introduce it to friends through AddThis
  * If empty, default Public AddThis ID **ra-56e141d56e895f5c** will be used
* Use Cloudsponge to retrieve email contacts: Select **Yes** to allow access contacts from customer's account such as Gmail, Yahoo, Live, AOL, Outlook, etc.
* Cloudsponge Key
  * Enter the Cloudsponge key
  * The default key used is **a473483c2e256bd812bdc9a0bac867ecf1999a54**

1.6.1. Sending Email Content
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* `Default Subject Email`
  * Enter a title for the sending email
  * The default title is **Good product and services**
* `Default Email Body`
  * Enter the content for the sending email
  * The default content is **I've been shopping at {{store_name}} and feel really happy. They provide good service and reasonable prices.**
* `Default Message Shared via Social`
  * Enter content for sending messages when sharing through social networks
  * The default content is **I've been shopping at {{store_name}} and feel really happy. Check it out: {{refer_url}}.**

2. Manage Accounts
`````````````````````````````

2.1. Manage Grid
~~~~~~~~~~~~~~~~~~~~~~~~~

* Display Affiliate account information: account balance, total earned amount, account activity status,... Click the **View** link to view the account details.
* In this panel, admin can change status or delete the account

.. image:: https://i.imgur.com/Plbwpkv.png

2.2. Add New Account
~~~~~~~~~~~~~~~~~~~~~~~~~

.. image:: https://i.imgur.com/Os0qc4U.png

* Affiliate Group

.. image:: https://i.imgur.com/I3cPbFF.png

  * Select the group for the created Affiliate account
  * You are not allowed to leave this field empty
* `Referred By`: Enter the ID of the previously registered Affiliate account
* `Status`

.. image:: https://i.imgur.com/dGspIbc.png

  * Status = Active: The Affiliate account which is just created can start working now
  * Status = Inactive: The Affiliate account which is just created can't start working yet
  * Status = Need Approved: he Affiliate account which is just created needs to be approved by admin
* `Email Notification`: Choose **Yes** to receive notification emails when there is a change in your Affiliate account balance


Assign to Affiliate Group
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

After adding the new Affiliate accounts, store admin can manage them in the **Accounts Management** grid.

* On the grid, find the Affiliate account needed to assign and open the **Edit** mode.
* Choose the Affiliate group to assign. By the default, “General” is chosen.

  .. image:: https://cdn.mageplaza.com/docs/aff-assign-to-affiliate-group.gif


Add Affiliate Group
~~~~~~~~~~~~~~~~~~~~~~

On the Admin Panel, go to `Affiliate > Groups`.

* Click on `Add new groups` button
* Complete `Name` of the new group
* Set `Status` to “Enabled”
* Tap `Save Group` on the upper-right corner

  .. image:: https://cdn.mageplaza.com/docs/aff-create-affiliate-group.gif

4. Campaigns
`````````````````````````````

Login to Magento Admin, `Affiliate > Campaigns`.

  .. image:: https://cdn.mageplaza.com/docs/aff-create-affiliate-campaign.gif

It is necessary to go over four tabs: “Campaign Information”, “Conditions”, “Discounts”, and “Commissions”.

* In the **Campaign Information** section, do the following:

  * Set `Name` for the campaign and write `Description` for that if need.
  * Assign to `Affiliate Groups` who the campaign applies for.
  * Choose `Website` and the display positions on the website 
  * This is not required but you can set the active time in the `Active From Date` and Active To Date` field for the better management. You can use “Calendar” icon or insert manually.
  * Set `Sort Order` in the list of Affiliate campaign.

.. image:: https://cdn.mageplaza.com/media/general/1fQnKPn.png

* In the **Conditions** section, 
  
  * The short message If ALL of these conditions are TRUE is visible for you, and especially, you can customize the message when click on ALL and TRUE link.
    
    * Click on the **ALL** link, “ALL” and “ANY” options are available.
    * Click on the **TRUE** link, “TRUE” and “FALSE” options are available.
  
  * Tap the “Add Conditions” icon, and the campaign is enabled if all conditions are met.

  For example, Affiliate program is active if Affiliate creates an order that includes 3 items in the cart.

.. image:: https://cdn.mageplaza.com/media/general/rMIR6Mu.png

  * Leave the conditions blank if you want to apply for all products

* Continuing with **Discounts** section, you will give some utilities to customers who make a purchase via Affiliate link.
  
  * Set `Apply` to the needed type of discount, including:
    
    * Percent of product price discount
    * Fixed amount discount
    * Fixed amount discount for whole cart
    * Buy X get Y free
  
  * Enter `Discount Amount` field. For example, insert number 5 for 5% discount.  
  * Enter `Discount Qty Step (Buy X)` and `Maximum Qty Discount is Applied to` as you need.
  * If you want to discount for shipping amount, set `Apply to Shipping Amount` to “Yes”.
  * Enable `Free Shipping` by choosing “Yes” for that 
  * Leave some `Discount Description` if necessary.

.. image:: https://cdn.mageplaza.com/media/general/97otiGw.png

* Finally, **Commissions** tab allows store admin to set “Pay Per Sale” promotion. 

  * Click on `Add` button to create tiers and set commission rule for that.
  * Choose type and value of commission in the 1st order and the next orders. You can set them to the same or separated option depending on your strategy.

.. image:: https://cdn.mageplaza.com/media/general/aiTA8xq.png

*

  * Enable to add unlimited tiers and delete any tiers you need when tapping `Delete` button in the same row.
  * On the Admin Panel, go to `Affiliate > Settings`, open **Commissions Configuration** section,
    
    * To allow calculating commissions from tax and shipping fee, set `Earn commission from tax` and `Earn commission from shipping fee` to "Yes".
    * Under **Commission calculation process** part, 
      
      * To require to create the invoice before Affiliate receives commissions, select "Yes" for `Allow Affiliate receiving commission when Invoice created`.
      * Insert the days for `Hold commission transactions for`. If empty or zero, transaction is not held.
      * To allow getting back commission when the order using the commission to pay is cancelled,set `Deduct commission from Affiliate's balance when order is refunded/canceled` to "Yes".

.. image:: https://cdn.mageplaza.com/media/general/0QJqk5n.png

When complete all, tap `Save` to apply the new Affiliate program or click on `Save and Continue Edit` to adjust any information.

Manage Affiliate Withdraws
```````````````````````````````

Create new Affiliate Withdraw
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* Login to Magento Admin, `Affiliate > Withdraws`.
* Click on `Add New Withdrawal` button.
* Choose an affiliate account to create a withdrawal 
* Under **Withdrawal Configuration** section,
  
  * Enter the number of the withdrawal that includes fee into `Amount` field.
  * Enter the fee for the withdrawal if have. If empty, the configuration value is used.
  * Choose one of two available payment methods: Offline Payment or Paypal Payment.

* Under **Payment Detail** section,
 
 * If select Offline Payment, fill out `Address` to receive.
  * If select Paypal Payment, enter `Paypal Email` and `Transaction ID`.


  .. image:: https://cdn.mageplaza.com/docs/affiliate-create-withdrawal.gif

Manage Affiliate Transaction
```````````````````````````````````

Create new Affiliate Transaction
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* Login to Magento Admin, `Affiliate > Transaction`.
* Click on `Add new transaction` button.
* Choose an affiliate account for the new transaction.
* Under **Transaction Information** section,
 
  * Enter the number into `Amount` field that might be adding or subtract affiliate's balance.
  * Set `Title` for the transaction.
  * Enter the holding days into `Holding Transaction for` field.

  .. image:: https://cdn.mageplaza.com/docs/affiliate-create-transaction.gif

  

.. _Magento 2 Affiliate: https://www.mageplaza.com/magento-2-affiliate-extension/
