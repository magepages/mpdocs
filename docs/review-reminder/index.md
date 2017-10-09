# Review Reminder

## Overview

Customer reviews have tremendous influence over making a purchase of other consumers, especially for local business. Positive feedback  is great but also negative one certainly has its place. In conclusion, the more reviews you can collect, the more initiatives you can implement for your business to ensure the e-commerce relationship. Boosting product’s credits means boosting sales and revenues.

Magento 2 Review Reminder would like to lend you a hand in delivering friendly reminders your customers to come back and write some words for your products. This oh-so handy extension will show the way how you can flexible engender review claim email chains, follow the sending procedure and its detail reports supported by Google Analytics effortlessly.


```
*Note: Mageplaza Review Reminder is totally compatible with Mageplaza SMTP extension
```

### 1. Configuration

#### 1.1 General Configuration
A bunch of fundamental configuration will assist you in modifying reminder email chains which can be accomplished just a few click. Follow this path ``Mageplaza > Review Reminder: Configuration`` then expand the **General Configuration``

![RR1](https://i.imgur.com/HYXEpBO.png)

* In **Enable** field: select “Yes” to enable Mageplaza Review Reminder extension
* In **Email** modules
  * Click the ``Add`` button to add a reminder email
  * Click the trash can icon to delete a email
  * **Send After** to change the email delivery time. The counting will be started from the last updated cart time, a reminder email will be sent to customers.
  * In **Sender** to choose sender’s entitle. You will have 5 choices: General Contact, Sales Representative, Customer Support, Email Custom 1, Custom 2 Email
  * In **Email Template** column, you can find some pre-made email templates. Otherwise, you can customize your own template by creating a new one at sidebar ``Marketing > Email Template``. The newly created template will automatically appear in this section.
  
#### 1.2 Analytics
To keep track statistics of sent reminder emails, Magento 2 Review Reminder is well-integrate designed for Google Analytics to let you have a comprehensive overlook for SEO staffs. This function helps store admins follow and determine from where shoppers get the link back to the completed order

It manifests in this direct link in the frontend like 

![RR2](https://i.imgur.com/u2u0z67.png)

In the backend, this is Google Analytics's configuration

![RR3](https://i.imgur.com/YNpOnpX.jpg)

* In **Enabled** field: Select “Yes” to use Google Analytics tool. Then, the Source, Medium, Name, Term, Content items will be displayed automatically
* In **Source** field: the data of Source will appear in the Link back to Cart if it’s available. If you leave it blank, Source on frontend won’t be displayed
* In **Medium** field: the data of Medium will appear in the Link back to Cart if it’s available. If you leave it blank, Medium on frontend won’t be displayed
* In **Name** field: data of Name will appear in the Link back to Cart if it’s available. If you leave it blank, Name on frontend won’t be displayed
* In **Term** field: the data of Term will appear in the Link back to Cart if it’s available. If you leave it blank, Term on frontend won’t be displayed
* In **Content** field: the data of Content will appear in the Link back to Cart if it’s available. If you leave it blank, Content on frontend won’t be displayed

#### 1.3 Order Configuration
In this section you will be able to limit which products can be sent review invitation by determine its particular SKU.

![RR4](https://i.imgur.com/TSOva6H.jpg)

* In **Exclude SKUs** field
  * Products which have SKU in this field won’t be received review reminder
  * You can add multiple SKUs by a comma and a space, for instance ``24-UG06, 24-UG07``
* In **Include SKUs** field
  * Products which have SKU in this field will be received review reminder
  * You can add multiple SKUs by a comma and a space, for instance ``24-UG06, 24-UG07``

**An example of the Review reminder sent to a customer**

![RR9](https://i.imgur.com/UMhTZVS.png)

### 2. Reports
This is the place to store a number of sent Review Sent Email successfully and failed for a specific period of time. Keep track ``Mageplaza > Review Reminder: Reports`` There are two Report Time modes
* DAY
  * When you select the **DAY** mode, adjust the **From** and **To** entries, the Report Time will be displayed on a daily basis
  * If the distance between **From** and **To** is too far apart, the distance between two days in Report Time will be increased

![RR6](https://i.imgur.com/nisaCur.png) 

* MONTH: When you select **MONTH** mode, adjust the **From** and **To** entries, the Report Time will be displayed on a monthly basis

![RR7](https://i.imgur.com/XtnAGfp.png)

### 3. Logs
This is the place archiving abandoned cart emails which have been sent, including their ID, Order, Subject, Receiver, Sequence Number, Schedule At, Create At, Status (Sent / Error) và Action (Preview/Delete/Send Now)

![RR8](https://i.imgur.com/XZ7gjo1.png)

* **Action = Preview**: a pop-up window showing the email which has been sent will appear
* **Action = Delete**: the selected emails will be deleted. You can choose multiple emails at the same time
* **Action = Send Again**: the selected email will be sent to customers again. This email has the same content as the selected email
* **Clear Logs** button: Click the Clear Logs button to quickly delete all the emails stored in the logs. The next email’s ID has nothing to do with the deleted one
