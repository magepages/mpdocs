# ABN AMRO

## Overview 

ABN AMRO is the most trusted payment service provider in the Netherlands. [Mageplaza ABN Amro extension](https://www.mageplaza.com/magento-2-abn-amro/) supports quick payment features that make your shopping experience safe and reliable. Mageplaza ABN AMRO extension is fully compatible with [Mageplaza One Step Checkout](https://www.mageplaza.com/magento-2-one-step-checkout-extension/).

## How to use
### 1. Account registration 

- ABN AMRO: to register for ABN AMRO's account, access the following link, fill in the required information below:

![](https://i.imgur.com/9a5LOWo.png)

- After registration is completed, the system will send a notice to your registration email

![](https://i.imgur.com/yRQcI3o.png)

- Click on the link in the email to create a password for your account

![](https://i.imgur.com/Jlblqez.png)

### 2. Instructions to get API Key for Sandbox

- After logging in, click `My Apps > Add a new App` to create new apps

![](https://i.imgur.com/Qx0h0FI.png)

- Enter a name for the app and select certain app then **Submit** to finish creating the new app.

![](https://i.imgur.com/7FmpbwC.png)

- Then click on your app, **API Key** will be shown at the **Keys** tab

![](https://i.imgur.com/HA5fTQR.png)

- At **API Products**, click **API Documentation** at the App you use to get **Client ID** and **Redirect URL**

![](https://i.imgur.com/92Ajcn3.png)

- In the **Sandbox**, select **Access**, this is the area containing the **Client ID** and **Redirect URL** for you to use in **Configuration** in the module

![](https://i.imgur.com/VvW6Ghr.png)

- Note: In case **Environment** chosen is **Production**, you need to send a request or contact the hosted bank ABN AMRO to provide API for you. See more details [here](https://developer.abnamro.com/faq).

### 3. Checkout Page

- With Sandbox mode, at checkout page, please click **Get Token** to select Account Number

![Imgur](https://i.imgur.com/De23COA.png)

- In **User Consent Page**, seleect one **Account Number** then click **Submit** to get the token

![Imgur](https://i.imgur.com/lYZ5ZTB.png)

- A new page shown, you need to copy the token code at the end of the URL to fill in checkout page. (see the image below, the token number is on the red line) 

![Imgur](https://i.imgur.com/dFfYRqi.png)

- Now paste the code to **Consent Token** at checkout page, click **Place Order** to complete payment. 

![Imgur](https://i.imgur.com/PwslRnh.png)

## How to Configure

Login to the Magento Admin, choose `Stores > Configuration > Sales > ABN AMRO`

![](https://i.imgur.com/Rq27jW9.png)

At ABN AMRO Payment Method, click **Configure**

![](https://i.imgur.com/1nVo87s.png)

### 1. Credentials
#### 1.1. Environment = Sandbox
Admin can choose Sandbox environment to test the functions of the ABN AMRO module. 

![](https://i.imgur.com/vkg6S9G.png)

- **Client ID**: With Sandbox, Client ID is entered by the system and admin cannot change it.
- **Sandbox API Key**:
  - Copy the API Key provided at the comment below into this field.
  - If left blank or fill in incorrectly, it will not connect to ABN ARMO.
- **Consent Token**: Click **Obtain Token** beside this box to fill in. 
- **Sandbox Merchant Account**: Admin chooses his merchant account.
- **Payment Scope**: Admin select payment area. 
  - With **SEPA**: Store must use the currency of EURO to checkout.
  - With **Cross Border**: Allows using all currencies to checkout.
- **Redirect URI**: With Sandbox, Redirect URI is auto-ntered by system and admin cannot change it. 
- **Consent Token**: Admins click to **Obtain Token** so the token will be auto-filled in the box. Then you should click to **Check Credentials** right after to verify if your all credentials are valid. 



#### 1.2. Environment = Production

When applying for online payment, the admin needs to switch the environment to Production.

![](https://i.imgur.com/k2TxYcS.png)

- **Client ID**: Admin needs to contact ABN AMRO provider to get merchant Client ID.
- **Public Certificate File**: Admin must upload the PSD2 certificate file. See more details about PSD2 [here](https://medium.com/abn-amro-developer/psd2-we-are-live-b12aac19689a).
- **Private Key File**: Admin must upload the PSD2 private key file. See more details about PSD2 [here](https://medium.com/abn-amro-developer/psd2-we-are-live-b12aac19689a).
- **Production API Key**: Admin enter API key provided by ABN AMRO bank. 
- **Production Merchant Account**: Admin enter his account from the ABN AMRO hosted bank.
- **Payment Scope**: Admin select payment area. 
  - With **SEPA**: Store must use the currency of EURO to checkout.
  - With **Cross Border**: Allows using all currencies to checkout.
- **Exchange Fee Bearer**: Admin chooses who is charged for exchange fee. 
- **Redirect URI**: Admin enter the stores' URL to be redirected to after customers choosing their cards at ABN AMRO website. Customers can get the consent token from this URL. 
- **Consent Token**: Admins click to **Obtain Token** so the token will be auto-filled in the box. Then you should click to **Check Credentials** right after to verify if your all credentials are valid. 

### 2. General

![](https://i.imgur.com/DP4Y1Xb.png)

- **Enable**: Select **Yes** to using the **ABN AMRO** payment on your store.

- **Title**: Set the title for this payment method at checkout page.

- **Payment Action**:
  - **Authorize and Capture**: Payment will be captured as soon as customer place orders successfully. At that moment, customer's card will always pay for the order and invoice will be created.
  - **Authorize**: Payment will only be captured when admin creates invoice for customer order. Once invoice is successfully created, the admin can receive money from customer's card.

- **New Order Status**: Status when customer orders successfully:
  - **Processing**: Display status with **Processing** when order is successful. You can change the status in the backend with each order.
  

- **Payment from Applicable Countries**:
  - Select **All Allowed Countries** so the card payment method can be applied in all countries.
  - To restrict this payment with more conditions, see [Payment Restrictions module](https://www.mageplaza.com/magento-2-payment-restriction/).
  - Select **Specific Countries** to limit certain countries to be able to use this payment method
    - Payment from **Specific Countries**: The selected countries will be displayed with the payment method by Card.
    

- **Minimum Order Total**:
  - Enter the minimum order amount to display and apply for **ABN AMRO** payments.
  - If the order amount is less than the value in this field, payment methods will not be shown.
  
- **Maximum Order Total**:
  - Enter the maximum amount of order to display and apply for **ABN AMRO** payments.
  - If the order amount is greater than the value in this field, the payment method will not be shown.
  
- **Sort Order**:
  - Specify the display position of this payment method compared to other payment methods
  - 0 is the highest priority. Smaller numbers will be preferred to show first.


### 3. Admin view order

![](https://i.imgur.com/PuLalco.png)

### 4. Admin create Credit Memo

- Admin gets the token to make a Refund.

- Note: Admin must choose a different Account Number from the Customer's Account Number to create backend refund. 

![](https://i.imgur.com/J4TVaq6.png)

### 5. Customer View Order

- This section stores the payment information that the customer has ordered

![](https://i.imgur.com/y2tpPWJ.png)

### 6. Compatible with One Step Checkout

![](https://i.imgur.com/ICeDMiV.png)
