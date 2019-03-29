# Loyalty Program



## Overview

In order to increase the demand for shopping, connecting between customers and store owners especially close customers, Mageplaza developed the [Loyalty Program extension](https://www.mageplaza.com/magento-2-loyalty-program/). This module can create incentive programs for loyal customers who meet certain conditions. Conditions will be based on customer information and customer order information within a certain time. In addition, the module also allows the admin to add/remove certain customers to a loyalty program, create a separate program with statistics of the current status of customers and information about the program (using static blocks).

## How to download and install

- [Download Mageplaza Loyalty Program](https://www.mageplaza.com/magento-2-loyalty-program/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


## How to use

#### Email notification when customer can join certain loyalty program

![join email](https://i.imgur.com/Q6uYlw7.png)

#### Email notification of expiration of the loyalty program

![expire email](https://i.imgur.com/TzfNAlq.png)

#### Show order statistics and information about the program

![program info](https://i.imgur.com/abOgTIb.png)

## How to Configure

 
### 1. Configuration

From the **Admin Panel**, go to `Marketing > Loyalty Program > Configuration`

![path](https://i.imgur.com/tluhkqd.png)

![configuration](https://i.imgur.com/Dkmzj2l.png)

#### 1.1. General

From the **Admin Panel**, go to `Marketing > Loyalty Program > Configuration`, select **General**

![general](https://i.imgur.com/IORqB9s.png)

- **Enable**: Select **Yes** to enable the module.
- **Enable Loyalty Page**: Select **Yes** to activate the Loyalty page
- **Select Static Block**:
  - Select the content displayed on the Loyalty page.
  - You can access `Content > Block`, click **Add New Block** to create a new **Static Block page**, or click **Edit** to edit the **Static page** you created. 
  
  ![static block](https://i.imgur.com/TaC89qL.png)

#### 1.2. Email Configuration

From the **Admin Panel**, go to `Marketing > Loyalty Program > Configuration`, select **Email Configuration**

![email](https://i.imgur.com/FflarfT.png)

- **Enable**:
  - Select **Yes** to allow sending email notifications to customers.
  - Install [Mageplaza_SMTP](https://www.mageplaza.com/magento-2-smtp/) to avoid sending to spam box.
  
- **Sender**: Select the representative to send the email notification to customer:

![sender](https://i.imgur.com/5hGRTMa.png)

- **Enable join program email**: Select **Yes** to allow email notification when customers can join certain loyalty program.

- **Join program template**:
  - Email notifications are preinstalled when customers gain certain loyalty program.
  - You can access `Marketing > Email Templates`, select **Add New Templates** to create a notification email template
  - Instructions on how to create new email templates can be found [here](https://www.mageplaza.com/kb/how-to-customize-email-template-transactional-email-magento-2.html)
  
- **Enable leave program email**: Select **Yes** to allow sending email notification when customer account expires a loyalty program.

- **Leave program template**:
  - Email notifications are pre-installed when the customer's account expires a loyalty program.
  - You can access `Marketing > Email Templates`, select **Add New Templates** to create a notification email template
  - Instructions on how to create new email templates can be found [here](https://www.mageplaza.com/kb/how-to-customize-email-template-transactional-email-magento-2.html)

### 2. Grid
#### 2.1. Manage Loyalty Program

From the **Admin Panel**, go to `Marketing > Loyalty Program > Manage Loyalty Program`

![manage loyalty program](https://i.imgur.com/tkzIbJg.png)

- This is where the Loyalty Program information is displayed.
- From the **Manage Loyalty Program** section, admin can capture basic information of Loyalty Programs such as ID, Name, Status, Number of customers, Number of Rules, Priority, and Action.
- **Action**:
  - **Delete**: Delete information on the **Manage Loyalty Program** page.
  - **Change Status**: Change the status of the selected Loyalty Program.
  - **Edit**: Redirect to the edit page of the previously created Loyalty Program
- In addition, admin can filter, change store view, hide/show columns.


#### 2.2. Create/Edit Loyalty Program

From the **Admin Panel**, go to `Marketing > Loyalty Program > Manage Loyalty Program`, select **Add new/edit**

##### 2.2.1. General

![general](https://i.imgur.com/lygWdB3.png)

- **Name**: Enter the name of a loyalty program. this is a required field.
- **Status**: Select **Enable** so that the loyalty program can be activated
- **Description**: Enter the description of the loyalty program, the information is displayed under the program name.

![description](https://i.imgur.com/Hz4ZLnZ.png)

- **Cart Price Rule**:
  - Select the rule that applies to the loyalty program. Click **Add new rule** or access `Marketing > Cart Price Rule`, select **Add new rule** to create a new rule.
  - In **Cart Price Rule**, select **Loyalty Programs**
  
  ![cart price rule](https://i.imgur.com/B6VjYqw.png)

- **From Date**: click on the calender image to select the date of applying the loyalty program.
- **To Date**: click on the calendar to select the date of the loyalty program. If left blank, default setting is unlimited loyalty program
- **Priority**:
  - Enter the priority level to filter conditions for customer satisfied the loyalty program.  
  - 0 is the highest priority. 

##### 2.2.2. Conditions

Select the conditions to apply customers to each program. The customer information will be shown at table below (2.2.3)

![conditions](https://i.imgur.com/AMf3Ftr.png)

 
##### 2.2.3. Customer

Only displayed when admin finishes creating the program

![customer](https://i.imgur.com/8P7mcyA.png)

- **Customer**: Clicking on the **Customer** field will display the table, select specific customer to add to the loyalty program.

![customer1](https://i.imgur.com/oMN5gYX.png)

- **Duration**:
  - The time that the customer can join the program which is calculated by day.
  - If left blank, there is no time limit for loyalty program by default.
  
  ![duration](https://i.imgur.com/Gpv9Obs.png)
