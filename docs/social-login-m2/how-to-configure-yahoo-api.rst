How to configure Yahoo API
=================================

Yahoo requires that you create an external application linking your website to their API. **Application** id and secret (also sometimes referred as **Consumer** key and secret or **Client** id and secret) are what we call an application credentials. This application will link your website example.com to Yahoo API and these credentials are needed in order for Yahoo users to access your website.

These credentials may also differ in format, name and content depending on the social network.

To enable authentication with this provider and to register a new Yahoo API Application, follow the steps: 

* First go to: https://developer.yahoo.com/apps.
* Select `Create an App`.
* Fill out Application Name, Home Page URl, Callback Domain. In API Permissions (Profiles (Social Directory) choosen Read/Write Public and Private).
* Click `Create App button`.
* Copy and insert Client Id and Client Secret into API fields in Magento Admin.

.. image:: https://i.imgur.com/uMMzZvT.png

.. image:: https://i.imgur.com/EVAaJk8.png

.. image:: https://i.imgur.com/fQ6qktQ.png

.. image:: https://i.imgur.com/9NqnIsT.png

.. image:: http://i.imgur.com/hs9OjDW.png

And that's it!

If for some reason you still can't manage to create an application for Facebook, first try to `Google it`_, then check it on `Youtube`_, and if nothing works `ask for support`_.

.. _Google it: https://www.google.com/search?q=Google%20API%20create%20application

.. _Youtube: https://www.youtube.com/results?search_query=Google%20API%20create%20application

.. _ask for support: https://mageplaza.freshdesk.com/support/home
