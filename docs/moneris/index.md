# Moneris

Moneris provides online payment services with different card types (debit, credit card, Visa), especially for customers in the USA and Canada. [Mageplaza Moneris extension](https://www.mageplaza.com/magento-2-moneris/) will help you integrate this payment gateway with your store. Customers can save and edit credit card information at the first payment to save time at the next purchase. In particular, admin can configure the module to redirect to Moneris payment gateway. Also, Moneris support authorizes, capture and 3D secure, AVS Verification. 

Mageplaza Moneris extension is fully compatible with [Mageplaza One Step Checkout](https://www.mageplaza.com/magento-2-one-step-checkout-extension/)

## How to download and install

- [Download Mageplaza Moneris](https://www.mageplaza.com/magento-2-moneris/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


## How to get the Moneris credentials 

### 1. Register Moneris account

  - To register the Moneris account, please access to [this link](https://developer.moneris.com/Profile/My%20Profile)

![](https://i.imgur.com/UPMqPNw.png)

  - After logging in the Moneris account, request to sign in information in USA or Canada by clicking to **Full Profile** 

![](https://i.imgur.com/740IGON.png)

  - At **Full Profile**, look at **My Testing Credentials**, click to **Request Testing Credentials** then a popup shown requires you to fill in your Password and Country to verify your test account. 
 
![](https://i.imgur.com/L59DskV.png)

![](https://i.imgur.com/ROPSK5i.png)

  - At homepage, **Test Credentials** is on the right bar menu. Store ID is at the first line (represented by store icon). The second line is API Token (represented by a key icon). Admin needs this two information to configure the module Moneris. 
  
  ![](https://i.imgur.com/EBm20d1.png)

- After logging in to your account, you need to fill in some account information and questions.

![](https://i.imgur.com/jfuRXQJ.png)


### 2. Configure Redirect Moneris Checkout

#### **For USA**: 
  - At Moneris Page, please go to `Admin > Hosted Config`. You need to configure Magento 2 using `hpp_id`, `hpp_key`. If you do not have these keys, please click to `Generate a New Configuration` to create new keys.  

 ![](https://i.imgur.com/8mt186n.png)
 
  - At **Response Method**, insert your Store **Response URL** then **Save Changes**. URLs must start with http or https and must be a registered domain. IP addresses are not supported here. 
  
  ![](https://i.imgur.com/0KzlCAq.png)
  
#### **For Canada**: 
  - Log in to your Moneris account and go to `Admin > Hosted Paypage Config`. You need to configure Magento 2 using `ps_store_id` and `hpp_key`. If you do not have those keys, please click to `Generate a New Configuration` to create new keys.  
  
![](https://i.imgur.com/bKrLLHT.png)
  -  At **Paypage Appearance** choose **Configure Appearance** to add the **Cancel button Url**.

![](https://i.imgur.com/bOjLp5R.png)

  - At **Response/Receipt Field Configuration**, choose **Return the txn_number**. This is a required selection. 
 
![](https://i.imgur.com/sstsymO.png)

- **Checkout page**: Choose the Moneris Payment method. Fill in the credit card information: Credit Card Number, Expiration Date, Card Verification Number. Here, customers can save the credit card information for the next payments.

![](https://i.imgur.com/R8fCX6T.png)

- **Stored Payment Methods**: Here saves the credit card info. Customers can delete the outdated/ no-longer-used credit card.

![](https://i.imgur.com/B6iGiqU.png)

<span id="redirect-moneris-checkout"></span>
 - **Redirect Moneris Checkout**: This feature will be configured by admin at backend, which allows customers to be redirected to Moneris Payment Gateway to process their payment. 
 
![](https://i.imgur.com/B6iGiqU.png)

- Here is the USA Moneris Checkout Page after being redirected:

![](https://i.imgur.com/c2xEfdd.png)

- Here is the Canada Moneris Checkout Page after being redirected:

![](https://i.imgur.com/14WrWzW.png)

- **Test card numbers**

Use any of the following test card numbers, a valid expiration date in the future, and any random CVC number, to create a successful payment. Each test card's billing country is set to U.S, Canada.

<p>&nbsp;</p>
<table>
<tbody>
<tr>
<td>
<p><span style="font-weight: 400;">BRAND</span></p>
</td>
<td>
<p><span style="font-weight: 400;">NUMBER</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">MasterCard</span></p>
</td>
<td>
<p><span style="font-weight: 400;">5454545454545454</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">MasterCard (Bin2 CAN)</span></p>
</td>
<td>
<p><span style="font-weight: 400;">2222400041240011</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">MasterCard (Bin2 US)</span></p>
</td>
<td>
<p><span style="font-weight: 400;">2223000048400011</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Visa</span></p>
</td>
<td>
<p><span style="font-weight: 400;">4242424242424242</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Amex</span></p>
</td>
<td>
<p><span style="font-weight: 400;">373599005095005</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">JCB</span></p>
</td>
<td>
<p><span style="font-weight: 400;">3566007770015365</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Diners</span></p>
</td>
<td>
<p><span style="font-weight: 400;">36462462742008</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Discover</span></p>
</td>
<td>
<p><span style="font-weight: 400;">6011000992927602</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Track 2</span></p>
</td>
<td>
<p><span style="font-weight: 400;">5258968987035454=06061015454001060101?</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">UnionPay</span></p>
</td>
<td>
<p><span style="font-weight: 400;">6250944000000771 &nbsp; </span> <span style="font-weight: 400;">Expiry date: 12/49 (MM/YY), CVN2 value '371'</span></p>
</td>
</tr>
</tbody>
</table>

- **3D Secure (MPI) test card numbers**

When testing your implementation of the Moneris MPI, you can use the VISA/MasterCard/Amex PIT (production integration testing) environment.

May only be tested in the following test stores

<p>&nbsp;</p>
<table>
<tbody>
<tr>
<td>&nbsp;</td>
<td>
<p><span style="font-weight: 400;">CANADA</span></p>
</td>
<td>
<p><span style=a"font-weight: 400;">US</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Store ID</span></p>
</td>
<td>
<p><span style="font-weight: 400;">store5</span></p>
</td>
<td>
<p><span style="font-weight: 400;">monusqa002</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">API Token</span></p>
</td>
<td>
<p><span style="font-weight: 400;">yesguy</span></p>
</td>
<td>
<p><span style="font-weight: 400;">qatoken</span></p>
</td>
</tr>
</tbody>
</table>

- **Test Card numbers (Visa and MasterCard Only)**

<p>&nbsp;</p>
<table>
<tbody>
<tr>
<td>
<p><span style="font-weight: 400;">CARD NUMBER</span></p>
</td>
<td>
<p><span style="font-weight: 400;">VERES</span></p>
</td>
<td>
<p><span style="font-weight: 400;">PARES</span></p>
</td>
<td>
<p><span style="font-weight: 400;">ACTION</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">4012001038443335</span></p>
</td>
<td>
<p><span style="font-weight: 400;">N</span></p>
</td>
<td>
<p><span style="font-weight: 400;">NA</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Send transaction to Moneris Payment Gateway using either the basic Purchase or the basic Pre-Authorization transaction. Set crypt_type = 6.</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">4012001038488884</span></p>
</td>
<td>
<p><span style="font-weight: 400;">U</span></p>
</td>
<td>
<p><span style="font-weight: 400;">NA</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Send transaction to Moneris Payment Gateway using either the basic Purchase or the basic Pre-Authorization transaction. Set crypt_type = 7.</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">4012001037141112</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Y</span></p>
</td>
<td>
<p><span style="font-weight: 400;">True</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TXN &ndash; Call function to create inLine window.</span></p>
<p><span style="font-weight: 400;">ACS &ndash; Send CAVV to Moneris Payment Gateway using either the Cavv Purchase or the Cavv Pre-Authorization transaction</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">4005559876540</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Y</span></p>
</td>
<td>
<p><span style="font-weight: 400;">True</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TXN &ndash; Call function to create inLine window.</span></p>
<p><span style="font-weight: 400;">ACS &ndash; Send CAVV to Moneris Payment Gateway using either the Cavv Purchase or the Cavv Pre-Authorization transaction</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">4012001037167778</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Y</span></p>
</td>
<td>
<p><span style="font-weight: 400;">True</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TXN &ndash; Call function to create inLine window.</span></p>
<p><span style="font-weight: 400;">ACS &ndash; Send CAVV to Moneris Payment Gateway using either the Cavv Purchase or the Cavv Pre-Authorization transaction</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">4012001037461114</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Y</span></p>
</td>
<td>
<p><span style="font-weight: 400;">False</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Card failed to authenticate. Merchant may choose to send transaction or decline transaction. If transaction is sent, use crypt type = 7.</span></p>
</td>
</tr>
</tbody>
</table>

- **Test Card numbers (AmEx Only)**

<p>&nbsp;</p>
<table>
<tbody>
<tr>
<td>
<p><span style="font-weight: 400;">CARD NUMBER AMEX ONLY</span></p>
</td>
<td>
<p><span style="font-weight: 400;">VERES</span></p>
</td>
<td>
<p><span style="font-weight: 400;">PARES</span></p>
</td>
<td>
<p><span style="font-weight: 400;">ACTION</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">375987000000062</span></p>
</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>
<p><span style="font-weight: 400;">Set crypt_type = 7</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">375987000000013</span></p>
</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>
<p><span style="font-weight: 400;">Set crypt_type = 6</span></p>
</td>
</tr>
</tbody>
</table>

- You can refer 3D secure testing [here](https://developer.moneris.com/en/More/Testing/Testing%203D%20Solutions)

  - CVD & AVS test card numbers

- Things to consider:
  - CVD is only supported by Visa, MasterCard, Discover, JCB and American Express.
  - AVS is only supported by Visa, MasterCard, Discover and American Express.
  - Card verification transaction is only supported by Visa, MasterCard, Discover and American Express.

- **VISA Pre-Authorization/Purchase with AVS & CVD ( Applicable for card: 4242424242424242)**

<p>&nbsp;</p>
<table>
<tbody>
<tr>
<td colspan="2">
<p><span style="font-weight: 400;">REQUEST</span></p>
</td>
<td colspan="2">
<p><span style="font-weight: 400;">RESPONSE</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">AMOUNT</span></p>
</td>
<td>
<p><span style="font-weight: 400;">RESPONSE</span></p>
</td>
<td>
<p><span style="font-weight: 400;">AVS</span></p>
</td>
<td>
<p><span style="font-weight: 400;">CVD</span></p>
</td>
</tr>
<tr>
<td colspan="4">
<p><span style="font-weight: 400;">AVS</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">$10.10</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Approved</span></p>
</td>
<td>
<p><span style="font-weight: 400;">A</span></p>
</td>
<td>
<p><span style="font-weight: 400;">M</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">$10.13</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Approved</span></p>
</td>
<td>
<p><span style="font-weight: 400;">D</span></p>
</td>
<td>
<p><span style="font-weight: 400;">M</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">$10.24</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Declined</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Y</span></p>
</td>
<td>
<p><span style="font-weight: 400;">M</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">$10.26</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Declined</span></p>
</td>
<td>
<p><span style="font-weight: 400;">S</span></p>
</td>
<td>
<p><span style="font-weight: 400;">M</span></p>
</td>
</tr>
<tr>
<td colspan="4">
<p><span style="font-weight: 400;">CVD</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">$10.30</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Approved</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Y</span></p>
</td>
<td>
<p><span style="font-weight: 400;">P</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">$10.36</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Declined</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Y</span></p>
</td>
<td>
<p><span style="font-weight: 400;">M</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">$10.37</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Declined</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Z</span></p>
</td>
<td>
<p><span style="font-weight: 400;">M</span></p>
</td>
</tr>
<tr>
<td colspan="4">
<p><span style="font-weight: 400;">COMBO (AVS AND CVD)</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">$10.40</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Approved</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Z</span></p>
</td>
<td>
<p><span style="font-weight: 400;">S</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">$10.41</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Approved</span></p>
</td>
<td>
<p><span style="font-weight: 400;">X</span></p>
</td>
<td>
<p><span style="font-weight: 400;">M</span></p>
</td>
</tr>
</tbody>
</table>

- **For other card types such as MasterCard, Discover, Visa, AMEX, please refer the testing [here](https://developer.moneris.com/More/Testing/E-Fraud%20Simulator)


- **CVD result definitions**

<p>&nbsp;</p>
<table>
<tbody>
<tr>
<td>
<p><span style="font-weight: 400;">VALUE</span></p>
</td>
<td>
<p><span style="font-weight: 400;">DEFINITION</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">M</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Match</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">N</span></p>
</td>
<td>
<p><span style="font-weight: 400;">No Match</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">P</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Not Processed</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">S</span></p>
</td>
<td>
<p><span style="font-weight: 400;">CVD should be on the card, but Merchant has indicated that CVD is not present.</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">U</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Issuer is not a CVD participant</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Y</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Match for AmEx/JCB only</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">D</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Invalid security code for AmEx/JCB</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Other</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Invalid response code</span></p>
</td>
</tr>
</tbody>
</table>

**Table of CAVV Result Codes**

<p>&nbsp;</p>
<table>
<tbody>
<tr>
<td>
<p><span style="font-weight: 400;">RESULT CODE</span></p>
</td>
<td>
<p><span style="font-weight: 400;">MESSAGE</span></p>
</td>
<td>
<p><span style="font-weight: 400;">WHAT THIS MEANS TO YOU AS A MERCHANT&hellip;</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">0</span></p>
</td>
<td>
<p><span style="font-weight: 400;">CAVV could not be verified or CAVV data was not provided when expected</span></p>
</td>
<td>
<p><span style="font-weight: 400;">For this transaction you may not receive protection from chargebacks as a result of using VBV as the CAVV was considered invalid at the time the financial transaction was processed. Please check that you are following the VBV process correctly and passing the correct data in our transactions.</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">1</span></p>
</td>
<td>
<p><span style="font-weight: 400;">CAVV failed validation; authentication</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Provided that you have implemented the VBV process correctly the liability for this transaction should remain with the Issuer for chargeback reason codes covered by Verified by Visa.</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">2</span></p>
</td>
<td>
<p><span style="font-weight: 400;">CAVV passed verification&mdash;authentication</span></p>
</td>
<td>
<p><span style="font-weight: 400;">The CAVV was confirmed as part of the financial transaction. This transaction is a fully authenticated VBV transaction (ECI 5)</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">3</span></p>
</td>
<td>
<p><span style="font-weight: 400;">CAVV passed verification&mdash;attempted authentication</span></p>
</td>
<td>
<p><span style="font-weight: 400;">The CAVV was confirmed as part of the financial transaction. This transaction is an attempted VBV transaction (ECI 6)</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">4</span></p>
</td>
<td>
<p><span style="font-weight: 400;">CAVV failed verification&mdash;attempted authentication</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Provided that you have implemented the VBV process correctly the liability for this transaction should remain with the Issuer for chargeback reason codes covered by Verified by Visa.</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">6</span></p>
</td>
<td>
<p><span style="font-weight: 400;">CAVV not verified, issuer not participating in CAVV verification</span></p>
</td>
<td>
<p><span style="font-weight: 400;">CAVV value was not verified, because the issueing bank does not participate in VBV</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">7</span></p>
</td>
<td>
<p><span style="font-weight: 400;">CAVV failed verification&mdash;attempted authentication</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Please check that you are following the VBV process correctly and passing the correct data in our transactions. Provided that you have implemented the VBV process correctly the liability for this transaction should be the same as an attempted transaction (ECI 6)</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">8</span></p>
</td>
<td>
<p><span style="font-weight: 400;">CAVV passed verification&mdash;attempted authentication</span></p>
</td>
<td>
<p><span style="font-weight: 400;">The CAVV was confirmed as part of the financial transaction. This transaction is an attempted VBV transaction (ECI 6)</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">9</span></p>
</td>
<td>
<p><span style="font-weight: 400;">CAVV failed verification&mdash;attempted authentication</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Please check that you are following the VBV process correctly and passing the correct data in our transactions. Provided that you have implemented the VBV process correctly the liability for this transaction should be the same as an attempted transaction (ECI 6)</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">A</span></p>
</td>
<td>
<p><span style="font-weight: 400;">CAVV passed verification&mdash;attempted authentication</span></p>
</td>
<td>
<p><span style="font-weight: 400;">The CAVV was confirmed as part of the financial transaction. This transaction is an attempted VBV transaction (ECI 6)</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">B</span></p>
</td>
<td>
<p><span style="font-weight: 400;">CAVV passed verification&mdash;attempted authentication, no liability shift</span></p>
</td>
<td>
<p><span style="font-weight: 400;">The CAVV was confirmed as part of the financial transaction. However, this transaction does qualify for the liability shift. Treat this transaction the same as an ECI 7.</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">C</span></p>
</td>
<td>
<p><span style="font-weight: 400;">CAVV was not verified&mdash;attempted authentication</span></p>
</td>
<td>
<p><span style="font-weight: 400;">If 3-D Secure Authentication Results Code value is 07 in the CAVV and the issuer did not return a CAVV results code in the authorization response,</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">D</span></p>
</td>
<td>
<p><span style="font-weight: 400;">CAVV was not verified&mdash;cardholder authentication</span></p>
</td>
<td>
<p><span style="font-weight: 400;">If 3-D Secure Authentication Results Code value is 00 in the CAVV and the issuer did not return a CAVV results code in the authorization response</span></p>
</td>
</tr>
</tbody>
</table>


## How to Configure
### 1. Configuration

Login to the **Magento Admin**, choose `Stores > Configuration > Sales > Payment Method > Moneris`.

![](https://i.imgur.com/TmrUkzE.png)

- **Enable**: Select **Yes** to activate the module. 

#### 1.1. Credentials

![](https://i.imgur.com/LeMyMmO.gifv)

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

![](https://i.imgur.com/MkExXbb.png)

- **Title**: Add the Title of Payment Method, which will be shown at checkout page.
- **Payment Action**:
  -  **Authorize and Capture**: Payment is captured right after customers place order successfully. At that time, customers' credit card is used to pay before invoice is created then. 
  - **Authorize**: Payments captured only when Invoice is created. 
- **Card Types**: 
  - You can choose one or several card types to use in payment. 
  - Cards will be authorized after customers fill in Card ID at checkout. For the unselected cards, there is an invalid message shown here. 
- **Allow Customer Credit Vault**: 
  - Select **Yes**, Credit Card Information will be saved in Customer account and can use it for payment right after. 
  - You can tick on the tick box to save the credit card ino. Do not apppy for Not Logged In customers. 
- **Vault Title**: 
  - Enter an alternate name in the **Vault Title** field. This name will be displayed when customer order is completed and using the previously saved credit card.
  - If left blank, use the default name
- **Payment from Applicable Countries**:
  - Select **All Countries** to allow Card payment method available in all countries
  - Select **Specific Countries** to restrict certain countries to use this payment method
    - **Payment from Specific Countries**: Choose the countries that allow this Card payment method
- **Debug Mode**: If Yes, diagnostic information is stored in log file on Magento web server.
- **Sort Order**:
  - Specify the display position of this payment method compared to other payment methods
  - 0 is the largest number. The smaller the number, the more priority the country is displayed first.


#### 1.3. Verification and Security

![](https://i.imgur.com/fccLy2a.png)

- **Enable AVS Verification**: Select **yes** to turn on **AVS verification** for **Billing Address** of customers. **AVS** is only supported by Visa, MasterCard, Discover and American Express.
- **AVS verification failed**: AVS verification for Billing Address failed when Customer Name, Street Address and Zip/ Postal Code do not match. In case AVS verification fails, you can:
  - **Reject Payment**: deny payment and customers cannot continue making payments.
  - **Accept Payment**: still accept payment for customers who want to keep making payments. 
- **Enable CVD verification**: Select **Yes** to enable CVD verification for payment address (CVD is 3 digits on the back of the card). CVD is only supported by Visa, MasterCard, Discover, JCB and American Express.
- **CVD verification failed**: Verify CVD for Billing Address failed when CVD is wrong or unable to verify. In case CVD verification fails, you can:
  - **Reject Payment**: deny payment and customers cannot continue making payments.
  - **Accept Payment**: still accept payment for customers who want to keep making payments. 
- **Enable 3D secure**: Select Yes to use 3D Secure to verify Customer's card, thereby preventing payment fraud. Display add Force To Use field.
- **Force To Use**: Select **Yes** to force user to verify their card. Only successful **3D Secure** verified cards can process orders.
- **Response Setting**:
  - Fill in the **Code**, **Message** fields to list the error cases that customer often encountered. Please refer [here](https://developer.moneris.com/More/Testing/Financial%20Response%20Codes).
  - Click the **Add** button to add the case, click the **Delete** icon to delete the error cases you want.


### 2. Admin order
This section records the Credit Card (Moneris) information that the customer has ordered and paid.

![](https://i.imgur.com/qA0zXcZ.png)

### 3. Order Frontend

![](https://i.imgur.com/Hpbt53W.png)

### 4. Compatible with Instant Purchase

- Customers can use **Instant Purchase** to place orders quickly. 
- **Note**: **Instant Purchase** only shown when you have saved your payment cards. Also, you should disable **3D Secure** because the card verification was done when customers fill in the payment card information.

![](https://i.imgur.com/oL1Ujmt.png)

- Compatible with [One Step Checkout](https://www.mageplaza.com/magento-2-one-step-checkout-extension/)

![](https://i.imgur.com/wfD3x1q.png)

- Compatible with [Mageplaza Payment Restriction](https://www.mageplaza.com/magento-2-payment-restriction/): Payment Restriction extension supports hiding/showing Moneris at Frontend following admin configurations. 

![](https://i.imgur.com/kCMzpqE.png)

### 5. Refund Order

Here admin can **Refund Online/ Offline** individual or all orders.

![](https://i.imgur.com/J8PsUS2.png)

### 6. Instructions for installing the library

- Create directory: `lib/internal/Mageplaza`
- Visit the link to download the **Moneris library** [here](https://gitlab.com/users/sign_in)
- Extract the **module-moneris-library** into `lib/internal/Mageplaza` and rename the file name you just extracted as: Moneris

![](https://i.imgur.com/HR4N1M2.png)
