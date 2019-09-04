# 2Checkout


## Overview

Mageplaza 2Checkout extension helps you integrate this payment method with your store to handle payments safely without users leaving the page. Customers can pay directly at checkout page (Magento Default/ Iframe Checkout) or redirect to 2Checkout page (Redirect Checkout). In addition, this extension allows customers to refund online. Admin can have access to a complete set of administrative tools to keep track of your transactions, customer tracking, refunds and fraud monitoring.

Your customers can use all credit cards such as Visa, Mastercard, American Express, JCB, etc. Admin can configure currencies and countries applicable to this payment method at each storeview. Moreover, information about transactions and detailed comments for each action (invoice, refund) with order payment via 2Checkout also be recorded at the **View Order** in the backend.

Mageplaza 2Checkout extension is fully compatible with [Mageplaza One Step Checkout](https://www.mageplaza.com/magento-2-one-step-checkout-extension/).

## How to download and install

- [Download Mageplaza 2Checkout](https://www.mageplaza.com/magento-2-2checkout/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


## How to use

### 1. Sandbox: 

This is the environment that helps you track transactions using the 2Checkout payment method and check the payment features with 2Checkout.

- To register for a Sandbox account, visit the [following link](https://sandbox.2checkout.com/sandbox/signup).

![](https://i.imgur.com/BoEnG0P.png)

- After registering the Sandbox account, please access `Account> Site Management` to fill in the information relating your Site Management. You need to enter **Approved URL** of your site here. **Secret Word** is the secret code that Sandbox provides for your account. You will use it to configure in the **Credentials** section which will be guided later.

![](https://i.imgur.com/Kz8Tw56.png)

![](https://i.imgur.com/jzET1nn.png)

- You must access the **API** section to get **Publishable Key** and **Private Key** and use it to configure in the **Credentials** section of this extension.

![](https://i.imgur.com/poQlCvE.png)

- In addition, you must access the **Account** symbol to get **Account Number** and configure at the **Credentials** section of this extension.

![](https://i.imgur.com/jOdx4Al.png)

When you want to track transactions using the 2Checkout and check the payment features with 2Checkout on your website, visit the **Sales** section and check.

![](https://i.imgur.com/sQHgMZy.png)

![](https://i.imgur.com/nSfQDLA.png)

![](https://i.imgur.com/74dYBdN.png)

#### Test Cards

<p>&nbsp;</p>
<table>
<tbody>
<tr>
<td>
<p><span style="font-weight: 400;">Card type</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Card number</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">VISA</span></p>
</td>
<td>
<p><span style="font-weight: 400;">4111111111111111</span></p>
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
<p><span style="font-weight: 400;">AMEX</span></p>
</td>
<td>
<p><span style="font-weight: 400;">378282246310005</span></p>
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
<p><span style="font-weight: 400;">JCB</span></p>
</td>
<td>
<p><span style="font-weight: 400;">3566111111111113</span></p>
</td>
</tr>
</tbody>
</table>

Use the test payment information above, in conjunction with:
- Any billing currency
- Any card expiration date
- Any CVV code

### 2. Production

This environment is suitable when you want to apply for online payments with 2Checkout. To register an account at **Production**, you can visit [here](https://www.2checkout.com/login/).


## How to Configure

Login to the Magento Admin, choose `Sales > Payment Method > 2Checkout`.

![](https://i.imgur.com/SWGyiJV.png)

### 1. Credential

Login to the Magento Admin, choose `Sales > Payment Method > 2Checkout > Configure > Credentials Tab`

![](https://i.imgur.com/UQoRm3R.png)

- **Environment**:
  - Admin can choose **Sandbox environment** to check payment feature with 2Checkout. Access [here](https://sandbox.2checkout.com/sandbox/api/) to create an account and get the necessary information. Review the instructions in `How to use> 1. Sandbox`
  - When you want to apply for online payment, please change the environment to **Production**. Access [here](https://www.2checkout.com/login/) to create an account and get the necessary information.
- **Merchant ID**:
  - Enter your **Account Number** or **Seller ID**.
  - If left blank or incorrectly entered, it will not integrate with 2Checkout.
- **Publishable Key**:
  - Enter **Publishable Key** got from 2Checkout.
  - If left blank or entered incorrectly, 2Checkout will not be connected.
- **Private Key**:
  - Enter the **Private Key** got from 2Checkout.
  - If left blank or entered incorrectly, 2Checkout will not be connected.
- **API Username**: Enter your **API Username** at 2Checkout. Refer instruction to create a Username API for 2Checkout [here](http://help.2checkout.com/articles/FAQ/How-to-create-an-API-only-Username).
- **API Password**: Enter your API Password at 2Checkout
- **Test Credential** button: Admin can check the connection with 2Checkout by clicking the **Test Credential** button.
- **Approved URL**: Enter **Approved URL** of your store. This field appears only when you select **Environment = Sandbox**.


### 2. General Configuration

Login to the Magento Admin, choose `Sales > Payment Method > 2Checkout > Configure > General Tab`

![](https://i.imgur.com/THZmuVC.png)

![](https://i.imgur.com/utZFzI0.png)

- **Enable**: Select **Yes** to turn on the module and use the 2Checkout features.
- **Title**: Set the title for this payment method at storeview.
- **Payment Action**: Use **Payment Action** here as **Authorize and Capture**. Payment will be captured immediately after the customer place order successfully. At that moment, the customer' s card will pay for the order and the invoice will be created.
- **New Order Status**: Select status when customer orders successfully:
  - **Processing**: Display status with **Processing** when order is successful. You can change the status in the backend with each order.
  - **Suspected Fraud**: Displays status with **Suspected Fraud** when order is successful. You can change the status in the backend with each order. With this status admin can accept payment or reject payment and then transfer status to **Processing**.
- **Transfer Cart Items To Payment Gateway**: Select "Yes" to transfer the item list from the order to the payment gateway. In contrast, select "No".

![](https://i.imgur.com/Pq40Dfz.png)

- **Accepted Currencies**: Admin can choose which currencies on the website are allowed to use this payment method
- **Display Checkout**: Select the type of checkout display for this payment method. There are 3 types of display:
  - **Display Checkout = Magento Default**: Displays the payment method of 2Checkout at Magento's default checkout page. When choosing this type of payment display, admin can select **Card Types** to apply with 2Checkout payment method.
    - **Card Types**:
      - Choose 1 or more cards for payment
      - Cards will be authenticated when customer completes the card number when checking out. For cards not selected in this section, there will be an invalid message for the customer. With the card not selected it will not be displayed on the Checkout page and when ordering the backend.
  
  ![](https://i.imgur.com/WXhCknf.png)

- With this type of payment display, customers can make 2Checkout payment right at the checkout page of the store.

![](https://i.imgur.com/gQM4m8T.png)

- **Display Checkout = Redirect Checkout**: When selecting this payment display type, after clicking the Place Order customer will be redirected to 2Checkout's payment page as below:

![](https://i.imgur.com/KsIyviq.png)

- **Display Checkout = Iframe Checkout**: When selecting this payment display type, after the customer clicks **Place Order**, there will be an Iframe that appears right on your website so that the customer can make 2Checkout payment as below:

![](https://i.imgur.com/nVKhzyc.png)

- **Payment from Applicable Countries**:
  - Select **All Countries** to have Card payment method available in all countries
  - Select **Specific Countries** to limit certain countries to use this payment method
    - **Payment from Specific Countries**: The selected countries will be shown the Card payment method
- **Minimum Order Total**: Enter the minimum value of the total order to be able to use this payment method. You can leave this field blank.
- **Maximum Order Total**: Enter the maximum value of the total order to be able to use this payment method. You can leave this field blank.
- **Debug Mode**: If **Yes**, diagnostic information is stored in log files on the Magento web server.
- **Sort Order**:
  - Specifies the display position of 2Checkout compared to other payment methods
  - 0 is the highest priority. The smaller the number, the more priority will be displayed in the first position.



## View Order

### 1. Frontend View Order

This section saves the 2Checkout Payment Method information that the customer used to pay for the order.

![](https://i.imgur.com/r1STQSu.png)

### 2. Backend View Order

This section saves the 2Checkout Payment Method information that the customer used to pay for the order. Here, admin can click **2Checkout Order ID** access **Sandbox** to manage details about this order on Sandbox.

[](https://i.imgur.com/4cAfzDN.png)

### 3. Comment History & Transactions

This section displays information about transactions and detailed comments for each action (invoice, refund,...) with order paid via 2Checkout. Only admin can see this section.

![](https://i.imgur.com/z8esbhh.png)

### 4. Refund Order

Here admin can **Refund Online/ Offline** all or partially of the order. The information about **Refund Online** will be sent to the **Sandbox** and saved in the **Comment History & Transactions** section as below.

![](https://i.imgur.com/Ipy8AON.png)
