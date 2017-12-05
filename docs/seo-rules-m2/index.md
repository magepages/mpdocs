# SEO Metadata Template Rules

## Overview

The term Metadata, sometimes, brings a vague definition when it comes to the internet due to the confusing why this time they mention “data” but at another time they use “metadata” word. But long story for short, it’s “Data describes other data” including information to define individual pages on a online website. From there, it also gives the necessary permission for search crawlers acknowledge, understand and evaluate valuable of a page content, define wherever will it be displayed on search page results.

Also, art in information governance is the equally important key that what we need to be well aware soon when being a store owner of thousand business items. In order to define your products have better description, you’re gonna manually add metadata per product, per page, per category all by yourself? There’s no way Mageplaza wants to see customers handle that work painfully.

## How it works

With Magento 2 SEO Metadata Template Rules, you just need to set one template principle to apply for the rest of similar products simultaneously. Short and to the point, it will help to show 3 foremost components for a website description in a readable way:

* Meta Title Template 
* Meta Description Template
* Meta Keywords Template 

We will go into detail and explain each of module and how it works in this bellow user guide.

## How to configure

As we mentioned, Mageplaza Metadata Template Rules extension allows the store owner to create the specific rule information. This user guide will set off the walkthrough to

* General Configuration
* Rules

### I. General Configuration
Head forward to ``Mageplaza > SEO: Configuration > SEO Rules`` in order to take the basic control for Rules generally.

![seorules1](https://i.imgur.com/igYOR62.jpg)

* In **Enable SEO Rules** field: Choose “Yes” to enable all set SEO rules
* In **Use H1 Heading for Product Pages** field: Select “Yes” if you want to apply H1 Heading for Product Pages.
* In **Use H1 Heading for Category Pages** field: Choose “Yes” if you want to apply H1 Heading for Category Pages.
* In **Enable Automatic Alt Image** field: The required alt attribute specifies an alternate text for an image, if the image cannot be displayed. Choose “Yes” to enable this function”

### II. Rules
To add a new rule, please follow the path ``Mageplaza > SEO: Rules``, click on ``Add Rule`` button to add a rule for Product pages, or click the small triangle to choose one type of page you want to create a new rule apply for:

* Product Pages
* Category Pages
* CMS Pages
* Layered Navigation 

In this below guide, let’s take a try with the **Product Pages**

![seorules2](https://i.imgur.com/I21MAGZ.gif)

A new rule information page appears. Fill all required information which are devided into 4 part at the sidebar, please follow those explanations for each of field 

#### 2.1 Rule Information 

![seorules3](https://i.imgur.com/kYi9UcX.jpg)

* In **Name** field: Enter a Rule Name
* In **Status** field: Set Status to “Enable” for the active rule
* In **Store view** field: Choose Store View where the rule is applied
* In **Priority** field: Set Priority number, 0 is the highest level.

#### 2.2 Conditions
Is the module you can set conditions when will the rule can be applied. It’s pretty ease to add/remove its content

![seorules4](https://i.imgur.com/lq7XKY8.gif)

#### 2.3 Actions

![seo5](https://i.imgur.com/VpRSaln.jpg)

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

#### 2.3 Preview
This is the final step where you can check the result after setup bunch of required information. For exmaple, it will be appeared like this

![seo6](https://i.imgur.com/LnsJHmb.jpg)


The rule form and its action of the rest Category Pages, CMS Pages or Layered Navigation is pretty similar to the Product Page’s form

Editing template rule form is the same with creating a new one. At ``Mageplaza > SEO: Rules`` choose **Edit** the rule you want to alter.

