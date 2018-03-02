# Social Login Professional

## Overview
Social Login Professional is an improved version of Social Login Standard. With the security feature CAPTCHA, this extension protects store owners from spam accounts by ensuring that the register process or form completion is done by a human rather than a robot.

## How to Configure
### I. Configuration
##### 1.1. General configuration

From the Admin Panel, go to ``Mageplaza > Social Login > Configuration``, choose **General** sections

![i1](https://i.imgur.com/y1suLKP.png)

* In the **Enable** field: Select "Yes" to allow customers sign in quickly via social networking sites they are using.
* In the **Send Password To Customer** field: Select "Yes" to activate sending notifications to customers to remind them to change their passwords when signing in via social accounts. They can change their passwords via their emails used to register for that social account.
* In the **Show Social Login Buttons on** field: 
   * Select display page(s) with social login buttons. Show Social Login Buttons on = Customer Login Page will show social login buttons on the login page.
  * Can select more than one option
* In the **Use Popup Login** field: Select "Yes" to
  * Turn on Popup and Show Social Login Buttons in Login Dialog, Create New Account, and Forgot Passwords.
  * Include Social Login buttons in Customer Authentication Popup page
* In the **Popup Links Selector** field: Customize any default Login and Create button to be a popup-open button by filling in class name of elements that cover these buttons.
* Popup Effect : Admin can select one among popup display effects below

![i2](https://i.imgur.com/UdCPC1D.png)

* In the **Style Management** field:  Admin can choose one of the display colors for popup. Style Management = Custom means Admin can select custom the color swatch.
* In the **Custom CSS** field: You can add CSS code to customize based on your personal preference.

#### 1.2. CAPTCHA

![i3](https://i.imgur.com/KtUgJhU.png)

* In the **Enable CAPTCHA** field: There will be 3 selections
  * **Enable CAPTCHA = No**: No display CAPTCHA on popup
  * **Enable CAPTCHA = Use store default Captcha**
    * Show CAPTCHA on popup
    * Use default CAPTCHA of Magento
    * The shown CAPTCHA will depend on configuration of CAPTCHA in Magento
  * **Enable CAPTCHA = Use Google ReCaptcha**
    * Show CAPTCHA on popup
    * Use default CAPTCHA of Google
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

Go to ``Admin > Social Login > Configuration > Facebook``.

![i](https://i.imgur.com/zeZM5K2.png)

* In the **Enable** field: Select "Yes" to show Sign in with Facebook button
* In the **Sort Order** field: The order to show social login buttons. Order will be arranged as following: number, special symbol, uppercase, lowercase.
* Instruction to create Facebook API can be found [here](https://docs.mageplaza.com/social-login-m2/how-to-configure-facebook-api.html).

##### 1.2. Login using Facebook

![i](https://i.imgur.com/YYTboV0.png)

Facebook Login dialog will be shown after clicking on Sign in with Facebook button.

#### II. Google Sign in
##### 2.1. How to configure Google
 
Go to ``Admin > Social Login > Configuration > Google``.

![i](https://i.imgur.com/xwmLmX6.png)

* In the **Enable** field: Select "Yes" to show Sign in with Google button
* In the **Sort Order** field: The order to show social login buttons. Order will be arranged as following: number, special symbol, uppercase, lowercase.
* Instruction to create Google API can be found [here](https://docs.mageplaza.com/social-login-m2/how-to-configure-google-api.html).

##### 2.2. Login using Google

![i](https://i.imgur.com/8HH65wn.png)

Google Login dialog will be shown after clicking on Sign in with Google button
 
#### III. Amazon Sign in
##### 3.1. How to configure Amazon

Go to ``Admin > Social Login > Configuration > Amazon``.

![i](https://i.imgur.com/oVQjS1D.png)

* In the **Enable** field: Select "Yes" to show Sign in with Amazon button
* In the **Sort Order** field: The order to show social login buttons. Order will be arranged as following: number, special symbol, uppercase, lowercase.

##### 3.2. Login using Amazon

![i](https://i.imgur.com/OPolbZs.png)

Amazon Login dialog will be shown after clicking on Sign in with Amazon button.

#### IV. Twitter Sign in
###### 4.1. How to configure Twitter

Go to ``Admin > Social Login > Configuration > Twitter``.

![i](https://i.imgur.com/CMBMBpP.png)

* In the **Enable** field: Select "Yes" to show Sign in with Twitter button
* In the **Sort Order** field: The order to show social login buttons. Order will be arranged as following: number, special symbol, uppercase, lowercase.
* Instruction to create Twitter API can be found [here](https://docs.mageplaza.com/social-login-m2/how-to-configure-twitter-api.html).

##### 4.2. Login using Twitter

![i](https://i.imgur.com/7krIzKe.png)

Twitter Login dialog will be shown after clicking on Sign in with Twitter button.

#### V. LinkedIn Sign in
##### 5.1. How to configure LinkedIn

Go to ``Admin > Social Login > Configuration > LinkedIn``

![i](https://i.imgur.com/kkH3KzQ.png)

* In the **Enable** field: Select "Yes" to show Sign in with LinkedIn button
* In the **Sort Order** field: The order to show social login buttons. Order will be arranged as following: number, special symbol, uppercase, lowercase.
* Instruction to create LinkedIn API can be found [here](https://docs.mageplaza.com/social-login-m2/how-to-configure-linkedin-api.html).

##### 5.2. Login using LinkedIn

![i](https://i.imgur.com/xbGp02N.png)

LinkedIn Login dialog will be shown after clicking on Sign in with LinkedIn button.

#### VI. Yahoo Sign in
##### 6.1. How to configure Yahoo

Go to ``Admin > Social Login > Configuration > Yahoo``.

![i](https://i.imgur.com/rZtPE0Y.png)

* In the **Enable** field: Select "Yes" to show Sign in with Yahoo button
* In the **Sort Order** field: The order to show social login buttons. Order will be arranged as following: number, special symbol, uppercase, lowercase.
* Instruction to create Yahoo API can be found [here](https://docs.mageplaza.com/social-login-m2/how-to-configure-yahoo-api.html).

##### 6.2. Login using Yahoo

![i](https://i.imgur.com/KRZM5v2.png)

Yahoo Login dialog will be shown after clicking on Sign in with Yahoo button.
 
#### VII. Foursquare Sign in
##### 7.1. How to configure Foursquare

Go to ``Admin > Social Login > Configuration > Foursquare``.

![i](https://i.imgur.com/QAwt0U9.png)

* In the **Enable** field: Select "Yes" to show Sign in with Foursquare button
* In the **Sort Order** field: The order to show social login buttons. Order will be arranged as following: number, special symbol, uppercase, lowercase.
* Instruction to create Foursquare API can be found [here](https://docs.mageplaza.com/social-login-m2/how-to-configure-foursquare-api.html).

##### 7.2. Login using Foursquare

![i](https://i.imgur.com/vq67cqO.png)

Foursquare Login dialog will be shown after clicking on Sign in with Foursquare button.
 
#### VIII. Instagram Sign in
##### 8.1. How to configure Instagram

Go to ``Admin > Social Login > Configuration > Instagram``.

![i](https://i.imgur.com/f8k0ztP.png)

* In the **Enable** field: Select "Yes" to show Sign in with Instagram button
* In the **Sort Order** field: The order to show social login buttons. Order will be arranged as following: number, special symbol, uppercase, lowercase.
* Instruction to create Instagram API can be found [here](https://docs.mageplaza.com/social-login-m2/how-to-configure-instagram-api.html).

##### 8.2. Login using Instagram

![i](https://i.imgur.com/P5HffnF.png)

Instagram Login dialog will be shown after clicking on Sign in with Instagram button.

#### IX. Vkontakte Sign in
##### 9.1. How to configure Vkontakte

Go to ``Admin > Social Login > Configuration > Vkontakte``.

![i](https://i.imgur.com/dyiLeYQ.png)

* In the **Enable** field: Select "Yes" to show Sign in with Vkontakte button
* In the **Sort Order** field: The order to show social login buttons. Order will be arranged as following: number, special symbol, uppercase, lowercase.
* Instruction to create Vkontakte API can be found [here](https://docs.mageplaza.com/social-login-m2/how-to-configure-vkontakte-api.html).

##### 9.2. Login using Vkontakte

![i](https://i.imgur.com/SWgvRaJ.png)

Vkontakte Login dialog will be shown after clicking on Sign in with Vkontakte button.

#### X. Instagram Github
##### 10.1. How to configure Github

Go to ``Admin > Social Login > Configuration > Github``.

![i](https://i.imgur.com/0JMvyky.png)

* In the **Enable** field: Select "Yes" to show Sign in with Github button
* In the **Sort Order** field: The order to show social login buttons. Order will be arranged as following: number, special symbol, uppercase, lowercase.
* Instruction to create Github API can be found [here](https://docs.mageplaza.com/social-login-m2/how-to-configure-github-api.html).

##### 10.2. Login using Github

![i](https://i.imgur.com/BptHpHv.png)

Github Login dialog will be shown after clicking on Sign in with Github button.
