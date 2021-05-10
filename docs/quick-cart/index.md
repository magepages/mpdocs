# Quick Cart

## Overview

Usually, if you want to check the cart details right into view cart or check out, it will be inconvenient and quite time-consuming. But with Mageplaza, it is solved easily and quickly thanks to Quick Cart extension. The module has a modern minicart design, combined with a shopping cart detailing feature that helps customers save shopping time, without having to access the view cart page directly. The module also allows to customize the number of products, options to configure the background color, title, customize CSS in minicart. In addition, you can set effects for minicart.

Mageplaza Quick Cart is fully compatible with Mageplaza Reward Points and Mageplaza Gift Card helping customers have a better overview and save more time to purchase items quickly.

## How to download and install

- Download Mageplaza Quick Cart
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


## How to use

### Minicart with new interface:

![](https://i.imgur.com/pKZj7tn.png)

### Automatically display minicart popup when hovering to cart:

![](https://i.imgur.com/DtbepFz.gif)

### Always display the minicart when the page is scrolled down:

![](https://i.imgur.com/dwa45oM.png)

### Compatible with Reward Points and Gift Card:

![](https://i.imgur.com/HeZwZ43.png)

## How to Configure

From the Admin Panel, go to `Stores > Configuration > Mageplaza Extensions > Quick Cart`

![](https://i.imgur.com/kg7UyDh.png)

### 1.Configuration

#### 1.1. General

From the Admin Panel, go to `Stores > Configuration > Mageplaza Extensions > Quick Cart`, select **General**

![](https://i.imgur.com/ph06bah.png)

- **Enable**: Select **Yes** to turn on the Module.
- **Popup Effect**:
  - **Slide-in (right side)**: Display new popup minicart when clicking on cart:
  ![](https://i.imgur.com/NRx7zg8.png)
  - **Hover-over**: Automatically display the minicart popup when hovering to the shopping cart
  ![](https://i.imgur.com/kkDInHu.gif)

- **Auto Open Minicart**:
  - Only displayed when at **Popup Effect** field, you select **Slide popup (right)**.
  - Minicart is auto displayed when customer adds product to cart.
  - Note: this feature will work provided that [AJAX](https://en.wikipedia.org/wiki/Ajax_(programming)) is supported. If the page reloads after customers clicking on Add to Cart, it **will not** work (e.g. My Wishlist page, Recently Ordered, Catalog Products List widget, ..). 

  ![](https://i.imgur.com/R0ZklMe.gif)

- **Show Coupon Box**:
  - Display the coupon filling box applied
  - You can access `Marketing > Cart Price Rules`, select **Add New Rule** to create new coupon rules
  - Instructions on how to create new rules can be found [here](https://www.mageplaza.com/kb/how-create-a-cart-price-rule-in-magento-2.html).
  
- **Show Information**:
  - **Full Total Information**: Displays all information in minicart including: Subtotal, Discount, Shipping & Handling, Tax, Grand Total.
  - **Only Subtotal**: Only displays Subtotal information in minicart.
  
- **Fixed Minicart On Scroll**: Select **Yes** to always display the minicart icon when the page is scrolled.

![](https://i.imgur.com/6T1sHrl.png)

#### 1.2. Design

From the Admin Panel, go to `Stores > Configuration > Mageplaza Extensions > Quick Cart`, select **Design**

![](https://i.imgur.com/Kz8tKZP.png)

- **Header Background color**: 
  - Select the background color for the minicart header.
  - If empty, the default color **#1979c3** will be used.
  
- **Header Text Color**: 
  - Select the text color of the minicart header.
  - If empty, the default color **#ffffff** will be used.
  
- **Subtotal Background color**: 
  - Select Subtotal background color.
  - If empty, the default color **#ffffff** will be used.
  
- **Subtotal Text Color**: 
  - Select the font color in Subtotal.
  - If empty, the default color **#333333** will be used.

![](https://i.imgur.com/Re4x75y.png)

- **Custom CSS**: you can write CSS code here, it not only can change colors but also many other things
- **Example**: At the **Custom CSS** field, you fill in `.mpquickcart .block-title {font-size: 28px;}`, then at Frontend, it will display the bigger size of text indicating the item number in the cart ( see picture below)

![](https://i.imgur.com/bXfAss7.png)

### 2. Compatible with Reward Points

With **Reward Points** integration, it allows displaying the total number of points of the shopping cart that customer can get after payment in minicart. Also, it enables displaying the number of reward points that customer uses to deduct from the total cart.

![](https://i.imgur.com/tQlLPKn.png)

### 3. Compatible with Gift Card

With the **Gift Card** integration, it allows showing more on the total, including the amount of discount due to Gift Card code or Gift Card Credit:

![](https://i.imgur.com/xv7iSLq.png)
