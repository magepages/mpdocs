# Customer Attributes
## Overview

## Download and Install

- [Download on Mageplaza]()
- [How to Install]()

## How to configure

From the Admin Panel, go to `Customers > Attribute`

![how to configure](https://i.imgur.com/jaa9Alr.png)

### 1. Customer 

#### How to create new Customer Attributes

- Step 1: Enter full informaiton about Customer Attributes into Properties
- Step 2: Fill titles in Manage Labels to replace Attributes name that you want to show on the store
- Step 3: Enter the information into Storefront Properities to display Attributes at the store position you want

##### Step 1: Enter full informaiton about Customer Attributes into Properties

From the Admin Panel, go to `Customers > Attribute > Customer, chọn Add New Attribute`

![customer attributes](https://i.imgur.com/Hy3ce1X.gif)

###### 1.1. Attribute Properties

- `Default Label`:
  - Enter the name for Attributes. The Attributes name will be displayed while you enter the data
  - Be a required field to enter a value that is not allowed to be empty. If you leave it blank, the notification will be shown: "*This is a required field*".

- `Input Type`: Select the input type. For the `Upload Image`, it can be uploaded in .gif, .jpg, .png formats. Options include:
  - `Dropdown`:
  
  ![dropdown](https://i.imgur.com/How3KRx.png)

  - `Multiple-select`: Customers can choose many options at the same time
  
  ![multiple select](https://i.imgur.com/v2w8hbT.png)

  - `Multiple-select with image`: Show more Image columns in `Manage Options`. Customers can choose many images at the same time
  
  ![manage options](https://i.imgur.com/vnRfMiN.png)
  
  - `Single Select With Image`: Choose the Image. Display more Image columns in `Manage Options`
  
  ![manage options 2](https://i.imgur.com/VoL2UTF.png)
  
  - `Media Image, Single File Attachment`: Show `Choose File` button to upload the image or the file attachment from the laptop
  
  ![media image](https://i.imgur.com/dIVCpuo.png)
  
  - `Date`: Display more Calendar box. Click on the Calendar box to choose the time
  
  ![customer attributes 1](https://i.imgur.com/d64Jl5Z.png)
  
  
     - `Yes/No`: The `Default Value` field will be shown under Yes/No
      
  ![Imgur](https://i.imgur.com/F4MTObc.png)
  
     - `Text Field`: Display more `Input Validation` field to verify the input of `Default Value`
    
 ![Imgur](https://i.imgur.com/ywlwaDd.png)   
    
   - `Text Area`: Display the `Default Value` field under the text
    
  ![Imgur](https://i.imgur.com/B69Ww0p.png)
  
  - `Content`: 
  
  ![content](https://i.imgur.com/1lOZB7V.png)
  

  - `Value Required`: Choose Yes so that this is a required field to enter the value, choose No so that it's not a required field. If it's a required field, an icon will display in the left of the attribute `*`
    
###### 1.2. Manage Options

`Manage Options` only displays when you choose the `Input Type` as *Dropdown, Multiple Select, Multiple Select With Image, Single Select With Image*. 

  - Choose `Add option` to add options and it will show along with Attributes you create. `Delete` button is to remove the option.
  - You can enter the title into the store field that you want to show to replace that option
  
  ![Imgur](https://i.imgur.com/0kAp5k2.png)
  
  
###### 1.3. Advance Attribute Properties

- `Attribute Code`:
  - Enter the Attribute code. This field is used internally. Make sure you do not use spaces or more than 30 symbols.
  - If you leave blank, the default value is based on `Default Label` field.

- `Default Value`:
  - Enter the value for the Default Value field. The value you enter will be displayed along with the Attributes you create in the   - `Customer Account Create` section.
  - This field depends on the choice of the `Input Type` field

- `Input Validation`:
  - Select input validation type. This field will be displayed only when `Input Type` is set to be `Text Field`.
  - Validate the input of the `Default Value` according to the choice of the `Input Validation` field. Options include:

  ![Imgur](https://i.imgur.com/ADtBUXX.png)
  
- `Add to Customer Grid`: Choose Yes to add the attribute into `Customer Grid`. The column will be added into `Column options`, `Filter Option & Search Option` of `Customer Grid`.

![add to customer grid](https://i.imgur.com/zrmo8SQ.png)
  
- `Add to Sale Order Grid`: Choose Yes to add the attribute into `Sale Order Grid`. The column will be adeed into `Column options, filter option & search options` of `Sale Order Grid`

![add to sale order grid](https://i.imgur.com/5xhkfBm.png)
  
###### 1.4. Depend Fields

- `Select Field Depend`: Show the attributes when you select `Input type` as Dropdown and Single Select With Image. Thí field will display on the Frontend, admin customer form and admin checkout. Some attributes are available in the system as:

![select field depend](https://i.imgur.com/f0zJaCI.png)
  
- `Value Depend`:
  - Choose the value for `Value Depend` field
  - This field depends on the option of created attributes and choose the attributes of `Select Field Depend` field. This section will help you expand the options.
  
  ![value depend](https://i.imgur.com/zvKGqtt.gif)

``Note``: The display of attributes that you have created depends on the option selection.

##### Step 2: Fill titles in Manage Labels to replace Attributes name that you want to show on the store

Fill the titles in the Store fields that you want to show. The title will replace the Attributes name that you have created when entering the data. If you leave this field blank, the default attributes name is that you set in the `Default Label` field.

![new customer attribute](https://i.imgur.com/Q6Wci56.png)

##### Step 3: Enter the information into Storefront Properities to display Attributes at the store position you want

![attribute information](https://i.imgur.com/klxhC6F.png)





