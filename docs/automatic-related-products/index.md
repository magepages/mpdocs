# Automatic Related Products

## Overview

[Magento 2 Automatic Related Products](https://www.mageplaza.com/magento-2-automatic-related-products/) (ARP) is a tool that helps admins establish links between new products easily. In brief, ARP is a recommendation tool, similar to [Who Bought This Also Bought](https://www.mageplaza.com/magento-2-who-bought-this-also-bought/) or [Frequently Bought Together](https://www.mageplaza.com/magento-2-frequently-bought-together/), but more additional outstanding features, and give more rules as well as managements in the backend.


## Download & Install

You can download from the following resouces:

- [Mageplaza](https://www.mageplaza.com/magento-2-automatic-related-products/)
- [Magento Marketplace](https://marketplace.magento.com/mageplaza-module-automatic-related-products.html)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)

## How to configue

Login to Magento Admin, choose ``Marketing > Automatic Related Products``

![](https://i.imgur.com/vUunkqs.png)

Follow our given guide below to complete Automatic Related Products configuration which includes
* Configuration
* Manage Rules
  * Manage Rules on Product Page
  * Manage Rules on Category Page
  * Manage Rules on Shopping Page
  
### 1. Configuration

From the Admin Panel, go to ``Stores > Settings > Configuration > Mageplaza Extensions > Automatic Related Products``

![](https://i.imgur.com/06O8Vat.png)

* **Enable Automatic Related Products**: Choose **Yes** to enable  Automatic Related Products extension


### 2. Manage Rules on Product Page
This section allows you to install the Related Product Block in your desired Product Page. Product pages that meet this rule, the Related Product Block will be displayed.

To create a new Rule on Product Page, go to ``Marketing  > Automatic Related Products > Manage Rules``. In the Add Rule section, select Product Page

![](https://i.imgur.com/KOZNtrw.png)

A New Related Block Rule form will be appeared.

#### a. Rule Information

![](https://i.imgur.com/tysUtU5.png)

*  **Statistic** : This is where the Rule is applied, the Product selection from the Block of ARP along with the percentage between the Product selection and the Page entry

![](https://i.imgur.com/5ulpHte.jpg)

![](https://i.imgur.com/S9PP6us.png)

* **Rule Information** 

![](https://i.imgur.com/8HRUsEw.png)

  * **Rule Name**: This is where you name the rule. The rule name will be displayed on the Grid in Manage Rules Page and visible only with admins. This is a required field so there will be an error message if you leave it blank.
  
  * **Where to Display**: This is where you specify the block where the Product Page is located
  
  
    * **Replace Related Products**: The new block will replace  the Magento's default Related Product Block
    
    
    * **Replace upsell products**: Auto Related Product block will replace the default Upsell Product Block by Magento
    
    
    * **Before native related products**: Auto Related Product block displays above  the Magento's Related Product block
    
    
    * **After native related products**: Auto Related Product block displays below the Magento's Related Product block
    
    
    * **Before upsell products**: Auto Related Product block displays above  the Magento's Related Product Block
    

    
    * **After upsell products**: Auto Related Product block displays below  the Magento's Related Product Block
    
    
    * **Above Content**: Auto Related Product block displays above the Content of the Product Page
    
    
    * **Below Content**: Auto Related Product block displayed under the Content of the Product Page
    
      * **Floating Left Bar**: Auto Related Product block displayed under the left of Product Page Content
    
      * **Floating Right Bar**: Auto Related Product block displayed under the right of Product Page Content
      
    * **Manually**: Auto Related Product block will be displayed according to Widget, Page and Template after deploying the following command.

![](https://i.imgur.com/Lns6p0z.png)
  
  * **Status** : Choose "Active" to enable the rule.  
  * **Store View**: Select the store view where the Rule applies on. Mutiple stores can be selected.
  * **Customer Group**: Choose customer group from which the Rule applied on. Different customer groups can be selected.
  * **From**: This is where you select the starting date of the Rule applied to the Product Page.
  * **To**: This is where you select the ending date of the Rule applied to the Product Page.
  * **Priority**: Enter a number to set priority for the rule. A lower number represents a higher priority.
  
#### b. Product To Show

![](https://i.imgur.com/127pAhj.png)

* **Block name**: Enter the block's name. It's only visible in the frontend
 
 
* **Product Layout**: There are 2 modes to choose how product are displayed
  * **Slider**: Show products in slider form
  * **Grid**: Show products in grid form
    
* **Display mode**: 
  * Display Style: There are 2 Display Style that you can select:
    * Ajax Display: ARP block is loaded after loading page. It will take some times for this block to display in the frontend, which is good for page loading speed.
    * Block Display: 
      * ARP block will be always loaded at the same time when loading page and instanly display after the page is loaded. This option is beneficial for SEO improvement. 
      * This style does not support A/B testing

* **Limit number of products**: 
  * This is where you limit the number of products to be shown in Block
  * If you leave it blank or set 0, all of products in the Product List will be displayed

* **Display "Out-of-stock" products**: select “No” to not display Out-of-Stock products in the Auto Related Product block.

* **Product order**: choose how to sort products in the block
  * **Bestseller**: more purchased products will be displayed first.
  * **Lowest Price**: products displaying based on low to high price
  * **Highest Price**: products displaying based on high to low price
  * **Newest**: newer products added will be displayed first
  * **Random**: products are selected randomly from the Product List

* **Display additional information**: choose additional information or/and buttons displayed under products in the block:
  * Price
  * Review Information
  * Add to Cart
  * Add to WishList
  * Add to Compare buttons

* **Add Product**:
  * Choose an available related type of products to set for the block (Related Products, Up-sell Products, Cross-sell Products)
  * Each of product page can have different related product blocks which you can configure them in here.
  * How to configure Related, Up-sell, Cross-sell Product document can be found [here](https://www.mageplaza.com/blog/how-to-add-and-remove-related-products-magento-2.html)
   
*  **Do not Display Product in**: Remove products which have been added to cart or in the Wishlist from ARP block.

#### c. Product to meet Condition
* **Setting**:
  * Choose products to be displayed in ARP block. Only product pages which match the setup conditions, the new rule will be displayed
  * You can add, remove conditions by clicking on + or x
  * You can change the true/false of the condition by clicking the bold text
    
![](https://i.imgur.com/yDSuwzl.png)

* **Preview Products**: You will get a Product List after saving conditions. Click to **Preview Products** to see products which meet conditions. They will be presented in Block.

  
#### d. A/B Testing

* After a parent rule (an original rule) is generated, a child rule can be created by clicking Add A/B Testing.You can edit the this child rule in the same way to set up parent rules.

![](https://i.imgur.com/IHy1KGt.png)

* When two rules are simultaneously active, these two rules will be applied alternately in Product Page.

* If one of the two rules is inactive, the other rule will work normally

* After the A/B Testing Rule is created, the Statistic section will be changed to sum up the views, clicks, and CTR rates of two rules.

![](https://i.imgur.com/SRADAga.png)

* In the **Parent Rule** section of the A/B Testing: it will indicate which of the two links is the Parent - Child. From the Parent Rule you can go to this section to quickly switch to the Child Rule by clicking on the Child Rule Link

![](https://i.imgur.com/wzJftWi.png)

* Also in the Child Rule there is a Parent button to quickly switch to Parent Rule

![](https://i.imgur.com/mV2gfkQ.png)

### 3. Manage Rules on Category Page
This section allows you to install the Related Product Block in the Category Page that you desire. For category pages that satisfy this rule, the Related Product Block will be displayed in the selected location

Headings in the Rule Category Page are quite similar to the Rule Product Page, we will only point different places out for you in this guide.

#### a. Rule Information
There are 5 Location options to display the Block in Category Page. In **Location** field:

![](https://i.imgur.com/8L8RD1X.png)


* **Sidebar Top**: Related Products Block is displayed at the top of Sidebar
* **Sidebar Bottom**: Related Products Block is displayed at the bottom of Sidebar
* **Above Content**: Related Product Block is displayed on top of Content in Category Page
* **Below Content**: Related Product Block is displayed below Content in Category Page
  * **Floating Left Bar**: Auto Related Product block displayed at the top left of Product Page Content
  * **Floating Right Bar**: Auto Related Product block displayed at the top right of Product Page Content
* **Manual**: Similar to Product Rule


#### b. Products to Meet Conditions

![](https://i.imgur.com/lxhr7T0.png)

* By Conditions, you can select the Category Page you want the Rule to be applied to, you cannot select as many conditions as the Product Page.
* There’s no Preview Product here

#### c. Product To Show
* Action Page of Category Rule doesn't have *Add Product item* as in Product Page Rule.
* For the rest, it's similar to Action section of Product Page. Click [here](https://docs.mageplaza.com/automatic-related-products/index.html#action) to refer.

#### d. A/B Testing
Completely Similar to A/B Testing of the Product Page. Click [here](https://docs.mageplaza.com/automatic-related-products/index.html#a-b-testing) to refer.

### 4. Manage Rules on Shopping Page
This section allows you to install the **Related Product Block** in your desired **View Cart Page**. When the View Cart Page fulfills the Rule, the **Related Product Block** will be displayed in the selected position.

Headings in the Rule Shopping Page are quite similar to the Rule Product Page. Only the differences will be pointed. 

#### a. Rule Information

Location is the only difference in Rule Informaion. There are six Location options which can be selected to show Block in View Car Page. In comparison to Product Rule, three options related to Related Product are not available.

![](https://i.imgur.com/2JLPwR0.png)

#### b. Products to Meet Conditions

![](https://i.imgur.com/9uD0FJ9.png)

You can select the same conditions as the Product Page. Furthermore, you can set additional conditions for Total Items in the Cart, Total Price and Total Volume of Products.C

#### c. Products to Show
* Action Page of Shopping Cart Page Rule doesn't have *Add Product* as in Product Page Rule.
* For the rest, it's similar to Action section of Product Page. Click [here](https://docs.mageplaza.com/automatic-related-products/index.html#action) to refer.

#### d. A/B Testing
Completely Similar to A/B Testing of the Product Page. Click [here](https://docs.mageplaza.com/automatic-related-products/index.html#a-b-testing) to refer.

### 5. Manage Rules on One Page Checkout
One Page Checkout ARP is compatible with [Mageplaza One Step Checkout extension](https://www.mageplaza.com/magento-2-one-step-checkout-extension/).  Admins need to install One Step Checkout module to get ARP displayed in the frontend.

The way to set up this rule is quite similar to other rules.

### 6. Exclude Automatic Related Extension in a specific Product Detail
- Choose  `Catalog > Products > Edit Product` that admins do not want to Automatic Related Product extension applying on
- Choose **Related Products, Up-Sells, and Cross-Sells** 
- Enable Manually Setup Auto Related Products
- Save Products

This function makes **Automatic Related Products** inactive on a certain product. The way that **Related Products** displays in the frontend will be based on the Related Products themselves with the Core design.

### 7. How to set the Where to display = (Manually)
First of all, admins need to set Rule which has Where to Display= Manually and return store view to All Store View before starting to custom Automatic Related Products block. If not, both Widget and Rule will appear on the frontend.

#### a. Create Widget
* Step 1: Choose type
  * Choose `Content > Elements > Widgets > Add Widget`
  * In the Setting field, choose **Type = ARP Product List** and  select any Design Theme
![](https://i.imgur.com/lojcKMQ.png)
  * Click to **Continue** button

* Step 2: Install Widget
  *  In the Storefront Properties
    * Enter `Widget Name` and `Store View` to be displayed
    * In the `Layout Update` field, choose Page to show the widget on `Display on`. In the next step, select where the Widget will appear in `Page` from `Container` section
    * Choose `Display on = Category` to custom `Category Rule` and  `Display on = Product` to custom `Product Rule`. If you do not choose any of them, `Rule` will not show.

![](https://i.imgur.com/SF8eglZ.png)
  * In the `Widget Option`, select your wanted `Rule Name`.
  * Click to `Save` to finish creating Widget
  
  
* Step 3 Check Frontend

#### b. Insert ARP into CMS Static Block

* Step 1: Insert ARP into CMC Static Block
  * Choose `Content > Elements > Blocks > Edit/Add New CMS Static Block` that you want to insert ARP
  * In the CMS Statics Block Content, there are two ways to insert ARP
  
    * Method 1: Choose `Insert Widget > Widget Type = ARP Product List > Rule Name >  Insert Widget`

![](https://i.imgur.com/d44RVKV.gif)

    * Method 2: Click to Show/Hide Editor and then paste the following code directly to the content. You can change the `rule_id` to the Rule ID  that you want to insert.
    
`{{block class="Mageplaza\AutoRelated\Block\Widget\ProductList" rule_id="1"}}`

![](https://i.imgur.com/owE4pgH.png)

  * Click to `Save` to keep all the changes
  
  
* Step 2: Check Frontend  

#### c. Insert the code to file .phtml
Following this method, you can place the code wherever you want, provided that you have already known the position of file .phtml

```
$objectManager = \Magento\Framework\App\ObjectManager::getInstance(); 
$productList= $objectManager->create("Mageplaza\AutoRelated\Block\Widget\ProductList")->setRuleId(1)->toHtml(); 
echo $productList;

```


### 8. API

**Automatic Related Product extension by Mageplaza** supports the use of Rest API to add data size chart to each individual product or all products. Also, by **Rest APT**, you can get, create or delete the rule’s information

Details can be viewed <a href='https://documenter.getpostman.com/view/10589000/SzfCVSAN?version=latest' target='_blank' rel='nofollow'>here</a>

<a href='https://devdocs.magento.com/guides/v2.3/get-started/authentication/gs-authentication-token.html' target='_blank' rel='nofollow'>Here</a> is the instruction to generate Integration tokens 

### 9. GraphQL

Run the following command in Magento 2 root folder:

```
composer require mageplaza/module-auto-related-graphql
php bin/magento setup:upgrade
php bin/magento setup:static-content:deploy

```

**Mageplaza’s Size Chart** allows admins to get the rule’s information through **GraphQL**.

To start working with Automatic Related Product GraphQL in Magento, you need to:

- Use Magento 2.3.x, Return your site to developer mode
- Supported request GraphQL can be viewed <a href='https://documenter.getpostman.com/view/10589000/SzfCVSAP?version=latest' target='_blank' rel='nofollow'>here</a>











  
  
    
  


