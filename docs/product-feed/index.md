# Product Feed
## Overview





## How to configure

From the Admin Panel, go to **Store > Settings > Configuration > Mageplaza Extensions > Product Feed**

!

### Configuration

From the Admin Panel, go to **Store > Settings > Configuration > Mageplaza Extensions > Product Feed**, choose **General** section

!

#### General

* **Enable**: Choose "Yes" to use this module

#### Email Notification

* **Enable**: Choose "Yes" to enable the email notification for store owners
* **Send To**:
    * Enter the email to send the notification
    * Allow entering multiple emails. These emails are separated by commas.
    
* **Events**:
    * Choose the events that when it happens, the email notification will be sent
    * Be able to choose many events at once time
    
### Manage Feeds

#### How to create New Feed
* **Step 1**: Enter full information of General field
* **Step 2**: Choose Template type
* **Step 3**: Enter full information of Google Analytics
* **Step 4**: Choose the condition to export the file
* **Step 5**: Enter the Category Map for products
* **Step 6**: Setup the method to send the exported file
* **Step 7**: Check the update history of the exported file

##### Step 1: Enter full information of General field  

* From the Admin Panel, go to Products > Catalog > Product Feed > Manage Feeds
* In the right corner, choose `Add New Feed` button
* Enter the display name in the Grid Feed for the export type
* To cauto-update the products when running cron, choose Enable in the `Status` field
* Choose the store to get that store's product and generate the file
* Enter the export file name to send to the server

##### Step 2: Choose Template type

* Select the file format. There're 3 file formats: TXT, CSV, and XML
* Select the template format to export the file. There're 6 template formats. They are: Google Shopping XML, Google Shopping Review XML, Amazon Inventory XML, Amazone Marketplace XML, Facebook CSV, Ebay CSV
* Click on the `Load Template` button to display the template content
* For the template format is XML:
    * **Template Content**:The template content is displayed in this field. Admins can edit the template content here.
    * Add the values to the template by clicking on the `Insert Variable` button
    
* For the template format is CSV
    * Choose the character separating the fields when exporting the file in the `Field Separate` field
    * Select the character surrounding the fields when exporting the file in the `Field Around` field
    * To get the header field when exporting the file, choose "Yes" in the `Include Field Header` field
    * Allow adding any value you want into the `Fields Map` field. Please note that: The added values must be standard of Google or Facebook or Ebay, Amazon.
    
##### Step 3:  Enter full information of Google Analytics. These values will be added into URL of the product to know what the search engine is, what analytic keyword is, etc.

* Enter the value for the `Campaign Source` field
* Enter the value for the `Campaign Medium` field
* Enter the value for the `Campaign Name` field
* Enter the value for the `Campaign Term` field
* Enter the value for the `Campaign Content` field




    







