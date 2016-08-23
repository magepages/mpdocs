How to insert product slider in thank you page
===============================================

Handle: checkout_onepage_success

File: `checkout_onepage_success.xml`

Path: `app\code\Mageplaza\Productslider\view\frontend\layout\checkout_onepage_success.xml``::



<?xml version="1.0"?>
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" layout="2columns-left"
      xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <head>
        <css src="Mageplaza_Productslider::css/product-item.css"/>
        <css src="Mageplaza_Productslider::css/owl.carousel.css"/>
        <css src="Mageplaza_Productslider::css/owl.carousel.min.css"/>
        <css src="Mageplaza_Productslider::css/owl.theme.default.min.css"/>
        <css src="Mageplaza_Productslider::css/owl.theme.green.min.css"/>
        <css src="Mageplaza_Productslider::css/owl.theme.green.min.css"/>
    </head>
    <body>
        <referenceContainer name="content">
            <block class="Mageplaza\Productslider\Block\CategoryId" name="product.slider.category"
                   template="productslider.phtml">
                <arguments>
                    <argument name="loop" xsi:type="string">1</argument>
                    <argument name="category_id" xsi:type="string">12</argument>
                    <argument name="products_count" xsi:type="string">8</argument>
                    <argument name="heading" xsi:type="string">Category Id</argument>
                    <argument name="description" xsi:type="string">Here is your category description</argument>
                </arguments>
            </block>
        </referenceContainer>
    </body>
</page>



Arguments
------------

- `loop` :  your slider can loop infinite or not.
- `category_id` :  your category id you want to display it's product.
- `products_count` :  your amout  products you want to display.
- `heading` :  your heading.
- `description` :  your decription to your products.