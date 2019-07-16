# Worldpay

## Overview

**WorldPay** is America's most reliable payment processing provider. [Mageplaza WorldPay extension](https://www.mageplaza.com/magento-2-worldpay/) helps integrate Worldpay to support online payment by card or Paypal, allowing customers to save credit card information at the first purchase to use it for the next payment. Customer can manage saved credit card information and delete card information at any time. In addition, the module also supports direct payment at checkout page (iframe) and support 3D Secure.

Mageplaza WorldPay extension is fully compatible with [Mageplaza One Step Checkout](https://www.mageplaza.com/magento-2-one-step-checkout-extension/).


## How to use

- **Worldpay**: to register an account with Worldpay, you can access [this link](https://online.worldpay.com/), click **Sign up** then fill in the required information below:

![Imgur](https://i.imgur.com/Uoamumq.png)

- After registration is complete, the system show the thanks and requests to check and confirm via email registered:

![Imgur](https://i.imgur.com/Y3BGwCB.png)

- Open your registered mail, click the link below:

![Imgur](https://i.imgur.com/7BZQDBu.png)

- You need to enter the password again then click **Confirm Email** to complete the registration:

![Imgur](https://i.imgur.com/x6NHvBq.png)

- At the interface of worldpay, click `Settings> Orders`:

![Imgur](https://i.imgur.com/11htpNt.png)

- At **Orders**, set **Authorisations = Yes** to enable the **API** feature:

![Imgur](https://i.imgur.com/3NI5IYO.png)

- After enabling **Authorisations**, click API Keys, get the **Service key** and **Client key** to fill in the **Configuration** (will be guided at the second part):

![Imgur](https://i.imgur.com/ZNewEmz.png)

- **Display Checkout**: display by 2 types when paying by Worldpay:
  - **Magento Default**:
  
  ![Imgur](https://i.imgur.com/gNMbNhT.png)

  - **Iframe Checkout**:
  
  ![Imgur](https://i.imgur.com/uywkLM0.png)

- Display the **Payment Method** in the Order Backend:

![Imgur](https://i.imgur.com/Lr7xW2Z.png)

- **Stored Payment Methods**: Here save the credit card information that customers have saved at the previous purchase. If you do not want to save old or unused credit cards, you can click delete to remove them.

![Imgur](https://i.imgur.com/Gd38C4g.png)

## How to Configure

Login to the **Magento Admin**, choose `Stores > Configuration > Sale > Payment Methods`:

- At **WorldPay** Payment Method, click **Configure**:

![Imgur](https://i.imgur.com/YG5yGry.png)

### 1. Credentials

Login to the **Magento Admin**, choose `Stores > Configuration > Sale > Payment Methods`, at WordPay Payment Method, click `Configure > Credentials`:

![Imgur](https://i.imgur.com/THav3es.png)

- **Environment**:
  - Admin can choose **Sandbox** environment to check payment features of methods.
  - When you want to apply for online payment, admin needs to change the environment to **Production**.
- **Service Key**:
  - Copy **Service Key** above and paste it here.
  - If left blank or incorrectly entered, the payment method will not be connected.
- **Client Key**:
  - Copy **Client Key** above and paste it here.
  - If left blank or incorrectly entered, the payment method will not be connected.


### 2. General Settings

Login to the Magento Admin, choose `Stores > Configuration > Sale > Payment Methods`, at Payment Method WordPay, click `Configure > General Setting`:

![Imgur](https://i.imgur.com/4XyOU8j.png)

- **Merchant Country**: The country that is used by the Worldwide Payment Gateway to determine which payment methods the shopper can use.
- **Settlement Currency**: Select the payment currency.
- **Language Code**:
  - [ISO 639-1 language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) indicates the preferred language of the shopper, where supported by the Payment Provider.
- **Show Worldpay Logo**: Select `Yes` to display the **Cart logo**
- **Site Codes**:
  - Change currency from **Currency** to **Settlement Currency** column, if this field is blank, it will be taken from the **Settlement Currency** field above by default.
  - Admin can add and delete site code.
  
  ![Imgur](https://i.imgur.com/uSA0YtW.png)

### 3. Worldpay Cards

Login to the Magento Admin, choose `Stores > Configuration > Sale > Payment Methods`, At Payment Method WordPay, click `Configure > Worldpay Cards`:

![Imgur](https://i.imgur.com/SF4ohVw.png)

- **Enable**: Select **Yes** to enable using the **Worldpay Cards** payment feature.

- **Title**: Enter the title of the method. The name of the payment method will be replaced displayed on the checkout page.

- **New Order Status**: Select status when customer order succeeds:
  - **Processing**: Display status with **Processing** when order is successful. You can change the status in the backend with each order.
  - **Suspected Fraud**: Displays status with **Suspected Fraud** when order is successful. You can change the status in the backend with each order. With this status admin can accept payment or reject payment and then transfer status to **Processing**.
  
- **Payment Action**:
  - **Authorize and Capture**: Payment will be catured immediately after the order is placed successful. At that moment, the Customer's card will be applied for the order and the **Invoice will be created.
  - **Authorize and Capture**: Payment will be catured immediately after the order is placed successful. At that moment, the Customer's card will be applied for the order and the **Invoice will be created.
  - **Authorize**: Payment will only be captured when admin creates an **Invoice** for Customer's order. When the **Invoice** is successfully created, admin can receive money from Customer's card.
  
- **Card Types**:
  - Can choose 1 or more cards for payment.
  - Cards will be authenticated when customer completes the card number at check out. For cards not selected in this section, there will be an invalid message for the customer if choosing them. With the card not selected it will not be displayed in the Checkout page and backend order.
  
- **3D Secure**: Select **Yes** so that after each payment display authentication with 3D Secure card verification of Customer:

![Imgur](https://i.imgur.com/SF4ohVw.png)

- **Display Checkout**: Select the type of display with Worldpay Cards payment:
  - **Magento Default**: The payment method display of Worldpay Cards at the Magento default checkout page.

  ![Imgur](https://i.imgur.com/VusKhPU.png)

  - **Iframe Checkout**: Show payment method of Worldpay Cards at inline type checkout page

  ![Imgur](https://i.imgur.com/WN3zPys.png)

- **Vault Enabled**: Select **Yes** to display previously saved cards.
- **Vault Title**: Enter the title of the method. The name of the payment method will be replaced displayed on **Order Information****:

![Imgur](https://i.imgur.com/axGcXzX.png)

- **Payment from Applicable Countries**:
  - Select the **All Allowed Countries** to apply Card payment methods in all countries
  - Select **Specific Countries** to limit certain countries to use this payment method
    - **Payment from Specific Countries**: The selected countries will be allowed to apply the Card payment method.
- **Minimum Order Total**:
  - Enter the minimum amount of order which allow applying specific payment by Worldpay Cards.
  - If the order amount is smaller than the value in this fielt, the payment method will not be displayed.
- **Maximum Order Total**:
  - Enter the maximum amount of order which allow applying specific payment by Worldpay Cards.
  - If the order amount is greater than the value in this fielt, the payment method will not be displayed.
- **Debug Mode**:
  - If select **Yes**, diagnostic information is stored in log files on the Magento web server.
- **Sort Order**:
  - Choose the display position of this payment method compared to other payment methods
  - 0 is the largest number. The smaller the number, the more priority will be displayed in the first position.

### 4. Alternative Payment Methods

Worldpay Paypal

![Imgur](https://i.imgur.com/3ZtheFp.png)

Worldpay Alipay

![Imgur](https://i.imgur.com/35PSILG.png)

Worldpay Giropay

![Imgur](https://i.imgur.com/vT7X2F3.png)

Worldpay iDeal

![Imgur](https://i.imgur.com/SAHAY1j.png)

Worldpay Mistercash

![Imgur](https://i.imgur.com/ycz8vZD.png)

Worldpay PaySafeCard

![Imgur](https://i.imgur.com/kIVqGOs.png)

Worldpay Postepay

![Imgur](https://i.imgur.com/t6csysw.png)

Worldpay Przelewy24

![Imgur](https://i.imgur.com/bfu0MW5.png)

Worldpay Qiwi

![Imgur](https://i.imgur.com/oMLFfnd.png)

Worldpay Sofort

![Imgur](https://i.imgur.com/9C5Kn5a.png)

Worldpay Yandex

![Imgur](https://i.imgur.com/HaD0azN.png)

- **Enable**: Select **Yes** to enable the use of the selected Worldpay payment feature.
- **Title**: Enter the title of the method. The name of the payment method will be replaced displayed on the checkout page.
- **Payment from Applicable Countries**:
  - Select the **All Allowed Countries** to apply Card payment methods in all countries
  - Select **Specific Countries** to limit certain countries to use this payment method
    - **Payment from Specific Countries**: The selected countries will be allowed to apply the Card payment method.
- **Minimum Order Total**:
  - Enter the minimum amount of order which allow applying specific payment by Worldpay Cards.
  - If the order amount is smaller than the value in this fielt, the payment method will not be displayed.
- **Maximum Order Total**:
  - Enter the maximum amount of order which allow applying specific payment by Worldpay Cards.
  - If the order amount is greater than the value in this fielt, the payment method will not be displayed.
- **Debug Mode**:
  - If select **Yes**, diagnostic information is stored in log files on the Magento web server.
- **Sort Order**:
  - Choose the display position of this payment method compared to other payment methods
  - 0 is the largest number. The smaller the number, the more priority will be displayed in the first position.


### 5. Admin order

#### 5.1. View order

This section records the information of Credit Card (WorldPay) that the customer has used to make orders:

![Imgur](https://i.imgur.com/g91h3qm.png)

#### 5.2. Admin order

Admin can create order using WorldPay payment with the cards that customer has saved:

![Imgur](https://i.imgur.com/xvM5XLz.png)

### 6. Order Frontend

This section saves the card information that the customer has ordered:

![Imgur](https://i.imgur.com/ZEEaOND.png)

### 7. Compatible One Step Checkout

![Imgur](https://i.imgur.com/B9CtaMn.png)
