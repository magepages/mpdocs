# Name Your Price

## Overview

When shopping, customers would love to bargain for their favored products. [Mageplaza Name Your Price extension](https://www.mageplaza.com/magento-2-name-your-price/) can help them gain this little joy. Customers can request a price that he wants to buy for the owner. All requests are sent to the server, and the admin may approve or reject this request according to the suitability of the price offered by the customer. Of course, approve or reject will be notified to Customer by email. When the price is released, Customer will buy the Product at that price for a certain period of time. If you do not like the price that Admin has approved, Customer can completely cancel it and request a new price. However, only the Product installed by the admin can be sent.

- Name Your Price supports these product types: Simple, Configurable, Downloadable, Bundle
- Name Your Price is compatible with [Mageplaza One Step Checkout](https://www.mageplaza.com/magento-2-one-step-checkout-extension/) and [Mageplaza SMTP](https://www.mageplaza.com/magento-2-smtp/).

## How to download and install

- [Download Mageplaza Name Your Price](https://www.mageplaza.com/magento-2-name-your-price/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


## How to Use

With this extension, customers can conduct the following actions:
- **Send a request quantity and price of products to admin**

![](https://i.imgur.com/skUc8Qy.png)

- **Buy with request price for a certain period of time**
- **Cancel the previously paid price of a product**

![](https://i.imgur.com/BVOkF7G.png)

- **Review details of all products that have been successfully bargained**

![](https://i.imgur.com/FZPlAnO.png)

## How to Configure

From the **Admin panel**, go to `Marketing > Name Your Price`

![](https://i.imgur.com/FK7fEc5.png)


### 1. Configuration

#### 1.1. General Tab

![](https://i.imgur.com/anThjqB.png)

- **Enable**: Select **Yes** to enable the extension
- **Customer Group**: Only selected customer groups can send requests to the store admins
- **Apply for**: Products that meet the conditions here will display the **Price Bargain** button for the Customers to send the request to the store owner.
- **Minimum price type**: set the lowest price calculation type that Customer can give to admin, includes:
  - **Fixed Price**: The lowest price is a fixed price admin set. All bargain products chosen will be applied to this fixed lowest price. 
  - **Percent Price**: The lowest price is taken as the percentage of the original price of each Product. All products that are applied may have different lowest prices. 
- **Minimum Price Value**: Set the value of the lowest bargain price
  - **Fixed Price**: The value filled in this field will be the lowest bargain price for all products. The price unit bases on the **Default Display Currency** of your site
  - **Percent**: Fill in the % value. The lowest price is equal to the original price multiply with the % value entered in this section then divided by 100.
- **Apply for Tax**: The price that customer offers is not yet included Tax. Select **Yes** to apply Tax for this price.
- **Allow Using Discounts**: Select **Yes** to allow discounts to be available for the order containing admin approved bargain products
- **Limit using Time**:
  - Calculated in days
  - During this time, customers will be able to purchase products at the price they requested (as long as the admin has approved request).
- **Bargain by Qty**:
  - Select **Yes** to display the **Qty Step** field when customers request the bargain price
  - Customer is required to buy x items in one cart
  
  
#### 1.2 Bargain Form

![](https://i.imgur.com/64JbHym.png)

  - **Use Popup**: Select **Yes** to use a popup to display the form request
  - **Additional Fields**: The selected fields will be displayed on the front-end, not required to fill in these fields.
  - **Button Label**: Set the label to open bargain price form. **Default = Price Bargain**.
  
  
#### 1.3 Notification Email

![](https://i.imgur.com/DOVTAG4.png)

- **Enable**: Select **Yes** to allow Notification Email

- **Sender**:
  - Select Email Representative sent to customers.
  - 1 of 5 default Magento representative emails are: Sales, Customer Service, General Contact, Custom 1, Custom 2
  - To edit **Nickname** and **Email**, admin can refer [here](https://www.mageplaza.com/kb/how-change-store-email-addresses-magento-2.html)
  
- **Admin Email**:
  - When customers bargain on the product and Submit the request, the notification email will be sent to the admin via this email.
  - You can enter multiple emails here, they must be separated by commas
  
- **Email Confirm**:
  - Select the Confirmation email template sent to the customer
  - Confirm email will be sent to customers after they send a bargain request
  - To change **Email Confirm Template**, Admin can create another Email Template in `Marketing> Email Template`
  - Instructions for creating new Email Template [here](https://www.mageplaza.com/kb/how-to-customize-email-template-transactional-email-magento-2.html).
  
- **Email Approve**:
  - Select the Approve email template sent to the customer
  - Approve email will be sent to customers after their bargain request is accepted
  - To change **Email Approval Template**, Admin can create another Email Template in `Marketing> Email Template`
  - Instructions for creating new Email Template [here](https://www.mageplaza.com/kb/how-to-customize-email-template-transactional-email-magento-2.html).
  
- **Email Reject**:
  - Select the Reject email template sent to the customer
  - Rejection email will be sent to customers after their bargain request is rejected
  - To change **Email Rejection Template**, Admin can create another Email Template in `Marketing> Email Template`
  - Instructions for creating new Email Template [here](https://www.mageplaza.com/kb/how-to-customize-email-template-transactional-email-magento-2.html).
  
  
### 2. Bargain Requests

- Go to `Marketing > Name Your Price > Bargain Requests`

#### 2.1. Grid

![](https://i.imgur.com/V6NKO5A.png)

- Grid includes information: **Id, Product Name, SKU, Original Price, Bargain Price, Quantity, Status, Customer Name, Customer Email, View Store, Submitted Date, Order's Id, Action**
- Admin can conduct some actions such as **Delete, Approve, Reject**
- Also, admin can **Sort, Filter, Search** the **Bargain Request**.


#### 2.2. Edit Request

![](https://i.imgur.com/sqAlXsH.png)

- Admin can quickly **Approve** or **Reject** a request when editing the request

##### 2.2.1. General tab

![](https://i.imgur.com/AX59S3C.png)

- **Customer Name**: Display customer name submitted. Admin cannot edit this field
- **Customer Email**: Display customer email. Admin cannot edit this field
- **Product Name**: Show the Bargained Product name. Admin cannot edit this field
- **SKU**: SKU of the product. Admin cannot edit this field
- **Original Price**: Original price of the product. Admin cannot edit this field
- **Qty**: Quantity of products that customers want to buy with bargain price
- **Bargain Price**:
  - The price that customers want to pay for the product.
  - Admin has the right to edit the price if it is not appropriate.
- **Store view**: Display store view - where the customer submits the request. Admin cannot edit this field
- **Submitted Date**:
  - The date when the customer sends information to bargain for his product.
  - This field is not allowed to edit.
- **Status**:
  - Show the status of Bargain Price.
  - **Pending**: Admins are review and not yet accept the bargain price.
  - **Approved**: Admin approved the bargain price from customers. They can buy the products with bargain price in the specific time allowed
  - **Rejected**: Admin does not agree with bargain price. Customers cannot buy products at that price
  - **Reject by customer**: When customer cancel Request
  - **Closed**: when Request has expired
- **Order’s Id**:
  - Display the order ID of purchased products with bargain price 
  - Not displayed if the customer has never had an order with the product above.


##### 2.2.2 Message

![](https://i.imgur.com/6x4SdEn.png)

- **Customer’s Message**:
  - Display the message of the customer along with bargain products
  - Admin cannot edit the message
  - These Messages are displayed in Frontend
- **Admin’s Response**:
  - Display Admin Reply to customers' messages 
  - The admin's response will be included in the email to notify the customer when the admin clicks on **Save & Approve** or **Save & Reject**
  - These responses are displayed in Frontend
