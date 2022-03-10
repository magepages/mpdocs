# GDPR

## Overview 
GDPR principle was created to protect customer data. In a nutshell, GDPR establishes a clear set of rules about which regulations businesses can operate in relation to the process of executing customer data. With these new rules, boundaries are easier to understand for both businesses and consumers, which will facilitate earning money and retain customer loyalty.

In order to capture the EU data protection standards, Mageplaza has released a new extension for this standard. That's the GDPR module. Magento 2 GDPR module will assist you deleting customer data permanently, to ensure your GDPR regulation compliance.

Note: **[Update GDPR to the higher version here](https://www.mageplaza.com/faqs/can-i-upgrade-my-standard-edition-to-higher-package.html)**

## How to Configure
From the Admin Panel, go to ``Store > Settings > Configuration > Mageplaza Extensions > GDPR``

![](https://i.imgur.com/YGJmKZh.png)

Check in **General** to learn the basic configuration of the module

![](https://i.imgur.com/4cB3TrU.png)

* In the **Enable** field: Choose "Yes" to turn the module on.
* In the **Allow Delete Customer Account**: Choose "Yes" to allow customers can delete their account by themselves.
* In the **Delete message** field
  * Enter the message displayed when customers are going to delete their account.
  * Custom message is supported by HTML code.

![](https://i.imgur.com/SuWVlKw.png)

* In the **Allow Delete Default Address** field: Choose "Yes" to allow customers can delete their default address.

![](https://i.imgur.com/CccsEGQ.png)





## Must-have extensions for your Magento stores

- Increase website traffic: [SEO](https://www.mageplaza.com/magento-2-seo-extension/)
- [Build leads](https://www.mageplaza.com/magento-2-better-popup/)
- Increase conversion rates: [One Step Checkout](https://www.mageplaza.com/magento-2-one-step-checkout-extension/), [Layered Navigation](https://www.mageplaza.com/magento-2-layered-navigation-extension/)
- We believe that you can sell more: [Gift Cards](https://www.mageplaza.com/magento-2-gift-card-extension/), [Auto Related Products](https://www.mageplaza.com/magento-2-automatic-related-products/), [Frequently Bought Together](https://www.mageplaza.com/magento-2-frequently-bought-together/), [Free shipping bar](https://www.mageplaza.com/magento-2-free-shipping-bar/), [Daily Deal](https://www.mageplaza.com/magento-2-daily-deal-extension/) , [Product Feed](https://www.mageplaza.com/magento-2-product-feed-extension/)
- Keep customers return: [Reward Points](https://www.mageplaza.com/magento-2-reward-points-extension/)
- Let your customer [become raving fans](https://www.mageplaza.com/magento-2-affiliate-extension/)
- Optimize your stores: [PDF Invoice](https://www.mageplaza.com/magento-2-pdf-invoice-extension/), [Custom Order Number](https://www.mageplaza.com/magento-2-custom-order-number/), [Stop return items issue](https://www.mageplaza.com/magento-2-size-chart/)

## API

Mageplaza’s GDPR extension allows using Rest API to view configuration.

Details can be viewed <a href="https://documenter.getpostman.com/view/10589000/UVsEW9P3" target="_blank" rel="nofollow noopener">here</a>.

Instructions for creating Integration tokens <a href="https://devdocs.magento.com/guides/v2.3/get-started/authentication/gs-authentication-token.html" target="_blank" rel="nofollow noopener">here</a>

## GraphQL

Run the following command in Magento 2 root folder:

`composer require mageplaza / module-gdpr-graphql`

`php bin / magento setup: upgrade`

`php bin / magento setup: static-content: deploy`

To start working with **Call For Price GraphQL** in Magento, you need to:
- Use Magento 2.3.x. Return your site to developer mode
- Install the <a href="https://chrome.google.com/webstore/detail/chromeiql/fkkiamalmpiidkljmicmjfbieiclmeij?hl=en" target="_blank" rel="nofollow noopener">Chrome extension</a> (currently does not support other browsers)
- Set GraphQL endpoint as `http://<magento2-3-server>/graphql` in url box, click **Set endpoint**. (e.g. http://develop.mageplaza.com/graphql/ce232/graphql)
- The mutation Mageplaza supports is creating customer requests,etc. Details can be viewed <a href="https://documenter.getpostman.com/view/10589000/UVsEW9P2" target="_blank" rel="nofollow noopener">here</a>.
