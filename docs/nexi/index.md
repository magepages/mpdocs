# Nexi 

## Overview

Nexi provides payment services for many areas. Furthermore, this extension supports different payment cards, especially with customers in Italy. [Mageplaza Nexi extension]() will help you integrate this payment gateway with your store. Your customers can use various cart types and also include authorize, capture. These settings are custom admin at the backend.

Mageplaza Nexi extension is fully compatible with [Mageplaza One Step Checkout]()

## How to download and install

- [Download Mageplaza Nexi]()
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


## How to use Nexi 

**Redirect Nexi  Checkout**: This section has been configured by admin to redirect customers to the **Nexi Payment Gateway** to make payment there.

![](https://i.imgur.com/Kqh0vmr.png)

Following provides some **sample card information** for your testing:

<p>&nbsp;</p>
<table style="width: 611px;">
<tbody>
<tr>
<td style="width: 77px;">
<p><strong>Card Type</strong></p>
</td>
<td style="width: 149px;">
<p><strong>Card number</strong></p>
</td>
<td style="width: 49px;">
<p><strong>Deadline</strong></p>
</td>
<td style="width: 41px;">
<p><strong>CVV2*</strong></p>
</td>
<td style="width: 117px;">
<p><strong>Expected Result</strong></p>
</td>
<td style="width: 142px;">
<p><strong>Error message</strong></p>
</td>
</tr>
<tr>
<td style="width: 77px;">
<p><span style="font-weight: 400;">VISA</span></p>
</td>
<td style="width: 149px;">
<p><span style="font-weight: 400;">4539970000000006 (EUR)</span></p>
</td>
<td style="width: 49px;">
<p><span style="font-weight: 400;">12/2030</span></p>
</td>
<td style="width: 41px;">
<p><span style="font-weight: 400;">***</span></p>
</td>
<td style="width: 117px;">
<p><span style="font-weight: 400;">Pagamento accettato</span></p>
</td>
<td style="width: 142px;">
<p><span style="font-weight: 400;">Message Ok</span></p>
</td>
</tr>
<tr>
<td style="width: 77px;">
<p><span style="font-weight: 400;">VISA</span></p>
</td>
<td style="width: 149px;">
<p><span style="font-weight: 400;">4539970000000014 (EUR)</span></p>
</td>
<td style="width: 49px;">
<p><span style="font-weight: 400;">12/2030</span></p>
</td>
<td style="width: 41px;">
<p><span style="font-weight: 400;">***</span></p>
</td>
<td style="width: 117px;">
<p><span style="font-weight: 400;">Pagamento rifiutato</span></p>
</td>
<td style="width: 142px;">
<p><span style="font-weight: 400;">Auth. Denied</span></p>
</td>
</tr>
<tr>
<td style="width: 77px;">
<p><span style="font-weight: 400;">VISA</span></p>
</td>
<td style="width: 149px;">
<p><span style="font-weight: 400;">4539970000101010 (EUR)</span></p>
</td>
<td style="width: 49px;">
<p><span style="font-weight: 400;">12/2030</span></p>
</td>
<td style="width: 41px;">
<p><span style="font-weight: 400;">***</span></p>
</td>
<td style="width: 117px;">
<p><span style="font-weight: 400;">Pagamento rifiutato</span></p>
</td>
<td style="width: 142px;">
<p><span style="font-weight: 400;">expired card</span></p>
</td>
</tr>
<tr>
<td style="width: 77px;">
<p><span style="font-weight: 400;">VISA</span></p>
</td>
<td style="width: 149px;">
<p><span style="font-weight: 400;">4539970000104014 (EUR)</span></p>
</td>
<td style="width: 49px;">
<p><span style="font-weight: 400;">12/2030</span></p>
</td>
<td style="width: 41px;">
<p><span style="font-weight: 400;">***</span></p>
</td>
<td style="width: 117px;">
<p><span style="font-weight: 400;">Pagamento rifiutato</span></p>
</td>
<td style="width: 142px;">
<p><span style="font-weight: 400;">restricted card</span></p>
</td>
</tr>
<tr>
<td style="width: 77px;">
<p><span style="font-weight: 400;">VISA</span></p>
</td>
<td style="width: 149px;">
<p><span style="font-weight: 400;">4539970000109013 (EUR)</span></p>
</td>
<td style="width: 49px;">
<p><span style="font-weight: 400;">12/2030</span></p>
</td>
<td style="width: 41px;">
<p><span style="font-weight: 400;">***</span></p>
</td>
<td style="width: 117px;">
<p><span style="font-weight: 400;">Pagamento rifiutato</span></p>
</td>
<td style="width: 142px;">
<p><span style="font-weight: 400;">invalid merchant</span></p>
</td>
</tr>
<tr>
<td style="width: 77px;">
<p><span style="font-weight: 400;">VISA</span></p>
</td>
<td style="width: 149px;">
<p><span style="font-weight: 400;">4539970000110011 (EUR)</span></p>
</td>
<td style="width: 49px;">
<p><span style="font-weight: 400;">12/2030</span></p>
</td>
<td style="width: 41px;">
<p><span style="font-weight: 400;">***</span></p>
</td>
<td style="width: 117px;">
<p><span style="font-weight: 400;">Pagamento rifiutato</span></p>
</td>
<td style="width: 142px;">
<p><span style="font-weight: 400;">transaction not permitted</span></p>
</td>
</tr>
<tr>
<td style="width: 77px;">
<p><span style="font-weight: 400;">VISA</span></p>
</td>
<td style="width: 149px;">
<p><span style="font-weight: 400;">4539970000116018 (EUR)</span></p>
</td>
<td style="width: 49px;">
<p><span style="font-weight: 400;">12/2030</span></p>
</td>
<td style="width: 41px;">
<p><span style="font-weight: 400;">***</span></p>
</td>
<td style="width: 117px;">
<p><span style="font-weight: 400;">Pagamento rifiutato</span></p>
</td>
<td style="width: 142px;">
<p><span style="font-weight: 400;">not sufficient funds</span></p>
</td>
</tr>
<tr>
<td style="width: 77px;">
<p><span style="font-weight: 400;">VISA</span></p>
</td>
<td style="width: 149px;">
<p><span style="font-weight: 400;">4539970000117016 (EUR)</span></p>
</td>
<td style="width: 49px;">
<p><span style="font-weight: 400;">12/2030</span></p>
</td>
<td style="width: 41px;">
<p><span style="font-weight: 400;">***</span></p>
</td>
<td style="width: 117px;">
<p><span style="font-weight: 400;">Pagamento rifiutato</span></p>
</td>
<td style="width: 142px;">
<p><span style="font-weight: 400;">incorret PIN</span></p>
</td>
</tr>
<tr>
<td style="width: 77px;">
<p><span style="font-weight: 400;">VISA</span></p>
</td>
<td style="width: 149px;">
<p><span style="font-weight: 400;">4539970000118014 (EUR)</span></p>
</td>
<td style="width: 49px;">
<p><span style="font-weight: 400;">12/2030</span></p>
</td>
<td style="width: 41px;">
<p><span style="font-weight: 400;">***</span></p>
</td>
<td style="width: 117px;">
<p><span style="font-weight: 400;">Pagamento rifiutato</span></p>
</td>
<td style="width: 142px;">
<p><span style="font-weight: 400;">no card record</span></p>
</td>
</tr>
<tr>
<td style="width: 77px;">
<p><span style="font-weight: 400;">VISA</span></p>
</td>
<td style="width: 149px;">
<p><span style="font-weight: 400;">4539970000902011 (EUR)</span></p>
</td>
<td style="width: 49px;">
<p><span style="font-weight: 400;">12/2030</span></p>
</td>
<td style="width: 41px;">
<p><span style="font-weight: 400;">***</span></p>
</td>
<td style="width: 117px;">
<p><span style="font-weight: 400;">Pagamento rifiutato</span></p>
</td>
<td style="width: 142px;">
<p><span style="font-weight: 400;">Technical problem</span></p>
</td>
</tr>
<tr>
<td style="width: 77px;">
<p><span style="font-weight: 400;">VISA</span></p>
</td>
<td style="width: 149px;">
<p><span style="font-weight: 400;">4539970000907010 (EUR)</span></p>
</td>
<td style="width: 49px;">
<p><span style="font-weight: 400;">12/2030</span></p>
</td>
<td style="width: 41px;">
<p><span style="font-weight: 400;">***</span></p>
</td>
<td style="width: 117px;">
<p><span style="font-weight: 400;">Pagamento rifiutato</span></p>
</td>
<td style="width: 142px;">
<p><span style="font-weight: 400;">Host not found</span></p>
</td>
</tr>
<tr>
<td style="width: 77px;">
<p><span style="font-weight: 400;">MASTERCARD</span></p>
</td>
<td style="width: 149px;">
<p><span style="font-weight: 400;">5255000000000001 (EUR)</span></p>
</td>
<td style="width: 49px;">
<p><span style="font-weight: 400;">12/2030</span></p>
</td>
<td style="width: 41px;">
<p><span style="font-weight: 400;">***</span></p>
</td>
<td style="width: 117px;">
<p><span style="font-weight: 400;">Pagamento accettato</span></p>
</td>
<td style="width: 142px;">
<p><span style="font-weight: 400;">Message Ok</span></p>
</td>
</tr>
<tr>
<td style="width: 77px;">
<p><span style="font-weight: 400;">MASTERCARD</span></p>
</td>
<td style="width: 149px;">
<p><span style="font-weight: 400;">5255000000000019 (EUR)</span></p>
</td>
<td style="width: 49px;">
<p><span style="font-weight: 400;">12/2030</span></p>
</td>
<td style="width: 41px;">
<p><span style="font-weight: 400;">***</span></p>
</td>
<td style="width: 117px;">
<p><span style="font-weight: 400;">Pagamento rifiutato</span></p>
</td>
<td style="width: 142px;">
<p><span style="font-weight: 400;">Auth. Denied</span></p>
</td>
</tr>
<tr>
<td style="width: 77px;">
<p><span style="font-weight: 400;">MASTERCARD</span></p>
</td>
<td style="width: 149px;">
<p><span style="font-weight: 400;">5255000000101015 (EUR)</span></p>
</td>
<td style="width: 49px;">
<p><span style="font-weight: 400;">12/2030</span></p>
</td>
<td style="width: 41px;">
<p><span style="font-weight: 400;">***</span></p>
</td>
<td style="width: 117px;">
<p><span style="font-weight: 400;">Pagamento rifiutato</span></p>
</td>
<td style="width: 142px;">
<p><span style="font-weight: 400;">expired card</span></p>
</td>
</tr>
<tr>
<td style="width: 77px;">
<p><span style="font-weight: 400;">MASTERCARD</span></p>
</td>
<td style="width: 149px;">
<p><span style="font-weight: 400;">5255000000104019 (EUR)</span></p>
</td>
<td style="width: 49px;">
<p><span style="font-weight: 400;">12/2030</span></p>
</td>
<td style="width: 41px;">
<p><span style="font-weight: 400;">***</span></p>
</td>
<td style="width: 117px;">
<p><span style="font-weight: 400;">Pagamento rifiutato</span></p>
</td>
<td style="width: 142px;">
<p><span style="font-weight: 400;">restricted card</span></p>
</td>
</tr>
<tr>
<td style="width: 77px;">
<p><span style="font-weight: 400;">MASTERCARD</span></p>
</td>
<td style="width: 149px;">
<p><span style="font-weight: 400;">5255000000109018 (EUR)</span></p>
</td>
<td style="width: 49px;">
<p><span style="font-weight: 400;">12/2030</span></p>
</td>
<td style="width: 41px;">
<p><span style="font-weight: 400;">***</span></p>
</td>
<td style="width: 117px;">
<p><span style="font-weight: 400;">Pagamento rifiutato</span></p>
</td>
<td style="width: 142px;">
<p><span style="font-weight: 400;">invalid merchant</span></p>
</td>
</tr>
<tr>
<td style="width: 77px;">
<p><span style="font-weight: 400;">MASTERCARD</span></p>
</td>
<td style="width: 149px;">
<p><span style="font-weight: 400;">5255000000110016 (EUR)</span></p>
</td>
<td style="width: 49px;">
<p><span style="font-weight: 400;">12/2030</span></p>
</td>
<td style="width: 41px;">
<p><span style="font-weight: 400;">***</span></p>
</td>
<td style="width: 117px;">
<p><span style="font-weight: 400;">Pagamento rifiutato</span></p>
</td>
<td style="width: 142px;">
<p><span style="font-weight: 400;">transaction not permitted</span></p>
</td>
</tr>
<tr>
<td style="width: 77px;">
<p><span style="font-weight: 400;">MASTERCARD</span></p>
</td>
<td style="width: 149px;">
<p><span style="font-weight: 400;">5255000000116013 (EUR)</span></p>
</td>
<td style="width: 49px;">
<p><span style="font-weight: 400;">12/2030</span></p>
</td>
<td style="width: 41px;">
<p><span style="font-weight: 400;">***</span></p>
</td>
<td style="width: 117px;">
<p><span style="font-weight: 400;">Pagamento rifiutato</span></p>
</td>
<td style="width: 142px;">
<p><span style="font-weight: 400;">not sufficient funds</span></p>
</td>
</tr>
<tr>
<td style="width: 77px;">
<p><span style="font-weight: 400;">MASTERCARD</span></p>
</td>
<td style="width: 149px;">
<p><span style="font-weight: 400;">5255000000117011 (EUR)</span></p>
</td>
<td style="width: 49px;">
<p><span style="font-weight: 400;">12/2030</span></p>
</td>
<td style="width: 41px;">
<p><span style="font-weight: 400;">***</span></p>
</td>
<td style="width: 117px;">
<p><span style="font-weight: 400;">Pagamento rifiutato</span></p>
</td>
<td style="width: 142px;">
<p><span style="font-weight: 400;">incorret PIN</span></p>
</td>
</tr>
<tr>
<td style="width: 77px;">
<p><span style="font-weight: 400;">MASTERCARD</span></p>
</td>
<td style="width: 149px;">
<p><span style="font-weight: 400;">5255000000118019 (EUR)</span></p>
</td>
<td style="width: 49px;">
<p><span style="font-weight: 400;">12/2030</span></p>
</td>
<td style="width: 41px;">
<p><span style="font-weight: 400;">***</span></p>
</td>
<td style="width: 117px;">
<p><span style="font-weight: 400;">Pagamento rifiutato</span></p>
</td>
<td style="width: 142px;">
<p><span style="font-weight: 400;">no card record</span></p>
</td>
</tr>
<tr>
<td style="width: 77px;">
<p><span style="font-weight: 400;">MASTERCARD</span></p>
</td>
<td style="width: 149px;">
<p><span style="font-weight: 400;">5255000000902016 (EUR)</span></p>
</td>
<td style="width: 49px;">
<p><span style="font-weight: 400;">12/2030</span></p>
</td>
<td style="width: 41px;">
<p><span style="font-weight: 400;">***</span></p>
</td>
<td style="width: 117px;">
<p><span style="font-weight: 400;">Pagamento rifiutato</span></p>
</td>
<td style="width: 142px;">
<p><span style="font-weight: 400;">Technical problem</span></p>
</td>
</tr>
<tr>
<td style="width: 77px;">
<p><span style="font-weight: 400;">MASTERCARD</span></p>
</td>
<td style="width: 149px;">
<p><span style="font-weight: 400;">5255000000907015 (EUR)</span></p>
</td>
<td style="width: 49px;">
<p><span style="font-weight: 400;">12/2030</span></p>
</td>
<td style="width: 41px;">
<p><span style="font-weight: 400;">***</span></p>
</td>
<td style="width: 117px;">
<p><span style="font-weight: 400;">Pagamento rifiutato</span></p>
</td>
<td style="width: 142px;">
<p><span style="font-weight: 400;">Host not found</span></p>
</td>
</tr>
</tbody>
</table>

`*any combination of 3 numbers is accepted`

## How to Configure

### 1. Configuration

Login to the Admin Magento, choose `Stores > Configuration > Sales > Payment Method > Nexi`.

![](https://i.imgur.com/6fBcCLp.png)

- **Enable**: Select **Yes** to enable the module's feature and use the payment methods supported by Nexi .

#### 1.1. Credentials

![](https://i.imgur.com/n13nqmR.png)

- **Environment**:
  - Admin can choose **Sandbox** environment to check payment feature by Nexi 
  - When you want to apply for online payment, admin needs to change the environment to **Production**.
- **Payment Page URL**:
  - The URL to which the customer is redirected when paying with Nexi 
  - For Sandbox environment, `URL = https://int-ecommerce.nexi.it/ecomm/ecomm/DispatcherServlet`
  - With Production environment, `URL = https://ecommerce.nexi.it/ecomm/ecomm/DispatcherServlet`
  - You can refer more information [here](https://ecommerce.nexi.it/specifiche-tecniche/codicebase/introduzione.html)
- **Merchant Alias & MAC Calculation Secret Key**:
  - Depending on the solution Admin wants to use when checkout, **Merchant Alias and MAC Calculation Secret Key** will change
  - There are 4 main solutions: **Simple payment in Frontend**, **Periodic payment/ OneClick in Frontend, Simple payment in Backend, Recurring payment in Backend**
  - You can refer [here](https://ecommerce.nexi.it/area-test)

- **Get Test URL** button: Admin can check your app by clicking the **Get Test URL** button. If **Merchant Alias & MAC Calculation Secret Key** is filled correctly, admin can check one sample order by Nexi payment method.

![](https://i.imgur.com/IxFfObI.png)

#### 1.2. General Setting

![](https://i.imgur.com/LTKmfba.png)

- **Title**: Enter the title of the payment method displayed on the checkout page.

- **New Order Status**:
  - Set Status for Order to be set by Nexi payment method
  - There are 2 Statuses that Admin can choose: **Processing and Suspected Fraud**

- **Payment Action**:
  - **Authorize and Capture**: Payment will be Capture immediately after the Customer place order successfully. At that moment, the Customer's card will pay for the order and the Invoice will be created
  - **Authorize**: Payment will only be captured when admin creates an Invoice for Customer's order. When the Invoice is successfully created, admin can receive money from Customer's card
  
- **Payment Page Language**: Choose 1 of 10 languages to display on the Nexi  payment page

- **Payment from Applicable Countries**:
  - Select **All Countries** to have Card payment method available in all countries
  - Select **Specific Countries** to limit certain countries to use this payment method
    - **Payment from Specific Countries**: The selected countries will be shown the Card payment method
    
- **Minimum Order Total**:
  - Minimum amount setting for the whole order (including ship, tax, discount) to be paid by Nexi 
  - When **Order Total** reaches this limit, the new Nexi  payment method is displayed in Frontend
  
- **Maximum Order Total**:
  - Set the maximum amount of the whole order (including ship, tax, discount) to be paid by Nexi 
  - When Order Total exceeds this limit, Nexi  payment method will be hidden in Frontend
  
- **Debug mode**: If Yes, diagnostic information is stored in log files on the Magento web server.

- **Sort Order**:
  - Specify the display position of this payment method compared to other payment methods
  - 0 is the largest number. The smaller the number, the more priority will be displayed in the first position.

### 2. Order Frontend

![](https://i.imgur.com/fQ4zMMy.png)
