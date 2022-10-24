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

.. image:: https://i.imgur.com/mubeci0.png

Step 3
-----------

Click on **Register an application** button, set **Name** and enter the **Redirect Url** of the website

.. image:: https://i.imgur.com/2cSvJrC.png

Step 4
------------

Copy and paste **Application ID** into the **Client ID** field on Magento 2 backend

.. image:: https://i.imgur.com/FtzUax4.png

Step 5
-----------

To  get the **Client Secret**, log into ``Certificates & Secrets > New client secret > Add a client secret``. Copy and paste **Value** into the **Client Secret*8 field on Magento 2 backend

.. image:: https://i.imgur.com/R1sndsP.png

.. image:: https://i.imgur.com/PvMshxj.png

If for some reason you still can't manage to create an application for Microsoft Live Login, you can `ask for support`_.

.. _ask for support: https://mageplaza.freshdesk.com/support/home

.. _Microsoft Live: https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade

.. include:: ../ad_footer.rst
