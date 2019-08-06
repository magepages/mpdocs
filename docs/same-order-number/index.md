# Same Order Number

## Overview

With the ID configuration of the current Magento 2, when you view the ID of the Invoice, Shipment, or Credit Memo, you will not know clearly whether that ID belongs to any order. To improve this problem, Mageplaza developed the Same Order Number extension. This extension allows you to set the ID configuration of Invoice, Shipment, Credit Memo with increment ID similar to Order and especially, it can also be used with Multiple Stores.

## How to install

See installation guide [here](https://www.mageplaza.com/install-magento-2-extension/). 

## How to configure

From the Magento Admin, choose `Store > Settings > Configuration > Mageplaza Extensions > Same Order Number`

![](https://i.imgur.com/RJtzbSY.png)

### 1. General Configuration

![](https://i.imgur.com/ibkyChH.png)

- **Enable**: Choose Yes to use this module
- **Apply for**: Choose the object to apply for the extension. You can apply simultaneously to Invoice, Shipment, Credit memo.
  - `Apply for Shipment`: Shipment ID will be configured according to Order ID. In the case of multiple shipments for an order, the second shipment's ID will be followed by a suffix. For example: Order's ID is Order #003, Shipment's ID is #003, the second Shipment's ID is #003-1.
  
  ![](https://i.imgur.com/A0Iz71l.png)
  
  
  - If you don't apply the extension for Shipment, the Shipment ID will increase based on the Main Website.
  - `Apply for Invoice`: The ID of Invoice will be configured according to Order ID.
    - Same Order Number is also available for the case as automatic Invoice creation when paying with Paypal.
    - In the case of multiple Invoices for an Order, the second Invoice ID onwards will be followed by a suffix. For example, the Order ID is Order #003, the Invoice ID is #003, the 2nd Invoice ID is #003-1.
    
    ![](https://i.imgur.com/venMMt6.png)
    
    
  - If you don't apply the extension for Invoice, the Invoice ID will increase based on the Main Website.
  - `Apply for Credit Memo`: Credit memo ID will be configured according to Order ID. In the case of multiple credit memos for an order, the second credit memo onwards will be followed by a suffix. For example: Order ID is Order #003, Credit Memo ID #003, the 2nd Credit Memo is #003-1.
  
  ![](https://i.imgur.com/r1xsiOT.png)

  - If you don't apply the extension for Credit Memo, the Credit Memo ID will increase based on the Main Website.
  
### 2. Apply the extension for multiple stores

- The stores is set as the default under Default Config.
- To change the extension's configuration for each store, please go to `Store View` > Select `Store`, then untick in the `Use Website` of each option.
- The configuration in each store will be applied for that store without affecting other stores.

### 3. Frontend
#### 3.1. Invoice after applying Same Order Number extension

![](https://i.imgur.com/K2UiXH7.png)
  
#### 3.2. Shipment after applying Same Order Number extension

![](https://i.imgur.com/LkZlFLm.png)

#### 3.3. Credit Memo after applying Same Order Number extension

![](https://i.imgur.com/MenMo0l.png)






