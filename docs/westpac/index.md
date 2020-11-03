# Westpac PayWay

## Overview

Westpac is Australia's most trusted payment processing provider. [Mageplaza Westpac PayWay](https://www.mageplaza.com/magento-2-westpac-payway/) extension will help you use Westpac to support online payment by card. Your customers can pay with Visa and Mastercard by default and can pay with American Express, Diners Club and JCB after being activated by Westpac. Mageplaza Westpac PayWay extension is fully compatible with [Mageplaza One Step Checkout](https://www.mageplaza.com/magento-2-one-step-checkout-extension/).

## How to use

### 1. Guides on Account registration 

- **Westpac**: to register for a Westpac account, access [this link](https://www.payway.com.au/sandbox) and filling in the required information below:
  - **Note**: At **PCI-DSS**, please select `My system meets PCI-DSS compliance for storing credit card numbers` to be able to use **Westpac PayWay Classic Credit Card API**.


![](https://i.imgur.com/kC6PPeM.png)

- After registration, the system will send login name and password to the email you registered:

![](https://i.imgur.com/9hiuRWF.png)

- Open your registered mail and get your login name and password.

![](https://i.imgur.com/9hiuRWF.png)

- After Sign in, the system will ask you to change the password

![](https://i.imgur.com/igGC0ct.png)

Finally, the system will ask you to answer 2 security questions to finish logging in.

![](https://i.imgur.com/i8Z8JI6.png)

### 2. How to get REST API Publishable Key, REST API Secret Key and Merchant ID

- At the Westpac interface, click `REST API > REST API Keys`.

![](https://i.imgur.com/niw7Gu6.png)

- Click **View** to get the **REST API Publishable Key** and the **REST API Secret Key** to fill in **Configuration** (will be guided below)

![](https://i.imgur.com/Mk11jYS.png)

- At the interface of Westpac, continue to click `Administration> Merchants` then get **Merchant ID** to fill in **Configuration** (will be instructed below)

![](https://i.imgur.com/mYgHgui.png)

### 3. How to get Biller Code, Security Username, Security Password, Encryption Key

- At the Westpac interface, click `Setup Net > Hosted Payment Page`, then select **Bill Payments/Shopping Cart** and **Next**

![](https://i.imgur.com/XwjPTHX.png)

- You continue clicking **Next** and follow the system requirements, then the system will send information of **Biller Code, Security Username, Security Password, Encryption Key**

![](https://i.imgur.com/CU6Q5KJ.png)

- Continue selecting **Next** to end the action.

### 4. How to get API Security Username and API Security Password

- At the interface of Westpac, click `Setup API > Security`, the system displays the security information including username and password.

![](https://i.imgur.com/KrPlzdh.png)

- Continue clicking `Setup API > Certificate`, at **Choose your API Technology** select **PHP** and download the file to fill in the Configuration section.

![](https://i.imgur.com/Kxk20KY.png)

### 5. Page Checkout

- **Checkout page**: choose payment method with Westpac PayWay. Enter credit card information including: **Card Number, Security Code, Name on Card, Expiration**. There are 3 payment methods of Westpac PayWay: PayWay Net Trust Frame, PayWay Net Hosted Page, PayWay Classic Credit Card API.

- **PayWay Trust Frame**

![](https://i.imgur.com/wuWnG8Y.png)

- **PayWay Net Hosted Page**

![](https://i.imgur.com/4GVDGen.gif)

- **PayWay Classic Credit Card API**

![](https://i.imgur.com/CincXY0.png)

- You can check the checkout process with the following Cards:

Use the following credit card numbers with your test facility. The cardholder name does not matter.

<p>&nbsp;</p>
<table>
<tbody>
<tr>
<td>
<p><span style="font-weight: 400;">Card Number</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Security Code</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Expiry</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Response</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">4564710000000004</span></p>
</td>
<td>
<p><span style="font-weight: 400;">847</span></p>
</td>
<td>
<p><span style="font-weight: 400;">02/29</span></p>
</td>
<td>
<p><span style="font-weight: 400;">08 Visa Credit Approved</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">4564030000000007</span></p>
</td>
<td>
<p><span style="font-weight: 400;">847</span></p>
</td>
<td>
<p><span style="font-weight: 400;">02/20</span></p>
</td>
<td>
<p><span style="font-weight: 400;">08 Visa Debit Approved</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">5163200000000008</span></p>
</td>
<td>
<p><span style="font-weight: 400;">070</span></p>
</td>
<td>
<p><span style="font-weight: 400;">08/20</span></p>
</td>
<td>
<p><span style="font-weight: 400;">08 Mastercard Credit Approved</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">5163610000000008</span></p>
</td>
<td>
<p><span style="font-weight: 400;">847</span></p>
</td>
<td>
<p><span style="font-weight: 400;">02/20</span></p>
</td>
<td>
<p><span style="font-weight: 400;">08 Mastercard Debit Approved</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">2221000000000009</span></p>
</td>
<td>
<p><span style="font-weight: 400;">009</span></p>
</td>
<td>
<p><span style="font-weight: 400;">01/20</span></p>
</td>
<td>
<p><span style="font-weight: 400;">08 Mastercard Approved</span></p>
</td>
</tr>
</tbody>
</table>

- To find out more, please visit [here](https://www.payway.com.au/docs/rest.html#quick-start).

## How to Configure

Login to the Magento Admin, choose `Stores > Configuration > Sales > Payment Methods`

![](https://i.imgur.com/3FTji8M.png)

At **Westpac PayWay Payment Method**, click **Configure**

![](https://i.imgur.com/3dcyy9x.png)

### 1. Credentials

![](https://i.imgur.com/m1ApROT.png)

- **Merchant ID**:
  - Copy and paste **Merchant ID** got before to this field.
  - If left blank or fill in incorrectly ID, the system will not connect to the payment methods.
- **REST API Publishable Key**:
  - Copy the **REST API Publishable Key** got before to this field.
  - If left blank or entered incorrectly, it will not connect to **PayWay Net Trusted Frame**.
- **REST API Secret Key**:
  - Copy the **REST API Secret Key** got before to this field.
  - If left blank or entered incorrectly, it will not connect to **PayWay Net Trusted Frame, PayWay Net Hosted Page, PayWay Classic Credit Card API**.

### 2. Westpac PayWay Net Trusted Frame

![](https://i.imgur.com/hb4Z7W0.png)

- **Enable**: Select **Yes** to enable **PayWay Net Trusted Frame** payment features.
- **Title**: Enter the title of the method. The name of the payment method will be replaced displayed on the checkout page.
- **Payment Action**:
  - **Authorize and Capture**: Payment will be captured as soon as customer place orders successfully. At that moment, customer's card will always pay for the order and invoice will be created.
  - **Authorize**: Payment will only be captured when admin creates invoice for customer order. Once invoice is successfully created, the admin can receive money from customer's card.
- **New Order Status**: Select status when customer order is successful:
  - **Processing**: Display status with **Processing** when the order is successful. Can change the status in the backend for each order.
  - **Suspected Fraud**: Display the status with **Suspected Fraud** when the order is successful. Can change the status in the backend for each order. With this status, admin can accept payment or decline payment and then change status to **Processing**.
- **Card Types**:
  - Choose 1 or more cards to be used with this payment method.
  - Cards will be verified when customer completes card number when checking out. For cards not selected in this section, there will be invalid notice shown for customers. For cards that are not selected, they will not appear in Checkout page.
- **Show Logo**: Click **Choose File** to download the image displayed for the payment method on the Checkout page.
- **Payment from Applicable Countries**:
  - Select **All Allowed Countries** so the card payment method can be applied in all countries.
  - To restrict this payment with more conditions, see [Payment Restrictions module](https://www.mageplaza.com/magento-2-payment-restriction/).
  - Select **Specific Countries** to limit certain countries to be able to use this payment method
    - Payment from **Specific Countries**: The selected countries will be displayed with the payment method by Card.
- **Minimum Order Total**:
  - Enter the minimum order amount to display and apply **PayWay Net Trusted Frame** payments.
  - If the order amount is less than the value in this field, payment methods will not be shown.
- **Maximum Order Total**:
  - Enter the maximum amount of order to display and apply **PayWay Net Trusted Frame** payments.
  - If the order amount is greater than the value in this field, the payment method will not be shown.
- **Debug Mode**:
  - If **Yes**, diagnostic information is stored in log files on the Magento web server.
- **Sort Order**:
  - Specify the display position of this payment method compared to other payment methods
  - 0 is the highest priority. Smaller numbers will be preferred to show first.

### 3. Westpac PayWay Net Hosted Page

![](https://i.imgur.com/BxJjvaR.png)

- **Enable**: Select **Yes** to enable **PayWay Net Hosted Page**.
- **Biller Code**: Copy the **Biller Code** got before into this field. If left blank or filled in incorrectly will not be connected to these payment methods.
- **Security Username**: Copy **Security Username** got before into this field. If left blank or filled in incorrectly will not be connected to these payment methods.
- **Security Password**: Copy **Security Password** got before into this field. If left blank or filled in incorrectly will not be connected to these payment methods.
- **Encryption Key**: Copy the **Encryption Key** got before into this field. If left blank or filled in incorrectly will not be connected to these payment methods.
- **Title**: Enter the title of the method. The name of the payment method will be replaced displayed on the checkout page.
- **Payment Action**:
  - **Authorize and Capture**: Payment will be captured as soon as customer place orders successfully. At that moment, customer's card will always pay for the order and invoice will be created.
  - **Authorize**: Payment will only be captured when admin creates invoice for customer order. Once invoice is successfully created, the admin can receive money from customer's card.
- **New Order Status**: Select status when customer order is successful:
  - **Processing**: Display status with **Processing** when the order is successful. Can change the status in the backend for each order.
  - **Suspected Fraud**: Display the status with **Suspected Fraud** when the order is successful. Can change the status in the backend for each order. With this status, admin can accept payment or decline payment and then change status to **Processing**.
- **Card Types**:
  - Choose 1 or more cards to pay.
  - Cards will be verified when customer completes card number when checking out. For cards not selected in this section, there will be invalid notice shown for customers. For cards that are not selected, they will not appear in Checkout page.
- **Show Logo**: Click **Choose File** to download the image displayed for the payment method on the Checkout page.
- **Payment from Applicable Countries**:
  - Select **All Allowed Countries** so the card payment method can be applied in all countries.
  - To restrict this payment with more conditions, see [Payment Restrictions module](https://www.mageplaza.com/magento-2-payment-restriction/).
  - Select **Specific Countries** to limit certain countries to be able to use this payment method
    - Payment from **Specific Countries**: The selected countries will be displayed with the payment method by Card.
- **Minimum Order Total**:
  - Enter the minimum order amount to display and apply **PayWay Net Hosted Page** payments.
  - If the order amount is less than the value in this field, payment methods will not be shown.
- **Maximum Order Total**:
  - Enter the maximum amount of order to display and apply **PayWay Net Hosted Page** payments.
  - If the order amount is greater than the value in this field, the payment method will not be shown.
- **Debug Mode**:
  - If **Yes**, diagnostic information is stored in log files on the Magento web server.
- **Sort Order**:
  - Specify the display position of this payment method compared to other payment methods
  - 0 is the highest priority. Smaller numbers will be preferred to show first.


### 4. Westpac PayWay Classic Credit Card API

![](https://i.imgur.com/F9jsskI.png)

- **Enable**: Select **Yes** to enable **PayWay Classic Credit Card API**.
- **API Security Username**: Copy **API Security Username** got before into this field. If left blank or filled in incorrectly will not be connected to these payment methods.
- **API Security Password**: **Copy API Security Password** got before into this field. If left blank or filled in incorrectly will not be connected to these payment methods.
- **Upload Certificate File**: Allowed upload file types: **.pem**. Leaving this blank will not allow payment by this method.
- **Title**: Enter the title of the method. The name of the payment method will be replaced displayed on the checkout page.
- **Payment Action**:
  - **Authorize and Capture**: Payment will be captured as soon as customer place orders successfully. At that moment, customer's card will always pay for the order and invoice will be created.
  - **Authorize**: Payment will only be captured when admin creates invoice for customer order. Once invoice is successfully created, the admin can receive money from customer's card.
- **New Order Status**: Select status when customer order is successful:
  - **Processing**: Display status with **Processing** when the order is successful. Can change the status in the backend for each order.
  - **Suspected Fraud**: Display the status with **Suspected Fraud** when the order is successful. Can change the status in the backend for each order. With this status, admin can accept payment or decline payment and then change status to **Processing**.
- **Card Types**:
  - Choose 1 or more cards to pay.
  - Cards will be verified when customer completes card number when checking out. For cards not selected in this section, there will be invalid notice shown for customers. For cards that are not selected, they will not appear in Checkout page.
- **Show Logo**: Click **Choose File** to download the image displayed for the payment method on the Checkout page.
- **Payment from Applicable Countries**:
  - Select **All Allowed Countries** so the card payment method can be applied in all countries.
  - To restrict this payment with more conditions, see [Payment Restrictions module](https://www.mageplaza.com/magento-2-payment-restriction/).
  - Select **Specific Countries** to limit certain countries to be able to use this payment method
    - Payment from **Specific Countries**: The selected countries will be displayed with the payment method by Card.
- **Minimum Order Total**:
  - Enter the minimum order amount to display and apply **PayWay Classic Credit Card API** payments.
  - If the order amount is less than the value in this field, payment methods will not be shown.
- **Maximum Order Total**:
  - Enter the maximum amount of order to display and apply **PayWay Classic Credit Card API** payments.
  - If the order amount is greater than the value in this field, the payment method will not be shown.
- **Debug Mode**:
  - If **Yes**, diagnostic information is stored in log files on the Magento web server.
- **Sort Order**:
  - Specify the display position of this payment method compared to other payment methods
  - 0 is the highest priority. Smaller numbers will be preferred to show first.

### 5. Admin View Order

This section records **Credit Card information (Westpac)** that customers have ordered and paid.

![](https://i.imgur.com/FLKcmMD.png)

### 6. Customer View Order

This section stores card information that customers have ordered.

![](https://i.imgur.com/MIyFrmI.png)

### 7. Compatible with One Step Checkout

![](https://i.imgur.com/ETAyJ3J.png)


