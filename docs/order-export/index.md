# Order Export Extension
## Overview

## How to configure

From the Admin Panel, go to ``Sales > Order Export``

![how to configure](https://i.imgur.com/HPLYLTv.png)

### Admin can export the profile by 4 ways:

- 1. Manual: Go to `Manage Profiles > Edit Profile`, Click `Generate`. After the file is generated, go to `Donwload link` to download file
- 2. Cron: Profile is generated based on Cron: After a long time, profile will auto-generate the file content. After refresh, go to `Download link` to download file
- 3. Quick Export: Easy to export quickly order/invoice/memo/shipment in `Sales > Order/Invoice/Memo/Shipment`
- 4. Command: Use the command: `php bin/magento orderexport:generate`. After the profile is generated the content, go to `Download link` to download file

### 1. Configuration

Go to `Sales > Order Export > Configuration`

![configuration](https://i.imgur.com/2LmBvEJ.png)

- **General**:
  - **Enable**: Choose `Yes` to enable this module and display in the `Sales` section

- **Email Alert**:
  - **Enable**: Choose Yes to enable email notification for store owners
  - **Send to**:
    - Enter the email to send the notification
    - Allow entering many emails. These emails are separated by commas
    
  - **When**:
    - Choose the events that when it occurs, the email notification will be sent
    - Allow choosing many events simultaneously


### 2. Manage Profiles
#### 2.1. Grid

![manage profiles](https://i.imgur.com/ibNd7x0.png)

- This is a place where all the profiles are stored
- From the Grid, admins can capture the basic information of the Profile such as ID, Name, Object, Status, File Type, Run Mode, Created Date, Generated On and Action can be done with Profile.
- In the `Actions` dialog, admins can perform the following actions:
  - `Delete`: Admins needs to tick the profile that they want to delete, then select `Delete` in the Actions (upper left of the Grid) to delete. A confirmation dialog will appear, select `OK` to continue deleting.
  - `Generate`: Admins need tick tick the Profile that they want to generate data, then select `Generate` in the Actions dialog (top left of Grid) to `Generate`. A confirmation dialog will appear, select `OK` to confirm the data re-creation. Note that Profiles can be created or overridden on previous generated profiles that depend on the admin's choice in the profile.
  - `Change Status`: Admins need to tick the profile they want to change the status, then select `Change Status > Enable/Disable1` in the Actions dialog (top left of the Grid) to change. A confirmation dialog will appear, select `OK` to confirm the change.
  
- In the `Action` column, Admins can perform the following actions:
  - `Select > Edit`: Go to the `Edit Profile` page to edit the information
  - `Select > Download`: Download the profile

- In addition, Admins can Filter, Change Store View, hide/show Columns, Export Grid or edit inline.

![manage profiles 1](https://i.imgur.com/Zx4tlpj.png)

#### 2.2. Add New/Edit Profile Order form

To create a profile, admins need to do some following steps:
- Step 1: Enter the full information in the General section
- Step 2: Choose the template type
- Step 3: Add the condition for export profile
- Step 4: Set the mothod to send the exported file
- Step 5: Check the update history of the exported file

##### 2.2.1. General
- From the Admin Panel, go to ``Sales > Order Export > Manage Profiles``
- Choose `Add New Order`
- `General` Tab

![general information](https://i.imgur.com/8sCA18L.png)

- Fill in the name displaying in the `Grid Profile` for the export type
- `Status`: Choose Enable so that Profile can auto-export based on Cron or Command
- `File name`: Set the file nam when it is exported. File name will be shown as soon as it is downloaded
- `Add timestamp to file name`: Choose Yes so that when you you download, the file name will auto-add the file downloading time into the file name.

For example: File Name is OrderExport. If `Add timestamp to file name = yes`, when you download the file, the file name is `OrderExport_20181020_132054.xml`
- `Private Download URL`: the system will auto-create Download URL after Save. Download URL will have Secret key if possible. Anyone who has a Private Download Url can download the export file.
- `Secret Key`: Created a 32 character string when admins click on Reset Key. Secret Key will be automatically added to `Private Download Url` after Save.
- `Number of order exports`: After Generate, the system automatically updates the exported order number. These orders must satisfy the condition of the profile.
- `Schedule`:
  - `Auto run profile`:
    - Select No to Generate manually (Manual): Admins need to click Generate to export file
    - Select Yes to make the file automatically generate according to the cron schedule set below

  - `Cron schedule`: Set the interval between each Generate automatically


##### 2.2.2. Template

- Choose the file format. There're 5 formats: TXT, CSV, XML, Excel XML, TSV (table-delimited)
- Click on the `Load Default` button to display the template content that we have installed in the `Template` field. Admins can configure the Template as they want with ease.
- For the file format is XML, Excel XML:


    ![manage profile](https://i.imgur.com/w90xYOu.gif)


  - `Template Content`: The template content is shown in this field. Admins can edit the template here
  - Add values to the template by clicking on the `Insert Variable` button
  - After adding the template content, admins can click `preview` to see an example about the file content

- For file format is CSV, TXT, TSV:

   ![file format](https://i.imgur.com/X0qTqR7.gif)

  - `Export Type`:
    - `Loop order`: If you choose this format, when the file is exported, it will repeat the order with each item as a line
    
    [export type](https://i.imgur.com/3G1kRKy.png)

    - `Not loop order`: If you choose this format, when the file is exported, it will not repeat the order. Each order is a line, items will be listed on that line
    
  - To add attributes, admins can click on the `Add` button and choose `Value` to add into the template
  - Select the character separating the fields when exporting the file in the `Field Separate` field
  - Select the character that surrounds the fields when exporting the file in the `Field Around By` field
  - To get the header field when exporting the file, select `Yes` in the `Include Field Header` field
  - Click `Preview` to see an example of file content

##### 2.2.3. Condition

![condition](https://i.imgur.com/xBhD81E.png)











