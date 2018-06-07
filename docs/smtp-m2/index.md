# SMTP

**[Mageplaza SMTP](https://www.mageplaza.com/magento-2-smtp/)** will assist you to resolve email sending issues. By available popular email server providers, our extension absolutely would like to help you in sending email with a huge amount of quantity, faster along with high secure authentication. Hence, Mageplaza SMTP will also provide you a log diary which archive all the detail sent emails, makes it easier to keep track and checking problems. Be ready to say goodbye to Spam box issue.

## Download & Install

You can download from the following resouces:

- [Mageplaza](https://www.mageplaza.com/magento-2-smtp/)
- [Magento Marketplace](https://marketplace.magento.com/mageplaza-module-smtp.html)
- [Github](https://github.com/mageplaza/magento-2-smtp)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


Here we go how to know detail in instructions and configuration in extension’s backend.

## How to config

Login to the Magento admin, choose `Mageplaza > SMTP`

![configuration](https://i.imgur.com/SfUoDG1.png)

Follow the guide below to complete **SMTP** configuration

* Emails Log
* General Configuration
* SMTP Configuration Options
* Developer

### 1. Email logs

This can be accessed by the following  `Stores > SMTP > Emails Log`. From here you can look back all the sent email from the server to customers.

![Email logs](https://i.imgur.com/ad8w9WV.png)

At here, you can view all information as *ID, Subject, From, To, Bcc, Status, Created At* as well as allow admins to take some actions for emails that are sent from the server to customers. At the same time, you also delete all emails by clicking on the **Clear** button.

Some actions can be taken:

* View: To review the content of the email that is saved in the Emails Log. Admin can review by clicking `Select > View` in the `Action` column.

Below is the content of an email after you click on the **View** button

![Order](https://i.imgur.com/IZ7EuMt.png)

* Resend:

  * In the `Action` column, choose `Select > Resend`. This means that the selected email will be resent once and that Email Resend is also logged, which enables admins to know if the Email Resend is sent successfully or failed.
  * The `Resend` feature can work well even if you disable the module. The Resend Email will apply the Provider of SMTP, however, it won’t be logged in the Emails Log.
  * To resend lots of emails at once, you only need to tick, then choose `Action` at the upper left of the Grid, and select `Resend`.

      ![Resend](https://i.imgur.com/pS7OfD0.png)

* Delete: 

  * In the `Action` column, click `Select > Delete`: This means that the selected email will be removed from the grid.
  * To Delete many emails at once, you only need to tick, then choose `Action` at the upper left of the Grid, and choose `Delete`.

      ![Actions Delete](https://i.imgur.com/zX11Azm.png)

### 2. Configuration

#### 2.2.1 General Configuration

Be sure you’re at Admin Panel, for general configuration `Stores > Settings > Configuration > Mageplaza > SMTP`. Choose **General Configuration** sections.

![SMTP on](https://i.imgur.com/Hm7Wofm.png)

* In the Enable Mageplaza SMTP field, select “Yes” to enable Mageplaza SMTP extension.
* Log Email provides two modes:
  * Yes: Sent emails will be saved in the Emails Log, you can preview it and have it clean up to follow the fixed schedule.
  * No: Sent emails won’t be archived.
* Clean Email Log Every: This field limits the storage time for the email you sent. After that limited number of days, Email will be auto-deleted. If you do not want to delete the emails, leave the field blank.


#### 2.2.2 SMTP Configuration Options
Still from the same structure with [SMTP](https://github.com/mageplaza/magento-2-smtp) General Configuration, go to `Stores > Settings > Configuration > Mageplaza > SMTP`, then choose **SMTP Configuration Options** sections.

![smtp configuration](https://i.imgur.com/uM3osyl.png)

* In the **SMTP Provider** field: At the present, we support nearly 30 SMTP Provider that you can be free to choose. After selecting completely, you click *Load Settings* button to auto-fill the fields as Host, Port, Authentication, and Protocol.
* In the **Host** field: This is a field that allows you to fill in the Support Host name and ID address. You can also edit the *Hostname of SMTP Provider* here. If you had clicked *Load Settings* button in the above field, you can give this step a free pass.
* In the **Port** field: This is a specific gate that emails will be sent through. You can also pass this step if you had chosen Load Settings from the first place. In general, there will be 3 kinds of Default Port:
  * **Port 25**: Emails sent by Protocol other than SSL, TLS will be sent via this portal
  * **Port 465**: Emails sent by Protocol SSL will be sent via this portal
  * **Port 587**: Emails sent by Protocol TLS will be sent via this portal
* In the **Authentication** field: This is a field that enables you to choose the authentication method. Maybe pass this field if you had clicked *Load Settings* button. There are 3 methods:
  * **Login**: Authentication by login to the account through Username and Password that will be filled in the next field. Most of providers will require this method.
  * **Plain**
  * **CRAM-MD5**
* In the **Username** field: This field allows you to fill in the Account name according to SMTP Provider format that you have selected.
* In the **Password** field: This field enables you to fill the *Password of Username* that you have filled. After saving, Password will be encrypted into ******
* In the **Protocol** field: This is a place allowing you to choose the protocol to send the email. If you had click Autofill button, please ignore this field. You can choose one of the providing protocols below:
  * None: When you choose **Protocol** = **None**, this means that you accept all risks that can occur with your sent emails
  * SSL stands for Secure Socket Layer. This protocol ensures that all data exchanged between the web server and the browser is secure and stay safe.
  * TLS means Transport Layer Security. This protocol can secure data or messages and validate the integrity of messages through message authentication codes. 
* In the **Return-path email** field: Leave it empty if you want to ignore this.
* In the **Send Test Email**: This is a field for you to test the operation of the extension.
  * Send From: Admins can choose one of the five Email Sender of Magento.
  * Send To: Allow entering the email address that admins want to test the email.
  * To test the email, you need to fill the email address in the `Send To` field, then click `Test Now` button.

![send test email](https://i.imgur.com/Qgi0sf5.png)

If the information you filled out is valid, a successful email message will be sent from Username to Email Test. That email has the following content:

![smtp test result](https://i.imgur.com/7aoGqeB.png)

### 2.2.3 Developer mode

From the Admin Panel, go to `Stores > Settings > Configuration > Mageplaza > SMTP`, choose **Developer** sections.

![developer mode](https://i.imgur.com/aSuMkBV.png)

* **Developer Mode**:
  * Yes: Magento will not deliver any email to the receiver
  * No: Magento will deliver email to the receiver
