I. Configuration 
******
Login to your Magento 2 backend ``Stores > Settings > Configurations > Mageplaza Extension: SEO``, follow our given guide below to complete those SEO configurations

* General
* Duplicate Content
* Structure Data
* Business Information
* Social Profiles
* Verifications
* HTML Sitemap
* XML Sitemap
* Canonical URLs
* Redirects
* SEO Rules

1.1. General Configuration
-----

Choose **Enable** = "Yes" to turn Mageplaza SEO on generally.

.. image:: https://i.imgur.com/lKwEQTy.png

1.2. Duplicate Content
-----
Filtering results (from layered navigation pages, etc) is the main cause of generating many similar URLs, and search crawlers assess them are all the same, in other words, it's called duplicate content. Therefore, you must have the assist from Canonical tags to reduce the duplication of content on the page, this is an onpage SEO tip to note obviously.

.. image:: https://i.imgur.com/KH3mlP6.png

* In the **Use Canonical Link Meta Tag For Categories** field: Choose "Yes" to display Canonical tags of Category pages which are from Source Category on the frontend.

.. image:: https://i.imgur.com/J9NZ3O3.png

* In the **Use Canonical Link Meta Tag For Products** field: Choose "Yes" to display Canonical tags of Source Product on the frontend.

.. image:: https://i.imgur.com/5fqHgqY.png

1.3. Structure Data
-----

.. image:: https://i.imgur.com/5kNGITM.png

* In the **Enable Product Structured Data** field:
  
  * Select "Yes" to display the basic information of products when they are searched by search engines.
  * By this intuitive design, Product Structured Data will increase click through rate (CTR) drastically. Thus, products from your store will be ranked higher on search results.
  * You can check Product Structure Data at the Page Source of Product Detail Page. Structure Data will mirror exactly as the basic information of that product.

* In the **Enable Sitelinks Searchbox** field:
  
  * Select "Yes" to display your store's Searchbox on the Sitelinks. As soon as your store displays on the search results, your store searchbox will also display with the store's link.
  * You can test the code in Page Source of Homepage.

1.4. Business Information
-----

.. image:: https://i.imgur.com/pLWFVE5.png

* In the **Enable Bussiness Information** field: Select "Yes to display information about your business in the search result.
* When you leave any field blank, the information for that field will not display.
* You can test the code in Page Source of Homepage.

1.5. Social Profiles 
-----

.. image:: https://i.imgur.com/35Y5jdw.png

* You can paste your social addresses in here. Make sure that all the accounts have been verified.
* Social Profile will display along with Business Information. If Business Information is not enabled, Social Profile won't display in search results.
* You can leave unnecessary Social Profiles in blank status. 
* When the searcher clicks on one of your social links, they will be redirected to that social page of your store.
* You can test the code in Page Source of Homepage

1.6. Verifications
-----

In the **Verification** field, you need to enter the verification code to confirm the ownership of your site. Hence, you can use the Web services such as Google Search Console, Bing Webmaster Tools, Pinterest and Yandex Webmaster Tools.

.. image:: https://i.imgur.com/DNu7Rba.png

* In the **Google Search Console** field: Enter the verification code for Google Search Console.
* In the **Bing Webmaster Tools** field: Enter the verification code for Bing Webmaster Tools.
* In the **Pinterest** field: Enter the verification code for Pinterest.
* In the **Yandex Webmaster Tools** field: Enter the verification code for Yandex Webmaster Tools.

1.7. HTML Sitemap
-----
To use this function, you need to install [Mageplaza Sitemap extension](https://www.mageplaza.com/magento-2-google-sitemap/)


This HTML sitemap configuration contains Categories Sitemap, Pages Sitemap, and Products Sitemap, while all of them can be displayed in the footer of your page. You can see the settings in the following screenshots:

.. image:: https://i.imgur.com/cmRrPR9.jpg

* In the **Enable HTML Sitemap**: choose “Yes” if you want to enable HTML Sitemap. New related HTML Sitemap modules will be expanded automatically
* In the **Enable Categories Sitemap**: choose “Yes” if you want to display all pages in categories.
* In the **Enable Pages Sitemap** field:  choose “Yes” if you want to display all pages in the website.
* In the **Enable Products Sitemap** field: choose “Yes” if you want to display all product pages.
* In the **Enable Additional Links** field: if you have a tons of link which can’t be automatically inserted into HTML file, choose “Yes” to enable this permission.
* In the **Additional Links** box: Paste additional links you want to add.
* In the **Add Sitemap Link to Footer** field: choose “Yes” if you want to enable the advance HTML Sitemap in the footer of pages.

1.8. XML Sitemap
-----
To use this function, you need to install [Mageplaza Sitemap extension](https://www.mageplaza.com/magento-2-google-sitemap/)

Right under the HTML Sitemap’s configuration is XML Sitemap’s settings

.. image:: https://i.imgur.com/CtlcZHQ.png

XML Sitemap is a ``.xml`` map of your website and the map will show a list of the page that the visitors can access. Under the **XML Sitemap** section, you can:

* Create `Homepage Optimization` when choosing "Yes"
* In case you need additional links, it is required to set `Enable Additional Links` to "Yes"

1.9. Canonical URLs
-----
If the content of your site has the same article with others, search engines will underestimate the quality of your content and thus reduce the ranking of your website. Therefore, you must have a Canonical tags to reduce the duplication of content on the page, this is an onpage SEO tips which should be noted.

Expand **Canonical URLs** configuration to see basic modules:

.. image:: https://i.imgur.com/JaBXSnr.jpg

* In the **Add Canonical URL Meta Header** field: Choose “Yes” if you want to add canonical URL for Meta Header Tags
* In the **Disable Canonical URL for Pages with NOINDEX robots** field: Choose “No” if you want to disable all canonical URL for pages with NOINDEX robots since it’s not good for your SEO procedure (eg Search Pages, 404 Pages, etc)
* In the **Don’t use Canonical URL for these pages** field: Default option is “No”. Entered pages won't display Canonical URL.

1.10. Redirects
-----
Scroll until **Redirect**’s general configuration reaches your eyes.

.. image:: https://i.imgur.com/oP8H7hC.jpg

* In the **Enable Redirects** field: choose “Yes” to allow this function to work.
* In the **Better 404 Page** field: choose “Yes” if you want all 404 Pages to be redirected to your Homepage.

An additional user guide for Redirects can be found here 

1.11. SEO Rules
-----
Head forward to ``Mageplaza > SEO: Configuration > SEO Rules`` in order to take the basic control for Rules generally.

.. image:: https://i.imgur.com/igYOR62.jpg

* In the **Enable SEO Rules** field: Choose “Yes” to enable all set SEO rules
* In the **Use H1 Heading for Product Pages** field: Select “Yes” if you want to apply H1 Heading for Product Pages.
* In the **Use H1 Heading for Category Pages** field: Choose “Yes” if you want to apply H1 Heading for Category Pages.
* In the **Enable Automatic Alt Image** field: The required alt attribute specifies an alternate text for an image, if the image cannot be displayed. Choose “Yes” to enable this function”

II. Manage Rules
******
To add a new rule, please follow the path ``Marketing > SEO: Manage Rules``, click on ``Add Rule`` button, choose one type of page you want to create a new rule apply for:

* Product Pages
* Category Pages
* CMS Pages
* Layered Navigation 

**Note**: There existed ``Default: Layered Navigation`` in the Rule Management. This rule's function is for fixing filtered result's title like this below screenshot. It can't be eliminated. However, you can Enable/Disable or modify the rule as your favor. 

.. image:: https://i.imgur.com/kgZfntk.png

In this below guide, let’s take a try with the **Product Pages**

.. image:: https://i.imgur.com/dJNKqIl.gif

A new rule information page appears. Fill all required information which are divided into 4 parts at the sidebar, please follow those explanation for each field 

2.1 Rule Information
----- 

.. image:: https://i.imgur.com/kYi9UcX.jpg

* In the **Name** field: Enter a Rule Name
* In the **Status** field: Set Status to “Enable” for the active rule
* In the **Store view** field: Choose Store View where the rule is applied
* In the **Priority** field: Set Priority number, 0 is the highest level.

2.2 Conditions
-----

It’s pretty easy to add/remove its content

.. image:: https://i.imgur.com/lq7XKY8.gif

2.3 Actions
-----

.. image:: https://i.imgur.com/VpRSaln.jpg

* In the **Meta Title Template** box: Enter the Meta Tile Template
* In the **Meta Description Template** box: Enter the Meta Tile Template. Use following syntax to add dynamic meta title: ``{{name}}, {{price}}, {{special_price}}``.
* In the **Meta Keywords Template** field: Enter the Meta Keywords Template. It should be between 3-5 keywords. Use following syntax to add dynamic meta title: ``{{name}}, {{price}}, {{special_price}}``.
* In the **Robot Template** field: Select Robots Template from one of the options to set the index permission for search engine’s robots:
  * Index, Follow
  * NoIndex, Follow
  * Index, NoFollow
  * NoIndex, NoFollow
* In the **Apply Template** field there are two modes:
  * “Skip if already defined” means if admin manually added meta tag: title, description, so it will not apply this template.
  * “Force Update” means auto-applying the template for all meta tags

2.4 Preview
-----
This is the final step where you can check the result after setting up a bunch of required information. For example, it will appear like this

.. image:: https://i.imgur.com/Lkf36y2.png


The rule form and its action of the rest Category Pages, CMS Pages or Layered Navigation is pretty similar to the Product Page’s form

Editing template rule form is the same with creating a new one. At ``Marketing > SEO: Manage Rules`` choose **Edit** the rule you want to alter. Remember to clicl on ``Apply Rules``every time you edit a rule to apply it properly.

III. SEO Tools 
******
This add-on tool will assist SEO extension in assessing and marking which and how to perform the structured data at the best for SEO progress. You can have a general review for the SEO analysis at the Product Page, Category Page and CMS Page.

For example with a product:

* Go to ``Product > Catalog``, choose **Edit** a random one.
* Choose ``Check On-page`` button at the header

.. image:: https://i.imgur.com/KMgxwbE.png

* The page will be directed to SEO Tool page for the check execution.

.. image:: https://i.imgur.com/3ZhKADM.png

* After the checking done, SEO Tool will show assessed results of that product page's SEO. There're some fundamental standards are built from our intuitive knowledge so feel free to knock us a word if you want to discuss further regarding this issue.

.. image:: https://i.imgur.com/q360k9W.png

* Apply the same action with Category Page and CMS Page.



