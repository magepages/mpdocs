How to insert Banner slider into checkout cart page
=========================================================

In this guide, we will show you how to insert a banner slider into checkout cart page

Create a new file call `checkout_cart_index.xml` in `app/code/Mageplaza/BetterSlider/view/frontend/layout/` . Full path is `app/code/Mageplaza/BetterSlider/view/frontend/layout/checkout_cart_index.xml` .
You also can paste the following code into your theme layout.
    .. note::
        - You also can create the xml file in theme folder or copy into an other module.
        - `banner_id` value should be changed to your own.
        - Default path: `app/code/Mageplaza/BetterSlider/view/frontend/layout/`



Begin of checkout cart page content
-------------------------------


Paste the following content into `checkout_cart_index.xml`::

  <?xml version="1.0"?>
  <page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../../lib/internal/Magento/Framework/View/Layout/etc/page_configuration.xsd">
    <body>
        <referenceContainer name="content">
            <block class="Mageplaza\BetterSlider\Block\Slider" template="Mageplaza_BetterSlider::slider.phtml" name="bannerslider.cart.content.top" before="-">
                <action method="setPosition">
                    <argument name="position" xsi:type="string">cart-content-top</argument>
                </action>
                <action method="setBannerId">
                    <argument name="banner_id" xsi:type="string">1</argument>
                </action>
            </block>
        </referenceContainer>
    </body>
  </page>
  
  
End of checkout cart page content
---------------------------------
  
Paste the following content into `checkout_cart_index.xml`::

  <?xml version="1.0"?>
  <page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../../lib/internal/Magento/Framework/View/Layout/etc/page_configuration.xsd">
    <body>
        <referenceContainer name="content">
            <block class="Mageplaza\BetterSlider\Block\Slider" template="Mageplaza_BetterSlider::slider.phtml"
                   name="bannerslider.cart-content-bottom" before="+">
                <action method="setPosition">
                    <argument name="position" xsi:type="string">cart-content-bottom</argument>
                </action>
                <action method="setBannerId">
                    <argument name="banner_id" xsi:type="string">2</argument>
                </action>
            </block>
        </referenceContainer>
    </body>
  </page>
  
.. include:: ../ad_footer.rst