How to configure Microsoft Live API
=======================================

Microsoft Live Login requires that you create an external application linking your website to their API. **Application** id and secret (also sometimes referred as **Consumer** key and secret or **Client** id and secret) are what we call an application credentials. This application will link your website example.com to Microsoft Live Login API and these credentials are needed in order for Microsoft Live Login users to access your website.

These credentials may also differ in format, name and content depending on the social network.

To enable authentication with this provider and to register a new Microsoft Live Login API Application, follow the steps: 

Step 1
--------

First go to `Microsoft Live`_  to create an app

Step 2
-----------

Create a new account or login your account if you have already registered

.. image:: https://cdn.mageplaza.com/media/general/3skjfHG.png

Step 3
-----------

Click on **Add an app** button, set **Name** for the application on the pop-up window

.. image:: https://cdn.mageplaza.com/media/general/l72G3eb.png

Step 4
------------

Copy and paste **Application ID** into the `Application ID` field on Magento 2 backend

.. image:: https://cdn.mageplaza.com/media/general/0pEPyyL.png

Step 5
-----------

Use **Generate New Password** and **Generate New Key Pair** to get **Application Secrets**, then insert it into the `Application Secret` field from the Magento 2 backend

.. image:: https://cdn.mageplaza.com/media/general/vwiOYWK.png

Step 6
---------

Next, you need connect Microsoft Live and your website by adding your URL in the **Platform** option. 

.. image:: https://cdn.mageplaza.com/media/general/iAY26SR.png

If for some reason you still can't manage to create an application for Microsoft Live Login, you can `ask for support`_.

.. _ask for support: https://mageplaza.freshdesk.com/support/home

.. _Microsoft Live: https://account.live.com/developers/applications/create

.. include:: ../ad_footer.rst