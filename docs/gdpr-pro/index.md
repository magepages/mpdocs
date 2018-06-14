# GDRP Professional

## Overview 
GDPR principle was created to protect customer data. In a nutshell, GDPR establishes a clear set of rules about which regulations businesses can operate in relation to the process of executing customer data. With these new rules, boundaries are easier to understand for both businesses and consumers, which will facilitate earning money and retain customer loyalty.

In order to capture the EU data protection standards, Mageplaza has released a new extension for this standard. That's the GDPR module. [Magento 2 GDPR](https://github.com/mageplaza/magento-2-gdpr) module will assist you to delete customer data permanently, to ensure your GDPR regulation compliance.

## How to Configure
From the Admin Panel, go to ``Store > Settings > Configuration > Mageplaza Extensions > GDPR``

![gdrp1](https://i.imgur.com/YGJmKZh.png)

### I. General 
Check in **General** to learn the basic configuration of the module

![gdrp2](https://i.imgur.com/4cB3TrU.png)

* In the **Enable** field: Choose "Yes" to turn the module on.
* In the **Allow Delete Customer Account**: Choose "Yes" to allow customers can delete their account by themselves.
* In the **Delete message** field
  * Enter the message displayed when customers are going to delete their account.
  * Custom message is supported by HTML code.

![gdpr3](https://i.imgur.com/SuWVlKw.png)

* In the **Allow Delete Default Address** field: Choose "Yes" to allow customers to delete their default address.

![gdpr4](https://i.imgur.com/CccsEGQ.png)

* In the **Allow password verification** field:
  * Choose Yes to use this feature
  * When customers want to remove their account, they need to enter the password correctly to delete the account successfully.
  
![Imgur](https://i.imgur.com/SoTXGCv.png)

* In the **Show Customer Register Term and Condition**: Select Yes to show the Term and Condition when customers create a new account.

![Imgur](https://i.imgur.com/1zDzGns.png)

* In the **GDPR Checkbox Title** field: Enter the title that is displayed in the checkbox in the Term and Condition section.
* In the **Term and Condition** field: 
  * Allow editing the display content of the GDPR policy or use the default content of Mageplaza
  * Support HTML code

### II. Anonymise Account Configuration

![gdpr5](https://i.imgur.com/OwqDIad.png)

* In the **Allow Delete Abandoned Cart** field: Choose "Yes" to delete abandoned cart when customers delete their accounts.

![gdpr6](https://i.imgur.com/SvoWNOz.png)

* In the **Allow anonymizing account in billing document** field:
  * Choose "Yes" to anonymize Billing Address, Shipping Address of the customer after he deletes his account.
  * Anonymized information will be encrypted and displayed as a random character string.
* In the **Anonymise Account Firstname Value** field:
  * Enter Firstname value that you want to replace it with the customer's Firstname value.
  * If you leave the field blank, Firstname will be encrypted and displayed as a string of 10 random characters.
  * Firstname value will be displayed in orders, invoices, shipments and credit memos.
* In the **Anonymise Account Lastname Value** field:
  * Enter Lastname value that you want to replace it with the customer's Lastname value.
  * If you leave the field blank, Lastname will be encrypted and displayed as a string of 10 random characters.
  * Lastname value will be displayed in orders, invoices, shipments and credit memos.
* In the **Anonymise Account Email Value** field:
  * Enter Email value that you want to replace it with the customer's Email value.
  * If you leave the field blank, Email will be encrypted and displayed as a string of 10 random characters.
  * Email value will be displayed in orders, invoices, shipments and credit memos.
* In the **Allow Anonymise Address Option In Order Processing** field:
  * Choose "Yes" to anonymize information in billing, shipping address.
  * You can choose to hide one or more information from the address optionally.
  * Anonymized information will be encrypted as a random character string.
* In the **Allow Anonymise Address Option** field:
  * Allow hiding one or more information in the address field.
  * The selected information will be hidden when the customers delete the account.

![Imgur](https://i.imgur.com/V2khIOt.png)

The information will be hidden in the order when customers remove their account.
  
![gdpr7](https://i.imgur.com/xrSpILH.png)

![gdpr8](https://i.imgur.com/VksrRV5.png)

### III. Cookie Restriction

![gdpr9](https://i.imgur.com/Xu06tpk.png)

* In the **Enable Cookie Restriction Mode** field: Choose "Yes" to restrict the cookie using of Magento 2.
* In the **Visitors must accept cookie policy** field: Choose "Yes" so that:
  * Customers need to confirm their consent in cookie using policies to be able to sign in, or add the product to their Wishlist.
  * A warning popup box will be displayed if customers don't accept the policy

![gdpr9](https://i.imgur.com/59W32xi.png)

* In the **Cookie Text Message** field: 
  * Enter the content of the suggest message to let them consider whether or not to allow cookies using.
  * HTML code is supported.

![gdpr10](https://i.imgur.com/VWOgSjp.png)

* In the **CMS Cookie Policy Page** field: Choose from the list the page you want to put the internal link in ``Learn more`` of **Cookie Text Message**.
* In the **Button Label** field: Enter the name of the button in **Cookie Text Message** (default is "Allow Cookies")
* In the **Location To Show Cookie Law** field: Choose the pages you want to show Cookie Policy
* In the **Apply For** field: Choose the country you want to apply Cookie Policy.
* In the **Custom CSS** field: You can freely customize the cookie displaying.

### IV. Email Configuration

![Imgur](https://i.imgur.com/HlGrROY.png)

* In the **Enable Email Confirmation** field:
  * Choose Yes to send the email confirmation when customers remove the account.
  * Customers only need to click to the link in their email and login to verify that deleting the account is completed.
* Select an email template used to confirm before deleting the account:
  * Allow choosing the confirmation email template to send to the customers.
  * Ability to design or add a new template by going to `Marketing > Email Templates`.
* In the **Sender Email** field: Allow choosing the email sender.

Below is the content of the email:

![Imgur](https://i.imgur.com/0uRTyAs.png)
  



