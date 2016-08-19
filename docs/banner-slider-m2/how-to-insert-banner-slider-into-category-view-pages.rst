How to insert Banner slider into category pages
=========================================================

In this guide, we will show you how to insert a banner slider into category pages

Create a new file call `catalog_category_view.xml` in `app/code/Mageplaza/BetterSlider/view/frontend/layout/` . Full path is `app/code/Mageplaza/BetterSlider/view/frontend/layout/` .
You also can paste the following code into your theme layout.



Sidebar Right Top
-----------------------


Paste the following content into `catalog_category_view.xml`::

  <?xml version="1.0"?>
  <page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../../lib/internal/Magento/Framework/View/Layout/etc/page_configuration.xsd">
    <body>
        <referenceContainer name="sidebar.additional">
            <block class="Mageplaza\BetterSlider\Block\Slider" name="bannerslider.catalog.sidebar.right.top" before="-">
                <action method="setPosition">
                    <argument name="position" xsi:type="string">catalog-sidebar-right-top</argument>
                </action>
                <action method="setCategoryPosition">
                    <argument name="position" xsi:type="string">category-sidebar-right-top</argument>
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

Paste the following content into `catalog_category_view.xml`::

  <?xml version="1.0"?>
  <page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../../lib/internal/Magento/Framework/View/Layout/etc/page_configuration.xsd">
      <body>
          <referenceContainer name="sidebar.additional">
              <block class="Mageplaza\BetterSlider\Block\Slider" name="bannerslider.catalog.sidebar.right.bottom">
                  <action method="setPosition">
                      <argument name="position" xsi:type="string">catalog-sidebar-right-bottom</argument>
                  </action>
                  <action method="setCategoryPosition">
                      <argument name="position" xsi:type="string">category-sidebar-right-bottom</argument>
                  </action>
                  <action method="setBannerId">
                      <argument name="banner_id" xsi:type="string">1</argument>
                  </action>
              </block>
          </referenceContainer>
      </body>
  </page>



Sidebar Left Top
--------------------

Paste the following content into `catalog_category_view.xml`::

  <?xml version="1.0"?>
  <page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../../lib/internal/Magento/Framework/View/Layout/etc/page_configuration.xsd">
      <body>
           <referenceContainer name="sidebar.main">
              <block class="Mageplaza\BetterSlider\Block\Slider" name="bannerslider.catalog.sidebar.left.top" before="-">
                  <action method="setPosition">
                      <argument name="position" xsi:type="string">catalog-sidebar-left-top</argument>
                  </action>
                  <action method="setCategoryPosition">
                      <argument name="position" xsi:type="string">category-sidebar-left-top</argument>
                  </action>
                  <action method="setBannerId">
                      <argument name="banner_id" xsi:type="string">1</argument>
                  </action>
              </block>
          </referenceContainer>
      </body>
  </page>


Sidebar Left Bottom
--------------------

Paste the following content into `catalog_category_view.xml`::

  <?xml version="1.0"?>
  <page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../../lib/internal/Magento/Framework/View/Layout/etc/page_configuration.xsd">
      <body>
           <referenceContainer name="sidebar.main">
              <block class="Mageplaza\BetterSlider\Block\Slider" name="bannerslider.catalog.sidebar.left.bottom">
                  <action method="setPosition">
                      <argument name="position" xsi:type="string">catalog-sidebar-left-bottom</argument>
                  </action>
                  <action method="setCategoryPosition">
                      <argument name="position" xsi:type="string">category-sidebar-left-bottom</argument>
                  </action>
                  <action method="setBannerId">
                      <argument name="banner_id" xsi:type="string">1</argument>
                  </action>
              </block>
          </referenceContainer>
      </body>
  </page>


Begin of Content
--------------------

Paste the following content into `catalog_category_view.xml`::

  <?xml version="1.0"?>
  <page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../../lib/internal/Magento/Framework/View/Layout/etc/page_configuration.xsd">
    <body>
        <referenceContainer name="content">
          <block class="Mageplaza\BetterSlider\Block\Slider" name="bannerslider.catalog.content.top" before="-">
              <action method="setPosition">
                  <argument name="position" xsi:type="string">catalog-content-top</argument>
              </action>
              <action method="setCategoryPosition">
                  <argument name="position" xsi:type="string">category-content-top</argument>
              </action>
              <action method="setBannerId">
                  <argument name="banner_id" xsi:type="string">1</argument>
              </action>
          </block>
        </referenceContainer>
    </body>
  </page>
  
  
End of Content
--------------------

Paste the following content into `catalog_category_view.xml`::

  <?xml version="1.0"?>
  <page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../../lib/internal/Magento/Framework/View/Layout/etc/page_configuration.xsd">
    <body>
        <referenceContainer name="content">
          <block class="Mageplaza\BetterSlider\Block\Slider" name="bannerslider.catalog.content.bottom" before="+">
              <action method="setPosition">
                  <argument name="position" xsi:type="string">catalog-content-bottom</argument>
              </action>
              <action method="setCategoryPosition">
                  <argument name="position" xsi:type="string">category-content-bottom</argument>
              </action>
              <action method="setBannerId">
                  <argument name="banner_id" xsi:type="string">1</argument>
              </action>
          </block>
        </referenceContainer>
    </body>
  </page>
