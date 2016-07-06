====================================
Installation Guide
====================================


Prepare Installation
-------------------------------------------------------------

#. **We recommend you to duplicate your live store on a staging/test site and try installation on it in advance**
#. **Backup magento files and the store database**
	.. important::
		It's very important to backup all of themes and extensions in Magento before installation, especially when you are working on a live server. We strongly recommend you to do not omit this step.

#. **Enable all caches in your magento**
	.. important::
		It's very important to enable the caches, Because, sometimes, some of the extensions of the theme were installed incorrectly. So you should enable the caches during upload the theme files, then you should disable or clear the caches, when complete to upload the theme files.

#. **Disable Compilation**
	.. important::
		It's very important to disable Compilation before installation an extension. We strongly recommend you to do not omit this step.
		Go to ``System > Tools > Compilation > Disabled``

#. Download FTP clients
Recommend clients: **FileZilla**, **WinSCP**, **cuteFtp**



Upload the extension
------------------------------------------------------------


#. Log into your hosting space via a FTP client
#. Unzip extension package and upload **all files, folders in** ``step1``` and ``step2```` into **Magento root directory**.

.. note::
	Usually in ``step1`` includes : ``app``, ``skin`` ``js``  and ``step1`` includes ``app`` only. So upload them into Magento root directory.
	Do NOT upload ``step1``, ``step2`` => Magento root directory.


#. Clean Cache
	Flush Magento Cache: ``System > Cache Management``. Hit on ``Flush Magento Cache``. 




.. tip::
	Logout and Login again to avoid **Access denied 404 error** when you go to this product configuration.


Configuration
---------------------------------
Now time to setup it in backend.

Go to ``System > Configuration > Mageplaza Extensions``.


Enable Complation (if any)
^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. warning::
	Skip this step if you have no idea about this

You can ignore this step if you did not enable it before.

Go to ``System > Tools > Compilation > Enable`` to enable it again.




.. include:: support.rst


