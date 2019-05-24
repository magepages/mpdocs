# RMA

## Overview

Are you looking for a solution to help customers return products and the store owner make rules about product returns or exchanges with ease? You can find the answer with [Mageplaza RMA extension](https://www.mageplaza.com/magento-2-rma/). Customers can request a return or exchange of one or all products in their order placed earlier. At the same time, they are also allowed to reject, manage and view requests sent to admins. On the admin side, admins can manage and approve(or refuse) to process customer requests. Admin and customers talk to each other via email which is made with available templates. This extension will help you better handle your products and bring greater customer experience. 

## How to download and install

- [Download Mageplaza RMA](https://www.mageplaza.com/magento-2-rma/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)

**Table of Contents**
- I. Configuration
  - 1. General
  - 2. Request Configuration
  - 3. Email Configuration
- II. Manage RMA Request
  - 1. Add New Request 
  - 2. Edit Request
- III. Manage RMA Status
- IV. Manage RMA Rule
- V. Manage Shipping Label
- VI. Frontend
- VII. Email


## I. Configuration

Login to the Magento Admin, go to `Sales > RMA > Configuration`.

![Imgur](https://i.imgur.com/vwwuQiw.png)

Admin can also access `Stores > Configuration >  Mageplaza > RMA` to configure the module.

![Imgur](https://i.imgur.com/j5IzPvv.png)

### 1. General

#### 1.1. General

![Imgur](https://i.imgur.com/onXevaX.png)

- Select Enable = Yes to enable the module.
- Enable RMA for Guest: select Yes to apply to customers who do not have an account but have already ordered so that they can return the item.
- Show RMA Link: Select the position of RMA link display.
  - Note:
    - If customers logged in, the link leads to the request management page.
    - If cystomers not logged in, the link leads to the **filter order** page to submit the request. If **Enable RMA for Guest = No**, hide this link.
- RMA Policy Page: Select the page to display RMA policy.

![Imgur](https://i.imgur.com/7LGAnNG.png)

- Show RMA Policy link: Select the page to display the RMA policy link. This link is only visible when the admin selects the RMA Policy Page.


#### 1.2. RMA ID Increment Pattern

![Imgur](https://i.imgur.com/8RUI738.png)

Admin select the ID increment type for RMA
- Only ID: Only display ID and does not show prefixes or suffixes.
- Custom: Display ID with prefix and suffix

![Imgur](https://i.imgur.com/n0M7Xqm.png)

2. Request Configuration

![Imgur](https://i.imgur.com/6iBKMqS.png)

- Create RMA for each item in order: Select Yes to create RMA for each item in the order.
- Allow upload attachment: Select Yes to allow attachments fro RMA request.
- Google Recaptcha: choose Yes to allow request compatible with [Google Recaptcha extension](https://www.mageplaza.com/magento-2-google-recaptcha/)
- Default Request Status: Select the default status when customer has just submitted the request.
- Customer can Cancel Request in Status: Select status in which allow customer to cancel the request.
- Admin reply under Name: Admin chooses the presenting name when replying.
  - Admin Argent Name: Displays the name of the admin account when replying the request.
  - Default Name: Displays the admin name when replying to the request.
- Default Name: Admin will enter the name to display when replying to the request.
  - Note:
    - This is a required field, the system will report an error if you leave it blank.
    - Default Name only displays Admin reply under Name = Default Name.
- Order Condition: Admin select the order condition for applying. If left blank, the conditions for all orders apply.
- RMA Information
  - Reason: Admin creates reason for RMA. You can make multiple reasons.
  - Solution: Admin creates solution for RMA. You can make multiple solution.
  - Additional Field: Admin creates additional fields for RMA. You can make multiple additional fields. 
  
  ![Imgur](https://i.imgur.com/N3CW65y.png)

3. Email Configuration

![Imgur](https://i.imgur.com/3pCG9Kv.png)

- Select Enable = Yes: Allow sending mail. RMA is compatible with [SMTP extension](https://www.mageplaza.com/magento-2-smtp/)
- Sender: Select the representative to send mail.

![Imgur](https://i.imgur.com/HO0RMVE.png)

- Admin Email: Enter the email that admin will receive the request from customer.
  - Note:
    - The emails will be separated by commas (,).
    - When a customer sends a request, an email notification will be sent to the admin via this address.
- Notice Admin when new reply: Displays notification for Admin when there is a new reply.
  - All above address: Allows for all email addresses.
  - No: Disallow notifications when having new replies.
  - Only request argent: Only allowed when requested.
- Email Notify Customer Template: Email form sent to the customer when the admin answers the comment in the conversation

