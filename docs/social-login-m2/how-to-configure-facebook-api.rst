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

Login Facebook by click on **Login** or create a new Facebook account. After that, click on **My App** from the Apps menu at the top, then click **Create Apps** to create your new app

.. image:: https://i.imgur.com/bh5LUF3.png

Choose the type of app you want to create

.. image:: https://i.imgur.com/CHkpqfX.png

Step 3
--------
Then, redirect to the app creation page. Fill out Display name, Email for your app.

.. image:: https://i.imgur.com/DxDBtCI.png

Step 4
----------

Next, at page **Basic**, enter the url in **App Domains**, **Site URL** and **URL Privacy Policy** fields. They should match with the current hostname *example.com*.

.. image:: https://i.imgur.com/YHEtl6k.png

Click **Add platform** to add **Site URL**.

.. image:: https://i.imgur.com/hAujAWC.png

.. image:: https://i.imgur.com/7LIRZx3.png

Step 5
---------

On the **Advanced** page, get the Valid OAuth redirect URLs from our Social Login settings in the backend 

.. image:: https://i.imgur.com/jdOZD2q.png

Step 6
----------

Click **Add product** from the navigation bar to perform Facebook setup.

.. image:: https://i.imgur.com/0lW1x90.png

As the Step 5, at ``Facebook Login > Settings``: copy **Valid OAuth redirect URLs** and paste in the **Share Redirect Domain Allow List** field.

.. image:: https://i.imgur.com/cSNJcOD.png

.. image:: https://i.imgur.com/BMCBe6w.png

Step 7
----------

Add Permissions & Verification by going to **App Review** and select **Permissions and Features**:

.. image:: https://i.imgur.com/G5gB8yC.png

Step 8
----------

Access to the **Basic** page, get, and insert APIs into API fields in the extension's settings in the Admin console.

.. image:: https://i.imgur.com/JQMsOv9.png


And that's it!

If for some reason you still can't manage to create an application for Facebook, you can `ask for support`_.

.. _ask for support: https://mageplaza.freshdesk.com/support/home

.. include:: ../ad_footer.rst
