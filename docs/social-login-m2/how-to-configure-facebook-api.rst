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

.. image:: https://cdn.mageplaza.com/media/general/njp5g6n.png

Step 3
--------
Then, a popup will display. Fill out Display name for your app.

.. image:: https://cdn.mageplaza.com/media/general/EqgtaSS.png

Step 4
----------

Go to Settings page and click on Add Platform. Then, choose Website

.. image:: https://cdn.mageplaza.com/media/general/dJemFXg.png

Next, enter the url in App Domains and Site URL fields. They should match with the current hostname *example.com*.

Step 5
---------

Go to the Review page and choose YES to make the app to be public.

.. image:: https://cdn.mageplaza.com/media/general/59tkUl1.png

Step 6
----------

Go back to the Settings page. The created application credentials (APP ID and Secret) will be shown like the image below.

.. image:: https://cdn.mageplaza.com/media/general/QP75QVh.png

Step 7
----------

- Add a Product

.. image:: https://cdn.mageplaza.com/media/general/0ncXALM.png

- No need to choose any platforms. Click the **Settings** on the left to input the RedirectURIs.

.. image:: https://cdn.mageplaza.com/media/general/nzGOfqd.png

- Leave all the default Options, get the **Valid OAuth redirect URIs** from our SocialLogin settings in backend.  
Paste the link into the input and press **Save changes** button on the bottom right screen.

.. image:: https://cdn.mageplaza.com/media/general/ANrIMdN.png

Step 8
---------

Copy and insert API into API fields in the extension's setting under Admin panel. Please check this image.

.. image:: https://cdn.mageplaza.com/media/general/h9NsDFJ.png


And that's it!

If for some reason you still can't manage to create an application for Facebook, you can `ask for support`_.

.. _ask for support: https://mageplaza.freshdesk.com/support/home

.. include:: ../ad_footer.rst
