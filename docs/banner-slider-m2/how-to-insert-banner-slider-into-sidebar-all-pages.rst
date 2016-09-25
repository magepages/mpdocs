How to insert Banner slider into sidebar for all page
=========================================================

In this guide, we will show you how to insert a banner slider in sidebar

Create a new file call `default.xml` in `app/code/Mageplaza/BetterSlider/view/frontend/layout/` . Full path is `app/code/Mageplaza/BetterSlider/view/frontend/layout/default.xml` .
You also can paste the following code into your theme layout.
    .. note::
        - You also can create the xml file in theme folder or copy into an other module.
        - `banner_id` value should be changed to your own.
        - Default path: `app/code/Mageplaza/BetterSlider/view/frontend/layout/`



Sidebar Right Top
-----------------------


Paste the following content into `default.xml`::

    <?xml version="1.0"?>
    <page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../../lib/internal/Magento/Framework/View/Layout/etc/page_configuration.xsd">
        <body>
        	<referenceContainer name="right">
        		<block class="Mageplaza\BetterSlider\Block\Slider" template="Mageplaza_BetterSlider::slider.phtml" banner_id="1" name="mageplaza.betterslider.sidebar.right.top" before="-">
        			<action method="setPosition">
        				<argument name="position" xsi:type="string">sidebar-right-top</argument>
        			</action>
        		</block>
        	</referenceContainer>
        </body>
    </page>



Sidebar Right Bottom
-----------------------


Paste the following content into `default.xml`::

    <?xml version="1.0"?>
    <page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../../lib/internal/Magento/Framework/View/Layout/etc/page_configuration.xsd">
        <body>
        	<referenceContainer name="right">
        		<block class="Mageplaza\BetterSlider\Block\Slider" template="Mageplaza_BetterSlider::slider.phtml" banner_id="1" name="mageplaza.betterslider.sidebar.right.bottom">
        			<action method="setPosition">
        				<argument name="position" xsi:type="string">sidebar-right-bottom</argument>
        			</action>
        		</block>
        	</referenceContainer>
        </body>
    </page>





Sidebar Left Top
-----------------------

Paste the following content into `default.xml`::

    <?xml version="1.0"?>
    <page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../../lib/internal/Magento/Framework/View/Layout/etc/page_configuration.xsd">
        <body>
        	<referenceContainer name="left">
        		<block class="Mageplaza\BetterSlider\Block\Slider" template="Mageplaza_BetterSlider::slider.phtml" banner_id="1" name="mageplaza.betterslider.sidebar.left.top" before="-">
        			<action method="setPosition">
        				<argument name="position" xsi:type="string">sidebar-left-top</argument>
        			</action>
        		</block>
        	</referenceContainer>
        </body>
    </page>



Sidebar Left Bottom
-----------------------

Paste the following content into `default.xml`::

    <?xml version="1.0"?>
    <page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../../lib/internal/Magento/Framework/View/Layout/etc/page_configuration.xsd">
        <body>
        	<referenceContainer name="left">
        		<block class="Mageplaza\BetterSlider\Block\Slider" template="Mageplaza_BetterSlider::slider.phtml" banner_id="1" name="mageplaza.betterslider.sidebar.left.bottom">
        			<action method="setPosition">
        				<argument name="position" xsi:type="string">sidebar-left-bottom</argument>
        			</action>
        		</block>
        	</referenceContainer>
        </body>
    </page>




Bottom of all pages
-----------------------

Paste the following content into `default.xml`::

    <?xml version="1.0"?>
    <page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../../lib/internal/Magento/Framework/View/Layout/etc/page_configuration.xsd">
        <body>
    		<referenceContainer name="before.body.end">
        		<block class="Mageplaza\BetterSlider\Block\Slider" template="Mageplaza_BetterSlider::slider.phtml" banner_id="1" name="mageplaza.betterslider.page.bottom">
        			<action method="setPosition">
    					<argument name="position" xsi:type="string">page-bottom</argument>
        			</action>
        		</block>
        	</referenceContainer>
        </body>
    </page>



Top of all pages
-----------------------

Paste the following content into `default.xml`::

    <?xml version="1.0"?>
    <page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../../lib/internal/Magento/Framework/View/Layout/etc/page_configuration.xsd">
        <body>
    		<referenceContainer name="before.body.end">
        		<block class="Mageplaza\BetterSlider\Block\Slider" template="Mageplaza_BetterSlider::slider.phtml" banner_id="1" name="mageplaza.betterslider.content.top" before="-">
        			<action method="setPosition">
        				<argument name="position" xsi:type="string">content-top</argument>
        			</action>
        		</block>
        	</referenceContainer>
        </body>
    </page>



Top of Menu Navigation
-----------------------

Paste the following content into `default.xml`::

    <?xml version="1.0"?>
    <page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../../lib/internal/Magento/Framework/View/Layout/etc/page_configuration.xsd">
        <body>
    		<referenceContainer name="before.body.end">
        		<block class="Mageplaza\BetterSlider\Block\Slider" template="Mageplaza_BetterSlider::slider.phtml" banner_id="1" name="mageplaza.betterslider.menu.top"  before="-">
        			<action method="setPosition">
        				<argument name="position" xsi:type="string">menu-top</argument>
        			</action>
        		</block>
        	</referenceContainer>
        </body>
    </page>




Top of Menu Navigation
-----------------------

Paste the following content into `default.xml`::

    <?xml version="1.0"?>
    <page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../../lib/internal/Magento/Framework/View/Layout/etc/page_configuration.xsd">
        <body>
    		<referenceContainer name="before.body.end">
        		<block class="Mageplaza\BetterSlider\Block\Slider" template="Mageplaza_BetterSlider::slider.phtml" banner_id="1" name="mageplaza.betterslider.menu.bottom">
        			<action method="setPosition">
        				<argument name="position" xsi:type="string">menu-bottom</argument>
        			</action>
        		</block>
        	</referenceContainer>
        </body>
    </page>




.. include:: ../ad_footer.rst