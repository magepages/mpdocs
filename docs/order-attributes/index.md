# Order Attributes
## Overview


## How to configure

From the Admin Panel, go to `Sales > Order Attributes`

![Imgur](https://i.imgur.com/zyMYBu9.png)

### 1. Configuration

From the Admin Panel, go to `Sales > Order Attributes > Configuration`

![Imgur](https://i.imgur.com/rpGyGI2.png)

- **Enable**: Choose Yes to use this module

### 2. Manage Attributes

#### 2.1. Grid

![Imgur](https://i.imgur.com/evdjT3L.png)

- This is a place to store all created Order Attributes
- From the Grid, admins can capture the basic information of Attribute such as: Default Label, Attribute Code, Type, Required, Position, Store View, Customer Group, Sort Order, Create At, Updated At and Action.
- To delete the Attribute, admins need to edit the attribute and click `Delete`
- In addition, admins can Filter, Change Store View, hide/show the Columns

#### 2.2. Add New Attribute
##### 2.2.1. Properties

![Imgur](https://i.imgur.com/JYrqF2W.png)

- **Default Label**: The default display name for Attributes in the Grid and Frontend
- **Attribute Code**:
  - Enter the Attribute code. Admins can use Attribute code to add some templates such as Order, Email, ...
  - Make sure you do not use spaces or more than 30 symbols.
  - If leaving this field, it is based on the Default Label field.

- **Input Type**: Select input/select data type. There are 11 input types that admins can choose:

![Imgur](https://i.imgur.com/eQZZ5Wq.png)

  - `Text`: The input type is a text line (not downstream).

![Imgur](https://i.imgur.com/VK6Si1v.png)

  - `Text Area`: The input type is a text. Customers can enter multiple lines of text in this field

![Imgur](https://i.imgur.com/v5wfkkd.png)

  - `Date`: This field has the format as Date. When accessing the checkout page, the field is assumed to be the current date.
  
 ![Imgur](https://i.imgur.com/5JH8dQs.png)
 
  - `Yes/No`: The field only includes 2 options as Yes or No.
 
 ![Imgur](https://i.imgur.com/KPsplFF.png)
 
  - `Dropdown`: The field has the format as Dropdown. Customers are only selected one of the options that admin has set in the backend

!

- `Multi-Select`: The field has the format as Multiple-Select. Customers can choose one or more options that admins have set in the backend

!

- `Single-select with image`: Customers only choose one of the Images/Colors that admins have set

!

- `Multiple-select with image`: Customers can choose one of the Images/Colors that admins have set

!

- `Media Image`: Customers can upload the image file (only include the image file, not docs file or PDF files, etc) that they want
- `Single File Attachment`: Customers can upload the attachment (not be uploaded the image) that they want
- `Content`: Customers can insert the image and enter the text as well as edit them with ease.

!

- **Default Value**:
  - Only display with the Input Type as `Text Field, Text Area, Date, Yes/No, Content`
  - This value will be displayed as the value of the field if the attribute is displayed in the Frontend

- **Values Required**:
  - Select Yes to force the users to enter a value for the field
  - Not displayed with `Input Type = Media Image and Single File Attachment`

- **Input Validation**:
  - Only show when `Input Type = Text Field`
  - Stipulate the values that are accepted in this field, which is one of the following values:

!

- **Input/Output Filter**:
  - Show when `Input Type = text field, text area`
  - It has the benefit as aiming to the HTML values that customers can enter the field
  - There're 3 options:
    - `None`: Ignore the check HTML, allow HTML tag that can work
    
 For example: test <p>HTML</p> is transformed into: !
 
 - `Strip HTML Tags`: Remove the HTML tags that include in the field
 
 For example: test <p>HTML</p> is transformed into: !
 
 - `Escape HTML Entities`: Encode the HTML tags that include in the field
 
 For example: test <p>HTML</p> is transformed into: !
 
 - `Add to Sales Order Grid`: Choose Yes so that the attribute is displayed in the grid at `Sale > Orders`
 - `Add to PDF Files`:
   - Show the compatiblity with Mageplaza PDF Invoice extensions (only apply for PDF Order)
   - You can refer the guide [here]()

- `Add to Confirmation Emails`:
  - Show to insert Order Attribute to the email confirm order
  - You can refer the guide [here]()

##### 2.2.2. Frontend Properties

!














