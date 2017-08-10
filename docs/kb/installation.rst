====================================
Install Magento 2 extension
====================================

Installation guide now moved to https://www.mageplaza.com/install-magento-2-extension/
--------------------------------------------------------------------------------------------------------

How to Install Magento 2 Extension
-------------------------------------------------------------

#. **We recommend you to duplicate your live store on a staging/test site and try installation on it in advance**
#. **Backup magento files and the store database**
	.. important::
		It's very important to backup all of themes and extensions in Magento before installation, especially when you are working on a live server. We strongly recommend you to do not omit this step.
#. Download FTP clients
Recommend clients: **FileZilla**, **WinSCP**, **cuteFtp**



Upload the extension
------------------------------------------------------------


#. Log into your hosting space via a FTP client

#. Unzip extension package and upload them into **Magento root directory**.

.. image:: https://cdn.mageplaza.com/media/general/0sGASN0.png


#. Enter the following at the command line

`php bin/magento setup:upgrade`

`php bin/magento setup:static-content:deploy`

.. tip::
	Logout and Login again to avoid **Access denied 404 error** when you go to this product configuration.


Configuration
---------------------------------
Now time to setup it in backend.

Go to ``Stores > Configuration > Mageplaza Extensions``.


FAQS
-----------

#. "Access denied 404 error"

Try to Logout and Login again.  Follow `this guide`_ for more details

#. Messy page, no style.

see `this screenshot`__

it because of static content is not generated to pub/ folder. Let’s run command to deploy it.

Run following command:

`php bin/magento setup:static-content:deploy`


.. include:: support.rst

.. _this guide: https://www.mageplaza.com/kb/magento-2-404-page-not-found.html
.. _this screenshot: https://cdn.mageplaza.com/media/general/DDPNRcD.png


