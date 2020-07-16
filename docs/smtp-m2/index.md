# SMTP

**[Mageplaza SMTP](https://www.mageplaza.com/magento-2-smtp/)** will assist you to resolve email sending issues. By available popular email server providers, our extension absolutely would like to help you in sending email with a huge amount of quantity, faster along with high secure authentication. Hence, Mageplaza SMTP will also provide you a log diary which archive all the detail sent emails, makes it easier to keep track and checking problems. Be ready to say goodbye to Spam box issue.

## Download & Install

You can download from the following resouces:

- [Mageplaza](https://www.mageplaza.com/magento-2-smtp/)
- [Magento Marketplace](https://marketplace.magento.com/mageplaza-module-smtp.html)
- [Github](https://github.com/mageplaza/magento-2-smtp)
- [How to Install](https://docs.mageplaza.com/smtp-m2/install.html)

### Install via composer (recommend)
Run the following command in Magento 2 root folder:

```
composer require mageplaza/module-smtp
php bin/magento setup:upgrade
php bin/magento setup:static-content:deploy
```

Here we go how to know detail in instructions and configuration in extension’s backend.

## How to config

Login to the Magento admin, choose `Stores > Settings > Configuration > Mageplaza > SMTP`

![](https://i.imgur.com/IXDoxLr.png)

Follow the guide below to complete **SMTP** configuration

* Emails Log
* General Configuration
* SMTP Configuration Options
* Developer

### 1. Email logs

This can be accessed by the following  `Stores > SMTP > Emails Log`. From here you can look back all the sent email from the server to customers.

![](https://i.imgur.com/ad8w9WV.png)

At here, you can view all information as *ID, Subject, From, To, Bcc, Status, Created At* as well as allow admins to take some actions for emails that are sent from the server to customers. At the same time, you also delete all emails by clicking on the **Clear** button.

Some actions can be taken:

* **View**: To review the content of the email that is saved in the Emails Log. Admin can review by clicking `Select > View` in the `Action` column.

Below is the content of an email after you click on the **View** button

  ![](https://i.imgur.com/IZ7EuMt.png)

* **Resend**:

  * In the `Action` column, choose `Select > Resend`. This means that the selected email will be resent once and that Email Resend is also logged, which enables admins to know if the Email Resend is sent successfully or failed.
  * The `Resend` feature can work well even if you disable the module. The Resend Email will apply the Provider of SMTP, however, it won’t be logged in the Emails Log.
  * To resend lots of emails at once, you only need to tick, then choose `Action` at the upper left of the Grid, and select `Resend`.

      ![](https://i.imgur.com/pS7OfD0.png)

* **Delete**: 

  * In the `Action` column, click `Select > Delete`: This means that the selected email will be removed from the grid.
  * To Delete many emails at once, you only need to tick, then choose `Action` at the upper left of the Grid, and choose `Delete`.

      ![](https://i.imgur.com/zX11Azm.png)

### 2. Configuration

#### 2.2.1 General Configuration

Be sure you’re at Admin Panel, for general configuration `Stores > Settings > Configuration > Mageplaza > SMTP`. Choose **General Configuration** sections.

![](https://i.imgur.com/AOiIER7.png)

* In the **Enable Mageplaza SMTP** field, select “Yes” to enable Mageplaza SMTP extension.
* **Log Email** provides two modes:
  * Yes: Sent emails will be saved in the Emails Log, you can preview it and have it clean up to follow the fixed schedule.
  * No: Sent emails won’t be archived.
* **Clean Email Log Every**: This field limits the storage time for the email you sent. After that limited number of days, Email will be auto-deleted. If you do not want to delete the emails, leave the field blank.

* **Blacklist**: Enter the regular expression (regex) for email patern in this field, meaning that emails with the same pattern as the patern here will not receive any mail from the system.
  * Regex is written between two right slashes /../. Basic regex:
    * `[0-9]`: digits from 0 to 9
    * `[a-z]`: lowercase letters from a to z
    * `[A-Z]`: uppercase letters from A to Z
    * `abc`: letter. For example: `/abc/` correspond to "abc" string in the defaut pattern string “abcdefgh”
    * `123`: number. For example: `/123/` correspond to "123" string in the defaut pattern string “abc123”
    * `\d`: any number from 0 to 9
    * `\w`: a letter
    * `\s`: white space (space, tab, new line, ...)
    * `\D`: non-numeric character
    * `\W`: non-letter characters
    * `\S`: character not white space
    * `.` : any character except the new line. For example: `.{3}` will correspond to any string with 3 characters
    * `+` : indecates the element appears >= 1 time
    * `*` : indicates that the element appears >= 0 times (may not appear)
    * `?` : indicates the element appears 0 or 1 time
    * `^` : represents the first element of the string. For example: `^a` corresponds to the letter "a" in the string "abc"
    * `$` : matches the last character of the string. For example, `c$` matches the character "c" in the string "abc"
    * `?` : matches 0 or 1 times the character preceding it. For example: `a?` will be able to match "abc" or "bc" in the target string "abcdbc"
    * `a|b` : corresponds to a or b.
    * `{x}` : corresponds to x times. For example: `{3}` corresponds to 3 characters
    * `{x,}` : at least x times. For example, `{2,}` corresponds to at least 2 characters
    * `{x,y}` : from x to y times. For example, `{2,6}` corresponds to 2 to 6 characters
    * To use special characters, use the `\` before that character. For example: `/\.\+\*/` corresponds to. `.+*`

For example, the pattern of an email is: `/^[0-9][a-z0-9\$\%\&]+@[a-z]+\.[a-z]{2,}$/`

* `^[0-9]` : start with a number between 0 and 9
* `[a-z0-9\$\%\&]` : the rest of the email may contain multiple digits, letters, characters $, %, &
* `@` : ending email address with the @ character
* `[a-z]+` : domain names include lowercase characters
* `\.[a-z]{2,}$` : End with top-level domain: begins with dot, followed by only lowercase characters, and requires at least 2 characters, `$` sign indicates end of string. 


#### 2.2.2 SMTP Configuration Options

Still from the same structure with [SMTP](https://github.com/mageplaza/magento-2-smtp) General Configuration, go to `Stores > Settings > Configuration > Mageplaza > SMTP`, then choose **SMTP Configuration Options** sections.

![](https://i.imgur.com/uM3osyl.png)

* In the **Host** field: This is a field that allows you to fill in the Support Host name and ID address. If you click on *Load Settings* button, a popup about SMTP Providers will be displayed. Admins can choose SMTP Provider that they want and the system will auto-fill some fields as Host, Port, and Protocol.
* In the **Port** field: This is a specific gate that emails will be sent through. You can also pass this step if you had chosen Load Settings from the first place. In general, there will be 3 kinds of Default Port:
  * **Port 25**: Emails sent by Protocol other than SSL, TLS will be sent via this portal
  * **Port 465**: Emails sent by Protocol SSL will be sent via this portal
  * **Port 587**: Emails sent by Protocol TLS will be sent via this portal

* In the **Protocol** field: This is a place allowing you to choose the protocol to send the email. If you had click Autofill button, please ignore this field. You can choose one of the providing protocols below:
  * None: When you choose **Protocol** = **None**, this means that you accept all risks that can occur with your sent emails
  * SSL stands for Secure Socket Layer. This protocol ensures that all data exchanged between the web server and the browser is secure and stay safe.
  * TLS means Transport Layer Security. This protocol can secure data or messages and validate the integrity of messages through message authentication codes. 

* In the **Authentication** field: This is a field that enables you to choose the authentication method. There are 3 methods:
  * **Login**: Authentication by login to the account through Username and Password that will be filled in the next field. Most of providers will require this method.
  * **Plain**
  * **CRAM-MD5**
* In the **Username** field: This field allows you to fill in the Account name according to SMTP Provider format that you have selected.
* In the **Password** field: This field enables you to fill the *Password of Username* that you have filled. After saving, Password will be encrypted into ******

**Note**: 
- When using Email to fill into Username and Password, the email has to be varified by 2-Step Verification, to do this, [click here.](https://myaccount.google.com/security?rapt=AEjHL4OumFM_5U-xFWKZPnTNhamVCHYLwj5GcbPfLJKyffMbPN42dbdRlpktlDL2MD8uSq_tdGTBqwqYXzVei_GhnAJTA7ewaQ)  
- After clicking on the link, go to **Security** and choose 2-Step Varification
 
 ![](https://i.imgur.com/wqXtNjK.png)
- Click **Turn on** to complete this step

![](https://i.imgur.com/2kLzTS1.png)
- Next, you have to crease Passwords to sign-in Google accounts from app that do not support 2-Step Varification. So, Choose the apps and click on **Generate**

![](https://i.imgur.com/TG7ZIee.png)

* In the **Return-path email** field: Leave it empty if you want to ignore this.
* In the **Send Test Email**: This is a field for you to test the operation of the extension.
  * Send From: Admins can choose one of the five Email Sender of Magento.
  * Send To: Allow entering the email address that admins want to test the email.
  * To test the email, you need to fill the email address in the `Send To` field, then click `Test Now` button.

![](https://i.imgur.com/Qgi0sf5.png)

If the information you filled out is valid, a successful email message will be sent from Username to Email Test. That email has the following content:

![](https://i.imgur.com/7aoGqeB.png)

### 2.2.3 Developer mode

From the Admin Panel, go to `Stores > Settings > Configuration > Mageplaza > SMTP`, choose **Developer** sections.

![](https://i.imgur.com/bI84WgH.png)

* **Developer Mode**:
  * Yes: Magento will not deliver any email to the receiver
  * No: Magento will deliver email to the receiver


## Must-have extensions for your Magento stores

- Increase website traffic: [SEO](https://www.mageplaza.com/magento-2-seo-extension/)
- [Build leads](https://www.mageplaza.com/magento-2-better-popup/)
- Increase conversion rates: [One Step Checkout](https://www.mageplaza.com/magento-2-one-step-checkout-extension/), [Layered Navigation](https://www.mageplaza.com/magento-2-layered-navigation-extension/)
- We believe that you can sell more: [Gift Cards](https://www.mageplaza.com/magento-2-gift-card-extension/), [Auto Related Products](https://www.mageplaza.com/magento-2-automatic-related-products/), [Frequently Bought Together](https://www.mageplaza.com/magento-2-frequently-bought-together/), [Free shipping bar](https://www.mageplaza.com/magento-2-free-shipping-bar/), [Daily Deal](https://www.mageplaza.com/magento-2-daily-deal-extension/) , [Product Feed](https://www.mageplaza.com/magento-2-product-feed-extension/)
- Keep customers return: [Reward Points](https://www.mageplaza.com/magento-2-reward-points-extension/)
- Let your customer [become raving fans](https://www.mageplaza.com/magento-2-affiliate-extension/)
- Optimize your stores: [PDF Invoice](https://www.mageplaza.com/magento-2-pdf-invoice-extension/), [Custom Order Number](https://www.mageplaza.com/magento-2-custom-order-number/), [Stop return items issue](https://www.mageplaza.com/magento-2-size-chart/)
