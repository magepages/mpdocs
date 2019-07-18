# Zoho CRM

## Overview

Zoho CRM or Customer Relationship Management software is a cloud-based CRM service that helps you store and segment your customer data into different groups throughout the customer's journey. [Mageplaza Zoho CRM extension](https://www.mageplaza.com/magento-2-zoho-crm/) will help you integrate seamlessly with Zoho CRM to connect and synchronize data from Magento including **Customer, Product, Order, Invoice, Catalog Rules** to Zoho CRM with **Accounts, Contacts, Leads, Sales Orders, Invoices, Products, Campaigns** and vice versa. That will help create a smooth flow to maintain customer relationships and organize your business well. Also, data to Zoho CRM can be sent manually or automatically synchronized whenever there is any update. 


## How to download and install

- [Download Mageplaza Zoho CRM](https://www.mageplaza.com/magento-2-zoho-crm/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


## How to use

**Zoho CRM**:

- To **register** a Zoho CRM account, visit the [this link](https://www.zoho.com/crm/).

![Imgur](https://i.imgur.com/qm5DDBV.png)

- After registering an account, visit [this link](https://accounts.zoho.com/developerconsole) to get your **Zoho API** login information when clicking **Add Client ID**. There provided with **Client Id** information, **Client Secret** you need be able to connect with Zoho CRM.
![Imgur](https://i.imgur.com/0cFYd9x.png)

- Fill in the information below to **Create Zoho Client ID**. Remember to save **Redirect URIs** you filled on.


![Imgur](https://i.imgur.com/wnzzwfc.png)

- After click **Create** button, you get the Zoho API including **Client Id, Client Secret**, you need to save this information so you can connect to Zoho CRM.

![Imgur](https://i.imgur.com/H5qMPa6.png)

- To get **Grant token** information, select **Self client**.

![Imgur](https://i.imgur.com/08bkFUb.png)

- Enter the group information you want to provide access to data in a **Scope** field. For example, provide permissions for all:  **ZohoCRM.modules.ALL, ZohoCRM.settings.ALL**, only entitled Create: **ZohoCRM.modules.leads.CREATE**. You can refer more [here](https://www.zoho.com/crm/help/developer/api/oauth-overview.html#scopes)

![Imgur](https://i.imgur.com/HB3W7mb.png)

- Click **View Code** to get **Grant token**. Save this field's information to connect to Zoho CRM.

![Imgur](https://i.imgur.com/naHIYH2.png)

## How to Configure

### 1. Configuration

Login to the Magento Admin, choose `Stores > Settings > Configuration > Zoho CRM`.

![Imgur](https://i.imgur.com/0X2Otyt.gif)

#### 1.1. General Configuration

![Imgur](https://i.imgur.com/Ik3MC8w.png)

- **Enabledv: Select **Yes** to activate the module and use the feature to support data synchronization from the Magento Objects to Zoho CRM.
- **Client Id**:
  - Enter the obtained ID in Zoho CRM into the **Client Id field** to connect to Magento.
  - If left blank or incorrectly entered Id, it will not synchronize data with Zoho CRM.
- **Client Secret**:
  - Enter the Client Secret obtained in Zoho CRM.
  - If left blank or fill incorrectly in the Client Secret, it will not synchronize data with Zoho CRM.
- **Get Access Token**: Admin can get Access Token to check the connection with Zoho CRM by clicking **Get Access Token** button. After that, you will see a successful notification and remind the admin to save configuration to apply change.


#### 1.2. Queue Schedule

![Imgur](https://i.imgur.com/fJPjlgI.png)

- **Delete Queue Log After**:
   - Enter number of day in this field. System will delete Queue Log after the selected number of days. Example: You enter 5 days, then after 5 days. Queue Log will be deleted.
  - If empty, Log will no longer be deleted. 
  
- **Schedule**: Select the time to automatically send data to Zoho Module. Any Magento objects changes will be sent to Zoho Module, otherwise the unchnaged data will not be sent to Zoho Module anymore.

- **Number of Object Send per time**:
  - Enter the number of objects limit each time sending data to Zoho Module. Any pre-added queues will be prioritized to be sent to the  Zoho Module first.
  - If left blank, unlimited objects will be sent each time.
  
### 2. Manage Sync Rules

Login to the Magento Admin, choose `Stores > Zoho CRM > Synchronization Rules`.


#### 2.1. Grid

![Imgur](https://i.imgur.com/lZeBmUN.png)

- Here, the Sync Rules information includes the **Name, Magento Object, Zoho Module, Website, Pending Queue fields, etc.**
- Click **Add new** button to create a new rule. After creating rules, you can choose **Edit** to edit rules. Also admin can **delete rules, change change status (Enable / Disable), filter, and so on.**
- Select **Add Data to Queue** if you want to add more data to Queue.

**Note**: When installing Mageplaza **Zoho CRM** and creating the **Synchronization Rules**, click **Add Data to Queue** to put the previous data into Queue and synchronize data to Zoho CRM.

#### 2.2. Create Sync Rule

![Imgur](https://i.imgur.com/x7bMBs6.png)

- **Magento Object**: Select **Magento Object** to allow sending that Magento object data to Zoho CRM.
- **Zoho Module**: Here will display the **Zoho Module** corresponding to the selected **Magento Object**. For example: Magento Object is **Customer**, so the information corresponds from Zoho Module selecable are **Account, Lead, Contact**.
- **Website**: Select Website from which to get Magento Object data sending to Zoho Module. 

After selecting the object, click **Next** to start filling at **Form create/ edit Sync Rule**


##### 2.2.1. General

![Imgur](https://i.imgur.com/mTQHeiU.png)

- **Name**:
  - Enter the name of Sync rules
  - This is a required field
- **Status**: Select **Active** to rule active and synchronize data to Zoho Module.
- Data of **Magento Object, Zoho Module, Website** are taken according to the object data above before creating sync rules and can only be changed when admin changes object information before creating.

##### 2.2.2. Conditions



##### 2.2.3. Mapping Fields

Here select the corresponding Magento Fields to send data to Zoho CRM.

![Imgur](https://i.imgur.com/n2KRyIq.png)

![Imgur](https://i.imgur.com/WZcScil.png)

- **Zoho Fields**: Displays the fields managed by Zoho corresponding to the selected Magento Objects. Zoho Fields change depending on the change on selected Magento Object such as Customer, Product, etc.

- **Magento Fields**:
  - Enter the fields of the corresponding Magento object to upload data with the fields of Zoho Module.
  - Leaving this column blank will get the **Default Value** comlumn to apply to Zoho Module.
  - **Description**: Enter a description for any note of this rule. There is no value when processing data.
  - **Insert Variables**: Select the fields of the Magento object corresponding to the fields of Zoho Module.

##### 2.2.4. Queue Report

Here records **Queue data** by rules which includes information of **Object, Created On, Status. etc**. Also, there are reports of **Pending Request, Total Object, Total Request (Queue number created)**.

![Imgur](https://i.imgur.com/0PDcuTO.png)

### 3. Manage Queue

![Imgur](https://i.imgur.com/j187URg.png)

- This section records the information of Queue including **Object information, Sync Rule, Magento Object, Zoho Module, and so on.**
- Here admin can **Synchronize All** or **Synchronize with Zoho Modules** such as **Sync Account, Campaign Sync, Sync Contact, Sync Lead, Sync Order, Sync Invoice, Sync Product**. Or it can be **selected separated data** entered into Queue to synchronize to Zoho CRM. All data changes such as **create, update, delete** are included in Queue.
- When you click on **View**, it will display **Popup View Queue** to see all information of each Queue. Select **Delete** to delete Queue and **Resend** to resend Queue.

![Imgur](https://i.imgur.com/NJUQwJw.png)
