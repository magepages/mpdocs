# Table Rate Shipping

## Overview

[Mageplaza Table Rate Shipping](https://www.mageplaza.com/magento-2-table-rate-shipping/) supports merchants to create an unlimited number of flexible shipping methods with their own shipping rates. Magento 2 admin can use a combination of conditions: destination, cart weight, subtotal cart, quantity cart and shipping group of products to calculate shipping accurately. These methods and rates are displayed flexibly at the frontend, making shopping and shipping options of customers more convenient, helping merchants to bring the best services to customers.

The extension is fully compatible with [Mageplaza One Step Checkout](https://www.mageplaza.com/magento-2-one-step-checkout-extension/), [Mageplaza Shipping Rules](https://www.mageplaza.com/magento-2-shipping-rules/) and [Mageplaza Shipping Restrictions](https://www.mageplaza.com/magento-2-shipping-restrictions/)

## How to Use

With this extension, customers can perform the following actions:


### Create new shipping methods with certain shipping rates

![](https://i.imgur.com/y1gtfaX.png)

### Display shipping values at the order frontend

![](https://i.imgur.com/vvEzFb0.png)

### Displays the shipping values at the backend order

![](https://i.imgur.com/GP1YY1j.png)

### Set the volume weight value for the products

![](https://i.imgur.com/whTCKY9.png)

### Set Shipping Group for the products

![](https://i.imgur.com/1l0pmTW.png)

## How to Configure

### 1. Configuration

Go to `Sales > Table Rate Shipping > Configuration`

![](https://i.imgur.com/xs8stqa.png)

![](https://i.imgur.com/GimX8mc.png)

- **Enable**: Select **Yes** to activate the extension 
- **Carrier Title**: Enter the title that you want to appear for the shipping rate table at checkout. The default title is **Table Rate**.
- **Ship to Applicable Countries**: Select the country that you want to apply the shipping table rate. There are 2 options:
  - **All Allowed Countries**: Customers in any country will be allowed to ship according to the table rate.
  - **Specific Countries**: Customers in certain countries are eligible for ship rate according to table rate. When selecting this option, the **Ship to Specific Countries** field will appear for you to select specific countries.
- **Include Virtual Products in Price Calculation**: Choose **Yes** to calculate shipping costs for **Virtual products** if they exist in the order.
- **Use Volumetric Weight Calculation**: Configure to calculate the volume weight for the product. The value of volumetric weight can be calculated directly or indirectly through the volume value of the product. The general formula for calculating the value of volumetric weight is: **Volumetric Weight = Volumetric/Shipping Factor**.

![](https://i.imgur.com/T5EvKO8.png)

- **Select Weight Attribute**: The extension currently supports three ways of calculating volume values:
  - **Volumetric Weight**: Directly determine the volume value of a product. Selecting this option will display the **Select Weight Attribute** field, which allows you to select the corresponding attribute of the product containing the volume weight value.
  
  - **Volumetric**: Indirectly determine the volume weight value through the product' s volume value. Selecting this option will display two additional fields: **Select Volumetric (V) Attribute** and **Shipping Factor**.
    - **Select Volumetric (V) Attribute**: Allows selecting the corresponding attribute of the product containing the volume value. The extension currently supports two types of inputs, namely **direct V value** or **volumetric value via 3-dimensional LxWxH measurements (LxWxxHigh)**. For example, the product has a measurement of length, width, height is 10; 10; 10, respectively, the total volume is 1000, you can fill 1000 or 10x10x10.
    - **Shipping Factor**: The ratio to convert from the volume value to the value of volumetric weight.
    
  - **Volume Attribute**: Indirectly determining the value of volumetric weight by measuring the length, width, height of the product. Selecting this option will display four additional fields: **Attribute 1, Attribute 2, Attribute 3** and **Shipping Factor**.
    - **Attribute 1, Attribute 2, Attribute 3** allows you to select attributes corresponding to 3 measurements of Length, Width, and Height of the product.
    - **Shipping Factor**: The ratio to convert from the volume value to the value of volumetric weight.
  
- **Show Method if Not Applicable**: Select **Yes** to still display the table rate shipping method on **View Cart** and **Checkout** page when the order does not meet the conditions for using this shipping rates. At that time, the message in the **Displayed Error Message** field will be displayed to the customer.
- **Sort Order**: Specify the display position of the shipping methods in the list that satisfy the order, with 0 being the first position.

### 2. Manage Shipping Methods

#### 2.1. Shipping Methods Grid

![](https://i.imgur.com/7mDkRZK.png)

- The grid shows the shipping methods with information of **ID, Name, Status, Customer Groups and Store Views applied, Shipping Method Image**. At Grid, it is possible to edit **inline Name** and **Status** of shipping method; **Massaction Delete** or **Change status** of multiple shipping methods at once.

- From the Grid, you can create a new shipping method by clicking the **Create New Method** button or editing the existing shipping method details by clicking to corresponding "Edit" action.

#### 2.2 Create New/Edit Shipping Method

##### 2.2.1 Information

![](https://i.imgur.com/FN2H7UT.png)

- **Name**: Set name of shipping method. The variable `{{delivery_days}}` is supported to show the estimated delivery time, this value will be taken from the corresponding shipping rate.
- **Internal Note**: Admin's note about shipping method.
- **Status**: Select **Enable** to allow the method to apply shipping fees for the cart.
- **Calculation Shipping Rate Rule**: Choose how to calculate the shipping fee for the cart if it satisfies multiple method rates at once. Extension supports 3 calculation methods:
  - **Sum up rates**: Ship fees will be equal to the sum of all rates.
  - **Choose the lowest rate**: Ship fee will be calculated according to the lowest rate
  - **Choose the highest rate**: Ship fee will be calculated according to the highest rate
- **Image**: Choose the image for the shipping method.
- **Store View (s)**: Set Store View to allow shipping method to be applied
- **Customer Group (s)**: Choose the Customer Group that is allowed to apply the shipping method

##### 2.2.2 Labels

![](https://i.imgur.com/UOfAMPQ.png)

On the **Label** tab, the admin can set the display of the shipping method **Label** and shipping method **Description** according to each store view. If the **Label** and **Description** fields are left blank, the shipping method name will be the name on the default **Information** and **Description** tab.


##### 2.2.3 Shipping Rates

![](https://i.imgur.com/KrrTNPv.png)

On the **Shipping Rates** tab, the admin can view the list of rates, add, edit or delete any rates. A rate of shipping method is determined by two main parts: condition for a cart to apply that rate and how to calculate shipping fee when the cart satisfies the condition.


**2.2.3.1 Add new rate**

The extension now supports 3 ways to add a rate to the shipping method: 
- Manually add a new rate  
- Add a new rate by importing the csv file 
- Add a new rate by importing rate from another shipping method

- **Type 1: New Rate**: At Grid **Shipping Rates**, click **New Rate**, popup and add a new shipping rate will be shown
![](https://i.imgur.com/OPGZzPs.png)
  - **General > Name**: Set Name for Shipping Rate
  - **Conditions**: There are 5 main conditions that admin can set for 1 rate: Ship destination, weight of cart, total amount of cart, number of items of cart and shipping group of products in cart.
    - **Ship destination** is determined by **Country**, **State/ Region** (only applies to some countries), **Zip/ Postcode**. In which, **Zip/ Postcode** supports **String** format or **Range** format. To use Range format, admin only need to select the **Zip / Postcode Range** checkbox and fill in the corresponding postcode value.
    - **Note**: Extension supports 2 types of strings using "%" and "dash" characters. "%" is used to replace a string of indefinite length while "dash" used to replace a character.
    
    - *For example:*
      - Shipping location is Aberdeen in the UK with Postcode code starting with AB, you need to set **Country = United Kingdom**, uncheck the **Zip/ Postcode Range** checkbox and enter the value of the **Zip/ Postcode = AB%**.
      ![](https://i.imgur.com/qQ9vl5d.png)
      - Shipping location is Aberdeen in the UK with Postcode code starting with AB12, you need to set **Country = United Kingdom**, uncheck the **Zip/ Postcode Range** checkbox and enter the value of the **Zip/ Postcode = AB12 ___**, which is equivalent to all postcodes with 7 characters, starting with AB12, ending with any 3-character cluster, 2 characters are separated by a space " " will satisfy.
      ![](https://i.imgur.com/hXXaNlw.png)
      - Shipping location is Michigan in the US with Zipcode from 48001 to 49971, you need to set **Country = United States**, select the **Zip / Postcode Range** checkbox and enter the **Zip / Postcode From = 48001** and **To = 49971**
      ![](https://i.imgur.com/Zg2wrCy.png).
    - **Cart weight**: The weight of a cart is determined by the weight of each product in the cart. Conditions by weight are included under the **From** and upper limits **To**. When you do not want to set a limit, you can leave it blank or enter *.
    - For example: For an order weighing less than 10kg to apply the shipping rate, the `Weight From = 10` and `To = Blank/*`
    
    ![](https://i.imgur.com/xhA0Ee5.png)
    ![](https://i.imgur.com/zPhsLCJ.png)
    - **Total amount of cart**: Total amount of cart calculated in **Subtotal excluding Tax**, including lower limit **From** and upper limit on **To**. When you do not want to set a limit, you can leave it blank or enter *.
    - For example, for orders under $ 100 that apply a shipping rate, `Price From = Blank/0/*` and `To = 100` are required.
    
    ![](https://i.imgur.com/OP7FZ1E.png)
    ![](https://i.imgur.com/fMTk7qg.png)
    ![](https://i.imgur.com/ovh60wR.png)
    - **Number of cart items**: including the limit **From** and the limit on **To**. When you do not want to set a limit, you can leave it blank or enter *.
    - For example: For orders with 3-5 items that apply a shipping rate, `Qty From = 3` and `To = 5` should be set
    ![](https://i.imgur.com/ZEVcRoe.png)
    - **Shipping Group**: Products can be assigned a certain shipping group to classify goods when shipping. For each type of goods can be assigned a certain shipping rate. Instructions for setting up the Shipping Group for the product will be detailed below.
    ![](https://i.imgur.com/CaTkmU2.png)

  - **Settings**: Here we will set the rate level to calculate ship fee. There are 4 basic types of rates:
    - **Product Fixed Rate**: The fixed rate for each product in the cart
    - **Product Percentage Rate**: The percentage of each product price, based on which the rate is counted
    - **Weight Unit Fixed Rate**: The fixed rate for each weight unit. Each unit of weight will be calculated according to the weight or volumetric weight of the product, whichever is greater will receive that value.
    - **Order Fixed Rate**: The fixed rate for the whole order
Ship fee will be equal to the sum of the rates corresponding to the cart combined. If you do not want to apply any rate for shipping, just leave that field blank. Leaving all fields blank is equivalent to the freeship for the cart.
Also in the **Settings** tab, you can set the estimated shipping date in the **Estimated Delivery Time** field, this value will be displayed in the frontend to notify customers by variable `{{delivery_days}}` in the shipping method name.
  - After filling all the above information as desired, click **Save** to save the shipping rate you have just set.


- **Type 2: Import Rates**

![](https://i.imgur.com/i98lH25.png)

You can use csv file to import multiple rates at the same time. You just need to click the **Import Rates** button above the **Rate management grid**, the **Import Shipping Rates** popup will be shown. Please **Choose File** with csv format and its content matches the columns format as shown below and click **Import** (Note: the postcode field corresponding to the case of unchecking **Zip / Postcode Range**):

![](https://i.imgur.com/vbbhvzM.png)

We currently support 2 sample import files available for the United States/ United States zip/ postcode countries and string/ alphanumeric countries (United Kingdom), you can see more details [here](https://drive.google.com/drive/folders/1-Ejlfws9E4AyUCTlvBCxchoUP-1ddQPw). You can download the sample file and edit it as you want, then completely import it as usual.

In addition, you can export the rate of any shipping method to import the shipping method you want.

![](https://i.imgur.com/Ho7QMER.png)

**Type 3: Import From Others**

![](https://i.imgur.com/RtOYy1v.png)

![](https://i.imgur.com/USljjfy.png)

The extension supports allowing adding the existing rates of one shipping method to another. Just click **Import From Others**, the **Select Shipping Rates** popup will display, allowing you to select the desired shipping rates. Then you just need to click **Import**, the newly selected shipping rates will be added to the shipping method you are creating or editing.


**2.2.3.2 Edit rate**

![](https://i.imgur.com/N8x5Vhc.png)

To edit a rate, go to the **Shipping Rates** tab, select the **Rate** you want to edit, and click **Action Edit** accordingly. Then, the edit rate popup will display with the same fields when creating a new rate manually, the information of the rate is already loaded on the popup for you to edit.

![](https://i.imgur.com/hemwvl3.png)

![](https://i.imgur.com/tm0KQKT.png)

**2.2.3.3 Delete rate**

To delete one or more rates, you go to the **Shipping Rates** tab, in the grid **Rate**, select the rate you want to delete, click **Massaction Delete**, the **Submit** button will display. You just need to click **Submit** to delete the selected rate.

![](https://i.imgur.com/x9n0SdM.png)


#### 2.3 Setting Shipping Group for the product

Go to `Store > Attributes > Product > mptablerate_shipping_group`

![](https://i.imgur.com/5ftcLAQ.png)

![](https://i.imgur.com/USQeEna.png)

In `Tab Properties> Manage Options` (Values of Your Attribute), click the **Add Option** button to add a new option, you can set the label for the option according to the corresponding store view. Click **Delete** if you want to delete an option. Then click **Save Attribute** to save the changes.

![](https://i.imgur.com/anu5OCD.png)

Visit any product editable page, select a value for the **Shipping Group** field to assign Shipping to each product. This Shipping Group will be used to set which shipping rate the product applies.


#### 2.4 Freeship Setting for products according to Shipping Group

To set the **Freeship** for products under the **Shipping Group**, make sure the setting of the `mptablerate_shipping_group` attribute has enabled the **Use for Promo Rule Conditions** feature.

![](https://i.imgur.com/a1r5CS9.png)

Go to `Marketing > Cart Price Rule > Add New Rule / Edit Rule`, set information and condition as desired. On the **Action** tab, select the attribute for the condition is **Shipping Group**, select the desired Shipping Group. At the **Free Shipping** field:

- Select the value of **For matching items only** to apply free shipping only for products of the selected shipping group.
- Select the value **For shipment with matching items** to apply free shipping to both invoices containing products of the selected shipping group.


![](https://i.imgur.com/dSQbnK8.png)

### 3. Frontend

#### View Cart page

![](https://i.imgur.com/oEaL4L8.png)

#### Checkout page

![](https://i.imgur.com/Qt9zq85.png)

#### Checkout with Multiple Addresses page

![](https://i.imgur.com/b6k2J8v.png)

#### One Step Checkout page

![](https://i.imgur.com/SkFMYea.png)

