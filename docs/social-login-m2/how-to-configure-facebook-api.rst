How to configure Facebook API
=================================

Facebook requires that you create an external application linking your website to their API. **Application** id and secret (also sometimes referred as **Consumer** key and secret or **Client** id and secret) are what we call an application credentials. This application will link your website example.com to Facebook API and these credentials are needed in order for Facebook users to access your website.

These credentials may also differ in format, name and content depending on the social network.

To enable authentication with this provider and to register a new Facebook API Application, follow the steps: 

Step 1
--------

First go to: https://developers.facebook.com/

Step 2
---------

Select Add a New App from the Apps menu at the top

.. image:: http://i.imgur.com/njp5g6n.png

Step 3
--------
Then, a popup will display. Fill out Display name for your app.

.. image:: http://i.imgur.com/EqgtaSS.png

Step 4
----------

Go to Settings page and click on Add Platform. Then, choose Website

.. image:: http://i.imgur.com/dJemFXg.png

Next, enter the url in App Domains and Site URL fields. They should match with the current hostname *example.com*.

Step 5
---------

Go to the Review page and choose YES to make the app to be public.

.. image:: http://i.imgur.com/FJa3LDM.png

Step 6
----------

Go back to the Settings page and past the created application credentials (APP ID and Secret) into the boxes below.

.. image:: http://i.imgur.com/QP75QVh.png


Step 7
---------

Copy and insert API into API fields in **Magento Admin > Social Login > Settings > Facebook**




And that's it!

If for some reason you still can't manage to create an application for Facebook, you can `ask for support`_.

.. _ask for support: https://mageplaza.freshdesk.com/support/home

.. include:: ../ad_footer.rst
