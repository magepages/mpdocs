# Magento 2 Better Product Reviews Extension

## Overview

Customers are more likely to make purchasing decisions when they see a product that has good reviews from other customers. [Mageplaza Better Product Reviews](https://www.mageplaza.com/magento-2-better-product-reviews) extension helps new customers to quickly capture the number of reviews, average number of stars, recommend percentage, rating star chart at the top of the review block of each Product Detail page. In addition, customers can also write reviews for products purchased quickly when entering `My Account> My Product Reviews`. Another great function of the module is that admin can not only browse or approve reviews, but also can reply customer reviews. Review apply will be displayed right below that review without drifting away. Thereby bringing a great experience to customers, increasing attraction, and increasing revenue for store owners

## Download & Install

- [Mageplaza Better Product Reviews](https://www.mageplaza.com/magento-2-better-product-reviews)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)

## How to use

### 1. Customer

#### 1.1. Product Details

On the Product Detail Page, Customer can:

- See Review Summary including: review number, average number of stars, recommend percentage, rating star chart at the top of the review block

- Reorder the reviews to show the Newest Review, High Rating, Helpfulness reviews

- Evaluate Helpful Review 

Any Share Review on social networks with Social Share Button.

- Write Review: In addition to filling the Review name and content, Customer can also Add image, Recommend product, Term of Conditions, Recaptcha

- Customer can also see admin reply Review (if any)


1.2. My Account> My Product Reviews

- In My Product Reviews, the module allows you to display the Product that the Customer has purchased but not yet Review
- Customers can quickly find the product that they bought to make a Review for that product


2. Admin

In addition to setting the settings at Configuration, Admin can also:
- Control, edit and Customer's product review reply: Choose Marketing> User Content> Reviews

- Understand the Product or Customer Review number, thereby understanding upcoming sales trends
  - Product Reviews Report: Select Report> Reviews> By Products

  - Customer Reviews Report: Select Report> Reviews> By Customers

## How to Configure

1. Configuration
From the Admin panel, go to Stores> Configuration> Mageplaza> Better Product Reviews

1.1. General Configuration

- Select Enable = Yes to enable the module
- Remine Review on Customer Dashboard:
  - Select Yes to display Remine Review block in My Account> My Product Reviews of customers
  - With Remine Review block, Customer can see the products they have purchased but have not yet released Review about it
  - Only products in the completed order are displayed at Remine Review Block
- Enable Review Summary:
  - Select Yes to display the Review Summary at the Review tab of the Product Detail Page
  - Review Summary includes: review number, average number of stars,% recomment, chart star rating
- Report Review status:
  - Filter statistics by selected options.
  - Admin needs to go to Report> By Customers / By Products to check. Above 2 pages only show the number of option reviews selected
  - There are 3 admin options that can be selected
    - Approved: Display the approved review number of Customer / Product
    - Pending: Displays the pending review number of Customer / Product
    - Both: Displays the number of approve review and pending of Customer / Product
    
    
1.2. Write Review Configuration

- Enable:
  - Select Yes so Customer can write review for the product
  - Select No to turn off the Write a Review feature
  - Select For Purchase Only to display the Review form with the Customer who completed the order containing this product
- Customer Group: Only customers belonging to the selected Group can see the Form Review
- Use Ajax: Select yes to when Customer Submit 1 review, that Product Detail page will not be reloaded
- Enable Recommend Product:
  - Select Yes to display a comment indicating that the reviewer has introduced this product to their friends, and displayed the check box at Write a Review form.
  - Select No to hide checkboxes and comments
  - Select For Purchase Only to display the checkbox and comment with the Customer who completed the order containing this product
  
- Enable Google reCAPTCHA:
  - Select Yes to enable authentication with Google reCAPTCHA
  - This feature only runs when installing the Mageplaza Google reCAPTCHA module
- Allow Upload Images:
  - Select Yes to allow Customer to upload photos when writing Review
  - With the backend Review section, the admin can upload photos even if Disable Allow Upload Images = No
- Limit Image Upload:
  - Limit the number of photos that Customer can upload in comments
  - If left blank or 0, there is no limit to the number of images uploaded
  - With the Review section at the backend, admin is not limited to uploading

1.2.1 Terms and Conditions

- Enable: Select Yes to display the Term and Condition feature in the Review form
- Link Title
  - Enter a title for the Terms and Conditions section
  - If you use the "% anchor" variable in this field, the text entered at the Anchor Text field will be followed by the Title field's text.
- Anchor Text
  - Enter the content displayed for this field
  - Content in this field will be paired with the Title field
- Anchor URL
  - Enter the URL where the store owner wants to redirect the user until clicking on the filled content at the Anchor field
  - If you leave this field blank then the field If you leave this field blank, the Anchor Text field will not have a link to click and is a regular text
  - For example, in Title field, I agree with the% anchor of Services, the Anchor field is filled with Terms and Conditions and the URL is filled with https://domain.com/tos.html, the results displayed outside the frontend will be:
`I agree with the <a href="https://domain.com/tos.html"> Terms and Conditions </a> of Services`
- Checked by default: Select Yes to automatically check the checkbox (always agree to store terms and conditions)

1.3. Review Listing Configuration

- Enable Helpful Voting: Select Yes to display the Helpful button in each Review. Customer can click on the button to evaluate the usefulness of the Review
- Show Store Owner Answer: Select Yes to display admin answers (if any) at under each Review they answer
- Enable Share via Social: Select Yes to display Share via Social buttons in each Review. Customer can click on the Social button to share that review on their social page
- Show Verified Buyer Mark: Select Yes to display a distinguishing sign that Customer reviews have purchased products with Customer's reivew not yet purchased this product
- Show nickname: Show customer nickname at Review
- Show Review Date: Shows the date the review was created
- Default Item Qty per Page:
  - Limit the number of reviews displayed in each Product Detail Page
  - When the number of reviews is more than the limited Qty, the Load More button will be displayed
  
  
1.3.1. Sorting

- Enable Sorting On Frontend: Select Yes for the customer to change the way the reviews are sorted
- Select Type:
  - Select the sorting options that may be displayed in Frontend
  - Note: Helpfulness Type is only visible when admin select Enable Helpful Voting = yes
- Default Sorting: Choose the default arrangement when the new Customer opens the Review tab
- Default Sort Direction: Choose Increase or Decrease to sort the values in a certain order


2. Edit Review of Customer
Whenever Customer submit 1 review, that review will be logged in Pending status at Marketing> User Content> Reviews

When admin edit 1 review, in addition to the available Magento field, the Mageplaza Better Product Reviews module also adds some other useful fields.
- Approve and Next button: in order for admin to browse a review and move to the next review quickly

- Review Details: Add fields
  - Review Image:
    - Display the images that the Customer uploaded with Review
    - Admin can add edit delete image without effect of settings in Configuration
  - Recommend Product:
    - Let admin know whether Customer wrote this review or not, will introduce product to their friends.
    - Admin can also change the status of Recommend Product
  - Verified Buyer:
    - Let admin know if the reviewer has purchased this product
    - Admin cannot edit this field

- Admin Reply
  - Admin user: displays the username of the administrator who is logged in
  - Write a Reply: Select Yes so the admin can add answers to customer reviews
    - Nickname: the name that the admin wants to display outside Frontend
    - Comment: The content of the answer to the review

3. Statistics Quality Review

3.1. Report by Customers
Customer reviews are listed according to Report Review Status which has been installed at Configuration. With each status selected, the report will be different

3.2. Report by Products
Product reviews are listed according to Report Review Status installed at Configuration. With each status selected, the report will be different
