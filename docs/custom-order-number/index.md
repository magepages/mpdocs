# Custom Order Number
## Overview

For the ID of Order, Invoice, Shipment or Credit Memo, the default ID of Magento only includes the numbers and the ID of the first order is 000000001. Therefore, with newly established websites, the order quantity is low, which makes customers feel that this store has no the high reliability. Maybe the reason is that the customers purchase the products on store
there's no or the prestige of this website is not large so the number of orders is not much.


## Download & Install
- [Mageplaza Custom Order Number]()
- [How to install](https://www.mageplaza.com/install-magento-2-extension/)

## How to configure
### General Configuration

* **Enable**: Choose Yes to enable this module

### Order Number

* **Enable**: Choose Yes to use the feature that allows configuring the changing ID of the Order
* **Pattern**: 
    * Enter the format for the Order ID. For instance, ORD-[store_id]-[yy]-[mm]-[dd]-[2N]-[2counter]
    * Only support some variables as: [store_id], [yy], [mm], [dd], [2N], [2counter], [4AN], [4A], [4N], [store_code]
    * If the format of supported variables is entered wrong, the order ID will be displayed under the text
    
* **Counter Start From**:
    * Enter the counter when using the variable [counter]
    * The next order's ID will start with the +1 entered, the count will incrementally increase
    * For example, when you use the variable [2counter], if you enter 04, the next order ID will start from 04
    
* **Counter by Step**:
    * Enter the distance number order ID of the next orders
    * For example, if you enter 2, the order ID of next orders will be separated by 2 units and gradually increased

* **Counter by Store**:
    * If you choose Yes, the order ID of different stores will be merged and increased in succession. *For instance*: Store A has 45 orders and the order ID is 45. Store B has 30 orders and the order ID is 30. When customers order in the store A, the order ID of store A is 46, and the order ID of store B if it has the next order is 31.
    * If you choose No, the order ID of different stores will be increased separately. *For instance*: Store A has 50 orders and the order ID is 50, store B don't have any order. When customers purchase the products in the store B, the order ID of store B is 51.
    
* **Reset Counter**:
    * **Reset Counter = Daily**: All fields relating to the counter will be reset to 0 at 00h every day
    * **Reset Counter = Weekly**: All fields relating to the counter will be reset to 0 at 00h the first day of the week
    * **Reset Counter = Monthly**: All fields relating to the counter will be reset to 0 at 00h the first day of the month
    * **Reset Counter = No**: All fields relating the counter will NOT be reset to 0, all information will be remained the same
    
* **Reset Now Button**: When clicking on this button, all fields relating to the counter will be reset to 0 instantly

### Invoice Number

* **Enable**: 
    * Choose Yes to use the feature that allows changing the ID of Invoice
    * Choose **Same as Order Number** to use the configuration the same as the configuration of **Order Number**

* **Replace**
    * Enter the characters you want to change if you choose the same configuration as the **Order Number**
    * If leaving this field blank, after you save, the Invoice ID will not change
    
* **To**:
    
    * If leaving this field blank, the value in front of the **Replace** field will be used. This value is the same as the value entered in the **Order Number**  
    * This value will replace the value of **Replace** field if you enter correct
    
* **Pattern**:
    * Enter the format for the Invoice ID. For instance, INV-[store_id]-[yy]-[mm]-[dd]-[2N]-[2counter]
    * Only support some variables as: [store_id], [yy], [mm], [dd], [2N], [2counter], [4AN], [4A], [4N], [store_code]
    * If the format of supported variables is entered wrong, the Invoice ID will be displayed under the text 
    
* **Counter Start From**:
    * Enter the counter when using the variable [counter]
    * The next Invoice's ID will start with the +1 entered, the count will incrementally increase
    * For example, when you use the variable [2counter], if you enter 04, the next order ID will start from 04

* **Counter by Step**:
    * Enter the distance number Invoice ID of the next invoices
    * For example, if you enter 2, the Invoice ID of next invoices will be separated by 2 units and gradually increased
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

  
    
