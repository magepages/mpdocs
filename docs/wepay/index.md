# Wepay

## Overview

WePay is a payment gateway with many unique features built specifically to meet all living and business payment needs. Mageplaza WePay extension will help you integrate this payment gateway with your store. WePay supports online payment via card and customers can save credit card information at the first payment to save time on subsequent payments. Customer can manage saved credit card information and delete card information at any time. In particular, the admin can order in the backend by WePay payment with customers who have saved the card before. May change the payment method, including 3 different display types.

Mageplaza WePay extension is fully compatible with Mageplaza One Step Checkout and Instant Purchase which will help customers to place orders quickly and conveniently.

How to use
Wepay:
To register for a WePay account, access this link and fill in the required information below, then click Sign Up:

Choose Best Conc with you to use WePay and fill in the information below, then click Next:

Next, fill out the application information in the form below, click Next:

After clicking Next, the screen displays API Keys. For full support, need to Tokenize credit cards by visiting the API Key page click Apply Now:

Select the Payment Card Industry Data Security Standards to Access To Credit Card Tokenization API, then click Submit:

Finally, here get the Account ID, Client ID, Client Secret, Access Token to fill in Configuration (will be guided below):

Checkout Integration Method: displays 3 types when paying with WePay:
Magento Default:

Redirect Checkout:

Iframe Checkout:

Displaying Payment Method in Order Backend:

Stored Payment Methods: Here save credit card information that customers have paid before. If you do not want to save the old or no longer used credit cards, customers can click on delete to delete.

You can check the checkout process with the following Cards:
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
To find out and have more information to check, please visit here.
How to Configure
Login to the Magento Admin, choose Stores> Configuration> Sale> Payment Methods:

At WePay Payment Method, click Configure:

1.Credentials
Login to the Magento Admin, choose Stores> Configuration> Sale> Payment Methods> At WePay Payment Method click Configure> Credentials:

Environment:
Admin can choose Sandbox environment to check the payment features of the methods.
When applying for online payment, the admin needs to switch the environment to Production.
Account ID:
Copy Account ID above here.
If left blank or entered incorrectly, the payment method will not be connected.
Client ID:
Copy the Client ID above here.
If left blank or entered incorrectly, the payment method will not be connected.
Client Secret:
Copy Client Secret above here.
If left blank or entered incorrectly, the payment method will not be connected.
Access Token:
Copy the Access Token above here.
If left blank or entered incorrectly, the payment method will not be connected.
2.General
Login to the Magento Admin, choose Stores> Configuration> Sale> Payment Methods> At WePay Payment Method click Configure> General

Enable: Select "Yes" to turn on the use of payment by WePay.
Title: Enter the title of the method. The name of the payment method will be replaced displayed on the checkout page.
Checkout Integration Method: Choose the display type of payment by WePay Cards:

Magento Default: Displays the payment method of WePay Cards on the default checkout page of magento.
Redirect Checkout: Redirect payment to the WePay payment page. Display the Enable Bank Payment field.
Enable Bank Payment = Yes, Wepay will display 2 forms of payment:
Pay with Credit Card:

Pay with Bank Account:

After filling all information -> Click Next -> enter email -> Confirm to complete the payment:

Enable Bank Payment = No, only pay by Credit Card:

Iframe Checkout: Displays the payment method of Wepay Cards on the inline checkout page. Display the Enable Bank Payment field.
Enable Bank Payment = Yes, show automatic payment link:

Enable Bank Payment = No:

After filling all information -> Click Next -> enter email -> Confirm to complete the payment:

Payment Action:
 Authorize and Capture: Payment will be Capture as soon as Customer Pla
Gửi phản hồi
Lịch sử
Đã lưu
Cộng đồng
