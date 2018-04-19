# Better Coupon

## Overview
Imagine those scenarios: Store owners desire to generate a one-time use coupon per customer, but it takes at least 5 minutes to make a new one manually? Or take another look at this case: the coupon codes generated in Magento 2 isn't matched with the current discount program, either they can't import their pre-made coupon codes into Magento 2 system unfortunately. Consuming time tasks are coming up more, you have no idea how to give the applied coupon checkout link to customers so that they don't need to ask and enter the coupon every time they come to your store?

All disturbing issues now can be remedied by only one proficient plugin. Better Coupon extension, supplied by Mageplaza, is designed to craft many coupons timely and send them over customers via emails just by one click. And the configurations seems cannot be easier if you can follow this documentation carefully.

```
  * This extension can be used in multiple stores.
  * All stores will be configured under Default Configuration.
  * To change the configuration of each store, admins have to uncheck "Use Website" at the left of each Option.
  * Extension’s configuration in each store will be applied to the selected store.
  * Configuration of this store won’t take impact on the other store’s configuration.
```

## How to configure 
From the Admin Panel, go to ``Store > Settings > Configuration > Mageplaza Extensions: Better Coupon``

![bettercoupon1](https://i.imgur.com/k6iqSnV.png)

### I. Configuration
#### 1.1. General configuration
After entering the module's configuration, you will find the General configuration to turn the module on/off generally. Choose "Yes" to enable the Better Coupon extension.

![bettercoupon2](https://i.imgur.com/9OHyYIS.png)

#### 1.2. Generate Coupon
##### 1.2.1. Generator

![bettercoupon3](https://i.imgur.com/txNefTh.png)

* In the **Rule** field: 
  * Choose the rule you want to apply for the coupon generator (Rule can be created from ``Marketing > Promotions > Cart Price Rules``)
  * All generated coupons by this module will follow this choosen rule. 
* In the **Qty** field:
  * Enter the quantity of coupon code you want to generate.
  * If you leave it blank or enter 0, the default quantity will be ``1``.
* In the **Coupon Code Pattern** field: Enter your favorable pattern for coupon code(s).
* In the **Email** field: 
  * Enter email(s) you want to send coupon code(s).
  * You can enter multiple emails seperated with a commas ``,``
  * All generated coupons by this module will be sent to entered email(s) so make sure change them every time you generate a new series of coupon code(s) for different customers.
* In the **Generate & Send Button** field:
  * Clicking on this button to generate and send configured coupon code(s).
  * The number of success generated coupon code(s) will be informed after clicking.

This is an example of the email informing generated coupon code(s).

![bettercoupon7](https://i.imgur.com/fWCXgTM.png)

##### 1.2.2. Quick Coupon Link Generator 

![bettercoupon4](https://i.imgur.com/BqWYG96.png)

* At the **Pattern** column:
  * Follow this rule to create a pattern: [4A] - 4 alpha, [4N] - 4 numeric, [4AN] - 4 alphanumeric. For example: GIFT-[4AN]-[3A]-[5N] => GIFT-J34T-OEC-54354.
  * If you leave the field blank, pattern coupon code(s) will be generated follow this [12AN] pattern randomly. If the coupon link has default pattern, coupon code(s) will be generated automatically when they reload the link.
  * You can enter a pattern optionally. A new coupon will be generated automatically when you reload the link which has that optional pattern coupon. If you enter the coupon code in this field, the coupon link will generate only that entered coupon code. 
* At the **Access Key** column:
  * You can look at the access key dislaying at URL to learn which rule it belongs to.
  * The access key can be changed. Clicking on the reset icon to change the access key randomly.
* At the **Copy** column:
  * Copy and load the link, there will be inform message when the coupon code has been generated successfully. Give this coupon to customer for the checkout process. 
  * Otherwise, store ownners can insert this ``/email/{email}`` variable into the URL, copy and send the link to customers via email. For example: ``http://mageplaza.com/bettercoupon/generatecoupon/generate/mpAccessKey/6aagq3vsndkqe69jbb/email/mageplaza.test@gmail.com``
* At the **Delete** column: Clicking on the bin icon to delete that coupon link.

```
Every time the quick coupon link is rereshed, a new coupon code is generated automatically. If your customers has this link, they will always has different coupon codes to use (or at least until that coupon code validation is expired) so we would highly recommend the quick coupon link should be shared for internal circulation only.
```

#### 1.3. Coupon link builder

![bettercoupon5](https://i.imgur.com/8hzGOrR.png)

* In the **URL** field: Enter the URL which can be accessed and used coupon code(s) by customers.
* In the **Hash prefix**: 
  * Textual link is recommended to be encrypted by binary data.
  * You can enter a hash prefix optionally
* In the **Coupon** field: Enter the coupon code you have created in [Generator](https://docs.mageplaza.com/better-coupon/#generator) or from ``Marketing > Promotions > Cart Price Rules``.
* **Generate** button: Click to generate the coupon link that when customers access the link, coupon code is applied to the order total already, they don't need to reenter the coupon again.

### II. Import Coupon Code
From the Admin Panel, go to ``Marketing > Promotions > Cart Price Rules > Add New Rule``

#### 2.1. Import by CSV file

![bettercoupon5](https://i.imgur.com/ozLUE2y.png)

You can import a CSV file type which contains coupon code in this section. After selecting and importing the file, coupon code will be added in **Manage Coupon Code**.

#### 2.2. Import by Text Area

![bettercoupon6](https://i.imgur.com/x6RBGnp.png)

Similar to [Importing by CSV file](https://docs.mageplaza.com/better-coupon/index.html#ii-import-coupon-code), coupon codes after being imported can be used normally in **Manage Coupon Code** as well.

* Coupons that are entered in the [**Coupons**](https://docs.mageplaza.com/better-coupon/#coupon-link-builder) field or available coupons in the CSV file must be separated by a line break.
* Whereas the current imported coupon list contains some coupon codes identical to the coupon previously created, duplicated codes will not be added anymore and there will be a message telling the store owner how many coupon codes have been coincident.

### III. API Intergration
Better Coupon extention supports API which means store owners can generate coupon code(s) via Magento 2's API by following this syntax ``domain.com/rest/V1/bettercoupon/rule/id``. For example:

```
http://mageplaza.com/rest/V1/bettercoupon/rule/1 
```

The created coupon link is similar to [The quick coupon link](https://docs.mageplaza.com/better-coupon/#quick-coupon-link-generator), every time the page is refreshed, a new coupon following [12AN] pattern will be generated. Enter the rule ID to decide which rule that coupon code(s) is based on.

You can refer more how to create an API and token-based authentication at [here](http://devdocs.magento.com/guides/v2.0/get-started/authentication/gs-authentication-token.html#web-api-access).


![bettercoupon8](https://i.imgur.com/0EJTJdI.png)
