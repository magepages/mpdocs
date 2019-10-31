# Shipping Cost

## Overview

The Mageplaza Shipping Cost extension supports block of estimated shipping method and shipping fee according to the location selected by the customer before checking out.

Shipping fee is calculated according to each product and its quantity. In addition, the extension also supports calculating the shipping cost of the product along with the products currently in the cart right on the product detail page.

Mageplaza Shipping Cost is fully compatible with extensions: [Mageplaza Multiple Shipping Flat Rates](https://www.mageplaza.com/magento-2-multi-flat-rates-shipping/), [Mageplaza Table Rate Shipping](https://www.mageplaza.com/magento-2-table-rate-shipping/), [Mageplaza Shipping Rules](https://www.mageplaza.com/magento-2-shipping-rules/), [Mageplaza Shipping Restrictions](https://www.mageplaza.com/magento-2-shipping-restrictions/), [Mageplaza GeoIP](https://www.mageplaza.com/magento-2-geoip/)

## How to Use

With the extension, customer can do the following actions:

### Estimate shipping fee for each product

![](https://i.imgur.com/QKN4vJ4.png)

### Estimate shipping fee for the product by product Qty

![](https://i.imgur.com/QjZVCP3.png)

### Estimate shipping fee for the product along with the products available in the cart

![](https://i.imgur.com/fu8tvsS.png)

![](https://i.imgur.com/ThAjLL3.png)


## How to Configure

Go to `Store > Settings > Configuration > Mageplaza Extensions > Shipping Cost`

![](https://i.imgur.com/hMYGPC3.png)

### 1. Configuration
#### 1.1 General

![](https://i.imgur.com/Lc0hr4u.png)

- **Enable**: Select **Yes** to enable the module
- **Shipping Calculator Title**: Set the title for the estimated calculator and show the shipping cost on the product page.
- **Shipping Calculator Description**: Set the description for the estimated calculator and show the shipping price on the product page.
- **"Not Found" Message**: Set a notification to display when no shipping method is found to be satisfied.
- **Apply For Country**: Set the countries that support estimated calculator of shipping on the product page.

![](https://i.imgur.com/WNMSBng.png)

- **Show Shipping Calculator**: Set the position to display shipping cost. The extension is currently supported in 2 positions: **Under Product Description** and in the **Additional tab**
- **Display Address Fields**: Select the fields related to the address allowed to be displayed for shipping.
- **Use Popup**: Select **Yes** to use popup add/change shipping address.
- **Apply to Product Pages**: Set condition to select the product pages displayed shipping calculator. Leave it blank, default shipping calculator is displayed on all product detail pages.

#### 1.2 Default Address

![](https://i.imgur.com/KtzT19k.png)

- The default Address value displayed on the product detail page recorded according to the customer's Default Address, IP Address and the value set on this tab.
- To be able to get customers' addresses by IP Address, please install [GeoIP Mageplaza](https://www.mageplaza.com/magento-2-geoip/).

- **Country**: Select the default Country
- **State/Province**: Choose the default State/Province 
- **Zip/Postcode**: Select the default Zip/Postcode

### 2. Frontend

#### Display Shipping Cost under Product Description

![](https://i.imgur.com/vZOa2is.png)

#### Show Shipping Cost at Additional Tab

![](https://i.imgur.com/NP75jpg.png)

#### Use Popup to display the Address fill form

![](https://i.imgur.com/qTRmmXG.png)

#### Display the Address form directly

![](https://i.imgur.com/hIzJ5bk.png)

#### Customers can calculate shipping fee by product quantity

![](https://i.imgur.com/jv2FtlQ.png)

![](https://i.imgur.com/f575T8D.png)

#### Customers can calculate shipping fee of the product they are viewing with the products currently in Cart

![](https://i.imgur.com/HioIvFf.png)

![](https://i.imgur.com/PQB6x0Q.png)
