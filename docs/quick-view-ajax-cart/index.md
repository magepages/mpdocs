# Quick View & Ajax Cart
## Overview

When customers want to view the product detail page, they have to click on the product and wait for a while to see it. So, if they want to view a product, they have to open more tabs and take more time to know more details about that product. That's why [Mageplaza Quick View module]() is released. It helps you save more time surfing the web, see more details and increase sales for your store. Customers don't need to visit the Product Detail page to view product details, just click on the icon or label on the image, then they can view full product information through the popup displayed on the screen. This allows customers to view multiple products without spending a lot of time. Not only that, when customers add products to the cart, the popup about product details information is also displayed and that product will automatically fly into the cart quickly.

## How to use
### 1. Quick View Popup
#### 1.1. Display the icon on the product

![quick view](https://i.imgur.com/kh53PzJ.png)

#### 1.2. Display the label on the product

![quick view1](https://i.imgur.com/4v7yimD.png)

#### 1.3. Display the popup

![quick view2](https://i.imgur.com/KM8xWXz.png)

### 2. Ajax Cart
#### 2.1. When clicking on Add To Cart button

![quick view3](https://i.imgur.com/dVq815g.png)

#### 2.2. When clicking on Add To Wishlist

![quick view4](https://i.imgur.com/twBFZLK.png)

#### 2.3. When clicking on Add to Compare

![quick view5](https://i.imgur.com/0PtMlIB.png)

## How to configure

From the Admin Panel, go to `Store > Settings > Configuration > MAGEPLAZA EXTENSIONS > Quick View`

![quick view6](https://i.imgur.com/qfd1ptJ.png)

### Configuration
#### 1. General
![quick view7](https://i.imgur.com/dKADlL3.png)

- **Enable**: Choose "Yes' to use the feature of this module.

#### 2. Quick View Configuration
![quick view8](https://i.imgur.com/zbSVcaF.png)

- **Enable**: Choose "Yes" to display the popup of Quick View
- **Apply for**:
  - Choose the page to display the popup of Quick View. For example: Select `Apply for = Home Page`, then when customers click on the icon or label on the products on homepage, it will display the popup of Quick View only. On the other pages, it will not display.
  - The popup can be displayed on many pages
  - It's compatible with Widget
  
- **Display**:
  - `Display = Icon`: Allow showing the icon on the product's image
  - `Display = Label`: Allow showing the label on the product's image
  - `Button Icon`: You can use the default icons or upload the icons. This icon will display on the product's image.
  - `Button Label`: 
    - Enter the label that display on the product's image
    - The default label is Quick View
    
  - `Text Color`: Choose the color for the labels displaying on the product's image. The default color is #000000
  - `Background Color`: Choose the background color for `Button Label`. The default color is #FFFFFF
  - `Animate`: Allow choosing the animation displaying in the popup
  - `Popup Information`:
    - Choose the product information displaying on the popup when you click on the icon or button label on the product
    - Allow displaying many product's information on the popup
    
  - `Edit Cart Item Popup Information`:
    - Choose the information of the product displaying on the popup when you click on the icon or button label on the Cross-Sells product added to the cart on the Shopping Cart page. Or when you click on the `edit` icon on the product added to the cart
    - Allow displaying many product's information on the popup
    
#### 3. Ajax Cart Configuration
![quick view9](https://i.imgur.com/pAem8uJ.png)

- **Enable**: Choose "Yes" to display the popup of Ajax Cart
- **Apply for**:
  - Choose the display page the popup of Ajax Cart. For example: Choose `Apply for = Home Page`, when customers click on the icon or the label or click on Add To Cart button on the product on homepage, the popup of Ajax Cart will be displayed. On other pages, the popup will not be displayed.
  - Allow displaying the popup on many pages
  
- **Apply for Actions**:
  - `Apply for Actions = Add To Cart`: Display the popup of Ajax Cart when customers press on Add To Cart button
  - `Apply for Actions = Add To Compare`: Display the popup of Ajax Cart when customers press on Add To Compare button on Quick View Popup
  - `Apply for Actions = Add To Wishlist`: Display the popup of Ajax Cart when customers press on Add To Wishlist button on Quick View Popup
  
- **Enable animate Add To Cart**: Choose "Yes" to use the animation feature of the products. It will auto-fly into the cart after pressing the `Add To Cart` button
- **Countdown time**:
  - Enter the number of seconds displaying for the popup of Ajax Cart
  - The default Ajax Cart popup is 10 seconds

#### 4. Compatible with Widget
To insert the code, you use the following code: 

{% raw %}
```
{{block class="Mageplaza\QuickView\Block\QuickView\Popup"template="Mageplaza_QuickView::quickview/widget/button.phtml"}}

```
{% endraw %}

, then add it into anywhere you want to display Quick View Popup. 

You can add it on one page or one block by going to `Content > Page`. Also, you can insert it into *.phtml, .xml* files of Magento as well as other extensions that you want to display the popup.




