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

## Overview
Social Login Professional is an improved version of Social Login Standard. With the security feature CAPTCHA, this extension protects store owners from spam accounts by ensuring that the register process or form completion is done by a human rather than a robot.

## How to Configure
### I. Configuration
##### 1.1. General configuration

From the Admin Panel, go to ``Store > Settings > Configuration > Mageplaza Extensions > Social Login``, choose **General** sections

![i1](https://i.imgur.com/HW3wSN7.png)

* In the **Enable** field: Select "Yes" to allow customers sign in quickly via social networking sites they are using.
* In the **Send Password To Customer** field: Select "Yes" to activate sending notifications to customers to remind them to change their passwords when signing in via social accounts. They can change their passwords via their emails used to register for that social account.
* In the **Show Social Login Buttons on** field: 
   * Select display page(s) with social login buttons. Show Social Login Buttons on = Customer Login Page will show social login buttons on the login page.
  * Can select more than one option
* In the **Use Popup Login** field: Select "Yes" to
  * Turn on Popup and Show Social Login Buttons in Login Dialog, Create New Account, and Forgot Passwords.
  * Include Social Login buttons in Customer Authentication Popup page
* In the **Popup Links Selector** field: Customize any default Login and Create button to be a popup-open button by filling in class name of elements that cover these buttons.
* In the **Require Real Email** field: Choose Yes to enable the real email confirmation feature with the social media that don't provide a real email as Yahoo, Github, etc.
* Popup Effect : Admin can select one among popup display effects below

![i2](https://i.imgur.com/UdCPC1D.png)

* In the **Style Management** field:  Admin can choose one of the display colors for popup. Style Management = Custom means Admin can select custom the color swatch.
* In the **Custom CSS** field: You can add CSS code to customize based on your personal preference.
* In the **Redirect page after successful login** field:
    * Enter the URL that you want to redirect to the users after they complete the login
    * This sections only apply when the users login via the social network

#### 1.2. CAPTCHA

![i3](https://i.imgur.com/xpaKLLd.png)

* In the **Enable CAPTCHA** field: There will be 3 selections
  * **Enable CAPTCHA = No**: No display CAPTCHA on popup
  * **Enable CAPTCHA = Use store default Captcha**
    * Show CAPTCHA on popup
    * Use default CAPTCHA of Magento
    * The shown CAPTCHA will depend on configuration of CAPTCHA in Magento
  * **Enable CAPTCHA = Use Google ReCaptcha**
    * Show CAPTCHA on popup
    * Use default CAPTCHA of Google
  
  ![captcha](https://i.imgur.com/Xb0req8.png)
    
* In the **Forms** field
  * **Login**: Show CAPTCHA at Sign In Popup
  * **Create user**: Show CAPTCHA at Create New Account Popup
  * **Forgot password** : Show CAPTCHA at Forgot Passwords Popup
  * Admin can select more than one option
* In the **reCAPTCHA Type** field
  * Select type of reCAPTCHA shown on popup
  * Instruction to create reCAPTCHA can be found [here](https://www.mageplaza.com/blog/how-to-add-google-recaptcha-into-magento-2.html)

* CAPTCHA Magento Configuration's Instruction to configure can be found [here](https://www.mageplaza.com/kb/how-to-enable-customer-login-register-captcha-magento-2.html)

### Configure Social Accounts
#### I. Facebook sign in
##### 1.1. How to configure Facebook

Go to ``Store > Settings > Configuration > Mageplaza Extensions > Social Login > Facebook``.

![i](https://i.imgur.com/DCfYg9g.png)

* In the **Enable** field: Select "Yes" to show Sign in with Facebook button
* In the **Sort Order** field: The order to show social login buttons. Order will be arranged as following: number, special symbol, uppercase, lowercase.
* Instruction to create Facebook API can be found [here](https://docs.mageplaza.com/social-login-m2/how-to-configure-facebook-api.html).

##### 1.2. Login using Facebook

![i](https://i.imgur.com/YYTboV0.png)

Facebook Login dialog will be shown after clicking on Sign in with Facebook button.

#### II. Google Sign in
##### 2.1. How to configure Google
 
Go to ``Store > Settings > Configuration > Mageplaza Extensions > Social Login > Google``.

![i](https://i.imgur.com/zmgb6Xc.png)

* In the **Enable** field: Select "Yes" to show Sign in with Google button
* In the **Sort Order** field: The order to show social login buttons. Order will be arranged as following: number, special symbol, uppercase, lowercase.
* Instruction to create Google API can be found [here](https://docs.mageplaza.com/social-login-m2/how-to-configure-google-api.html).

##### 2.2. Login using Google

![i](https://i.imgur.com/8HH65wn.png)

Google Login dialog will be shown after clicking on Sign in with Google button
 
#### III. Amazon Sign in
##### 3.1. How to configure Amazon

Go to ``Store > Settings > Configuration > Mageplaza Extensions > Social Login > Amazon``.

![i](https://i.imgur.com/A8QygO0.png)

* In the **Enable** field: Select "Yes" to show Sign in with Amazon button
* In the **Sort Order** field: The order to show social login buttons. Order will be arranged as following: number, special symbol, uppercase, lowercase.

##### 3.2. Login using Amazon

![i](https://i.imgur.com/OPolbZs.png)

Amazon Login dialog will be shown after clicking on Sign in with Amazon button.

#### IV. Twitter Sign in
###### 4.1. How to configure Twitter

Go to ``Store > Settings > Configuration > Mageplaza Extensions > Social Login > Twitter``.

![i](https://i.imgur.com/7nJyMQO.png)

* In the **Enable** field: Select "Yes" to show Sign in with Twitter button
* In the **Sort Order** field: The order to show social login buttons. Order will be arranged as following: number, special symbol, uppercase, lowercase.
* Instruction to create Twitter API can be found [here](https://docs.mageplaza.com/social-login-m2/how-to-configure-twitter-api.html).

##### 4.2. Login using Twitter

![i](https://i.imgur.com/7krIzKe.png)

Twitter Login dialog will be shown after clicking on Sign in with Twitter button.

#### V. LinkedIn Sign in
##### 5.1. How to configure LinkedIn

Go to ``Store > Settings > Configuration > Mageplaza Extensions > Social Login > Linkedln``

![i](https://i.imgur.com/FLUlpJz.png)

* In the **Enable** field: Select "Yes" to show Sign in with LinkedIn button
* In the **Sort Order** field: The order to show social login buttons. Order will be arranged as following: number, special symbol, uppercase, lowercase.
* Instruction to create LinkedIn API can be found [here](https://docs.mageplaza.com/social-login-m2/how-to-configure-linkedin-api.html).

##### 5.2. Login using LinkedIn

![i](https://i.imgur.com/xbGp02N.png)

LinkedIn Login dialog will be shown after clicking on Sign in with LinkedIn button.

#### VI. Yahoo Sign in
##### 6.1. How to configure Yahoo

Go to ``Store > Settings > Configuration > Mageplaza Extensions > Social Login > Yahoo``.

![i](https://i.imgur.com/Tw1ak6i.png)

* In the **Enable** field: Select "Yes" to show Sign in with Yahoo button
* In the **Sort Order** field: The order to show social login buttons. Order will be arranged as following: number, special symbol, uppercase, lowercase.
* Instruction to create Yahoo API can be found [here](https://docs.mageplaza.com/social-login-m2/how-to-configure-yahoo-api.html).

##### 6.2. Login using Yahoo

![i](https://i.imgur.com/KRZM5v2.png)

Yahoo Login dialog will be shown after clicking on Sign in with Yahoo button.
 
#### VII. Foursquare Sign in
##### 7.1. How to configure Foursquare

Go to ``Store > Settings > Configuration > Mageplaza Extensions > Social Login > Foursquare``.

![i](https://i.imgur.com/QasGjHu.png)

* In the **Enable** field: Select "Yes" to show Sign in with Foursquare button
* In the **Sort Order** field: The order to show social login buttons. Order will be arranged as following: number, special symbol, uppercase, lowercase.
* Instruction to create Foursquare API can be found [here](https://docs.mageplaza.com/social-login-m2/how-to-configure-foursquare-api.html).

##### 7.2. Login using Foursquare

![i](https://i.imgur.com/vq67cqO.png)

Foursquare Login dialog will be shown after clicking on Sign in with Foursquare button.
 
#### VIII. Instagram Sign in
##### 8.1. How to configure Instagram

Go to ``Store > Settings > Configuration > Mageplaza Extensions > Social Login > Instagram``.

![i](https://i.imgur.com/CtDYMVw.png)

* In the **Enable** field: Select "Yes" to show Sign in with Instagram button
* In the **Sort Order** field: The order to show social login buttons. Order will be arranged as following: number, special symbol, uppercase, lowercase.
* Instruction to create Instagram API can be found [here](https://docs.mageplaza.com/social-login-m2/how-to-configure-instagram-api.html).

##### 8.2. Login using Instagram

![i](https://i.imgur.com/P5HffnF.png)

Instagram Login dialog will be shown after clicking on Sign in with Instagram button.

#### IX. Vkontakte Sign in
##### 9.1. How to configure Vkontakte

Go to ``Store > Settings > Configuration > Mageplaza Extensions > Social Login > Vkontakte``.

![i](https://i.imgur.com/xtzV4YM.png)

* In the **Enable** field: Select "Yes" to show Sign in with Vkontakte button
* In the **Sort Order** field: The order to show social login buttons. Order will be arranged as following: number, special symbol, uppercase, lowercase.
* Instruction to create Vkontakte API can be found [here](https://docs.mageplaza.com/social-login-m2/how-to-configure-vkontakte-api.html).

##### 9.2. Login using Vkontakte

![i](https://i.imgur.com/SWgvRaJ.png)

Vkontakte Login dialog will be shown after clicking on Sign in with Vkontakte button.

#### X. Github Sign in
##### 10.1. How to configure Github

Go to ``Store > Settings > Configuration > Mageplaza Extensions > Social Login > Github``.

![i](https://i.imgur.com/PmA4aTL.png)

* In the **Enable** field: Select "Yes" to show Sign in with Github button
* In the **Sort Order** field: The order to show social login buttons. Order will be arranged as following: number, special symbol, uppercase, lowercase.
* Instruction to create Github API can be found [here](https://docs.mageplaza.com/social-login-m2/how-to-configure-github-api.html).

##### 10.2. Login using Github

![i](https://i.imgur.com/BptHpHv.png)

Github Login dialog will be shown after clicking on Sign in with Github button.

## Disqus Sign in

### How to configure Disqus

Go to ``Store > Settings > Configuration > Mageplaza Extensions > Social Login > Disqus``

![how to configure disqus](https://i.imgur.com/pXou8VZ.png)

* In the **Enable** field: Choose Yes to display the Signin button with Disqus
* In the **Sort Order** field: This field shows the order to display the social login button. The order will be sorted as the following: `number, special characters, uppercase letters, lowercase letters`.

### Login using Disqus

![login using disqus](https://i.imgur.com/YKfuCOG.png)

* The Disqus login dialog will be displayed after clicking the Login button with Disqus.

## Mailru Sign in

### How to configure Mailru

Go to `Store > Settings > Configuration > Mageplaza Extensions > Social Login > Mailru`

![how to configure mailru](https://i.imgur.com/7ZpQlgQ.png)

* In the **Enable** field: Choose Yes to enable the login button with Mailru
* In the **Sort Order** field: This field shows the order to display the social login button. The order will be sorted as the following: `number, special characters, uppercase letters, lowercase letters`.

### Login using Mailru

![login using mailru](https://i.imgur.com/ivjRtZx.png)

* The Mailru login dialog will be displayed after clicking the Login button with Mailru.

## Odnoklassniki Sign in

### How to configure Odnoklassniki

Go to `Store > Settings > Configuration > Mageplaza Extensions > Social Login > Odnoklassniki`

![how to configure Odnoklassniki](https://i.imgur.com/HsBQYYx.png)

* In the **Enable** field: Choose Yes to enable the login button with Odnoklassniki
* In the **Sort Order** field: This field shows the order to display the social login button. The order will be sorted as the following: `number, special characters, uppercase letters, lowercase letters`.


### Login using Odnoklassniki

![login using Odnoklassniki](https://i.imgur.com/2VvBjWZ.png)

* The Odnoklassniki login dialog will be displayed after clicking the Login button with Odnoklassniki.

## Steam Sign in

### How to configure Steam

Go to `Store > Settings > Configuration > Mageplaza Extensions > Social Login > Steam`

![steam](https://i.imgur.com/CX94jEz.png)


* In the **Enable** field: Choose Yes to enable the login button with Steam
* In the **Sort Order** field: This field shows the order to display the social login button. The order will be sorted as the following: `number, special characters, uppercase letters, lowercase letters`.

### Login using Steam

![login using steam](https://i.imgur.com/9Biu7h3.png)

* The Steam login dialog will be displayed after clicking the Login button with Steam.





