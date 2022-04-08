# Google Tag Manager

## Overview

How to know the increase in traffic of a website every week? What is the conversion rate of turning visitors to customers this month? Mageplaza Google Tag Manager extension will help online store track and report these data. The module is integrated with Google Analytics, Google Tag Manager, Facebook and Google Adwords to provide statistics about Shopping Behavior, Checkout Behavior, Product Performance that allow you to track website traffic and conversion rates with a few clicks.

## How to download and install

- Download Mageplaza Google Tag Manager
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


## How to use


### Google Tag Manager:

- To register a **Google Tag Manager account**, please access the following link [here](https://marketingplatform.google.com/about/tag-manager/)

![](https://i.imgur.com/sthn5Lk.png)

- Then, fill in the required information to register your account:

![](https://i.imgur.com/ijoIhMr.png)

- Copy the code below and paste it into each page of your site.

![](https://i.imgur.com/h9h63QO.png)

- Get **Container ID** to install in your Magento store. 

![](https://i.imgur.com/UZ8Ww9Y.png)

### Google Analytics:

Visit the following link to register a [Google Analytics account](https://analytics.google.com/analytics/web/provision/?authuser=0#/provision)


![](https://i.imgur.com/7AT2PUe.png)


First, click on **Sign up** to register using the **Google Analytics** tool

![](https://i.imgur.com/EDRupnp.png)

  - Select the object you want to track, either Website or Mobile Apps. Then complete your account information in the New Account registration form.
  - After completing the information, click on the "Get Tracking ID" button.
  - Another dialog will appear:
  
  ![](https://i.imgur.com/8RbHbwx.png)

- Select to agree to the terms of service. And click on the **I accept** button.
- If the registration is successful, we will see the following interface, and get GA Tracking ID to install in Magento.

![](https://i.imgur.com/jT9xNwi.png)


### Facebook Pixel

- Visit [here](https://www.facebook.com/products/catalogs/new) to get Facebook Pixel ID.

- First, click on the **Catalog** section in the top left corner of the screen. In the **Measure & Report** column go to the `Events Manager> select Pixels`.

![](https://i.imgur.com/amKl5H9.png)

- This time, at Datasources, go to **Facebook Pixel** > **Track Website Activities**. Click to **Get Started** to create Facebook Pixel 

![](https://i.imgur.com/Pl5PhGF.png)

- You can skip the **Website URL** field. It is not a required field. Click **Create**

![](https://i.imgur.com/cEfQtby.png)

- Then, you can see a **Pixel ID** under your **Pixel Name**. That is the Facebook Pixel ID you need to get. 

![](https://i.imgur.com/PgU7NC1.png)


### Google Adwords

- Access to the link ads.google.com to log in with your Gmail account and enter the website to start using Google Adwords.
- First, click on the **Start now** button in the top right corner of the screen.

![](https://i.imgur.com/wRZ6PEA.png)

- Then select a suitable campain type then click on **Continue**. Or you can create an account without choosing any campain.

![](https://i.imgur.com/LIp0ADW.png)

- Confirm your business information and click **Submit**.

![](https://i.imgur.com/kPVf9EG.png)

- Next, click on **Explore your account** to explore your account and get your **Google Adwords ID**.

![](https://i.imgur.com/2yz3M8F.png)

- The serial number above your gmail is **Google Adwords ID**.

![](https://i.imgur.com/U6uTObF.png)



## How to configure

### 1. Configuration

Login to the **Magento Admin**, choose `Stores > Configuration > Mageplaza Extensions > Google Tag Manager`.

![](https://i.imgur.com/Eq9Xfl9.gif)

#### 1.1. General

![](https://i.imgur.com/SrN78jC.png)

- **Enable**: Select **Yes** to enable the module's feature.
- **Deduct Tax From Transaction**: Select **Yes** to deduct tax from Gran Total 
- **Enable Brand**: Selct **Yes** to turn on the configuration, take the value according to the brand
- **Brand Attribute**: There are four attributes - Manufacturer, Color, Size, Format. Brand will be set accoding to the selected Attribute 

![](https://i.imgur.com/BMewGWZ.png)

- **Enable Variant:** Select **Yes** to show the **Variant** field 

![](https://i.imgur.com/1CDJWbz.png)

- **Deduct Shipping From Transaction:** Select **Yes** to deduct **Shipping** from transaction 
- **Ignore Orders with value 0:** Select **Yes** to exclude orders with the  value of 0 

#### 1.2. Google Tag Manager

![](https://i.imgur.com/UTTdAy8.png)

- **Enable**: Selecting **Yes** to enable the use of the **Google Tag Manager** feature is to update and control all tags for the site.
- **ID Variable Base On**: Select the variable of the product ID to be replaced displayed:
  - **ID**: Display the ID value of the product according to the product ID.
  - **SKU**: Display the ID value of the product according to the product SKU.
- **Google Tag  ID**:
  - Enter Google Tag Manager's ID into the **Google Tag ID** field to update some information of event such as in category page, product page, when adding to cart, remove fromcart, order success, search, checkout default or checkout page of One Step Checkout) extensions which help shorten checkout process to only 6 steps within a page. 

![](https://i.imgur.com/jZWHfnP.png)

  - If left blank or incorrectly entered the Container ID will not display tag information.
  
**Note**: To turn on Google Tag Manager, you need to create **Trigger** then **Tag** and click **Preview** or **Submit** in case GTM is disable. 

![](https://i.imgur.com/i63KNQy.gif)
 
- **Google Analytics 4**
  - Select **Yes** to add items of Google Analytics 4 to Google Tag Manager

![](https://i.imgur.com/bAhtVpZ.png)

#### 1.3. Google Analytics eCommerce

![](https://i.imgur.com/gwPGZVb.png)

![](https://i.imgur.com/pMNqgxO.png)

- **Enable**: Select **Yes** to enable the use of the Google Analytics function for the website to analyze the report.
- **ID Variable Base On**: Select the variable of the product ID to be replaced displayed:
  - **ID**: Display the ID value of the product according to the product ID.
  - **SKU**: Display the ID value of the product according to the product SKU.
- **GA Tracking ID**:
  - Enter Tracking ID of Google Analytics into GA Tracking ID field.
  - If you leave it blank or enter a wrong tracking ID, it will not be able to track the information.
  
- **Second Tracking ID**:
  - Enter another Tracking ID of Google Analytics in the **Second Tracking ID** field so you can add the ability to track website information such as product, category page, checkout page, page cart, one step checkout page (compatible with One step checkout), remove from cart, ...
  
  ![](https://i.imgur.com/c1RG4C6.png)
  
- **Enable Enhanced Link Attribution**: Selecting **Yes** to enable allows customers to track each link, know the accuracy of the analytics report in the page by automatically distinguishing between multiple links to the same URL on one The page from which the number of customers clicked on the page or product was calculated. For example, your link to the same page is the same but the path is completely different in the same page. When you go to `Gear> Bags` folder, but you still click on the view of products like Grid or List, then click on each part in the Bags folder and when you click on the Grid or list are different You should install and turn on **Google Analytics Debugger** and **Page Analytics** add to the browser you are using to support the reporting feature to see the number of clicks.

![](https://i.imgur.com/AtjaOpC.png)


- **Enable Linker**:
  - If you select **Yes**, Google Analytics allows you to view sessions from two related websites (such as separate e-commerce and shopping cart websites) as a session. Show more **Linker Domain(s)** fields.
    - **Linker Domain(s)**: Enter an additional domain link to count customer tracking from two related websites. You can import multiple domain links at the same time and be separated by a ",". You can configure additional domain links for your site when you go to `Store > Configuration > Web`. For example, the current link domain of your site is `http://example.com`. You configure another domain link when changing store view with the same content as http://mageplaza.com. So the tracking number of customers will be counted as 1 session. You can access to `Audience > Overview` of **Google Analytics** to view the exact number of sessions by day. 
  
  
  ![](https://i.imgur.com/H416oS1.png)
  
  
- **Enable Display Ads (Remarketing)**: Select **Yes** to enable Google Analytics advertising features (including Remarketing Lists for Search Ads) that can be enabled in Google Analytics from `Property Settings > Data Collection`.

- **Enable IP Anonymization**: Select **Yes** to allow anonymous IP addresses of visits (http requests) sent to Google Analytics. And will be sent to the region. You can view it at **Google Analytics**, go to `Real-Time > Overview` or `Locations`.

![](https://i.imgur.com/SmO7Lz9.png)

  **Note**: To see the amount of **Link Attribution**, **Linker** or some features of **Google Analytics**, you need to wait some time for Google Analytics to update data. You should install and enable **Google Analytics Debugger** and **Page Analytics** add to the browser you are using to support adding reporting features to see the number of clicks.
  
- **Enable Google Analytics Opt Out**: Select **Yes** so that when customers enter your website, if they do not follow and accept cookies, the data will not be synced to Google Analytics, and if they do, the data will be synced to Google Anaylytics. This can help customers protect their information and reduce some unecessary data. This feature is compatible with [Mageplaza GDPR Professional](https://www.mageplaza.com/magento-2-gdpr-extension/).

![](https://i.imgur.com/44LThbQ.png)

- **Custom Dimensions**: 
  - First, you should go to `Admin > Custom Dimensions > Add New Customer Dimensions` or **Dimensions** available in Google Analytics. 
  
  ![](https://i.imgur.com/CQD9oje.png)
  
  - Then go to **Custom Dimensions** field, click **Add** button and select values of **Name**, **Track Custom Attribute**, **Index** so that when you create **New Customer Report** in Google Analytics, you can collect and analyze selected store attributes that are not automatically tracked by Google Analytics.
  
  ![](https://i.imgur.com/MWfYH7P.png)

- **Custom Metrics**:
  - Enter `Admin > Custom Dimensions > Add New Customer Metrics` or **Metrics** available in Google Analytics.
   
  ![](https://i.imgur.com/qoWctK5.png)
  
  - Then go to **Custom Metrics** field, click **Add** button and select values of **Name**, **Track Custom Attribute**, **Index** so that when you create **New Customer Report** in Google Analytics, you can collect and analyze selected store attributes that are not automatically tracked by Google Analytics.
  
  ![](https://i.imgur.com/Zx19QMr.png)
  
  **Note**: To create **New Custom Report** in Google Analytics, **Dimensions** and **metrics** are 2 custom attributes that always go along with each other and needs creating and customizing. 

####  1.4. Facebook Pixel

![](https://i.imgur.com/qq65Z6L.png)

- **Enable**: Select **Yes** to enable the use of Facebook Pixel features.
- **ID Variable Base On**: Select the variable of the product ID to be replaced displayed:
  - **ID**: Display the ID value of the product according to the product ID.
  - **SKU**: Display the ID value of the product according to the product SKU.
- **Facebook Pixel ID**:
  - Enter **Facebook Pixel ID** in the Facebook Pixel ID field to report and update website information such as in product page, category, checkout page, cart page, one step checkout page (compatible with Mageplaza One Step Checkout), remove from cart,...You should installl **Facebook pixel helper** into your browse to view information. 
  
  ![](https://i.imgur.com/KsLEl83.png)

  - If left blank or incorrectly filled in, the Pixel ID will not report and update the website's information to Facebook.

- **Enable Advanced Matching**: Select **Yes** to add Tracking Add to Wishlist and Advanced Matching Parameters for Facebook Pixel.

![](https://i.imgur.com/Yx1Qe02.png)

#### 1.5. Google Adwords Conversion Tracking 

![](https://i.imgur.com/tELTUM1.png)

- **Guide**: Click to the link to configure the **conversion tracking** function in **Google Adwords** in Magento 2.

### 2. API

Google Tag Manager extension by Mageplaza supports using the REST API to get data with events such as product, category, homepage, catalog search, checkout index, checkout cart, checkout success, one step checkout, multi shipping checkout success, thank you page, add to cart, remove cart, and get head of Google Tag Manager, Google Analytics, Facebook Pixel.

Please see details [here](https://documenter.getpostman.com/view/10589000/UVXetJdW).

Guide on how to create Integration tokens can be viewed [here](https://devdocs.magento.com/guides/v2.4/get-started/authentication/gs-authentication-token.html).

### 3. GraphQL

Run the following command in Magento 2 root folder:

`composer require mageplaza/module-google-tag-manager`

`php bin/magento setup:upgrade`

`php bin/magento setup:static-content:deploy`

Google Tag Manager extension by Mageplaza supports getting data with events such as product, category, homepage, catalog search, checkout index, checkout cart, checkout success, one step checkout, multi shipping checkout success, thank you page, add to cart, remove cart, and get head of Google Tag Manager, Google Analytics, Facebook Pixel via GraphQL.

To start working with Google Tag Manager GraphQL in Magento, you need to:

- Use Magento 2.3.x or 2.4.x. Return your site to the developer mode
- See GraphQL requests we support [here](https://documenter.getpostman.com/view/10589000/UVXetJi2#30b7afdf-3eff-4bde-b02f-70e0affbb2e6).

