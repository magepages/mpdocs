# Magento 2 Call for Price

## Overview

## How to configure

From the Admin Panel, go to ``Store > Settings > Configuration > Mageplaza Extensions > Call for Price > Configuration``

### Configuration
From the Admin Panel, go to ``Store > Settings > Configuration > Mageplaza Extensions > Call for Price  > Configuration``, choose ``General`` sections

![Configuration](https://i.imgur.com/JCN8Ryj.png)

#### General Configuration

![general configuration](https://i.imgur.com/U1w8ySI.png)

- **Enable**: Choose `Yes` to use the functions of this module
- **Apply custom request status**:
  - `Apply custom request status = No`
    - There're 4 available statues of this extension: To Do, Doing, Done, Cancel
    - When there's a request sent to, the default status of the request is To Do
    
  - `Apply custom request status = Yes`
    - Admin can add, edit, or delete the request status to mange requests that they receive easily
  
#### Terms and Conditions

![Terms and Conditions](https://i.imgur.com/c9P4xX8.png)

- **Check by default**: Choose `Yes` to auto-tick on the checkbox (always agree with the terms and conditions of the store)
- **Title**:
  - Enter the title for the **Terms and Conditions**
  
- **Anchor**: 
  - Enter the content displaying for this field
  - The content of this field will merge with the Title field

- **URL**:
  - Enter the URL that store owners want to redirect the customers when clicking in the content filled in the `Anchor` field
  - For instance: In the `Title` field, you fill is that *I agree with*, in the `Anchor` field, you fill is that *Terms and Conditions* and the `URL` field is that *[https://domain.com/tos.html](https://www.domain.com/tos?)*, then the result displaying on the frontend is that *I agree with the <a href="https://domain.com/tos.html">Terms and Conditions</a>*

#### Disable Default Functions

![Disable Default Functions](https://i.imgur.com/V4OyTSe.png)

- **Disable Add to compare, Wishlist**: Choose `Yes` to hide the `Add to compare` and `Add to Wishlist` buttons on the product on the frontend
- **Disable Register Customer Account**: Choose `Yes` to hide the `Create an Account` button after customers checkout by their guest account
- **Disable Shopping cart by Customer groups**:
  - The selected customer groups cannot access on Shopping cart page
  - Allow choosing many customer groups simultaneously
  
- **Disable Checkout page by Customer groups**:
  - The selected customer groups cannot access on the Checkout page
  - Allow choosing many customer groups simultaneously
  
#### Admin Email Notification

![Admin Email Notification](https://i.imgur.com/p5gpoTQ.png)

- **Enable**: Choose `Yes` to send the email notification to the store owner when there're requests from customers
- **Sender**: Choose the sender to send the email notification
- **Send to**:
  - Fill the email to get the notification when there're requests from customers
  - Allow filling in many emails to get the notification simultaneously, the emails are separted by commas
  
### Rules
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
  
##### Step 2: Design the display of the rule on the frontend in the What to Show section  
- **Button label**: Enter the label for the button to replace the Add to Cart button
- **Action**:
  - `Action = Popup a quote form`: Display the popup to login or as a note of customers so that they can send the requests to the store owner
    - `Quote Heading`: Enter the title for the popup
    - `Show Fields`: Choose the fields displaying the popup
    - `Required Fields`: Choose the field displaying the default on the popup
    
  - `Action = Redirect to an URL`: Redirect the customers to the desired admin page when clicking on the button to replace the Add to cart button
    - `Redirect URL`: Enter the URL that you want to redirect the customers for accessing to
    
  - `Action = Login to See Price`: Customers need to login to the website to view the price of the product
  - `Action = Hidden Add to Cart button`:
    - Hide the Add to cart button on the product
    - This section is usually for reference products or non-selling products
    
- **Enable Terms and Condition**: Choose `Yes` to display the Terms and Condition

##### Step 3: Set the condition applying the rule for products in the Where to Show section
  
- Choose the condition to apply the rule
- Only products that meet the requirements can be applied the rule

### Requests
Display all customer requests sending to the store. When you click on `View`, store owners can view the details of the request, such as the date of the request, the name and email of the customers, the product the customers are interested in and store owners can change the status of the request to manage requirements with ease. At the same time, they can also annotate on customer requirements.


### Product
From the Admin Panel, go to `Catalog > Products > Add Product or Edit Product`

![call for price](https://i.imgur.com/qQ24qtD.png)

- **Call for Price**: The product will be applied based on the selected rule in this field
  - `Call for Price = Inherit from Rule`: The product that complies with the created rule in `Rules` section will continue to apply that rule
  - `Inherit from Rule = Disable`: Not apply any rule for the product
  - For example: Your store has 3 rules applied as Rule 1, Rule 2, and Rule 3. The product A includes category Bags applied Rule 1, but you want the product A assign to apply with rule 2, you need to choose `Inherit from Rule = Rule 2`

### Compatible with Reports standard extension

If you have installed Mageplaza Reports Standard extension on your site, in the Dashboard of the admin panel will be displayed 2 different boards: `Call for price: Requests` and `Top Requested Product`.

`Call for price` dashboard: Requests will show the top 5 customers and products requested recently. Simultaneously, it also displays the comparison with the previous period time and the number of requests got. When clicking on `View All`, admins can view the details all requests.

`Top Requested Products` dashboard will display the top 5 products that are requested the most and the number of requests respectively with that products.



### Frontend

### Email


  
  
  
  
