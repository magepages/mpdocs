# Quick Cart

## Overview

Normally, if you want to check the cart details right into view cart or check out, it will be inconvenient and quite time consuming. But with Mageplaza it is solved easily and quickly thanks to [Quick Cart extension](https://www.mageplaza.com/magento-2-quick-cart/). The module has a more modern minicart design, combined with a shopping cart detailing feature that helps customers save shopping time, without having to access the view cart page directly. The module also allows to customize the number of products, options to configure the background color, title, customize CSS in minicart. In addition, you can set effects for minicart.

Mageplaza Quick Cart is fully compatible with [Mageplaza Reward Points](https://www.mageplaza.com/magento-2-reward-points-extension/) and [Mageplaza Gift Card](https://www.mageplaza.com/magento-2-gift-card-extension/) helps customers have a better overview and save more time to pay quickly.

## How to download and install

- [Download Mageplaza Quick Cart](https://www.mageplaza.com/magento-2-quick-cart/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


## How to use

### Minicart with new interface:

![Imgur](https://i.imgur.com/pKZj7tn.png)

### Automatically display minicart popup when pointing to cart:

![Imgur](https://i.imgur.com/DtbepFz.gif)

### Always display the minicart when the page is scrolled down:

![Imgur](https://i.imgur.com/dwa45oM.png)

### Compatible with Reward Points and Gift Card:

![Imgur](https://i.imgur.com/3cjx15k.png)

## How to Configure

From the Admin Panel, go to `Stores > Configuration > Mageplaza Extensions > Quick Cart`

![Imgur](https://i.imgur.com/7NfwJq9.png)

### 1.Configuration

#### 1.1. General

From the Admin Panel, go to `Stores > Configuration > Mageplaza Extensions > Quick Cart`, select **General**

![Imgur](https://i.imgur.com/LyMD989.png)

- **Enable**: Select **Yes** to turn on the Module.
- **Popup Effect**:
  - **Slide popup (right)**: Display new popup minicart when clicking on cart:
  ![Imgur](https://i.imgur.com/NRx7zg8.png)
  - **Hover**: Automatically display the minicart popup when hovering to the shopping cart
  ![Imgur](https://i.imgur.com/kkDInHu.gif)

- **Auto Open Minicart**:
  - Only displayed when at **Popup Effect** field, you select **Slide popup (right)**.
  - Minicart is auto displayed when customer adds product to cart.
  
  ![Imgur](https://i.imgur.com/R0ZklMe.gif)

- **Show Coupon**:
  - Display the coupon filling box applied
  - You can access `Marketing > Cart Price Rules`, select **Add New Rule** to create new coupon rules
  - Instructions on how to create new rules can be found [here](https://www.mageplaza.com/kb/how-create-a-cart-price-rule-in-magento-2.html).
  
- **Show Information**:
  - **Full Total Information**: Displays all information in minicart including: Subtotal, Discount, Shipping & Handling, Tax, Grand Total.
  - **Only Subtotal**: Only displays Subtotal information in minicart.
  
- **Fixed position minicart**: Select **Yes** to always display the minicart when the page is scrolled down.

![Imgur](https://i.imgur.com/6T1sHrl.png)

#### 1.2. Design

From the Admin Panel, go to `Stores > Configuration > Mageplaza Extensions > Quick Cart`, select **Design**

![Imgur](https://i.imgur.com/Kz8tKZP.png)

- **Header Background color**: select the background color for the minicart header.
- **Header Text Color**: select the text color of the minicart header.
- **Subtotal Background color**: select Subtotal background color.
- **Subtotal Text Color**: select the font color in Subtotal.

![Imgur](https://i.imgur.com/Re4x75y.png)

- **Custom CSS**: you can write CSS code here, it can not only changes colors but also many other things
- **Example**: At the **Custom CSS** field, you fill in `.mpquickcart .block-title {font-size: 28px;}`, then at Frontend, it will display the bigger size of text indicating the Item number in the cart ( see picture below)

![Imgur](https://i.imgur.com/bXfAss7.png)

### 2. Compatible with Reward Points

With **Reward Points** integration, it allows displaying the total number of points of the shopping cart that customer can get after payment in minicart. Also it allow displaying the number of reward points that customer uses to deduct from the total cart.

![Imgur](https://i.imgur.com/t7n4B8a.png)

### 3. Compatible with Gift Card

With the Gift Card integration, it allows showing more on the total, including the amount of discount due to Gift Card code or Gift Card Credit:

![Imgur](https://i.imgur.com/xv7iSLq.png)
