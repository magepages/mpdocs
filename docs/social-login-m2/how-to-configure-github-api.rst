How to configure GitHub API
=================================

GitHub requires that you create an external application linking your website to their API. **Application** id and secret (also sometimes referred as **Consumer** key and secret or **Client** id and secret) are what we call an application credentials. This application will link your website example.com to GitHub API and these credentials are needed in order for GitHub users to access your website.

These credentials may also differ in format, name and content depending on the social network.

To enable authentication with this provider and to register a new GitHub API Application, follow the steps: 

#. First Go to https://github.com/settings/applications/new.
#. Fill out Application name, Homepage URL, Application description, Authorization callback URL.
#. Click `Register application`.
#. Copy and insert Client Id and Client Secret into API fields in Magento Admin.

.. image:: https://i.imgur.com/RZ2KFGL.png

.. image:: https://i.imgur.com/Le9CGEZ.png

.. image:: https://i.imgur.com/1SA7qfr.png

And that's it!

If for some reason you still can't manage to create an application for Foursquare, first try to `Google it`_, then check it on `Youtube`_, and if nothing works `ask for support`_.

.. _Google it: https://www.google.com/search?q=Google%20API%20create%20application

.. _Youtube: https://www.youtube.com/results?search_query=Google%20API%20create%20application

.. _ask for support: https://mageplaza.freshdesk.com/support/home

.. include:: ../ad_footer.rst