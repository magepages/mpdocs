

The Hreflang tag is the necessary tag if your website must approach multi-countries. The hreflang attribute tells Google which language you are using on a specific page, so the search engine can serve that result to users searching in that language.

In order to use the hreflang tag, you need to do:

* Enable the hreflang URL when selecting "Yes"
* Allow you to apply the hreflang for the product, category, and pages if you need.
* Assign **X-default** to the specific store view that means if the visitors come from another country with the language you don't support, the assigned store view to X-default will be displayed in this situation.

.. image:: https://i.imgur.com/V5xhGtR.png

2. SEO Checklist
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

SEO Checklist includes a list of the notifications: Success, Error, and Warning. Basing on this status of the notification, you will know whether your store is optimized and ready for SEO or not. 

.. image:: https://i.imgur.com/qiUDZmg.gif

3. SEO Rules
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
