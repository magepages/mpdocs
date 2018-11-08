# Reward Points Ultimate
## Overview

## How to use
### I. For customers
* Earning Point(s) of the product can be depended on Customer Group, Earning Rate, Catalog Earning Rules, and Shopping Cart Earning Rules which are configured in the backend.
* Spending Point(s) customer use is depended on Spending Rate and Shopping Cart Spending Rule

Customers can earn reward point(s) and use them perfectly in these following pages:

#### 1.1. The checkout page
* Customers can use their earned reward point(s) to discount the order.
* This page also displays earning point(s) customers will receive when they place the order.
* You can find more details [here](https://docs.mageplaza.com/reward-points/index.html#checkout-page).

![rewardpoints1](https://i.imgur.com/jcMn2Jf.png)

#### 1.2. View Cart Page (Shopping Cart)
* This is familiar to the checkout page.
* However, Earning Point(s) can’t be shown on this page if admins disable the field [**Display Earning Points on Shopping Cart**](https://docs.mageplaza.com/reward-points/index.html#display-configuration) in the backend.
* Notice: Earning Point(s) can be different depend on **Customer Group** and **Earning Rate** which are configured in the backend.

![rewardpoints2](https://i.imgur.com/ZWlo0qF.png)

#### 1.3. Purchase the products by points

When you reach the number of specific points, customers can purchase the products by points instead of paying the money as usual. The price of products based on points will display when the Balance of customers has a larger point than the Product's point price.

![reward points 1](https://i.imgur.com/F5YswpS.png)

`Note`: If the cart has the products that are sold by points, customers cannot use points to discount for the cart.

#### 1.4. Some ways to earn points

Cusomters can perform some following actions to earn the points:

- Place the order and complete it
- Create a new account
- Subscribe to the newsletter
- Write a review
- Send the email to refer the products to the friends
- Add the birthday
- Like the page by Facebook account
- Share the page by Twitter account
- Share the page by Google+ account
- Share the purchase by Facebook or Twitter account
- Refer to the friends


### II. For admins (store owners)
* Admins are able to create and manage **Earning Rate**, **Spending Rate** and **Transaction** as well as to configure the Reward Points extension generally in the backend.
* Admins are able to apply changes to reward point(s) in the customer’s account in the backend.
* Admins are not supported to use reward point(s) when creating a new order at the moment.

## How to configure
Log in to your backend, then go to ``Marketing > Reward Points`` and follow the instruction below to configure Reward Points extension
* Earning 
* Spending 
* Transactions

![rewardpoints](https://i.imgur.com/eNkN87B.png)

```
Earning rate and Spending Rate are stored in the same table inside the database. Therefore, the admin will probably see a slight difference in IDs of rates.
```
![rewardpoints3](https://i.imgur.com/q1QmqDU.png)

### I. Earning 
#### 1.1. Earning Rate
Go to ``Marketing > Reward Points: Earning Rate``

##### 1.1.1 General Management
This is the place where admins can store Earning Rates created.

![rewardpoints4](https://i.imgur.com/I5wjuX0.png)

* From the grid view, admins can acknowledge some fundamental information of **Earning Rate** such as **ID**, **Website**, **Customer Group**, **Money Spent**, **Earning Point** and **Priority**. Also, admins are able to:
  * **Delete**: Tick the checkbox of the earning rate they want to delete, then choose “Delete” in the ``Action`` box (at the left of the grid). Choose “OK” in the confirmation message.
  * To edit an earning rate, choose “Edit” in the **Action** column.
* Admins can filter, hide or display **Column** or export rates.

##### 1.1.2. Add/Edit New Earning Rate
After entering the Earning Rate section, click on ``Add New Rate`` to create a new earning rate. Then, click ``Save and Continue Edit``, the page will automatically switch to the **Edit Rate** page.

![rewardpoints6](https://i.imgur.com/32eD8sV.png)

* In the **Website** field: Choose website(s) you want to apply the earning rate.
* In the **Customer Group(s)** field:
  * Only customers who belong to this group can be entitled this earning rate.
  * Customers who belong to different groups can receive different earning rates even when they purchase the same product.
* In the **Earning Rate** field 
  * Define the conversion rate from X (currency) to Y (point)
  * Admins can fill out the appropriate rate in here. However, decimal numbers are not approved. If admins enter a decimal number, they will be rounded following the rule ``>= 0.5 to 1``, or  ``< 0.5 to 0``.
* In the **Priority** field: 
  * Indicates the priority of this earning rate compared to other earning rates.
  * 0 indicates the highest priority. The higher number, the lower priority.
  * If there’re many earning rates which have similar priorities, rules will apply on the rate which has a smaller ID first.

#### 1.2. Catalog Earning Rules
##### 1.2.1. General Management
This is the place where admins can store Catalog Earning Rules created.

![rewardpoints7](https://i.imgur.com/8WdNRyn.png)

* From the grid view, admins can acknowledge some fundamental information of an catalog earning rules such as **ID**, **Name**, **Website**, **Customer Group**, **Status**, **Create On**, **Expired**, and **Priority**.
* Admins can filter to search for a specific rule.
* After taking some modifications on the rule, click ``Apply Rule`` to enable it immediately.

##### 1.2.2. Add New Rule (Edit Rule)
* Admins choose ``Add New Rule`` at the right-above corner to create a new catalog rule, after clicking ``Save and Continue Edit``, the page will be directed to the **Edit Rate** page
* At the Add New Rule page, click on ``Save and Apply`` to apply the new rule.
* Add New Rule page has 3 tabs
  * Rule Information
  * Conditions
  * Actions
  
###### 1.2.2.1. Rule Information

![rewardpoints8](https://i.imgur.com/CJkgsem.png)

* In the **Rule Name** field
  * Enter the rule name which will display in the backend.
  * This is required information. There will be an error message if you leave it blank.
* In the **Description** field: You can note some descriptions of the rule. This field can be left blank.
* In the **Status** field: Choose "Active" to apply the rule.
* In the **Website** field: Choose website place(s) you want to apply the rule.
* In the **Customer Group** field:
  * Choose group(s) of customer you want to apply for them.
  * If the rule applies to **Not Logged In** customers, they still can learn earning point(s) of each product but point(s) won't be add unless they sign in or sign up on your store.

![rewardpoints9](https://i.imgur.com/UqYea6T.png)

* In the **From** field: You can set up the start time to use the rule, please note about the different of timezones.
* In the **To** field: You can set up the end time to disable the rule.
* In the **Priority** field:
  * Identifies the usage priority of this catalog earning Rule compared to others.
  * 0 is the highest priority. The higher number represents the lower priority.
  * If two catalog earning rules has the same priority, the rule with  smaller ID will be applied.
  
###### 1.2.2.2. Conditions

![rewardpoints10](https://i.imgur.com/UY4ZSgv.png)

Choose condition to apply the rule. Only Product pages which meets those conditions will be applied.

###### 1.2.2.3. Action
Catalog Earning Rule includes 3 actions:

![rewardpoints11](https://i.imgur.com/YmC9Ax2.png)

* **Give fixed X points to Customers**
  * Customers will receive a fixed X point(s) for a product in their cart.
  * In the **Point X** field: Enter fixed point(s) you want to set for customers.
  * *E.g: If Point X = 5, customer will receive 5 points per product they add to their cart. 2 items will be 10 points, no matter how pricing is.*
  
![rewardpoints12](https://i.imgur.com/dRAf94T.png)

* **Give X points for every Y amount of Price**
  * The point(s) will be calculated based on product's Regular Price (on Special Price if the product has) 
  * In the **Point X** field: Enter X point(s) customer will receive for every Y amount of price.
  * In the **Money Step** field: Enter the minimum Y amount so that customer can receive X points. Pricing will be rounded following ``Rounding Method`` of the configuration.
  * In the **Maximum Earning Points** field: Set the maximum earning point customer can get from this rule.
  * *E.g: Point (X) = 1, Money Step (Y) = 20, and Maximum Earning Point = 5 which mean*
    * *When the customer purchases a product which costs $40, he will earn 2 points*
    * *When the customer purchases a product which costs more than $100, he will only earn 5 points*
    * *On the other hand, A product has Regular Price=$40, Special Price=$20, they will earn 1 point only*

![rewardpoints13](https://i.imgur.com/YsqVMox.png)

* **Give X points for every Y amount of Profit**
  * Some products that admins enter cost - as the price entered into that product. Profit is calculated by the sale price minus the cost. Action **Give X points for every Y amount of Profit** will transfer the difference to Point. If the product is not filled Cost, Profit is equal to Price.
  * In the **Point X** field: Enter X point(s) customer will receive for every Y amount of regular price (profit).
  * In the **Money Step Y** field: Enter the minimum Y amount so that customer can receive X points. Pricing will be rounded following ``Rounding Method`` of the configuration
  * In the **Maximum Earning Points** field: Set the maximum earning point customer can get from this rule.
  * *E.g: Product A has Regular Price = $40, Special Price = 20$, cost = 25$, Point (X) = 1, Money Step (Y) = 20, and Maximum Earning Points = 5 which mean when the customer purchase Product A, point(s) will be based on (40$ - 25$ = 15$) and he will earn 1 points*
* **Stop further rule processing**: Choose "Yes" to restrict the number of catalog earning rules applied to a product.
  * *E.g: Let's say there are 4 Cataloging Earning Rules created in turn, Rule 1, Rule 2, Rule 3, Rule 4, and priorities are 0, 5, 3, 3.*
    * All rules choose **Stop further rules processing = No**: 4 rules will be applied and points are accumulated. The customer will receive points from the summation of 4 rules.
    * Rule 3 has **Stop further rules processing = Yes**: After applying, rule 1 will be applied (since it has higher priority) and rule 3. Rule 2 and 4 won't be applied because they have smaller priorities. 
  
#### 1.3. Shopping Cart Earning Rules
##### 1.3.1. General Management
This is the place where admins can store Shopping Cart Earning Rules created

![rewardpoints14](https://i.imgur.com/O1IGveQ.png)

* From the grid view, admins can acknowledge some fundamental information of a Shopping Cart Earning rule such as **ID**, **Name**, **Status**, **Create On**, **Expired**, and **Priority**.
* Admins can filter to search for a specific rule.

##### 1.3.2. Add New Rule (Edit Rule)
* Admins choose ``Add New Rule`` at the right-above corner to create a new shopping cart earning rule, after clicking ``Save and Continue Edit``, the page will be directed to the **Edit Rate** page
* The **Add New Rule** page has 3 tabs
  * Rule Information
  * Conditions
  * Actions
  
###### 1.3.2.1. Rule Information  
  
![rewardpoints15](https://i.imgur.com/2JIgi8Q.png)

* In the **Rule Name** field
  * Enter the rule name which will display in the backend.
  * This is required information. There will be an error message if you leave it blank.
* In the **Description** field: You can note some descriptions of the rule. This field can be left blank.
* In the **Status** field: Choose "Active" to apply the rule.
* In the **Website** field: Choose website place(s) you want to apply the rule.
* In the **Customer Group** field:
  * Choose group(s) of customer you want to apply for them.
  * Shopping Cart Earning Rule doesn't apply to NOT LOGGED IN CUSTOMER.
* In the **From** field: You can set up the start time to use the rule, please note about the different of timezones.
* In the **To** field: You can set up the end time to disable the rule.
* In the **Priority** field:
  * Identifies the usage priority of this shopping cart earning rule compared to others.
  * 0 is the highest priority. The higher number represents the lower priority.
  * If two shopping cart earning rules has the same priority, the rule with  smaller ID will be applied.
  
###### 1.3.2.2. Conditions

![rewardpoints16](https://i.imgur.com/kQAIFnB.png)

Choose condition to apply the rule. Only the cart which meets those conditions will be applied.

###### 1.3.2.3. Actions
Shopping Cart Earning Rule includes 3 actions:

![rewardpoints17](https://i.imgur.com/mksN4on.png)

* **Give fixed X points for whole cart**:
  * Customer will receive a fixed amount of point(s) based on a purchased cart.
  * In the **Point (X)** field: Enter point(s) customer can earn. This is the required field.
  * *E.x: Point (X) = 5 which means no matter how many products in the customer cart, they will only earn 5 points.*

![rewardpoints](https://i.imgur.com/r2iFjpg.png)

* **Give X points for every Y amount of Price**
  * The point(s) will be calculated based on the cart's Subtotal 
  * In the **Point X** field: Enter X point(s) customer will earn for every Y amount of price.
  * In the **Money Step** field: Enter the minimum Y amount so that customer can receive X points. Pricing will be rounded following ``Rounding Method`` of the configuration.
  * In the **Maximum Earning Points** field: Set the maximum earning point customer can earn from this rule.
  * *E.g: Point (X) = 1, Money Step (Y) = 20, and Maximum Earning Point = 5 which mean*
    * *When the customer purchases a cart which has Subtotal = $40, he will earn 2 points*
    * *When the customer purchases a cart which has Subtotal more than $100, he will earn only 5 points*

![rewardpoints](https://i.imgur.com/1OuAt1U.png)

* **Give X points for every Y amount of Quantity**:
  * The point(s) will be calculated based on product's quantity
  * In the **Point (X)** field: Enter X point(s) customer will earn for every Y quantity
  * In the **Money Step** field: Enter the minimum Y amount so that customer can receive X points. Pricing will be rounded following ``Rounding Method`` of the configuration.
  * In the **Maximum Earning Points** field: Set the maximum earning point customer can earn from this rule.
  * *E.g: Point (X) = 5, Quantity Step (Y) = 1, and Maximum Earning Points = 5 which mean*:
    * When the customer place order a cart which has 6 products, he will earn 6 points.
    * When the customer place order a cart which has more than 15 products, he will earn 5 points only.
* **Stop further rule processing**: Choose "Yes" to restrict the number of catalog earning rules applied to a product.
  * *E.g: Let's say there are 4 Cataloging Earning Rules created in turn, Rule 1, Rule 2, Rule 3, Rule 4, and priorities are 0, 5, 3, 3.*
    * All rules choose **Stop further rules processing = No**: 4 rules will be applied and points are accumulated. The customer will receive points from the summation of 4 rules.
    * Rule 3 has **Stop further rules processing = Yes**: After applying, rule 1 will be applied (since it has higher priority) and rule 3. Rule 2 and 4 won't be applied because they have smaller priorities.
* Apply the rule only to cart items matching the following conditions (leave blank for all items)

![rewardpoints](https://i.imgur.com/2rBTClp.png)

Only when product(s) in the cart meet these conditions, rule will be applied.    

#### 1.4. Behavior Rules
Go to ``Marketing > Reward Points > Earning > Behavior Rules``

##### 1.4.1. Basic management Interface

This is a place storing all Behavior Rules that shop owners have created.

![rp2](https://i.imgur.com/OTKjMZj.png)

From the Grid, admins can know all basic information of Behavior Rules as ID, Name, Action, Point Amount, Status, Create On, Expired, Priority.

Admins can filter to find the rule on the Grid.

##### 1.4.2. Add New Rule
- After going to the Behavior Rules page, admins can choose `Add New Rule` to create a new Behavior Rule. After choosing `Save and Continue Edit`, the page will auto-redirect to the `Edit Rate` page.
- The Add New Rule page includes 3 main tabs:
  - Rule Information
  - Conditions
  - Actions

###### 1.4.2.1. Rule Information

![rp3](https://i.imgur.com/UNUm925.png)

Rule Information shows the basic information of the rule. These information will be displayed outside the grid.
- `Rule Name`:
  - This is the name of the rule. This name will only show in the backend, it is used to distinguish with other Behavior Rules
  - This is a required field. It will notify the error if you leave it blank
  
- `Description`:
  - This field allows admins to describe about the effect of the rule
  - You can leave this field blank
  
- `Status`: Choose Active so that the rule can work
- `Website`: Choose Website that the rule is applied
- `Customer Group`:
  - Choose Customer Group that the rule is applied
  - A rule can be applied for many Customer Group
  - Only some Behavior Rules are applied for `NOT LOGGED IN CUSTOMER`
  
- `From`: Set the start day using the Behavior Rule. Please note about the timezone's difference 
- `To`: Set the finish day using Behavior Rule
- `Priority`:
  - Indicates the priority used by this Behavior Rule against other Behavior Rules.
  - 0 is the highest priority. The bigger the number, the smaller the priority
  - When two Behavior Rules have the same priority, the rule that has a smaller ID will be prioritized (the rule is created first).

###### 1.4.2.2. Conditions

![rp4](https://i.imgur.com/T8adFTR.png)

- After customers perform the action set here, they will receive a certain amount of points that admins set in the `Action` section
- The actions/events that can be plus points including:
  - `Create a new account`: The customers receive the point when they register the account
  - `Sign up for a newsletter`: When the customers subscribe to the newsletter, they will be plused points. Note that only one point is given for this action. After you cancel, then resigter again, you won't get the point.
  - `Write a review`: When customers write a review for the product and it is approved, the point will be added. However, the review needs to meet the word count requirement. At the same time, customers may need to purchase the product before reviewing for getting the point.
  
  ![rp5](https://i.imgur.com/f2fUrP3.png)
  
  - `Send email to friends`: Plus the points when customers send an email to refer the products to friends
  - `Customer's birthday`: Plus points on the customer's birthday occasion. Admins can set the notification for customers or not, at the same time, admins also can change the Sender and the email template if they want
  
  ![rp6](https://i.imgur.com/7GzLDoZ.png)
  
  - `Like a page with Facebook`: Plus points when customers like a page via Facebook account. To limit the spam, admins can set the minimum time between two likes of an account
  
  ![rp7](https://i.imgur.com/DMssNwo.png)
  
  - `Tweet a page with Twitter`: Similar to `Like a page with Facebook`, but this action is to share the page on Twitter
  
  ![rp8](https://i.imgur.com/pM0mBvh.png)
  
  - `+1’ a page with Google+`: Similar to `Like a page with Facebook`, but this action is to share the page on Google+
  
  ![rp9](https://i.imgur.com/OgXjs3s.png)
  
  - `Share a purchase on Facebook`: When customers place order completely, customers can share the products including in the order on Facebook or Twitter to get the points. For the Facebook, admins need to App Id so that the rule can work well
  
  ![rp10](https://i.imgur.com/zYRPJ6q.png)

###### 1.4.2.3. Actions

- For the actions as Create a new account, Sign up for a newsletter, Send email to friends, Customer birthday occurs, admins only need to set the amount of points that customers receive when performing each action

![rp11](https://i.imgur.com/Xiamk55.png)

- For the remaining actions, admins can limit the number of points that Customers receive in a given time period (per day, per month, per year or lifetime).

![rp12](https://i.imgur.com/q8jn4S5.png)


### II. Spending
Follow the way ``Marketing > Reward Points: Spending Rate``

#### 2.1. Spending Rate
##### 2.1.1. General Management.
This is the place where admins can store Spending Rates created.

![rewardpoints18](https://i.imgur.com/Di3Iwom.png)

* From the grid view, admins can acknowledge some fundamental information of an spending rate such as **ID**, **Website**, **Customer Group**, **Spending Point**, **Discount Received** and **Priority**. Also, admins can:
  * **Delete**: Tick the checkbox of the spending rate they want to delete, then choose “Delete” in the ``Action`` box (at the left of the grid). Choose “OK” in the confirmation message.
  * To edit an spending rate, choose “Edit” in the **Action** column.
* Admins can filter, hide or display **Column** or export rates.

##### 2.1.2 Add/Edit New Spending Rate.
After entering the Spending Rate interface, select ``Add New Rate`` to create a new spending rate. Then, click ``Save and Continue Edit``, the page will automatically switch to the **Edit Rate** page.

![rewardpoints19](https://i.imgur.com/FTW2VpL.png)

* In the **Website** field: Choose website(s) you want to apply the spending rate.
* In **Customer Group(s)** field
  * Only customers who belong to this group can use their point(s) following this spending rate.
  * Customers who belong to different groups use different spending rates even when they purchase the same product.
* In **Spending Rate** field 
  * Indicates the conversion rate from X (point) to Y (currency)
  * Admins can fill out an appropriate rate in here. However, decimal numbers are not approved. If admins enter a decimal number, they will be rounded following the rule ``>= 0.5 to 1``, or  ``< 0.5 to 0``.
* In **Priority** field 
  * Indicates the priority of this earning rate compared to other earning rates.
  * 0 indicates the highest priority. The higher number, the lower priority.
  * If there are many spending rates which have similar priorities, rules will apply on the rate which has a smaller ID.

#### 2.2. Shopping Cart Spending Rule
##### 2.2.1. General Management
This is the place where admins can save all Shopping Cart Spending rules.

![rewardpoints20](https://i.imgur.com/HSGOznR.png)

* From the grid view, admins can acknowledge some fundamental information of a Shopping Cart Spending Rule such as **ID**, **Name**, **Status**, **Create On**, **Expired**, and **Priority**.
* Admins can filter to search for a specific rule.

##### 2.2.2. Add New Rule (Edit Rule)
* Admins choose ``Add New Rule`` at the right-above corner to create a new shopping cart earning rule, after clicking ``Save and Continue Edit``, the page will be directed to the **Edit Rate** page
* The **Add New Rule** page has 4 tabs
  * Rule Information
  * Conditions
  * Actions
  * Labels
  
##### 2.2.2.1. Rule Information

![rewardpoints21](https://i.imgur.com/pEsMc17.png)

* In the **Rule Name** field
  * Enter the rule name which will display in the backend to distinguish with other rules
  * This is required information. There will be an error message if you leave it blank.
* In the **Description** field: You can note some descriptions of the rule. This field can be left blank.
* In the **Status** field: Choose "Active" to apply the rule.
* In the **Website** field: Choose website place(s) you want to apply the rule.
* In the **Customer Group** field:
  * Choose group(s) of customer you want to apply for them.
  * Shopping Cart Spending Rule doesn't apply to NOT LOGGED IN CUSTOMER.
* In the **From** field: You can set up the start time to use the rule, please note about the different of timezones.
* In the **To** field: You can set up the end time to disable the rule.
* In the **Priority** field:
  * Identifies the usage priority of this shopping cart spending rule compared to others.
  * 0 is the highest priority. The higher number represents the lower priority.
  * If two shopping cart spending rules has the same priority, the rule with  smaller ID will be applied first.

##### 2.2.2.2. Conditions
Conditions of Shopping Cart Spending Rule is divided into 2 parts:
* **Conditions**: Only cart which meets chosen conditions can be applied.

![rewardpoints22](https://i.imgur.com/zPZFxie.png)

* **Spending Point Action**:
  * In the **Action** field: There're 2 options:
    * **Give discount for fixed X points**: Customers can spend a fixed point(s) that admin set in this section.
    * **Give discount for every X points**: Cusstomer can spend point(s) to use X points to get discount for every Y amount (Y will be set up in the **Action** tab). The applicable X points cannot be exceeded ** Maximum Redeemable Points**.
  * In the **X Point** field: Enter the number of point(s) you want to set for the above conditions.  
    
![rewardpoints23](https://i.imgur.com/LwLzCJs.png)

##### 2.2.2.3. Actions
Admins configure Discount Amount corresponding to X Point which is set in the **Conditions** tab. There's 2 types of action:
* **Give a fixed discount amount for the whole cart**: Discount Amount is set fixedly for every X point(s).

![rewardpoints24](https://i.imgur.com/Mpb7JB3.png)

* **Give a percent discount amount for the whole cart**: Discount Amount is calculated based on percent of Order Total.

![rewardpoints25](https://i.imgur.com/RbNBXJu.png)

* *E.x: Discount Amount = 10 in the **Action** tab. In **Conditions** tab, choose ``Action = Give discount for every X points`` and X = 1. When a customer places an order which costs $500:*
  * *The customer will be discounted $10 for every 1 point spending if in the backend, the admin chooses ``Action = Give a fixed discount amount for the whole cart``. Particularly, he spends 1 point and only needs to pay $490 for the order (which hasn't been included Shipping Fee and Tax).*
  * *The customer will be discounted 10% for every 1 point spending if in the backend, the admin chooses ``Action = Give a percent discount amount for the whole cart``. Particularly, he spends 1 point and only needs to pay $450 for the order (which hasn't been included Shipping Fee and Tax)*
  
Besides, admins can configure more conditions to apply the rule properly.

![rewardpoints26](https://i.imgur.com/2rBTClp.png)

##### 2.2.2.4. Labels
This is where admins configure the lable for the rule in every Store View of a store. If it's left blank, default lable will be displayed on the frontend.

![rewardpoints27](https://i.imgur.com/I1lTjF8.png)

### III. Referrals

Go to `Marketing > Reward Points > Referrals`

#### 3.1. Rules
##### 3.1.1. Basic management interface

It stores all Referrals Rules that store owners have created

![rp13](https://i.imgur.com/429YT1O.png)

- From the Grid, admins can know all basic information of Referrals Rules as ID, Name, Website(s), Customer Group(s), Status, Created On, Expired, Priority 
- Admins can also filter to find the rule on the Grid

##### 3.1.2. Add New Rule (Edit Rule)
- After entering the Rules page, admins select `Add New Rule` to create a new Refer Rule. After the `Save and Continue Edit`, the page will automatically switch to the `Edit Rate` page
- The `Add New Rule` page consists of three main tabs:
  - Rule Information
  - Conditions
  - Actions

###### 3.1.2.1. Rule Information

![rp14](https://i.imgur.com/h5MAvwF.png)

Rule Information shows the basic information of the rule. These information will be displayed outside the grid.
- `Rule Name`:
  - This is the name of the rule. This name will only show in the backend, it is used to distinguish with other Refer Rules
  - This is a required field. It will notify the error if you leave it blank
  
- `Description`:
  - This field allows admins to describe about the effect of the rule
  - You can leave this field blank
  
- `Status`: Choose Active so that the rule can work
- `Website`: Choose Website that the rule is applied
- `Customer Group`:
  - Choose Customer Group that the rule is applied
  - A rule can be applied for many Customer Group
  - Only accounts of the selected group are applied for this rule
  
- `Referral Group(s)`:
  - Choose Customer Group that the rule is applied
  - A rule can be applied for many Customer Group
  - Only the accounts of this group have the Refer code applied the rule
  
For example: Refer code of the account A is 123, Refer code of account B is abc. A is in General Customer. B is in Retailed Customer. Rule has Customer Group as General, Referral Group as General.
  - When A and B send the code at the same time to C as General Customer, only the code of A works.
  - When A and B send the code to D as Wholesale Customer, both the code A and B don't work
  
- `From`: Set the start day using the Refer Rule. Please note about the timezone's difference 
- `To`: Set the finish day using Refer Rule
- `Priority`:
  - Indicates the priority used by this Refer Rule against other Behavior Rules.
  - 0 is the highest priority. The bigger the number, the smaller the priority
  - When two Refer Rules have the same priority, the rule that has a smaller ID will be prioritized (the rule is created first).

###### 3.1.2.2. Conditions

![rp16](https://i.imgur.com/elluLq7.png)

This section allows admins to choose the conditions for the carts. Only carts that meet the selected conditions, the rule is applied.

###### 3.1.2.3. Actions

![rp18](https://i.imgur.com/x7zu8DB.png)

- `Customer Action`:
  - Set the point or discount that customers can get access to refer link to place order for each order
  - There are 4 actions that admins can choose:
    - `Give fixed points to Customers`: No matter how much Order Total, Customer can get X points
    - Give X points for every Y amount of price: Based on Order Total to calculate the number of points that Customer can receive in a certain proportion.
    - Give a fixed discount to Customer: No matter how much Total Order, Customer can receive a certain amount of discount. Customer will receive discount for whole cart instead of receiving point
    - Give percent discount to Customer: No matter how much Order Total, Customer can receive a percentage discount. Customers will receive the discount for whole cart instead of receiving the point

  - Admins can apply the rule for shipping fee or select `Stop further rules` processing to limit the number of refer rules applied

- `Referral's Action`
  - Set the amount of points that Customer - who sent refer - can receive when the customers whom they send refer link to order and complete the order
  - There are 2 actions that admins can choose:
    - `Give fixed X points to Referer`: Regardless of how much the refer link user order, the referer still receives a fixed amount X point.
    - `Give X points for every Y amount of Price`: The number of points that referers can receive depends on the total order ordered by the referrer.

``Note``: Each customer uses one the refer link only.

#### 3.2. Invitation History

![rp15](https://i.imgur.com/2xUHPBM.png)

- As soon as Customer uses a referral link to place a successful order, Invitation History will log the basic information such as ID, Referral Email, Invitation Email, Referral Earn, Invited Earn, Invited Discount, Store.
- This information will be synchronized with `My referral` of the referer.
- The amount of `Invited Earn and Invited Discount` applies to referral users as soon as they place the order
- The amount of `Referral earn` are only added to the referers when the order is complete

### IV. Transactions.
The right path is ``Marketing > Reward Points: Transaction``.

#### 4.1. General Management.
This is the place where admins can create and manage transactions. By entering this interface, admins can add/minus customer’s reward point(s).

![i9](https://i.imgur.com/1iY4qA3.png)

* From the grid view, admins can acknowledge some fundamental information of created transactions such as **ID**, **Customer**, **Action**, **Point(s)**, **Expire On**, **Date**, **Status**. Also, admins can:
  * **View**: To review a transaction, choose “View” in the **Action** column.
  * **Cancel**: To cancel a created transaction (in case its expiration date hasn’t come yet), select the transaction and choose “Cancel” in the **Action** box (at the left of the grid).
  * **Expired**: Admins need to take this action if a transaction isn’t expired automatically. At this point, take the same action when admins view/cancel a transaction, choose “Expired” then process with the ``OK`` button.
* Admins can filter, hide/display **Column** or export rates.

#### 4.2. Add new transaction.
After entering Transaction tab, choose ``Add new transaction`` to generate a new transaction. Next, click ``Save and Continue Edit``, the page will direct to the **View Rate** page.

![i10](https://i.imgur.com/GD7Ag8H.png)
 
* In the **Customer** field
  * Click this section to display the store’s customer list in the popup form. Admins can only choose **1** from this customer list.
  * Name of the chosen customer will be added reward point(s) to her/his account.
  * If you leave this field blank, there will be an error message.
* In the **Points** field
  * Enter the number of point(s) you want to add for the chosen customer.
  * If you enter negative numbers or leave it blank, there will be an error message.
  * If you enter a decimal number, it will be rounded down (*E.x: 1.8 = 1.1 = 1*)
* In the **Comment** field
  * Enter the comment that will be sent along with the added point(s) to the chosen customer. 
  * You can leave this field blank.
* In the **Points expire after** field
  * The added point(s) of this transaction will be expired after X day(s) from the time you create this transaction.
  * Admins have the right to add higher point(s) than the maximum point of the amount which a customer can accumulate (*E.x: max point = 1000, admins can add 1100 points or even more to the customer balance*).

#### 4.3. View Transaction.
Admins can review or expire a transaction in the **View Transaction** page.

![i11](https://i.imgur.com/keL0D6s.png)

### V. Report

Go to `Reports > Reward Points Reports`

- Reward Points Ultimate offers 2 Report dashboards that are compatible with [Mageplaza Reports](https://www.mageplaza.com/magento-2-reports-extension/).
- `Earned`:
  - Record all actions leading to customers being added to the point
  - Shown as a chart if Mageplaza Reports is installed
  - This chart can also be displayed in the Dashboard

![rp19](https://i.imgur.com/fbCQOm2.png)

- `Spent`:
  - Record all actions leading to customers being added to the point
  - When installing Mageplaza Reports, the dashboard will display a graph showing the ratio between Spending Point and Earning Point

![rp20](https://i.imgur.com/mNaXfdH.png)

![rp21](https://i.imgur.com/ij9K1e4.png)

### VI. Configuration
Follow in the backend ``Store > Settings > Configuration``. At the left panel, choose ``Mageplaza > Rewward Points``

#### 6.1. General Configuration.
This general configurations can apply for the whole module.

![i12](https://i.imgur.com/HyWAogp.png)

* In the **Enable** field: Choose “Yes” to active the Reward Point extension from Mageplaza. 
* In the **Label in My Account Navigation** field: Enter the name of **Tab Reward Point** displayed on the frontend at the [My Account > Reward Point](https://docs.mageplaza.com/reward-points/index.html#my-account-my-points-reward) section.
* In the **Point Label** field:
  
  * This label will be displayed on the frontend.
  * If you leave it blank, there will be an error message.
* In the **Plural Point Label** field:
  
  * If the balance is greater than 1, this label will be displayed on the frontend.
  * If you leave it blank, there will be an error message.
* In the **Display Point Label** field:
  * Select **After Amount** to display the point label after number (ex: 5 points).
  * Select **Before Amount** to display the number label before number (ex: points 5).  
* In the **Zero Point Label** field:
  
  * Enter the label when the customer's account balance is equal to 0. 
  * If you leave it blank, there will be an error message.
* In the **Show Point Icon** field: Choose “Yes” to display the point icon on the frontend.
* In the **Reward Point Icon** field:
  * The upload image will be used as the point icon and be shown on the frontend.
  * **JPG**, **PNG** or **GIF** files are accepted. There will be an error message if the input file is invalid.
  
  * If you leave it blank, the default icon will be used ![icon](https://i.imgur.com/N9oyiwy.png).
* In the **Maximum Available Point Balance** field
  * Set the maximum number of point(s) that the customer can accumulate by purchasing.
  
  * If customer's account balance reaches to this number, there will be no more points awarded to the balance, and reward point(s) indicators will not be shown on the frontend.
  
  * Admins can add point(s) to an account balance with no awareness of this value.
  * If the field is left blank or 0, there will be no restriction for the maximum points

#### 6.2. Earning Configuration.

##### 4.2.1. General
This displays general configurations regarding earning point(s)

![i13](https://i.imgur.com/kwE0PV9.png)

* In the **Rounding Method** field: There are 3 options for rounding
  * **Normal**: The number of points converted from the currency (USD, EUR, ...) will be rounded according to the normal rule. *E.x: 10.2 rounded to 10; 10.8 rounded to 11*.
  * **Rounding Up**: The number of points converted from the currency (USD, EUR, ...) will be rounded up. *E.x: 10.2 or 10.8 is rounded to 11*.
  * **Rounding Down**: The number of points converted from the currency (USD, EUR, ...) will be rounded down. *Ex: 10.2 or 10.8 is rounded to 10*.
* In the **Points Earning From Tax** field: Select “Yes” so the tax can be converted to earning point(s)
* In the **Earn points from shipping fee**: Select “Yes” to allow Shipping Fee to be converted to point(s).
* In the **Point Refund** field: When the customer places an order, they will receive a certain amount of earning points. The shop owner selects “Yes” in this section to retrieve the points when customer refunds the order.

##### 6.2.2. Sales Earning Process.

![i14](https://i.imgur.com/xOi55oV.png)

* In the **Earning Points after Invoice created** field:
  * Select “Yes” to allow adding earning point(s) to the customer's account right after the invoice is created.
  * Select “No” to allow adding earning point(s) after the order is completed.
* In the **Points Expired After** field
  * The number entered here is expiration day of point(s), it starts to count from the day point(s) is (are) added.
  * If this field is blank, point(s) will be used indefinitely.

#### 6.3. Spending Configuration.
![i15](https://i.imgur.com/g5qAyke.png)

* In the **Discount Label** field: Discount Label displayed on the frontend will change according to the content of this section.
* In the **Minimum spending points per order** field
  * Set the minimum number of point(s) that customers must have in their balances as a condition to spend points on discounting orders.
  * If the number of point(s) in the customer's balance is less than the minimum spending point, the Reward Points slider will not appear on the View Page or Checkout Page.
  * If you leave it blank or 0, the default minimum point is 0.
* In the **Maximum spending points per order** field:
  * Set the maximum number of point(s) that customers can use on an order.
  * If you leave it blank or 0, the maximum number of point(s) customers can spend is unlimited (it can be the maximum number of points they own or the maximum number of points which can be converted by SubTotal of Cart).
* In the **Spending Points on Shipping**: Select “Yes” to allow customers to use their point(s) to reduce the shipping cost.
* In the **Restore spent points after order refunding** field: When customers place an order, they can apply a certain amount of their reward point(s). Admins select “Yes” in this section to return point(s) to customers if their orders are refunded.
* In the **Use Max Point By Default** field: Select “Yes” to set the customer's spending point(s) to the maximum number that they can use.

#### 6.4. Display Configuration.

![i16](https://i.imgur.com/2Q9dDQc.png)

* In the **Display Total Points on Top Links** field: Select “Yes” to display the total number of reward point(s) that customer has on Top Link.

![i17](https://i.imgur.com/MdTaIp1.png)
 
* In the **Display Points Summary on Dashboard Page** field: Select “Yes” to display the total number of reward point(s) that customer has in the Reward Point tab.

![i8](https://i.imgur.com/bvfjpjF.png)

* In the **Display Earning Points on Minicart** field: Select “Yes” to show the total number of earning point(s) customers can receive when checking out the cart at the Minicart page.

![21](https://i.imgur.com/bjj2G82.png)

* In the **Display Earning Points on Shopping Cart** field: Select “Yes” to display the total number of earning point(s) customers can receive when checking out the cart at the View Cart Page. (Shopping Cart).

![i22](https://i.imgur.com/AJ15ok4.png)

#### 6.5. Email Configuration.

![i23](https://i.imgur.com/3MnOprZ.png)

* In the **Enable Notification Email** field: Select “Yes” to allow notification emails to be sent to customers.
* In the **Subscribe customers by default** field: When a new customer subscribes to a store, receiving no emails is set as default. Select “Yes” in this section so that when their first transaction is made (by purchasing or by admin), Reward Points Notification will be checked immediately.
* In the **Sender Email** field: Admins can choose one of the 5 available Magento Senders: General Contact, Sales Representative, Customer Support, Customer Email 1, Customer Email 2
* In the **Update Point Balance Email Template** field
  * Pre-installed email configuration that customers can receive the notification mail when there are changes in their balance.
  * To change **Email Template**, admins can create another one under ``Marketing > Email Template``.
  * The instruction to create a new Email Template can be found [here](https://www.mageplaza.com/kb/how-to-customize-email-template-transactional-email-magento-2.html).
* In the **Points expiration Email Template** field:
  * Pre-installed email configuration that customers can receive the notification mails when their reward point(s) is (are) about to expire.
  * To change the Gift Card Email template, admins can create another one under ``Marketing > Email Template``.
  * The instruction to create a new Email Template can be found [here](https://www.mageplaza.com/kb/how-to-customize-email-template-transactional-email-magento-2.html).
* In the **Send email reminder before a transaction expires** field
  * Set how many day(s) before the expiration date the email can be sent.
  * If you leave the field blank or 0, reminder email will not be sent.

#### 6.6. Social behavior
##### 6.6.1. Like via Facebook

![rp22](https://i.imgur.com/yvZMHt1.png)

- `Show Facebook like button on frontend`: Choose Yes so that the Facebook like button can show on the frontend
- `Show Facebook like count on frontend`: Select yes to display the total number of Facebook like that the page is received
- `Page to display`: Select the pages where the admins want the Facebook like button to be displayed

##### 6.6.2. Tweet Via Twitter
![rp23](https://i.imgur.com/9YafrEm.png)

- `Show Twitter tweet button on frontend`: Choose Yes to show the Tweet button of Twitter on the frontend
- `Page to display`: Choose the pages that admins want the Tweet button to be displayed

##### 6.6.3. 1+ Via Google+

![rp24](https://i.imgur.com/UfBEkZA.png)

- `Show Google+ button on frontend`: Choose Yes to show the Google+ button on the frontend
- `Page to display`: Choose the pages that admins want the Google+ to be displayed

#### 6.7. Customer referrals
##### 6.7.1. General

![rp25](https://i.imgur.com/P8WKQqw.png)

- `Invitation Email`:
  - The email is sent when customers want to refer to their friends
  - Admins can change the template as they want by go to `Marketing > Email Template`
  - You can refer how to create a new Email Template [here](https://www.mageplaza.com/kb/how-to-customize-email-template-transactional-email-magento-2.html)

- `Default Refer URL`:
  - When customers is referred, click on the refer link, it will be shipped to the page that has the URL filled in here
  - If you leave this field blank, the default is homepage
  
##### 6.7.2. Url Key

![rp26](https://i.imgur.com/hvNXsWj.png)

- `Use Param`:
  - Choose how to encode refer link
  - `Url Param`: The refer link has the format `http://example.com/?code=123`
  - `Hash`: The refer link has the format `http://example.com/#code123`
  
- `Prefix`:
  - Choose the prefix for the refer code
  - Default = `code`


### VII. Manage Reward Point of Customer

![i22](https://i.imgur.com/qX4hUPG.png)

Admins can manage **Reward Points Balance**, **Transactions** and **Notification** of customers by going to ``Customer > Edit Customer > Reward Points``.

* In the **Reward Points Balance** field: Indicates the total reward point(s) the customer has.
* In the **Update Point Update Balance** field: Allows admins to change the balance by filling in **Update Point** and set its expiration date. Admins can also enter the reason for the change in the **Comment** field
* In the **Reward Points Notification** field: Admins can register or cancel the subscribe on behalf of the customer when their balance is updated or point(s) is about to expire.
* In the **Reward Points History** grid: Displays information about all executed transactions: ID, Store View, Point, Point Spend, Date, Date Expired, Comment.

The information about **Balance**, **Notification** and **Transaction** in the backend will be synchronized with the customer's frontend at ``My Account > My Points & Reward``.

### VIII. Add the price based on points for products

Go to `Catalog > Products`, admins can see that in the Grid, Reward Points column represent the price by the point of the Product

![rp27](https://i.imgur.com/8VF6U9M.png)

To set the price by Point for Product, admins need to Edit Product and enter the amount of points converted from the price that you want to sell, then Save Product.

![rp28](https://i.imgur.com/o8JHF3A.png)

### IX. Customer Frontend.

#### 9.1. Create New Account

![rp29](https://i.imgur.com/V8STFbs.png)

- Mageplaza Reward Point offers the function Refer email or Refer Code to receive incentives
- Customers can get refer code information or the email of refereers, they can completely fill in the Refer Email Or Code, then `Create an Account` and place order and get point/discount.
- For customers who have an account, they need to have the correct link to access, login and use the refer code

#### 9.2. My Account > My Points & Reward
##### 9.2.1. Reward Dashboard

Customers can check the Reward Point information in this section after logging in:

* **Reward Information** indicates
  * The total reward point(s) that customer has.
  * Earning Rate and Spending Rate that customer is entitled (according to his **Customer Group** and **Website** set in the backend).
  * The maximum number of points that the customer's balance can receive from orders.
  * The maximum number of days that point(s) can be used since that customer receives point(s).
  
##### 9.2.3. Transactions

* At **Transaction History**: Customer can know the transaction history in details
  * Made transaction(s) and its comments.
  * Number of point(s) changed
  * Date and time of the transaction
  * Expiration Dates of point(s)
  * Transaction status
* They can also sign up to receive updates when their balance changes or point(s) is about to expired.
* All information here is synchronized in the backend ``Customer > Reward Points``

![i23](https://i.imgur.com/70QxdpB.png)

##### 9.2.3. My Referral

![rp30](https://i.imgur.com/vblrX6z.png)

- Manage the Referral URL and Code of an account
- When using `Send Invitations` or referral via Social, Refer URL will be sent in email
- Your Invitee saves the information about the referral action that they did when the referrer performed a successful place order
- When the order is completed, Customers will receive a point equal to the amount of points `You Earn`

#### 9.3. Checkout Page
* Customers can use the slider or text box to select the amount of reward point(s) they want to spend.
* Used reward point(s) can be limited to a range.
  * Customers are only allowed to use their point(s) within this range.
  * If Subtotal has a value less than the minimum value of the limited value range, the **Apply Reward Point** section will not be displayed.
* Tick the checkbox **Maximize my discount with Point** to use all available points at once. The amount of points can be
  * The total points that customer has if Total Point(s) < Max Point for per Order and Subtotal.
  * Max Point if Max Point < Total Point and Subtotal.
  * The number of point(s) which is equal to Subtotal if that amount < Max Point and Total Point.
* The Order Summary box will display more sections about reward points to make the calculation easier.
* Spending Point can be used for Tax, Shipping Fee if it’s configured in the backend.
* The conversion rate between **Reward Point** and **Spending Point** depends on the Spending Rate configuration in the backend.

![i24](https://i.imgur.com/jYxvQV7.png)

#### 9.4. Other additional frontends.
* **Top link**: Displays the point(s) that customer has.

![i25](https://i.imgur.com/IDryq1q.png)

* **MiniCart**: Displays the earning point(s) of all products in the cart.

![i28](https://i.imgur.com/bjj2G82.png)

* **View Cart Page (Shopping Cart)**: Displays Apply Reward Point on the checkout page, and also displays the Earning Point, Spending Point and Reward Point.

![i26](https://i.imgur.com/7wlXyks.png)
