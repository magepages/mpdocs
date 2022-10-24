Overview
-----------------------

Customers are not patient enough to fill a lot of required information while those are available in social account as Facebook, LinkedIn, Instagram, etc. With `Social Login <https://www.mageplaza.com/magento-2-social-login-extension/>`_ extension by Mageplaza, your customers only need to click on the social button and all necessary information is completed automatically.That is the main reason why Magento Social Login extension is considered as the great solution for that convenience.

Especially, admin can choose to ask for the extra information of customers after registing social account

How to configure
-----------------------

From Magento Admin, select ``Store > Settings > Configuration > Mageplaza Extensions > Social Login``.

.. image:: https://i.imgur.com/3Z7AZ1f.png

I. General
^^^^^^^^^^^^^^^^^^^^^^

From the Admin Panel, go to ``Store > Settings > Configuration > Mageplaza Extensions > Social Login``, choose **General** sections

.. image:: https://i.imgur.com/kFbqyOz.png

* In the **Enable** field: Select "Yes" to allow customers sign in quickly via social networking sites they are using.
* In the **Send Password To Customer** field: Select "Yes" to activate sending notifications to customers to remind them to change their passwords when signing in via social accounts. They can change their passwords via their emails used to register for that social account.
* In the **Show Social Login Buttons on** field: 
  
  * Select display page(s) with social login buttons. Show Social Login Buttons on = Customer Login Page will show social login buttons on the login page.
  * Can select more than one option

* In the **Use Popup Login** field: 

  * Choose **Popup Login** to turn on Popup and Show Social Login Buttons in Login Dialog, Create New Account, and Forgot Passwords.
  * Include Social Login buttons in Customer Authentication Popup page
  * Choose **None**, popup not show and only show social login buttons at Customer Login page, Create New Account, and Forgot Passwords, Customers Authentication Popup.

* **Use Popup Login As Authentication Popup**: Select “Yes” to use popup of Social login as Authentication Popup

* In the **Popup Links Selector** field: Customize any default Login and Create button to be a popup-open button by filling in class name of elements that cover these buttons.
* In the **Require More Info** field: 
  * Select **Always Require** for always showing popup of information verification when customers register social account.  
  * Select **If social account does not provide E-mail** means that only show email confirmation popup when customers register account via the social networks that do not require real email such as Yahoo, Github, etc. 
  * Choosing either two options above will show an extra field: 
    * **Information Required**: Admin can choose to ask additional information of customers after they create social account. The information can be Name, Email, Password. This is a required field and you can choose mutiple iptions here. 

.. image:: https://i.imgur.com/wIaEYZ8.png

* Popup Effect : Admin can select one among popup display effects below

.. image:: https://i.imgur.com/UdCPC1D.png

* In the **Style Management** field:  Admin can choose one of the display colors for popup. Style Management = Custom means Admin can select custom the color swatch.
* In the **Custom CSS** field: You can add CSS code to customize based on your personal preference.

II. Facebook sign in
^^^^^^^^^^^^^^^^^^^^^^

2.1. How to configure Facebook
######################

Go to ``Store > Settings > Configuration > Mageplaza Extensions > Social Login > Facebook``.

.. image:: https://i.imgur.com/fybnkBG.png

* In the **Enable** field: Select "Yes" to show Sign in with Facebook button
* In the **Sort Order** field: The order to show social login buttons. Order will be arranged as following: number, special symbol, uppercase, lowercase.
* Instruction to create Facebook API can be found `here <https://docs.google.com/document/d/1Mp4I_cd-mghwCwI4VUmAis_x7JRqo0Az1VvrkePWibA/edit#>`_.

2.2. Login using Facebook
######################

.. image:: https://i.imgur.com/YYTboV0.png

Facebook Login dialog will be shown after clicking on Sign in with Facebook button.

III. Google Sign in
^^^^^^^^^^^^^^^^^^^^^^

3.1. How to configure Google
######################
 
Go to ``Store > Settings > Configuration > Mageplaza Extensions > Social Login > Google``.

.. image:: https://i.imgur.com/bi112iL.png

* In the **Enable** field: Select "Yes" to show Sign in with Google button
* In the **Sort Order** field: The order to show social login buttons. Order will be arranged as following: number, special symbol, uppercase, lowercase.
* Instruction to create Google API can be found `here <https://docs.mageplaza.com/social-login-m2/how-to-configure-google-api.html>`_.

3.2. Login using Google
######################

.. image:: https://i.imgur.com/8HH65wn.png

Google Login dialog will be shown after clicking on Sign in with Google button
 
IV. Amazon Sign in
^^^^^^^^^^^^^^^^^^^^^^

4.1. How to configure Amazon
######################

Go to ``Store > Settings > Configuration > Mageplaza Extensions > Social Login > Amazon``.

.. image:: https://i.imgur.com/RJ6goQH.png

* In the **Enable** field: Select "Yes" to show Sign in with Amazon button
* In the **Sort Order** field: The order to show social login buttons. Order will be arranged as following: number, special symbol, uppercase, lowercase.

4.2. Login using Amazon
######################

.. image:: https://i.imgur.com/OPolbZs.png

Amazon Login dialog will be shown after clicking on Sign in with Amazon button.

V. Twitter Sign in
^^^^^^^^^^^^^^^^^^^^^^

5.1. How to configure Twitter
######################

Go to ``Store > Settings > Configuration > Mageplaza Extensions > Social Login > Twitter``.

.. image:: https://i.imgur.com/nLvOkaq.png

* In the **Enable** field: Select "Yes" to show Sign in with Twitter button
* In the **Sort Order** field: The order to show social login buttons. Order will be arranged as following: number, special symbol, uppercase, lowercase.
* Instruction to create Twitter API can be found `here <https://docs.mageplaza.com/social-login-m2/how-to-configure-twitter-api.html>`_.

5.2. Login using Twitter
######################

.. image:: https://i.imgur.com/7krIzKe.png

Twitter Login dialog will be shown after clicking on Sign in with Twitter button.

VI. LinkedIn Sign in
^^^^^^^^^^^^^^^^^^^^^^

6.1. How to configure LinkedIn
######################

Go to ``Store > Settings > Configuration > Mageplaza Extensions > Social Login > Linkedln``

.. image:: https://i.imgur.com/0886wj2.png

* In the **Enable** field: Select "Yes" to show Sign in with LinkedIn button
* In the **Sort Order** field: The order to show social login buttons. Order will be arranged as following: number, special symbol, uppercase, lowercase.
* Instruction to create LinkedIn API can be found `here <https://docs.mageplaza.com/social-login-m2/how-to-configure-linkedin-api.html>`_.

6.2. Login using LinkedIn
######################

.. image:: https://i.imgur.com/goOvm8K.png

LinkedIn Login dialog will be shown after clicking on Sign in with LinkedIn button.

VII. Yahoo Sign in
^^^^^^^^^^^^^^^^^^^^^^

7.1. How to configure Yahoo
######################

Go to ``Store > Settings > Configuration > Mageplaza Extensions > Social Login > Yahoo``.

.. image:: https://i.imgur.com/wlGtqrE.png

* In the **Enable** field: Select "Yes" to show Sign in with Yahoo button
* In the **Sort Order** field: The order to show social login buttons. Order will be arranged as following: number, special symbol, uppercase, lowercase.
* Instruction to create Yahoo API can be found `here <https://docs.mageplaza.com/social-login-m2/how-to-configure-yahoo-api.html>`_.

7.2. Login using Yahoo
######################

.. image:: https://i.imgur.com/KRZM5v2.png

Yahoo Login dialog will be shown after clicking on Sign in with Yahoo button.
 
VIII. Foursquare Sign in
^^^^^^^^^^^^^^^^^^^^^^

8.1. How to configure Foursquare
######################

Go to ``Store > Settings > Configuration > Mageplaza Extensions > Social Login > Foursquare``.

.. image:: https://i.imgur.com/cOjgHZH.png

* In the **Enable** field: Select "Yes" to show Sign in with Foursquare button
* In the **Sort Order** field: The order to show social login buttons. Order will be arranged as following: number, special symbol, uppercase, lowercase.
* Instruction to create Foursquare API can be found `here <https://docs.mageplaza.com/social-login-m2/how-to-configure-foursquare-api.html>`_.

8.2. Login using Foursquare
######################

.. image:: https://i.imgur.com/vq67cqO.png

Foursquare Login dialog will be shown after clicking on Sign in with Foursquare button.
 
IX. Instagram Sign in
^^^^^^^^^^^^^^^^^^^^^^

9.1. How to configure Instagram
######################

Go to ``Store > Settings > Configuration > Mageplaza Extensions > Social Login > Instagram``.

.. image:: https://i.imgur.com/98dmZnf.png

* In the **Enable** field: Select "Yes" to show Sign in with Instagram button
* In the **Sort Order** field: The order to show social login buttons. Order will be arranged as following: number, special symbol, uppercase, lowercase.
* Instruction to create Instagram API can be found `here <https://docs.mageplaza.com/social-login-m2/how-to-configure-instagram-api.html>`_.

9.2. Login using Instagram
######################

.. image:: https://i.imgur.com/P5HffnF.png

Instagram Login dialog will be shown after clicking on Sign in with Instagram button.

X. Vkontakte Sign in
^^^^^^^^^^^^^^^^^^^^^^

10.1. How to configure Vkontakte
######################

Go to `` Store > Settings > Configuration > Mageplaza Extensions > Social Login > Vkontakte``.

.. image:: https://i.imgur.com/xtzV4YM.png

* In the **Enable** field: Select "Yes" to show Sign in with Vkontakte button
* In the **Sort Order** field: The order to show social login buttons. Order will be arranged as following: number, special symbol, uppercase, lowercase.
* Instruction to create Vkontakte API can be found `here <https://docs.mageplaza.com/social-login-m2/how-to-configure-vkontakte-api.html>`_.

10.2. Login using Vkontakte
######################

.. image:: https://i.imgur.com/SWgvRaJ.png

Vkontakte Login dialog will be shown after clicking on Sign in with Vkontakte button.

XI. Github Sign in
^^^^^^^^^^^^^^^^^^^^^^

11.1. How to configure Github
######################

Go to ``Store > Settings > Configuration > Mageplaza Extensions > Social Login > Github``.

.. image:: https://i.imgur.com/GscYqZz.png

* In the **Enable** field: Select "Yes" to show Sign in with Github button
* In the **Sort Order** field: The order to show social login buttons. Order will be arranged as following: number, special symbol, uppercase, lowercase.
* Instruction to create Github API can be found `here <https://docs.mageplaza.com/social-login-m2/how-to-configure-github-api.html>`_.

11.2. Login using Github
######################

.. image:: https://i.imgur.com/BptHpHv.png

Github Login dialog will be shown after clicking on Sign in with Github button.
 

XII. Live Sign in
^^^^^^^^^^^^^^^^^^^^^^

12.1. How to configure Live
######################

Go to S``tore > Settings > Configuration > Mageplaza Extensions > Social Login > Live``.


