

`Magento 2 Affiliate`_ extension from Mageplaza is the greater choice than ever if you want to build an Affiliate program that is crazy enough to drive traffic and sales increase promptly, get qualified leads, and also enhance your brand awareness. Our Affiliate program allows you to pay affiliates amount of commissions 


.. Mageplaza Affiliate User Guide will provide the detailed instructions to know **How to use** on the frontend and  **How to Config** on the backend.

.. How to Use
.. ^^^^^^^^^^^^^^

How to Config
^^^^^^^^^^^^^^^

General Configurations
``````````````````````````````

Login to Magento Admin, `Affiliate > Settings`.

* To apply Affiliate module for your store, set `Enable` to "Yes".
* In the `Cookie Expiration` field, enter the number of days to store cookies of this program. If skip it, the default (365) is used, that means Lifetime Commissions can be active.
* `Allow overriding cookies` field enables to override Affiliate code when a customer is referred by many Affiliates. 

If allowing, enter number "1" into the field. In contrast, insert "0"

.. image:: https://i.imgur.com/Sb50HxX.png

* Select CMS Static Block for the content of the following options
  * Affiliate Welcome homepage
  * Affiliate FAQ page
  * Affiliate Getting Started
* To make your Affiliate policy visible on the storefront, set `Display Policy Page` to "Yes".
* Choose "Top Link" or "Footer Link" where Affiliate link appears in the `Show Affiliate link on` box.
* Set `Affiliate Discount Label` to the desired label on your site.

.. image:: https://i.imgur.com/FRkERys.png 

Custom Affiliate URL
~~~~~~~~~~~~~~~~~~~~~~~

.. image:: https://i.imgur.com/jo0FRGc.png

* Apply "Hash" or "Parameter" for `URL Style` 
  * Parameter: http://example.com/?c=123
  * Hash: http://example.com#c123
* Enter the letter for the customization of Affiliate URL.
* Set `The Length of Affiliate code` that is between 3 and 32 characters. The default value including 6 characters is always available.

Account Configuration
~~~~~~~~~~~~~~~~~~~~~~~~

Related to Affiliate Accounts, you can configure Affiliate Registration, Terms and Conditions Display and Affiliate Account Balance.

* Under **Affiliate Sign up** part, you can:

  * To create a new account on your site at the same time when he registers as an Affiliate, set `Embed customer signup fields in Affiliate signup form` to "Yes".
  * Choose `Default Affiliate Group` from the current Affiliate groups.
  * Ask for admin's approval to complete the Affiliate sign up process by choosing "Yes" in the `Require admin's approval` field.
  * In the `Checked "Email notification" by default"` field, if Yes, "Email notification" auto checked by default

.. image:: https://i.imgur.com/nKEzZxa.png

* Scorll down to **Affiliate Sign up-Term and Condition** part.

  * Enable `Terms and Conditions` on the storefront.
  * Enter the checkbox text that is in the right of Terms and Conditions checkbox.
  * Enter `Terms and Conditions Title`.
  * Select CMS Block for `Terms and Conditions Content`.
  * The Terms and Conditions checkbox is marked already if set `Checkbox is checked by default` to "Yes".

.. image:: https://i.imgur.com/kDE2X7t.png

* Continuing with **Account Balance** part, and do the following:

  * Enter the `Maximum of Affiliate Balance`, and if Affiliate reach the milestone, none of commission is added. Leave empty or zero is no limitation.
  * If Affiliate's account balance is not enough to taking back commission, allow the balance be negative number by choosing "Yes" in the respective field.

.. image:: https://i.imgur.com/S7DotJH.png

Email Configuration
~~~~~~~~~~~~~~~~~~~~~~

* Choose `Email Sender` whose name will appear on the email notification.

You can send the email notification when there is any update of Affiliate Account, Transaction, and Withdrawal. 

* Go to the **Account Email** section:

  * Enable `Send Welcome Email`
  * Set `Welcome Email` to the needed template.
  * Set `Welcome Email After Account Approved` to the available template that is sent instead of welcome email, after approving account.

* Go to the `Transaction Email` section

  * Enable `Send Transaction Email`
  * Choose the template for `Update Balance Email`

* Go to **Withdrawal Email** section

  * Enable `Send Withdrawal Email`
  * Choose the template for `Withdrawal Complete Email`

.. image:: https://i.imgur.com/DSF6qK6.png

Refer Friends Configuration
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* Set `Enable Refer Friends Feature` to "Yes"
* Insert the referral link in the `Default Refer Url`. 	

This link will be displayed in My Account/My Affiliate/Refer tab. If empty, the default homepage url will be used.

* Select CMS Block to show `Affiliate Welcome homepage content`
* Make `Affiliate Welcome homepage content` appear on "Category Page" or "Product Page" depending on your purpose.
* To remind Affiliates to fill captcha before sending the referral email, set "Yes" for `Enable Captcha for Sending Email`.
* Set `Refer Sharing Email` to the email template as you need.
* Use AddThis button for more referrals by enter the `AddThis.com ID`. If empty, default Public AddThis ID "ra-56e141d56e895f5c" will be used.
* To allow importing email address from theirs accounts such as Gmail, Yahoo, Live, AOL, Outlook and more..., set `Use Cloudsponge to retrieve email contacts` to "Yes".

.. image:: https://i.imgur.com/Z7s5dJV.png

* In the **Sending Email Content**, you can create the invitation content that is ready to send to recipients, including:

  * Default Email Subject
  * Default Email Body
  * Default Message Shared via Social

.. image:: https://i.imgur.com/0YKZ2Tg.png


Manage Affiliate Accounts
`````````````````````````````

Create Affiliate Account
~~~~~~~~~~~~~~~~~~~~~~~~~

* Login to Magento Admin, `Affiliate > Accounts`.

* Click on `Add New Account` button, be navigated to the Account Information page. Then do the following to complete a new Affiliate account.

* In the `Choose Customer` field, tap the down arrow and select one of the existing customer from the list .
* Enter Affiliate email or ID who refers to customers in the `Referred By` field to plus commissions to his account. If not, leave it empty.
* Set `Status` to **Active** for the account.
* Allow receiving `Email Notification` if choosing **Yes** for that. 
* Tap `Save` to complete or `Save and Continue Edit` if you want to edit any information.

  .. image:: https://cdn.mageplaza.com/docs/aff-create-new-account.gif


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

Manage Affiliate Campaigns
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

.. image:: https://i.imgur.com/1fQnKPn.png

* In the **Conditions** section, 
  * The short message If ALL of these conditions are TRUE is visible for you, and especially, you can customize the message when click on ALL and TRUE link.
    * Click on the **ALL** link, “ALL” and “ANY” options are available.
    * Click on the **TRUE** link, “TRUE” and “FALSE” options are available.
  * Tap the “Add Conditions” icon, and the campaign is enabled if all conditions are met.

  For example, Affiliate program is active if Affiliate creates an order that includes 3 items in the cart.

.. image:: https://i.imgur.com/rMIR6Mu.png

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

.. image:: https://i.imgur.com/97otiGw.png

* Finally, **Commissions** tab allows store admin to set “Pay Per Sale” promotion. 

  * Click on `Add` button to create tiers and set commission rule for that.
  * Choose type and value of commission in the 1st order and the next orders. You can set them to the same or separated option depending on your strategy.

.. image:: https://i.imgur.com/aiTA8xq.png

  * Enable to add unlimited tiers and delete any tiers you need when tapping `Delete` button in the same row.
  * On the Admin Panel, go to `Affiliate > Settings`, open **Commissions Configuration** section,
    * To allow calculating commissions from tax and shipping fee, set `Earn commission from tax` and `Earn commission from shipping fee` to "Yes".
    * Under **Commission calculation process** part, 
      * To require to create the invoice before Affiliate receives commissions, select "Yes" for `Allow Affiliate receiving commission when Invoice created`.
      * Insert the days for `Hold commission transactions for`. If empty or zero, transaction is not held.
      * To allow getting back commission when the order using the commission to pay is cancelled,set `Deduct commission from Affiliate's balance when order is refunded/canceled` to "Yes".

.. image:: https://i.imgur.com/0QJqk5n.png

When complete all, tap `Save` to apply the new Affiliate program or click on `Save and Continue Edit` to adjust any information.

..Manage Affiliate Banners
..```````````````````````````
..
..Create Affiliate Banners
..~~~~~~~~~~~~~~~~~~~~~~~~~~~~
..
..Login to Magento Admin, `Affiliate > Banners`, you will see all banners which are designed ..for Affiliates.
..
..https://i.imgur.com/Csh6sMp.png
..
..To create a new banner for your Affiliate program, click on **Add New Banner** button, then ..do the following:
..
..* Enter `Title` of the banner that is visible on the storefront
..* If need, complete the `Image Alt Value` field that is good for SEO.
..* Assign to `Campaign` which is active.
..* Choose `Banner Type` that might be “Image”, “Text”, or “CMS Static Block”.
..
..  * Image - Upload `Image File` and set `Image Size` for its appearance.
..  * Text - Enter the `Banner Text Value` in the required area.
..  * CMS Static Block - Choose the desired position from the list of `Static Block`. 
..* Insert `URL` which the banner is linked to. If empty, it will redirect to Homepage.
..
..https://i.imgur.com/FJ8EVrV.png
..
..* Tap `Save Banner` to complete.
..
..Banners Configuration
..~~~~~~~~~~~~~~~~~~~~~~
..
..Login to Magento Admin, `Affiliate > Settings`, open **Banners Configration** section, 
..
..* Set `Enable Module` to "Yes", that allows showing any promotion on the banners as you set
..* To follow the traffic to the banner, leave "Yes" in the `Enable Traffic Statistic` field
..* Support **Reset banner traffic** button to refresh all data
..* To show "AddThis" button on your storefront, choose "Yes" in the `Display AddThis social ..share buttons in frontend` field.
..* Enable to write a short message which is shown whenever there is any sharing via Social
..
..https://i.imgur.com/Y1nOXiY.png
..
.... Manage Withdrawals
.... ```````````````````````
..
Withdrawal Configuration
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* Set `Allow withdrawal request` to "Yes".
* Active the `Payment Method` that allow paying commissions via Paypal or Banks.
* Set `The minimum balance in affiliate account for requesting withdrawal` to a specific number. If the account balance is less than the required value, the withdrawal is not allowed.
* Enter `Minimum withdrawal amount` and `Maximum withdrawal amount` per withdrawal.
* Not calculate tax for the withdrawal request when selecting "No" in the `Apply tax for withdrawal` field.
* Set the interval for `Allow affiliates to cancel withdrawal request within`. 

.. image:: https://i.imgur.com/vjbkMp5.png

.. ### Manage Transactions


.. _Magento 2 Affiliate: https://www.mageplaza.com/magento-2-affiliate-extension/
