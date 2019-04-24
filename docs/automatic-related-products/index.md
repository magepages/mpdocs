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

![](https://i.imgur.com/TlpDp0X.png)

Follow our given guide below to complete Automatic Related Products configuration which includes
* Configuration
* Manage Rules
  * Manage Rules on Product Page
  * Manage Rules on Category Page
  * Manage Rules on Shopping Page
  
### I. Configuration
#### 1. General Configuration

From the Admin Panel, go to ``Stores > Settings > Configuration > Mageplaza Extensions > Automatic Related Products``

![](https://i.imgur.com/06O8Vat.png)

* In the **Enable Automatic Related Products** field, choose “Yes” to enable the extension.

#### 2. Popup Configuration (Integrate with Where to Show)

![](https://i.imgur.com/gUk60lw.png)

- **Enable Popup**: 
  - Choose Yes to show a recommended popup on the Product Detail page (The condition is that products apply at least one Product Rule)
  - This popup will take the information of the first product in the block ARP product list.
  
  ![](https://i.imgur.com/S4frxdP.png)

- **Popup Title**:
  - Set the name displaying on the frontend for the popup
  - If you leave this field blank, `Default = Recommended for you`


### II. Manage Rules on Product Page
This section allows you to install the Related Product Block in your desired Product Page. Product pages that meet this rule, the Related Product Block will be displayed.

To create a new Rule on Product Page, go to ``Marketing  > Automatic Related Products > Manage Rules``. In the Add Rule section, select Product Page

![](https://i.imgur.com/FyTTs53.png)

A New Related Block Rule form will be appeared.

#### 2.1 Rule Information

![](https://i.imgur.com/tysUtU5.png)

* In the **Statistic** page where the Rule is applied, the Product selection from the Block of ARP along with the percentage between the Product selection and the Page entry

![](https://i.imgur.com/5ulpHte.jpg)

![](https://i.imgur.com/aZSAqLE.jpg)

* In the **Rule Information** field
  * **Rule Name** field is where you name the rule. The rule name will be displayed on the Grid in Manage Rules Page and visible only with admins. This is a required field so there will be an error message if you leave it blank.
  
  ![](https://i.imgur.com/IqFDmyx.png)
  
  * **Where to Display**  is where you specify the block where the Product Page is located
  
  - `Frontend: Before Rule is actived`

  ![](https://i.imgur.com/5JWJVDv.png)
  
  - `Locations where the block can be displayed`
  
  ![](https://i.imgur.com/XUZoBkK.png)
  
    * **Replace Related Products**: The new block will replace  the Magento's default Related Product Block
    
    ![](https://i.imgur.com/gJJABtV.png)
    
    * **Before native related products**: Auto Related Product block displays above  the Magento's Related Product block
    
    ![](https://i.imgur.com/X29Bg44.png)
    
    * **After native related products**: Auto Related Product block displays below the Magento's Related Product block
    
    ![](https://i.imgur.com/33cfEgy.png)
   
    * **Replace upsell products**: Auto Related Product block will replace the default Upsell Product Block by Magento
    
    ![](https://i.imgur.com/UOEMtF5.png)
    
    * **Before upsell products**: Auto Related Product block displays above  the Magento's Related Product Block
    
    ![](https://i.imgur.com/hZQcGNs.png)
    
    * **After upsell products**: Auto Related Product block displays below  the Magento's Related Product Block
    
    ![](https://i.imgur.com/4vNFQBk.png)
    
    * **Above Content**: Auto Related Product block displays above the Content of the Product Page
    
    ![](https://i.imgur.com/eLpQr38.png)
    
    * **Below Content**: Auto Related Product block displayed under the Content of the Product Page
    
    ![](https://i.imgur.com/27iMHYn.png)
    
    * **Floating Left Bar**:
    
    ![](https://i.imgur.com/AzL5djK.png)
    
    - **Floating Right Bar**:
    
    ![](https://i.imgur.com/wYJiWFT.png)
    
- **Manually**: Admins can adjust the position to show the ARP Block according to the guide. With the guide is Manually, ARP only works on the Product List Page and Product Detail Page

!


  * In the **Status** field: choose "Active" to enable the rule.  
  * In the **Store View** field you can select the store view where the Rule applies on.
  * In the **Customer Group** field: The rule is only applicable to customers who in  the selected group
  * In the **From** field is where you select the starting date of the Rule applied to the Product Page. You can either select by calendar or directly enter the date In the **To** field is where Select the ending date the Rule is applied. You can either select by calendar or directly enter the date
  * In the **Priority** field
    * This is the field where you enter the priority of the rule. The higher priority (smaller number) rule will be applied to Product Page
    * Priority won’t impede the application of multiple rules on a product page. Higher priority blocks will be ordered first.
    * In case there are multiple rules with the same priority, the rule with  smaller ID will be applied.
    * Priority doesn’t affect to Parent Rule and Child Rule
    
#### 2.2 Conditions
Display products that meet these following criterias

##### 2.2.1 Configure Conditions
* This is where you select the conditions for pages. Only product pages which match the setup conditions, the new rule will be displayed
* You can add, remove conditions by clicking on + or x
* You can change the true/false of the condition by clicking the bold text

![](https://i.imgur.com/7IKRX23.png)

##### 2.2.2 Preview Products
After saving the conditions, you can get a Product List. Click on ``Preview Product`` to display the products that meet the conditions.

![](https://i.imgur.com/0sw92Ya.png)

#### 2.3 Action
Display products that meet these following criterias

##### 2.3.1 Configure Conditions
* This is where you select conditions for pages. Only product pages which match the setup conditions the new rule will be displayed
* You can add, remove conditions by clicking on + or x
* You can change the true/false of the condition by clicking the bold text

![](https://i.imgur.com/v84iWOL.png)

##### 2.3.2 Preview Products
After saving the conditions, you’ll get a Product List. Click on ``Preview Product`` to display the products that meet the conditions. 

![](https://i.imgur.com/Or49Kf9.png)

##### 2.3.2 Block configuration

![](https://i.imgur.com/ROY93nD.png)

* The **Block name** field is where you can name the block which is displayed in the frontend. If you don’t want to have it named, leave it blank.
* In the **Product Layout** field: Select layout for the block
* In the **Limit number of products** field: Enter the maximum number of products displayed in a block.. If you leave it blank or set 0, all of products in the Product List will be displayed
* In the **Display "Out-of-stock" products** field: select “No” to not display Out-of-Stock products in the Auto Related Product block.
* In the **Product order** field: choose how to sort products in the block
  * **Bestseller**: more purchased products will be displayed first.
  * **Lowest Price**: products displaying based on low to high price
  * **Highest Price**: products displaying based on high to low price
  * **Newest**: newer products added will be displayed first
  * **Random**: products are selected randomly from the Product List
* In the **Display additional information** field: choose additional information or/and buttons displayed under products in the block, include Price, Review Information, Add to Cart, Add to WishList, Add to Compare buttons.
* In the **Add Product** field:
  * Choose an available related type of products to set for the block (Related Products, Up-sell Products, Cross-sell Products)
  * Each of product page can have different related product blocks which you can configure them in here.
  * How to configure Related, Up-sell, Cross-sell Product document can be found [here](https://www.mageplaza.com/blog/how-to-add-and-remove-related-products-magento-2.html)
  
#### 2.4 A/B Testing

![](https://i.imgur.com/2Us5WtU.png)

* A/B testing doesn't apply to [Block Display](http://docs.mageplaza.com/automatic-related-products/index.html#i-configuration)
* After a parent rule (an original rule) is generated, a child rule can be created by clicking Add A/B Testing.You can edit the this child rule in the same way to set up parent rules.
* When two rules are simultaneously active, these two rules will be applied alternately in Product Page.
* If one of the two rules is inactive, the other rule will work normally
* After the A/B Testing Rule is created, the Statistic section will be changed to sum up the views, clicks, and CTR rates of two rules.
* In the **Parent Rule** section of the A/B Testing: it will indicate which of the two links is the Parent - Child. From the Parent Rule you can go to this section to quickly switch to the Child Rule by clicking on the Child Rule Link
* Also in the Child Rule there is a Parent button to quickly switch to Parent Rule

### III. Manage Rules on Category Page
This section allows you to install the Related Product Block in the Category Page that you desire. For category pages that satisfy this rule, the Related Product Block will be displayed in the selected location

Headings in the Rule Category Page are quite similar to the Rule Product Page, we will only point different places out for you in this guide.

#### 3.1 Rule Information

![](https://i.imgur.com/n7JllM5.png)

There are 5 Location options to display the Block in Category Page. In **Location** field:
* **Sidebar Top**: Related Products Block is displayed at the top of Sidebar
* **Sidebar Bottom**: Related Products Block is displayed at the bottom of Sidebar
* **Above Content**: Related Product Block is displayed on top of Content in Category Page
* **Below Content**: Related Product Block is displayed below Content in Category Page

```
Unfortunately, this Location=Custom function is under a maintainance for fixing so please we don't recommend you use this option.
```

#### 3.2 Conditions

![](https://i.imgur.com/lxhr7T0.png)

* By Conditions, you can select the Category Page you want the Rule to be applied to, you cannot select as many conditions as the Product Page.
* There’s no Preview Product here

#### 3.3 Actions
* Action Page of Category Rule doesn't have *Add Product item* as in Product Page Rule.
* For the rest, it's similar to Action section of Product Page. Click [here](https://docs.mageplaza.com/automatic-related-products/index.html#action) to refer.

#### 3.4 A/B Testing
Completely Similar to A/B Testing of the Product Page. Click [here](https://docs.mageplaza.com/automatic-related-products/index.html#a-b-testing) to refer.

### IV. Manage Rules on View Cart Page
This section allows you to install the Related Product Block in your desired View Cart Page. When the View Cart Page fulfills the Rule, the Related Product Block will be displayed in the selected position.

Headings in the Rule Shopping Page are quite similar to the Rule Product Page.

#### 4.1 Rule Information

![](https://i.imgur.com/n7JllM5.png)

There are 6 Location options to display the Block in Category Page. In **Location** field
* **Related Product Block**: the new block replaces Magento's default Cross Product Block in View Cart Page.
* **Before cross product**:  The Related Product Block is displayed  at the top of the Cross Product Block of the View Cart Page.
* **After cross products**: The related Product Block is displayed under the Cross Product Block of View Cart Page.
* **Above Content**: Related Product Block is displayed at the top of Content of View Cart Page
* **Below Content**: Related Product Block is displayed below Content of View Cart Page
* **Custom**: You can select the block’s display location in any position. There will be a specific guide for this section at the end of this user guide.

#### 4.2 Conditions

![](https://i.imgur.com/9uD0FJ9.png)

You can select the same conditions as the Product Page. Furthermore, you can set additional conditions for Total Items in the Cart, Total Price and Total Volume of Products.

#### 4.3 Actions
* Action Page of Shopping Cart Page Rule doesn't have *Add Product* as in Product Page Rule.
* For the rest, it's similar to Action section of Product Page. lick [here](https://docs.mageplaza.com/automatic-related-products/index.html#action) to refer.

#### 4.4 A/B Testing
Completely Similar to A/B Testing of the Product Page. Click [here](https://docs.mageplaza.com/automatic-related-products/index.html#a-b-testing) to refer.








  
  
    
  


