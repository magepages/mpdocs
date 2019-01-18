# Multiple Coupons


## Overview

Magento basically does not support applying multiple coupons to a Cart. [Mageplaza Multiple Coupons extension](https://www.mageplaza.com/magento-2-multiple-coupons/) will help you solve that problem. This module supports applying multiple coupons in 3 commonly used pages including **Shopping Cart Page, Checkout Page, Admin Order Page**. Customers can use all the coupons they have to receive the maximum discount. With this wonderful experience, store will retain loyal Customers and entice more new customers. Bu that increase store revenue significantly.

This extension is fully compatible with [Mageplaza One Step Checkout](https://www.mageplaza.com/magento-2-one-step-checkout-extension/)


## Download and Install

- [Mageplaza Multiple Coupons](https://www.mageplaza.com/magento-2-multiple-coupons/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)



## How to use


### 1. Shopping Cart page

![Imgur](https://i.imgur.com/w2xkNgj.png)

### 2. Magento Default Checkout page

![Imgur](https://i.imgur.com/3q4M7rn.png)

### 3. One Step Checkout page

![Imgur](https://i.imgur.com/6kNAL6p.png)

### 4. Admin Order page

![Imgur](https://i.imgur.com/N0urBoL.png)


## How to Configure

### 1. Configuration

From the **Admin panel**, go to `Stores > Configuration > Mageplaza > Multiple Coupons`

![Imgur](https://i.imgur.com/51MtkVM.png)

- Select **Enable = Yes** to enable the module

- **Apply for**: Select Page to apply Multiple Coupon

- **Coupon Limit Qty**:
  - The coupon limit can be used for 1 Cart
  - Please note that with different coupon types, when used at the same time, the coupon is applied in order from the beginning to the end or until the subtotal reaches 0
  - If left this field blank or equal to 0, the coupon number can be used unrestricted
  
**Unique Coupon Code**:
  - It is helpful to avoid multiple discount coupons used in the same cart as the owner may suffer loss
  - When the specific coupon in this field is applied, all other coupons will be canceled (including before or after the unique coupon)
  - For multiple coupons, the customer needs to remove unique coupon
  
  
### 2. How to create a coupon

To create a coupon, admin needs to go to `Marketing> Promotions> Cart Prices Rule`

Please see details guide [here](https://www.mageplaza.com/kb/how-create-coupon-codes-in-magento-2.html)
