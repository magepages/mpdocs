# Age Verification

## Overview

In many countries, the law is required to apply a verification process before users can access the content of the website or if the website you are selling has products that are only suitable for certain ages. You want to limit it. With [Mageplaza's new Age Verification extension](https://www.mageplaza.com/magento-2-age-verification/), you will be able to confirm the age of your customers and grant access to the site only after age verification. And in particular, you can configure the content design for popup to validate the age to improve efficiency and fully capture customer information.

## How to download and install

- [Download Mageplaza Age Verification](https://www.mageplaza.com/magento-2-age-verification/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


## How to use

- Display popup to verify age when clicking on **Add to cart** button or when accessing to the specific pages in which acquire age verification

  - Checkbox Type:
  
  ![Imgur](https://i.imgur.com/2Lmp2vU.png)

  - Input DOB Type:
  
  ![Imgur](https://i.imgur.com/E4bZ9go.png)
  
  - Yes/No Type:
  
  ![Imgur](https://i.imgur.com/tHaG5J7.png)
  
  
## How to configure

### 1. Configuration

Login to the **Admin Magento**, choose `Stores> Configuration> Age Verification`.

![Imgur](https://i.imgur.com/YFV3brA.gif)

#### 1.1. General

![Imgur](https://i.imgur.com/GXwHwiO.png)

- **Enable**: Select "Yes" to turn on the Module.

- **Verification Age**:
  - Enter the age number to limit website access
  - Required field cannot be blank. If you enter the word, it will display an error message.

- **Enable Term & Condition**: Select "Yes" to turn on the display of **Term & Condition** notifications as a tick option as "I agree with the terms and conditions".

- **Cookie life-time**:
  - Enter the number of days to save the cookie and apply the time entered to limit the age of access to the page. When the time runs out, the age limit selected for that page will not apply. If under age verified, cookie will not save the data
  - If left blank, it will default to 365 days.

- **Apply for Customer Group (s)**: Select the **Customer Groups** group to apply Age Verification. You can select multiple customer groups at once. Customer groups not selected will not apply Age Verification

- **Auto Verify Age If customer has DOB**: Select "Yes" to automatically verify age if the customer has a DOB when logged in. If "No" is selected, it will display the popup to Age Verification even if the customer is logged in. For example: In case the customer has registered an account that has updated their date of birth and if the age is enough to access the website, it will automatically verify the age and vice versa if not old enough, it will automatically redirect to targeted pages you choose.

- **Re-direct URL**:
  - Enter the url to redirect the item to the selected url if it's not old enough.
  - The required field must not be blank. If false, Url will display the message "Please enter a valid URL. Protocol là cần thiết (http: //, https: // or ftp: //)."


#### 1.2. Verify Configuration Page

![Imgur](https://i.imgur.com/9Soar3a.png)

![Imgur](https://i.imgur.com/KgGj5gu.png)


- **Apply for**:
  - Select the page you want to apply to require Age Verification. You can choose to apply multiple pages at once. Sites not selected will not apply for Age Verification requests.
  - You can leave this field blank.
  - `Note : With one checkout page including checkout page and checkout page when compatible with One Step Checkout. You can install One Step Checkout features to make payment steps more convenient and shorter.

- **Apply for CMS Page**:
  - Select the CMS page you want to apply Age Verification requirements. You can choose to apply multiple CMS pages at the same time. The CMS pages not selected will not apply the Age Verification requirement.
  - You can leave this field blank.

- **Apply for Category Pages**:
  - Select Category Pages to apply the Age Verification request. You can select all or multiple category pages at once. Non-selected category pages will not apply to Age Verification requests.
  - You can leave this field blank.
  - Compatible with [Product Labels](https://www.mageplaza.com/magento-2-product-labels/) to add "Age Verify" label for product

![Imgur](https://i.imgur.com/VAxXnYH.png)

- **Apply for Product Detail Page(s)**: Select the condition for age verification on the product detail page. Those products that are satisfied will be subject to age verification. If this field is left blank, it will auto-apply age verification for all product detail pages. 

- **Include Custom Page**: Enter the Url path and be separated by a / in the field. Age Verification with all pages including the url url entered. For example: / blog, / men / top / t-shirt, ...

- **Exclude Custom Page**:
  - Enter the Url path and be separated by a slash in the field. Age Verification with all pages does not include the url url entered.
  - If the Age Verification requirement of both Include Custom Page is applied and the pages above are not applied, Age Verification will not apply. Will prioritize this school first.
  - `Note`: If the rule belongs to both **Include Custom Page** and **Exclude Custom Page**, then Age Verification will not be applied.

#### 1.3. Purchase Verify Configuration

![Imgur](https://i.imgur.com/WNbrDxQ.png)

- **Select Product Condition**:
  - Select the condition for age verification on the product detail page. Those products that are satisfied will be subject to age verification. If this field is left blank, it will auto-apply age verification for all product detail pages when clicking `Add to cart`

  - If the Product condition belongs both in the **Page Verify Configuration** and **Purchase Verify Configuration**, it is preferable to consider the Product condition in the Purchase Verify Configuration first.
  
  
- **Age Notice**: Select the type of age notice which is displayed in **Product Detail Page** with the products requiring age verification when clickign `Add to cart`
  - **Small Image**: Apply **Purchase Verify Configuration** with **Small image**. Show a **Notice Image** field.
    - **Notice Image**: click Choose file to upload the Image file. Display the fixed image at the top left of the page. If left blank, the image will be defaulted to the system.
    
    ![Imgur](https://i.imgur.com/Kjyq1yO.png)

  - **Notice Message**: Apply the **Purchase Verify Configuration** to the **Notice Message**. Show a **Notice Message** field.
    - **Notice Message**: Enter the age notification in the **Notice Message** field. If left blank, the default is "You must verify your age to buy this product."

![Imgur](https://i.imgur.com/ZkPLtOc.png)

#### 1.4. Design

![Imgur](https://i.imgur.com/SbciPlS.png)

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



