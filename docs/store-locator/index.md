# Store Locator 
## Overview


## How to use

- Customers can see a list of all the addresses of the store branches
- Customers can quickly search any store with the Search feature
- Customers can zoom in, zoom out Map as well as can change the store search radius

## How to configure

From the Admin Panel, go to `Content > Store Locator`

![store locator 1](https://i.imgur.com/FriqZGs.png)

### 1. Configuration
#### 1.1. General

![store locator 2](https://i.imgur.com/p2RbOKC.png)

- `Enable`: Choose Yes to enable this module
- `Title`:
  - Enter the title for the page
  - Title plays a role as label of the link that accesses the page
  - If you leave this field blank, the default is Find a store
  
- `Description`: Enter the desciption for the page
- `Default website`: Enter the default website for the store. With stores that have multiple branches, admins can quickly synchronize the website with this item
- `Head Background Image`: Download the background for the head block
- `Head Icon`: Download icon for the head block
- `URL Key`:
  - Enter the link to access the page
  - If leaving this field blank, the default is `find-a-store`

- `Display Link On`: Select where the link can be displayed on the frontend
- `Enable Get Direction`: Select Yes to enable the directions to the store when customers want

##### 1.1.1. Filter store

![store locator 2](https://i.imgur.com/WFUKAjz.png)

- `Enable`: Select Yes to enable the search feature. Customers can quickly and easily find the store by the criterias below
- `Filter by current position`: Select Yes to have the map automatically filter to a certain radius from the customer's position
- `Search by`:
  - Select the criteria for customers to find the store they want
  - Multiple criterias can be selected at a time

#### 1.2. Map Settings

![store locator 3](https://i.imgur.com/d9FITwL.png)

- `Google Map API Key`: In order for Google Map to obtain the coordinates of the locations that admins have added, admins need to enter the Google Map API Key into this section.
- `Map Style`:
  - We provide 6 most popular Style Maps for admins to choose
  - Admins can only select one style at a time
- `AutoGeocode`: Select Yes so the map can automatically get the coordinates of the customers when they enter the page
- `Zoom Default`:
- `Filter Radius`:
  - Install the search radius store from the customer location that they can use
  - Radiuses are separated by commas
  - For example: `1,3,5,7,9`
  
- `Default Radius`:
  - Set default search radius store from customer location. When the client accesses the page, the map will filter the stores near them in this radius
  - This number may be different from the number entered in `Filter Radius` field

- `Distance Unit`: Admins can choose the unit distance as `Mile` or `Kilometer` depending on the local
- `Marker Icon`:
  - Select the icon representing the location of the store on the map
  - As it doesn't resize itself, admins need to put the icon with the size as 20x20 px before uploading

#### 1.3. Store Time Default

![store locator 4](https://i.imgur.com/U0im4oH.png)

- Admins can set the timezone and opening time for each item of the week for all stores. These values are only default values. They are only applied when admins click the `Use Config` button when they `Add New Location`

#### 1.4. SEO

![store locator 5](https://i.imgur.com/lTOyuXQ.png)

*You can configure the meta that is useful for your better SEO*

- `Meta Title`: Set Meta title for posts list page (Blog Page)
- `Meta Description`: Set Meta description for posts list page
- `Meta Keyword`: Set Meta keywords for posts list page
- `Enable Local SEO`: 


### 2. Locations
#### 2.1. Grid

![store locator 6](https://i.imgur.com/xo2drbv.png)

- This is a place to store all store locations that are created
- From the Grid, admins can capture the basics of Store Location such as ID, Name, Visibility, Store View, City, Zip Code, Country, Sort Order, Create Date and Action that can be done with Store Location.
- In the `Actions` dialog, admins can execute the following actions:
  - `Delete`: Admins need to tick Store Location to delete, then select `Delete` in the `Actions` (upper left of the Grid) to delete. A confirmation dialog will appear, select `OK` to continue deleting
  - `Change Visibility`: Admins need to tick Store Location to change the status, then select `Change Visibility > Yes/No` in the `Actions` dialog (top left of the Grid) to change. A confirmation dialog will appear, select `OK` to confirm the change

- In the `Action` column, admins can click on `Edit` to modify the Store Location
- In addition, admins can Filter, Change Store View, hide/show Columns, Export Grid or edit inline

![store locator 7](https://i.imgur.com/WR3BTBt.png)

#### 2.2. Add New/Edit Store Locator Order form
##### 2.2.1. General

![store locator 8](https://i.imgur.com/yHes7Ol.png)

- `Name`: The name entered here is displayed in both the backend and the frontend
- `Visibility`: Select Yes so that store locator is displayed on the frontend
- `Description`: Record a short description for the store
- `URL Key`:
  - Enter the link to access the location
  - If left blank, after you Save, based on the `Name` field, URL key will automatically create (unless Name is a hieroglyphic as Russian, Japanese, Korean, Chinese, etc)

- `Store View`: Store Location is only available in the selected Store View
- `Sort Order`:
  - Stipulate the display order of the Store Location on the Frontend
  - 0 is the highest position
  
##### 2.2.2. Location
###### 2.2.2.1. Address Information

![store locator 9](https://i.imgur.com/fuKi3Ix.png)

- Fill in the store location's address information in these fields
- After entering the correct address, admins click on `Get GPS coordinates` to automatically get coordinates and display on Maps

###### 2.2.2.2. Review Map

![store locator 10](https://i.imgur.com/22qt7Q1.png)

- The coordinates of the store location are shown here
- They can be obtained automatically when admins `Get GPS coordinates`, admins can also manually fill
- The coordinates change with the marker icon when it moves to another location, however the information on the address above (street, city, etc.) will not change.

##### 2.2.3. Time

###### 2.2.3.1. Open Hours

![store locator 11](https://i.imgur.com/gZBuyd0.png)

###### 2.2.3.2. Holiday

![store locator 12](https://i.imgur.com/BYOdkdd.png)

##### 2.2.4. Contact

![store locator 13](https://i.imgur.com/M8qXmH5.png)

##### 2.2.5. Images

![store locators 14](https://i.imgur.com/8LGgjSL.png)


![store locator 15](https://i.imgur.com/hcAyYGA.png)

- Select the condition to export the file. Any order that meets the conditions will be exported. If all fields (except Store Views field) are empty, all orders will be exported
- `Order Status`: The orders with the selected status will be exported
- `Customer Groups`: Orders placed by selected customers will be exported
- `Store Views`: The orders placed on the selected view store will be exported
- `Change order Status`: After generating the Store Location, the exported orders will change the status to the selected item. Admins can go to `Sales > Operations > Order` to check
- `Create From - To`: The orders placed during this time will be exported
- `Order ID From - To`: Orders that have IDs in the selected range will be exported
- `Export Duplicate`: Select No to export file over old file. However, if the file name adds a timestamp, the file is always created

##### 2.2.6. Delivery

- `Upload to a remote server`:
  - To send the exported file to the server, select `Yes` in the `Delivery` field
  - Select the file sending method in the Protocol: FTP or SFTP field
    - For FTP mode, there is an option to use `Passive Mode`. We recommend that you choose this mode to avoid being blocked by firewalls/NATs/proxies from sending files to the server.

  - Enter the host name in the `Host Name` field
  - Enter the host name in the `User Name` field
  - Enter the password to access the host in the `Password` field
  - If you want to save the file anywhere, enter the path in the `Directory Path` field.
  - To check whether it is connected to the host or no, press `Test Connection`

![store locator 16](https://i.imgur.com/A6XKXuI.gif)

- `Email`:

![email](https://i.imgur.com/ulRiWDp.png)

  - Select Enable so that admins can receive the email with attached export file when Store Location is delivered
  - Admins can select one of 5 Magento available senders to be the sender, including: **General Contact, Sales Representative, Customer Support, Custom Email 1, Custom Email 2**
  - `Email subject`: Fill the subject for email
  - `Send Email To`: Enter the email that admins want to receive the notification when uploading the file to the error remote server. You can enter multiple emails separated by `,`
  - `Email Template`:
    - The extension is pre-installed Email notification
    - To change Email Template, admins can create another Email Template under `Marketing > Email Template`.
    - How to create a new Email Template [here](https://www.mageplaza.com/kb/how-to-customize-email-template-transactional-email-magento-2.html)

##### 2.2.7. History

- Check the update history of the exported files. Admins can check the update history of files in the `Logs` section

![Imgur](https://i.imgur.com/RcjOOgg.png)

``NOTE: Creating a Store Location of Invoice, Credit Memo, Shipment is similar as creating a Store Locator of Order, but there is no Change Order Status field.``

### 3. Holidays
#### 3.1. Grid

![Imgur](https://i.imgur.com/FxebbZV.png)

#### 3.2. Add New/Edit Form

##### 3.2.1. General

![Imgur](https://i.imgur.com/BLXAwCD.png)

##### 3.2.2. Locations

![Imgur](https://i.imgur.com/PfMz0qZ.png)

### 4. Frontend


