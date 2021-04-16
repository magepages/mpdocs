# Share Cart
## Overview

**Share Cart** allows customers to share their shopping carts with friends and family. It helps expand the supply of product information through a customer without much effort on your part. Promoting your products through customers is the best marketing campaign because you know, people usually trust the suggestions from their friends and relatives. With the help of this module, we believe you can surely increase your sales and profitability, bringing your products closer to consumers. All are included in Mageplaza Share Cart extension.


## How to configure
### 1. Configuration 

From the Admin Panel, go to `Store > Settings > Configuration > Mageplaza Extensions > Share Cart > Configuration`, choose `General Configuration` section.

![](https://i.imgur.com/sZ5giNx.png)

#### 1.1. General

- **Enable**: Choose Yes to enable this module. If the module enables, all features will work as usual. If not, all options on the user interface and the module will not work.
- **File Name**: Fill the name for PDF file. The PDF file will display the order information of customers
- **Add Timestamp suffix**: Select Yes to display current time when uploading PDF documents.

#### 1.2. Business Information

- **Company Name**: Enter your company name in the `Company Name` field
- **Address**: Enter your company address.
- **VAT Number**: Enter your company's VAT information.
- **Phone**: Enter your phone number
- **Email**: Enter the email address.
- **Registered Number**: Enter your company registration number.
- **Warning Message**: Fill in the warning message you want to show on PDF orders. Eg: All prices are correct at time of generation, prices may have been changed since.

### 2. Frontend

After enabling the module, customers can use the `Share Cart` button to send the URL to others sharing their shopping cart. After sharing, using the shared URL, it will automatically add the product to the shopping cart of the person whom the customer has sent.

- Show the Share Cart button on the Minicart page when adding to cart:

![](https://i.imgur.com/K3FrpU0.png)

- Show the Share Cart button on the Shopping Cart page when using the URL to share

![](https://i.imgur.com/2WXJK43.png)

  - Customers can choose `Update Shopping Cart` to update again the information that you have edited
  - Click `Text` button to view the information of each product and the total price
  
  ![](https://i.imgur.com/eCa4Ujp.png)
  
  - Choose PDF button to view the order information
  
  ![](https://i.imgur.com/AVEjzOA.png)
  
 ### Instructions for installing the PDF library

You need to delete the generated file and run the following command to install:

`composer require mpdf / mpdf`

![](https://i.imgur.com/itzROxc.png)

### 3. API

Mageplaza's Share Cart extension supports using the **Rest API** to share your shopping cart with everyone, via the Rest API to download and view order information.

Details can be viewed [here](https://documenter.getpostman.com/view/10589000/SzRxXrGA?version=latest).

Instructions for creating Integration tokens [here](https://devdocs.magento.com/guides/v2.3/get-started/authentication/gs-authentication-token.html).

### 4. GraphQL

Run the following command in Magento 2 root folder:

```
composer require mageplaza / module-share-cart-graphql
php bin / magento setup: upgrade
php bin / magento setup: static-content: deploy

```

Mageplaza's Share Cart extension supports store admins to get share cart information via GraphQL

To start working with **Share Cart GraphQL** in Magento, you need to:

- Use Magento 2.3.x. Return your site to developer mode

- Supported GraphQl requests can be viewed <a href='https://documenter.getpostman.com/view/10589000/SzRxXrGB?version=latest' target='_blank' rel='nofollow'>here</a>
  
  
  
  
  
  
  
  
  
