# Currency Formatter

## Overview

Currently Magento 2 does not support currency format as store owner wishes. With [Mageplaza Currency Formatter Extension](https://www.mageplaza.com/magento-2-currency-formatter/), admin can configure the currency format in various ways. Extension supports showing product price as well as order amount in the currency format configured by admin at both frontend and backend. Currency Formatter Extension is totally compatible with [Mageplaza One Step Checkout](https://www.mageplaza.com/magento-2-one-step-checkout-extension/)

Note: **Mageplaza Currency Formatter Extension** can be used with multiple stores. 
- Stores are set the default as the Default Configuration.
- To change the configuration for each store, need to remove tick at Use Website on the right of each option.
- Config of the extension in each store will be applied in the store itself.
- Config in this store doesn't affect the config in the other store.

## How to download and install

- [Download Mageplaza Currency Formatter](https://www.mageplaza.com/magento-2-currency-formatter/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


## How to use

Admin can configure currency format at backend. At Magento Admin, Select `Stores > Settings > Configuration > Mageplaza > Currency Formatter`

![Imgur](https://i.imgur.com/qoUJX10.png)

Currency displayed on the frontend and backend such as product price, the total amount of the order will be displayed in the correct format:

![Imgur](https://i.imgur.com/1lsbwwR.png)

## How to configure

Login to Magento Admin, Select `Stores > Settings > Configuration > Mageplaza > Currency Formatter`

![Imgur](https://i.imgur.com/oSNg634.png)

### 1. General

![Imgur](https://i.imgur.com/KyTEwDP.png)

- **Enable**: Select **Yes** to enable the module.

#### 1.1. Currency Configuration:

Configure the currency format for all currency enabled by the store

![Imgur](https://i.imgur.com/8fPGUGE.png)


#### Currencies:
- Displays the name of the currency enabled by the store
- If choosing **Use System** checkbox, the default template of magento will be used.

#### Template:

- **Show symbol**: Select the display position for the currency symbol. There are 5 options: **Before value with space options, Before value, After value with space, After value and None**:
  
  ![Imgur](https://i.imgur.com/ODbN10i.png)
  - **Before value with space**: The currency symbol displays before the numeric value. There is a space between symbol and the numerical value. For example: $ 100
  - **Before value**: Currency symbol displayed before numeric value, but between symbol and numeric value there is no space. For example: $100
  - **After value with space**: A currency symbol displayed behind a numeric valueThere is a space between symbol and the numerical value. Example: 100 $
  - **After value**: The currency symbol displayed behind the numeric value, but between symbol and numeric value there is no space. Example: 100$
  - **None**: Do not display the currency symbol: Example: 100
  
- **Symbol**: Select the currency symbol. For example, if you enter Symbol = $, the currency symbol in currency format is $ which is displayed at the price of the product is $ 100.

- **Group separator**: Choose a way to display the thousandth value separator.
  
  ![Imgur](https://i.imgur.com/NdcShEr.png)
  - **Dot (.)**: The thousands value is separated by dots, for example: 1.000
  - **Comma (,)**: The thousandth value is separated by commas, for example: 1,000
  - **Space ( )**: The thousandth value is separated by spaces, for example: 1 000
  - **None**: Do not separate thousands of values, for example: 1000

- **Decimal number**: Select the number of decimal value after the unit value. You can choose from 0 to 4 decimal numbers.

For example: Decimal number = 2, there will be 2 decimal numbers. The product price as $ 100.00

![Imgur](https://i.imgur.com/oja1BLv.png)

- **Decimal separator**: Select an symbol to separate the integral and decimal value.
  
  ![Imgur](https://i.imgur.com/cTOSFoR.png)
  - **Dot (.)**: The integral and decimals are separated by dots, for example: 100.1
  - **Comma (,)**: The integer and decimal are separated by commas, for example: 100,1

- **Minus Sign**: You can enter any character to represent discount value.

- **Show minus sign**: Select the display location of Minus Sign which include:

  ![Imgur](https://i.imgur.com/tX6ghfO.png)
  - **Before value**: minus sign displays before the number. For example: -100
  - **After value**: minus sign displayed after the number. Example: $ 100-
  - **Before symbol**: minus sign displayed before the currency symbol. For example: -$ 100
  - **After symbol**: minus sign displayed after the currency symbol. Example: $ 100-
  
#### Preview:

Preview the format of the currency configured in the template section

![Imgur](https://i.imgur.com/xgTsRM7.png)

When **Template** field changes, the currency format shown in **Preview **also changes
