# Sage Pay

## Overview

Sage Pay is Europe's leading independent payment service provider (PSP) and is one of the most trusted payment brands. [Mageplaza Sage Pay extension](https://www.mageplaza.com/magento-2-sage-pay/) will help you integrate this payment gateway with your store. Sage Pay supports online payment via card and customers can save credit card information at the first payment to save time at the next purchase. Also, customer can manage saved credit card information and delete card information at any time. In particular, the admin will be able to create backend order with Sage Pay.

Your customers can use all debit cards, credit cards, Visa, etc. And also be producted by authorizes, capture and 3D secure as well as AVS/CV2. Store can choose to redirect customer to Sage Pay Payment page or process all the purchase right on your checkout page. 

**Mageplaza Sage Pay** is fully compatible with our [One Step Checkout](https://www.mageplaza.com/magento-2-one-step-checkout-extension/) and Instant Purchase, which helps customers to order quickly and conveniently.

## How to download and install

- [Download Mageplaza Sage Pay](https://www.mageplaza.com/magento-2-sage-pay/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)

**Table of Contents**


## How to use

### Register Account on Sage Pay:

To register for a Sage Pay account, visit [this link](https://applications.sagepay.com/apply).

![Imgur](https://i.imgur.com/jedjPRM.png)

- *Note*: After registering an account, **Sage Pay** will send mail for authentication and after completing the registration, Sage pay will send information of **Vendor Name, Username, Password**. You need to save the above information to connect with Sage Pay.

- Access to Sage Pay, sign in by the account you registered before. Then do to `Settings > Administrator`, tick to `I understand that this will create new credentials and may break any existing Sage Pay API implementations.` then click **Create API credentials** button to get the **Integration Key, Integration Password**. Here, you also can get the infoamtion of **Form Integration Encryption Password**.


![Imgur](https://i.imgur.com/xGIfN2f.png)

![Imgur](https://i.imgur.com/YeqxkZZ.png)

- **Checkout page**: choose the payment method with Sage Pay. Enter credit card information including: **Credit Card Number, Expiration Date, Card Verification Number**. Here the customer can save credit card information for subsequent payments. Support 3 Sage Pay payment methods inlcuding **Sage Pay Direct/PI Intergration, Sage Pay Form Intergration, Sage Pay Server Intergration**.

![Imgur](https://i.imgur.com/GorWUlB.png)

  - **Magento Default**: Displays payment by Sage Pay by default of magento

![Imgur](https://i.imgur.com/KN2CFSD.png)

  - **Drop-in Checkout**: display Sage Pay payment in 2 types:
    - **Drop-in Checkout Inline**: display when **Use Pop-up** is turned off
    
    ![Imgur](https://i.imgur.com/b6Dq6ps.png)

    - **Show Drop-in Checkout Popup**: Display popup when Enable **Use Pop-up** and if you want to display popup at checkout page, then click on **Place Order**.

![Imgur](https://i.imgur.com/HfdnRIX.png)

- **Stored Payment Methods**: Here shown the credit card information that the customer has saved before. If they do not want to save the old or unused credit cards, click **Delete**

![Imgur](https://i.imgur.com/hldhhYv.png)


## How to Configure

### 1. Configuration

Login to the Magento Admin, choose `Sales > Payment Settings > Payment Method > Sage Pay`.

![Imgur](https://i.imgur.com/wdRx3r9.png)

#### 1.1. General Setting

##### 1.1.1. Credential

![Imgur](https://i.imgur.com/lMrLqMh.png)

- **Vendor Name**:
  - Enter the registered Sage Pay account name.
  - If you leave blank, you cannot use Sage Pay.
- **Environment**:
  - Admin can choose Sandbox environment to test Sage Pay function.
  - When you want to apply for online payment, please change to **Production**.
- **Username**:
  - Enter the username that you took when you registered your Sage pay account.
  - If left blank, you cannot connect to Sage Pay.
- **Password**:
  - Enter the password with the Sage pay account.
  - If left blank, you cannot connect to Sage Pay.
- **Server Domain**:
  - Enter **Domain** has been received from Sage pay. Used for **Sagepay Form/ Server Integration**.
  - If left blank or incorrectly entered, it will not integrate with Sage Pay.
- **Form Integration Encryption Password**:
  - Enter the password of Sage Pay. Used for **Sagepay Form/ Server Integration**.
  - If left blank or incorrectly entered, it will not integrate with Sage Pay.
- **Integration Key**:
  - Enter the **Key** received from Sage Pay. It is used for **Sagepay PI/ Direction Integration**.
  - If left blank or incorrectly entered, Sage Pay will not be connected.
- **Integration Password**:
  - Enter the received Password from Sage Pay. Using for **Sagepay PI/ Direction Integration**.
  - If left blank or incorrectly entered, Sage Pay will not be connected to your store.
- **Test Credential button**: Admin can check Sage Pay connection by clicking the Test Credential button.

##### 1.1.2. Security and Feature

![Imgur](https://i.imgur.com/DcSrOTK.png)

- **3D Secure Setting**: Select the authentication type with 3D Secure to verify the card of Customer:
  - **Use default MySagePay settings**: Use 3d Secure by installing my Sagepay by default to verify Customer's card, thereby preventing payment fraud
  - **Apply authentication even if turned off**: Use 3d Secure authentication even when turned off to verify Customer's tags
  
![Imgur](https://i.imgur.com/WZ0i44y.png)

- **Disable authentication and rules**: turn off using 3d Secure authentication and ignore rules in the Sage Pay installed to verify Customer's tags
- **Apply authentication but ignore rules**: authenticate 3d Secure but ignore the rules to verify the card of Customer.
- **Note**: For rules that can be configured when accessing MySagePay: `Settings > 3D Secure > click Add rule`, then select the condition where you want to apply the rule to verify.

![Imgur](https://i.imgur.com/CCLG53P.png)

- **AVS/CV2 Setting**: Choose the AVS/CV2 Verification for payment address of customers:
  - **Use default MySagePay settings**: Use AVS/CV2 verification for payment address as SagePay default setting. 
  - **Apply authentication even if turned off**: Use AVS/CV2 verification for payment address even if it is turned off. Access to **MySagePay** to set up.  

![Imgur](https://i.imgur.com/ZDjkPrW.png)

- **Disable authentication and rules**: Disable AVS/CV2 authentication for payment info and rules configured in Sage Pay.
- **Apply authentication but ignore rules**: Apply AVS/CV2 authentification for customers payment information but ignore the rules. 
- **Note**: For configuring the rules, you can go to **MySagePay** page choose `Settings > AVS/CV2 > Add rule,` then choose the authentification conditions you want to apply for the rules. 

![Imgur](https://i.imgur.com/rB40awC.png)


- **Enable Admin Orders**:
  - If you choose **Yes** admin can create new order Sage Pay.
  - Admin can only create an order with the customer who has saved the card information.
- **Display Logo on Frontend**: Select **Yes** to display the **Sage Pay logo** on the **Checkout page**.

![Imgur](https://i.imgur.com/eyOfFn6.png)

- **Enable Gift Aid**: If selecting **Yes**, the checkbox will be displayed to allow the customer to choose **Donate Tax to Gift Aid**. This feature only works when the Sage Pay account is enabled for Gift Aid. Only registered charities can use **Gift Aid** through the Sage Pay platform.
- **Note**: For Gift Aid, in some countries like UK, customers can get back some of the tax fee when making payments by donating through Gift Aid, a tax rebate incentive created to benefit organizations and **Charity and Community Amateur Sports Club (CASC)**. Gift Aid Details will be sent to Customer and Store Admin. They can check the information of their Gift Aid at Sage Pay page when access to `Transaction > Transaction Report > Daily`, click to the related order and choose **Additional Details** to view more. 

![Imgur](https://i.imgur.com/64lvv0K.png)


- **Sage Pay Payment Page Language**: Select the language for Sage Pay page to be able to set the language appropriate for each country to make payment process faster and more convenient.

Example: The following picture shows Sage Pay Payment Page with French language: 

![Imgur](https://i.imgur.com/EJCq4BO.png)

- **Surcharge Notice**:
  - Admin sets a notification on checkout page about additional charges when paying via Sage Pay.
  - If left blank, the message will not appear on Frontend.
  
  ![Imgur](https://i.imgur.com/Gbecslh.png)
  
#### 1.2. Sage Pay Direct/ PI Integration

![Imgur](https://i.imgur.com/io57jgC.png)

![Imgur](https://i.imgur.com/1OvSYvt.png)

- **Enable**: Select **Yes** to use **Sage Pay Direct/ PI Integration**.
- **Title**: Enter the title of the method which is displayed on the checkout page.
- **New Order Status**: Select status when customer order successfully:
  - **Processing**: Display status with **Processing** when order is successful. You can change the status in the backend with each order.
  - **Suspected Fraud**: Displays status with **Suspected Fraud** when order is successful. You can change the status in the backend with each order. With this status admin can accept payment or reject payment and then transfer status to Processing.
- **Payment Action**:
  - **Authorize and Capture**: Payment will be captured immediately after the Customer place order successfully. At that moment, the Customer's card will pay for the order and the Invoice will be created
  - **Authorize**: Payment will only be captured when admin creates an Invoice for Customer's order. When the Invoice is successfully created, admin can receive money from Customer's card


- **Cart Types**: 
  - You can choose one or multiple cart types
  - Cards will be verified after customers fill in card ID at checkout page. For other cards not be selected here, there will be an error message of invalid card shown to customers. Also, those cards will not be shown at Checkout page and Backend order. 
  
  ![Imgur](https://i.imgur.com/fjk76Cz.png)
  
- **Display Checkout**: choose the display type of Sage Pay Payment on checkout page:
  - **Magento Default**: Displays payment by Sage Pay by default of magento
  ![Imgur](https://i.imgur.com/KN2CFSD.png)
  - **Drop-in Checkout**: Show Sage Pay methods at checkout as Drop-in Checkout type. Choosing this type show the additional field:
    - **Use Pop-up**:
      - Choose **Yes** showing SagePay methods in Popup form
      
      ![Imgur](https://i.imgur.com/JFQg1Pf.png)
      
      - Choose **No**, showing SagePay methods in Inline form
      
      ![Imgur](https://i.imgur.com/wuopgIP.png)
      
- **Allow Customer Credit Vault**: 
  - If you select **Yes**, information about the credit card will be saved to the customer account and you can use it for payment instantly. If you want to save the card with your account, please contact Sage Pay.
  - Displays the checkbox to check whether you want to save or not. Not applicable for **Not Log In** account.
- **Vault Title**:
  - Enter an alternate name in the **Vault Title** field. This name will be displayed when customer order is completed and using the previously saved credit card.
 
 ![Imgur](https://i.imgur.com/ROkQ8gP.png)
 
  - If left blank the default name will be used.
- **Payment from Applicable Countries**:
  - Select **All Countries** to allow Card payment available in all countries
  - Select **Specific Countries** to limit certain countries to use this payment method
    - **Payment from Specific Countries**: the Card payment method will be shown only in the selected countries.
- **Sort Order**:
  - Specify the display position of this payment method compared to other payment methods
  - 0 is the highest number. The smaller the number, the more priority the method is displayed first.
  
  
#### 1.3. Sage Pay Form Integration

![Imgur](https://i.imgur.com/nSoedWQ.png)

- **Enable**: Select **Yes** to enable this payment function and redirect to the payment page of **Sage Pay Form Integration**.
- **Title**: Enter the title of the payment method which is displayed on the **Sage Pay Form Integration** page.
- **New Order Status**: Select status when customer order successfully:
  - **Processing**: Display status with **Processing** when order is successful. You can change the status in the backend with each order.
  - **Suspected Fraud**: Displays status with **Suspected Fraud** when order is successful. You can change the status in the backend with each order. With this status admin can accept payment or reject payment and then transfer status to Processing.
- **Payment Action**:
  - **Authorize and Capture**: Payment will be captured immediately after the Customer place order successfully. At that moment, the Customer's card will pay for the order and the Invoice will be created
  - **Authorize**: Payment will only be captured when admin creates an Invoice for Customer's order. When the Invoice is successfully created, admin can receive money from Customer's card
- **Payment from Applicable Countries**:
  - Select **All Countries** to allow Card payment available in all countries
  - Select **Specific Countries** to limit certain countries to use this payment method
    - **Payment from Specific Countries**: the Card payment method will be shown only in the selected countries.
- **Confirmation Email**: Select the Confirmation Email sent to:
  - **Send to both admins and customers**: Will send Confirmation Email to both customer and admin when customers pay via Sage Pay Form Integration page
  - **Not sending to anyone**: do not send Email Confirmation when customer pays via Sage Pay From Integration
  - **Send to admins only**: send Confirmation Email to admin only when customer pays via Sage Pay Form Integration. 
- **Admin Email**:
  - Enter the admin email receiver to send the confirmation email to them when customers pay via Sage Pay.
  - Allow multiple emails to send at once and they must be separated by comma (,).
- **Sort Order**:
  - Specify the display position of this **Sage Pay Form Integration** compared to other payment methods
  - 0 is the highest number. The smaller the number, the more priority the method is displayed first.
 
#### 1.4 Sage Pay Server Integration

![Imgur](https://i.imgur.com/GtjI5Jx.png)

- **Enable**: Select **Yes** to enable this payment function and redirect to the payment page of **Sage Pay Server Integration**.
- **Title**: Enter the title of the payment method which is displayed on the **Sage Pay Server Integration** page.
- **New Order Status**: Select status when customer order successfully:
  - **Processing**: Display status with **Processing** when order is successful. You can change the status in the backend with each order.
  - **Suspected Fraud**: Displays status with **Suspected Fraud** when order is successful. You can change the status in the backend with each order. With this status admin can accept payment or reject payment and then transfer status to Processing.
- **Payment Action**:
  - **Authorize and Capture**: Payment will be captured immediately after the Customer place order successfully. At that moment, the Customer's card will pay for the order and the Invoice will be created
  - **Authorize**: Payment will only be captured when admin creates an Invoice for Customer's order. When the Invoice is successfully created, admin can receive money from Customer's card
- **Profile**: Select the payment type of Sage Pay, click on **Place Order** will show popup with 2 types:
  - **Low**: redirect to simple payment pages with only one step and minimal format which is designed to run in iframe.
  
  ![Imgur](https://i.imgur.com/ZhQOsuf.png)

  - **Normal**: Displays the normal card selection page
  
  ![Imgur](https://i.imgur.com/I9dq84O.png)
  
- **Payment from Applicable Countries**:
  - Select **All Countries** to allow Sage Pay Server Integration available in all countries
  - Select **Specific Countries** to limit certain countries to use this payment method
    - **Payment from Specific Countries**: the **Sage Pay Server Integration** method will be shown only in the selected countries.
- **Sort Order**:
  - Specify the display position of **Sage Pay Server Integration** method compared to other payment methods
  - 0 is the highest number. The smaller the number, the more priority the method is displayed first.

