Uninstallation
==============


## Note: Backup Code, database before doing this.


Uninstall an extension completely
--------------------------------------------------------------------------------------------------

Delete the following files, folders::
	app/code/Mageplaza/EXTENSION_NAME

Run the following command line::
	php bin/magento setup:upgrade

Delete database tables: (Optional)

Open a Mysql mangement such as PHPMyAdmin

Open your database > Find database with prefix: `mageplaza_EXTENSION_NAME`
`
Just delete all the database tables related to `mageplaza_EXTENSION_NAME`
