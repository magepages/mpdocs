How to insert Banner slider into cms page
=========================================================

In this guide, we will show you how to insert a banner slider into cms page

Create a new file call `cms_index_index.xml` in `app/code/Mageplaza/BetterSlider/view/frontend/layout/` . Full path is `app/code/Mageplaza/BetterSlider/view/frontend/layout/` .
You also can paste the following code into your theme layout.


Begin of Content
-----------------------


Paste the following content into `cms_index_index.xml`::

  <?xml version="1.0"?>
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
  
  
End of Content
-----------------------


Paste the following content into `cms_index_index.xml`::

  <?xml version="1.0"?>
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
  
  
You also can paste the following code into your content of cms page in admin. Path is `Content->Elements->Pages->Home Page->Edit->Content`

Paste the following content into content of cms page::

  {{block class="Mageplaza\BetterSlider\Block\Slider" template="Mageplaza_BetterSlider::slider.phtml" banner_id="2" position="cms-page-content-top" }}
  
Or paste the follwing content into Layout Update XML of CMS design. Path is `Content->Elements->Pages->Home Page->Edit->Design`:

Begin of content
------------------

  <referenceContainer name="content">
    <block class="Mageplaza\BetterSlider\Block\Slider" template="Mageplaza_BetterSlider::slider.phtml" before="-">
      <arguments>
        <argument name="banner_id" xsi:type="number">2</argument>
        <argument name="position" xsi:type="string">cms-page-content-top</argument>
      </arguments>
    </block>
  </referenceContainer>
  
  
End of content
------------------

  <referenceContainer name="content">
    <block class="Mageplaza\BetterSlider\Block\Slider" template="Mageplaza_BetterSlider::slider.phtml" after="-">
      <arguments>
        <argument name="banner_id" xsi:type="number">2</argument>
        <argument name="position" xsi:type="string">cms-page-content-bottom</argument>
      </arguments>
    </block>
  </referenceContainer>





