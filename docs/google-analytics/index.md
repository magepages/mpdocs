# Google Analytics

## Overview

How to know the increase in traffic of a website every week? What is the conversion rate of turning visitors to customers this month? [Mageplaza Google Analytics](https://www.mageplaza.com/magento-2-google-analytics/) extension will help online store track and report these data. The module is integrated with Google Analytics, Google Tag Manager, Facebook and Google Adwords to provide statistics about Shopping Behavior, Checkout Behavior, Product Performance that allow you to track website traffic and conversion rates with a few clicks.

## How to download and install

- [Download Mageplaza Google Analytics](https://www.mageplaza.com/magento-2-google-analytics/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


## How to use


### Google Tag Manager:

- To register a **Google Tag Manager account**, please access the following link [here](https://marketingplatform.google.com/about/tag-manager/)

![Imgur](https://i.imgur.com/sthn5Lk.png)

- Then, fill in the required information to register your account:

![Imgur](https://i.imgur.com/ijoIhMr.png)

- Copy the code below and paste it into each page of your site.

- Get **Container ID** to install Magento

![Imgur](https://i.imgur.com/UZ8Ww9Y.png)

### Google Analytics:

Visit the following link to register a [Google Analytics account](https://analytics.google.com/analytics/web/provision/?authuser=0#/provision)


![Imgur](https://i.imgur.com/7AT2PUe.png)


First, click on **Sign up** to register using the **Google Analytics** tool

![Imgur](https://i.imgur.com/EDRupnp.png)

  - Select the object you want to track, either Website or Mobile Apps. Then complete your account information in the New Account registration form.
  - After completing the information, click on the "Get Tracking ID" button.
  - Another dialog will appear:
  
  ![Imgur](https://i.imgur.com/8RbHbwx.png)

- Select to agree to the terms of service. And click on the **I accept** button.
- If the registration is successful, we will see the following interface, and get GA Tracking ID to install in Magento.

![Imgur](https://i.imgur.com/jT9xNwi.png)


### Facebook Pixel

- Visit [here](https://www.facebook.com/products/catalogs/new) to get Facebook Pixel ID.

- First, click on the **Catalog** section in the top left corner of the screen. In the **Measure & Report** column go to the `Events Manager> select Pixels`.

![Imgur](https://i.imgur.com/amKl5H9.png)

- This time, in the top left corner of the screen will appear a series of numbers, next to your Facebook account name. That number is the **Facebook Pixel ID**.

![Imgur](https://i.imgur.com/lusPIgw.png)

### Google Adwords

- Access to the link ads.google.com to log in with your Gmail account and enter the website to start using Google Adwords.
- First, click on the **Start now** button in the top right corner of the screen.

![Imgur](https://i.imgur.com/wRZ6PEA.png)

- Then select a suitable campain type then click on **Continue**. Or you can create an account without choosing any campain.

![Imgur](https://i.imgur.com/LIp0ADW.png)

- Confirm your business information and click **Submit**.

![Imgur](https://i.imgur.com/kPVf9EG.png)

- Next, click on **Explore your account** to explore your account and get your **Google Adwords ID**.

![Imgur](https://i.imgur.com/2yz3M8F.png)

- The serial number above your gmail is **Google Adwords ID**.

![Imgur](https://i.imgur.com/U6uTObF.png)



## How to configure

### 1. Configuration

Login to the **Magento Admin**, choose `Stores > Configuration > (Mageplaza) Google Analytics`.

#### 1.1. General

- **Enable**: Select **Yes** to enable the module's feature.

#### 1.2. Google Tag Manager

- **Enable**: Selecting **Yes** to enable the use of the **Google Tag Manager** feature is to update and control all tags for the site.
- **Container ID**:
  - Enter Google Tag Manager's Container ID into the Container ID field
  - If left blank or incorrectly entered the Container ID will not display tag information.

#### 1.3. Google Analytics eCommerce


- **Enable**: Select **Yes** to enable the use of the Google Analytics function for the website to analyze the report.

- **GA Tracking ID**:
  - Enter Tracking ID of Google Analytics into GA Tracking ID field.
  - If you leave it blank or enter a wrong tracking ID, it will not be able to track the information.
  
- **Second Tracking ID**:
  - Enter another Tracking ID of Google Analytics in the **Second Tracking ID** field so you can add the ability to track website information such as product, category page, checkout page, page cart, one step checkout page (compatible with [One step checkout](https://www.mageplaza.com/magento-2-one-step-checkout-extension/)), remove from cart, ...
  - If you leave it blank or enter a wrong tracking ID, it will not be able to track the information.
  
- **Enable Enhanced Link Attribution**: Selecting **Yes** to enable allows customers to track each link, know the accuracy of the analytics report in the page by automatically distinguishing between multiple links to the same URL on one The page from which the number of customers clicked on the page or product was calculated.

- **Enable Ecommerce Data**: When you enable the use of Google Analytics feature this field will default to **Yes** to display data of some pages such as product, category, checkout page, page cart, one step checkout page ( compatible with Osc), remove from cart,...

- **For example**: Catalog page includes information such as: id, name, price, sku,...

- **Enable Linker**:
  - If you select **Yes**, Google Analytics allows you to view sessions from two related websites (such as separate e-commerce and shopping cart websites) as a session. Will cross link and count the number of customers tracking when using the affiliate link. Show more **Linker Domain(s)** fields.
    - **Linker Domain(s)**: Enter an additional domain link to add customer tracking from two related websites. You can import multiple domain links at the same time and be separated by a ",". You can configure additional domain links for your site when you go to `Store > Configuration > Web > Base URLs`. For example, the current link domain of your site is http://example.com. You configure another domain link when changing store view with the same content as http://mageplaza.com. So the tracking number of customers will be counted as 2.
  
- **Enable Display Features**: Select **No** to enable Google Analytics advertising features (including Remarketing Lists for Search Ads) that can be enabled in Google Analytics from `Property Settings > Data Collection`.

- **Enable IP Anonymization**: Select **Yes** to allow anonymous IP addresses of visits (http requests) sent to Google Analytics. And will be sent to the region.

- **Enable Trace Debugging**:
  - If **Yes** is selected, more lengthy information will not be exported to the console.
  - Selecting **No** will output more lengthy information to the console.

####  1.4. Facebook Pixel

- **Enable**: Select **Yes** to enable the use of Facebook Pixel features.
- **Facebook Pixel ID**:
  - Enter **Facebook Pixel ID** in the Facebook Pixel ID field to report and update website information.
  - If left blank or incorrectly filled in, the Pixel ID will not report and update the website's information to Facebook.

#### 1.5. Google Adwords Conversion Tracking (GTag)

- **Enable**: Select **Yes** to enable the use of Google Tag Manager feature
- **Google Adwords ID**:
  - Enter **Google Adwords ID** into the Google Adwords ID field to connect to magento.
  - If left blank or incorrectly entered the ID will not be connected to magento.
