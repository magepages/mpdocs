# FAQ extension
## Overview



## How to use



## How to configure

Login to the Magento Admin, choose **Content > FAQs**

![how to configure](https://i.imgur.com/skj2kUi.png)

### 1. Manage Articles
#### 1.1. Management Grid

![management grid](https://i.imgur.com/IPaZZOH.png)

* This is a place to save all required questions. It includes that admins have created and customers have created.
* From the Grid, admins can know all basic information of question as `ID, the content and URL of the question, who created the question, the status of the question (answered or not), Visibility (public, hidden, need approved), displayed store view, Helpful rate, Create date, Update date, Position, and Action`.
* Admins can perform some actions as the following: 
    * **Delete**: Admins need to tick and choose the question that they want to delete, then select **Delete** in the Action box (in the upper left of the grid) to delete. A confirmation dialog will appear, then choose `OK` to continue deleting.
    * **Change Visibility**: Admins need to tick and choose the question that you want to change the Visibility, then choose `Change Visibility > Public/Hidden/Need Approved` in the Action box (in the upper left of the Grid) to change the Visibility. Instantly, selected questions will be changed about selected Visibility.
    * **Edit**: To edit a rule, admins need to choose `Edit` in the Action box (the last column on the right of the Grid)
    * **Instant Edit**: Admins can edit some fields of the Rule in the Grid by clicking the mouse to the field you want to edit. The Grid will change as the following:
    
![questions](https://i.imgur.com/egCeiPP.png)

* Also, admins can filter, change Store View, hide/represent the columns or export Grid.

#### 1.2. Add New/Edit Form
##### 1.2.1. General

![general](https://i.imgur.com/apujiXY.png)

``Statistic``
* This is a place to count the view (the detail page view), the total number of actions (counted by times), positive and negative (as a percentage).
* Details about those fields:
    * **View** is counted by numbers of detail question page.
    * **Action** = ratings of Positive + Negative.
    * **Positive** (%) = ratings of Positive/Action.
    * **Negative** (%) = ratings of Negative/Action.
    
``General``

![general1](https://i.imgur.com/CE1YNbw.png)

* **Question**: The question will be filled in this section. It is displayed in the backend and on the frontend (if published)
* **URL Key**:
    * The content entered in this section is the URL of the detail question page.
    * To access the detail question page, customers need to click on the `Read more` link under each answer or click on the question when searching.
    * If you leave this field blank, the system will auto-create URL key for the detail question page.
    
* **Answer**:
    * The content entered in this section is the answer to the question as we mentioned above.
    * If you leave this field blank, after Saving, the status will be displayed in the Grid, called `PENDING`.
    * In contrast, if the answer field contains the content, the status in the Grid, called `ANSWERED`.
    
* **Categories**:
    * A question will belong to a certain field and admins can classify it by adding Category to Question.
    
    ![categories](https://i.imgur.com/VdbaSmu.png)
    
    * To display the Category, admins need to create it in the `Manage Categories` section.
    
* **Store Views**: A website can have many store views. Questions are only displayed with selected store views.
* **Visibility**: A question can have 3 visibilities. Real visibilities allow admins to distinguish what questions are public, which questions can be ignored and which questions need to be approved.
    * **Public**: Admins choose Public, this means that the questions will be displayed outside the frontend.
    * **Hidden**: When you choose this option, this means that the questions are removed by admins and will be hidden from the frontend.
    * **Need Approved**: When a question is submitted, or the question that admins don't want to display, they will use this option.
    
* **Position**: This field stipulates the order to display the question on FAQs Homepage, FAQs Category, and FAQs Product Tab.

``Customer Information``

![customer information](https://i.imgur.com/3DfW3PM.png)

* **Author Name**:
    * When a question is submitted, the name of the submitter is also submitted to the backend.
    * In case, the name isn't required, the information sent to the backend is Quest.

* **Author Email**:
    * When a question is submitted, the email of submitters is also submitted to the backend.
    * In case the email isn't required, the information sent to the backend is quest@gmail.com
    
* **Receive Email Notification**: 
    * When this section is selected, customers will get the email notification about the answer that they have submitted before.
    
``SEO Config``

![seo config](https://i.imgur.com/ibFcumZ.png)

* You can configure the meta that is useful for your better SEO
    * Set Meta title for question detail page
    * Set Meta description for question detail page
    * Set Meta keywords for question detail page
    * Set Meta Robots for question detail page

##### 1.2.2. Product

![product](https://i.imgur.com/psi5NWI.png)

* You can do Assign Products to the Question in the Products tab when you create a new post 
* In the list of the available products, mark the checkbox that is next to the products you want to assign
* Tap Save and Continue Edit, then hit Save to finish

### 2. Manage Categories
#### 2.1. Management Grid

![manage grid](https://i.imgur.com/zQwpHIo.png)

* This is a place to save all categories that admins have created.
* From the Grid, admins can know all basic information of question as `ID, the name and URL of the question, icon of the Category, the status of Category, Store View, the number of questions, Create Date, Update Date, Position, and Action`.
* Admins can perform some actions as the following: 
    * **Delete**: Admins need to tick and choose the question that they want to delete, then select **Delete** in the Action box (in the upper left of the grid) to delete. A confirmation dialog will appear, then choose `OK` to continue deleting.
    * **Change Status**: Admins need to choose the category that they want to change the status, then choose `Change Status > Enable/Disable` in the Action box (in the upper left of the Grid) to change the Status. Instantly, selected categories will be changed about the selected status.
    * **Edit**: To edit a rule, admins need to choose `Edit` in the Action box (the last column on the right of the Grid)
    * **Instant Edit**: Admins can edit some fields of the Rule in the Grid by clicking the mouse to the field you want to edit. The Grid will change as the following:

![grid](https://i.imgur.com/lOhYEFT.png)

* Also, admins can also filter, change the store view, hide/represent the columns or export the grid.

#### 2.2. Add New/Edit Form
##### 2.2.1. General

``General``

![general config](https://i.imgur.com/wUJijtl.png)

* **Name**: The name of Category entered in this section will be displayed both in the backend and frontend (if enabled and it has the dependent questions)
* **URL Key**:
    * The content filled in this field will be URL of the category page
    * To access the category page, customers only click on the name of category on the frontend
    * If you leave this field blank, the system will auto-create the URL key for category page
    
* **Status**: You need to enable this field so that the category will be displayed on the frontend when it has the dependent questions.
* **Store View**: A website has many store views. The category will only be displayed with selected store views.
* **Icon**:
    * Go to the page: https://fontawesome.com/ to choose the icon of the category you want.
    * When you copy class of the icon into the field, immediately, an illustrated icon will be shown.

* **Position**: Stipulate the orders to display the category in FAQs Homepage

``SEO Config``

![seo configure](https://i.imgur.com/mpfRxD1.png)

* You can configure the meta that is useful for your better SEO
    * Set Meta title for Category page
    * Set Meta description for Category page
    * Set Meta keywords for Category page
    * Set Meta Robots for Category page

##### 2.2.2. Question

![category information](https://i.imgur.com/6vDAYjn.png)

* You can do Assign Question to the Category in the Question tab when you create a new category
* In the list of the available question, mark the checkbox that is next to the question you want to assign
* Tap Save and Continue Edit, then hit Save to finish

### 3. Configuration
#### 3.1. General

![general configuration](https://i.imgur.com/dqY3ZmE.png)

* **Enable Module**: Choose Yes to enable this module
* **Choose FAQ's color**: The color that you choose in this section will stipulate the main color of FAQ Page on the frontend
* **Allow Voting For Helpfulness**: Choose Yes so that customers can rate Positive or Negative for each answer
* **Restrict Rating For**: Stipulating the customer group can rate the answer quality.

##### 3.1.1. Add Question Config

* It is a part of General Config
* This field stipulates the configuration about adding questions
* The action about adding questions will be displayed in the Question detail page

![add question config](https://i.imgur.com/LMGRURh.png)

* **Allow Guests To Add Questions**: There are 3 options to stipulate who can submit the question for admins

![allow add question](https://i.imgur.com/dkrYTqZ.png)


   * **Only Logged In Customer**: Only customers who have the account can add the question
   * **Yes**: All customers can add the question
   * **No**: No customers can submit the question. The question is only added by admins in **Manage Question**
   
* **Question maximum character**:
    * Limit the maximum character for a question
    * If you leave this field blank, the maximum character is 255
    
* **Need Admin’s Approved**:
    * Any submitted question will not be displayed on the frontend, it will be changed to **Manage Question**
    * Choose `Yes` so that the question has the visibility is `Need Approved` when changing to the **Manage Question**
    * If you choose `No`, the visibility of the question is `Hidden`.
    
* **The Name Field is**:

![add name field](https://i.imgur.com/aY5m0W1.png)

   * **No**: The name field won't be displayed on the frontend
   * **Optional**: The name field will be displayed on the frontend but customers don't need to fill in
   * **Require**: The name field will be displayed on the frontend and customers have to fill in this section so that the question is submitted
   * In case you choose `No and Optional`, the default name will be sent to the backend is `Quest`.

* **The Email Field is**:

![add email field](https://i.imgur.com/muWP6r3.png)

   * **No**: The email field won't be displayed on the frontend
   * **Optional**: The email name will be displayed on the frontend but customers don't need to fill in
   * **Require**: The email field will be displayed on the frontend and customers must fill in this field so that the question is submitted
   * In case you choose `No and Optional`, the default name will be sent to the backend is `quest@gmail.com`
   
* **Show Email Notification checkbox**:
    * Choose `Yes` so that the checkbox can receive the email when the answer is added and public
    * Customers need to tick on the new checkbox to allow receiving the email
    
##### 3.1.2. Question Detail Page Config

* It's a part of General Config
* This section stipulates the configuration about the Question Detail page

![question detail page](https://i.imgur.com/XlEXTg1.png)

   * **Enable Question Details Page**:
     * Choose Yes to view the question and answer detail when clicking on `Read More`
     * If choosing No, the answer will be displayed totally and it doesn't include the `Read More` link. The original URL of the question is also changed to 404 page
   * **Short answer maximum character**:
     * Limit the maximum character for each question
     * If leaving this field blank, the maximum character is 5

* **Detail Page Layout**:

![detail page layout](https://i.imgur.com/uzM704J.png)

* Select one of the following layouts to have your checkout page be shown in four different interfaces
  * 1 column
  * 2 columns with left bar
  * 3 columns with right bar
  * 3 columns

#### 3.2. FAQ Home Page Configuration

![faq homepage configuration](https://i.imgur.com/7w3UUHI.png)

* **Enable**: Choose Yes to enable the FAQ homepage
* **Route**: The route of FAQ Homepage is entered in this field. If leaving it blank, FAQ Homepage will be disabled
* **Insert FAQ link on**:
    * Choose the position for displaying the FAQ Homepage
    * There're 3 positions to display: Toplink, Footerlink, and Category Menu
    * FAQ Homepage link will not be displayed if you choose `Please Select`

* **Page Title**:
    * Fill in the page title
    * If leaving it blank, the default = Frequently Answer and Question

* **Page Layout**:

![page layout](https://i.imgur.com/n7LpV4u.png)

* Select one of the following layouts to have your checkout page be shown in four different interfaces
    * 1 column
    * 2 columns with left bar
    * 3 columns with right bar
    * 3 columns

* **Show Search Box**: Choose Yes to display the Search Box on the FAQ Homepage
* **FAQ Style**: Now we offer one style only is `Material`
* **Categories Columns**: Categories are arranged into 1 or 2 or 3 columns depending on the option that admins choose in this section
* **Question Style**:

![question style](https://i.imgur.com/b11Srmt.png)

   * **Collapsible**: On the FAQ Homepage, the answers will be collapsed with their questions. The answer only will be displayed if customers click on the question, and it will be hidden if the question is clicked again.
   * **Default**: The answer will be displayed under the question and customers cannot collapse the question anymore.
   
* **Limit Question per Category**:
    * Limit the maximum questions displayed on each category
    * If leaving it blank, the maximum questions displayed is 5
    
##### 3.2.1. SEO Config

![seo configuration](https://i.imgur.com/vQLSopz.png)

* You can configure the meta that is useful for your better SEO
    * Set Meta title for FAQ Homepage
    * Set Meta description for FAQ Homepage
    * Set Meta keywords for FAQ Homepage
    * Set Meta Robots for FAQ Homepage

#### 3.3. Product Tab Configuration

![product tab configuration](https://i.imgur.com/iMLvGoW.png)

* **Enable**: Choose Yes so that FAQ Tab can display in the Product Info Detail Box
* **Tab Title**:
    * Fill in the Tab Title
    * If leaving it blank, the default = FAQs
    
* **Limit question**:
    * Limit the maximum questions that displayed on the Product Detail Page
    * If leaving it blank, the maximum questions displayed is 5
    
* **FAQ Style**: Now we only offer one style, `Material`.
* **Question Style**:

![question style](https://i.imgur.com/9FZHDoo.png)

   * **Collapsible**: On the homepage, the answers will be collapsed with their questions. The answer will only be displayed if customers click on the question, and it will be hidden if the question is clicked again.
   * **Default**: The answer will be shown under each question and customers cannot collapse the question.   
    
* **Show Name**: Choose Yes to allow displaying the name of the person who has submitted the question
* **Show Date of Question/Answer**:
    * Choose Yes to display the date that the answer is public
    * `Note`: The date will be displayed if the name is shown (`Show Name = Yes`)
    
#### 3.4. Terms & Conditions

![terms and conditions](https://i.imgur.com/kT5OGiR.png)

* **Show Terms & Conditions when submitting questions**:

![show terms and conditions](https://i.imgur.com/FWuDko8.png)

   * **No**: Terms & Conditions will not be displayed on the frontend, `Submit Question Form`
   * **Yes (checkbox)**: Terms & Conditions will be displayed in the `Submit Question Form` under checkbox form. Customers need to tick on the checkbox, after that the question can be submitted.
   * **Yes (hidden)**: Terms & Conditions will be shown in the `Submit Question form` under the text. At this time, customers default to accept the term & condition of the store owner

* **Link popup label**: The name of popup Terms & Conditions. When clicking on the popup label, the popup that contains the content of Terms $ Conditions will be displayed
* **Title**: Allow filling in the title of the popup
* **Content**: The content will be displayed on the popup. We recommend you should use the HTML language.

#### 3.5 Email Configuration

![email configuration](https://i.imgur.com/oOWY0sR.png)

* **Enable**: Choose Yes so that the actions regarding the email can be enabled

##### 3.5.1. Email to Customer

![email to customer](https://i.imgur.com/kJQPe17.png)

* **Send an email to a customer when an answer is added**: Choose Yes to email the notification to customers when the answers are public and sent to the registered customers to receive the email
* **Sender**: Allow choosing one in five senders that Magento offers: General Contact, Sales Representative, Customer Support, Custom Email 1, and Custom Email 2
* **Template**:
    * The extension is installed an available template to send to customers
    * To change the FAQ Email Template, admins can create a new email template at the `Marketing > Email Template`
    * Refer the guide to create a new email template [here](https://www.mageplaza.com/kb/how-to-customize-email-template-transactional-email-magento-2.html)
    
##### 3.5.2. Email to Admin

![email to admin](https://i.imgur.com/KniXmkB.png)

* **Send an email to admins when a question is created**: Choose Yes to email the notification for admin when a question is submitted by customers.
* **Send To**: Fill in the email that you want to get the notification when a question is submitted
* **Template**:
    * The extension is installed an available template to send to customers
    * To change the FAQ Email Template, admins can create a new email template at the `Marketing > Email Template`
    * Refer the guide to create a new email template [here](https://www.mageplaza.com/kb/how-to-customize-email-template-transactional-email-magento-2.html)












