# Store Locator 
## Overview


## How to use

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


















