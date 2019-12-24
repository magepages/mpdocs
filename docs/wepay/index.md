# Wepay

## Overview

[Mageplaza WePay extension](https://www.mageplaza.com/magento-2-wepay/) will help you integrate this payment gateway with your store. WePay supports online payment via card and customers can save credit card information at the first payment to save time on subsequent payments. Customer can manage saved credit card information and delete card information at any time. In particular, the admin can order in the backend by WePay payment with customers who have saved the card before. May change the payment method, including 3 different display types.

Mageplaza WePay extension is fully compatible with [Mageplaza One Step Checkout](https://www.mageplaza.com/magento-2-one-step-checkout-extension/) and Instant Purchase which will help customers to place orders quickly and conveniently.

## How to use

**Wepay**

- To register for a WePay account, access [this link](https://stage.wepay.com/register) and fill in the required information below, then click **Sign Up**:

![](https://i.imgur.com/ul4qLKX.png)

Choose the best option describe you to use WePay and fill in the information below, then click **Next**:

![](https://i.imgur.com/mbvyz92.png)

- Next, fill out the application information in the form below, click **Next**:

![](https://i.imgur.com/sflfAtG.png)

- After clicking **Next**, the screen displays **API Keys**. For full support, you need to **Tokenize credit cards** by visiting the **API Key** page, please click **Apply Now**:

![](https://i.imgur.com/rrEIinL.png)

- Select the **Payment Card Industry Data Security Standards** to **Access To Credit Card Tokenization API**, then click **Submit**:

![](https://i.imgur.com/CWI1GMD.png)

- Finally, here you can get the **Account ID, Client ID, Client Secret, Access Token** to fill in **Configuration** (will be guided below):

![](https://i.imgur.com/xcZyINi.png)

- **Checkout Integration Method**: displays 3 integration types with payment via WePay:
  - **Magento Default**:
  
  ![](https://i.imgur.com/4N7HY4h.png)
  - **Redirect Checkout:
  
  ![](https://i.imgur.com/Zxc3Auy.png)
  - **Iframe Checkout:
  
  ![](https://i.imgur.com/a1XnFfD.png)

- Displaying Payment Method in Create Backend Order:

![](https://i.imgur.com/jbrBgWO.png)

- **Stored Payment Methods**: Here save credit card information that customers have paid before in there account. If you do not want to save the old or no longer used credit cards, customers can delete them.

![](https://i.imgur.com/uTJieBY.png)

- You can test the payment process with the following Cards:

4003830171874018: VISA Test CC number.

4111111111111111: VISA Test CC number.

5496198584584769: Mastercard Test CC number.

2223000048400011: Mastercard Test CC number.

2223520043560014: Mastercard Test CC number.

378282246310005: Amex Test CC number.

371449635398431: Amex Test CC number.

6011111111111117: Discover Test CC number.

6011000990139424: Discover Test CC number.

3530111333300000: JCB Test CC number.

3566002020360505: JCB Test CC number.

30569309025904: Diners Club Test CC number.

38520000023237: Diners Club Test CC number.

- To find out and have more information to check, please visit [here](https://developer.wepay.com/docs/articles/testing).


## How to Configure

Login to the Magento Admin, choose `Stores > Configuration > Sales > Payment Methods`:

At WePay Payment Method, click **Configure**:

![](https://i.imgur.com/60faVv2.png)

### 1. Credentials

![](https://i.imgur.com/wnCnNXs.png)

- **Environment**:
  - Admin can choose Sandbox environment to check the payment features of the methods.
  - When applying for online payment, the admin needs to switch the environment to Production.
- **Account ID**:
  - Copy **Account ID** got from WePay and paste here.
  - If left blank or entered incorrectly, the payment method will not be connected.
- **Client ID**:
  - Copy the **Client ID** got from WePay and paste here.
  - If left blank or entered incorrectly, the payment method will not be connected.
- **Client Secret**:
  - Copy **Client Secret** got from WePay and paste here.
  - If left blank or entered incorrectly, the payment method will not be connected.
- **Access Token**:
  - Copy the **Access Token** got from WePay and paste here.
  - If left blank or entered incorrectly, the payment method will not be connected.

### 2. General

Login to the Magento Admin, choose `Stores > Configuration > Sales > Payment Methods > WePay Payment Method > Configure > General`

![](https://i.imgur.com/btDkbTl.png)

- **Enable**: Select **Yes** to turn on WePay payment.
- **Title**: Enter the title of the method. The name of the payment method will be replaced displayed on the checkout page.
- **Checkout Integration Method**: Choose the display type of payment by WePay Cards:
![](https://i.imgur.com/UKthTk9.png)
- **Magento Default**: Displays the payment method of WePay Cards on the default checkout page of magento.
- **Redirect Checkout**: Redirect payment to the WePay payment page. Display the **Enable Bank Payment** field.
- **Enable Bank Payment = Yes**, Wepay will display 2 forms of payment:
  - **Pay with Credit Card**:
  
  ![](https://i.imgur.com/WuGvij0.png)
  - **Pay with Bank Account**:
  
  ![](https://i.imgur.com/e6SkNop.png)
  
After filling all information -> Click Next -> enter email -> Confirm to complete the payment:

![](https://i.imgur.com/ctkhTlx.png)

**Enable Bank Payment = No**, only pay by Credit Card:

![](https://i.imgur.com/bDLiEPn.png)

- **Iframe Checkout**: Displays the payment method of Wepay Cards on the inline checkout page. Display the **Enable Bank Payment** field.

- **Enable Bank Payment = Yes**, show automatic payment link:
![](https://i.imgur.com/0bUM7FC.png)
- **Enable Bank Payment = No**:
![](https://i.imgur.com/1XUXxfq.png)

After filling all information -> Click Next -> enter email -> Confirm to complete the payment:
![](https://i.imgur.com/sbXzBav.png)
- **Payment Action**:
  - **Authorize and Capture**: Payment will be captured immediately after the order is placed successfully. At that moment, the customer's card will be applied for the order and the **Invoice** will be created.
  
  - **Authorize**: Payment will only be captured when admin creates an **Invoice** for customer' s order. When the **Invoice** is successfully created, admin can receive money from customer' s card.
  
- **New Order Status**: Select status when customer order succeeds:
  - **Processing**: Display status with **Processing** when order is successful. You can change the status in the backend with each order.
  - **Suspected Fraud**: Displays status with **Suspected Fraud** when order is successful. You can change the status in the backend with each order. With this status admin can accept payment or reject payment and then transfer status to **Processing**.
  
- **Vault Enabled**: Select **Yes** to display previously saved cards.

- **Vault Title**: Enter the title of the method. The name of the payment method will be replaced displayed on **Order Information**:

![](https://i.imgur.com/1AJIa3V.png)

- **Fee Payer**: Select who is charged for service fee

![](https://i.imgur.com/GhLfmAt.png)

- **Merchant pays all fees**: Merchants pay both processing and setting fees
- **Customers pay all fees**: Customers pay both processing and setting fees
- **Merchant pays setting fee, Wepay is charged for service fee**: Merchants pay setting fee, Wepay pays processing fee
- **Customers pays setting fee, Wepay is charged for service fee**: Customers pay setting fee, Wepay pays processing fee
- Formola to claculate processing fee: `(Order Total + Setting fee) * 2.9% + 0.3`
- **Setting Fee Amount**: Enter the setting fee amount that you want to apply. 

- **Payment from Applicable Countries**:
  - Select the **All Allowed Countries** to apply Card payment methods in all countries
  - To restrict this payment with more conditions, see [Payment Restrictions](https://www.mageplaza.com/magento-2-payment-restriction/) module.
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
  
  
### 3. Admin order

#### 3.1. Create New Order

![](https://i.imgur.com/2POPc6G.png)

#### 3.2. View Order

![](https://i.imgur.com/XfxBBKA.png)

### 4. Order Frontend

This section stores card information that customers have ordered:

![](https://i.imgur.com/QZPG52b.png)

### 5. Compatible

#### 5.1. Compatible with One Step Checkout

![](https://i.imgur.com/wpNWTrF.png)

#### 5.2. Compatible with Instant Purchase

In this part, customers can use **Instant Purchase** to make orders conveniently and quickly.

![](https://i.imgur.com/lnzPepa.png)

After clicking **Instant Purchase** displays the popup, click **OK** to confirm the order:

![](https://i.imgur.com/qpPUsFh.png)

### 6. Refund Order

Here admin can Refund Online/Offline all orders or each order.

![](https://i.imgur.com/VVpyyWt.png)

### 7. WePay Extra Fee

When paying through WePay, customer will have to pay an Extra Fee and this WePay Extra Fee information is displayed in the view order page when customer order is completed.

![](https://i.imgur.com/XulcwQk.png)
