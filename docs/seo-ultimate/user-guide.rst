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
* Page Analysis
* Cross Links
* Dashboard Reports
* Hreflang Tags


1.1. General Configuration
-----

Choose **Enable** = "Yes" to turn Mageplaza SEO on generally.

.. image:: https://i.imgur.com/lKwEQTy.png

1.2. Duplicate Content
-----
Filtering results (from layered navigation pages, etc) is the main cause of generating many similar URLs, and search crawlers assess them are all the same, in other words, it's called duplicate content. Therefore, you must have assistance from Canonical tags to reduce the duplication of content on the page, this is an onpage SEO tip to note obviously.

.. image:: https://i.imgur.com/KH3mlP6.png

* In the **Use Canonical Link Meta Tag For Categories** field: Choose "Yes" to display Canonical tags of Category pages which are from Source Category on the frontend.

.. image:: https://i.imgur.com/J9NZ3O3.png

* In the **Use Canonical Link Meta Tag For Products** field: Choose "Yes" to display Canonical tags of Source Product on the frontend.

.. image:: https://i.imgur.com/5fqHgqY.png

1.3. Structure Data
-----

.. image:: https://i.imgur.com/5bFO3UA.png

* In the **Enable Product Structured Data** field:

  * Display fields that allow admins to fill in default information like Brand, Aggregate Rating, Price, and Model.
  * Select "Yes" to display the basic information of products like Mageplaza SEO templates when they are searched by search engines.
  * By this intuitive design, Product Structured Data by Mageplaza SEO will increase click through rate (CTR) drastically. Thus, products from your store will be ranked higher on search results.
  * You can check Product Structure Data at the Page Source of Product Detail Page. Structure Data will mirror exactly as the basic information of that product.

* In the **Enable Sitelinks Searchbox** field:

  * Select "Yes" to display your store's Searchbox on the Sitelinks. As soon as your store displays on the search results, your store searchbox will also display with the store's link.
  * You can test the code in Page Source of Homepage.

* In the **Enable Breadcrumblist Structured** field: 

  * Select "Yes" to display the breadcrumb path that indicates the page's position in the site hierarchy and helps users understand and explore the site effectively.
  * You can test the code in the Page Source of the Homepage.


1.4. Business Information
-----

.. image:: https://i.imgur.com/8XnDCEL.png

* In the **Enable Business Information** field: Select "Yes" to display information about your business in the search result. The system will then display more fields:

  * When you leave any field blank, the information for that field will not display.
  * You can test the code in the Page Source of the Homepage.
  * Business Name: Provide the name of your business to show in the Business Information section.
  * Business Type: Choose a suitable option for your main business type.
  * Enter some of your business's contact information like Customer Service Phone, Customer Service Contact Option, Customer Service Area Serve, Technical Support Phone, Technical Support Contact Option, Technical Support Area Serve, Sales Service Phone, Sales Contact Option, and Sales Area Serve.
  * Image: Add an image for your business logo.
  * Image URL: Insert one or several image links to display for your business.
  * Then, provide some information about your business, including Street Address, City, State/Province, Zip/Postal Code, Email, Fax, Price Range, Description.

.. image:: https://i.imgur.com/iZjx6u6.png

* In the **Time Business** field: 

  * Business Opening Hours: If Yes, you can select the opening hours that apply to your business.

.. image:: https://i.imgur.com/REQtX4G.png

1.5. Social Profiles 
-----

.. image:: https://i.imgur.com/T1RZWeM.png

* You can paste your social addresses in here. Make sure that all the accounts have been verified.
* Social Profile will display along with Business Information. If Business Information is not enabled, Social Profile won't display in search results.
* You can leave unnecessary Social Profiles in blank status. 
* When the searcher clicks on one of your social links, they will be redirected to that social page of your store.
* You can test the code in the Page Source of the Homepage.

1.6. Verifications
-----

In the **Verification** field, you need to enter the verification code to confirm the ownership of your site. Hence, you can use the Web services such as Google Search Console, Bing Webmaster Tools, Pinterest and Yandex Webmaster Tools.

.. image:: https://i.imgur.com/DNu7Rba.png

* In the **Google Search Console** field: Enter the verification code for Google Search Console.
* In the **Bing Webmaster Tools** field: Enter the verification code for Bing Webmaster Tools.
* In the **Pinterest** field: Enter the verification code for Pinterest.
* In the **Yandex Webmaster Tools** field: Enter the verification code for Yandex Webmaster Tools.

1.7. Canonical URLs
-----
If the content of your site has the same article with others, search engines will underestimate the quality of your content and thus reduce the ranking of your website. Therefore, you must have a Canonical tags to reduce the duplication of content on the page, this is an onpage SEO tips which should be noted.

Expand **Canonical URLs** configuration to see basic modules:

.. image:: https://i.imgur.com/JaBXSnr.jpg

* In the **Add Canonical URL Meta Header** field: Choose “Yes” if you want to add canonical URL for Meta Header Tags
* In the **Disable Canonical URL for Pages with NOINDEX robots** field: Choose “No” if you want to disable all canonical URL for pages with NOINDEX robots since it’s not good for your SEO procedure (eg Search Pages, 404 Pages, etc)
* In the **Don’t use Canonical URL for these pages** field: Default option is “No”. Entered pages won't display Canonical URL.

1.8. Redirects
-----
Scroll until **Redirect**’s general configuration reaches your eyes.

.. image:: https://i.imgur.com/oP8H7hC.jpg

* In the **Enable Redirects** field: choose “Yes” to allow this function to work.
* In the **Better 404 Page** field: choose “Yes” if you want all 404 Pages to be redirected to your Homepage.

An additional user guide for Redirects can be found here 

1.9. SEO Rules
-----
Head forward to ``Mageplaza > SEO: Configuration > SEO Rules`` in order to take the basic control for Rules generally.

.. image:: https://i.imgur.com/igYOR62.jpg

* In the **Enable SEO Rules** field: Choose “Yes” to enable all set SEO rules
* In the **Use H1 Heading for Product Pages** field: Select “Yes” if you want to apply H1 Heading for Product Pages.
* In the **Use H1 Heading for Category Pages** field: Choose “Yes” if you want to apply H1 Heading for Category Pages.
* In the **Enable Automatic Alt Image** field: The required alt attribute specifies an alternate text for an image, if the image cannot be displayed. Choose “Yes” to enable this function”

1.10. Page Analysis
-----
.. image:: https://i.imgur.com/8scA5QJ.jpg

Page Analysis will assist you on marking which and how to perform the structured data is the best for SEO progress. Choose “Yes” to turn the page analysis function on.

Take a look at how it works by this example. Go to ``Products > Catalog >`` choose a product.

.. image:: https://i.imgur.com/6SzMGy8.gif

Then, expand **Search Engine Optimization** tab.

.. image:: https://i.imgur.com/q6hVWC0.png
.. image:: https://i.imgur.com/x47dEhO.png

This field allows the users can edit and see visually how the structured data will be displayed in the Search Engine Result Pages. 

* Add the **Meta Title**.
* Add the **URL Key**.
* Insert the **Meta Description**.

Below the `Meta Title` and `Meta Description` field, there is a bar which notices the status of the text length. 

* *Red*: The text lengh is not good for SEO.
* *Orange:* The text length is short and not good for SEO.
* *Green:* The text length is good for SEO.

.. image:: https://i.imgur.com/Ytaj76F.gif

After inserting the content on the other `Main Keyword` field, the system will automatically check and show the analysis. The analysis is based on:

* The *Focus keyword*. 
* The *Meta title, URL Key, Meta Description* content.
* The *Description* and *Short Description* content on the `Content` tab.
* The *Product Image*'s description.
* **Exclude Sitemap**: Can choose Use Config Setting to use the exclude sitemap like in Configuration. If not, you can setup each product.

.. image:: https://i.imgur.com/AFK1e3u.gif

1.11. Cross Links
-----

.. image:: https://i.imgur.com/786AzAw.jpg

In the **Enable/Disable** field, select “*Yes*” to enable cross links work, or “*No*” if you wish for the vice versa result.
For more configuration how to set up crosslinks, please refer to this `Part V <https://docs.mageplaza.com/seo-ultimate/index.html#v-crosslinks>`_

1.12. Dashboard Reports
-----

Dashboard Reports will gather and notice you all negative factors are harmful to your sites, which is also decreasing your SEO ranking badly. 

.. image:: https://i.imgur.com/29uKA9G.png

* In the **Enable SEO Reports** field: If you want to enable this function, choose “Yes”.
* In the **Show Report on Dashboard** field: Choose "Yes" if you want to display the report on the dashboard.
* In the **Apply name duplicate report content** field: If you enable Dashboard Reports, this module will be added and you can be allowed to configure it now. Select a page you want to apply name duplicate report content (such as Meta, Content, Frontend Identify, Description of products, Category pages or Product View pages)
* Click on ``Reindex Data`` button to apply the module for data or configuration changes.

A new report system will be displayed at the dashboard of your admin backend which is obviously useful for daily checkings. This helpful friend will help you keep track of these pages:

* Duplicate Content

.. image:: https://i.imgur.com/4x0LNfH.png

* Missing Meta Data

.. image:: https://i.imgur.com/3M08fXU.png

* Low Count Word

.. image:: https://i.imgur.com/iS9AbmB.png

* 404 Pages

.. image:: https://i.imgur.com/dDdFPtv.png

If Dashboard report is disable, you can check it at ``Report > Mageplaza: SEO Report``.

1.13. Hreflang Tags
-----

.. image:: https://i.imgur.com/TDtaBN5.png

* In the **Enable Hreflang Url** field: Choose “Yes” to enable Hreflang tags for your sites.
* In the **Enable For Product** field: Choose “Yes” to enable Hreflang for Product pages
* In the **Enable For Category** field: Choose “Yes” to enable Hreflang for Category pages
* In the **Enable For CMS Page** field: Choose “Yes” to enable Hreflang for CMS pages
* In the **Use Language Code from Default Locale** field: Choose “Yes” if you want to use Language Code from Default Locale section.
* In the **Language Code** field: Choose your preferred Language Code
* In the **X-Default** field: Choose “Choose “Default Store View” if you want to set the above Language Code” as the default language.	

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
* In the **Meta Description Template** box: Enter the Meta Tile Template. Use following syntax to add dynamic meta title: ``{{name}}, {{price}}, {{special_price}}, {{page_number}}``.
* In the **Meta Keywords Template** field: Enter the Meta Keywords Template. It should be between 3-5 keywords. Use following syntax to add dynamic meta title: ``{{name}}, {{price}}, {{special_price}}, {{page_number}}``.
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
* Choose ``PageSpeed Insight`` button at the header

.. image:: https://i.imgur.com/RsleU1i.png

* The page will be directed to PageSpeed Insight page for the check execution.

* PageSpeed Insights will focus on 2 key issues: page loading speed and user friendliness. These factors comply with Google web optimization methods as well as automate adjustment process.

.. image:: https://i.imgur.com/LwbRANa.png

* Apply the same action with Category Page and CMS Page.

IV. SEO CROSSLINKS
******

4.1 How to create a new term
-----
Our crosslinks feature will work under customizable terms. In the other words, It will retrieve keywords and automatically place a pre-installed internal link that makes it’s possible to associate with other sales pages
E.g Crosslinks will replace all appeared “Luma” words by an internal link. You won’t have to do all the syntax works manually which also can cut down the decorate content time.

.. image:: https://i.imgur.com/jzc7v85.png

Please make sure that the Crosslink’s genenal configuration in `here <https://docs.google.com/document/d/1bYHCkRwFdhbw4p6Iu-1c1Rk1F4S6t9P18RKtSCeHeeU/edit#heading=h.uhzuxj5l25zd>`_ has been enabled.

To make a new term for your store, go to ``Marketing > SEO > Manage Crosslinks``. Click red button Add new Term.

.. image:: https://i.imgur.com/NNbOr9o.png

Fill up all the required information fields you wish to set up for your new term. Creating a new term’s form will be performed like this.

.. image:: https://i.imgur.com/Uv5Q5cH.png

* In the Keyword field (require information): Enter a new keyword you want to create.
* In the Enable field: Set up the status for the term. Choose “Yes” if you want to apply for this term
* In the Link Alt/Title field: This is for the short description for this keyword. This will be inserted into a title attribute. We suggest that you should add keywords that you want to boost your ranking in SERPs. E.g: Buy iPhone in New York
* In the Link Target field: Target’s attribute of the Internal link.

  * If you want to open a new tab, you should choose: _blank (New tab)
  * If you want to open it in a popup box, choose _self (Current tab)
  * If you want to open it in the current page, choose _top (Full body of the window)

* In the Link to field: Define the form of address that Internal links refer to. There will be 3 kinds of form.

  * Custom Link: URL’s path will be put together with domain of this website. E.g: /iphone.html . This value does not include the domain name.
  * Product stock keeping unit (SKU): Base on SKU link to the product URL. E.g: iphone
  * Category ID: Base on ID link to the category URL. E.g: 23

* Store View: Chọn Store View mà bạn muốn áp dụng Term
* Apply for: Choose where the Crosslinks are inserted

  * Product Description
  * Category Description
  * Page Content

* In the **Limit Number Of Links Per Page** field: Enter a value which limits the number of links per page. Default: 3.
* In the **Direction** field: Specify direction which Crosslinks function will find and replace the keyword. Random or Top down will be good recommendation.
* In the **Rel** field: The rel’s attribute of Internal link. There are 2 options: Default or Nofollow.
* In the **Priority** field: Set up value for the priority of this keyword. Higher priority term will be applied first. 0 is the highest.

4.2 How to import new terms
-----
**Step 1: Prepare data**

To import a new term for your store, go to ``Marketing > SEO > Manage Crosslinks``. Click the red button Import.

.. image:: https://i.imgur.com/GtiOJpo.png

* In the Import New Term section, select File Type CSV and click Download Sample File that you want to download. The admin needs to download and edit the sample file so that it can be imported correctly.
* Check that the input file size does not exceed the limit shown in the message, which is 2M.

.. image:: https://i.imgur.com/hyGSiUt.png

* Edit the information you want to import in the template file

.. image:: https://i.imgur.com/LeGzWrD.png

**Step 2: Configure Import Behavior**

.. image:: https://i.imgur.com/kGxPSL5.png

* In the Import Behavior section,

  * Select the action you want when importing data in the Import Behavior field:

    * Add/ Update
    * Delete

  * The data stream is compared and executed based on the identity of each block imported
  * With the option Stop on Error or Skip Error to stop importing when you get an error or ignore the error to continue importing

* Next, in the Allowed Errors Count field, enter the error number to pause the import process. The default value is 10.
* In the field separator field:

  * Field separator: Enter a marker to separate the field in the column. Default value is a comma (,)
  * Multiple value separator: Enter the mark to separate multiple values in the cell of 1 column. Default value is a comma (,)

    * Note: In a CSV file, a comma is the default delimiter. To use a different character, make sure that the data in the CSV file matches the character you specify.

  * Fields enclosure: Enter a mark to enclose the value in the column. The default value is apostrophe (”)

**Step 3: Select File to Import**

.. image:: https://i.imgur.com/RNjdyqH.png

* In the Select File to Import section, click “Choose File” to select your block input file.
* Note: If you select File Type = CSV , your input file must be a CSV file correctly.

**Step 4: Check data and finish data entry**

* After entering the above information, click “Check Data” at the top right of the popup to check if the data you entered is correct.

  * If the file is valid, click “Import” is displayed in the Validation Results section.

.. image:: https://i.imgur.com/Okjlelx.png

* Otherwise, if the upload file is invalid, please correct the error reported in the message and try again.
* Example of error message:

.. image:: https://i.imgur.com/1PYJt0m.png

* When the import process is complete, the system turn off the popup and displays your action message in addition to the grid.
* Example of displaying message success on grid.

.. image:: https://i.imgur.com/aFdWUr2.png

4.3 How to delete existed terms
-----
Follow ``Marketing > SEO > Manage Crosslinks``. A list of existed terms will appear. Select in the Action button to customize the term you want to delete.

.. image:: https://i.imgur.com/WMNtoQ5.png


V. Manage Crosslinks
******
Our crosslinks feature will work under customizable terms. In the other words, It will retrieve keywords and automatically place a pre-installed internal link that makes it’s possible to associate with other sales pages

E.g Crosslinks will replace all appeared “Luma” words by an internal link. You won’t have to do all the syntax works manually which also can cut down the decorate content time. 

.. image:: https://i.imgur.com/NDPODcN.jpg

Please make sure that the Crosslink' genenal configuration in `Part 1.13 <https://docs.mageplaza.com/seo-ultimate/index.html#crosslinks>`_ has been enabled.

5.1 How to create a new term
-----
To make a new term for your store, go to ``Marketing > SEO > Manage Crosslinks``.  Click red button Add new Term.

.. image:: https://i.imgur.com/7sOB3no.jpg

Fill up all the required information fields you wish to set up for your new term. Creating a new term’s form will be performed like this.

.. image:: https://i.imgur.com/hNR5VQk.png

* In the **Keyword** field (require information): Enter a new keyword you want to create.
* In the **Enable** field: Set up the status for the term. Choose “Yes” if you want to apply for this term
* In the **Link Alt/Title** field: This is for the short description for this keyword. This will be inserted into a title attribute. We suggest that you should add keywords that you want to boost your ranking in SERPs. *E.g: Buy iPhone in New York*
* In the **Link Target** field: Target's attribute of the Internal link.
  
  * If you want to open a new tab, you should choose: *_blank (New tab)*
  * If you want to open it in a popup box, choose *_self (Current tab)*
  * If you want to open it in the current page, choose _top (Full body of the window)

* In the **Link to** field: Define the form of address that Internal links refer to. There will be 3 kinds of form.
  
  * Custom Link:  URL's path will be put together with domain of this website. E.g: /iphone.html . This value does not include the domain name.
  * Product stock keeping unit (SKU): Base on SKU link to the product URL. E.g: iphone
  * Category ID: Base on ID link to the category URL. E.g: 23

* In the **Store View** field: Choose store view(s) you want to apply the term.
* In the **Apply for** field: Choose section you want to place crosslinks.

  * Product Description
  * Category Description
  * Page Content


* In the **Limit Number Of Links Per Page** field: Enter a value which limits the number of links per page. Default: 3.
* In the **Direction** field: Specify direction which Crosslinks function will find and replace the keyword. Random or Top down will be good recommendation.
* In the **Rel** field: The rel's attribute of Internal link. There are 2 options: Default or Nofollow.
* In **Priority** field: Set up value for the priority of this keyword. Higher priority term will be applied first. 0 is the highest.

5.2 How to edit/delete existed terms
-----
Follow ``Marketing > SEO > Manage Crosslinks``. A list of existed terms will appear. Select in the ``Action`` button to customize the term you want to edit/delete.

.. image:: https://i.imgur.com/XH6foxj.jpg

Click ``Save term`` after editing. 

VI. SEO Checklist
******
SEO Checklist includes a list of the notifications: Success, Error, and Warning. Based on this status of the notification, you will know whether your store is optimized and ready for SEO or not. Follow ``Marketing > SEO: Checklist``

.. image:: https://i.imgur.com/o1MIClc.gif











