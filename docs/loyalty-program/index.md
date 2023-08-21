# Loyalty Program



## Overview

For increasing the demand for shopping, connecting between customers and store owners especially close customers, Mageplaza developed the Loyalty Program extension. This module can create incentive programs for loyal customers who meet certain conditions. Conditions will be based on customer information and customer order information within a certain time. In addition, the module also allows the admin to add/remove certain customers to a loyalty program, create a separate program with statistics of the current status of customers and information about the program (using static blocks). You should intall Mageplaza SMTP to avoid sending your email to spam box. It is fully compatible with Loyalty Program. 

## How to download and install

- Download Mageplaza Loyalty Program
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


## How to use

#### Email notification when customer can join certain loyalty program

![](https://i.imgur.com/ScYjhpZ.png)

#### Email notification of maintaining the loyalty program

![](https://i.imgur.com/139zNez.png)

#### Email notification of downgrading loyalty program

![](https://i.imgur.com/bSpeYcV.png)

#### Email notification of expiration of the loyalty program

![](https://i.imgur.com/9zM6wAN.png)

#### Show order statistics and information about the program

![](https://i.imgur.com/Ic1vYXs.png)


## How to Configure

 
### 1. Configuration

From the **Admin Panel**, go to `Marketing > Loyalty Program > Configuration`

![](https://i.imgur.com/TdXJnTy.png)

![](https://i.imgur.com/Dkmzj2l.png)

#### 1.1. General

From the **Admin Panel**, go to `Marketing > Loyalty Program > Configuration`, select **General**

![](https://i.imgur.com/HfKEPsa.png)

![](https://i.imgur.com/h19kIKj.png)

- **Enable**: Select **Yes** to enable the module.
- **Enable Loyalty Page**: Select **Yes** to show the Loyalty page at frontend
- **Select Static Block**:
  - Select the content displayed on the Loyalty page.
  - You can access `Content > Elements > Blocks`, click **Add New Block** to create a new **Static Block page**, or click **Edit** to edit the **Static page** you created. 
  
  ![](https://i.imgur.com/TaC89qL.png)
  

- **Order Statistic Row**: show the order statistics by row. Click **More** to add the data, or click the Bin icon to delete the data 
  - **Row Name**: Insert the row name
  - **Order Condition**: Choose the conditions to show orders. There are 3 options: Number of Order, Total Order Amount, Average Order Amount
  - **Order Status**: Choose the order status
- **Order Statistic Column**: show the order statistics by column. Click **More** to add the data, or click the Bin icon to delete the data
  - **Column Name**: Add the column name
  - **Duration**: Choose the time to show statistics. There are four options: Day, Month, Year, Custom
  - **Start Time**: Starting time to calculate the statistic
  - **End Time**: Finishing time to get the statistic
- **Note**: If Day or Month or Year is chosen for Duration, Start Time and End Time must be in numbers only. The numbers indicate the length of time.

Eg: Duration = Month, Start Time = 2, End Time = 0 (or left blank).

=> The result is the statistics of 2 months earlier.

As for Custom duration, Start Time and End Time can be in text which is in relative formats.

Eg: Start Time = first day of the previous month, End Time = first day of this month.

=> The result will be the statistics of last month.

- **Add to Schedule**: Choose **Yes** to enable automatic checking on Customer Apply Program. If your website deals with a lot of customer data and orders, applying a schedule helps speed up the automatic checking process.

***Note***: When you select **Yes** in the field **Add to Schedule**, the **Apply Program** button in the Manage Loyalty Program Grid will be hidden. This is because running both simultaneously can conflict with the system and cause errors on the website. Display more fields:

  - **Apply Schedule**: Set the time for the system to check the apply program automatically. The default value is `0 0 * * *`, meaning it will auto-run every day. For more details, please check <a href="https://www.mageplaza.com/faqs/how-configure-cronjob.html" target="_blank" rel="dofollow noopener">here</a>.

***Note***: To check faster, you can also run this command line:
```
php bin/magento mp-loyaltyprogram:apply
```

#### 1.2. Email Configuration

From the **Admin Panel**, go to `Marketing > Loyalty Program > Configuration`, select **Email Configuration**

![](https://i.imgur.com/cQc6Pxu.png)

- **Enable**:
  - Select **Yes** to allow sending email notifications to customers.
  - Install Mageplaza_SMTP to avoid sending to spam box.
  
- **Sender**: Select the representative to send the email notification to customer:

![](https://i.imgur.com/5hGRTMa.png)

- **Enable join program email**: Select **Yes** to allow email notification when customers can join certain loyalty program.

- **Join program template**:
  - Email notifications are auto-sent when customers gain certain loyalty program.
  - You can access `Marketing > Email Templates`, select **Add New Templates** to create a notification email template
  - Instructions on how to create new email templates can be found [here](https://www.mageplaza.com/kb/how-to-customize-email-template-transactional-email-magento-2.html)
  
  
- **Enable Maintain Program Email**: Select **Yes** to enable sending email notification of maintaining loyalty program when customers are still satisfy the program's conditions 

- **Maintain Program Email Template**: 
  - Email notifications are auto-sent when customers maintain certain loyalty program.
  - You can access `Marketing > Email Templates`, select **Add New Templates** to create a notification email template
  - Instructions on how to create new email templates can be found [here](https://www.mageplaza.com/kb/how-to-customize-email-template-transactional-email-magento-2.html)
  
- **Enable Downgrade Program Email**: Select **Yes** to enable sending email notification of downgrade loyalty program

- **Downgrade Program Email Template**: 
  - Email notifications are auto-sent when customers are downgraded to certain loyalty program.
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

![](https://i.imgur.com/f2YsNnS.png)

- This is where the Loyalty Program information is displayed.
- From the **Manage Loyalty Program** section, the admin can capture basic information of Loyalty Programs such as ID, Name, Status, Number of customers, Number of Rules, Priority, and Action.
- **Actions**:
  - **Delete**: Delete information on the **Manage Loyalty Program** page.
  - **Change Status**: Change the status of the selected Loyalty Program.
  - **Edit**: Redirect to the edit page of the previously created Loyalty Program
- In addition, the admin can filter, change store view, hide/show columns.
- Apply Programs: Apply all programs for customers that are set in each program.

#### 2.2. Create/Edit Loyalty Program

From the **Admin Panel**, go to `Marketing > Loyalty Program > Manage Loyalty Program`, select **Add new/edit**

##### 2.2.1. General

![](https://i.imgur.com/rK7eNTX.png)

- **Name**: Enter the name of a loyalty program. this is a required field.
- **Status**: Select **Enable** so that the loyalty program can be activated
- **Duration**: Set the active time for the loyalty program. There are four options: Permanent, Day, Month, Yea. In which, Permanent means that Loyalty Program will be active unlimited time
- **Description**: Enter the description of the loyalty program, the information is displayed under the program name. Admin can add images, change the description to HTML, adit the description types. 

![](https://i.imgur.com/Ca9QbwK.png)


- **Priority**:
  - Enter the priority level to filter conditions for customers satisfied the loyalty program.  
  - 0 is the highest priority. 
  
  **Note**: Choose the cart price rule to apply to your Loyalty Program. Navigate to **Marketing > Cart Price Rule**, select **Add new rule** to create a new rule. In each rule, choose a suitable option in the field **Loyalty Programs**. Customers who meet these Loyalty Programs criteria can use the coupon code created from this rule.

![](https://i.imgur.com/XMocm2a.png)

##### 2.2.2. Conditions

Select the conditions to apply customers to each program. The customer information will be shown at table below (2.2.3)

![](https://i.imgur.com/AMf3Ftr.png)

 
##### 2.2.3. Customers

Only displayed when admin finishes creating the program.

![](https://i.imgur.com/uzBQ6KL.png)

- Click **Select**, choose one or many customer groups to add to the loyalty program, then **Save**. 

![](https://i.imgur.com/xyXHNj7.png)

- Click **Add Customer** to add more customer to the program. The successfully added customers will be display in the grid below.

![](https://i.imgur.com/eBVt8DG.png)

#### 2.3. Manage Customer

From the **Admin Panel**, go to `Marketing > Loyalty Program > Manage Customer`

![](https://i.imgur.com/Qfl2Jsy.png)

- Here showing customer information in their Loyalty Program
- From **Manage Customer**, admin can have basic customer information such as: ID, Customers Name, Email, Customer Group, Loyalty Program, Expired Date, Action.
- In addition, admin can filter, change the storeview, show/hide the column. 

### 3. REST API 

Mageplaza Loyalty Program support users in using REST API to perform actions related to Loyalty Program: using admin access to get information of Loyalty Program, add/edit/delete Loyalty Program, add customer to Loyalty Program , using customer access to get information of Customer's Loyalty Program Dashboard &Change Email Notify 

View details of requests supported by Mageplaza Loyalty Program [here](https://documenter.getpostman.com/view/10589000/T1DmEepF?version=latest)

View REST API Guidelines of Magento 2 [here](https://devdocs.magento.com/guides/v2.4/rest/bk-rest.html). View guidelines to create tokens [here](https://devdocs.magento.com/guides/v2.4/get-started/authentication/gs-authentication-token.html). 

### 4. GraphQl

#### 1. How to install

Run the following command in Magento 2 root folder:

```
composer require mageplaza/module-loyalty-program-graphql
php bin/magento setup:upgrade
php bin/magento setup:static-content:deploy
```
 
Note: Magento 2 Loyalty Program GraphQL requires installing Mageplaza Loyalty Program in your Magento installation.

#### 2. How to use

To perform GraphQL queries in Magento, please do the following requirements:

- Use Magento 2.3.x or higher. Set your site to developer mode.
- Set GraphQL endpoint as `http://<magento2-server>/graphql` in url box, click Set endpoint. (e.g. http://dev.site.com/graphql)
- Mageplaza Loyalty Program GraphQL supports customers to get Loyalty Dashboard information and change email notify
- To view the queries that the Mageplaza Loyalty Program GraphQL extension supports, click [here](https://documenter.getpostman.com/view/10589000/TVsrEoVD)


