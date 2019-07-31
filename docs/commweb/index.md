# CommWeb

## Overview

Commonwealth Bank of Australia is a multinational bank, offering many of Australia's leading financial services. [Mageplaza CommWeb extension](https://www.mageplaza.com/magento-2-commweb/) will allow you to allow payment via Commonwealth Bank on the store of Magento 2. With CommWeb you can make online payments quickly and reliably.

Mageplaza CommWeb extension allows customers to make payments with MasterCard, Visa, Discover, American Express, Diners, JBC.
It also is compatible with [Mageplaza One Step Checkout extension](https://www.mageplaza.com/magento-2-one-step-checkout-extension/) and [Payment Restriction](https://www.mageplaza.com/magento-2-payment-restrictions/) extension.

## How to use

### 1. Commonwealth Bank

- To be able to configure CommWeb you need a **Commonwealth Bank** account.
- Go to [this link](https://commbank.simplify.com/commerce/login/auth#/account/apiKeys) to login to **Commonwealth Bank**. After login sucessfully, from the left sidebar, select `Account Settings > Account Settings > Account Details > Select API Keys` to get **Public Key** and **Private Key**

![Imgur](https://i.imgur.com/af4plQT.png)

### 2. Make payments with CommWeb

- **Checkout page**: select CommWeb payment method. Enter credit card information including: **Credit Card Number, Expiration Date, Card Verification Number**.

![Imgur](https://i.imgur.com/BbnO9do.png)

- **Magento Default**: Displays payment by CommWeb by default of Magento

![Imgur](https://i.imgur.com/BbnO9do.png)

- **Popup Checkout**: Displays the payment by CommWeb when clicking the **Place Order** button

![Imgur](https://i.imgur.com/ujy0wGs.png)

- **Iframe Checkout**: CommWeb payment method is displayed as iframes

![Imgur](https://i.imgur.com/XeQIBB6.png)

**Note**: To be able to make payments with CommWeb, the currency on the Magento site needs to match the currency of **Commonwealth Bank**.

- To set currency for the Commonwealth Bank, log in to your Commonwealth Bank account. Then from the left sidebar, select `Account Settings > Account Settings > Developer`, at the droplist, select the appropriate currency.

![Imgur](https://i.imgur.com/3lLXOgk.png)

## How to Configure

### 1. Configuration

Login to the Magento Admin, choose `Sales > Payment Settings > Payment Method > CommWeb Payment by Mageplaza > Configure`

![Imgur](https://i.imgur.com/sCkfQFs.png)

#### 1.1. Credentials

![Imgur](https://i.imgur.com/KrOFXfR.png)

- **Environment**:
  - Admin can choose **Sandbox environment** to check payment feature with CommWeb.
  - When you want to apply for online payment, admin needs to change the environment to **Production**.
- **Public Key**:
  - Enter the **Public Key** get from the instructions [above](https://docs.google.com/document/d/1oWrPymSl7BNT5lhTbq89Ffkz7JpfewDEvUG61aSmEA8/edit#heading=h.j1oggb2ojlsa)
  - If left blank or incorrectly entered, the system will not be able to connect to CommBank and display an error message
- **Private Key**:
  - Enter the **Private Key** get from the instructions [above](https://docs.google.com/document/d/1oWrPymSl7BNT5lhTbq89Ffkz7JpfewDEvUG61aSmEA8/edit#heading=h.j1oggb2ojlsa)
  - If left blank or incorrectly entered, the system will not be able to connect to CommBank and display an error message
- **Test Credential** button: Admin can check the connection with CommBank by clicking the **Test Credential** button.


#### 1.2. Card

![Imgur](https://i.imgur.com/sCV2k5I.png)

- **Enable**: Select **Yes** to enable the use of payment features with CommWeb
- **Title**: Enter the title for the card, the name of the card will be displayed at the **Checkout page**, **Order Information** at the frontend and **Payment Information** in the backend.


- **Displayed at the checkout page**

![Imgur](https://i.imgur.com/dQ2ziHM.png)

- **Displayed in Order Information**

![Imgur](https://i.imgur.com/twogNYf.png)

- **Display at Payment Information in backend**

![Imgur](https://i.imgur.com/l2zzHyH.png)

- **Payment Action**:
![Imgur](https://i.imgur.com/K6Y77uX.png)
  - **Authorize**: Payment will only be captured when admin creates an Invoice for Customer's order. When the Invoice is successfully created, admin can receive money from Customer's card
  - **Authorize and Capture**: Payment will be Capture immediately after the Customer Place order is successful. At that moment, the Customer's card will pay for the order and the Invoice will be created
- **New Order Status**: status of order when creating new payment with CommWeb.

![Imgur](https://i.imgur.com/DCdaIQW.png)

  - **Processing**: Status of order is **Processing** when order is completed. You can change the status in the backend with each order.
  - Suspected Fraud: The order's Status is Suspected Fraud when the order is completed. You can change the status in the backend with each order. With this status admin can accept payment or reject payment and then transfer status to Processing.
  
  ![Imgur](https://i.imgur.com/qr6fiX8.png)

- **Show Logo**: Choose **Yes** to allow the CommWeb logo to be displayed at the frontend
- **Display Checkout**: Choose displaying style when check out with CommWeb. There are several ways as follows:

![Imgur](https://i.imgur.com/FdVO8T0.png)

  - **Magento Default**: Displays the payment method at Magento's default checkout page
  
  ![Imgur](https://i.imgur.com/GMZW5jp.png)

  - **Popup Checkout**: CommWeb payment method display when checkout as popup. When you click the **Place Order** button, the popup will appear.
  
  ![Imgur](https://i.imgur.com/eo8AZUZ.png)
  
  - **Iframe Checkout**: CommWeb method payment display at the checkout page as CommWeb iframe insertion
  
  ![Imgur](https://i.imgur.com/qcFkZ9r.png)

- **Card Types**: Select the type of card that allows checkout, can select multiple types at once.

![Imgur](https://i.imgur.com/p1I0ugc.png)

- Cards will be authenticated when Customer completes the card number when checking out. For cards not selected in this section, there will be an invalid message for the customer. With the card not selected it will not be displayed in the Checkout page and when ordering the backend.
- **Payment from Applicable Countries**: Select a country to apply the payment method
  - **All Countries**: Applies to all countries
  - **Specific Countries**: Only applicable for the countries selected in the **Payment from Specific Countries** field.
  - To restrict this payment with more conditions, see [Payment Restrictions](https://www.mageplaza.com/magento-2-payment-restrictions/) module.
    - **Payment from Specific Countries**: Select countries that are allowed to display and pay using CommWeb
- **Maximum Order Total**: Enter the maximum value of order to display and pay with CommWeb
  - If the value of the order is greater than the information of this school will not display CommWeb payment method when checkout
  - If left blank, there is no limit to the value of the order
- **Debug Mode**: If **Yes** is selected, diagnostic information is stored in log files on the Magento web server.
- **Sort Order**:
  - Specify the display position of payment method via CommWeb compared to other payment methods
  - 0 is the number with the highest display position. The smaller the number, the more priority will be displayed in the first position.

### 2. Admin Order

At Magento Admin, access `Sales> Orders > Action > View > Payment Information`, you can view payment information via CommWeb

![Imgur](https://i.imgur.com/ViCWSyU.png)

### 3. Order Frontend

Go to `My Account > My Orders > View Order`, you can view payment information with the CommWeb card saved at the Payment Method section of the order

![Imgur](https://i.imgur.com/1pCJ95n.png)
