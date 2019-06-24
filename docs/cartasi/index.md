# CartaSi

## Overview

CartaSi provides payment services for many areas. Furthermore, this extension supports different payment cards, especially with customers in Italy. [Mageplaza CartaSi extension](https://www.mageplaza.com/magento-2-cartasi/) will help you integrate this payment gateway with your store. Your customers can use various cart types and also include authorize, capture. These settings are custom admin at the backend.

Mageplaza CartaSi extension is fully compatible with [Mageplaza One Step Checkout](https://www.mageplaza.com/magento-2-one-step-checkout-extension/)

## How to download and install

- [Download Mageplaza CartaSi](https://www.mageplaza.com/magento-2-cartasi/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


## How to use CartaSi

**Redirect CartaSi Checkout**: This section has been configured by admin to redirect customers to the **CartaSi Payment Gateway** to make payment there.

![Imgur](https://i.imgur.com/Kqh0vmr.png)

## How to Configure

### 1. Configuration

Login to the Admin Magento, choose `Stores > Configuration > Sales > Payment Method > CartaSi`.

![Imgur](https://i.imgur.com/6fBcCLp.png)

- **Enable**: Select **Yes** to enable the module's feature and use the payment methods supported by CartaSi.

#### 1.1. Credentials

![Imgur](https://i.imgur.com/n13nqmR.png)

- **Environment**:
  - Admin can choose **Sandbox** environment to check payment feature by CartaSi
  - When you want to apply for online payment, admin needs to change the environment to **Production**.
- **Payment Page URL**:
  - The URL to which the customer is redirected when paying with CartaSi
  - For Sandbox environment, URL = https://int-ecommerce.nexi.it/ecomm/ecomm/DispatcherServlet
  - With Production environment, URL = https://ecommerce.nexi.it/ecomm/ecomm/DispatcherServlet
  - You can refer more information [here](https://ecommerce.nexi.it/specifiche-tecniche/codicebase/introduzione.html)
- **Merchant Alias & MAC Calculation Secret Key**:
  - Depending on the solution Admin wants to use when checkout, **Merchant Alias and MAC Calculation Secret Key** will change
  - There are 4 main solutions: **Simple payment** in Frontend, **Periodic payment/ OneClick in Frontend, Simple payment in Backend, Recurring payment in Backend**
  - You can refer [here](https://ecommerce.nexi.it/area-test)

- **Get Test URL** button: Admin can check your app by clicking the **Get Test URL** button. If **Merchant Alias & MAC Calculation Secret Key** is filled correctly, admin can check one sample order by CartaSi payment method.

![Imgur](https://i.imgur.com/IxFfObI.png)

#### 1.2. General Setting

![Imgur](https://i.imgur.com/LTKmfba.png)

- **Title**: Enter the title of the payment method displayed on the checkout page.
- **New Order Status**:
  - Set Status for Order to be set by CartaSi payment method
  - There are 2 Statuses that Admin can choose: **Processing and Suspected Fraud**
- **Payment Action**:
  - **Authorize and Capture**: Payment will be Capture immediately after the Customer place order successfully. At that moment, the Customer's card will pay for the order and the Invoice will be created
  - **Authorize**: Payment will only be captured when admin creates an Invoice for Customer's order. When the Invoice is successfully created, admin can receive money from Customer's card
- **Payment Page Language**: Choose 1 of 10 languages to display on the CartaSi payment page
- **Payment from Applicable Countries**:
  - Select **All Countries** to have Card payment method available in all countries
  - Select **Specific Countries** to limit certain countries to use this payment method
    - **Payment from Specific Countries**: The selected countries will be shown the Card payment method
- **Minimum Order Total**:
  - Minimum amount setting for the whole order (including ship, tax, discount) to be paid by CartaSi
  - When **Order Total** reaches this limit, the new CartaSi payment method is displayed in Frontend
- **Maximum Order Total**:
  - Set the maximum amount of the whole order (including ship, tax, discount) to be paid by CartaSi
  - When Order Total exceeds this limit, CartaSi payment method will be hidden in Frontend
- **Debug mode**: If Yes, diagnostic information is stored in log files on the Magento web server.
- **Sort Order**:
  - Specify the display position of this payment method compared to other payment methods
  - 0 is the largest number. The smaller the number, the more priority will be displayed in the first position.

### 2. Order Frontend

![Imgur](https://i.imgur.com/fQ4zMMy.png)
