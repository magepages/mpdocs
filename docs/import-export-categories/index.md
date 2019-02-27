# Import Export Categories Extension User Guide

## Overview 

Currently, stores use e-commerce sites more and more, thus shop owners must cooperate with suppliers to add categories pages to their stores. With [Mageplaza Import Export Categories extension](https://www.mageplaza.com/magento-2-import-export-categories/), customers can perform import and export of their categories by using the Import/ Export function.



How to Configure
1. Import
Step 1: Prepare data
Login to the Magento Admin, choose System> Import

In the Import Settings section, select Entity Type = "Mageplaza Categories Import" and click Download Sample File to download the file. We support the file type that can be used to import as CSV.
Check that the input file size does not exceed the limit shown in the message is 5M.

Edit the information you want to import in the template file

Step 2: Configure Import Behavior

In the Import Behavior section,
Select the action you want when importing data in the Import Behavior field:
Add / Update
Replace
Delete
The data stream is compared and executed based on the identify action of each categories đc import
With the option "Stop on Error" or "Skip Error Entries" to stop import when you get an error or ignore the error to continue importing
Next, in the "Allowed Errors Count" field, enter the error number to pause the import process. The default value is 10.
In the field separator field:
Field separator: Enter a marker to separate the field in the column. Default value is a comma (,)
Multiple value separator: Enter the mark to separate multiple values ​​in the cell of 1 column. Default value is a comma (,)
Note: In a CSV file, a comma is the default delimiter. To use a different character, make sure that the data in the CSV file matches the character you specify.
Fields enclosure: Check the checkbox to enclose the value in the column. The default value is apostrophe (")
Note:
If you want Replace or Delete, please enter the correct "category_id" of the category to be able to perform your operation.
Step 3: Select File to Import

In the Select File to Import section, click "Choose File" to select the data file to enter your categories.
Note: If Entity File = "Mageplaza Categories Import" then your input file must be correct in the fields in that file and the file format is CSV.
If the input contains a path to the product image, in case the "Images File Directory" is left blank, include your image in the directory with the path: pub / media / import / wysiwyg (if not available) need to create this folder)

Step 4: Check data and end data entry
After entering the above information, click "Check Data" at the top right to check if the data you entered is correct.
If the file is valid, click "Import" is displayed in the Validation Results section.

Otherwise, if the upload file is invalid or your process is wrong, correct the error reported in the message and try again.
Examples of displaying error messages when entering data incorrectly:

When the import process is complete, the system displays your action message.


2. Export
Login to the Magento Admin, choose System> Export

Step 1: Prepare to export product data
In the Export Settings section, select Entity Type = "Mageplaza Categories Export" to start exporting your categories.
Set the file format when exporting at Export File Format, select CSV.
Fields enclosure: Check the checkbox to enclose the value in the column. The default value is apostrophe (")

Step 2: Configure export data
After completing step 1, the Entity Attributes section will appear, listing all the properties available in alphabetical order.
To search for categories categories by category or category codes, enter the label / code in the Attribute Label / Attribute Code then click the Search button.
To export only records with specific attribute values, enter the value in the Filter column.
To not export properties, click the checkbox in the Exclude column.

Step 3: Export your data and open the CSV file to view
After completing Entity Attributes, please scroll down and click Continue on the lower left corner of the page to perform the file export action.
When prompted, click Save to save the exported file.
Open the CSV file to view or edit the imported data.
