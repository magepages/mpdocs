=============
User Guide
=============

Coming with `Magento 2 FAQ Knowledge Base`_ extension, the awesome module from Magento 2 platform, gives the customers answers of the common questions. This is one of the fully independent support resources that allow them self-detect the best solution before asking the helpdesk team. 

Mageplaza FAQ Knowledge Base's User Guide will provide the detailed instructions to know **How to use** on the frontend and **How to Config** on the backend.



.. _Magento 2 FAQ Knowledge Base: https://www.mageplaza.com/magento-2-faq/


How to Use
------------

Overview of FAQ Page
^^^^^^^^^^^^^^^^^^^^^^^

FAQ page includes 3 main parts: Search Box, FAQ Categories, and Question Listing while the questions are shown under Listing or Accordition depending the chosen style of FAQ page. 

  .. image:: https://i.imgur.com/neD4yDp.png
 
Advanced Search 
^^^^^^^^^^^^^^^^^^

On the Search Box, the visitors can enter some keywords for searching, all related topics will be shown on the below together with category which the topic belongs to. 

  .. image:: https://cdn.mageplaza.com/docs/faq-kb-advanced-search-faq.gif


How to Configure Frequently Asked Questions (FAQ) page
---------------------------------------------------------

Settings
^^^^^^^^^

* Login to Amin Panel, `Knowledge Base > Settings`.
* On the left panel, choose **FAQ** option.
* Open **General** section, do the following:
  
  * Enable FAQ module by choosing "Yes" in the `Enable` field.
  * Enter the title into `FAQ name` field.
  * Set `Url Prefix` for the faq link.
  * Allow show FAQs link in the footer link by choosing "Yes".
  * Set `Display Faqs style` to the desired option: 

    * Listing that shows a list of FAQs
    * Accordion that allow expand/ collapse FAQ list to make FAQ page neater.

  * Choose "Yes" for `Enable Bootstrap`. If you already had bootstrap CSS library, select "No".
  * To change Faq's color, you can choose the color as your need with unlimited colors in the field.
  * `Limit search's result` when entering the number for displaying.
  * Set `Min chars in search box` to show the search's suggestion. 
  
* Open **SEO** section, complete the meta data including title, description, and keywords for your better SEO of FAQ page.
  
  .. image:: https://cdn.mageplaza.com/docs/faq-configuration.gif

* Access **Cache Managment** link on the top of page to push the cache.

Manage FAQ Categories
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

* Login to Admin Panel, `FAQ > Manage Categories`.

* Manage clearly all created faq categories through the following columns:
  
  * Name 
  * Enabled
  * Created
  * Modified
  * Action

* Under **Action** option, tap `Select` link, you can edit/ delete any faq category as need.

  .. image:: https://cdn.mageplaza.com/docs/faq-manage-faq-categories.gif

Create a New FAQ Category
``````````````````````````````

* On the upper right corner of **FAQ Categories** workplace, click on `Add New FAQ Category` button to navigate to **New FAQ Category** page, you need to do:
  
  * In the **FAQ Category** sub-tab, complete **FAQ Category Information**.

    * Set `Name` for the new category.
    * Enter `Description` by WYSIWYG tool. You can tap **Show/ Hide Editor** button to turn on/ off the tool.
    * Choose "Yes" in the `Enable` field.
    * Enter `URL Key` for the friendly SEO if need.
  
  * Open **Article** sub-tab, allow assign the new category to more than one available knowledge base article.

  .. image:: https://cdn.mageplaza.com/docs/faq-create-faq-category.gif

* When complete, tap `Save and Continue Edit` or `Save Category`.
* Access **Cache Managment** link on the top of page to push the cache.

Manage FAQ Articles
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

* Login to Admin Panel, `FAQ > Manage Articles`.

* Manage clearly all created faq categories through the following columns:
  
  * Name 
  * Enabled
  * Created
  * Modified
  * Action

* Under **Action** option, tap `Select` link, you can edit/ delete any faq articles as need.

  .. image:: https://cdn.mageplaza.com/docs/faq-mange-articles.gif

Create a New FAQ Article
```````````````````````````

* On the upper right corner of **Articles** workplace, click on `Add New Article` button to navigate to **New Article** page, you need to do:
  
  * In the **Article** sub-tab, complete **Article Information**.

    * Set `Name` for the new article.
    * Enter `Description` by WYSIWYG tool. You can tap **Show/ Hide Editor** button to use the tool.
    * Choose "Yes" in the `Status` field.
    * Enter `URL Key` for the friendly SEO if need.
  
  * Open **FAQ Categories** sub-tab, allow assign the new article to more than one available FAQ category.

  .. image:: https://cdn.mageplaza.com/docs/faq-create-new-article.gif

* When complete, tap `Save and Continue Edit` or `Save Article`.
* Access **Cache Managment** link on the top of page to push the cache.
