# Worldpay

## Overview

**Worldpay** is America's most reliable payment processing provider. [Mageplaza Worldpay extension]() helps integrate Worldpay to support online payment by card or Paypal, allowing customers to save credit card information at the first purchase to use it for the next payment. Customer can manage saved credit card information and delete card information at any time. In addition, the module also supports direct payment at checkout page (iframe) and support 3D Secure.

Mageplaza Worldpay extension is fully compatible with [Mageplaza One Step Checkout]().

## Download and Install

- [How to dowload Worldpay extension]() 
- [How to install Mageplaza extension](https://www.mageplaza.com/install-magento-2-extension/) 


## How to use

- **Worldpay**: to register an account with Worldpay, you can access [this link](https://online.worldpay.com/), click **Sign up** then fill in the required information below:

![](https://i.imgur.com/Uoamumq.png)

- After registration is complete, the system shows the thanks and requests to check and confirm via email registered:

![](https://i.imgur.com/Y3BGwCB.png)

- Open your registered mail, click the link below:

![](https://i.imgur.com/7BZQDBu.png)

- You need to enter the password again then click **Confirm Email** to complete the registration:

![](https://i.imgur.com/x6NHvBq.png)

- At the interface of worldpay, click `Settings> Orders`:

![](https://i.imgur.com/11htpNt.png)

- At **Orders**, set **Authorisations = Yes** to enable the **API** feature:

![](https://i.imgur.com/3NI5IYO.png)

- After enabling **Authorisations**, click API Keys, get the **Service key** and **Client key** to fill in the **Configuration** (will be guided at the second part):

![](https://i.imgur.com/ZNewEmz.png)

- **Display Checkout**: display by 2 types when paying by Worldpay:
  - **Magento Default**:
  
  ![](https://i.imgur.com/gNMbNhT.png)

  - **Iframe Checkout**:
  
  ![](https://i.imgur.com/J086ZRF.png)

- Display the **Payment Method** in the Order Backend:

![](https://i.imgur.com/6K0ovzD.png)

- **Stored Payment Methods**: Here save the credit card information that customers have saved at the previous purchase. If you do not want to save old or unused credit cards, you can click delete to remove them.

![](https://i.imgur.com/Gd38C4g.png)

- You can check the payment by some sample cards as following: 

**Test card numbers**

Only the following credit/debit card numbers may be used for test payments in the test environment. When using test cards, you can specify an expiry date up to seven years in the future. The test cards do not have a card verification code or an issue number.

<p>&nbsp;</p>
<table>
<tbody>
<tr>
<td>
<p><strong>Card</strong></p>
</td>
<td>
<p><strong>Number</strong></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Mastercard Credit</span></p>
</td>
<td>
<p><span style="font-weight: 400;">5555555555554444</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Mastercard Debit</span></p>
</td>
<td>
<p><span style="font-weight: 400;">5454545454545454</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Maestro</span></p>
</td>
<td>
<p><span style="font-weight: 400;">6759649826438453</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Visa Credit</span></p>
</td>
<td>
<p><span style="font-weight: 400;">4444333322221111, 4911830000000 and 4917610000000000</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Visa Debit</span></p>
</td>
<td>
<p><span style="font-weight: 400;">4462030000000000</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">American Express</span></p>
</td>
<td>
<p><span style="font-weight: 400;">34343434343434</span></p>
</td>
</tr>
</tbody>
</table>

**Simulate success and error flows**

You can simulate different outcomes when submitting orders by entering the following values as the cardholder name:

<p>&nbsp;</p>
<table>
<tbody>
<tr>
<td>
<p><strong>Value</strong></p>
</td>
<td>
<p><strong>Description</strong></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">SUCCESS</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Simulation of a successful payment</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">FAILED</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Simulation of an unsuccessful payment</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">ERROR</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Simulation of an error</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Visa Credit</span></p>
</td>
<td>
<p><span style="font-weight: 400;">4444333322221111,4911830000000, 4917610000000000</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Visa Debit</span></p>
</td>
<td>
<p><span style="font-weight: 400;">4462030000000000</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">American Express</span></p>
</td>
<td>
<p><span style="font-weight: 400;">34343434343434</span></p>
</td>
</tr>
</tbody>
</table>

- For other cases, please access [here](https://beta.developer.worldpay.com/docs/wpop/testing)

## How to Configure

Login to the **Magento Admin**, choose `Stores > Configuration > Sale > Payment Methods`:

- At **WorldPay** Payment Method, click **Configure**:

![](https://i.imgur.com/YG5yGry.png)

### 1. Credentials

Login to the **Magento Admin**, choose `Stores > Configuration > Sale > Payment Methods`, at WordPay Payment Method, click `Configure > Credentials`:

![](https://i.imgur.com/oigoLfC.png)

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

![](https://i.imgur.com/8GIn0zh.png)

- **Merchant Country**: The country that is used by the Worldwide Payment Gateway to determine which payment methods the shopper can use. Default is "EN".

Example: Some payments depend on Merchant Country: 
* Worldpay Alipay need to choose Merchant Country = China
* Worldpay Giropay need to choose Merchant Country = Germany
* Worldpay Ideal need to choose Merchant Country = Netherlands
* Worldpay Mistercash need to choose Merchant Country = Belgium
* Worldpay Paysafecard need to choose Merchant Country = United Kingdom
* Worldpay Postepay need to choose Merchant Country = Italy
* Worldpay Przelewy24 need to choose Merchant Country = Poland
* Worldpay Qiwi need to choose Merchant Country = Russia
* Worldpay Sofort need to choose Merchant Country = Germany
* Worldpay Yandex need to choose Merchant Country = Russia

- **Settlement Currency**: Select the payment currency.
- **Language Code**:
  - [ISO 639-1 language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) indicates the preferred language of the shopper, where supported by the Payment Provider.
   - Change language when **Environment = Production**.
- **Show Worldpay Logo**: Select `Yes` to display the **Cart logo**
- **Site Codes**:
  - Change currency from **Currency** to **Settlement Currency** column, if this field is blank, it will be taken from the **Settlement Currency** field above by default.
  - Admin can add and delete site code.
  
  ![](https://i.imgur.com/FPhHpH9.png)

### 3. Worldpay Cards

Login to the Magento Admin, choose `Stores > Configuration > Sale > Payment Methods`, At Payment Method WordPay, click `Configure > Worldpay Cards`:

![](https://i.imgur.com/MwwFazA.png)

- **Enable**: Select **Yes** to enable using the **Worldpay Cards** payment feature.

- **Title**: Enter the title of the method. The name of the payment method will be replaced displayed on the checkout page.

- **New Order Status**: Select status when customer order succeeds:
  - **Processing**: Display status with **Processing** when order is successful. You can change the status in the backend with each order.
  - **Suspected Fraud**: Displays status with **Suspected Fraud** when order is successful. You can change the status in the backend with each order. With this status admin can accept payment or reject payment and then transfer status to **Processing**.
  
- **Payment Action**:
  - **Authorize and Capture**: Payment will be captured immediately after the order is placed successfully. At that moment, the customer's card will be applied for the order and the **Invoice** will be created.
  
  - **Authorize**: Payment will only be captured when admin creates an **Invoice** for customer' s order. When the **Invoice** is successfully created, admin can receive money from customer' s card.
  
- **Card Types**:
  - Can choose 1 or more cards for payment.
  - Cards will be authenticated when customers complete the card number at check out. For cards not selected in this section, there will be an invalid message for the customer if choosing them. With the card not selected, it will not be displayed on the Checkout page and backend order.
  
- **3D Secure**: Select **Yes** so that after each payment display authentication with 3D Secure card verification of Customer:

![](https://i.imgur.com/SF4ohVw.png)

- **Display Checkout**: Select the type of display with Worldpay Cards payment:
  - **Magento Default**: The payment method display of Worldpay Cards at the Magento default checkout page.

  ![](https://i.imgur.com/VusKhPU.png)

  - **Iframe Checkout**: Show payment method of Worldpay Cards at inline type checkout page

  ![](https://i.imgur.com/WN3zPys.png)

- **Vault Enabled**: Select **Yes** to display previously saved cards.

- **Vault Title**: Enter the title of the method. The name of the payment method will be replaced displayed on **Order Information**:

![](https://i.imgur.com/axGcXzX.png)

- **Payment from Applicable Countries**:
  - Select the **All Allowed Countries** to apply Card payment methods in all countries
  - To restrict this payment with more conditions, see [Payment Restrictions]() module.
  - Select **Specific Countries** to limit certain countries to use this payment method
    - **Payment from Specific Countries**: The selected countries will be allowed to apply the Card payment method.
- **Minimum Order Total**:
  - Enter the minimum amount of order which allow applying specific payment by Worldpay Cards.
  - If the order amount is smaller than the value in this field, the payment method will not be displayed.
- **Maximum Order Total**:
  - Enter the maximum amount of order which allow applying specific payment by Worldpay Cards.
  - If the order amount is greater than the value in this field, the payment method will not be displayed.
- **Debug Mode**:
  - If select **Yes**, diagnostic information is stored in log files on the Magento web server.
- **Sort Order**:
  - Choose the display position of this payment method compared to other payment methods
  - 0 is the largest number. The smaller the number, the more priority will be displayed in the first position.

### 4. Alternative Payment Methods

**Worldpay Paypal**

![](https://i.imgur.com/fkgHPVL.png)

**Worldpay Alipay**

![](https://i.imgur.com/XzUHab8.png)

**Worldpay Giropay**

![](https://i.imgur.com/6evzgHM.png)

**Worldpay iDeal**

![](https://i.imgur.com/pR8A2cy.png)

**Worldpay Mistercash**

![](https://i.imgur.com/U3TCtzD.png)

**Worldpay PaySafeCard**

![](https://i.imgur.com/kIVqGOs.png)

**Worldpay Postepay**

![](https://i.imgur.com/xXksaCG.png)

**Worldpay Przelewy24**

![](https://i.imgur.com/OnpmQnB.png)

**Worldpay Qiwi**

![](https://i.imgur.com/yf1Hfb9.png)

**Worldpay Sofort**

![](https://i.imgur.com/1w6oE2p.png)

**Worldpay Yandex**

![](https://i.imgur.com/TQ3dHhG.png)

- **Enable**: Select **Yes** to enable the use of the selected Worldpay payment feature.
- **Title**: Enter the title of the method. The name of the payment method will be replaced displayed on the checkout page.
- **Payment from Applicable Countries**:
  - Select the **All Allowed Countries** to apply Card payment methods in all countries
  - To restrict this payment with more conditions, see [Payment Restrictions]() module.
  - Select **Specific Countries** to limit certain countries to use this payment method
    - **Payment from Specific Countries**: The selected countries will be allowed to apply the Card payment method.
- **Minimum Order Total**:
  - Enter the minimum amount of order which allow applying specific payment by Worldpay Cards.
  - If the order amount is smaller than the value in this field, the payment method will not be displayed.
- **Maximum Order Total**:
  - Enter the maximum amount of order which allow applying specific payment by Worldpay Cards.
  - If the order amount is greater than the value in this field, the payment method will not be displayed.
- **Debug Mode**:
  - If select **Yes**, diagnostic information is stored in log files on the Magento web server.
- **Sort Order**:
  - Choose the display position of this payment method compared to other payment methods
  - 0 is the largest number. The smaller the number, the more priority will be displayed in the first position.


### 5. Admin order

#### 5.1. View order

This section records the information of Credit Card (WorldPay) that the customer has used to make orders:

![](https://i.imgur.com/QCX5C3I.png)

#### 5.2. Admin order

Admin can create order using WorldPay payment with the cards that customer has saved:

![](https://i.imgur.com/xvM5XLz.png)

### 6. Order Frontend

This section saves the card information that the customer has ordered:

![](https://i.imgur.com/kAm3lrC.png)

### 7. Compatible One Step Checkout

![](https://i.imgur.com/bHKQcyR.png)

### 8. How to install Worldpay library

- Create folder: `lib/internal/Mageplaza`
- Access [this link](https://gitlab.com/users/sign_in) to download Worldpay library
- Extract **module-worldpay-library** into `lib/internal/Mageplaza` and rename the extracted file to for example: Worldpay.

