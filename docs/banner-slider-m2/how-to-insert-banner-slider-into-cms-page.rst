How to insert Banner slider into cms page
=========================================================

In this guide, we will show you how to insert a banner slider into cms page

Create a new file call `cms_index_index.xml` in `app/code/Mageplaza/BetterSlider/view/frontend/layout/` . Full path is `app/code/Mageplaza/BetterSlider/view/frontend/layout/` .
You also can paste the following code into your theme layout.



Begin Of Content
-----------------------


Paste the following content into `cms_index_index.xml`::

  <page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../../lib/internal/Magento/Framework/View/Layout/etc/page_configuration.xsd">
    <body>
        <referenceContainer name="content">
            <block class="Mageplaza\BetterSlider\Block\Slider" template="Mageplaza_BetterSlider::slider.phtml" name="bannerslider.cms.page.content.top" before="-">
                <action method="setPosition">
                    <argument name="position" xsi:type="string">cms-page-content-top</argument>
                </action>
                <action method="setBannerId">
                    <argument name="banner_id" xsi:type="string">2</argument>
                </action>
            </block>
        </referenceContainer>
    </body>
  </page>
  
  
End Of Content
-----------------------


Paste the following content into `cms_index_index.xml`::

  <page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../../lib/internal/Magento/Framework/View/Layout/etc/page_configuration.xsd">
    <body>
        <referenceContainer name="content">
            <block class="Mageplaza\BetterSlider\Block\Slider" template="Mageplaza_BetterSlider::slider.phtml" name="bannerslider.cms.page.content.bottom" before="+">
                <action method="setPosition">
                    <argument name="position" xsi:type="string">cms-page-content-bottom</argument>
                </action>
                <action method="setBannerId">
                    <argument name="banner_id" xsi:type="string">2</argument>
                </action>
            </block>
        </referenceContainer>
    </body>
  </page>
  
  
