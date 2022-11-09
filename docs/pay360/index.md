# Pay360

## Overview

Pay360 by Capita has been providing secure payment services for over 20 years. Mageplaza Pay360 extension helps stores in integrating Pay360 to support online payment using cards in multiple countries. Trussted by large and small brands, this extension allows customers to experience a smooth payment process on all payment channels. 

Mageplaza Worldpay (Pay360) extension is fully compatible with [Mageplaza One Step Checkout](https://www.mageplaza.com/magento-2-one-step-checkout-extension/).

## Download and Install

- [How to download Pay360 extension](https://www.mageplaza.com/magento-2-worldpay/) 
- [How to install Mageplaza extension](https://www.mageplaza.com/install-magento-2-extension/) 


## How to use
### 1. Pay360

Go to [Sign up](https://docs.pay360.com/explorer-account/) to register an account for Pay360.

![](https://i.imgur.com/qI6yzvy.png)

After creating an account successfully, an email with the sign-in information to log in Pay360 Explorer will be sent to the email you used to register the account.

![](https://i.imgur.com/bYglUDf.png)

- Copy API User Name, API Password, Hosted Cashier to fill in the **Configuration** section (will be guided in the **How to Configure** section).

### 2. Display Checkout

![](https://i.imgur.com/S83xa8i.png)

- Click on **Redirect to Pay360 Hosted** button to be redirected to the payment card details page.

![](https://i.imgur.com/wvgpRsK.png)

- Fill in information and click **Pay Now** to be redirected to the payment confirmation page.

![](https://i.imgur.com/EvCQYjX.png)

- Click **Authenticated** to take the final step to authenticate your payment. After the payment is completed successfully, you will be taken to the **Order Success** page. 

- You can check the payment by some sample cards as following:

**Test card numbers**

Only the following credit/debit card numbers may be used for test payments in the test environment. When using test cards, you can specify an expiry date up to seven years in the future. The test cards do not have a card verification code or an issue number. Find more details [here](https://docs.pay360.com/getting-started/test-card-numbers/)

<table class="tg">
<thead>
  <tr>
    <th class="tg-1wig">CARD TYPE</th>
    <th class="tg-1wig">NUMBER</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0lax">MC_DEBIT</td>
    <td class="tg-0lax">9900000000005159</td>
  </tr>
  <tr>
    <td class="tg-0lax">MC_CREDIT</td>
    <td class="tg-0lax">9901000000005133</td>
  </tr>
  <tr>
    <td class="tg-0lax">VISA_DEBIT</td>
    <td class="tg-0lax">9902000000005132</td>
  </tr>
  <tr>
    <td class="tg-0lax">VISA_CREDIT</td>
    <td class="tg-0lax">9903000000005131</td>
  </tr>
  <tr>
    <td class="tg-0lax">AMEX</td>
    <td class="tg-0lax">9905000000005139</td>
  </tr>
</tbody>
</table>

## How to Configure
Log in to the **Magento Admin**, choose `Stores > Configuration > Sale > Payment Methods`

- At **Pay360** Payment Method, click **Configure**:

![](https://i.imgur.com/1ZZTKhk.png)

### 1. Credentials

Login to the **Magento Admin**, choose `Stores > Configuration > Sale > Payment Methods`. At the **Pay360** Payment Method, click `Configure > Credentials`:

![](https://i.imgur.com/3BerLeF.png)

- Environment:
  - Admin can choose Sandbox environment to check payment features of methods.
  - When you want to apply for online payment, admin needs to change the environment to Production.

- API Username:
  - Copy API Username above and paste it here.
  - If left blank or incorrectly entered, the payment method will not be connected.

- API Password: 
  - Copy API Password above and paste it here.
  - If left blank or incorrectly entered, the payment method will not be connected.

- Hosted Installation ID: 
  - Copy Hosted Cashier above and paste it here.
  - If left blank or incorrectly entered, the payment method will not be connected.

### 2. General Settings

Login to the **Magento Admin**, choose `Stores > Configuration > Sale > Payment Methods`. At the **Pay360** Payment Method, click `Configure > General Setting`:

![](https://i.imgur.com/26NPouY.png)

- **Show Pay360 Logo**: Select **Yes** to show the Pay360 logo on the payment page.

### 3. Pay360 Cards
Login to the **Magento Admin**, choose `Stores > Configuration > Sale > Payment Methods`. At the **Pay360** Payment Method, click `Configure > Pay360 Cards`:

![](https://i.imgur.com/YiOnCJI.png)

- **Enable**: Select **Yes** to enable using the Worldpay Cards payment feature.
- **Title**: Enter the title of the method. The name of the payment method will be replaced displayed on the checkout page.
- **New Order Status**: Select status when customer order succeeds:
  - **Processing**: Display status with Processing when order is successful. You can change the status in the backend with each order.
  - **Suspected Fraud**: Displays status with Suspected Fraud when order is successful. You can change the status in the backend with each order. With this status admin can accept payment or reject payment and then transfer status to Processing.
- **Payment Action**:  
  - **Authorize and Capture**: Payment will be captured immediately after the order is placed successfully. At that moment, the customer’s card will be applied for the order and the Invoice will be created.
  - **Authorize**: Payment will only be captured when admin creates an Invoice for customer’ s order. When the Invoice is successfully created, admin can receive money from customer’ s card.
- **Payment from Applicable Countries**:
  - Select the **All Allowed Countries** to apply Card payment methods in all countries
  - To restrict this payment with more conditions, see [Payment Restrictions module](https://www.mageplaza.com/magento-2-payment-restriction/).
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

### 4. Order Frontend

![](https://i.imgur.com/8ppxe7A.png)

### 5. Compatible One Step Checkout

![](https://i.imgur.com/nrY3hsU.png)
