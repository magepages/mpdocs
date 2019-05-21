# Multiple Flat Rates
## Overview

[Multiple Flat Rates Shipping extension](https://www.mageplaza.com/magento-2-multi-flat-rates/) gives your store more choices about the shipping method. Thanks to this module, you can apply different delivery rates to different countries. It not only helps increase the conversion rate but also boost your sale significantly.

*Note*: Magento 2 Custom Order Number can be used with multiple stores. Multiple stores module:
- This extension is applied to multiple stores.
- Stores are set the default as the Default Configuration.
- To change the configuration for each store, need to remove tick at Use Website on the right of each option.
- Config of the extension in each store will be applied in the store itself.
- Config in this store doesn't affect the config in the other store.


## Download & Install
- [Download on Mageplaza](https://www.mageplaza.com/magento-2-multi-flat-rates/)
- [Download on Github](https://github.com/mageplaza/magento-2-multi-flat-rates)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)

## How to configure

Login vào Magento Admin, `Stores > Settings > Configuration > Sales > Shipping methods > Flat Rate #1-5`

![](https://i.imgur.com/PfnXF0x.png)

### 1. Flat rate #1

![](https://i.imgur.com/5u0wmEI.png)

- **Enable**: Choose `Yes` so that this module can work well
- **Method Name**:
  - This is a place to set the name for flat rate, displaying on the View cart page and checkout page at frontend and **Create order** at backend.
  - If you leave this field blank, it doesn't display on the **View cart page** or checkout page at frontend and **Create order** at backend.
  
- **Price**:
  - Set the price for the Shipping method. The price will display on the frontend
  - If leaving this field blank, the default price is $0.00
  
- **Sort Order**: Set the order to appear of flat rate on the flat rate list when displaying on the frontend

For example: flat rate #1: Sort Order = 1, flate rate #2: Sort Order = 2, when it displays on the frontend, flate rate #1 will be ordered first.

![](https://i.imgur.com/lGnot2i.png)

- **Title**:
  - Set the title for flat rate 31-5, the title will display on the cart page and checkout page
  - If leaving this field blank, it will not display the title
  
- **Ship to Appicable Countries**"
  - `All Allowed Countries`: Flat rate is applied in all countries
  - `Specific Countries`: The Flat rate will only be applied in the selected countries in the `Ship to Specific Countries` field
  
![](https://i.imgur.com/JueCVl5.png)

- **Ship to Specific Countries**: Choose the countries that you want to apply the flat rate
- **Ship to Specific Zipcodes**: Fill in this field the zipcode which allows applying flat rate. Apllicable for multiple zipcodes. Zipcodes are separated by a dot comma “ ; ”

- **Displayed Error Message**:
  - Enter the content of the message when the shipping method isn't available
  - If leaving this field blank, the default message is `Sorry, but we can't deliver to the destination country with this shipping module.`
  - The error message will display on the frontend if the `Show Method if Not Applicable = Yes`
  
  ![](https://i.imgur.com/hdDFdQw.png)
  
- **Show Method if Not Applicable**: Choose Yes to display the shipping methods when it doesn't include in the `Applicable Countries`

The same as `Flate rate #1`, admins can add at most 5 shipping methods to their store.

## Frontend

### 1. On View Cart page

![](https://i.imgur.com/SHkEW5O.png)

### 2. On Checkout page

![](https://i.imgur.com/TQNvOAB.png)

## Backend: 

Login vào `Magento Admin > Sales > Orders > Create New Order > Choose Customer > Select Store > select products > Add Selected Product(s) to Order > Shipping Method > Click Get shipping methods and rates`

![](https://i.imgur.com/4Ok9awe.png)

