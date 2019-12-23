# Canada Post

## Overview

[Mageplaza Canada Post](https://www.mageplaza.com/magento-2-canada-post/) extension allows Magento websites to offer Canada Post shipping method. Customers will be able to select this shipping method at checkout page to receive their product via Canada Post Shipping. This shipping method can be used to deliver and receive packages/orders within Canada and from Canada to other countries.

This extension is fully compatible with [Mageplaza One Step Checkout](https://www.mageplaza.com/magento-2-one-step-checkout-extension/), [Mageplaza Shipping Rules](https://www.mageplaza.com/magento-2-shipping-rules/), [Mageplaza Shipping Restrictions](https://www.mageplaza.com/magento-2-shipping-restrictions/) and [Mageplaza Shipping Cost](https://www.mageplaza.com/magento-2-shipping-cost/).


## How to use

Displays the Canada Post shipping method at frontend with expected delivery time when customer create orders

![](https://i.imgur.com/UeOkf96.png)

Admin can create orders using the Canada Post shipping methods

![](https://i.imgur.com/wvvFv1d.png)

Create and print Shipping Labels for Orders

![](https://i.imgur.com/7G63dS4.png)

![](https://i.imgur.com/Ep4MGSu.png)

## How to configure

### I. Instructions for getting the API Key

#### Create Canada Post Account

If you already have a Canada Post account, you can skip this guide.

Visit [Canada Post homepage](https://www.canadapost.ca/cpc/en/home.page), click **Sign In**

![](https://i.imgur.com/Scvh0hc.png)

When the Popup **Sign In** is displayed, click **Register now**

![](https://i.imgur.com/kNLbm8v.png)

Click **Create business profile**

![](https://i.imgur.com/tNPPqxG.png)

Fill in the information in the **Profile Information** section and select **Continue**

![](https://i.imgur.com/LjR4pTE.png)

![](https://i.imgur.com/tSpg8WD.png)


Select **Profile Type** as **Small Business** and then click **Select and Continue** button. If you would like to register the **Profile Type** as **Enterprise**, please contact the Canadian Post support team for more details.

![](https://i.imgur.com/nD958hb.png)

Fill in the **Contact information**, select **Continue**

![](https://i.imgur.com/L0VLChB.png)

![](https://i.imgur.com/UYGfMzs.png)

You will be redirected to the section providing more information "Tell us about your business". You can fill in the information or click **Ask me later** to update later.

![](https://i.imgur.com/Wf5796Y.png)

Finally you will be moved to the **Confirmation** section. You have finished creating your account. Here you will be provided with **Customer Number** information that will be used to connect to the API later.

![](https://i.imgur.com/tVj7pvN.png)

#### Instructions for obtaining the API Key

To get API Key you need to log in to your **Dashboard** page. In case you created a new account, you can access this page by clicking **Continue** in the **Confirmation** section when creating the account. Or if you already have an account, simply visit the Canada Post homepage, select **Sign In** and log in with your registered account.

After successful login, on Dashboard, select `Business > E-commerce > Integrate with our APIs`

![](https://i.imgur.com/F4aRqWI.png)

Then continue to select **Go to Developer Program** on the next page

![](https://i.imgur.com/RoqnqmK.png)

Click **Join NOW**

![](https://i.imgur.com/wkpFLe0.png)

Click **Join NOW** again.

![](https://i.imgur.com/plcGXbt.png)

After reading the **Agreement**, click **AGREE AND CONTINUE**

![](https://i.imgur.com/tSOxbTi.png)

After joining the program successfully, you will see the Developer Program home page, where you will get the **Customer Number** and **API Key** of Development and Production corresponding to **Sandbox** and **Production** environments at Configuration in Part III.

![](https://i.imgur.com/pUU9336.png)


### II. Required Configuration

In order to use the Canada Post shipping methods on the website, the admin needs to set the following configuration:

#### 1. Setup Store Information

- Login to the Magento Admin, choose `Stores > Configuration > General > Store Information`.
- It is required to fill in the **Store Name** and **Store Phone Number** fields, other fields are not required.

![](https://i.imgur.com/1a6AvQ2.png)

#### 2. Setup Origin

- Login to the Magento Admin, choose `Stores > Configuration > Sales Shipping Settings > Origin`.
- Here, please fill in your store address in Canada. The fields **Country, Region/State, ZIP/Postal Code, City, Street Address** are required, and the **Street Address Line 2** field is optional.

#### 3. Setup Currency

- Your store needs to allow using Canadian Dollar
- Login to the Magento Admin, choose `Stores > Configuration > General > Currency Setup > Currency Options`
- Choose **Canadian Dollar** at **Allowed Currencies** field

![](https://i.imgur.com/AmkpdON.png)

If the **Base Currency** field is different from the **Canadian Dollar**, then you must set the exchange rate between **Base Currency** and **Canadian Dollar**. To do that, login to the Magento Admin, choose `Stores > Currency > Currency Rates`, enter the exchange rate in the **CAD** column

![](https://i.imgur.com/3MOavCf.png)

### III. General Configuration

Login to the Magento Admin, choose `Stores > Configuration > Sales > Shipping Methods > Canada Post by Mageplaza`


- **Enable**: Select **Yes** to make the extension active
- **Carrier Title**: Enter the **Carrier Title** you want to display in the frontend checkout. The default is **Canada Post**
- **Environment**: Select the corresponding environment you want to apply on the store. The **sandbox environment** is a copy of the **Production** and includes valid test data and feedback so you can check if the extension is working properly on your site before going live (switch to the Production environment).
- **API Username**: Enter the **API Username** corresponding to the environment selected above. How to obtain API Username, please see the instructions in Part I.
- **API Password**: Enter the **API Password** corresponding to the environment selected above. How to get API Password please see instructions in Part I.
- **Customer Number**: Enter your **Customer Number** value. How to create an account and get a Customer Number please see the instructions in Part I
- **Agreement Type**: Select **Contract** if you have a **Commercial (Enterprise)** account. Learn more about [Contract for Commercial here](https://www.canadapost.ca/tools/pg/manual/PGsetup-e.asp).
- **Contract ID**: Depends on **Agreement Type = Contract**. Enter the **Contract ID** value corresponding to your **Canadian Post Commercial (Enterprise)** account here.
**Language**: Set the display language for the shipping method title and error messages in the frontend. Supports 2 types of languages: **English** and **French**

![](https://i.imgur.com/DKvAs08.png)

- **Display Estimated Delivery Time**: Displays the estimated delivery date for the Canada Post shipment options.
- **Delivery Time Offset**: The amount of time calculated in days added/subtracted from the estimated delivery time. Admin can adjust the estimated delivery time range using this field. 
- **Allowed Shipping Methods**: Choose the shipping methods allowed for the store. Only shipping methods selected in this field and satisfying each shipping address will be displayed in the frontend.
- **Enable Free Shipping**: Select **Yes** to install **Free Shipping** with Canada Post for the countries.

![](https://i.imgur.com/DKvAs08.png)

![](https://i.imgur.com/H8rDAME.png)

- **Minimum Order Amount**: Depends on **Enable Free Shipping = Yes**. Enter the lowest value of orders allowed to apply Free Shipping.
- **Free Method For Canada**: Depend on **Enable Free Shipping = Yes**. Choose the shipping method applied Free Shipping in Canada.
- **Free Method For US**: Depend on **Enable Free Shipping = Yes**. Choose the shipping method applied Free Shipping in the US.
- **Free Method For International**: Depend on **Enable Free Shipping = Yes**. Choose shipping methods that apply Free Shipping in other countries where Canada Post supports shipping.

![](https://i.imgur.com/eRzuz4s.png)

- **Quote Type**: Select the **Quote Type** that corresponds to your account's **Profile Type**. Select **Commercial**** if you have a **Commercial (Enterprise)** account.
- **Print Output Format**: Select the print format for shipping label. Supports 2 types of formats are **8.5x11** and **4x6**.
- **Reason For Export**: Enter the code presenting the **Reason For Export** listed on the shipping label.
- **Other Reason**: Dependend on **Reason For Export = Other**. Enter a value for the **Reason For Export** section displayed on the shipping label. Minimum of 4 characters, maximum of 44 characters.
- **Max Package Weight**: Unit in kg(s). Fill the maximum weight for 1 item in the cart. Use this weight to divide the shopping cart into different packages. The maximum value to be filled is 30 (- kgs).
- **Calculate Handling Fee**: Choose how to calculate Handling Fee: **Fixed value** or **Percentage**.
- **Handling Applied**: Select the object to be applied to calculate **Handling Fee**: either by order or by order package. The package number of the order will be calculated based on the **Max - Package Weight** and the weight of the products in the Cart.
- **Handling Fee**: Enter the value of **Handling Fee**. If left blank or fill in 0 means do not apply Handling Fee. For example, if `Calculate Handling Fee = Percentage`, `Handling Applied = Per Package` and `Handling Fee = 10`, the order has 2 packages, the `Handling Fee of order = Shipping Fee * 10% * 2`

![](https://i.imgur.com/kDxFRat.png)


- **Ship to Applicable Countries**: Set the country that you want to apply to ship in the table rate. There are 2 options:
  - **All Allowed Countries**: Customers in any country can also apply for Canada Post shipping.
  - **Specific Countries**: Customers in certain countries are eligible for Canadian Post shipping. When selecting this option, the **Ship to Specific Countries** field will appear for you to select desired countries.
- **Show Method if Not Applicable**: Choose **Yes** to still display the table rate shipping method on the **View Cart** and **Checkout** page when the order does not meet the conditions for using this ship form. At that time, the message in the **Displayed Error Message** field will be displayed to the customer.
- **Show Method only for Admin**: Select **Yes** to only show Canada Post shipping when creating orders at admin, customers who order at the frontend will not see Canada Post's shipping option.
- **Debug**: If Yes, diagnostic information is stored in log files on the Magento web server. So that, admin can check the shipment results via Canada Post. 
- **Sort Order**: Specify the position of the Canada Post shipping method in the list of ship methods that satisfy the order, with 0 being the first position.

### IV. Create Shipping Label

On order with Shipping Method as Canada Post, select **Ship** to create Shipment

![](https://i.imgur.com/jqxSc0R.png)

On the Create Shipment page, select **Create Shipping Label** and choose **Submit Shipment**

![](https://i.imgur.com/Y7MnblJ.png)

The **Create Packages** popup appears, select **Product** to add to the package and fill in information related to the package and **Save** package. 

![](https://i.imgur.com/pPaKBC6.png)

The shipping label will automatically be saved when the package is successfully created. You can view shipment details of the order to print Shipping label. The shipping label format will be printed following the configuration section.

![](https://i.imgur.com/qpcqXGP.png)

![](https://i.imgur.com/0ubywcH.png)

If you did not create a shipping label when creating a new shipment, you can go to the shipment details page of the order, click **Create Shipping Label** to create a shipping label for the order. Then you just need to create the same package as above, the shipping label will be created when the package is successfully created. 

![](https://i.imgur.com/i9QcUQg.png)

In addition, you can track deliveries on the Canada Post system with your package number. You only need to click on the **Number** corresponding to **Carrier Canada Post** to track the shipment.

![](https://i.imgur.com/n0lTgGO.png)

## Frontend

### Displayed on the View Cart page with English Language

![](https://i.imgur.com/RhENN8n.png)

### Displayed on the View Cart page with French Language

![](https://i.imgur.com/nRJqZFn.png)

### Shown at the Default Checkout page

![](https://i.imgur.com/sJKTcNz.png)

### Shown on the One Step Checkout page

![](https://i.imgur.com/merrN0l.png)

### Displayed at the Checkout with Multiple Addresses page

![](https://i.imgur.com/HYORDHN.png)

### Display compatible with Mageplaza Shipping Cost extension

![](https://i.imgur.com/CZCfFki.png)
