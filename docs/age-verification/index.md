# Age Verification

## Overview

In many countries, the law is required to apply a verification process before users can access the content of the website or if the website you are selling has products that are only suitable for certain ages. You want to limit it. With [Mageplaza Age Verification extension](https://www.mageplaza.com/magento-2-age-verification/), you will be able to confirm the age of your customers and grant access to the site only after age verification. And in particular, you can configure the content design for popup to validate the age to improve efficiency and fully capture customer information.

## How to download and install

- [Download Mageplaza Age Verification](https://www.mageplaza.com/magento-2-age-verification/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


## How to use

- Display popup to verify age when clicking on **Add to cart** button or when accessing to the specific pages in which acquire age verification

  - **Checkbox Type**:
  
  ![Imgur](https://i.imgur.com/2Lmp2vU.png)

  - **Input DOB Type**:
  
  ![Imgur](https://i.imgur.com/E4bZ9go.png)
  
  - **Yes/No Type**:
  
  ![Imgur](https://i.imgur.com/tHaG5J7.png)
  
  
## How to configure

### 1. Configuration

Login to the **Admin Magento**, choose `Stores> Configuration> Age Verification`.

![Imgur](https://i.imgur.com/9gZcVsC.gif)

#### 1.1. General

![Imgur](https://i.imgur.com/4lLdHCD.png)

- **Enable**: Select "Yes" to turn on the Module.

- **Verification Age**:
  - Enter the age number to limit website access
  - This is a required field. If you enter the letter, it will display an error message (only number allowed).

- **Enable Term & Condition**: Select `Yes` to turn on the display of **Term & Condition** notifications as a check box as `I agree with the terms and conditions`.

- **Link Title**: Enter a name to notify **Term & Condition**. For example: "I agree with the"

- **Anchor Text**: Enter a click name that will display the information you want to convey to your customers. Example: Term & Condition

- **Anchor URL**: Enter the page link so that clicking on the name you just entered in the **Anchor Text** field will redirect to the page you want.

![Imgur](https://i.imgur.com/o0W4iPF.png)

- **Cookie life-time**:
  - Enter the number of days to save the cookie and apply this period for age verification. When the time runs out, the age verification applied for certain pages will be disabled then. Also, cookie will not save the data for under age verification.
  - If left blank, default period is 365 days.

- **Apply for Customer Group (s)**: Select the **Customer Groups** group to apply Age Verification. You can select multiple customer groups at once. Customer groups not selected will not be applied Age Verification

- **Auto Verify Age If customer has DOB**: Select `Yes` to automatically verify age if the customer has a DOB when they logged in. If `No` is selected, it will display the popup to Age Verification even if the customer is logged in. For example: In case the customer has registered an account that has updated their date of birth and if the age is enough to access the website, it will automatically verify the age and vice versa if not old enough, it will automatically redirect to targeted pages you choose.

- **Re-direct URL**:
  - Enter the url to redirect the cútomers to the selected url if they are under age required
  - This is a required field. If you enter false Url, the message is displayed `Please enter a valid URL. Protocol is required (http: //, https: // or ftp: //)."


#### 1.2. Page Verify Configuration 

![Imgur](https://i.imgur.com/HE3KExM.png)

![Imgur](https://i.imgur.com/Ktb9QkN.png)


- **Apply for**:
  - Select the page you want to require Age Verification. You can choose to apply multiple pages at once. Sites not selected will not require Age Verification.
  - You can leave this field blank.
  - `Note`: With checkout page including default checkout page and checkout page which are compatible with One Step Checkout, you can install [One Step Checkout](https://www.mageplaza.com/magento-2-one-step-checkout-extension/) extension to make payment steps more convenient and faster.

- **Apply for CMS Page**:
  - Select the CMS page you want to apply Age Verification. You can choose to apply multiple CMS pages at the same time. The CMS pages not selected will not require Age Verification.
  - You can leave this field blank.

- **Apply for Category Pages**:
  - Select Category Pages to apply the Age Verification. You can select all or multiple category pages at once. Non-selected category pages will not require Age Verification.
  - You can leave this field blank.
  - Compatible with [Product Labels](https://www.mageplaza.com/magento-2-product-labels/) to add **Age Verify** label for product

![Imgur](https://i.imgur.com/VAxXnYH.png)

- **Apply for Product Detail Page(s)**: 
  - Select `Yes` to show another field to apply Age Verification on the Product Detail Page. Those products that are satisfied will be applied to age verification. If this field is left blank, it will auto-apply age verification for all product detail pages. 
  - Select `No`: Not apply Popup of Age verification for any Product Detail Page.
  
- **Include Custom Page**: Enter the Url path which must be separated by a / in the field. Apply Age Verification to all pages with the url selected. For example: / blog, / men / top / t-shirt, ...

- **Exclude Custom Page**:
  - Enter the Url path which must be separated by a / in the field. Apply Age Verification with all pages except the url selected.
  - This field is highest priority for applying age verification
  - `Note`: If the rule belongs to both **Include Custom Page** and **Exclude Custom Page**, then Age Verification will not be applied.

#### 1.3. Purchase Verify Configuration

![Imgur](https://i.imgur.com/5mPncum.png)

- **Select Product Condition**:
  - Select `Yes` to show another field to choose the condition for age verification on the product detail page. Those products that are satisfied will be applied age verification. If this field is left blank, it will auto-apply age verification for all product detail pages when clicking `Add to cart`

  - If the Product condition belongs to both the **Page Verify Configuration** and **Purchase Verify Configuration**, it is preferable to consider the Product condition in the **Purchase Verify Configuration** first.
  
  
- **Age Notice**: Select the type of age notice which is displayed in **Product Detail Page** with the products requiring age verification when clicking `Add to cart`
  - **Small Image**: Apply **Purchase Verify Configuration** with **Small image**. Show a **Notice Image** field.
    - **Notice Image**: click `Choose file` to upload the Image. Display the image at the top left of the page. If left blank, default image will be used
    
    ![Imgur](https://i.imgur.com/Kjyq1yO.png)

  - **Notice Message**: Apply the **Purchase Verify Configuration** to the **Notice Message**. Show a **Notice Message** field.
    - **Notice Message**: Enter the age notification in the **Notice Message** field. If left blank, the default is "You must verify your age to buy this product."

![Imgur](https://i.imgur.com/ZkPLtOc.png)

#### 1.4. Design

![Imgur](https://i.imgur.com/YVNC3oF.png)

- **Checkbox Type**:
  
  ![Imgur](https://i.imgur.com/2Lmp2vU.png)

- **Input DOB Type**:
  
  ![Imgur](https://i.imgur.com/E4bZ9go.png)
  
- **Yes/No Type**:
  
  ![Imgur](https://i.imgur.com/tHaG5J7.png)


- **Icon**: click **Choose file** button to upload image. This icon is shown at the top of the popup. If left blank, system will use the default image.
- **Title**: Enter popup name at the top. If left blank, the default name is **AGE VERIFY**.
- **Description**: Enter the poup description which is shown under the icon. If left blank, it will default to the number of ages set at the **Verification Age** field, for example, `You must be older than 18 years old to enter this page`.
- **Confirm button label**: Enter the name of the button for Confirm the information added by visitors. If left blank, default label is **Enter**.
- **Cancel button label**: Enter the button name for Cancel the age verification filling by visitor. If left blank, default label is **Cancel**.



