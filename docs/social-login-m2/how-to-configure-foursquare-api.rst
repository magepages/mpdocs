How to configure Foursquare API
=================================

Foursquare requires that you create an external application linking your website to their API. **Application** id and secret (also sometimes referred as **Consumer** key and secret or **Client** id and secret) are what we call an application credentials. This application will link your website example.com to Foursquare API and these credentials are needed in order for Foursquare users to access your website.

These credentials may also differ in format, name and content depending on the social network.

To enable authentication with this provider and to register a new Foursquare API Application, follow the steps: 

Step 1
--------

First Go to https://foursquare.com/developers/app

Step 2
--------

Select `Create a new app`.

.. image:: https://i.imgur.com/OPDaVzi.png


Step 3
---------

Fill out App name, page url, Redirect URI ...

.. image:: https://i.imgur.com/G7xxxOc.png


Step 4
--------

Click `Save change` to finish.

Step 5
-----------

Copy and insert Client Id and Client Secret into API fields in Magento Admin.

.. image:: https://i.imgur.com/gXtiOdf.png


Step 6
---------

Copy and insert API into API fields in **Magento Admin > Social Login > Settings > Foursquare**

.. image:: https://i.imgur.com/lwxnGfl.png

And that's it!

If for some reason you still can't manage to create an application for Foursquare, you can `ask for support`_.


.. _ask for support: https://mageplaza.freshdesk.com/support/home

.. include:: ../ad_footer.rst