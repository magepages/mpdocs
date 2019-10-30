# Social Login Professional

* [How to Install Social Login](https://docs.mageplaza.com/social-login-m2/install.html)
* [How to configure Facebook API](https://docs.mageplaza.com/social-login-m2/how-to-configure-facebook-api.html)
* [How to configure Foursquare API](https://docs.mageplaza.com/social-login-m2/how-to-configure-foursquare-api.html)
* [How to configure GitHub API](https://docs.mageplaza.com/social-login-m2/how-to-configure-github-api.html)
* [How to configure Google API](https://docs.mageplaza.com/social-login-m2/how-to-configure-google-api.html)
* [How to configure Instagram API](https://docs.mageplaza.com/social-login-m2/how-to-configure-instagram-api.html)
* [How to configure LinkedIn API](https://docs.mageplaza.com/social-login-m2/how-to-configure-linkedin-api.html)
* [How to configure Microsoft Live API](https://docs.mageplaza.com/social-login-m2/how-to-configure-microsoft-live-api.html)
* [How to configure Twitter API](https://docs.mageplaza.com/social-login-m2/how-to-configure-twitter-api.html)
* [How to configure Vkontakte API](https://docs.mageplaza.com/social-login-m2/how-to-configure-vkontakte-api.html)
* [How to configure Yahoo API](https://docs.mageplaza.com/social-login-m2/how-to-configure-yahoo-api.html)
* [How to configure Pinterest API](https://docs.mageplaza.com/social-login-m2/how-to-configure-pinterest-api.html)

## Overview

Social Login Professional is an improved version of Social Login Standard. This module supports admin to login via store' social account at backend. In addition, the module is added two popup templates: Quick Popup and Popup Slide. For the existing Popup Login template, the admin can configure to display the social login button with 4 locations: left, right, top, bottom. 

Social Login Pro is fully compatible with [Report](https://www.mageplaza.com/magento-2-reports-extension/), [Google Recaptcha](https://www.mageplaza.com/magento-2-google-recaptcha/), [Two-Factor Authentication](https://www.mageplaza.com/magento-2-two-factor-authentication/) extension of Mageplaza to help authenticate, eliminate spam, avoid fraud and report information when customers log in or register via social accounts.

## How to Configure
### I. Configuration
##### 1.1. General configuration

From the Admin Panel, go to ``Store > Settings > Configuration > Mageplaza Extensions > Social Login``, choose **General** sections

![](https://i.imgur.com/Ud8kIOp.png)

* In the **Enable** field: Select "Yes" to allow customers sign in quickly via social networking sites they are using.
* In the **Send Password To Customer** field: Select "Yes" to activate sending notifications to customers to remind them to change their passwords when signing in via social accounts. They can change their passwords via their emails used to register for that social account.
* In the **Show Social Login Buttons on** field: 
   * Select display page(s) with social login buttons. Show Social Login Buttons on = Customer Login Page will show social login buttons on the login page.
  * Can select more than one option
* In the **Use Popup Login** field: 
  * Choose **Popup Login** to turn on Popup and Show Social Login Buttons in Login Dialog, Create New Account, and Forgot Passwords. Show extra field:
    * **Social Button Position**: Choose posision for showing social login buttons:
      * **Left**: Show social login button at the left side of popup login.
      ![](https://i.imgur.com/4mFJpTC.png)
      * **Right**: Show social login button at the right side of popup login.
      ![](https://i.imgur.com/ttuwnwi.png)
      * **Top**: Show social login button at the top of popup login.
      ![](https://i.imgur.com/9I4uexN.png)
      * **Bottom**: Show social login button at the bottom of popup login.
      ![](https://i.imgur.com/4yo5Owc.png)
      * Include Social Login buttons in Customer Authentication Popup page

  * Choose **None**, popup not show and only show social login buttons at Customer Login page, Create New Account, and Forgot Passwords, Customers Authentication Popup.
  * **Quick Login**: Enable Quick Login Popup and social login button when Sign In, Create New Account, and Forgot Passwords.
  ![](https://i.imgur.com/cuwvjIR.png)
  * **Popup Slide**: Bật hiển thị loại Popup Slide và các social login button khi Sign In, Create New Account, and Forgot Passwords.
  ![](https://i.imgur.com/4ELVWtl.png)

* **Use Popup Login As Authentication Popup**: Select “Yes” to use popup of Social login as Authentication Popup
  
* In the **Popup Links Selector** field: Customize any default Login and Create button to be a popup-open button by filling in class name of elements that cover these buttons.
* In the **Require More Info** field: * Select **Always Require** for always showing popup of information verification when customers register social account.  
  * Select **If social account does not provide E-mail** means that only show email confirmation popup when customers register account via the social networks that do not require real email such as Yahoo, Github, etc. 
  * Choosing either two options above will show an extra field: 
    * **Information Required**: Admin can choose to ask additional information of customers after they create social account. The information can be Name, Email, Password. This is a required field and you can choose mutiple iptions here. 

.. image:: https://i.imgur.com/wIaEYZ8.png

* Popup Effect : Admin can select one among popup display effects below

![](https://i.imgur.com/UdCPC1D.png)

* In the **Style Management** field:  Admin can choose one of the display colors for popup. Style Management = Custom means Admin can select custom the color swatch.
* In the **Custom CSS** field: You can add CSS code to customize based on your personal preference.
* In the **Redirect page after successful login** field: Enter the URL that you want to redirect to the users after they complete the login:
  * **Customer Dashboard**: After login successfully, redirect to Customer Dashboard
  * **Home page**: After login successfully, redirect to Home page 
  * **CMS Pages**: Redirect customers to a specific CMS page after login. Some CMS Pages can be: 404 Not Found, Home Page, Enable Cookies, Privacy Policy, About us, Customer Service, etc.
  * **Custom URL**: Enter the URL that you want to redirect to the users after they complete the login. 
  * This sections only apply when the users login via the social network


### Configure Social Accounts
#### I. Facebook sign in
##### 1.1. How to configure Facebook

Go to ``Store > Settings > Configuration > Mageplaza Extensions > Social Login > Facebook``.

![](https://i.imgur.com/DCfYg9g.png)

* In the **Enable** field: Select "Yes" to show Sign in with Facebook button
* **Sign In As Admin**: Select “Yes” to allow admin to login your website at backend via Facebook  
  * After turn on this function, social login button is shown at **My Account** in backend, click to Facebook button to login Facebook account
  
  ![](https://i.imgur.com/aKVteHs.png)
  
* After connecting with Facebook, admin logout current account at backend and login by Facebook account.

![](https://i.imgur.com/UEBBPTn.png)

* In the **Sort Order** field: The order to show social login buttons. Order will be arranged as following: number, special symbol, uppercase, lowercase.
* Instruction to create Facebook API can be found [here](https://docs.mageplaza.com/social-login-m2/how-to-configure-facebook-api.html).

##### 1.2. Login using Facebook

![](https://i.imgur.com/YYTboV0.png)

Facebook Login dialog will be shown after clicking on Sign in with Facebook button.

#### II. Google Sign in
##### 2.1. How to configure Google
 
Go to ``Store > Settings > Configuration > Mageplaza Extensions > Social Login > Google``.

![](https://i.imgur.com/Grwr3LL.png)

* In the **Enable** field: Select "Yes" to show Sign in with Google button
* **Sign In As Admin**: Select “Yes” to allow admin to login your website at backend via Google  
  * After turn on this function, social login button is shown at **My Account** in backend, click to Google button to login via Google account
  
  ![Imgur](https://i.imgur.com/OPSnKDM.png)
  
* After connecting with Facebook, admin logout current account at backend and login by Facebook account.

![Imgur](https://i.imgur.com/BD4nl3s.png)


* In the **Sort Order** field: The order to show social login buttons. Order will be arranged as following: number, special symbol, uppercase, lowercase.
* Instruction to create Google API can be found [here](https://docs.mageplaza.com/social-login-m2/how-to-configure-google-api.html).

##### 2.2. Login using Google

![](https://i.imgur.com/8HH65wn.png)

Google Login dialog will be shown after clicking on Sign in with Google button
 
#### III. Amazon Sign in
##### 3.1. How to configure Amazon

Go to ``Store > Settings > Configuration > Mageplaza Extensions > Social Login > Amazon``.

![Imgur](https://i.imgur.com/jUs3DrB.png)

* In the **Enable** field: Select "Yes" to show Sign in with Amazon button
* **Sign In As Admin**: Select “Yes” to allow admin to login your website at backend via Amazon  
  * After turn on this function, social login button is shown at **My Account** in backend, click to Amazon button to login via Amazon account
  
  ![Imgur](https://i.imgur.com/OPSnKDM.png)
  
* After connecting with Amazon, admin logout current account at backend and login by Amazon account.

![Imgur](https://i.imgur.com/BD4nl3s.png)
* In the **Sort Order** field: The order to show social login buttons. Order will be arranged as following: number, special symbol, uppercase, lowercase.

##### 3.2. Login using Amazon

![](https://i.imgur.com/OPolbZs.png)

Amazon Login dialog will be shown after clicking on Sign in with Amazon button.

#### IV. Twitter Sign in
###### 4.1. How to configure Twitter

Go to ``Store > Settings > Configuration > Mageplaza Extensions > Social Login > Twitter``.

![Imgur](https://i.imgur.com/mWFtKtq.png)

* In the **Enable** field: Select "Yes" to show Sign in with Twitter button
* **Sign In As Admin**: Select “Yes” to allow admin to login your website at backend via Twitter  
  * After turn on this function, social login button is shown at **My Account** in backend, click to Twitter button to login via Twitter account
  
  ![Imgur](https://i.imgur.com/cpBZ3s1.png)
  
* After connecting with Twitter, admin logout current account at backend and login by Twitter account.

![Imgur](https://i.imgur.com/vkLOxfN.png)

* In the **Sort Order** field: The order to show social login buttons. Order will be arranged as following: number, special symbol, uppercase, lowercase.
* Instruction to create Twitter API can be found [here](https://docs.mageplaza.com/social-login-m2/how-to-configure-twitter-api.html).

##### 4.2. Login using Twitter

![](https://i.imgur.com/7krIzKe.png)

Twitter Login dialog will be shown after clicking on Sign in with Twitter button.

#### V. LinkedIn Sign in
##### 5.1. How to configure LinkedIn

Go to ``Store > Settings > Configuration > Mageplaza Extensions > Social Login > Linkedln``

![Imgur](https://i.imgur.com/rVSgtVD.png)

* In the **Enable** field: Select "Yes" to show Sign in with LinkedIn button
* **Sign In As Admin**: Select “Yes” to allow admin to login your website at backend via LinkedIn  
  * After turn on this function, social login button is shown at **My Account** in backend, click to LinkedIn button to login via LinkedIn account
  
  ![Imgur](https://i.imgur.com/Ri0zXqC.png)
  
* After connecting with LinkedIn, admin logout current account at backend and login by LinkedIn account.

![Imgur](https://i.imgur.com/MEyDbMN.png)
* In the **Sort Order** field: The order to show social login buttons. Order will be arranged as following: number, special symbol, uppercase, lowercase.
* Instruction to create LinkedIn API can be found [here](https://docs.mageplaza.com/social-login-m2/how-to-configure-linkedin-api.html).

##### 5.2. Login using LinkedIn

![](https://i.imgur.com/xbGp02N.png)

LinkedIn Login dialog will be shown after clicking on Sign in with LinkedIn button.

#### VI. Yahoo Sign in
##### 6.1. How to configure Yahoo

Go to ``Store > Settings > Configuration > Mageplaza Extensions > Social Login > Yahoo``.

![Imgur](https://i.imgur.com/zUhCcEC.png)

* In the **Enable** field: Select "Yes" to show Sign in with Yahoo button
* **Sign In As Admin**: Select “Yes” to allow admin to login your website at backend via Yahoo  
  * After turn on this function, social login button is shown at **My Account** in backend, click to Yahoo button to login via Yahoo account
  
  ![Imgur](https://i.imgur.com/3sO6d7o.png)
  
* After connecting with Yahoo, admin logout current account at backend and login by Yahoo account.

![Imgur](https://i.imgur.com/oJo9vkw.png)
* In the **Sort Order** field: The order to show social login buttons. Order will be arranged as following: number, special symbol, uppercase, lowercase.
* Instruction to create Yahoo API can be found [here](https://docs.mageplaza.com/social-login-m2/how-to-configure-yahoo-api.html).

##### 6.2. Login using Yahoo

![](https://i.imgur.com/KRZM5v2.png)

Yahoo Login dialog will be shown after clicking on Sign in with Yahoo button.
 
#### VII. Foursquare Sign in
##### 7.1. How to configure Foursquare

Go to ``Store > Settings > Configuration > Mageplaza Extensions > Social Login > Foursquare``.

![Imgur](https://i.imgur.com/Mq2xO5E.png)

* In the **Enable** field: Select "Yes" to show Sign in with Foursquare button
* **Sign In As Admin**: Select “Yes” to allow admin to login your website at backend via Foursquare  
  * After turn on this function, social login button is shown at **My Account** in backend, click to Foursquare button to login via Foursquare account
  
  ![Imgur](https://i.imgur.com/B5l9qR1.png)
  
* After connecting with Foursquare, admin logout current account at backend and login by Foursquare account.

![Imgur](https://i.imgur.com/JYNVv2t.png)
* In the **Sort Order** field: The order to show social login buttons. Order will be arranged as following: number, special symbol, uppercase, lowercase.
* Instruction to create Foursquare API can be found [here](https://docs.mageplaza.com/social-login-m2/how-to-configure-foursquare-api.html).

##### 7.2. Login using Foursquare

![](https://i.imgur.com/vq67cqO.png)

Foursquare Login dialog will be shown after clicking on Sign in with Foursquare button.
 
#### VIII. Instagram Sign in
##### 8.1. How to configure Instagram

Go to ``Store > Settings > Configuration > Mageplaza Extensions > Social Login > Instagram``.

![Imgur](https://i.imgur.com/WkkHspi.png)

* In the **Enable** field: Select "Yes" to show Sign in with Instagram button
* **Sign In As Admin**: Select “Yes” to allow admin to login your website at backend via Instagram  
  * After turn on this function, social login button is shown at **My Account** in backend, click to Instagram button to login via Instagram account
  
  ![Imgur](https://i.imgur.com/Z3jR0rc.png)
  
* After connecting with Instagram, admin logout current account at backend and login by Instagram account.

![Imgur](https://i.imgur.com/0TJVdua.png)
* In the **Sort Order** field: The order to show social login buttons. Order will be arranged as following: number, special symbol, uppercase, lowercase.
* Instruction to create Instagram API can be found [here](https://docs.mageplaza.com/social-login-m2/how-to-configure-instagram-api.html).

##### 8.2. Login using Instagram

![](https://i.imgur.com/P5HffnF.png)

Instagram Login dialog will be shown after clicking on Sign in with Instagram button.

#### IX. Vkontakte Sign in
##### 9.1. How to configure Vkontakte

Go to ``Store > Settings > Configuration > Mageplaza Extensions > Social Login > Vkontakte``.

![Imgur](https://i.imgur.com/yd49E6Z.png)

* In the **Enable** field: Select "Yes" to show Sign in with Vkontakte button
* **Sign In As Admin**: Select “Yes” to allow admin to login your website at backend via Vkontakte  
  * After turn on this function, social login button is shown at **My Account** in backend, click to Vkontakte button to login via Vkontakte account
  
  ![Imgur](https://i.imgur.com/xu42qeX.png)
  
* After connecting with Vkontakte, admin logout current account at backend and login by Vkontakte account.

![Imgur](https://i.imgur.com/YG5Ir6K.png)
* In the **Sort Order** field: The order to show social login buttons. Order will be arranged as following: number, special symbol, uppercase, lowercase.
* Instruction to create Vkontakte API can be found [here](https://docs.mageplaza.com/social-login-m2/how-to-configure-vkontakte-api.html).

##### 9.2. Login using Vkontakte

![](https://i.imgur.com/SWgvRaJ.png)

Vkontakte Login dialog will be shown after clicking on Sign in with Vkontakte button.

#### X. Github Sign in
##### 10.1. How to configure Github

Go to ``Store > Settings > Configuration > Mageplaza Extensions > Social Login > Github``.

![Imgur](https://i.imgur.com/JqxxSFR.png)

* In the **Enable** field: Select "Yes" to show Sign in with Github button
* **Sign In As Admin**: Select “Yes” to allow admin to login your website at backend via Github  
  * After turn on this function, social login button is shown at **My Account** in backend, click to Github button to login via Github account
  
  ![Imgur](https://i.imgur.com/UDDAFvP.png)
  
* After connecting with Github, admin logout current account at backend and login by Github account.

![Imgur](https://i.imgur.com/nlz6MPL.png)
* In the **Sort Order** field: The order to show social login buttons. Order will be arranged as following: number, special symbol, uppercase, lowercase.
* Instruction to create Github API can be found [here](https://docs.mageplaza.com/social-login-m2/how-to-configure-github-api.html).

##### 10.2. Login using Github

![](https://i.imgur.com/BptHpHv.png)

Github Login dialog will be shown after clicking on Sign in with Github button.

### XI. Disqus Sign in

#### 11.1 How to configure Disqus

Go to ``Store > Settings > Configuration > Mageplaza Extensions > Social Login > Disqus``

![Imgur](https://i.imgur.com/4suAJj1.png)

* In the **Enable** field: Choose Yes to display the Signin button with Disqus
* **Sign In As Admin**: Select “Yes” to allow admin to login your website at backend via Disqus  
  * After turn on this function, social login button is shown at **My Account** in backend, click to Disqus button to login via Disqus account
  
  ![Imgur](https://i.imgur.com/KwAJjl7.png)
  
* After connecting with Disqus, admin logout current account at backend and login by Disqus account.

![Imgur](https://i.imgur.com/nlz6MPL.png)
* In the **Sort Order** field: This field shows the order to display the social login button. The order will be sorted as the following: `number, special characters, uppercase letters, lowercase letters`.

#### 11.2 Login using Disqus

![](https://i.imgur.com/YKfuCOG.png)

* The Disqus login dialog will be displayed after clicking the Login button with Disqus.

### XII. Mailru Sign in

#### 12.1 How to configure Mailru

Go to `Store > Settings > Configuration > Mageplaza Extensions > Social Login > Mailru`

![Imgur](https://i.imgur.com/bCX1Ugp.png)

* In the **Enable** field: Choose Yes to enable the login button with Mailru
* **Sign In As Admin**: Select “Yes” to allow admin to login your website at backend via Mailru  
  * After turn on this function, social login button is shown at **My Account** in backend, click to Mailru button to login via Mailru account
  
  ![Imgur](https://i.imgur.com/yxnB2Jf.png)
  
* After connecting with Mailru, admin logout current account at backend and login by Mailru account.

![Imgur](https://i.imgur.com/43jjbh7.png)
* In the **Sort Order** field: This field shows the order to display the social login button. The order will be sorted as the following: `number, special characters, uppercase letters, lowercase letters`.

#### 12.2 Login using Mailru

![](https://i.imgur.com/ivjRtZx.png)

* The Mailru login dialog will be displayed after clicking the Login button with Mailru.

### XIII. Odnoklassniki Sign in

#### 13.1 How to configure Odnoklassniki

Go to `Store > Settings > Configuration > Mageplaza Extensions > Social Login > Odnoklassniki`

![Imgur](https://i.imgur.com/NbBAQnJ.png)

* In the **Enable** field: Choose Yes to enable the login button with Odnoklassniki
* **Sign In As Admin**: Select “Yes” to allow admin to login your website at backend via Odnoklassniki  
  * After turn on this function, social login button is shown at **My Account** in backend, click to Odnoklassniki button to login via Odnoklassniki account
  
  ![Imgur](https://i.imgur.com/NpMAWHv.png)
  
* After connecting with Odnoklassniki, admin logout current account at backend and login by Odnoklassniki account.

![Imgur](https://i.imgur.com/foylcHS.png)
* In the **Sort Order** field: This field shows the order to display the social login button. The order will be sorted as the following: `number, special characters, uppercase letters, lowercase letters`.


#### 13.2 Login using Odnoklassniki

![](https://i.imgur.com/2VvBjWZ.png)

* The Odnoklassniki login dialog will be displayed after clicking the Login button with Odnoklassniki.

### XIV. Steam Sign in

#### 14.1 How to configure Steam

Go to `Store > Settings > Configuration > Mageplaza Extensions > Social Login > Steam`

![Imgur](https://i.imgur.com/1AIrxL5.png)


* In the **Enable** field: Choose Yes to enable the login button with Steam
* **Sign In As Admin**: Select “Yes” to allow admin to login your website at backend via Steam  
  * After turn on this function, social login button is shown at **My Account** in backend, click to Steam button to login via Steam account
  
  ![Imgur](https://i.imgur.com/TPSWNSz.png)
  
* After connecting with Steam, admin logout current account at backend and login by Steam account.

![Imgur](https://i.imgur.com/PB499W1.png)
* In the **Sort Order** field: This field shows the order to display the social login button. The order will be sorted as the following: `number, special characters, uppercase letters, lowercase letters`.

#### 14.2 Login using Steam

![](https://i.imgur.com/9Biu7h3.png)

* The Steam login dialog will be displayed after clicking the Login button with Steam.


### XV. Live Sign in
#### 15.1. How to configure Live

Go to `Store > Settings > Configuration > Mageplaza Extensions > Social Login > Live`

![Imgur](https://i.imgur.com/QSFUywx.png)

* In the **Enable** field: Choose Yes to enable the login button with Live
* **Sign In As Admin**: Select “Yes” to allow admin to login your website at backend via Live  
  * After turn on this function, social login button is shown at **My Account** in backend, click to Live button to login via Live account
  
  ![Imgur](https://i.imgur.com/t4i6LXP.png)
  
* After connecting with Live, admin logout current account at backend and login by Live account.

![Imgur](https://i.imgur.com/59H1A6j.png)
* In the **Sort Order** field: This field shows the order to display the social login button. The order will be sorted as the following: `number, special characters, uppercase letters, lowercase letters`.

#### 15.2. Login using Live

![Imgur](https://i.imgur.com/laFfkqp.png)

The Live login dialog will be displayed after clicking the Login button with Live

### XVI. Pinterest Sign in
#### 16.1. How to configure Pinterest
Go to `Store > Settings > Configuration > Mageplaza Extensions > Social Login > Pinterest`

![Imgur](https://i.imgur.com/jxLaBUX.png)
* In the **Enable** field: Choose Yes to enable the login button with Pinterest
* **Sign In As Admin**: Select “Yes” to allow admin to login your website at backend via Pinterest  
  * After turn on this function, social login button is shown at **My Account** in backend, click to Pinterest button to login via Pinterest account
  
  ![Imgur](https://i.imgur.com/Hq4Sd6x.png)
  
* After connecting with Pinterest, admin logout current account at backend and login by Pinterest account.

![Imgur](https://i.imgur.com/FEZo6ib.png)
* In the **Sort Order** field: This field shows the order to display the social login button. The order will be sorted as the following: `number, special characters, uppercase letters, lowercase letters`.


#### 16.2. Login using Pinterest

![Imgur](https://i.imgur.com/Zl7zwbN.png)

The Pinterest login dialog will be displayed after clicking the Login button with Pinterest


