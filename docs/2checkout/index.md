# 2Checkout


## Overview

2Checkout is the leading payment processing system worldwide and is one of the most reliable payment methods. Mageplaza 2Checkout extension will help you integrate this payment method with your store to handle payments safely without users leaving the page. This extension of Mageplaza supports online payment via online credit card from customers in their country as well as abroad and customers can pay directly at Checkout page (Magento Default / Iframe Checkout) and Redirect to the page. 2Checkout (Redirect Checkout).

In addition, this extension allows customers to refund money online. With the Mageplaza 2Checkout extension, you have access to a complete set of administrative tools to keep track of your transactions, customer tracking and refunds and fraud monitoring.
Your customers can use all credit cards such as Visa, Mastercard, American Express, JCB, ... Admin can configure currencies as well as countries can use this payment method at my store. Moreover, this extension of Mageplaza also supports displaying information about transactions and detailed comments for each action (invoice, refund ...) with order payment via 2Checkout at the View Order in the backend.
Mageplaza 2Checkout extension is fully compatible with [Mageplaza One Step Checkout](https://www.mageplaza.com/magento-2-one-step-checkout-extension/).

## How to download and install

- [Download Mageplaza 2Checkout](https://www.mageplaza.com/magento-2-2checkout/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


## How to use

1. Sandbox: 

This is the environment that helps you track transactions using the 2Checkout payment method and check the payment feature with 2Checkout.

- To register for a Sandbox account, visit the [following link](https://sandbox.2checkout.com/sandbox/signup).

![Imgur](https://i.imgur.com/BoEnG0P.png)

- After registering the Sandbox account, please access `Account> Site Management` to fill in the information to manage the site. You need to enter **Approved URL** of your site here to manage. **Secret Word** is the secret code that Sandbox provides for your account. You will use it to configure in the **Credentials** section guided later.

![Imgur](https://i.imgur.com/Kz8Tw56.png)


- You must access the API section to get Publishable Key and Private Key and use it to configure in the Credentials section of this Extensions.

In addition, you must access the Account icon to get information about Account Number to configure at the Credentials section of this Extensions.

When you want to track transactions using the 2Checkout payment method and check the payment feature with 2Checkout on your website, visit the Sales section and check.






2. Production
This environment is suitable when you want to apply for online payments with 2Checkout. To register an account at Production, you visit here.
How to Configure

Login to the Magento Admin, choose Sales> Payment Method> 2Checkout.


1. Credential
Login to the Magento Admin, choose Sales> Payment Method> 2Checkout> Configure> Credentials Tab


Environment:
Admin can choose Sandbox environment to check payment feature with 2Checkout. Visit here to create an account and get the necessary information. Review the instructions in How to use> 1. Sandbox
When you want to apply for online payment, admin needs to change the environment to Production. Visit here to create an account and get the necessary information.
Merchant ID:
Enter your Account Number or Seller ID.
If left blank or incorrectly entered, it will not integrate with 2Checkout.
Publishable Key:
Enter Publishable Key received from 2Checkout.
If left blank or entered incorrectly, 2Checkout will not be connected.
Private Key:
Enter the Private Key received from 2Checkout.
If left blank or entered incorrectly, 2Checkout will not be connected.
API Username: Enter your API Username at 2Checkout. You can refer to how to create a Username API for 2Checkout here.
API Password: Enter your API Password at 2Checkout
Test Credential button: Admin can check the connection with 2Checkout by clicking the Test Credential button.
Approved URL: Enter Approved URL of your store. This field appears only when you select Environment = Sandbox.
2. General Configuration
Login to the Magento Admin, choose Sales> Payment Method> 2Checkout> Configure> General Tab



Enable: Select "Yes" to turn on the module and use the 2Checkout feature.
Title: Set the display title for this payment method at the storeview.
Payment Action: Use Payment Action here as "Authorize and Capture". Payment will be Capture immediately after the Customer Place order is successful. At that moment, the Customer's card will pay for the order and the Invoice will be created
New Order Status: Select status when customer orders successfully:
Processing: Display status with Processing when order is successful. You can change the status in the backend with each order.
Suspected Fraud: Displays status with Suspected Fraud when order is successful. You can change the status in the backend with each order. With this status admin can accept payment or reject payment and then transfer status to Processing.
Transfer Cart Items To Payment Gateway: Select "Yes" to transfer the list of items in the order to the payment gateway. In contrast, select "No".

Accepted Currencies: Admin can choose
Gửi phản hồi
Lịch sử
Đã lưu
Cộng đồng
