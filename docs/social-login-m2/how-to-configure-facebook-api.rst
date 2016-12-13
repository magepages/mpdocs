How to configure Facebook API
=================================

Facebook requires that you create an external application linking your website to their API. **Application** id and secret (also sometimes referred as **Consumer** key and secret or **Client** id and secret) are what we call an application credentials. This application will link your website example.com to Facebook API and these credentials are needed in order for Facebook users to access your website.

These credentials may also differ in format, name and content depending on the social network.

To enable authentication with this provider and to register a new Facebook API Application, follow the steps: 

#. First go to: https://developers.facebook.com/apps
#. Select Add a New App from the Apps menu at the top.
#. Fill out Display Name, Namespace, choose a category and click Create App.
#. Go to Settings page and click on Add Platform. Choose website and enter in the new screen your website url in App Domains and Site URL fields. They should match with the current hostname *example.com*.
#. Go to the Status & Review page and choose yes where it says Do you want to make this app and all its live features available to the general public?.
#. Go back to the Dashboard page and past the created application credentials (APP ID and Secret) into the boxes above.
#. Copy and insert API into API fields in **Magento Admin > Social Login > Settings > Facebook**

.. image:: https://lh4.googleusercontent.com/egi5RpRsNbcOJfelEB7HNY9z6XKLoaFWtw-pBZVqM5DwFh_55nAcZRmJH9skP1vXU_ad5IbTH-FZ0J1QaWuEYcuIMqPfTiRXIr7kIJz6Nnu-V6XvS4P9J0GXGmBbSuo7bQ7k3RM

.. image:: https://lh5.googleusercontent.com/_aj0NjyU1y7l_4IbDV-vxK8hW22agB5pybaYiS3qAzxKLzVAZc1SNQetDQcrom4MtSukol1jjyUaDxUg_pcV5Y9gUWYG6jfsOPKZPiOKEfZTgfOS-WnbMyQ5IKdRUP7Rqy0xIY0

.. image:: https://lh5.googleusercontent.com/R9aBnJasbrFOYgrchBf3PXV5fOYwzq-2OdojLwZe6dQ8YIIoslWjvXmDItWCd4BTr_spwvKQ81R1Kxg77Mpy2p_PzFovz5HPmG4SXI3su3WijcUWmnrSvfYMdBkyXvB92HKq5yQ

And that's it!

If for some reason you still can't manage to create an application for Facebook, first try to `Google it`_, then check it on `Youtube`_, and if nothing works `ask for support`_.

.. _Google it: https://www.google.com/search?q=Facebook%20API%20create%20application

.. _Youtube: https://www.youtube.com/results?search_query=Facebook%20API%20create%20application

.. _ask for support: https://mageplaza.freshdesk.com/support/home

.. include:: ../ad_footer.rst