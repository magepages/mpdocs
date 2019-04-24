# Better Product Reviews 

## Overview

Customers are more likely to make purchasing decisions when they see a product that has good reviews from other customers. [Mageplaza Better Product Reviews](https://www.mageplaza.com/magento-2-better-product-reviews) extension helps new customers to quickly capture the number of reviews, average number of stars, recommend percentage, rating star chart at the top of the review block of each Product Detail Page. In addition, customers can also write reviews for products purchased quickly when entering `My Account> My Product Reviews`. Another great function of the module is that admin can not only browse or approve reviews, but also can reply customer reviews. Review apply will be displayed right below that review without drifting away. Thereby bringing a great experience to customers, increasing attraction, and increasing revenue for store owners

## Download & Install

- [Mageplaza Better Product Reviews](https://www.mageplaza.com/magento-2-better-product-reviews)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)

## How to use

### 1. Customer

#### 1.1. Product Details

On the Product Detail Page, customers can:

- See Review Summary including: review number, average number of stars, recommend percentage, rating star chart at the top of the review block

![](https://i.imgur.com/CH1u2zl.png)

- Reorder the reviews to show the Newest Review, High Rating, Helpfulness reviews

![](https://i.imgur.com/uscfmbq.png)

- Evaluate Helpful Review. Share any review on social network by **Social Share** button

![](https://i.imgur.com/07dOfAm.png)

- Write Review: In addition to filling the Review summary and content, customers can also Add image, Recommend product, Agree with Term of Conditions

![(https://i.imgur.com/9qcgxZm.png)

- Customer can also can see admin reply Review (if any)

![](https://i.imgur.com/O7RtHa6.png)


#### 1.2. My Account> My Product Reviews

![](https://i.imgur.com/yr2BTn7.png)

- In **My Product Reviews**, the module allows displaying the products that customers have purchased but not yet left reviews
- Customers can quickly find the product that they bought to write a review for that product


### 2. Admin

In addition to settings at Configuration, admin can also:
- Control, edit and reply customers' reviews: Choose `Marketing> User Content> Reviews`

![](https://i.imgur.com/d2pEui7.png)

- Get the report of reviews by products or by customers, thereby understanding upcoming sales trends

  - **Product Reviews Report**: Select `Report> Reviews> By Products`
  
  ![](https://i.imgur.com/hBg04NA.png)

  - **Customer Reviews Report**: Select `Report> Reviews> By Customers`
  
  ![](https://i.imgur.com/jEKKqmA.png)

## How to Configure

### 1. Configuration


From the **Admin panel**, go to `Stores> Configuration> Mageplaza> Better Product Reviews`

![](https://i.imgur.com/o8a2paC.png)

#### 1.1. General Configuration

![](https://i.imgur.com/ReP1Qr9.png)

- Select `Enable = Yes` to enable the module
- **Remind Review on Customer Dashboard**:
  - Select `Yes` to display **Remind Review** block in `My Account> My Product Reviews` of customers
  - With **Remind Review** block, customers can see the products they have purchased but have not yet leave review for it
  - Only products in the completed orders are displayed at **Remind Review** Block
- **Enable Review Summary**:
  - Select `Yes` to display the **Review Summary** at the Review tab of the **Product Detail Page**
  - **Review Summary includes**: review number, average number of stars, recommend percentage, rating star chart
- **Report Review status**:
  - Filter statistics by selected options
  - Admins need to go to `Report> By Customers / By Products` to check thr status. On these 2 pages only show the number of option reviews selected
  - There are 3 review statuses that can be selected:
    - **Approved**: Display the approved review number by Customer/Product
    - **Pending**: Displays the pending review number by Customer/Product
    - **Both**: Displays the number of approve reviews and pending reviews by Customer/Product
    
    
#### 1.2. Write Review Configuration

![](https://i.imgur.com/B7zCWpY.png)


- **Enable**:
  - Select `Yes` to enable customers to write reviews for the products
  - Select `No` to turn off the Write a Review function
  - Select For Purchase Only to display the Write Review field with the Customer who completed the order containing this product
- **Customer Group**: Only customers belonging to the selected Group can see the Review Form
- **Notice Message**: Insert notice for Customer who are not allowed to write reviews
- **Use Ajax**: Select `Yes` to enable AJAX loading. When a customer submit 1 product review, that Product Detail page will not be reloaded
- **Allow recommending products**:
  - Select `Yes` to display a comment indicating that the reviewer has introduced this product to their friends, and displayed the check box at Write a Review form.
  - Select `N`o to hide checkboxes and comments
  - Select `For Purchase Only` to display the checkbox and comment with the customers who completed the order containing this product
- **Allow Upload Images**:
  - Select `Yes` to allow customers to upload photos when writing reviews
  - With the backend Review section, admins can upload photos even if `Disable Allow Upload Images = No`
- **Image Upload Qty Limit**:
  - Limit the number of photos that customers can upload in comments
  - If left blank or 0, there is no limit to the number of images uploaded
  - With the Review section at the backend, admin is not limited to upload images

##### 1.2.1 Terms and Conditions

![](https://i.imgur.com/pacUDV2.png)

- **Enable**: Select `Yes` to display the **Term and Condition** feature in the Review form
- **Link Title**:
  - Enter a title for the Terms and Conditions section
  - If you use the "%anchor%" variable in this field, the text entered at the **Anchor Text** field will be followed by the Title field's text.
- **Anchor Text**
  - Enter the content displayed for this field
  - Content in this field will be paired with the **Title** field
- **Anchor URL**:
  - Enter the URL where the store owner wants to redirect the user until clicking on the filled content at the **Anchor** field
  - If you leave this field blank then the field, the **Anchor Text field** will not have a link to click and is a regular text
  - For example, in **Title field**: `I agree with the %anchor% of Services`, the **Anchor field** is filled with `Terms and Conditions` and the URL is filled with `https://domain.com/tos.html`, the results displayed outside the frontend will be:
  
`I agree with the <a href="https://domain.com/tos.html"> Terms and Conditions </a> of Services`

- **Checked by default**: Select `Yes` to automatically check the checkbox (always agree to store terms and conditions)

#### 1.3. Review Listing Configuration

![](https://i.imgur.com/Y1yNJo4.png)

- **Enable Helpful Voting**: Select `Yes` to display the Helpful button in each Review. Customer can click on the button to evaluate the usefulness of the Review
- **Show Store Reply**: Select `Yes` to display admin answers (if any) at under each Review
- **Enable Social Share**: Select Yes to display Share via Social buttons in each Review. Customer can click on the Social button to share that review on their social page
- **Show Verified Buyer Mark**: Select Yes to display a distinguishing sign that Customer reviews have purchased products with Customer's reivew not yet purchased this product
- **Show Nickname**: Show customer nickname at Review
- **Show Review Date**: Show the date the review was created
- **Default Item Qty per Page**:
  - Limit the number of reviews displayed in each **Product Detail Page**
  - When the number of reviews is more than the limited quantity, the Load More button will be displayed
  
  
##### 1.3.1. Sorting

![](https://i.imgur.com/URXGte9.png)

- **Enable Sorting On Frontend**: Select `Yes` for the customer to change the way the reviews are sorted
- **Select Type**:
  - Select the sorting options that may be displayed in Frontend
  - **Note**: **Helpfulness Type** is only visible when admin select `Enable Helpful Voting = Yes`
- **Default Sorting**: Choose the default arrangement when the new Customer opens the **Review** tab
- **Default Sort Direction**: Choose **Ascending** or **Descending** to sort the values in a certain order


### 2. Edit Review of Customer

Whenever Customer submit 1 review, that review will be logged in **Pending** status at `Marketing> User Content> Reviews`

![](https://i.imgur.com/vAq4wXr.png)

When admin edit 1 review, in addition to the available Magento fields, the **Mageplaza Better Product Reviews** module also adds some other useful fields.
- **Approve and Next button**: in order for admin to approve a review and move to the next review quickly

![](https://i.imgur.com/LnZA2x6.png)

- **Review Details**: Add fields
  - **Review Image**:
    - Display the images that the Customer uploaded with Review
    - Admin can add edit delete image without effect of settings in Configuration
  - **Recommendation Display**: 
    - Let admin know whether Customer wrote this review or not, will introduce product to their friends.
    - Admin can also change the status of Recommend Product
  - **Verified Buyer**:
    - Let admin know if the reviewer has purchased this product
    - Admin cannot edit this field
    
    ![](https://i.imgur.com/vR5aSlW.png)

- **Admin Reply**:
  - **Admin user**: displays the username of the administrator who is logged in
  - **Write a Reply**: Select `Yes` so the admin can add answers to customer reviews
    - **Nickname**: the name that the admin wants to display outside Frontend
    - **Comment**: The content of the answer to the review
    
    ![](https://i.imgur.com/AxBiNbP.png)

### 3. Statistics Quality Review

#### 3.1. Report by Customers

Customer reviews are listed according to **Report Review Status** which has been installed at Configuration. With each status selected, the report will be different

![](https://i.imgur.com/Ku3SBVh.png)

#### 3.2. Report by Products

Product reviews are listed according to **Report Review Status** installed at Configuration. With each status selected, the report will be different

![](https://i.imgur.com/cYI9sVs.png)
