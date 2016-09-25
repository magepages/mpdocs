How to change cron job time
===============================

On current version, we have not suport custom cron job time in configuration.
We will implement this in next version.

Simple change in XML file.

Go to file: `app/code/Mageplaza/Searchplus/etc/crontab.xml` line 6

In this example, change to 2 AM server time::

	<schedule>0 2 * * *</schedule>



Content of crontab.xml file::

	<?xml version="1.0"?>
	<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	        xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Cron:etc/crontab.xsd">
	    <group id="default"> <!-- Doesn't need to be unique -->
	        <job name="cron_searchplus" instance="Mageplaza\Searchplus\Cron\Job" method="execute">
	            <schedule>0 2 * * *</schedule>
	        </job>
	    </group>
	</config>



.. include:: ../ad_footer.rst