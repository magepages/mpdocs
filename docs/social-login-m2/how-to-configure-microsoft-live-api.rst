How to configure Microsoft Live API
=======================================

Microsoft Live Login requires that you create an external application linking your website to their API. **Application** id and secret (also sometimes referred as **Consumer** key and secret or **Client** id and secret) are what we call an application credentials. This application will link your website example.com to Microsoft Live Login API and these credentials are needed in order for Microsoft Live Login users to access your website.

These credentials may also differ in format, name and content depending on the social network.

To enable authentication with this provider and to register a new Microsoft Live Login API Application, follow the steps: 

* First go to `Microsoft Live`_  to create an app

* Create a new account or login your account if you have already registered

.. image:: https://i.imgur.com/LSi0Ia0.png

* Click on **Add an app** button, set `Name` for the application on the pop-up window

.. image:: https://i.imgur.com/l72G3eb.png

* Copy and paste **Application ID** into the `Application ID` field on Magento 2 backend

.. image:: https://i.imgur.com/0pEPyyL.png

* Use **Generate New Password** and **Generate New Key Pair** to get **Application Secrets**, then insert it into the `Application Secret` field from the Magento 2 backend

.. image:: https://i.imgur.com/vwiOYWK.png

* Next, you need connect Microsoft Live and your website by adding your URL in the **Platform** option. 

.. image:: https://i.imgur.com/iAY26SR.png



If for some reason you still can't manage to create an application for Microsoft Live Login, you can `ask for support`_.

.. _ask for support: https://mageplaza.freshdesk.com/support/home

.. _Microsoft Live: https://account.live.com/developers/applications/create

.. include:: ../ad_footer.rst