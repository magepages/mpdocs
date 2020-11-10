# SMS Notification

Today, the use of email to send notifications to customers is very popular, but the effectiveness is not high. The reason is because customers do not regularly check email and they must have an internet connection to do it. Understanding this disadvantage, Mageplaza has launched SMS Notification extension, which helps to notify activities from store or related order via SMS to customer and admin more quickly and conveniently. 

In addition, we also support SMS Notification compatible with [One Step Checkout](https://www.mageplaza.com/magento-2-one-step-checkout-extension/). 

Moreover, this extension allows sending SMS notifications by integrating a 3rd party SMS gateway such as **Twilio, Amazon SNS.**

## Download and Install

- [Download Mageplaza SMS Notification](https://www.mageplaza.com/magento-2-sms-notification/)
- [Installation guide](https://www.mageplaza.com/install-magento-2-extension/)

## How to use

### 1. Customer registers to receive incoming notifications by SMS

![](https://i.imgur.com/jpa0gAZ.png)

- **Customer enters OTP to verify phone number upon request**

### 2. Customer enters the phone number at Billing/Shipping to receive SMS of Order notification

![](https://i.imgur.com/MAnRrEW.png)

## How to Configure

### I. Configuration

Login to the Magento Admin, go to `Stores> Configuration> Mageplaza> SMS Notification`.

![](https://i.imgur.com/9Wnil63.png)


#### 1. General

![](https://i.imgur.com/i85kFW4.png)

- Select **Enable = Yes** to enable the module.
- **Phone Codes**: Allows displaying the country prefix number.

![](https://i.imgur.com/Xk8mxKn.png)

- **SMS Delivery**: Choose the third-party for SMS integration ([Twilio](https://www.twilio.com/console), [Amazon SNS](https://aws.amazon.com/))
  - **Twilio Account SID**: Admin enter Account SID to be integrated SMS   gateway. If left blank, Twilio will not be applied.
  - **Twilio Account Token**: Admin enter Account Token to be integrated   SMS gateway. If left blank, Twilio will not be applied.
  - **Access Key ID**: Admin enter Access Key ID to be integrated SMS   gateway. If left blank, Amazon SNS will not apply.
  - **Secret Access Key**: Admin enter the Secret Access Key to be integrated SMS gateway. If left blank, Amazon SNS will not apply.
- **OTP Format**: Admin chooses the format for the OTP code. This field will only display when **Verify Phone Number = Yes**
  - **Alphanumberic**: The OTP code segment will contain both letters and numbers.
  - **Alphabetical**: OTP code segment will contain only words.
  - **Number**: The OTP code segment will only contain each number.
- **Recipient Phone Number**: Enter the phone number of the recipient to notify the admin and this is also the phone number for you **Send Test** SMS.
- **Send Test SMS**: Click the button to check if SMS has been sent.

1.1 OTP

![](https://i.imgur.com/LmjCUXy.png)

- Select **Verify Phone Number = Yes**: Customers will verify the phone number with OTP 

*Note: ALL of the following fields show up only when the ***Verify Phone Number = Yes***

- **OPT Format**: Admin chooses format for the OTP
  - **Alphanumeric**: OTP includes both numbers and letters
  - **Alphabetical**: OTP includes letters only
  - **Numeric**: OTP includes numbers only
- **OTP Length**: Enter the length of the OTP. This field will only display when **Verify Phone Number = Yes**.
- **OTP Resend Times**: The number of times OTP is sent back to the customer. The system will send a notification when the number of OTP sent exceeds the allowed limit
- **Resend after over-limit in**: The time amount (in hours) the OTP will be resent in case it is sent over the allowed times above

#### 2. Cusstomer Notification

2.1 Order Subscription

![](https://i.imgur.com/Ob1YprA.png)

- **Enable**: Choose Admin selects the options to allow sending SMS to the customer.
- **Check by Default**:  If Yes, after a new account is created, the subscription is auto-checked at the My account section.
- **Order Created Subscription**: Choose **Yes** to enable SMS sent to customers when they finish order successfully
  - **Order Created Message** shows up when **Order Created Subcription = Yes**. Fill in the message content
  - For example:

```
Hello {{billing_address.firstname}}
Your order {{order_number}} has been placed.
```
  - Supporting variables: {{order_number}} 

- **Invoice Created Subscription**: Choose **Yes** to enable the SMS sent to customers when admin creates invoice successfully
  - **Invoice Created Message** shows up when **Invoice Created Subscription = Yes.**. Fill in the message content
  - For example:

```
Welcome to {{store_name}}
Thank you so very much for joining our store! Have a nice experience with our store!
```

- **Order Created**: Enter content for SMS sent to customer when customer order is successful
  - For example:

```
Hello {{billing_address.firstname}}
Your invoice has been generated for the order {{order_number}}.
Please visit {{customer_email}} to check.
```

- **Invoice Created**: Enter content for SMS sent to customer when order is created successfully invoice
  - For example:

```
Hello {{firstname}}
Your invoice has been generated for the order {{order_number}}.
Please visit {{customer_email}} to check.
```
  - Supporting variables: 
    - {{invoice_number}}
    - {{order_number}}
- **Shipment Created Subscription**: Choose **Yes** to enable the SMS sent to customers when admin creates the shipment successfully. 
  - **Shipment Created Message** shows up when **Shipment Created Subscription = Yes**. Fill in the message content. 
  - For example: 

```
Hello {{billing_address.firstname}}
The order {{order_number}} has been shipped.
```
  - Supporting variables: 
    - {{shipment_number}}
    - {{order_number}}

- **Credit memo Created Subscription**: Choose **Yes** to enable the SMS sent to customers when admin creates the credit memo successfully.
  - **Creditmemo Created Message** shows up when **Creditmemo Created Subscription = Yes.**. Fill in the message content.
  - For example:

```
Hello {{billing_address.firstname}}
Your credit memo for the order {{order_number}} has been generated.
```
  - Supporting variables: 
    - {{creditmemo_number}} 
    - {{order_number}}
    
 **NOTE: Supporting variable for **Order, Invoice, Shipment, Credit memo**
- {{customer_email}}
- {{billing_address.vat_id}}
- {{billing_address.vat_is_valid}}
- {{billing_address.vat_request_id}}
- {{billing_address.vat_request_date}}
- {{billing_address.vat_request_success}} 
- {{billing_address.customer_address_id}}
- {{billing_address.prefix}} 
- {{billing_address.firstname}}
- {{billing_address.middlename}} 
- {{billing_address.lastname}}
- {{billing_address.suffix}}
- {{billing_address.company}} 
- {{billing_address.street}} 
- {{billing_address.city}} 
- {{billing_address.region}}
- {{billing_address.region_id}}
- {{billing_address.postcode}} 
- {{billing_address.country_id}}
- {{billing_address.telephone}} 
- {{billing_address.fax}} 
- {{billing_address.email}}
- {{shipping_address.vat_id}}
- {{shipping_address.vat_is_valid}}
- {{shipping_address.vat_request_id}}
- {{shipping_address.vat_request_date}}
- {{shipping_address.vat_request_success}} 
- {{shipping_address.customer_address_id}}
- {{shipping_address.prefix}} 
- {{shipping_address.firstname}}
- {{shipping_address.middlename}} 
- {{shipping_address.lastname}}
- {{shipping_address.suffix}}
- {{shipping_address.company}} 
- {{shipping_address.street}} 
- {{shipping_address.city}} 
- {{shipping_address.region}}
- {{shipping_address.region_id}}
- {{shipping_address.postcode}} 
- {{shipping_address.country_id}}
- {{shipping_address.telephone}} 
- {{shipping_address.fax}} 
- {{shipping_address.email}}

2.2 Behavior Subscription

![](https://i.imgur.com/4v3CqbV.gif)

- **Enable:** Choose **Yes** to enable the SMS for behavior subscription section.
- **Check by Default:** If **Yes** after a new account is created, the subscription is auto-checked at the My account section.
- **Sign Up Confirmation:** Choose **Yes,** to enable SMS sent to customers when the system sens the Sign-in verification. 
  - **Sign Up Confirmation Message** shows up when **Sign Up Confirmation = Yes.** Fill in message content
  - For example: 

```
Hello {{firstname}}
Please access {{confirmation_link}} below to confirm your registration before you can login to {store_name}
```
  - Supporting vaariables: 
    - {{confirmation_link}}
    - {{store_name}}
    - {{firstname}}
    - {{middlename}}
    - {{lastname}}

- **Sign Up Success:** Chọn Yes, cho phép gửi SMS đến customer khi customer đăng ký tạo account thành công.
  - **Sign Up Success Message** shows up when **Sign Up Success = Yes.** Fill in message content 
  - For example:
```
Welcome to {{store_name}}
Thank you so very much for joining our store! Have a nice experience with our store!
```
  - Supporting variables: {{store_name}}
- **Contact Delivered Subscription:** Choose Yes to enable SMS sent to customer when customer contact delivered successfully
  - **Contact Delivered Message** shows up when **Contact Delivered Subscription = Yes.** Fill in message content
  - For example:
```
Hello {{firstname}}
Your inquiry has been sent successfully! We will respond to your request shortly.
```
  - Supporting variables: 
    - {{name}}
    - {{telephone}}
    - {{email}}
    - {{comment}}
    - {{store_email}}
    - {{store_phone}}

- **Share Product Link Subscription:** Choose **Yes** to enable SMS sent to customers when they share link product successfully. 
   - **Share Product Link Message** shows up when **Share Product Link Subscription = Yes.** Fill in message content
```
Hello {{firstname}}
Thanks for sharing our product.
```
  - Supporting variables: 
    - {{firstname}}
    - {{middlename}}
    - {{lastname}}
    - {{store_email}}
    - {{store_phone}}
    - {{email}}

- **Share Wishlist Subscription:** Choose **Yes,** to enable SMS sent to customers when they share wishlist successfully.
  - **Share Wishlist Message** shows up when **Share Wishlist Subscription = Yes.** Fill in message content
```
Hello {{firstname}}
Thanks for sharing your wishlist. We look forward to your purchase soon.
```
  - Supporting variables: 
    - {{firstname}}
    - {{middlename}}
    - {{lastname}}
    - {{store_email}}
    - {{store_phone}}
    - {{email}}
    - {{sharing_code}}

- **Subscribe Subscription:** Choose **Yes** to enable SMS sent to customers when they subscribe successfully. 
  - **Subscribe Message** shows up when **Subscribe Subscription = Yes.**  Fill in message content
```
Hello {{firstname}}
You have successfully subscribed to our newsletter! You will receive our next newsletter.
```
  - Supporting variables:
    - {{firstname}}
    - {{middlename}}
    - {{lastname}}
    - {{email}}

- **Unsubscribe Subscription:** Choose **Yes** to enable SMS sent to customers when they unsubscribe successfully
  - **Unsubscribe Message** shows up when **Unsubscribe Subscription = Yes.** Fill in message content
```
Hello {{firstname}}
You have unsubscribed to our newsletter! Please feel free to register again at any time.
```
  - Supporting variables:
    - {{firstname}}
    - {{middlename}}
    - {{lastname}}
    - {{email}}

- **Product Price Change Subscription:** Choose **Yes** to enable SMS sent to customers when admin changes the product price.
  - **Product Price Change Message** shows up when Product Price Change Subscription = Yes. Fill in message content
```
Hello {{firstname}}
Product {{product_name}} has just updated the price. Visit {store_name}} to view more details!
```
  - Supporting variables: 
    - {{first_name}}
    - {{product_name}}

- **Product Back To Stock Subscription:** Choose **Yes** to enable SMS sent to customers when product is back to stock 
  - **Product Back To Stock Message** shows up when **Product Back To Stock Subscription = Yes.** Fill in message content
```
Hello {{firstname}}
Product {{product_name}} has just been taken to stock. Visit {store_name}} and take it soon!
```
  - Supporting variables: 
    - {{first_name}}
    - {{product_name}}

#### 3. Admin Notification

![](https://i.imgur.com/nwD7qbZ.gif)

 - Enable SMS For: Admin choose among options to send SMS to itself
 - Sending Frequency: Admin choose the frequency to send SMS to itself

![](https://i.imgur.com/UaxdfrV.png)

- **Total New Accounts:** Fill in content for SMS sent to admin suming up the number of newly created accounts

- For example:
```
Hello Admin
Today/This week/This month, your store has a total of {{number_new_customer}} new customers registering accounts.
Congratulations!
```
  - Supporting variables: {{number_new_customer}}

- **Total New Orders:** Fill in content for SMS sent to admin summing up the number of newly created orders
```
	Hello Admin
Today/This week/This month, your store has a total of {{number_new_order}} new orders placed.
Congratulations!
```
  - Supporting variables: {{number_new_order}}

- **Total New Invoices:** Fill in content for SMS sent to admin summing up the number of newly created invoices
```
Hello Admin
Today/This week/This month, your store has a total of {{number_new_invoice}} invoices created.
```
  - Supporting variables: {{number_new_invoice}}

- **Total New Shipments:** Fill in content for SMS sent to admin summing up the number of newly created shipments
```
Hello Admin
Today/This week/This month, your store has a total of {{number_new_shipment}} shipment processed.
```
  - Supporting variables: {{number_new_shipment}}

- **Total New Credit Memos:** Fill in content for SMS sent to admin summing up the number of newly created credit memos
```
Hello Admin
Today/This week/This month, your store has a total of {{number_new_memo}} memos generated.
```
  - Supporting variables: {{number_new_memo}}

- **Total New Inquiries:** Fill in content for SMS sent to admin summing up the number of newly created inquiries

```
Hello Admin
Today/This week/This month, your store has received {{number_new_contact}} new inquiries.
Check your email to update and respond soon!
```
    - Supporting variables: {{number_new_contact}}

- **Currency Update Warnings:** Fill in content for SMS sent to admin when there is an error warning

```
Hello Admin
There is something wrong with the currency update. Please check and try again.
```

- **Cron Error Warning:** Fill in content for SMS sent to admin when there is a cron error warning

```
Hello Admin
There is something wrong with your cron job. Please check and try again.
```

- **Sitemap Generation Warning:** Fill in content for SMS sent to admin when there is a sitemap generation error warning
```
Hello Admin
There is something wrong with the sitemap generation. Please check and try again.
```

### II. Admin register for customers to recieve SMS notification

Admin can help customers to register to receive notifications by entering customer phone number at backend. 

![](https://i.imgur.com/IHLW3PX.png)

### IV. REST API 

Mageplaza SMS Notification supports using REST API to perform some requests: Register Notification, Check Verify, Send OTP, Verify Telephone

View requests supported Mageplaza SMS Notification [here](https://documenter.getpostman.com/view/10589000/T1LPCRuN?version=latest). 

View REST API guidellines of Magento 2 [here](https://devdocs.magento.com/guides/v2.4/rest/bk-rest.html). View create token guidelines [here](https://devdocs.magento.com/guides/v2.4/get-started/authentication/gs-authentication-token.html). 

