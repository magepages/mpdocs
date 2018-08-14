# FAQ extension
## Overview



## How to use



## How to configure

Login to the Magento Admin, choose **Content > FAQs**

![how to configure](https://i.imgur.com/skj2kUi.png)

### Manage Articles
#### 1.1. Management Grid

![management grid](https://i.imgur.com/IPaZZOH.png)

* This is a place to save all required questions. It includes that admins have created and customers have created.
* From the Grid, admins can know all basic information of question as `ID, the content and URL of the question, who created the question, the status of the question (answered or not), Visibility (public, hidden, need approved), displayed store view, Helpful rate, Create date, Update date, Position, and Action`.
* Admins can perform some actions as the following: 
    * **Delete**: Admins need to tick and choose the question that they want to delete, then select **Delete** in the Action box (in the upper left of the grid) to delete. A confirmation dialog will be appeared, then choose `OK` to continue deleting.
    * **Change Visibility**: Admins need to tick adn choose the question that you want to change the Visibility, then choose `Change Visibility > Public/Hidden/Need Approved` in the Action box (in the upper left of the Grid) to change the Visibility. Instantly, selected questions will be changed about selected Visibility.
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
    * The content entered in this section is the answer for the question as we mentioned above.
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
    * **Need Approved**: When a question is submitted, or the question that admins don't want to public, they will use this option.
    
* **Position**: This field stipulates the order to display of the question in FAQs Homepage, FAQs Category, and FAQs Product Tab.

``Customer Information``

![customer information](https://i.imgur.com/3DfW3PM.png)

* **Author Name**:
    * 


























