# Facebook Plugin
## Overview

Nowadays, Facebook is one of the most popular social networks to be used. And almost store owners have the need to advertise their stores on Facebook. However, the cost of advertising on Facebook is quite large. Therefore, Mageplaza has built a new module as Facebook Plugin. It allows store owners to insert a Facebook Page widget easily. This makes it easier, less expensive, and more effective for online stores to reach consumers. Not only that, store owners can manage Facebook comments on the product details page with an ease.

## Download and Install

- Download Facebook Plugin
- [Install Mageplaza module](https://www.mageplaza.com/install-magento-2-extension/)

## How to configure Facebook API

To create the Facebook app and the Facebook App API information, please follow these steps:

**Step 1:** Go to: https://developers.facebook.com/

**Step 2:** Log in to Facebook. Click **Login** to sign in with the existing Facebook account, or register a new account. After logging in, choose **My App** from the menu at the top.

![](https://i.imgur.com/1gvMktm.png)

**Step 3**: Select the app type that you are using. Fill out the Display name for your app.

![](https://i.imgur.com/3qw33dH.png)

**Step 4**: Go to `Settings > Basic` to get the App ID in Facebook to fill in the **Facebook App ID** field of **Mageplaza Facebook Plugin extension** to connect with your Facebook.

![](https://i.imgur.com/WAccWJs.png)

![](https://i.imgur.com/0yHw4Dq.png)

You can go to: https://developers.facebook.com/tools/comments to get the list of your Facebook apps, which lets you moderate all comments associated with each app.

**Note**: After setting up Facebook API information, you should go to **Widget** to select the display positions of the post or website,... of Facebook on your website. 

## How to configure

From the Admin Panel, go to `Stores > Configuration > Mageplaza Extensions > Facebook Plugin > Configuration`

![](https://i.imgur.com/SeNSNDj.png)

### 1. Configuration
#### 1.1. General Configuration

![](https://i.imgur.com/p6OMV2V.png)

- **Enable**: Choose Yes to use the feature of this module
- **Facebook App ID**:
  - Enter App ID so that admins can manage the facebook comments on the product page
  - You are not allowed to leave this field blank
  
#### 1.2. Facebook Plugin

![](https://i.imgur.com/YaTBB0s.png)

![](https://i.imgur.com/3zeixvO.png)

- **Enable**: Select Yes to insert the Facebook page into the Widget
- **Facebook URL**:
  - Enter the URL of the Facebook page you want to advertise
  - Only show Facebook pages in the public mode

- **Tabs**:
  - Select the tabs displayed on the Facebook page
  - You can choose from three tabs: Timeline, Event, Messages
  - The default is the Timeline tab

- **Width**:
  - Enter the width of the Facebook page display frame
  - The default width for frames is 340px
  - Minimum width is 180px, maximum width is 500px

- **Height**:
  - Enter the length of the Facebook page display frame
  - The default is 500px
  - The minimum length is 70px

- **Hide cover photo**:
  - Select Yes to hide the cover of the Facebook page
  - The default is No

- **Hide the custom Call To Action**: Select Yes to hide the call-to-action button on the Facebook page (if this call-to-action button is available on the page). For example, on the Facebook page there is the buttons: Book Now, Call Now, Send Email, etc, then these buttons will be hidden if `Hide the custom call to action = Yes`

- **Small header**:
  - Select Yes to display the header with the small size
  - The call-to-action button will be hidden

- **Adapt Width**:
  - Select Yes to automatically adjust the width of the Facebook display frame accordingly
  - The default is Yes

- **Snippet Code**:
  - `XML File`: Copy and paste the code into a file that includes `.xml` where you want to display the Facebook page outside the frontend
- `CMS Page, CMS Static Block`: Copy and paste the code to the page or block the page you want to display the Facebook page outside the frontend
- `Template .phtml file`: Copy and paste the code into the `.phtml` file where you want to display the Facebook page outside the frontend.

#### 1.3. Facebook Comment

![](https://i.imgur.com/Je0rH0O.png)

- **Enable Facebook Comment**: Select Yes to enable the comment feature on the `Product View` page by Facebook
- **Title**:
  - Enter a title for the comment tab
  - The default title for the comment tab is *Facebook Comment*

- **Width**:
  - Enter the width for the comment section
  - The minimum width is 320px

- **Number of Posts**:
  - Enter the number of comments you want to display
  - The minimum number of comments for the display is 1

### 2. Product 

From the Admin Panel, go to Catalog > Product

![](https://i.imgur.com/N4rzhpe.png)

- **Disabled Facebook Comments**: Select `Yes` to allow the function **Disabled Facebook Comments** on the Product Detail Page 


### 3. Widgets 

#### How to add the widget

- **Step 1**: Select the type
- **Step 2**: Complete the Storefront Properties section
- **Step 3**: Configure Widget Options to display the Facebook page

##### Step 1: Select the type

- On the Panel Admin, `Content > Elements > Widgets`
- In the upper-right corner of Widgets workplace, click on `Add Widget` button.
- In the `Settings` section:
  - Choose `CMS Static Block` type in the Type box.
  - Choose the current theme you are applying in the `Design Theme`.
  - Click `Continue` button.

![](https://i.imgur.com/CvLiImj.png)


##### Step 2: Complete the Storefront Properties section
- In the Storefront Properties section,
  - Enter `Widget Title` for the internal reference.
  - Assign the block to all store views in the `Assign to Store View` field or to any store view you want to apply the block.
  - Set the `Sort Order` if many blocks are placed at the same container. The block is at the top if the inserted value is zero.

![](https://i.imgur.com/FFYSrgD.png)

- In the Layout Updates section, click on `Layout Update` to set the layout.
  - Choose the [category](https://www.mageplaza.com/kb/how-to-create-a-new-category-in-magento-2.html), [product](https://www.mageplaza.com/kb/how-create-simple-product-magento-2.html), or [page]https://www.mageplaza.com/kb/how-to-add-a-new-cms-page-magento-2.html) where shows the block in the `Display on` field.
  - If set to a specific page, you need to choose Page you want to the block to display and set Container that is the position of the page the block appears.

![](https://i.imgur.com/KvK6beI.png)

##### Step 3: Configure Widget Options to display the Facebook page

- `Facebook Widget options`:

![](https://i.imgur.com/0iW8mVE.png)

  - `Facebook Widget options = Use Config`: Use the configuration displaying for Facebook page in the `Configuration` section
  - `Facebook Widget options = Custom`: Admins set the display for Facebook page

![](https://i.imgur.com/Lrzvt9P.png)

![](https://i.imgur.com/vLmTmg5.png)

- **Facebook URL**:
  - Enter the URL of the Facebook page you want to advertise
  - Only show Facebook pages in the public mode

- **Tabs**:
  - Select the tabs displayed on the Facebook page
  - You can choose from three tabs: Timeline, Event, Messages
  - The default is the Timeline tab

- **Width**:
  - Enter the width of the Facebook page display frame
  - The default width for frames is 340px
  - Minimum width is 180px, maximum width is 500px

- **Height**:
  - Enter the length of the Facebook page display frame
  - The default is 500px
  - The minimum length is 70px

- **Hide cover photo**:
  - Select Yes to hide the cover of the Facebook page
  - The default is No

- **Hide the custom Call To Action**: Select Yes to hide the call-to-action button on the Facebook page (if this call-to-action button is available on the page). For example, on the Facebook page there is the buttons: Book Now, Call Now, Send Email, etc, then these buttons will be hidden if `Hide the custom call to action = Yes`

- **Small header**:
  - Select Yes to display the header with the small size
  - The call-to-action button will be hidden

- **Adapt Width**:
  - Select Yes to automatically adjust the width of the Facebook display frame accordingly
  - The default is Yes

## 4. Frontend
### 4.1. The display of the Facebook page

![](https://i.imgur.com/E9xOSGg.png)

### 4.2. The display of facebook comment on the product page

![](https://i.imgur.com/zlfQZXJ.png)

### 4.3. Manage the comment on the App of Facebook

![](https://i.imgur.com/b6RXN6X.png)



## Note

- If you want to uninstall the extension, please use the composer to run the command: `bin/magento module:uninstall Mageplaza_FacebookPlugin`

- In case you have deleted the extension manually, you need to delete the `mp_facebook_comments` attribute as well in the data base or at backend 

  - **Method 1 Backend**: From the **Admin Panel**, go to `Stores > Attributes > Product`. At column **Attribute Code**, look for attribute `mp_facebook_comments`, click to it and delete.
  
![](https://i.imgur.com/Oj6L81P.png)
  
  - **Method 2 Data base**: Navigate to **eav_attribute** table. At column **Attribute_code**, look for attribute `mp_facebook_comments`, click to it and delete.


![](https://i.imgur.com/Hkxz5dQ.png)








