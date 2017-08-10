How to configure GitHub API
=================================

GitHub requires that you create an external application linking your website to their API. **Application** id and secret (also sometimes referred as **Consumer** key and secret or **Client** id and secret) are what we call an application credentials. This application will link your website example.com to GitHub API and these credentials are needed in order for GitHub users to access your website.

These credentials may also differ in format, name and content depending on the social network.

To enable authentication with this provider and to register a new GitHub API Application, follow the steps: 

Step 1
-------

First go to https://github.com/settings/applications/new.

Step 2
----------

Fill out Application name, Homepage URL, Application description, Authorization callback URL.

.. image:: https://cdn.mageplaza.com/media/general/RZ2KFGL.png


Step 3
----------

Click `Register application`.

Step 4
----------

Get Client ID and Client Secret from DashBoard App 

.. image:: https://cdn.mageplaza.com/media/general/Le9CGEZ.png


Step 5
-----------

Copy and insert Client Id and Client Secret into API fields in Magento Admin.


.. image:: https://cdn.mageplaza.com/media/general/1SA7qfr.png

And that's it!

If for some reason you still can't manage to create an application for Foursquare, you can `ask for support`_.


.. _ask for support: https://mageplaza.freshdesk.com/support/home

.. include:: ../ad_footer.rst