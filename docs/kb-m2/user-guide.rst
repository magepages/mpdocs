=============
User Guide
=============

Coming with `Magento 2 FAQ Knowledge Base`_ extension, the awesome module from Magento 2 platform, gives the customers answers of the common questions. This is one of the fully independent support resources that allow them self-detect the best solution before asking the helpdesk team. 

Mageplaza FAQ Knowledge Base's User Guide will provide the detailed instructions to know **How to use** on the frontend and **How to Config** on the backend.



.. _Magento 2 FAQ Knowledge Base: https://www.mageplaza.com/magento-2-faq/


How to Use
------------

Overview of Knowledge Base Page
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Knowledge Base page is divided into 3 main elements: Search Box, KB Categories, and KB Articles while the number of articles are shown basing on your settings in the backend. 

  .. image:: https://cdn.mageplaza.com/media/general/nFgLM8D.png

Advanced Search 
^^^^^^^^^^^^^^^^^^

On the Search Box, the visitors can enter some keywords for searching, all related topics will be shown on the below together with category which the topic belongs to. 

  .. image:: https://cdn.mageplaza.com/docs/faq-kb-advanced-search-kb.gif

How to Configure Knowledge Base Page
---------------------------------------

Settings
^^^^^^^^^^

* Login to Admin Panel, `Knowledge Base > Settings`.

* Open **General** section, do the following:

  * Enable the module by choosing "Yes" in the `Enable` field.
  * Enter the title into `Kb name` field.
  * Set `Url Prefix` for the kb link.
  * Set `Url Suffix` for the kb link. If skip this, the default ".html" is used.
  * Enter `Contact Name` that display on kb homepage. 
  * Set `Contact Url` for the contact link.
  * To show the kb link in footer link, set the field to "Yes".
  * Enable/ Disable the right/ left sidebar on the knowledge page.
  * Set `Limit article in Kb page` field to leave the needed number of the display articles.
  *	Choose "Yes" for `Enable Bootstrap`. If you already had bootstrap CSS library, select "No".
  * To change KB's color, you can choose the color as your need with unlimited colors in the field.
  * `Limit search's result` when entering the number for displaying.
  * Set `Min chars in search box` to show the search's suggestion.

* Open **Sidebar** section, you can set `Number of popular articles` and `Number of recent articles` on the sidebar.

* Open **SEO** section, complete the meta data including title, description, and keywords for your better SEO of KB page.

  .. image:: https://cdn.mageplaza.com/docs/kb-configuration.gif

* Access Cache Managment link on the top of page to push the cache.

Manage Knowledge Base Categoies
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

* Login to Admin Panel, `Knowledge Base > Manage Categories`.

* All existing kb categories are listed on the table with the following columns:
  
  * Name 
  * Enabled
  * Created
  * Modified
  * Action

* Under **Action** option, tap `Select` link, you can edit/ delete any category as need.

  .. image:: https://cdn.mageplaza.com/docs/kb-manage-categories.gif

Create a New Knowledge Base Category
````````````````````````````````````````

* On the upper right corner of **Categories** workplace, click on `Add New Category` button to navigate to **New Category** page, you need to do:
  
  * In the **Category** sub-tab, complete **Category Information**.

    * Set `Name` for the new category.
    * Enter `Description` by WYSIWYG tool. You can tap **Show/ Hide Editor** button to use the tool.
    * Choose "Yes" in the `Enable` field.
    * Enter `URL Key` for the friendly SEO if need.
  

  * Scroll up and open **Article** sub-tab, allow assign the new category to more than one available knowledge base article.

  .. image:: https://cdn.mageplaza.com/docs/kb-create-category.gif

* When complete, tap `Save and Continue Edit` or `Save Category`.
* Access Cache Managment link on the top of page to push the cache.

Manage Knowledge Base Articles
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

* Login to Admin Panel, `Knowledge Base > Manage Articles`.

* All existing kb articles are listed on the table with the following columns:
  
  * Name 
  * Enabled
  * Created
  * Modified
  * Vote Up
  * Vote Down
  * Action

* Under **Action** option, tap `Select` link, you can edit/ delete any articles as need.

  .. image:: https://cdn.mageplaza.com/docs/kb-manage-articles.gif

Create a New Knowledge Base Article
`````````````````````````````````````

* On the upper right corner of **Articles** workplace, click on `Add New Article` button to navigate to **New Article** page, you need to do:
  
  * In the **Article** sub-tab, complete **Article Information**.

    * Set `Name` for the new article.
    * Leave `Short Description` that summaries the content article.
    * Enter `Content` by WYSIWYG tool. You can tap **Show/ Hide Editor** button to use the tool.
    * Choose "Yes" in the `Enable` field.
    * Enter `URL Key` for the friendly SEO if need.
  
  * Open **Category** sub-tab, allow assign the new article to more than one available knowledge base category.

  * Complete **Meta Data** for the new article:

    * Set `Meta Title`, `Meta Description`, and `Meta Keywords`.
    * Set `Meta Robots` to the following options: Index,Follow ; NoIndex,NoFollow ; NoIndex,Follow ; Index,NoFollow.

  .. image:: https://cdn.mageplaza.com/docs/kb-create-new-article.gif

* When complete, tap `Save and Continue Edit` or `Save Article`.
* Access Cache Managment link on the top of page to push the cache.
