# Customer Approval


## Overview

Managing customers from the beginning will help you control your website well, gain profits and obtain certain customer trust. With [Mageplaza's Customer Approval extension](https://www.mageplaza.com/magento-2-customer-approval/), you can definitely do that. Admin will receive an email notification when a customer successfully registers for an account and he can choose auto-approve or manually approve. Accordingly, your customers will receive email notifications of successful signing up for an account, sucessfully approved or not approved. You should install [Mageplaza_SMTP](https://www.mageplaza.com/magento-2-smtp/) to avoid your email to be sent to the spam box and it is fully compatible with the Customer Approval extension.


## Download & Install

- [Mageplaza Customer Approval](https://www.mageplaza.com/magento-2-customer-approval/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


## How to use

### Approval Account Notification

### [Customer] Successful Register

### [Customer] Approve Notification

### [Customer] Not Approve Notification

### Admin Notification



## How to configure

### 1. Configuration

Login to the **Admin Magento**, choose `Stores> Configuration> Customer Approval`.

#### 1.1. General

- **Enable**: Select `Yes` to turn on the Module.

- **Auto Approve**: If selecting `Yes`, it will automatically Approve when the customer registers in Frontend.

- **After-registration Notification**:
  - Enter a notification when the account is successfully registered.
  - If left blank, the default is "Your account requires approval".

- **Not Approve Customer Login**: Select the **Not Approve Customer Login** notification type and still login:
  - **Show Error**: Will display the **Not Approve Customer Login** error message. Displaying additional **Error Message** field.
    - **Error Message**: Enter the notification when the client account is not accepted or still has not been reviewed by the account but still logged in. If left blank, the default is "Your account is not approved".
  - **Redirect Page**: Select to redirect to the **Not Approve Customer Login page**:
    - **For Not Approve Customer Login page**

#### 1.2. Admin Notification Email

- **Enable**:
  - Select "Yes" to turn on email notification for admin when a customer successfully registers an account.
  - Install [Mageplaza_SMTP](https://www.mageplaza.com/magento-2-smtp/) to avoid sending to spam box.

- **Sender**: Select the person to send email to notify admin:

- **Email Template**: Select an email template to notify admin when the customer successfully registered an account. You can go to `Marketing> Email Templates`, select **Add New Template** to choose to create a notification email template.

- **Recipient(s)**:
  - Enter the email who receives the notification when the customer registers the account.
  - You can enter multiple email recipients at the same time and Seperated by commas.

#### 1.3. Customer Nofitication Email

- **Sender**: Select the person who sent the email to notify the customer.

##### 1.3.1. Successful Register

- **Enable**: Select "Yes" to enable email notification for customers when Successful Register.

- **Email Template**: Choose an email template to notify customers of successful account registration. You can go to `Marketing> Email Templates`, select **Add New Template** to choose to create a notification email template.
 
##### 1.3.2. Approve Nofitication

- **Enable**: Select "Yes" to enable email notification to customers when approved with a registered account.

- **Email Template**: Choose an email template to notify customers when approved with a registered account. You can go to `Marketing> Email Templates`, select **Add New Template** to choose to create a notification email template.

##### 1.3.3. Not Approve Nofitication

- **Enable**: Select "Yes" to turn on email notifications for customers when not approved with the registered account.

- **Email Template**: Select an email template to notify customers when not approved with a registered account. You can go to `Marketing> Email Templates`, select **Add New Template** to choose to create a notification email template.

### 2. Customers

#### 2.1. Grid
- Login to the **Magento Admin**, choose `Customers> All Customers`.
- This section lists the information of the registered customer with fields such as **Name, Email, Group, Approval Status, Date of Birth, etc.** Here you can manually approve or not approve with any customer you want.

#### 2.2. Edit Customer

- Click on `Edit` to edit or approve/not approve any client. With **Approval Status** shows the status of customer account registration.


![Imgur](https://i.imgur.com/4bN1jWG.png)
