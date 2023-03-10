# Backend Tools

## Introduction

Magento 2 Backend Tools offer a range of backend management solutions that helps store admins get access to the customer account easily, reindex the backend and flush cache quickly, without any complex technical knowledge. These functionalities help merchants highly reduce their workload and enhance users' experience in the backend.

## How to configure

### 1. Configuration

Login to Magento Admin, then go to `Stores > Configuration > Mageplaza > Backend Tools`

![](https://i.imgur.com/jVVfSLH.png)

- **Enable Login as Customer**:
  - Select **Yes** to enable the module, admin can login to customers’ accounts from backend
  - Display the button Login as Customer on Customer Edit and Order View page in the backend

![](https://i.imgur.com/ZUWy527.png)

![](https://i.imgur.com/kUB4Y0u.png)

- **Enable Quick Flush Cache:**
  - **Yes (Automatic)**: automatically clear cache when admin saves information: product, configuration, etc. at backend. After saving the information configured, always notice that the cache was successfully flushed.

![](https://i.imgur.com/2JFDNtc.png)

  - **Yes (Manual)**: Show a message after saving configuration. Instead of clicking **Cache Management** to move to the **Flush Magento Cache**, now you only need to click **Flush Now** link and wait for a few seconds, the cache will be cleared.

![](https://i.imgur.com/pteWVUb.png)

  - **No**: Disable auto-flushing cache and keep displaying default Magento’s Flush Cache request message.

![](https://i.imgur.com/VvKNpRU.png)

- **Enable Quick Reindex**:
  - Select **Yes** to automatically reindex by clicking **Reindex Now**
  
![](https://i.imgur.com/aA1Uk5U.png)

  - After the reindex is completed, you will receive a notification

![](https://i.imgur.com/EC4TrnY.png)

### 2. Login as Customer Logs

![](https://i.imgur.com/XsBOClA.png)

From **Admin panel**, go to `Report > Customer > Login as Customer Logs`

- This allows recording all login transactions as customers of any admin at backend.
- Admin cannot delete or edit the Log
- Admin only can export the specific logs that they want in CSV or XML forms.

### 3. Index Management

From **Admin panel**, go to `System > Index Management`

![](https://i.imgur.com/pckBH5Q.png)

#### 3.1. Reindex one indexer:

At the **Action** box, click on **Reindex Data** to reindex each indexer separately.

![](https://i.imgur.com/hvRRinh.png)

#### 3.2. Reindex some indexers:

- Click to select the indexers you need to reindex
- Select **Reindex Data**
- Click **Submit**

![](https://i.imgur.com/0j4q32o.png)

#### 3.3. Reindex all the indexers

- Click on **Mass Actions** box, choose **Select All**
- Select **Reindex Data**
- Click **Submit**

![](https://i.imgur.com/fUn2aV0.png)

#### 3.4. User roles with reindex

**Step 1**: Go to Admin > System > User role

![](https://i.imgur.com/Ch0qBSS.png)

**Step 2**: Add a new role resource

Fill in role information at Role Information section

![](https://i.imgur.com/3H9By5B.png)

Select index management role at **Role Resources** section, then click on **Save Role**

![](https://i.imgur.com/3aIoSyz.png)

**Step 3**: Set role users for admin accounts, then click on Save Role to finish.

![](https://i.imgur.com/hveeS2l.png)



