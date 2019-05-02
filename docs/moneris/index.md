# Moneris

Moneris provides online payment services with different card types (debit, credit card, Visa), especially for customers in USA and Canada. [Mageplaza Moneris extension](https://www.mageplaza.com/magento-2-moneris/) will help you integrate this payment gateway with your store. Customers can save and edit credit card information at the first payment to save time at the next purchase. In particular, admin can configure the module to redirect to Moneris payment gateway. Also, Moneris support authorize, capture and 3D secure, AVS Verification. 

Mageplaza Moneris extension is fully compatible with [Mageplaza One Step Checkout](https://www.mageplaza.com/magento-2-one-step-checkout-extension/)

## How to download and install

- [Download Mageplaza Age Verification](https://www.mageplaza.com/magento-2-age-verification/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


## How to use
- Moneris:
  - To register the Moneris account, please access to [this link](https://developer.moneris.com/Profile/My%20Profile)



  - After logging in the Moneris account, request the sign in information in USA or Canada. At the Homepage > My Profile, click to ** Full Profile** 



  - At **Full Profile**, look at **My Testing Credentials**, click to **Request Testing Credentials** then a popup shown require you to fill in your password and country to verify your test account. 
 
 
  - At homepage, **Test Credentials** is on the right bar menu. Store ID is at the first line (represented by store icon). The second line is API Token (represented by a key icon). Admin need these two information to configure the module Moneris. 

- For USA: 
  - At Moneris Page, please go to `Admin > Hosted Config`. You need to configure Magento 2 using `hpp_id`, `hpp_key`. If you do not have a key, please click to `Generate a New Configuration` to create new keys.  

 
  - At **Response Method**, insert your Store **Response URL** then **Save Changes**. URLs must start with http or https and must be a registered domain. IP addresses are not supported here. 
  
- For Canada: 
  - Log in to your Moneris account and go to `Admin > Hosted Paypage Config`. You need to configure Magento 2 using `ps_store_id` and `hpp_key`. If you do not have a key, please click to `Generate a New Configuration` to create new keys.  
  

  - At **Respone/Receipt Field Configuration**, choose **Return the txn_number**. 
 

- **Checkout page**: Choose the Moneris Payment method. Fill in the credit card information: Credit Card Number, Expiration Date, Card Verification Number. Here, customers can save the credit cart information for the next payments.

- **Stored Payment Methods**: Here saves the credit card info. Customers can delete the outdate/ no-longer-used credit card.


 - **Redirect Moneris Checkout**: This feature will be configured by admin at backend, which allows customers to be redirected to Moneris Payment Gateway to process their payment. 
 
 
## How to Configure
### 1. Configuration

Login to the **Magento Admin**, choose `Stores > Configuration > Sales > Payment Method > Moneris`.

- **Enable**: Select **Yes** to activate the module. 

#### 1.1. Credentials

- **Environment**: 
  - Admin can choose **Sandbox** environment to test the payment by Moneris
  - For real payment on your live site, change the environment to **Production**
- **Merchant Server**: Choose the Moneris Payment in:
  - Canada:
  - USA:
- **Store ID**: 
  - Insert the Store ID got after sign up the Moneris account above.
  - If left blank or insert the wrong ID, you can not connect to Moneris. 
- **API Token**: 
  - Insert the API Token got after sign up the Moneris account above.
  - If left blank or insert the wrong ID, you can not connect to Moneris. 
- **Enable Hosted Payment Gateway**: 
  - Select **Yes**, customers are redirected to Moneris Paypage. And show more fields following:
    - **For Canada users**: 
      - **PS Store ID**: Insert the PS Store ID at configuration of Moneris hosted paypage to allow redirecting to Moneris Paypage. 
      - **Accept URL**:  Use Accept URL to configure the Moneris Hosted Paypage
      - **Cancel URL**: Use Accept URL to configure the Moneris Hosted Paypage
      - **HPP Key**: Insert the HPP key from Moneris Hosted Paypage to HPP Key Field.
    - **For USA users**:
      - **HPP ID**: Insert the HPP ID at configuration of Moneris hosted paypage to HPP ID Field.
      - **Response URL**: Use Response URL to configure the Moneris Hosted Paypage
      - **HPP Key**: Insert the HPP key from Moneris Hosted Paypage to HPP Key Field.
- **Test Credential button**: Admin can check your app by clicking to **Test Credential**.


#### 1.2. Card

- **Title**: Add the Payment Method Title, which will be shown at checkout page.
- **Payment Action**:
  -  **Authorize and Capture**: Payment is catured right after customers place order successfully. At that time, customers' credit card is used to pay before invoice is created then. 
  - **Authorize**: Payments captured only when Invoice is created. 
- **Card Types**: 
  - You can choose one or several card types to use in payment. 
  - Cards will be authorized after customers fill in Card ID at checkout. For the unselected cards, there is invalid message shown here. 
- **Allow Customer Credit Vault**: 
  - Select **Yes**, Credit Card Information will be saved in Customer account and can use it for payemnt right after. 
  - You can tick on the tick box to save the credit card ino. Do not apppy for Not Logged In customers. 
- **Vault Title**: 
  - Enter an alternate name in the **Vault Title** field. This name will be displayed when customer order is completed and using the previously saved credit card.
  - If left blank, use the default name
- **Payment from Applicable Countries**:
  - Select All Countries to make Card payment method available in all countries
  - Select Specific Countries to restrict certain countries to use this payment method
    - Payment from Specific Countries: The selected countries will be shown the Card payment method
- **Debug Mode**: If Yes, diagnostic information is stored in log file trên magento web server.
- **Sort Order**:
  - Specify the display position of this payment method compared to other payment methods
  - 0 is the largest number. The smaller the number, the more priority will be displayed in the first position.


#### 1.3. Verification and Security

- **Enable AVS Verification**: Select "yes: to turn on AVS verification for Billing Address of customers. AVS is only supported by Visa, MasterCard, Discover and American Express.
- **AVS verification failed**: verifying that AVS for Billing Address failed when Customer Name, Stress Address and Zip / Postal Code did not match. If AVS verification fails, you can:
  - **Reject Payment**: deny payment and customers cannot continue making payments.
  - **Accept Payment**: still accept payment for customers who pay more.
- **Enable CVD verification**: Select "Yes" to enable CVD verification for payment address (CVD is 3 digits on the back of the card). CVD is only supported by Visa, MasterCard, Discover, JCB and American Express.
- **CVD verification failed**: Verify CVD for Billing Address of customers who failed to CCVD wrong or unable to verify. If CVD verification fails, you can:
  - **Reject Payment**: deny payment and customers cannot continue making payments.
  - **Accept Payment**: still accept payment for customers who pay more.
- **Enable 3D secure**: Select Yes to use 3D Secure to verify Customer's card, thereby preventing payment fraud. Display add Force To Use field.
- **Force To Use**: Select Yes to verify the tag in a mandatory way. Only successful **3D Secure** verified cards can process orders.
- **Response Setting**:
  - Fill in the **Code** fields, Message to list the error cases that customer often encountered. Please refer here.
  - Click the **Add** button to add the case, click the delete icon to delete the error cases you want to delete.


### 2. Admin order
This section records the Credit Card (Moneris) information that the customer has ordered and paid.

 




