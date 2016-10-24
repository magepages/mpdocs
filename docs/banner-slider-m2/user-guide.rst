===========
User Guide
===========

Welcome to Better Slider extension for Magento 2 (Banner Slider) by Mageplaza.

User Guide
------------

In this guide, I will show you how to insert A banner slider into Homepage of Magento 2 store.


Step 1: Add new banners
^^^^^^^^^^^^^^^^^^^^^^^^^^

First of all, you should add banners into your store.

* From Magento 2 Admin > Banner Slider > Banners > Add New Banner

* Fill information, upload image file to Upload File file.

  .. image:: https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/6024399653/original/blob1465202912549.png?1465202913

* Then Click Save Banner

You can add as many banners as you want. After finish adding banners, you can go to next step: add a new slider.


Step 2: Add a new slider
^^^^^^^^^^^^^^^^^^^^^^^^^

* From Magento 2 Admin > Banner Slider > Sliders > Add New Slider


* Fill Slider information as the following:

  .. image:: https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/6024399789/original/blob1465202996629.png?1465202997


* Click on **Banners tab**, and choose uploaded banners. You also can sort order by position.

  .. image:: https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/6024399877/original/blob1465203062331.png?1465203063


* Then **Save Banner**, you can see `slider_id` in this example is **1**


  .. image:: https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/6024400339/original/blob1465203379041.png?1465203379


Step 3: Insert into Homepage
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

* Go to `Admin > Content > Pages > Homepage > Content`::


	{ { block class="Mageplaza\BetterSlider\Block\Slider" template="Mageplaza_BetterSlider::slider.phtml" banner_id="1" } }

You can change your own banner_id value depend on your store.

* Then click `Save` Page.

Step 4: Flush Cache and Check result
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To flush Magento cache, you can follow this guide: Magento 2 how to flush cache

Navigate your browser to Magento homepage and check result. Here is what we get.







How to insert Banner Slider in layout file
------------------------------------------------

In Xml file, you can insert the following block of code::

 

	<?xml version="1.0"?>
	<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../../lib/internal/Magento/Framework/View/	Layout/etc/page_configuration.xsd">
 
	    <referenceContainer name="content">
	        <block template="slider.phtml" class="Mageplaza\BetterSlider\Block\Slider" name="mageplaza_betterslider"/>
	    </referenceContainer>
	</page>







Why Mageplaza developed this module for Developers
----------------------------------------------------------------

- **Optimize performnace** do not slow your Magento 2 store by adding banner slider everywhere, every positions (~36 positions) on the site. 
- Details and quality documentations for developers.
- Implement with ease.
- No need, no added.
- Free, Open-source. 