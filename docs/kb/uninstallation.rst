Uninstallation
==============


Disable Extension
-------------------------------------

To completely uninstall any extension, first start from disabling it. 
*To disable the extension, please follow the next steps*

- Edit ``app/etc/modules/Mageplaza_EXTENSION_NAME.xml``
- Change ``true`` to ``false``
- Clear the cache

At this point the extension is completely disabled and is not visible for Magento.

Now you can safely remove the extension files, although it is not necessary.



Uninstall an extension completely
--------------------------------------------------------------------------------------------------

Delete the following files, folders::

	app/etc/modules/Mageplaza_EXTENSION_NAME.xml
	app/code/local/Mageplaza/EXTENSION_NAME
	app/design/adminhtml/default/default/layout/Mageplaza/EXTENSION_NAME.xml
	app/design/adminhtml/default/default/template/Mageplaza/EXTENSION_NAME
	app/design/frontend/base/default/layout/Mageplaza
	app/design/frontend/base/default/template/Mageplaza/EXTENSION_NAME
	js/Mageplaza/EXTENSION_NAME
	skin/frontend/base/default/css/Mageplaza/EXTENSION_NAME
	skin/frontend/base/default/js/Mageplaza/EXTENSION_NAME


