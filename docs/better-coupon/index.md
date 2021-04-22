# Better Coupon

## Overview
Let's picture this scenario: Store owners desire to generate a one-time use coupon for a customer, but it takes at least 5 minutes to make it manually? Or take another look at this case: the coupon codes generated in Magento 2 do not with the current discount program, either they can't import their pre-made coupon codes into Magento 2 system. Time-consuming tasks are coming up more, you have no idea how to give the applied coupon checkout link to customers so that they don't need to ask and enter the coupon every time they come to your store?

All disturbing issues now can be remedied by only one proficient plugin. Magento 2 Better Coupon extension, supplied by Mageplaza, is designed to craft many coupons and send them over customers via emails just by one click. And the configurations cannot be easier if you can follow this documentation carefully.

## How to download and install

- Download Mageplaza Better Coupon
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


## How to configure 

From the Admin Panel, go to ``Store > Settings > Configuration > Mageplaza Extensions: Better Coupon``

![](https://i.imgur.com/k6iqSnV.png)

### I. Configuration
#### 1.1. General configuration
After entering the module's configuration, you will find the General configuration to turn the module on/off generally. 

![](https://i.imgur.com/9OHyYIS.png)

* Choose "Yes" to enable the Better Coupon extension.
* If you choose "No", you will be able to generate and send coupon(s) by [Generator](http://docs.mageplaza.com/better-coupon/index.html#generator).

#### 1.2. Generate Coupon
##### 1.2.1. Generator

![](https://i.imgur.com/XXGzxII.png)

* In the **Rule** field: 
  * Choose the rule you want to apply for the coupon generator (Rule can be created from ``Marketing > Promotions > Cart Price Rules``)
  * All generated coupons by this module will follow this choosen rule. 
* In the **Qty** field:
  * Enter the quantity of coupon code you want to generate.
  * If you leave it blank or enter 0, the default quantity will be ``1``.
* In the **Coupon Code Pattern** field: Enter your favorable pattern for coupon code(s).
* In the **Send Email** field: Select "Yes" to activate sending coupon(s) via email.
* In the **Send Email From** field: 
  * Choose the store you want to send coupon code(s) from.
  * Store's name will be displayed in the email sending to the customer.
* In the **Email Address** field: 
  * Enter email(s) you want to send coupon code(s).
  * You can enter multiple emails seperated with a commas ``,``
  * All generated coupons by this module will be sent to entered email(s), so remember to change them every time you generate a new series of coupon codes for different customers.
* In the **Email Template** field:
  * Choose the template for the sending email.
  * You can edit/customize the email content at ``Marketing > Email Template``.
* The **Generate** button:
  * Clicking on this button to generate and send configured coupon code(s).
  * The number of success generated coupon code(s) will be informed after clicking.

This is an example of the email for informing generated coupon code(s).

![](https://i.imgur.com/fWCXgTM.png)

##### 1.2.2. Quick Coupon Link Generator 

![](https://i.imgur.com/SLKutBG.png)

* At the **Pattern** column:
  * Follow this rule to create a pattern: [4A] - 4 alpha, [4N] - 4 numeric, [4AN] - 4 alphanumeric. For example: GIFT-[4AN]-[3A]-[5N] => GIFT-J34T-OEC-54354.
  * If you leave the field blank, the default coupon code pattern will be [12AN]. If the coupon link has default pattern, coupon code(s) will be generated automatically when they reload the link.
  * You can enter a pattern optionally. A new coupon will be generated automatically when you reload the link which has that optional pattern coupon. If you enter the coupon code in this field, the coupon link will be generated only that code. 
* At the **Access Key** column:
  * You can look at the access key dislaying at URL to learn which rule it belongs to.
  * Access Key will be generated randomly. Once the key is changed, that coupon link isn't valid anymore.
* At the **Action** column:
  * Copy and load the link, there will be inform message when the coupon code has been generated successfully. Give this coupon to customer for the checkout process. 
  * Otherwise, store ownners can insert this ``/email/{email}`` variable into the URL, copy and send the link to customers via email. For example: ``http://mageplaza.com/mpcoupon/generate/index/key/o1qwunlj94zy74z0kri/email/mageplaza.test@gmail.com``
* At the **Delete** column: Clicking on the bin icon to delete that coupon link.

**Note**: Every time the quick coupon link is rereshed, a new coupon code is generated automatically. If your customers have this link, they will always have different coupon codes to use (or at least until that coupon code validation is expired) so we would highly recommend that the quick coupon link should be shared for internal use only.


#### 1.3. Coupon link builder

![](https://i.imgur.com/hAVd2Gm.png)

* In the **URL** field: Enter the URL which can be accessed and used to have coupon codes auto-applied by customers.
* In the **URL Style** field: There are 2 available options
  * **Parameter**: The URL will look like ``http://example.com/?c=123``
  * **Hash**: The URL will look like: ``http://example.com#c=123``
* In the **Prefix** field: 
  * You can enter a prefix optionally
  * Don't forget saving config and clear cache after changing prefix. Othewise, the coupon link cannot be valid.
* In the **Coupon** field: Enter the coupon code you have created in [Generator](https://docs.mageplaza.com/better-coupon/#generator) or from ``Marketing > Promotions > Cart Price Rules``.
* **Generate** button: Click to generate the coupon link that when customers access the link, coupon code is applied to the order total already, they don't need to re-enter the coupon again.

### II. Import Coupon Code
From the Admin Panel, go to ``Marketing > Promotions > Cart Price Rules > Add New Rule``

#### 2.1. Import by CSV file

![](https://i.imgur.com/HtcOttF.png)

You can import a CSV file type which contains coupon code in this section. After selecting and importing the file, coupon code will be added in **Manage Coupon Code**.

#### 2.2. Import by Text Area

![](https://i.imgur.com/nr24t8s.png)

Similar to [Importing by CSV file](https://docs.mageplaza.com/better-coupon/index.html#ii-import-coupon-code), coupon codes after being imported can be used normally in **Manage Coupon Code** as well.

* If you do not know how to create a coupon code list in a CSV file, you can click on the **Download Sample File** link to download the sample file.
* Coupons that are entered in the [**Coupons**](https://docs.mageplaza.com/better-coupon/#coupon-link-builder) field or available coupons in the CSV file must be separated by a break line or a commas.
* Whereas the current imported coupon list contains some coupon codes identical to the coupon previously created, duplicated codes will not be added anymore and there will be a message telling the store owner how many coupon codes have been coincident.

### III. API Integration
Better Coupon extention supports API Integration which means store owners can generate coupon code(s) via Magento 2's API by following this syntax ``domain.com/rest/V1/bettercoupon/rule/id``. For example:

```
domain.com/rest/V1/mpcoupon/generate/{key}
```
For example:

```
http://mageplaza.com/rest/V1/mpcoupon/generate/ixolofk9q8f4slxggq.
```

The created coupon link is similar to [The quick coupon link](https://docs.mageplaza.com/better-coupon/#quick-coupon-link-generator), every time the page is refreshed, a new coupon following the [12AN] pattern will be generated. Enter the rule ID to decide which rule that coupon code is based on. You can choose key from [Access Key](http://docs.mageplaza.com/better-coupon/index.html#quick-coupon-link-generator) to decide its rule and pattern.

You can learn how to create an API and token-based authentication [here](http://devdocs.magento.com/guides/v2.0/get-started/authentication/gs-authentication-token.html#web-api-access).


![](https://i.imgur.com/kzWLXRG.png)
