# Stripe

## Overview

**Stripe** is a US payment gateway that allows e-commerce sites to receive payments on their sales website. Stripe has no setup fees, no monthly fees and no hidden costs. [Mageplaza Stripe extension](https://www.mageplaza.com/magento-2-stripe/) will help you integrate this payment gateway with your store. Your customers can use all debit cards, credit cards, or local payment methods like Alipay, etc. This extension also includes authorize, capture and 3D secure. These settings can be easily done by admin at the backend.

Mageplaza Stripe extension is fully compatible with [Mageplaza One Step Checkout](https://www.mageplaza.com/magento-2-one-step-checkout-extension/)

## How to download and install

- [Download Mageplaza Stripe](https://www.mageplaza.com/magento-2-stripe/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


## How to use
### For Customer

- Pay by Card
- Pay by Alipay
- Pay with Giropay

![Imgur](https://i.imgur.com/MYcGbJ8.png)

- Verify by 3D Secure

### For Admin
- Turn on/off 3D Secure
- Set up the countries using the Payment Method
- Specify Payment Action


## How to Configure
### 1. Configuration

From the **Admin panel**, go to `Stores > Configuration > Sales > Payment Method`

#### 1.1 Credential

![Imgur](https://i.imgur.com/UaBM8vk.png)

- **Environment**:
  - Admin can choose **Sandbox** environment to check payment features with Stripe
  - When you want to apply for **online payment**, admin needs to change the environment to **Production**
- **Publishable key**: Admin needs to register a **Stripe Account** to be able to use the payment methods that Stripe supports. Admin needs to correctly insert the **Publishable key** of your Stripe Account
- **Secret key**: Comes with **Publishable key**, admin also need to fill in exactly **Secret** of Stripe Account
- **Test Credential button**: Admin can check your app by clicking the **Test Credential** button

##### 1.1.1 Card

![Imgur](https://i.imgur.com/VH47B1K.png)

- **Enable**: Select **Yes** so that Customer can pay by **Card**

- **Title**: Enter the title of the payment method. This title will replace the name of the method to display in Frontend

- **Payment Action**:
  - **Authorize and Capture**: Payment will be captured immediately after the Customer place order successfully. At that moment, customers' card is deducted for the order payemnt and the Invoice will be created. 
  - **Authorize**: Payment will only be captured when admin creates Invoice for Customer's order. When the Invoice is successfully created, admin can receive money from Customer's card
  
- **Credit Card Types**:
  - Choose 1 or more cards for payment
  - Cards will be authenticated when customer completes the card number at check out. For cards not selected in this section, there will be an invalid message for the customer.
  
- **3D Secure**: Select **Yes** to use 3D Secure to verify Customer's card, thereby preventing payment fraud. Showing extra field **Force using**

![Imgur](https://i.imgur.com/eWkoUeF.png)

  - **Force Using**: Select **Yes** to compulsorily verify the card. Showing additional field **USing 3D secure when**. Only successful 3D Secure verified cards can process orders
    - There are 5 types of cards that can be verified by 3D Secure:
      - **Required**: 3D Secure authentication must be completed for the payment to be successful
      - **Recommended**: 3D Secure is supported and recommended but not required on this card. Payments succeed whether 3D Secure is used or not.
      - **Optional 1**: 3D Secure is supported but not required on this card. 3D Secure authentication may still be performed, but is not required. Payments succeed whether 3D Secure is used or not
      - **Optional 2**: 3D Secure is supported for this card, but this card is not enrolled in 3D Secure. This means that if 3D Secure is invoked, the customer is not asked to authenticate. Payments succeed whether 3D Secure is invoked or not.
      - **Not_supported**: 3D Secure is not supported on this card and cannot be invoked.

  - **Using 3D Secure When**
    - **3D Secure is recommended**: Force using 3D secure with recommended card type
    - **3D Secure is optional**: Force using 3D secure with optional card type
    
- **Payment from Applicable Countries**:
  - Select **All Countries** to allow Stripe payment method available in all countries
  - Select **Specific Countries** to limit certain countries to use this payment method
    - **Payment from Specific Countries**: The selected countries can show the **Card** payment method
    
- **Instruction**: A simple description of this payment method. The instruction will be displayed at Frontend to instruct Customer how to use this payment method

- **Sort Order**:
  - Choose display position of this payment method compared to other payment methods
  - 0 is the highest number


##### 1.1.2 Alipay

![Imgur](https://i.imgur.com/aYOsnjj.png)

- **Enable**: Select **Yes** so that Customer can pay by **Alipay**

- **Title**: Enter the title of the payment method. This title will replace the name of the method to display in Frontend

- **Payment Action**:
  - **Authorize and Capture**: Payment will be captured immediately after the Customer place order successfully. At that moment, customers' card is deducted for the order payemnt and the Invoice will be created. 
  - **Authorize**: Payment will only be captured when admin creates Invoice for Customer's order. When the Invoice is successfully created, admin can receive money from Customer's card
- **Payment from Applicable Countries**:
  - Select **All Countries** to allow Stripe payment method available in all countries
  - Select **Specific Countries** to limit certain countries to use this payment method
    - **Payment from Specific Countries**: The selected countries can show the **Card** payment method
- **Instruction**: A simple description of this payment method. The instruction will be displayed at Frontend to instruct Customer how to use this payment method
- **Sort Order**:
  - Choose display position of this payment method compared to other payment methods
  - 0 is the highest number
  
  
  ##### 1.2.3 Giropay

![Imgur](https://i.imgur.com/ASKVpoj.png)


- **Enable**: Select **Yes** so that Customer can pay by **Giropay**

- **Title**: Enter the title of the payment method. This title will replace the name of the method to display in Frontend

- **Payment Action**:
  - **Authorize and Capture**: Payment will be captured immediately after the Customer place order successfully. At that moment, customers' card is deducted for the order payemnt and the Invoice will be created. 
  - **Authorize**: Payment will only be captured when admin creates Invoice for Customer's order. When the Invoice is successfully created, admin can receive money from Customer's card
- **Payment from Applicable Countries**:
  - Select **All Countries** to allow Stripe payment method available in all countries
  - Select **Specific Countries** to limit certain countries to use this payment method
    - **Payment from Specific Countries**: The selected countries can show the **Card** payment method
- **Instruction**: A simple description of this payment method. The instruction will be displayed at Frontend to instruct Customer how to use this payment method
- **Sort Order**:
  - Choose display position of this payment method compared to other payment methods
  - 0 is the highest number

