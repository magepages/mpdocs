# Cron Schedule

## Overview

[Mageplaza Cron Schedule extension](https://www.mageplaza.com/magento-2-cron-schedule/) assists Magento admin control and report Cron related tasks. Admins can set up, check any Cron Jobs they quickly and easily. And whenever any Cron Job is found that has problems such as Error or Missed, you will always be notified via email.

You should install [Mageplaza SMTP](https://www.mageplaza.com/magento-2-smtp/) to avoid your email being sent to the spam box. It is fully compatible with the Cron Schedule extension.


## How to download and install

- [Download Mageplaza Cron Schedule](https://www.mageplaza.com/magento-2-cron-schedule/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


## How to use

### Admin can receive notification message when running cron job gets error: 

![Imgur](https://i.imgur.com/HllkaCk.png)

### Email admin when running cron jobs, Missed and Error:

![Imgur](https://i.imgur.com/QOUziv1.png)


### Show detail Cron Job when hovering on green bars - crons run successfully

![Imgur](https://i.imgur.com/On7L9VN.png)

### Show detail Cron Job when hovering on blue bars - crons are waiting for approval to run

![Imgur](https://i.imgur.com/XGjOcPW.png)

### Show detail Cron Job when hovering on red bars - crons run failed

![Imgur](https://i.imgur.com/shswdJc.png)

### Show detail Cron Job when hovering on red bars - crons are missrun

![Imgur](https://i.imgur.com/g0gTT7Z.png)

### Show detail Cron Job when hovering on purple bars - crons are running

![Imgur](https://i.imgur.com/R0NTuly.png)

## How to Configuration

From the Admin Panel, go to `System > Cron Schedule > Configuration`

![Imgur](https://i.imgur.com/fjtqdz6.png)

### 1. Configuration

From the Admin Panel, go to `System > Cron Schedule > Configuration`, select **General**

![Imgur](https://i.imgur.com/hMLkQhi.png)

- **Backend Notifications**: Select **Yes** to display a notification when running cron jobs is fails.

![Imgur](https://i.imgur.com/UtcBEpL.png)

  - When admin click on **Here** will be directed to the **Cron Jobs Log** page.
  
- **Email Notifications**:
  - Select **Yes** to send a notification to admin when running cron jobs, report only **Missed** and **Error** Crons.
  - Install [Mageplaza SMTP](https://www.mageplaza.com/magento-2-smtp/) to avoid email sent to spam box.
- **Sender**: Select the representative to send the email to notify the customer:

![Imgur](https://i.imgur.com/ZUJdZeO.png)

- **Send To**:
  - Enter the admin email address.
  - You can enter multiple emails, each separated by commas (,).
    
- **Email Template**:
  - Select Email template sent automatically to admin.
  - You can access `Marketing > Email Templates`, select **Add New Templates** to create a notification email template
  - Instructions on how to create new email templates can be found [here](https://www.mageplaza.com/kb/how-to-customize-email-template-transactional-email-magento-2.html)
  
- **Schedule For Email**: Choose the time to send an email error message after cron jobs finish:

![Imgur](https://i.imgur.com/9AKHU5y.png)

- **Auto Clear Log Every**: 
  - Set the time to auto clear log. Calculated by day.
  - If Empty or 0, the cron jobs log will not be clean.


### 2. Grid

There are three methods to run Cron manually:
- Method 1: Run the command: `php bin/magento cron:run`
- Method 2: Click **Run All Cron Jobs** at **Manage Cron Jobs** Page.
- Method 3: Tick to choose the Cron Jobs you want to check at **Manage Cron Jobs** table, then choose **Action = Execute**.

**Note**:

- First time running Cron, all the cron schedules are in Pending Status. You can view them at **cron_schedule** table or **Cron Jobs Log** Page. 

- The second time running Cron, there are two case:
  - Schedule will be Executed if its starting time is over current time but still smaller than 2 mins (The time set at field **Missed If Not Run Within**)
  - Schedule will be assigned as Missed status if its starting time is over 2 mins 

- You can view or change the Missed Time by:
 
From the Admin Panel, go to `Stores > Configuration > Advanced > System > Cron`, change it in the field **Missed If Not Run Within**

![Imgur](https://i.imgur.com/agun0FO.png)

#### 2.1. Manage Cron Jobs

From the Admin Panel, go to `System > Cron Schedule > Manage Cron Jobs`

![Imgur](https://i.imgur.com/v9GJh07.png)

- This is where Cron Jobs information is displayed.
- From **Manage Cron Jobs**, admin can capture basic information such as: **Cron Job Code, Group Name, Status, Instance Classpath, Job Method, Time Schedule, Action**.
- **Action**:
  - **Delete**: Delete information on **Manage Cron Jobs** page.
  - **Change Status**: Change the status of selected Cron Jobs.
  - **Execute**: Running Cron Jobs.
  - **Edit**: Navigate to the edit page for information Cron Jobs created earlier. Only show **Edit** button with the crons created by admin. Not editable with premade crons. 
- **Run All Cron Jobs**: run all Cron Jobs in the table.
- In addition, admin can filter, change store view, hide/ display columns.

#### 2.2. Create New Cron Jobs

From the Admin Panel, go to `System > Cron Schedule > Manage Cron Jobs`, select **Add New**

![Imgur](https://i.imgur.com/yHp5jDL.png)

- **Cron Job Code**:
  - Enter the code of Cron Jobs.
  - This is a required field.
- **Group Name**:

![Imgur](https://i.imgur.com/GvZ9oWf.png)

- Choose the group suitable for cron job applying
- In which:
  - All groups are available on Magento EE 2.2.x
  - Magento CE 2.1.x only has two groups: Default and Index
  - Magento CE 2.2.x has three groups: Default, Index and Ddg_automation
  - Magento CE 2.3.x has four groups: Default, Index, Ddg_automation and Consumers
  
- **Status**: Select **Enable** for Cron Jobs to work.
- **Instance Classpath**:
  - Enter the path to the object, or called **namespace**
  - This is a required field.
  - Example: `Mageplaza\CronSchedule\Model\Test`

- **Job Method**:
  - Enter the Method name (Each object has several method to fill in thí field)
  - This is a required field.
  - Example: execute, recurring billing
  
- **Time Schedule**:
  - Enter the runtime of Cron Jobs.
  - Using Cron format [here](http://www.nncron.ru/help/EN/working/cron-format.htm) to set time for running cron job.
  - This is a required field.
  - Example: * * * * * means that cron will be run once every minute.


### 3. Cron Jobs Log

- From the Admin Panel, go to `System > Cron Schedule > Cron Jobs Log`

![Imgur](https://i.imgur.com/eHy1n39.png)

- This is where the Cron Jobs information is displayed running in 5 states: Error, Missed, Pending, Running, Success.
- From **Cron Jobs Log**, admin can capture basic information such as ID, Job Code, Status, Message, Total Executed Time, Created At, Scheduled At, Executed At, Finished At, Action.
- **Action**:
  - **Delete**: Delete the information on the **Cron Jobs Log** page.
  - **View**: View detailed information of running **Job Code**, only can see the cron jobs created by admin.
  - **Clear All**: Delete the entire history of running Cron Jobs before.
- In addition, admin can filter, change store view, hide/ display columns.

### 4. Cron Jobs Timetable

From the Admin Panel, go to `System > Cron Schedule > Cron Jobs Timetable`

![Imgur](https://i.imgur.com/9fjMt7a.png)

- This is the Timetable display page of the Cron Jobs Log page. It plays a role of a chart report helping admin to know the results of cron running process. 

- **Select Time**: Select the time to display Cron Jobs.
