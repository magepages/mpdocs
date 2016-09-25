How to insert Banner slider into product view pages
=========================================================

In this guide, we will show you how to insert a banner slider into product view pages

Create a new file call `catalog_product_view.xml` in `app/code/Mageplaza/BetterSlider/view/frontend/layout/` . Full path is `app/code/Mageplaza/BetterSlider/view/frontend/layout/catalog_product_view.xml` .
You also can paste the following code into your theme layout.
    .. note::
        - You also can create the xml file in theme folder or copy into an other module.
        - `banner_id` value should be changed to your own.
        - Default path: `app/code/Mageplaza/BetterSlider/view/frontend/layout/`



Sidebar Right Top
-----------------------


Paste the following content into `catalog_product_view.xml`::

  <?xml version="1.0"?>
  <page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../../lib/internal/Magento/Framework/View/Layout/etc/page_configuration.xsd">
    <body>
        <referenceContainer name="sidebar.additional">
            <block class="Mageplaza\BetterSlider\Block\Slider" name="bannerslider.product.sidebar.right.top" before="-">
                <action method="setPosition">
                    <argument name="position" xsi:type="string">product-sidebar-right-top</argument>
                </action>
                <action method="setBannerId">
                    <argument name="banner_id" xsi:type="string">1</argument>
                </action>
            </block>
        </referenceContainer>
    </body>
  </page>
  
  
Sidebar Right Bottom
-----------------------


Paste the following content into `catalog_product_view.xml`::

  <?xml version="1.0"?>
  <page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../../lib/internal/Magento/Framework/View/Layout/etc/page_configuration.xsd">
    <body>
        <referenceContainer name="sidebar.additional">
            <block class="Mageplaza\BetterSlider\Block\Slider" name="bannerslider.product.sidebar.right.bottom">
                <action method="setPosition">
                    <argument name="position" xsi:type="string">product-sidebar-right-bottom</argument>
                </action>
                <action method="setBannerId">
                    <argument name="banner_id" xsi:type="string">1</argument>
                </action>
            </block>
        </referenceContainer>
    </body>
  </page>
  
  
Sidebar Left Top
-----------------------


Paste the following content into `catalog_product_view.xml`::

  <?xml version="1.0"?>
  <page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../../lib/internal/Magento/Framework/View/Layout/etc/page_configuration.xsd">
    <body>
        <referenceContainer name="sidebar.main">
            <block class="Mageplaza\BetterSlider\Block\Slider" name="bannerslider.product.sidebar.left.top" before="-">
                <action method="setPosition">
                    <argument name="position" xsi:type="string">product-sidebar-left-top</argument>
                </action>
                <action method="setBannerId">
                    <argument name="banner_id" xsi:type="string">1</argument>
                </action>
            </block>
        </referenceContainer>
    </body>
  </page>
  
Sidebar Left Bottom
-----------------------


Paste the following content into `catalog_product_view.xml`::

  <?xml version="1.0"?>
  <page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../../lib/internal/Magento/Framework/View/Layout/etc/page_configuration.xsd">
    <body>
        <referenceContainer name="sidebar.main">
            <block class="Mageplaza\BetterSlider\Block\Slider" name="bannerslider.product.sidebar.left.bottom">
                <action method="setPosition">
                    <argument name="position" xsi:type="string">product-sidebar-left-bottom</argument>
                </action>
                <action method="setBannerId">
                    <argument name="banner_id" xsi:type="string">1</argument>
                </action>
            </block>
        </referenceContainer>
    </body>
  </page>
  
  
Begin of Content
-----------------------


Paste the following content into `catalog_product_view.xml`::

  <?xml version="1.0"?>
  <page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../../lib/internal/Magento/Framework/View/Layout/etc/page_configuration.xsd">
    <body>
        <referenceContainer name="content">
            <block class="Mageplaza\BetterSlider\Block\Slider" name="bannerslider.product.content.top" before="-">
                <action method="setPosition">
                    <argument name="position" xsi:type="string">product-content-top</argument>
                </action>
                <action method="setBannerId">
                    <argument name="banner_id" xsi:type="string">1</argument>
                </action>
            </block>
        </referenceContainer>
    </body>
  </page>
  
  
End of Content
-----------------------


Paste the following content into `catalog_product_view.xml`::

  <?xml version="1.0"?>
  <page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../../lib/internal/Magento/Framework/View/Layout/etc/page_configuration.xsd">
    <body>
        <referenceContainer name="content">
            <block class="Mageplaza\BetterSlider\Block\Slider" name="bannerslider.product.content.bottom" before="+">
                <action method="setPosition">
                    <argument name="position" xsi:type="string">product-content-bottom</argument>
                </action>
                <action method="setBannerId">
                    <argument name="banner_id" xsi:type="string">1</argument>
                </action>
            </block>
        </referenceContainer>
    </body>
  </page>


.. include:: ../ad_footer.rst