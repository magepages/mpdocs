====================================
Install Magento 2 extension
====================================

Installation guide now moved to https://www.mageplaza.com/install-magento-2-extension/
--------------------------------------------------------------------------------------------------------

How to Install Magento 2 Extension
-------------------------------------------------------------

1. **We recommend you to duplicate your live store on a staging/test site and try installation on it in advance**
2. **Backup magento files and the store database**
	.. important::
		It's very important to backup all of themes and extensions in Magento before installation, especially when you are working on a live server. We strongly recommend you to do not omit this step.
3. Download FTP clients
Recommend clients: **FileZilla**, **WinSCP**, **cuteFtp**



Step 1: Upload the extension
------------------------------------------------------------


1. Log into your hosting space via a FTP client

2. Unzip extension package and upload them into **Magento root directory**.

.. image:: https://cdn.mageplaza.com/media/general/0sGASN0.png


3. Enter the following at the command line

``php bin/magento setup:upgrade``

``php bin/magento setup:static-content:deploy``

.. tip::
	Logout and Login again to avoid **Access denied 404 error** when you go to this product configuration.


Step 2: Configuration
---------------------------------
Now time to setup it in backend.

Go to ``Mageplaza > Extension Name > Configuration``.



FAQS
-----------

Q: "Access denied 404 error"

A: Try to Logout and Login again.  Follow `this guide`_ for more details

Q: Messy page, no style. What should I do?

A: it because of static content is not generated to pub/ folder. Let’s run command to deploy it.

Run following command:

``php bin/magento setup:static-content:deploy``


Any other questions, issues please contact Mageplaza:

- Ask Mageplaza: https://www.mageplaza.com/contact.html


.. _this guide: https://www.mageplaza.com/kb/magento-2-404-page-not-found.html
.. _this screenshot: https://cdn.mageplaza.com/media/general/DDPNRcD.png


