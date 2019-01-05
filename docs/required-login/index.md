# Required Login

## Overview

Mageplaza Required Login which can be applied to any page you want is used to force visitors to log in or register accounts. As a result, you can restrict visitors from accessing the site without logging in as well as generate and manage customer information. After login, admin can redirect customers back to the previous page or to any page you want. And especially with this new Required Login extension, if the number of customer account registrations is sufficient, you can turn off the account creation feature to ensure your site's security.


## Download and Install

- [Mageplaza Required Login]()
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


## How to use Required Login

![Imgur](https://i.imgur.com/GXeySUy.png)

## How to configure

### 1. Configuration

Login to the **Magento Admin**, choose `Stores > Configuration > Required Login`.

![Imgur](https://i.imgur.com/c8J7ZV1.png)


#### 1.1. General

![Imgur](https://i.imgur.com/nFEdGIE.png)


- **Enable**: Select `Yes` to enable the module 

- **Disable Create Account**: Select `Yes` to disable the **Create Account** feature. This will prevent customers generating accounts to access to your security sites. 

- **Login Message**: 
  - Enter the message shown after visitors access the selected pages, they will be automatically redirected to the login page
  - If you leave it blank, the default message is: `This page requires login to access. Please take some minutes to login first`
  
  
#### 1.2. Configuration

![Imgur](https://i.imgur.com/m5DuFGt.png)


- **Apply for**: 
  - Select the page you want to apply required login. You can choose to apply multiple pages at once. The pages unselected will not be applied login requests.
  - You can leave this field blank
  
- **Apply for CMS Page**:
  - Select the CMS page you want to apply required login. You can choose to apply multiple CMS pages at the same time. The CMS pages unselected will not apply login requests.
  - You can leave this field blank
  
- **Apply for Custom Page**:  Choose Custom page:
  - **Include page URLs**: Show a field as text for entering the URL paths which must be separated by a `/` in the field. Required Login with all pages including the url links entered below. Fro example: /blog/,/men/top/t-shirt,...
  - **Exclude page URLs**: 
    - Show more fields as text. Enter the URL paths which are separated by a `/` in the field. Required Login with all pages not including the url links entered below.
    
`Note`: The field **Apply for Custom Page** will be prioritized applied if you choose the same URLs in other fields. 

- **Redirect To**: 
  - Select the page you want visitors to be redirected to after successful login
  - Select **Custom URL**, a text field will appear letting you insert URL. They must be separated by a `/`  
  - This is a required field



