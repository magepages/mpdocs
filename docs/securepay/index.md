# SecurePay

## Overview

SecurePay is an online payment specialist and an Australian Post business that provides e-commerce payment solutions for businesses worldwide. Among many online payment solutions, Mageplaza does offer SecurePay - a complete online payment solution that will help users pay online by card or Paypal easily and securely. [SecurePay extension](https://www.mageplaza.com/magento-2-securepay/) offers customers more payment options such as Visa, MasterCard, American Express, Diners Club, JCB, Bankcard and PayPal. It also allows them to make online purchases instantly, which can help businesses convert more sales.

Mageplaza SecurePay extension is fully compatible with [Mageplaza One Step Checkout](https://www.mageplaza.com/magento-2-one-step-checkout-extension/).

## Download and Install

- [Download SecurePay extension](https://www.mageplaza.com/magento-2-securepay/)
- [Installation guide](https://www.mageplaza.com/install-magento-2-extension/)


## How to use

- SecurePay: to register SecurePay account, please access [this link](https://auspost.com.au/mypost-business/registration?context=pay), click **Sign up** and fill in the required information below:

![](https://i.imgur.com/qBnwyKH.png)

- After registration, the system displays thanks and requests for confirmation via registered mail:

![](https://i.imgur.com/WS7Xy4o.png)

- Open your registered mail, click **Activate Now**:

![](https://i.imgur.com/EALMxtj.png)

- At the main interface of SecurePay, get the information of **Merchant ID, Publishable Key, Private Key** to fill in **Configuration** (will be guided below):

![](https://i.imgur.com/G3hPe5L.png)

- Click `Manage > Paypal Settings` to get **Merchant Account ID** and **Transaction Password**:

![](https://i.imgur.com/Gum7oCI.png)

- SecurePay has a sandbox environment accessible to the public. Please see public testing account details below.
  - Test Merchant Login URL: https://test.login.securepay.com.au/v3/
  - Merchant ID: ABC
  - Username: test
  - Password: abc1234 !!
  - Test integration details
  - Merchant ID: ABC0001
  - Test Transaction Password: abc123

- You can check the checkout process with the following Cards:

**Test card numbers**

<p>&nbsp;</p>
<table>
<tbody>
<tr>
<td colspan="2">
<p><strong>STANDARD</strong></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Visa</span></p>
</td>
<td>
<p><span style="font-weight: 400;">4111111111111111</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Visa</span></p>
</td>
<td>
<p><span style="font-weight: 400;">4012888888881881</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Visa</span></p>
</td>
<td>
<p><span style="font-weight: 400;">4222222222222</span></p>
<p><strong>Note :</strong><span style="font-weight: 400;"> Different character count than the other test numbers, but still functional</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">MasterCard</span></p>
</td>
<td>
<p><span style="font-weight: 400;">5555555555554444</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">MasterCard</span></p>
</td>
<td>
<p><span style="font-weight: 400;">5105105105105100</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Discover</span></p>
</td>
<td>
<p><span style="font-weight: 400;">6011111111111117</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Discover</span></p>
</td>
<td>
<p><span style="font-weight: 400;">6011000990139424</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">American Express</span></p>
</td>
<td>
<p><span style="font-weight: 400;">378282246310005</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">American Express</span></p>
</td>
<td>
<p><span style="font-weight: 400;">371449635398431</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">American Express Corporate</span></p>
</td>
<td>
<p><span style="font-weight: 400;">378734493671000</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Diners Club</span></p>
</td>
<td>
<p><span style="font-weight: 400;">30569309025904</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Diners Club</span></p>
</td>
<td>
<p><span style="font-weight: 400;">38520000023237</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">JCB</span></p>
</td>
<td>
<p><span style="font-weight: 400;">3530111333300000</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">JCB</span></p>
</td>
<td>
<p><span style="font-weight: 400;">3566002020360505</span></p>
</td>
</tr>
<tr>
<td colspan="2">
<p><strong>INTERNATIONAL</strong></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Australian BankCard</span></p>
</td>
<td>
<p><span style="font-weight: 400;">5610591081018250</span></p>
</td>
</tr>
<tr>
<td colspan="2">
<p><strong>PROCESSOR-SPECIFIC CARDS</strong></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Dankort (PBS)</span></p>
</td>
<td>
<p><span style="font-weight: 400;">76009244561</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Dankort (PBS)</span></p>
</td>
<td>
<p><span style="font-weight: 400;">5019717010103742</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Switch/Solo (Paymentech)</span></p>
</td>
<td>
<p><span style="font-weight: 400;">6331101999990016</span></p>
</td>
</tr>
</tbody>
</table>


*Note*: 

- You can simulate approved and declined transactions by submitting alternative payment amounts.
- If the payment amount ends in 00, 08, 11, or 77 the transaction will be approved once card details are submitted. All other options will cause a declined transaction.


## How to Configure

Login to the Magento Admin, choose `Stores > Configuration > Sale > Payment Methods`:

![](https://i.imgur.com/hdCypDF.png)

At **SecurePay Payment Method**, click **Configure**:

![](https://i.imgur.com/I1stSpY.png)

### 1. Credentials
Login to the Magento Admin, choose `Stores> Configuration> Sale> Payment Methods`, at **SecurePay Payment Method**, click `Configure > Credentials`:

![](https://i.imgur.com/cu77R3k.png)

- **Environment**:
  - Admin can choose **Sandbox environment** to check the payment function of the methods.
  - When applying for online payment, the admin needs to switch the environment to **Production**.
- **Merchant Account ID**:
  - Enter the Merchant Account ID that was got from SecurePay (5 or 7-character merchant ID supplied by SecurePay).
  - If left blank or entered incorrectly, it will not connect to SecurePay.
- **Transaction Password**:
  - Enter the Transaction Password that was got from SecurePay.
  - If left blank or entered incorrectly, it will not connect to SecurePay.
  - The password can be changed via ** SecurePay's Merchant Management** facility.


### 2. XML Integration

Login to the Magento Admin, choose `Stores > Configuration > Sale > Payment Methods`, at **SecurePay Payment Method**, click `Configure > XML Integration`

![](https://i.imgur.com/u6SWFU2.png)

- **Enable**: Select "Yes" to enable the use of payment by **XML Integration**.
- **Title**: Enter the title of the method. The payment method name will be displayed on the checkout page.
- **Payment Action**:
  - **Authorize and Capture**: Payment will be captured as soon as customers place orders are successful. At that moment, customer' s card will pay for the order and invoice will be created.
  - **Authorize**: Payment will only be captured when admin creates invoice for customer order. Once invoice is successfully created, the admin can receive money from customer's card.
- **New Order Status**: Select status when customer order is successful:
  - **Processing**: Display status with Processing when the order is successful. Admin can change the status in the backend for each order.
  - **Suspected Fraud**: Display the status with Suspected Fraud when the order is successful. Can change the status in the backend for each order. With this status, admin can accept payment or decline payment and then change status to Processing.
- **Card Types**:
  - Choose 1 or more cards to pay.
  - Cards will be verified when customer enter card number in checking out. For cards not selected in this section, there will be a notice of invalid card for customers. Unselected cards will not be displayed on the Checkout page and when ordering the backend.
- **Payment from Applicable Countries**:
  - Select **All Allowed Countries** so the card payment method can be applied in all countries.
  - To restrict this payment with more conditions, see [Payment Restrictions module](https://www.mageplaza.com/magento-2-payment-restriction/).
  - Select **Specific Countries** to limit certain countries to be able to use this payment method
    - **Payment from Specific Countries**: The selected countries will be displayed with the payment method by Card.
- **Minimum Order Total**:
  - Enter the minimum order amount to display and apply for payments using **XML Integration**.
  - If the order amount is less than this field value, payment methods will not be displayed.
- **Maximum Order Total**:
  - Enter the maximum amount of order to display and apply payments using **XML Integration**.
  - If the order amount is greater than this field value, the payment method will not be displayed.
- **Debug Mode**:
  - If choose **Yes**, diagnostic information is stored in log files on the Magento web server.
- **Sort Order**:
  - Select the display position of this payment method compared to other payment methods
  - 0 is the largest number. Smaller numbers will be preferred to show in the first position.

### 3. Direct Post Integration

Login to the Magento Admin, choose `Stores > Configuration > Sale > Payment Methods`. at SecurePay Payment Method click `Configure > Direct Post Integration`

![](https://i.imgur.com/9wciaVP.png)

- **Note**: The method only works on https sites, it cannot work on http.
- **Enable**: Select "Yes" to enable the use of payment by **Direct Post Integration**.
- **Title**: Enter the title of the method. The payment method name will be displayed on the checkout page.
- **Payment Action**:
  - **Authorize and Capture**: Payment will be captured as soon as customers place orders are successful. At that moment, customer's card will pay for the order and invoice will be created.
  - **Authorize**: Payment will only be captured when admin creates invoice for customer order. Once invoice is successfully created, the admin can receive money from customer's card.
- **New Order Status**: Select status when customer order is successful:
  - **Processing**: Display status with Processing when the order is successful. Admin can change the status in the backend for each order.
  - **Suspected Fraud**: Display the status with Suspected Fraud when the order is successful. Can change the status in the backend for each order. With this status, admin can accept payment or decline payment and then change status to Processing.
- **Card Types**:
  - Choose 1 or more cards to pay.
  - Cards will be verified when customer enter card number in checking out. For cards not selected in this section, there will be a notice of invalid card for customers. Unselected cards will not be displayed on the Checkout page and when ordering the backend.
- **Payment from Applicable Countries**:
  - Select **All Allowed Countries** so the card payment method can be applied in all countries.
  - To restrict this payment with more conditions, see [Payment Restrictions module](https://www.mageplaza.com/magento-2-payment-restriction/).
  - Select **Specific Countries** to limit certain countries to be able to use this payment method
    - **Payment from Specific Countries**: The selected countries will be displayed with the payment method by Card.
- **Minimum Order Total**:
  - Enter the minimum order amount to display and apply for payments using **Direct Post Integration**.
  - If the order amount is less than this field value, payment methods will not be displayed.
- **Maximum Order Total**:
  - Enter the maximum amount of order to display and apply payments using **Direct Post Integration**.
  - If the order amount is greater than this field value, the payment method will not be displayed.
- **Debug Mode**:
  - If choose **Yes**, diagnostic information is stored in log files on the Magento web server.
- **Sort Order**:
  - Select the display position of this payment method compared to other payment methods
  - 0 is the largest number. Smaller numbers will be preferred to show in the first position.

### 4. Paypal Integration

Login to the Magento Admin, choose `Stores > Configuration > Sale > Payment Methods`, at **SecurePay Payment Method**, click `Configure > Paypal Integration`

![](https://i.imgur.com/IHo6rwH.png)

- **Merchant ID**:
  - Enter the Merchant ID received from SecurePay.
  - If left blank or entered incorrectly, it will not integrate with SecurePay.
  - Follow this link to obtain credentials.
  - Using for **SecurePay Paypal Integration**.
- **Publishable Key**:
  - Enter the Publishable Key that was received from SecurePay.
  - If left blank or entered incorrectly, it will not connect to SecurePay.
- **Private Key**:
  - Enter the Private Key received from SecurePay.
  - If left blank or entered incorrectly, it will not connect to SecurePay.
- **Enable**: Select "Yes" to enable the use of payment by **Paypal Integration**.
- **Title**: Enter the title of the method. The payment method name will be displayed on the checkout page.
- **Payment Action**:
  - **Authorize and Capture**: Payment will be captured as soon as customers place orders are successful. At that moment, customer's card will pay for the order and invoice will be created.
  - **Authorize**: Payment will only be captured when admin creates invoice for customer order. Once invoice is successfully created, the admin can receive money from customer's card.
- **New Order Status**: Select status when customer order is successful:
  - **Processing**: Display status with Processing when the order is successful. Admin can change the status in the backend for each order.
  - **Suspected Fraud**: Display the status with Suspected Fraud when the order is successful. Can change the status in the backend for each order. With this status, admin can accept payment or decline payment and then change status to Processing.
- **Card Types**:
  - Choose 1 or more cards to pay.
  - Cards will be verified when customer enter card number in checking out. For cards not selected in this section, there will be a notice of invalid card for customers. Unselected cards will not be displayed on the Checkout page and when ordering the backend.
- **Payment from Applicable Countries**:
  - Select **All Allowed Countries** so the card payment method can be applied in all countries.
  - To restrict this payment with more conditions, see [Payment Restrictions module](https://www.mageplaza.com/magento-2-payment-restriction/).
  - Select **Specific Countries** to limit certain countries to be able to use this payment method
    - **Payment from Specific Countries**: The selected countries will be displayed with the payment method by Card.
- **Minimum Order Total**:
  - Enter the minimum order amount to display and apply for payments using **Paypal Integration**.
  - If the order amount is less than this field value, payment methods will not be displayed.
- **Maximum Order Total**:
  - Enter the maximum amount of order to display and apply payments using **Paypal Integration**.
  - If the order amount is greater than this field value, the payment method will not be displayed.
- **Debug Mode**:
  - If choose **Yes**, diagnostic information is stored in log files on the Magento web server.
- **Sort Order**:
  - Select the display position of this payment method compared to other payment methods
  - 0 is the largest number. Smaller numbers will be preferred to show in the first position.

### 5. View Order

#### 5.1. Admin

![](https://i.imgur.com/S0nWZ2w.png)

#### 5.2. Frontend

![](https://i.imgur.com/LZ5Kg7k.png)

### 6. Compatible with One Step Checkout

![](https://i.imgur.com/NB7Xd5u.png)
