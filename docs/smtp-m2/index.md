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

![Imgur](https://i.imgur.com/SfUoDG1.png)


### 1. Email logs

This can be accessed by the following  `Mageplaza > SMTP > Email Logs`. From here you can look back all the sent email from the server to customers.

![Email logs](https://i.imgur.com/k5KfDLL.png)

By clicking View in each mail, you can have a general looking at the display which how your email will reach customer’s eyes.
Hit the Clear red button to clear all the archived emails after checking carefully.

![order](https://i.imgur.com/5eos9R7.png)

### 2. Configuration

#### 2.2.1 General Configuration

Be sure you’re at Admin Panel, for general configuration `Mageplaza > SMTP > Configuration > General Configuration`

Choose Yes to enable Mageplaza SMTP on.

![SMTP on](http://i.imgur.com/4jN9BIx.png)

#### 2.2.2 SMTP Configuration Options
Still from the same structure with [SMTP](https://github.com/mageplaza/magento-2-smtp) General Configuration, scroll down to see  SMTP Configuration Options

![smtp configuration](https://i.imgur.com/VnCM6SB.png)

* In the **SMTP Provider** field: At the moment we support provider nearly 30 SMTP email service providers so feel free to choose your appropriate provider. Click Auto Fill button to fill Host, Port, Authentication and  Protocol automatically, which are compatible with the SMTP provider you had chosen. 
* In the **Host** field: Type your Support Host name and ID Address. You can also custom STMP Provider’s Host name at here. If you had clicked Auto fill button at the above field, you can give this step a free pass.
* In the **Port** field: Port is a specific gate where emails will be sent through. You can also pass this step if you had choose Auto fill from the first place. In general, there will be 3 kinds of Default Port
  * **Port 25**: Emails sent by other Protocol which different SSL will be sent through this portal
  * **Port 465**: Emails sent by other Protocol SSL will be sent through this portal
  * **Port 587**: Emails sent by other Protocol TLS will be sent through this portal
* In the **Authentication** field: Place where you decide an authentication method. If you hadn’t clicked ``Auto fill`` button before, please note those below basic methods
  * **Login**: Authentication by login to the account through Username and Password that will be filled in the next field. Most of provider will require this method.
  * **Plain**
  * **CRAM-MD5**
* In the **Account** field: Where you enter the account name matching format of the SMTP Provider you had selected
* In the **Password** field: Password of the Username. After saving, the password will be encrypted into ******
* In the **Protocol** field: Pass this step if you had chosen ``Auto fill``, or you can select one of the providing protocol below here
  * None: When you select this protocol, you have to accept all the risk may occur in the process of sending.
  * SSL stands for Secure Socket Layer. This protocol ensures that all data exchanged between the web server and the browser is secure and stay safe.
  * TLS means Transport Layer Security. This protocol secures data or messages and validates the integrity of messages through message authentication codes.
* In the **Return-path email** field: Leave it empty if you want to ignore this.
* In the **Test email recipient** field: This is the field for you to test the operation of the extension. After filling all fields, click ``Test Now`` button. If the information entered is valid, a successful email notification will be sent from Username to Email Test. That email will have the following content:

![smtp test result](https://i.imgur.com/D0cw3ta.png)


#### 2.2.3 Schedule Log Cleaner

This section is placed right under SMTP Configuration Options, which is from Admin Panel > Mageplaza > SMTP > Configuration > scroll down and expand to see Schedule Log Cleaner

![smtp cleaner](https://i.imgur.com/lK28kKF.png)

The Clean Email Log Every field limits the storage time for the email you sent. After that limited number of days, Email will automatically delete. If you do not want to delete the emails, leave the field blank.


### 2.2.4 Developer mode

* **Log Email** will supply two modes:
  * Yes: Sent emails will be saved in the Emails Log, you can preview it and having it clean up follow fixed schedule.
  * No: Sent emails won’t be archived.
* **Developer Mode**:
  * Yes: Magento will not deliver any email to receiver
  * No: Magento will deliver email to receiver
