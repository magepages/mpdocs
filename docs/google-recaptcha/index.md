# Google Recaptcha

## Overview

According to the search from [Economictimes](https://tech.economictimes.indiatimes.com/news/internet/google-is-bringing-its-recaptcha-service-to-android-devices/59098427), today's Artificial Intelligence (AI) technology can solve almost variant of distorted text at 99.8% accuracy. Distorted text, therefore, is no longer a dependable tool to test. To prevent human effort from accessing your online store, Magento 2 Google Recaptcha extension has been released by Mageplaza experts.
Google Recaptcha extension is the best solution to protect your e-commerce store from spams and frauds. Also, it is also a useful tool that helps online stores avoid the requirements of the bots. Thanks to this module, interestingly, valid users can be accepted easily.

## Download & Install
- [Mageplaza Google Recaptcha]()
- [How to install](https://www.mageplaza.com/install-magento-2-extension/)

## How to Configure

![configuration](https://i.imgur.com/EbqoGrS.png)

### Configuration
#### General Configuration

![general configuration](https://i.imgur.com/a5kd3XU.png)

* **Enable**: Choose Yes to enable this module
* **Language Code**: Choose the language displaying the Captcha in the frontend and backend
* **Invisible**

`Note`: Apply for the frontend

    * **Google API Key**: Enter the Key Invisible Recaptcha
    * **Google API Secret Key**: Enter the Secret Key
    * **How to create Goole Recaptcha**: Can be found [here](https://www.mageplaza.com/blog/how-to-add-google-recaptcha-into-magento-2.html)

* **Visible**

`Note`: Apply for the backend

    * **Google API Key**: Enterthe Key Visible Recaptcha
    * **Google API Secret Key**: Enter the Secret Key
    * **How to create Google Recaptcha**: Can be found [here](https://www.mageplaza.com/blog/how-to-add-google-recaptcha-into-magento-2.html)
    
#### Backend Configuration

![backend configuration](https://i.imgur.com/U9jFJNu.png)

* **Enable**: Choose Yes to enable Recaptcha when accessing the admin panel
* **Forms**: Choose a place displaying the Recaptcha. Store owners can allow Recaptcha to display in 2 forms:
    * **Forms = Admin Login**: Recaptcha will display in the Admin Login Form when store owners log into the admin page
    * **Forms = Admin Forgot Password**: Recaptcha will display in the Admin Forgot Password Form when store owners access on the Admin Forgot Password page
* **Size**: Choose the size to show the Recaptcha

![size recaptcha](https://i.imgur.com/nOO4UV2.png)

   * **Size = Compact**: Recaptcha will display as the following image:
   
![compact size](https://i.imgur.com/lzx6dDc.png)

   * **Size = Normal**: Recaptcha will display as the following:
   
   ![normal size](https://i.imgur.com/XNH5sPO.png)
  
* **Theme**
   
![theme](https://i.imgur.com/I0bKSvx.png)

   * **Theme = Light**: Recaptcha will display the light color
   * **Theme = Dark**: Recatpcha will display the dark color
   
#### Frontend Configuration

![frontend configuration](https://i.imgur.com/qZ9u4RV.png)

* **Enable**: Select Yes to display Recaptcha in the frontend
* **Forms**: Choose a place displaying Recaptcha in the frontend. Store owners can allow Recaptcha to display in all forms.
    * **Forms = Login**: Recaptcha will show in the Login Form when visitors login to the website
    * **Forms = Create User**: Recaptcha will show in the Create User Forms when visitors create an account
    * **Forms = Forgot Password**: Recaptcha will show in the Forgot Password Form when customers access the website to get their password
    * **Forms = Contact Us**: Recaptcha will display in the Contact Us Form
    * **Forms = Change Password**: Recaptcha will show in the Change Password Form
    * **Forms = Product View**: Recaptcha will display when visitors access the detail product view page

* **Badge Position**

![badge position](https://i.imgur.com/7hpEcL1.png)

   * **Badge Position = Inline**: Recaptcha will display in the selected form outsite the frontend
   * **Badge Position = Botton Right**: Recaptcha will display at the bottom right of the page
   * **Badge Position = Botton Left**: Recaptcha will display at the bottom left of the page
   
* **Theme**

![theme](https://i.imgur.com/8oMvOLG.png)

   * **Theme = Light**: Recaptcha will display the light color
   * **Theme = Dark**: Recatpcha will display the dark color

* **Custom Form Position**: Use this feature to add Recaptcha into any form on your store

![custom form  position](https://i.imgur.com/c6OocPh.png)

* **Form Post Paths**
    * Enter the path (url) where will process your form information 
      
     For example: newsletter/subscriber/new/, display Recaptcha in the email address field on the website.

Below are some detailed steps:

- Step 1: Login to your website
- Step 2: Choose Form that you want to display Recaptcha and open the Test window
- Step 3: After that, choose **Element** tab, then choose the form that contains the field you want to add Recaptcha

![example](https://i.imgur.com/SLQ7BZp.png)

- Step 4: In the Subscriber Form in the **Action** field, copy the URL path. (In this example, the URL is **"newsletter/subscriber/new/"**)
- Step 5: Paste the URL into the **Form Post Paths** field

    * The paths are separated by down stream.
* **CSS Selectors**
    * You need to take CSS Selector of the form. At our example, we will take ID of the form.
    
    For example: #newsletter-validate-detail, display Recaptcha in the **Subscriber**
    
   ![example](https://i.imgur.com/91U0SoK.png)
    
    * The IDs are separated by down stream.
    
`Note`:

* When you cannot access to the admin panel while Recaptcha enables, you can use the following command to disable the module via composer as well as can access the admin page as usual.

`php bin/magento module:disable Mageplaza_Recaptcha`

Or you also disable the configuration by the command below:

`php bin/magento mageplaza:core:disable Mageplaza_Recaptcha`

#### The display of Recaptcha on the frontend

![display recaptcha](https://i.imgur.com/g0nyT6s.png)

![display recaptcha on the frontend](https://i.imgur.com/9TnOxom.png)


#### The display of Recaptcha in the backend


![Recaptcha in the backend](https://i.imgur.com/rQRCtCF.png)





















