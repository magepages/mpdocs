# Multi Flat Rates extension
## Overview

Multi flat rates give your store more choice of shipping methods. You can apply different delivery rates to different countries.

## How to configure

Login vào Magento Admin, Stores > Settings > Configuration > Sales > Shipping methods > Flat Rate #1-5

![Imgur](https://i.imgur.com/PfnXF0x.png)

### 1. Flat rates #1

![Imgur](https://i.imgur.com/kWuux38.png)

- **Enable**: Choose Yes so that this module can work well
- **Method Name**:
  - This is a place to set the name for flat rate, displaying on the View cart page and checkout page
  - If you leave this field blank, it doesn't display on the View cart page or checkout page
  
- **Price**:
  - Set the price for the Shipping method. The price will display on the frontend
  - If leaving this field blank, the default price is $0.00
  
- **Sort Order**: Set the order to appear of flat rate on the flat rate list when displaying on the frontend

For example: flate rate #1: Sort Order = 1, flate rate #2: Sort Order = 2, when it displays on the frontend, flate rate #1 will be ordered first.

![Imgur](https://i.imgur.com/lGnot2i.png)

- **Title**:
  - Set the title for flat rate 31-5, the title will display on the cart page and checkout page
  - If leaving this field blank, it will not display the title
  
- **Ship to Appicable Countries**"
  - All Allowed Countries: Flat rate is applied in all countries
  - Specific Countries: The Flat rate will only be applied in the selected countries in the Ship to Specific Countries field
  
![Imgur](https://i.imgur.com/JueCVl5.png)

- **Ship to Specific Countries**: Choose the countries that you want to apply the flat rate
- **Displayed Error Message**:
  - Enter the text to inform when the shipping method isn't available
  - If leaving this field blank, the default message is "Sorry, but we can't deliver to the destination country with this shipping module."
  - The error message will display on the frontend if the Show Method if Not Applicable = Yes
  
  ![Imgur](https://i.imgur.com/hdDFdQw.png)
  
- **Show Method if Not Applicable**: Choose = Yes to display the shipping methods when it doesn't include in the Applicable Countries

The same as Flate rate #1, admin can add at most 5 shipping method to their store

## Frontend

### 1. On View Cart page

![Imgur](https://i.imgur.com/SHkEW5O.png)

### 2. On Checkout page

![Imgur](https://i.imgur.com/TQNvOAB.png)
