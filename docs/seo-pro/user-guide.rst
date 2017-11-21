I. Configuration
=====
To enable/disable the SEO module on/off, make yourself a way to ``Mageplaza > SEO: Configuration``, look at the left sidebar and choose ``Advanced > Advanced``, scroll until you nearly reach the end of page and choose “Yes”/”No” to turn the module on/off.

.. image:: https://i.imgur.com/yqv9eXw.gif

Don’t forget to click ``Save Config`` after changing.

1.1 Verifications
-----
Go to ``Mageplaza > SEO: Configuration > Verification``

In the **Verification** field, you need to enter the verification code to confirm the ownership of your site. Hence, you can use the Web services such as Google Search Console, Bing Webmaster Tools, Pinterest and Yandex Webmaster Tools.

.. image:: https://i.imgur.com/DNu7Rba.png

* In **Google Search Console** field: Enter the verification code for Google Search Console.
* In **Bing Webmaster Tools** field: Enter the verification code for Bing Webmaster Tools.
* In **Pinterest** field: Enter the verification code for Pinterest.
* In **Yandex Webmaster Tools** field: Enter the verification code for Yandex Webmaster Tools.

1.2 HTML Sitemap
-----
This HTML sitemap configuration contains Categories Sitemap, Pages Sitemap, and Products Sitemap, while all of them can be displayed in the footer of your page. You can see the settings in the following screenshots:

.. image:: https://i.imgur.com/cmRrPR9.jpg

* In **Enable HTML Sitemap**: choose “Yes” if you want to enable HTML Sitemap. New related HTML Sitemap modules will be expanded automatically
* In **Enable Categories Sitemap**: choose “Yes” if you want to display all pages in categories.
* In **Enable Pages Sitemap** field:  choose “Yes” if you want to display all pages in the website.
* In **Enable Products Sitemap** field: choose “Yes” if you want to display all product pages.
* In **Enable Additional Links** field: if you have a tons of link which can’t be automatically inserted into HTML file, choose “Yes” to enable this permission.
* In **Additional Links** box: Paste additional links you want to add.
* In **Add Sitemap Link to Footer** field: choose “Yes” if you want to enable the advance HTML Sitemap in the footer of pages.

1.3 XML Sitemap
-----
Right under the HTML Sitemap’s configuration is XML Sitemap’s settings

.. image:: https://i.imgur.com/CtlcZHQ.png

XML Sitemap is a ``.xml`` map of your website and the map will show a list of the page that the visitors can access. Under the **XML Sitemap** section, you can:

* Create `Homepage Optimization` when choosing "Yes"
* In case you need additional links, it is required to set `Enable Additional Links` to "Yes"

1.4 Canonical URLs
-----
If the content of your site has the same article with others, search engines will underestimate the quality of your content and thus reduce the ranking of your website. Therefore, you must have a Canonical tags to reduce the duplication of content on the page, this is an onpage SEO tips which should be noted.

Expand **Canonical URLs** configuration to see basic modules:

.. image:: https://i.imgur.com/JaBXSnr.jpg

* In **Add Canonical URL Meta Header** field: Choose “Yes” if you want to add canonical URL for Meta Header Tags
* In **Disable Canonical URL for Pages with NOINDEX robots** field: Choose “No” if you want to disable all canonical URL for pages with NOINDEX robots since it’s not good for your SEO procedure (eg Search Pages, 404 Pages, etc)
* In **Don’t use Canonical URL for these pages** field: Default option is “No”. 

1.5 Redirects
-----
Scroll until **Redirect**’s general configuration reaches your eyes.

.. image:: https://i.imgur.com/oP8H7hC.jpg

* In **Enable Redirects** field: choose “Yes” to allow this function to work.
* In **Better 404 Page** field: choose “Yes” if you want all 404 Pages to be redirected to your Homepage.

An additional user guide for Redirects can be found here 

1.6 SEO Rules
-----
Head forward to ``Mageplaza > SEO: Configuration > SEO Rules`` in order to take the basic control for Rules generally.

.. image:: https://i.imgur.com/igYOR62.jpg

* In **Enable SEO Rules** field: Choose “Yes” to enable all set SEO rules
* In **Use H1 Heading for Product Pages** field: Select “Yes” if you want to apply H1 Heading for Product Pages.
* In **Use H1 Heading for Category Pages** field: Choose “Yes” if you want to apply H1 Heading for Category Pages.
* In **Enable Automatic Alt Image** field: The required alt attribute specifies an alternate text for an image, if the image cannot be displayed. Choose “Yes” to enable this function”

II. Rules
=====
To add a new rule, please follow the path ``Mageplaza > SEO: Rules``, click on ``Add Rule`` button, choose one type of page you want to create a new rule apply for:

* Product Pages
* Category Pages
* CMS Pages
* Layered Navigation 

In this below guide, let’s take a try with the **Product Pages**

.. image:: https://i.imgur.com/I21MAGZ.gif

A new rule information page appears. Fill all required information which are divided into 4 parts at the sidebar, please follow those explanation for each field 

2.1 Rule Information
----- 

.. image:: https://i.imgur.com/kYi9UcX.jpg

* In **Name** field: Enter a Rule Name
* In **Status** field: Set Status to “Enable” for the active rule
* In **Store view** field: Choose Store View where the rule is applied
* In **Priority** field: Set Priority number, 0 is the highest level.

2.2 Conditions
-----

It’s pretty easy to add/remove its content

.. image:: https://i.imgur.com/lq7XKY8.gif

2.3 Actions
-----

.. image:: https://i.imgur.com/VpRSaln.jpg

* In **Meta Title Template** box: Enter the Meta Tile Template
* In **Meta Description Template** box: Enter the Meta Tile Template. Use following syntax to add dynamic meta title: ``{{name}}, {{price}}, {{special_price}}``.
* In **Meta Keywords Template** field: Enter the Meta Keywords Template. It should be between 3-5 keywords. Use following syntax to add dynamic meta title: ``{{name}}, {{price}}, {{special_price}}``.
* In **Robot Template** field: Select Robots Template from one of the options to set the index permission for search engine’s robots:
  * Index, Follow
  * NoIndex, Follow
  * Index, NoFollow
  * NoIndex, NoFollow
* In **Apply Template** field there are two modes:
  * “Skip if already defined” means if admin manually added meta tag: title, description, so it will not apply this template.
  * “Force Update” means auto-applying the template for all meta tags

2.3 Preview
-----
This is the final step where you can check the result after setting up a bunch of required information. For example, it will appear like this

.. image:: https://i.imgur.com/LnsJHmb.jpg


The rule form and its action of the rest Category Pages, CMS Pages or Layered Navigation is pretty similar to the Product Page’s form

Editing template rule form is the same with creating a new one. At ``Mageplaza > SEO: Rules`` choose **Edit** the rule you want to alter.




