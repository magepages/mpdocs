1.9. XML Sitemap
########################

XML Sitemap is a `.xml` map of your website and the map will show a list of the page that the visitors can access.

Under the **XML Sitemap** section, you can:

* Create `Homepage Optimization` when choosing "Yes"
* In case you need additional links, it is required to set `Enable Additional Links` to "Yes"

.. image:: https://i.imgur.com/0QtP9cP.png

1.10. HTML Sitemap
########################

This HTML sitemap configuration contains Categories Sitemap, Pages Sitemap, and Products Sitemap while all of them can be displayed in the footer of your page. You can see the settings in the following screenshots:

.. image:: https://i.imgur.com/sLrdNxN.png

2. SEO Rules
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Mageplaza SEO allows the store owner to create the specific rule information. To add new SEO rule, please follow the path `Mageplaza > SEO Rules > Rules`, click on **Add New Rule** button.

.. image:: https://i.imgur.com/YEbLMSd.gif

* Enter `Rule Name`
* The rule can be applied to Product, Category, Pages, Post. You can choose one of them in the `Entity Type` field
* Set `Apply Template` to "Skip if ready defined" and "Force Update"

  * "Skip if ready defined" means if admin manually adds meta tag: title, description, so it will not apply this template.  
  * "Force Update" means auto-applying the template for all meta tags
* Apply SEO Rule for "All" or "Product Attribute Set" or "Specific Product" as you need
* Enter `Meta Tile Template`, `Meta Description Template`, and `Meta Keywords Template` 
  
  * The Meta Title Template should be 55-60 characters. Use following syntax to add dynamic meta title: {{name}}, {{price}}, {{special_price}}.
  * The Meta Description Template should be between 150 and 160 characters. Use following syntax to add dynamic meta title: {{name}}, {{price}}, {{special_price}}.
  * The Meta Keywords Template should be between 3-5 keywords. Use following syntax to add dynamic meta title: {{name}}, {{price}}, {{special_price}}.
* Select `Robots Template` from one of the options:
  
  * Index, Follow
  * NoIndex, Follow
  * Index, NoFollow
  * NoIndex, NoFollow
* Set `Status` to "Enable" for the active rule
* Choose `Store View` where the rule is applied
* Set `Priority` if need while 0 is the highest level. 

 .. image:: https://i.imgur.com/DOuRZSP.png
