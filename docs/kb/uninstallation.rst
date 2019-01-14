Uninstallation
==============

	.. important::
		Backup Code, database before doing this.

It is depend on how you installed, we will tell you how to uninstall it.
There are 2 main method to install a Magento extension: 1. Composer; 2. Copy-and-paste

1. Uninstall via composer
---------------------------

Go to Magento root folder and run uninstall command


	``composer remove mageplaza/module-name``
	``php bin/magento setup:upgrade``
	``php bin/magento setup:static-content:deploy``



2. Uninstall (Copy-and-paste method)
------------------------------------

Delete the following files, folders::
	``app/code/Mageplaza/EXTENSION_NAME``

Run the following command line::
	``php bin/magento setup:upgrade``

Delete database tables: (Optional)

Open a Mysql mangement such as PHPMyAdmin

Open your database > Find database with prefix: ``mageplaza_EXTENSION_NAME``

Just delete all the database tables related to ``mageplaza_EXTENSION_NAME``

If you have any questions, feel free to contact us at https://www.mageplaza.com/contact.html
