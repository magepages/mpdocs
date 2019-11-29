# Barclaycard

## Overview


## How to use

### 1. Account registration instructions

- **Barclaycard**: to register for a Barclaycard account, access the [this link](https://mdepayments.epdq.co.uk/Ncol/Test/BackOffice/accountcreation/create?ISP=epdq&acountry=gb), complete the required information below:

![Imgur](https://i.imgur.com/LtgGx2c.png)

- After registration, the system will send password information via email that you have registered.

![Imgur](https://i.imgur.com/2EwB8AL.png)

- Open your registration email and get the login password information

![Imgur](https://i.imgur.com/cRzXs6p.png)

- Access the [this link](https://mdepayments.epdq.co.uk/Ncol/Test/Backoffice/login) to Login

![Imgur](https://i.imgur.com/Cy9mW7W.png)

- Barclaycard's interface after successful login

![Imgur](https://i.imgur.com/AFHt7th.png)

### 2. Hash algorithm

Hash algorithm needs to be same with Hash algorithm in barclay.

At the Barclaycard interface, click `Configuration > Technical information > Global security parameters`.

![Imgur](https://i.imgur.com/wr2kOqk.png)

![Imgur](https://i.imgur.com/vXfFTBa.png)

### 3. Instructions for getting User ID, e-Commerce SHA-in pass phrase, e-Commerce SHA-out pass phrase

- The **user ID** corresponds to the **PSPID** you used to log in

- To get the **e-Commerce SHA-in pass phrase**, at the Barclaycard interface, click `Configuration > Technical Information > Data and origin verification`.

![Imgur](https://i.imgur.com/zHFo9Yd.png)

- To get the **e-Commerce SHA-out pass phrase key**, at the Barclaycard interface, click `Configuration > Technical Information > Transaction feedback`. You go to **Security for request parameters** to get the key.

![Imgur](https://i.imgur.com/xK0ov1Z.png)

- Click `Configuration > Technical Information > Transaction feedback`, at **HTTP redirection** in the browser. Select the checkbox below to get feedback parameters of the transaction on the URL when redirecting.

![Imgur](https://i.imgur.com/KzKvyap.png)

### 4. Instructions for getting API User ID, API User Password, DirectLink SHA-in pass phrase, 3D Secure

- **API User ID / API User Password**: You need to create user for direct link method.

- At the interface of Barclaycard, click `Configuration > Users > New User`

- In Create user form, after filling out your information, click **Related FAQ** then click **Create** button.

![Imgur](https://i.imgur.com/G0y7VOG.png)

- To get the **DirectLink SHA-in pass phrase**, at the Barclaycard interface, click `Configuration > Technical Information > Data and origin verification`.

![Imgur](https://i.imgur.com/sI2dtAb.png)

- To display authentication with 3D Secure, at the Barclaycard interface, click `Advanced > Fraud detection`

![Imgur](https://i.imgur.com/S3bD5s9.png)

- Click on **Edit** at Credit Card to configure 3D Secure for the card. After configuration is complete, click **Submit**

![Imgur](https://i.imgur.com/AZbyMJc.png)

### 5. Checkout page

**Checkout page**: choose a payment method with **Barclaycard**. Fill out the credit card information including: **Credit Card Number, Expiration Date, Card Verification Number**. Including 2 payment methods of Barclaycard: **Barclaycard ePDQ e-Commerce, Barclaycard ePDQ DirectLink**.

#### Barclaycard ePDQ e-Commerce

![Imgur](https://i.imgur.com/Kau6XAR.gif)

#### Barclaycard ePDQ DirectLink

![Imgur](https://i.imgur.com/cfLOAt2.png)

- You can check the checkout process with the following Cards:

Use any of the card details below to process your test transactions. There may be scenarios where you need to perform different testing depending on the country of issue of a certain card scheme. To that end, we have provided both UK and international maestro test card numbers.

<p>&nbsp;</p>
<table>
<tbody>
<tr>
<td>
<p><span style="font-weight: 400;">Credit Card</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Number</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Amex Credit</span></p>
</td>
<td>
<p><span style="font-weight: 400;">374691000000004, 374691000000012</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Maestro</span></p>
</td>
<td>
<p><span style="font-weight: 400;">675914000000000004, 675914000000000012</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Maestro (International)</span></p>
</td>
<td>
<p><span style="font-weight: 400;">679999000000000004, 679999000000000012</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Mastercard Credit</span></p>
</td>
<td>
<p><span style="font-weight: 400;">5101110000000020</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Mastercard Debit</span></p>
</td>
<td>
<p><span style="font-weight: 400;">5573750000000022</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">UK Visa Electron</span></p>
</td>
<td>
<p><span style="font-weight: 400;">4001150000000012, 4001150000000038</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Visa Credit</span></p>
</td>
<td>
<p><span style="font-weight: 400;">4008800000000007, 4008800000000015</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Visa Debit</span></p>
</td>
<td>
<p><span style="font-weight: 400;">4094000000000017, 4094000000000025</span></p>
</td>
</tr>
</tbody>
</table>


- You can check the checkout process using 3D Secure with the following cards:

<p>&nbsp;</p>
<table>
<tbody>
<tr>
<td>
<p><span style="font-weight: 400;">Description</span></p>
</td>
<td>
<p><span style="font-weight: 400;">VISA</span></p>
</td>
<td>
<p><span style="font-weight: 400;">MASTERCARD</span></p>
</td>
<td>
<p><span style="font-weight: 400;">AMEX</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Authentication/ Account</span></p>
<p><span style="font-weight: 400;">Verification Successful</span></p>
</td>
<td>
<p><span style="font-weight: 400;">4874970686672022</span></p>
<p><span style="font-weight: 400;">4012007153923001</span></p>
</td>
<td>
<p><span style="font-weight: 400;">5130257474533310</span></p>
<p><span style="font-weight: 400;">5200003143732874</span></p>
</td>
<td>
<p><span style="font-weight: 400;">379764422997381</span></p>
<p><span style="font-weight: 400;">378069803818698</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Not Authenticated /Account Not Verified; Transaction denied</span></p>
</td>
<td>
<p><span style="font-weight: 400;">4253955490718757</span></p>
<p><span style="font-weight: 400;">4012007161850527</span></p>
</td>
<td>
<p><span style="font-weight: 400;">5199768787888942</span></p>
<p><span style="font-weight: 400;">5200006177946005</span></p>
</td>
<td>
<p><span style="font-weight: 400;">374706031281041</span></p>
<p><span style="font-weight: 400;">346455459929781</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Authentication/ Account Verification Could Not Be</span></p>
<p><span style="font-weight: 400;">Performed;</span></p>
<p><span style="font-weight: 400;">Technical or other problem.</span></p>
</td>
<td>
<p><span style="font-weight: 400;">4282713011953451</span></p>
</td>
<td>
<p><span style="font-weight: 400;">5148904639667695</span></p>
</td>
<td>
<p><span style="font-weight: 400;">371674415569022</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Attempts Processing Performed; Not Authenticated/Verified, but a proof of attempted authentication/verification is provided.</span></p>
</td>
<td>
<p><span style="font-weight: 400;">4839645466321180</span></p>
</td>
<td>
<p><span style="font-weight: 400;">5168693992589936</span></p>
</td>
<td>
<p><span style="font-weight: 400;">379943305931143</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Authentication/ Account Verification Rejected; Issuer is rejecting authentication/verification and request that authorisation not be attempted</span></p>
</td>
<td>
<p><span style="font-weight: 400;">4450022237973103</span></p>
</td>
<td>
<p><span style="font-weight: 400;">5144144373781246</span></p>
</td>
<td>
<p><span style="font-weight: 400;">376632086941180</span></p>
</td>
</tr>
</tbody>
</table>
<div class="ddict_btn" style="top: 390px; left: 414px;"><img src="chrome-extension://bpggmmljdiliancllaapiggllnkbjocb/icon/16.png" alt="" /></div>


To find out more cases, please visit [here](https://support.epdq.co.uk/en)

## How to Configure

Login to the Magento Admin, choose `Stores > Configuration > Sale > Payment Methods`

![Imgur](https://i.imgur.com/GRtIIDX.png)

At **Barclaycard Payment Method**, click **Configure**

![Imgur](https://i.imgur.com/gZ5w97w.png)

### 1.Credentials

At Barcylaycard click `Configure > Credentials`:

![Imgur](https://i.imgur.com/fe0NEPE.png)

- **Environment**:
  - Admin can choose **Sandbox** environment to check the payment features of the methods.
  - When applying for online payment, the admin needs to switch the environment to **Production**.
- **PSPID**:
  - Copy the above PSPID and paste it here.
  - If left blank or entered incorrectly, the payment method will not be connected.
- **Hash Algorithm**: Depends on your choice in the **Configuration Barclaycard** above
- **User ID**:
  - Copy the User ID above and paste it here.
  - If left blank or entered incorrectly, the payment method will not be connected.
- **e-Commerce SHA-in pass Phrase**:
  - Copy the e-Commerce SHA-in pass Phrase got above into this field.
  - If left blank or entered incorrectly, the payment method will not be connected.
- **e-Commerce SHA-out pass Phrase**:
  - Copy the e-Commerce SHA-out pass Phrase got above into this field.
  - If left blank or entered incorrectly, the payment method will not be connected.
- **User ID API**:
  - Copy the API User ID above and paste it here.
  - If left blank or entered incorrectly, the payment method will not be connected.
- **API User Password**:
  - Copy API User Password above and paste it here.
  - If left blank or entered incorrectly, the payment method will not be connected.
- **DirectLink SHA-in pass Phrase**:
  - Copy the DirectLink SHA-in pass Phrase above and paste it here.
  - If left blank or entered incorrectly, the payment method will not be connected.
  
### 2. Barclaycard ePDQ e-Commerce

![Imgur](https://i.imgur.com/KUmf2dC.gif)

- Enable: Select "Yes" to enable using Barclaycard ePDQ e-Commerce payment feature.
- Language Code: Select the option to change the language of the payment page that I redirect to.
- Title: Enter the title of the method. The name of the payment method will be replaced displayed on the checkout page.
- Payment Action:
  - Authorize and Capture: Payment will be Capture as soon as Customer Place orders are successful. At that moment, Customer's card will always pay for the order and Invoice will be created.
- Authorize: Payment will only be Capture when admin creates Invoice for Customer order. Once Invoice is successfully created, the admin can receive money from Customer's card.
- New Order Status: Select status when customer order is successful:
- Processing: Display status with Processing when the order is successful. Can change the status in the backend for each order.
- Suspected Fraud: Display the status with Suspected Fraud when the order is successful. Can change the status in the backend for each order. With this status, admin can accept payment or decline payment and then change status to Processing.
- Card Types:
- Choose 1 or more cards to pay.
- Cards will be verified when Customer completes card number when checking out. For cards not selected in this section, there will be invalid notice for customers. If the card is not selected, it will not appear in the Checkout page.
- Accepted Currencies: Choose Accepted currency to satisfy the Store's Currency to allow the payment method to be displayed.
- Payment from Applicable Countries:
- Select All Allowed Countries so the card payment method can be applied in all countries.
- To restrict this payment with more conditions, see Payment Restrictions module.
- Select Specific Countries to limit certain countries to be able to use this payment method
- Payment from Specific Countries: The selected countries will be displayed with the payment method by Card
- Show Logo: Click Choose File to download the image displayed for the payment method on the Checkout page.
- Minimum Order Total:
- Enter the minimum order amount to display and apply for payments using Barclaycard ePDQ e-Commerce.
- If the order amount is less than the school's information, payment methods will not be displayed.
- Maximum Order Total:
- Enter the maximum amount of Order to display and apply payment by Barclaycard ePDQ e-Commerce.
- If the order amount is greater than the school's information, the payment method will not be displayed.
- Debug Mode:
- If Yes, diagnostic information is stored in log files on the Magento web server.
- Sort Order:
- Specify the display position of this payment method compared to other payment methods
- 0 is the largest number. Smaller numbers will be preferred to show in the first position.
