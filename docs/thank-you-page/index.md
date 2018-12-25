# Thank You Page
## Overview

With the help of [Mageplaza Thank You Page](), you can impress your customers with ease. They can completely check their orders including various information such as order number and status, order date, shipping address, payment method, and so on. This will help the customers know that they have successfully placed orders. Also, it helps customers feel your respect and concern. Moreover, you can insert useful information into the Thank You Page such as coupon, product slider, FAQ, and social sharing buttons that allow customers to share with their friends. This gives customers many interesting benefits during the payment process. It is a great way to bring satisfaction to grumpy customers. More interestingly, this is a way to promote your brand in the memory of the customer.

We also support the Newsletter Success page with similar features.

## How to use
### 1. Display Thank You Page after customers complete the order

![thank you page](https://i.imgur.com/XUbXvZO.png)

### 2. Display Thank You Page after customers click on subscribe

![thank you page1](https://i.imgur.com/CwmhZto.png)


## How to configure
From the Admin Panel, go to `Stores > Settings > Configuration`, at `Mageplaza Extension` tab, choose `Thank You Page`

![thank you page2](https://i.imgur.com/DXzRvh6.png)

### 1. General Configuration

![thank you page3](https://i.imgur.com/H1DDusy.png)

- **Enable**: Choose "Yes" to use the feature of this module
- **Apply for Customer Group(s)**:
  - Only customers in the selected group can see the products that are applied the rules
  - Multiple groups can be selected at the same time
  
- **AddThis API key**
  - Enter the key of AddThis to refer to the friends via AddThis
  
### 2. Order Success Page
![thank you page4](https://i.imgur.com/FshSeYA.png)

- **Enable**: Choose "Yes" to display Thank You Page after customers complete the order
- **Route**:
  - Enter the route for Thank You Page
  - If you leave this field blank, the default route is *mpthankyoupage*

- **Select Style**:
  - Choose the style for Thank You Page
  - The default style is *Simple Style*
  
- **Custom Style**:
  - **Custom Style = Use Default Style**:
  
  ![thank you page5](https://i.imgur.com/cWFW8gN.png)
  
    - `Page Title`: 
      - Enter the title for Thank You Page
      - The default title is *Thank you for your purchase*
  
    - `Page Sub-title`:
      - Enter the sub-title for Thank You Page
      - The default Sub-title is *Your order has been placed and will be processed as soon as possible.*
      
    - `Page Description`:
      - Enter the information that needs to display on Thank You Page
      - The default information is *Your order number, Amount, Order Create at
      - You can use many availale variblies by clicking on `Insert Variable` link
      - Support HTML
    
    - `Show Continue Shopping Button`: Choose "Yes" to display `Continue Shopping` button
    - `Enable Block(s)`:
      - Choose the block that displays on Thank You Page as *Order Details, Social Sharing, Coupon, Register Account Form, Subscribe Email Form*
      - Multiple blocks can be displayed at the same time.
      
  - **Custom Style = Edit Default Style**:
  
  ![thank you page6](https://i.imgur.com/5mtzKsi.png)
  
    - `Load Template button`: After clicking on this button, the code of the selected style in `Select Style` field will be loaded and displayed on `Page HTML` field and CSS of the selected style is also loaded and displayed on the `Custom CSS` field.
    - `Page HTML`:
      - Allow editing the code of the selected style
      - You can use the available variablies that we have supported by clicing on the `Insert Variable` link
      
    - `Custom CSS`: You can edit the color, font text, etc of the selected style
    
  - **Static Block 1**: 
    - Choose Static Block that will display on the Thank You Page
    - `Static Block 1 = No display`: This means that there're no any block to display on Thank You Page
    
  - **Static Block 2**:
    - Choose Static Block that will display on the Thank You Page
    - `Static Block 2 = No display`: This means that there're no any block to display on Thank You Page

#### Coupon Block
![thank you page7](https://i.imgur.com/9JzEsQv.png)

- **Select Rule**:
  - Choose the rule (The rule is created at `Marketing > Promotions > Cart Price Rules`)
  - Only display the rules that have `Coupon = Specific Coupon` and use `Use Auto Generation`.
  
- **Coupon Pattern**:
  - Enter the pattern for the coupon
  - Coupon code after being created automatically will adhere to thí pattern
  - If you leave this field blank, the default pattern is [12AN]
  - How to create Pattern:
  
  `[4A] - 4 alpha, [4N] - 4 numeric, [4AN] - 4 alphanumeric`. 
  
For example: GIFT-[4AN]-[3A]-[5N] => `GIFT-J34T-OEC-54354`

- **Coupon Label**:
  - Enter the label for created coupon codes
  - The default label is *Use this coupon code: <strong class="mp-coupon">{{ coupon.code }}</strong> to get <strong class="mp-coupon">{{ coupon.discount_amount }}</strong> on your next order*
  - You can use multiple available variables that are supported by clicking on the `Insert Variable` link
  - HTML is supported
  
#### Mageplaza FAQ
![thank you page8](https://i.imgur.com/fY3cJUK.png)

- **Enable**: Choose "Yes" to display FAQ on Thank You Page
- **Title**:
  - Enter the title for FAQ
  - The default title is `Frequently Asked Questions`
  
- **Select Category**:
  - Choose Category to apply for displaying FAQ
  - For example: choose `Select Category = Category 1` of FAQ, then FAQ will be displayed at Category 1.
  
- **Limit**:
   - Enter the number of FAQ that will display
   - The default number of display is 5
   
#### Product Slider Block
![thank you page9](https://i.imgur.com/qmPTQZE.png)

- **Enable**: Choose "Yes" to display Product Slider Block on Thank You Page
- **Title**:
  - Enter the title for Product Slider Block
  - If you leave this field blank, there's no title for Product Slider Block
  
- **Limit the number of products**:
  - Enter the number of displaying products
  - The default number of display is 10
  
- **Display Information**:
  - Choose the information that displays on the product at Product Slider Block as Add To Cart, Add To Compare, Add To Wishlist, and Review Information section.
  - Multiple information can be displayed.
  
### 3. Newsletter Success Page
![thank you page10](https://i.imgur.com/cvdXpFj.png)

- **Enable**: Choose "Yes" to display Thank You Page after customers click on `Subscribe` button
- **Route**:
  - Enter the route for Thank You Page
  - If leaving this field blank, the default route is *mpthankyoupage/subscribe*

- **Select Style**: Choose the style for Thank you Page after customers click on `subscribe`

![thank you page11](https://i.imgur.com/eWPgGvz.png)

- **Page Title**
  - Enter the title for Thank You Page
  - The default title is *Thank you for signing up!*
  
- **Page Sub-title**:
  -   - Enter the title for Thank You Page
  - The default title is *Welcome you to our exclusive newsletters with every updates*
      
- **Page Description**:
      - Enter the information that needs to display on Thank You Page
      - The default detailed description is:
      *You would be the first to reach our latest arrivals, news, events, various special promotions, giveaways and more.* 
      *Stay tuned and keep updated. All the best!*
      - HTML is supported
    
- **Enable Block(s)**:
      - Choose the block that displays on Thank You Page as *OCoupon, Social Sharing*
      - Multiple blocks can be displayed at the same time.
      
- **Static Block**: 
    - Choose Static Block that will display on the Thank You Page
    - `Static Block = No display`: Not allow displaying any block oon Thank You Page

- **Mageplaza Product Slider**:
  - Choose the block of Product Slider extension displaying on Thank You Page
  - `Mageplaza Product Slider = No display`: There're no any block to display on Thank You Page

- **Custom CSS**: You can edit the color, font text, etc of the selected style
    
#### Coupon Block
![thank you page12](https://i.imgur.com/p4KCXrk.png)

- **Select Rule**:
  - Choose the rule (The rule is created at `Marketing > Promotions > Cart Price Rules`)
  - Only display the rules that have `Coupon = Specific Coupon` and use `Use Auto Generation`.
  
- **Coupon Pattern**:
  - Enter the pattern for the coupon
  - Coupon code after being created automatically will adhere to thí pattern
  - If you leave this field blank, the default pattern is [12AN]
  - How to create Pattern:
  
  `[4A] - 4 alpha, [4N] - 4 numeric, [4AN] - 4 alphanumeric`. 
  
For example: GIFT-[4AN]-[3A]-[5N] => `GIFT-J34T-OEC-54354`

- **Coupon Label**:
  - Enter the label for created coupon codes
  - The default label is *Enter coupon code: <strong class="mp-coupon">{{ coupon.code }}</strong> when you make your next purchase enjoy <strong class="mp-coupon">{{ coupon.discount_amount }}</strong> off*
  - You can use multiple available variables that are supported by clicking on the `Insert Variable` link
  - HTML is supported
  
#### Mageplaza FAQ
![thank you page13](https://i.imgur.com/S4mMRyr.png)

- **Enable**: Choose "Yes" to display FAQ on Thank You Page
- **Title**:
  - Enter the title for FAQ
  - The default title is `Frequently Asked Questions`
  
- **Select Category**:
  - Choose Category to apply for displaying FAQ
  - For example: choose `Select Category = Category 1` of FAQ, then FAQ will be displayed at Category 1.
  
- **Limit**:
   - Enter the number of FAQ that will display
   - The default number of display is 5


### 4. The guide to install the library
#### 4.1. Manual setting

- Create the folder: lib/internal/Mageplaza
- Access to the path to download the library of Thank You Page [here](https://gitlab.com/users/sign_in)
- Extract `module-thank-you-page-library.zip` into `lib/internal/Mageplaza` and rechange the file name that you just extracted as `ThankYouPage`

![thank you page i](https://i.imgur.com/sBXSOnp.png)

- Run the following command to setup:
`php bin/magento setup:upgrade`

#### 4.2. Install via composer
- Run the following command to install the library:

```
composer require liquid/liquid
php bin/magento setup:upgrade
php bin/magento setup:static-content:deploy
```













