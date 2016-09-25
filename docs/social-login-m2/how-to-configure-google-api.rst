How to configure Google API
=================================

Google requires that you create an external application linking your website to their API. **Application** id and secret (also sometimes referred as **Consumer** key and secret or **Client** id and secret) are what we call an application credentials. This application will link your website example.com to Google API and these credentials are needed in order for Google users to access your website. 

These credentials may also differ in format, name and content depending on the social network. 

To enable authentication with this provider and to register a new Google API Application, follow the steps        :

#. First go to: https://console.developers.google.com
#. On the Dashboard sidebar click on Project then click **Create Project**.
#. Once the project is created. Select that project, then APIs & auth > Consent screen and fill the required information.
#. Then APIs & auth > APIs and enable **Google+ API**. If you want to import the user contacts enable **Contacts API** as well.
#. After that you will need to create an new application: APIs & auth > Credentials and then click **Create new Client ID**.
#. On the **Create Client ID** popup :
   
   * Select **Web application** as your application type.
   
   * Put your website domain in the Authorized JavaScript origins field. This should match with the current hostname example.com.
  
   * Provide URL as the Callback URL for your application (See in Social Login Configuration).
#. Once you have registered past the created application credentials (Client ID and Secret) into the boxes above.
#. Copy and insert API into API fields in **Magento Admin > Social Login > Settings > Google**


.. image:: https://lh3.googleusercontent.com/tKLnSFClQ8cA_ibjoOXQ7-32dgPMHxcQRDfyOcOcT_-w-y2-ZvfkK5zOot6SsF50sSYjYud5pmtBiuYQdq3h1YeK2sLTHehEMN_Cn9Eze9oEBxjrUiEUP5jzezoe1PhqsqJxjTM

.. image:: https://lh6.googleusercontent.com/jjp7aIO2iNeJRQ0jXCbDVzo4WthEE3nfaN7qZC8CruicV_JVyXi6WHooBQc2PKmAi6875Y0Zbo2z3pqUDcn11pKuO-R4jDfg4ALg_7Y5sdht6RgndhFBFi-WoBhz2scQfd6HRAM

.. image:: https://lh3.googleusercontent.com/v3WY1FWgukNVCUYAqdV98gaJLOmZmebhy5QILr9r8Bqomr8QD7gsbNpPLv8i46CZcK2NGQPKNiyVg_h5KERGLyaDvzWZPnS3eh0Fxq5mqyhRFeD-BVISv7H2QRE17OYM4Bb9GqU

And that's it!

If for some reason you still can't manage to create an application for Google, first try to `Google it`_, then check it on `Youtube`_, and if nothing works `ask for support`_.

.. _Google it: https://www.google.com/search?q=Google%20API%20create%20application

.. _Youtube: https://www.youtube.com/results?search_query=Google%20API%20create%20application

.. _ask for support: https://mageplaza.freshdesk.com/support/home


.. include:: ../ad_footer.rst