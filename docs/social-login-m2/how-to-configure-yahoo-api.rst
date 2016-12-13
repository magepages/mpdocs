How to configure Yahoo API
=================================

Yahoo requires that you create an external application linking your website to their API. **Application** id and secret (also sometimes referred as **Consumer** key and secret or **Client** id and secret) are what we call an application credentials. This application will link your website example.com to Yahoo API and these credentials are needed in order for Yahoo users to access your website.

These credentials may also differ in format, name and content depending on the social network.

To enable authentication with this provider and to register a new Yahoo API Application, follow the steps: 

Step 1
----------

First go to: https://developer.yahoo.com/apps.

Step 2
--------

Select `Create an App`.

.. image:: https://i.imgur.com/uMMzZvT.png


Step 3
----------

Fill out Application Name, Home Page URl, Callback Domain. In API Permissions (Profiles (Social Directory) choosen Read/Write Public and Private).

.. image:: https://i.imgur.com/EVAaJk8.png


Step 4
----------

Click `Create App button`.

.. image:: https://i.imgur.com/fQ6qktQ.png


Step 5
------------

Copy and insert Client Id and Client Secret into API fields in Magento Admin.

.. image:: https://i.imgur.com/9NqnIsT.png


And that's it!

If for some reason you still can't manage to create an application for Facebook, you can `ask for support`_.


.. _ask for support: https://mageplaza.freshdesk.com/support/home


.. include:: ../ad_footer.rst