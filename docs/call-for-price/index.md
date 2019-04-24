# Call for Price

## Overview

Nowadays, some stores or distributors don't want to display the price of the product on the website, they want to display the information only so that customers must contact the shop owners to ask the price or may bargain the price of the product; however, Magento doesn't support this feature currently. To resolve this problem, therefore, Mageplaza provides [Call for Price module](https://www.mageplaza.com/magento-2-call-for-price/) that can meet the needs of store owners.

## How to use

### Display on the Product Listing
- Display on the popup

![](https://i.imgur.com/hBwLHCc.png)

- Hide Add to Cart button

![](https://i.imgur.com/l011k3V.png)

### Display on the Product Page

![](https://i.imgur.com/MoRFIn7.png)

- Hide Add to Cart button

![](https://i.imgur.com/r9beQb4.png)

### Email

![](https://i.imgur.com/wCRhpUX.png)

## How to configure

From the Admin Panel, go to ``Sales > Call For Price > Configuration``

![](https://i.imgur.com/5XdfN65.png)

### Configuration
From the Admin Panel, go to ``Sales Call ForPrice  > Configuration``, choose ``General`` sections

![](https://i.imgur.com/JCN8Ryj.png)

#### General Configuration

![](https://i.imgur.com/OCCyyuf.png)

- **Enable**: Choose `Yes` to use the functions of this module
- **Request status**:

    - There're 4 available statuses of this extension: To Do, Doing, To review, Done
    - When there's a request sent to, the default status of the request is To Do
    - Admins can add, edit, or delete the request status to mange requests that they receive easily
    - Admins can set the default status for the requests they receive
  
#### Terms and Conditions

![](https://i.imgur.com/m3DDlmO.png)

- **Check by default**: Choose `Yes` to auto-tick on the checkbox (always agree with the terms and conditions of the store)
- **Is Required**: Choose "Yes" to display this required field
- **Title**:
  - Enter the title for the **Terms and Conditions**
  - If you use "%anchor" variable in this field, the text entering into `Anchor Text` will match with the ext of `Title` field
  
- **Anchor Text**: 
  - Enter the content displaying for this field
  - The content of this field will merge with the Title field

- **Anchor URL**:
  - Enter the URL that store owners want to redirect the customers when clicking in the content filled in the `Anchor` field
  - If you leave this field blank, `Anchor Text` field don't have the link to click and it will be a text description as usual.
  - For instance: In the `Title` field, you fill is that *I agree with the %anchor of Services*, in the `Anchor` field, you fill is that *Terms and Conditions* and the `URL` field is that *[https://domain.com/tos.html](https://www.domain.com/tos?)*, then the result displaying on the frontend is that *I agree with the <a href="https://domain.com/tos.html">Terms and Conditions</a> of Services*

#### Disable Default Functions

![](https://i.imgur.com/mgABx91.png)

- **Disable Add to compare, Wishlist**: Choose `Yes` to hide the `Add to compare` and `Add to Wishlist` buttons on the product on the frontend
- **Disable Register Customer Account**: Choose `Yes` to hide the `Create an Account` button after customers checkout by their guest account
- **Disable Shopping cart by Customer groups**:
  - The selected customer groups cannot access on Shopping cart page
  - Allow choosing many customer groups simultaneously
  - The default is that no group is selected
  
- **Disable Checkout page by Customer groups**:
  - The selected customer groups cannot access on the Checkout page
  - Allow choosing many customer groups simultaneously
  - The default is that no group is selected
  
#### Admin Email Notification

![](https://i.imgur.com/eVZgKJH.png)

- **Enable**: Choose `Yes` to send the email notification to the store owner when there're requests from customers
- **Sender Email**: Choose the sender to send the email notification
- **Send to**:
  - Fill the email to get the notification when there're requests from customers
  - Allow filling in many emails to get the notification simultaneously, the emails are separted by commas
  
### Rules Management
#### Add new rule
- Step 1: Enter the full information in the `General` section
- Step 2: Design the display of the rule on the frontend in the `What to Show` section
- Step 3: Set the condition applying the rule for products in the `Where to Show` section

##### Step 1: Enter the full information in the General section

- **Name**: Fill in the name of the rule
- **Status**: Choose `Enable` to apply for the rule
- **Store View**:
  - Only selected products on the store can be applied for the rule
  - Allow choosing many store views simultaneously
  
- **Customer Groups**:
  - Only the selected customer groups can see the products applied the rule
  - Allow choosing many groups simultaneously
  
- **From Date**: Choose the start day applying the rule on the product
- **To Date**: Choose the finish applying the rule on the product
  
- **Priority**: 
  - Enter priority for synchronizing objects
  - The smaller the input number, the higher the priority. 
  - Items have the equal priority, the priority will be based on what item is created first.  
  
  ![](https://i.imgur.com/VyvPZRT.gif)
  
##### Step 2: Design the display of the rule on the frontend in the What to Show section  
- **Button label**: Enter the label for the button to replace the Add to Cart button
- **Action**:
  - `Action = Popup a quote form`: Display the popup to login or as a note of customers so that they can send the requests to the store owner
    - `Quote Heading`: Enter the title for the popup
    - `Show Fields`: Choose the fields displaying the popup
    - `Required Fields`: Choose the field displaying the default on the popup
    - `Enable Terms and Conditions`: Choose Yes to show Terms and Condition
    
  - `Action = Redirect to an URL`: Redirect the customers to the desired admin page when clicking on the button to replace the Add to cart button
    - `Redirect URL`: Enter the URL that you want to redirect the customers for accessing to
    
  - `Action = Login to See Price`: Customers need to login to the website to view the price of the product
  - `Action = Hidden Add to Cart button`:
    - Hide the Add to cart button on the product
    - This section is usually for reference products or non-selling products
    
![](https://i.imgur.com/DZPm8Ky.gif)

##### Step 3: Set the condition applying the rule for products in the Where to Show section
  
- Choose the condition to apply the rule
- You can customize label products by setting the conditions for the product or selecting which products of the category will be displayed labels. You can find products that meet the conditions in the `PREVIEW PRODUCTS` section

![](https://i.imgur.com/VC6dUwa.gif)

### Requests Management
Display all customer requests sending to the store. 

![](https://i.imgur.com/GkzRIEY.png)

When you click on `View`, store owners can view the details of the request, such as the date of the request, the name and email of the customers, the product the customers are interested in and store owners can change the status of the request to manage requirements with ease. At the same time, they can also annotate on customer requirements.

![](https://i.imgur.com/9ugxE1d.png)

### Product
From the Admin Panel, go to `Catalog > Products > Add Product or Edit Product`

![](https://i.imgur.com/fW5pFdy.png)

- **Call for Price**: The product will be applied based on the selected rule in this field
  - `Call for Price = Inherit from Rule`: The product that complies with the created rule in `Rules` section will continue to apply that rule
  - `Inherit from Rule = Disable`: Not apply any rule for the product
  - For example: Your store has 3 rules applied as Rule 1, Rule 2, and Rule 3. The product A includes category Bags applied Rule 1, but you want the product A assign to apply with rule 2, you need to choose `Inherit from Rule = Rule 2`

### Compatible with Reports standard extension

If you have installed Mageplaza Reports Standard extension on your site, in the Dashboard of the admin panel will be displayed 2 different boards: `Call for price: Requests` and `Top Requested Product`.

`Call for price` dashboard: Requests will show the top 5 customers and products requested recently. Simultaneously, it also displays the comparison with the previous period time and the number of requests got. When clicking on `View Details`, admins can view the details all requests.

`Top Requested Products` dashboard will display the top 5 products that are requested the most and the number of requests respectively with that products.

![](https://i.imgur.com/ZFVXDZV.png)

When You click on the View Details link in the Call for Requests card, Requests page will show all information of the request sent to the website.


  
  
  
  
