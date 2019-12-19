# SMS Notification

Today, the use of email to send notifications to customers is very popular, but the effectiveness is not high. The reason is because customers do not regularly check email and they must have an internet connection to do it. Understanding this disadvantage, Mageplaza has launched SMS Notification extension, which helps to notify activities from store or related order via SMS to customer and admin more quickly and conveniently. 

In addition, we also support SMS Notification compatible with [One Step Checkout](https://www.mageplaza.com/magento-2-one-step-checkout-extension/). 

Moreover, this extension allows sending SMS notifications by integrating a 3rd party SMS gateway such as **Twilio, Amazon SNS.**

## Download and Install

- [Download Mageplaza SMS Notification](https://www.mageplaza.com/magento-2-sms-notification/)
- [Installation guide](https://www.mageplaza.com/install-magento-2-extension/)

## How to use

### 1. Customer registers to receive incoming notifications by SMS

![](https://i.imgur.com/9wFJ11s.png)

- **Customer enters OTP to verify phone number upon request**
  - **For customers who had an account already**
  
  ![](https://i.imgur.com/BRsm97j.png)
  - **For customers registering an account**
  
  ![](https://i.imgur.com/zNAPHtN.png)

### 2. Customer enters the phone number at Billing/Shipping to receive SMS of Order notification

![](https://i.imgur.com/vkL0Lr4.png)

**Customer click the checkbox to receive order notification via SMS**

![](https://i.imgur.com/bydBW1P.png)

## How to Configure

### I. Configuration

Login to the Magento Admin, go to `Stores> Configuration> Mageplaza> SMS Notification`.

![](https://i.imgur.com/k1V7X4n.png)


#### 1. General

![](https://i.imgur.com/1tOBswu.png)

- Select **Enable = Yes** to enable the module.
- Select **Verify Phone Number = Yes**: Customers will be verified phone number via OTP code.
- **Phone Codes**: Allows displaying the country prefix number.
![](https://i.imgur.com/M1DT2hj.png)
- **OTP Format**: Admin chooses the format for the OTP code. This field will only display when **Verify Phone Number = Yes**
  - **Alphanumberic**: The OTP code segment will contain both letters and numbers.
  - **Alphabetical**: OTP code segment will contain only words.
  - **Number**: The OTP code segment will only contain each number.

- **OTP Length**: Enter the length of the OTP. This field will only display when **Verify Phone Number = Yes**.

- **OTP Resend Times**: The number of times OTP is sent back to the customer. The system will send a notification when the number of OTP sent exceeds the allowed limit
- **OTP Limit Expired in**: Timelimit the customer is allowed to resend OTP

- **Sender Phone Number**: Enter the sender's phone number provided from Twilio. (Only used when **SMS Service Provider = Twilio**)

- **SMS Delivery**: Choose a 3rd party to integrate SMS gateway ([Twilio](https://www.twilio.com/console), [Amazon SNS](https://aws.amazon.com/))
  - **Twilio Account SID**: Admin enter Account SID to be integrated SMS   gateway. If left blank, Twilio will not be applied.
  - **Twilio Account Token**: Admin enter Account Token to be integrated   SMS gateway. If left blank, Twilio will not be applied.
  - **Access Key ID**: Admin enter Access Key ID to be integrated SMS   gateway. If left blank, Amazon SNS will not apply.
  - **Secret Access Key**: Admin enter the Secret Access Key to be integrated SMS gateway. If left blank, Amazon SNS will not apply.

- **Recipient Phone Number**: Enter the phone number of the recipient to notify the admin and this is also the phone number for you **Send Test** SMS.
- **Send Test SMS**: Click the button to check if SMS has been sent.

#### 2. Customer Notification

![](https://i.imgur.com/dNsSuEO.gif)

- **Enable SMS For**: Admin selects the options to allow sending SMS to the customer.
- **Sign Up Confirmation**: Enter content for SMS sent to customer when the system sends registration confirmation to customer.
  - For example:

```
Hello {{firstname}}
Please access {{confirmation_link}} below to confirm your registration before you can login to {store_name}
```

- **Sign Up Success**: Enter content for SMS sent to customer when customer successfully registered
  - For example:

```
Welcome to {{store_name}}
Thank you so very much for joining our store! Have a nice experience with our store!
```

- **Order Created**: Enter content for SMS sent to customer when customer order is successful
  - For example:

```
Hello {{firstname}}
Your order {{order_number}} has been placed.
```

- **Invoice Created**: Enter content for SMS sent to customer when order is created successfully invoice
  - For example:

```
Hello {{firstname}}
Your invoice has been generated for the order {{order_number}}.
Please visit {{customer_email}} to check.
```

- **Shipment Created**: Enter content for SMS sent to customer when order is successfully shipped. This SMS will be sent to the phone number of the person who received the order.
  - For example:

```
Hello {{firstname}}
The order {{order_number}} has been shipped.
```


- **Credit Memo Created**: Enter content for SMS sent to customer when the order is successfully credit memo.
  - For example:

```
Hello {{firstname}}
Your credit memo for the order {{order_number}} has been generated.
```

- **Contact Delivered**: Enter content for SMS sent to customer when customer contact delivered successfully.
  - For example:

```
Hello {{firstname}}
Your inquiry has been sent successfully! We will respond to your request shortly.
```


- **Share Product Link**: Enter content for SMS sent to customer when customer share link product is successful.
  - For example:

```
Hello {{firstname}}
Thanks for sharing our product.
```
- **Share Wishlist**: Enter content for SMS sent to customer when customer share wishlist is successful.

  - For example:

```
Hello {{firstname}}
Thanks for sharing your wishlist. We look forward to your purchase soon.
```

- **Subscription**: Enter content for SMS sent to customer when customer subscription is successful.
  - For example:

```
Hello {{firstname}}
You have successfully subscribed to our newsletter! You will receive our next newsletter.
```

- **Unsubscription**: Enter content for SMS sent to customer when customer unsubscription is successful.

  - For example:

```
Hello {{firstname}}
You have unsubscribed to our newsletter! Please feel free to register again at any time.
```

- **Product Price Change**: Enter content for SMS sent to customer when admin changes price product.
  - For example:

```
Hello {{firstname}}
Product {{product_name}} has just updated the price. Visit {store_name}} to view more details!
```

- **Product Back To Stock**: Enter content for SMS sent to customer when product back to stock.
  - For example:

```
Hello {{firstname}}
Product {{product_name}} has just been taken to stock. Visit {store_name}} and take it soon!
```

#### 3. Admin Notification

![](https://i.imgur.com/dNsSuEO.gif)

- **Enable SMS For**: Admin selects the options to allow sending SMS notifications to the admin.
- **Sending Frequency**: Admin selects the frequency of sending SMS notifications to the admin.

![](https://i.imgur.com/ui2wjvP.png)

- **Total New Accounts**: Enter content for SMS sent to the admin statistics the number of new accounts created.
  - For example:

```
Hello Admin
Today/This week/This month, your store has a total of {{number_new_customer}} new customers registering accounts.
Congratulations!
```

- **Total New Orders**: Enter the content for the SMS sent to the admin statistics the number of orders created.
  - For example:

```
Hello Admin
Today/This week/This month, your store has a total of {{number_new_order}} new orders placed.
Congratulations!
```

- **Total New Invoices**: Enter content for SMS sent to the admin statistics the number of invoices generated.
  - For example:

```
Hello Admin
Today/This week/This month, your store has a total of {{number_new_invoice}} invoices created.
```


- **Total New Shipments**: Enter the content for the SMS sent to the admin of the number of shipments generated.
  - For example:

```
Hello Admin
Today/This week/This month, your store has a total of {{number_new_shipment}} shipment processed.
```


- **Total New Credit Memos**: Enter content for SMS sent to the admin statistics the number of credit memos created.
  - For example:

```
Hello Admin
Today/This week/This month, your store has a total of {{number_new_memo}} memos generated.
```


- **Total New Inquiries**: Enter content for SMS sent to the admin statistics the number of inquiries generated.
  - For example:

```
Hello Admin
Today/This week/This month, your store has received {{number_new_contact}} new inquiries.
Check your email to update and respond soon!
```


- **Currency Update Warnings**: Enter content for SMS sent to the admin when an error message update currency is received
  - For example:

```
Hello Admin
There is something wrong with the currency update. Please check and try again.
```


- **Cron Error Warning**: Enter the content for the SMS sent to the admin when there is a cron error warning
  - For example:

```
Hello Admin
There is something wrong with your cron job. Please check and try again.
```

- **Sitemap Generation Warning**: Enter content for SMS sent to the admin when there is a sitemap generation error message.
  - For example:

```
Hello Admin
There is something wrong with the sitemap generation. Please check and try again.
```

### II. Admin add new/edit customer

Admin can help customers to register to receive notifications by entering customer phone number at backend. 

![](https://i.imgur.com/mCX3dTW.png)

### III. Compatible with One Step Checkout

![](https://i.imgur.com/5pLVWAu.png)
