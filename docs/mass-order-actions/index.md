# Mass Order Actions


## Overview

Currently, when having to process orders at the management page, the shop owner must go to each order to be able to create invoices, shipping methods, email notifications to customers in each order. From now on, with Mageplaza Mass Order Actions extension, admins can create more features at the order grid page to manage and handle multiple orders at the same time. In addition, we support Mass Order Actions compatible with some extensions such as [Delete Orders](https://www.mageplaza.com/magento-2-delete-orders/), [PDF Invoice](https://www.mageplaza.com/magento-2-pdf-invoice-extension/), [SMTP](https://www.mageplaza.com/magento-2-smtp/), [Order Archive](https://www.mageplaza.com/magento-2-order-archive/) to reduce workload for your sites. This extension helps you quickly process orders and dramatically improve your order management.


## How to download and install

- Download [Mageplaza Mass Order Actions](https://www.mageplaza.com/magento-2-mass-order-actions/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)

 
## How to Configure

### I. Configuration

Login to the **Magento Admin**, choose `Store > Configuration > Mageplaza > Mass Order Actions`.

![](https://i.imgur.com/SiLZXp3.png)

#### 1. General

![](https://i.imgur.com/sZYXvhW.png)

- Select **Enable = Yes** to enable the module. Mass Order Actions extension is compatible with Delete Orders and Order Archive.
- **Select Actions**:
  - Click the checkbox to allow the corresponding **Action** to work. Admin is allowed to select multiple actions.
  - **Position**: Create priority for **Action** to display Grid creation.
    - **Note**:
      - The smaller the **Position** value, the higher the priority.
      - If **Position** is equal, the grid will display the order of actions that are the same as the order at **Select Actions**.
- **Only change status with same state orders**:
  - Select **Yes**, the admin is allowed to change the status of the orders in the same state.
  - Select **No**, the admin is allowed to change the status of orders in the same state and not in the same order.

- **Default Tracking Carrier**: choose the default value for Carrier of Tracking Information in the Order grid or Create Shipment pop-up

#### 2. Create Invoice

![](https://i.imgur.com/eSsyb97.png)

- **Auto Select Order Status After Invoice**: Select the status, the selected status will automatically be assigned to the **Create Invoice** popup at the grid.
- **Auto Check Email Copy of Invoice**: Select **Yes** to automatically send mail to customers.


#### 3. Create Shipment

![](https://i.imgur.com/lt833fh.png)

- **Auto Select Order Status After Shipment**: Select the status, the selected status will automatically be assigned to popup Create Shipment at the grid.
- **Auto Check Email Copy of Shipment**: Select **Yes** to automatically send mail to customers.


### II. Grid

Login to the **Magento Admin**, choose `Sales > Orders`

![](https://i.imgur.com/SftT4B7.png)

Click **Actions**, where the actions will display in the **Select Actions** configuration created at the **Configuration** section.

![](https://i.imgur.com/xX13xtB.png)

#### 2.1. Create Invoice

![](https://i.imgur.com/8Bjyy1Q.png)

- **Change order status to**: Select to change the status display for the invoice.
- **Note**: If at the **Configuration**, in the **Create Invoice** section you have selected the default display status for Invoice, then at **Change order status to** will display that status.
- **Email Copy of Invoice**: Select to send a copy of the invoice to the customer via email.
- **Invoice Comments**: Add a comment for the invoice.
- **Append comment**: Tick it to display comments on email.
  - **Note**: If you do not select **Email Copy of Invoice**, the **Append Comments** checkbox will not allow you to select.
- Select **Process** to create an invoice
  - Select **Process & Print** to create and print invoices.
  - Select **Process & Print PDF Invoices** to create and print invoices in PDF format.
    - **Note**: PDF Invoice only appears when Admin install extension PDF Invoice.
- **Show message to notify of creating Invoice successfully**:

![](https://i.imgur.com/gLcdVmS.png)

- **Note**:
You can create an Invoice for Order by: Move the mouse to the Order you want to create an invoice and click **Invoice**. The next configurations you do as the same as we guided above.

![](https://i.imgur.com/0Qg9kIu.png)

#### 2.2. Create Shipment

![](https://i.imgur.com/5K3oYl2.png)

- **Change order status to**: Select to change the status display for the shipment.
- **Note**: If at the **Configuration**, in the **Create shipment** section you have selected the default display status for shipment, then at **Change order status to** will display that status.
- **Email Copy of Shipment**: Select to send a copy of the shipment to the customer via email.
- **Shipment Comments**: Add a comment for the shipment.
- **Append comment**: Tick it to display comments on email.
  - **Note**: If you do not select **Email Copy of Shipment**, the **Append Comments** checkbox will not allow you to select.
- **Add Tracking Number**: 

![](https://i.imgur.com/83IZSr8.png)

Admin chooses the delivery method for order.

- Select **Process** to create an shipment method
- Select **Process & Print** to create and print shipment.
  - Select **Process & Print Shipping Labels** to print shipment labels.
    - Note: To create **Shipping labels**, please see the guide [here](https://www.mageplaza.com/kb/how-to-create-shipping-labels-magento-2.html)
  - Select **Process & Print PDF Shipment** to create and print shipmets in PDF format.
    - **Note**: **PDF Shipment** only appears when Admin install extension PDF Invoice.
- **Show message to notify of creating Shipment successfully**:

![](https://i.imgur.com/SVtC2o2.png)

- **Note**:
You can create an Shipment for Order by: Move the mouse to the Order you want to create an invoice and click **Ship**. The next configurations you do as the same as we guided above.

![](https://i.imgur.com/RuYNFVr.png)


#### 2.3. Create Invoice and Shipment

![](https://i.imgur.com/jigeUQk.png)

- **Change order status to**: Select to change the order status 

- **Invoice**
  - **Email Copy of Invoice**: Select to send a copy of the invoice to the customer via email.
  - **Invoice Comments**: Add a comment for the invoice.
  - **Append comment**: Tick it to display comments on email.
    - **Note**: If you do not select **Email Copy of Invoice**, the **Append Comments** checkbox will not allow you to select.
    
- **Shipment**
  - **Email Copy of Shipment**: Select to send a copy of the shipment to the customer via email.
  - **Shipment Comments**: Add a comment for the shipment.
  - **Append comment**: Tick it to display comments on email.
    - **Note**: If you do not select **Email Copy of Shipment**, the **Append Comments** checkbox will not allow you to select.
  - **Add Tracking Number**: 

![](https://i.imgur.com/83IZSr8.png)


Admin selects the shipment method for order

- Select **Process** to create invoices and shipping
- Select **Process & Print Invoices + Shipment**: create, print invoices and print shipping methods.
- Select **Process & Print Invoices + Shipping Labels**: create, print invoices and print shipping labels.
  - To create **Shipping Labels**, you can refer [here](https://www.mageplaza.com/kb/how-to-create-shipping-labels-magento-2.html).
- The message displays successful generating of **Invoice and Shipment**

![](https://i.imgur.com/lF27OuA.png)

#### 2.4. Add Order Comments

- **Change order status to**: Select to change the invoice status display.
- **Comment**: Add a comment for the invoice.
- **Send Email to Customer**: Select to send email to customers.
- **Visible on Store Front**: Select to allow displaying comments on the store.
- Select **Submit Comment** to create a comment.
- Display message **Add comment successfully**:

![](https://i.imgur.com/iYOxACU.png)

#### 2.5. Change Orders Status

![](https://i.imgur.com/GV0JmT5.gif)

- Admin select to change the status of Orders.
- Admin can select multiple orders to change to the same status and not allowed to select multiple statuses for one order.
- Notice of changign status successfully:

![](https://i.imgur.com/SyayZ0g.png)

#### 2.6. Send Tracking Information

![](https://i.imgur.com/pzJRD2D.gif)

- Admins can send Tracking Information right from the Order grid by ticking on the checkbox of the desired order. Go to mass actions, select **Send Tracking Information**
- Admins can send tracking information of multiple orders at once 
- Here is the success notification of Send Tracking Information

![](https://i.imgur.com/TItDYgE.png)

Order grid > **Tracking Information**
 - **Carrier**: select a value from the droplist 
 - Type in the value for **Title** and **Number**
 - **Action**: click on **Add** button to add tracking information

#### 2.7. Add Tracking Number In Order Grid

![](https://i.imgur.com/kXKvIK7.png)

## III. Frontend

### 3.1. Display Comments

![](https://i.imgur.com/77aESAS.png)

### 3.2. Display Invoice

![](https://i.imgur.com/1c2aQTL.png)

### 3.3. Display Shipment

![](https://i.imgur.com/j45NK5m.png)

## IV. Backend

### 4.1. Display Comments

![](https://i.imgur.com/lhNd0l7.png)

### 4.2. Display Tracking Information in Order grid

![](https://i.imgur.com/lX05oEh.png)

## V. Email

### 5.1. Display Comments

![](https://i.imgur.com/9oNF54D.png)

### 5.2. Display Invoice

![](https://i.imgur.com/tqfpRHt.png)

### 5.3. Display Shipment

![](https://i.imgur.com/RNLK1wp.png)


