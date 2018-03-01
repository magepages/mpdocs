==========
User Guide
==========

Google Tag Manager is a free Google service to update and control all tags for your site quickly, so Magento extension supports to integrate it into Magento stores helping you improve your load site’s speed. Moreover, it is necessary for you to have good experience about coding because codes there are no requests for that but copying and pasting the available Google Tag code onto every your pages of the website.

Set up in Google
-------------------

* Access to https://www.google.com/analytics/tag-manager/ 

.. image:: https://lh3.googleusercontent.com/loimvfrVa_xuwO4cZLRnwX8Qq6n8mUMMh5ZBjHElmTzDX934zhyAQV9NtA2cZhyquD9-BBrcqx_OKU1vgpWOTFApSnRcT-xCB_QWs9w7eCh2nq4eXKXFU5NcNYbGB-iwsc6FSlyS

* Fill out required account information

.. image:: https://lh6.googleusercontent.com/J1tDNOjG10CsCyuzkaDU0X7SrE4Odw21TmvHVMNV-kSliioneEt8wEdV4D9_yujj29gjJAZNE7ujM84_pUzD0Wg1sK5KIUXJOFXo8UDlrkvf0bpFRHtekf0J90CILPzQ5wZPy9R4

* Insert Google Tag Manager code into every page of your site.

.. image:: https://lh5.googleusercontent.com/4ohyJuuSd0g6sTtEwjzsClCtq3_uEl4COfafRm3nSC9UyRDRHFNbeOTkSlK3hl_elXrNli4ryEBoUmb2eUj6851Ot3Kb5RV8rd8aGrkz4Se9SP1oi7PLFYB5MakocMLgU9TbCqIo

* Get Container ID for setting Magento

.. image:: https://lh4.googleusercontent.com/pCgBnfHw71BOHdHfyQ48F_F8j_hD4qCnU5fg1gTBCuPz8UexVAjr4GjXVUwoF4DmcZYY2765VR6rk4K9yxTZ3872nQajXGI2bxlGHyd8QNIaVn4M5Rln4WRJhkd2TwOYx-vGEID3

Set up in Magento
----------------------

Login to **Magento Admin > Google Tag Manager > Settings**

.. image:: https://lh6.googleusercontent.com/yV0h3z5CXAL3SB4rT9stZ9TdUI32QPU3UvNiaL3iqHF0BbDRpOsozMjZn9vWthhItua_IoeZLmEwCQxFBVSNMh1YBGSeU18gzCnilimLKp6Hw1O8L6pd7FoDqxtCiNcj1wuukulk

* Choose **Yes** to enable the module.

* Enter Container ID from Google into **Google Tag ID** field.

Add new Google tags
-----------------------

* In your Google Tag Manager account, you will create new tags with more 20 tag types.

.. image:: https://lh6.googleusercontent.com/_xR_L-1lfPxXBpgr8PfAclUvHcO5KDaqFK_2lauHW1MYDt7ec6ufh4DfcNR3EEPMfcogDwfrP6tAnaby1ZteejhSTGxsuEOFVgv755u_aFJkJq6QhWjwq4q948K79VPTfiWG42py

* Follow 3 steps including Choose Product, Configure Tag and Fire On for successful Google tags

.. image:: https://lh5.googleusercontent.com/VEVp-1dTMe1SGuT-V5zf3CNsT4R8uZMaX7hW5URrLAEtTk3phzI-xAiUvPxoGn4-JIvZ63mv-NIencWJLxd9_cGmVYsfv-OxjUGe2AcprZ8mAYF7T2cdDmQX5QGMLIGRP2lPLMBS



User-defined variables
-----------------------




Product Page product_view
~~~~~~~~~~~~~~~~~~~~~~~~~~~~


```
ecommerce.currencyCode
ecommerce.detail.products.id
ecommerce.detail.products.name
ecommerce.detail.products.sku
ecommerce.detail.products.price
ecommerce.detail.products.brand
ecommerce.detail.products.variant (Color)
ecommerce.detail.products.attribute_set_id
ecommerce.detail.products.attribute_set_name
ecommerce.detail.products.category
ecommerce.detail.products.category_path
```

## Category view: catalog_category_view
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 

```
ecommerce.currencyCode
ecommerce.impressions
ecommerce.impressions.products.id
ecommerce.impressions.products.name
ecommerce.impressions.products.sku
ecommerce.impressions.products.price
ecommerce.impressions.products.brand
ecommerce.impressions.products.variant (Color)
ecommerce.impressions.products.category_path
```


## Checkout page: /checkout/index and  /checkout/cart
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

```
event
ecommerce.checkout.hasItems
ecommerce.checkout.hasCoupon
ecommerce.checkout.coupon
ecommerce.checkout.total

ecommerce.products
ecommerce.products.id
ecommerce.products.name
ecommerce.products.sku
ecommerce.products.price
ecommerce.products.brand
ecommerce.products.variant (Color)
ecommerce.products.quantity
ecommerce.products.attribute_set_id
ecommerce.products.attribute_set_name
```


## Checkout success page: /checkout/onepage/success/
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

```
ecommerce.purchase.actionField.coupon
ecommerce.purchase.actionField.id
ecommerce.purchase.actionField.affiliation
ecommerce.purchase.actionField.order_id
ecommerce.purchase.actionField.subtotal
ecommerce.purchase.actionField.shipping
ecommerce.purchase.actionField.tax
ecommerce.purchase.actionField.total
ecommerce.purchase.actionField.discount
ecommerce.products.id
ecommerce.products.name
ecommerce.products.sku
ecommerce.products.price
ecommerce.products.brand
ecommerce.products.variant (Color)
ecommerce.products.quantity
ecommerce.products.attribute_set_id
ecommerce.products.attribute_set_name
```
