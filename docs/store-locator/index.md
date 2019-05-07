# Store Locator 
## Overview

Developed by Mageplaza experts, [Store Locator](https://www.mageplaza.com/magento-2-store-locator/) is one of the best extensions that allows customers to purchase the desired products in the nearest store with ease. Integrated with Google Maps and GPS, everything becomes easier for customers in finding the nearest shop location. 

Especially, if customers want to be active in getting their orders. Store Pickup function allows them to choose the nearest store and time to pick their purchased items. Moreover, it comes with many powerful functions, we sure that you will be satisfied with the benefits that this module brings. Let's experience it right now!

## How to use

- Customers can see a list of all the addresses of the store branches

![](https://i.imgur.com/KGGZqnt.png)

- Customers can quickly search any store in a certain area. For example, when a customer searches in Washington, all stores in the selected radius in Washington will be displayed.

![](https://i.imgur.com/RyJtVWd.png)

- Customers can zoom in, zoom out Map as well as can change the store search radius

![](https://i.imgur.com/X9KNDqr.gif)

- By clicking on the detail, customers will see detailed information about the Store and can use the directions to the selected store

![](https://i.imgur.com/Tu8jvUL.png)

- **Checkout page**: show the detail information including store location, shipping fee and pickup time after that customer can get their items. Please make sure that the products in cart have the same addresses as store locator. If not, the error message will be shown. coressponding to the ordered products. Click **Select Store** to show popup.

![](https://i.imgur.com/R2ABThH.png)

- Click **Select Store** to show popup. In here, customer should choose the location and time to pick their items up.
- **Note**: Only show the opening time of stores. The time waiting for order is available or the closing time of store will be hiden, customers cannot choose them. Then click **Submit** button to confirm the store location and time to pickup items. Click **Cancel** to quit the popup. 

![](https://i.imgur.com/tMi593o.png)

- **Frontend Order**: Record the order data: time, location, shipping fee customers choose to get their items. 

![](https://i.imgur.com/Cbt286R.png)

## How to configure

- There're 2 ways to access the menu of the extension:
  - 1. `Content > Store Locator`
  
  ![](https://i.imgur.com/mSGJanL.png)
  
  - 2. Enable Mageplaza Menu, all extensions of Mageplaza you are installing will be displayed in this menu:
  
  ![](https://i.imgur.com/oAw0jjx.png)


### 1. Configuration
#### 1.1. General

![](https://i.imgur.com/l5431CP.png)

- `Enable`: Choose Yes to enable this module
- `Title`:
  - Enter the title for the page
  - Title plays a role as label of the link that accesses the page
  - If you leave this field blank, the default is Find a store
  
- `Description`: Enter the desciption for the page
- `Default website`: Enter the default website for the store. With stores that have multiple branches, admins can quickly synchronize the website with this item
- `Head Background Image`: Upload the background for the head block
- `Head Icon`: upload icon for the head block
- `URL Key`:
  - Enter the link to access the page
  - If leaving this field blank, the default is `find-a-store`

- `Display Link On`: Select where the link can be displayed on the frontend
- `Enable Get Direction`: Select Yes to enable the directions to the store when customers want

##### 1.1.1. Filter store

![](https://i.imgur.com/E4behlO.png)

- `Enable`: Select Yes to enable the search feature.
- `Auto-Filter by current position`: Select Yes so that customers can move the maps back to their position by one click in the search box:

![](https://i.imgur.com/SW1ltyZ.png)


#### 1.2. Map Settings

![](https://i.imgur.com/YeGQ2hA.png)

- `Google Map API Key`: In order for Google Map to obtain the coordinates of the locations that admins have added, admins need to enter the Google Map API Key into this section.
- `Map Style`:
  - We provide 4 most popular Style Maps for admins to choose
  - Admins can only select one style at the same time
  - Admins can also custom the maps as they want by themselves. Admins can add `Map Style` as the guide in the last section of this page.
  
- `Zoom Default`:
  - Set map zoom factor (count by %)
  - We recommend a zoom factor as 12%
  
- `Filter Radius`:
  - Install the search radius store from the customer location that they can use
  - Radiuses are separated by commas
  - For example: `10,20,50,100`
  
- `Default Radius`:
  - Set default search radius store from customer location. When the client accesses the page, the map will filter the stores near them in this radius
  - This number may be different from the number entered in `Filter Radius` field
  - If you leave this field blank, the default radius is 6731 miles (the same as the radius of the earth)

- `Distance Unit`: Admins can choose the unit distance as `Mile` or `Kilometer` depending on the local
- `Marker Icon`:
  - Select the icon representing the location of the store on the map
  - As it doesn't resize itself, admins need to put the icon with the size as 20x20 px before uploading

#### 1.3. Store Time Default

![](https://i.imgur.com/U0im4oH.png)

- Admins can set the timezone and opening time for each item of the week for all stores. These values are only default values. They are only applied when admins click the `Use Config` button when they `Add New Location`

#### 1.4. SEO

![](https://i.imgur.com/lTOyuXQ.png)

*You can configure the meta that is useful for your better SEO*

- `Meta Title`: Set Meta title for posts list page (Blog Page)
- `Meta Description`: Set Meta description for posts list page
- `Meta Keyword`: Set Meta keywords for posts list page
- `Enable Local SEO`: 


### 2. Locations
#### 2.1. Grid

![](https://i.imgur.com/TPZ895i.png)

- This is a place to store all store locations that are created
- From the Grid, admins can capture the basics of Store Location such as ID, Name, Visibility, Store View, City, Zip Code, Country, Sort Order, Create Date and Action that can be done with Store Location.
- In the `Actions` dialog, admins can execute the following actions:
  - `Delete`: Admins need to tick Store Location to delete, then select `Delete` in the `Actions` (upper left of the Grid) to delete. A confirmation dialog will appear, select `OK` to continue deleting
  - `Change Visibility`: Admins need to tick Store Location to change the status, then select `Change Visibility > Yes/No` in the `Actions` dialog (top left of the Grid) to change. A confirmation dialog will appear, select `OK` to confirm the change

- In the `Action` column, admins can click on `Edit` to modify the Store Location
- In addition, admins can Filter, Change Store View, hide/show Columns, Export Grid or edit inline

![](https://i.imgur.com/pSdlUZY.png)

#### 2.2. Add New/Edit Store Locator Order form
##### 2.2.1. General

![](https://i.imgur.com/yHes7Ol.png)

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

![](https://i.imgur.com/fuKi3Ix.png)

- Fill in the store location's address information in these fields
- After entering the correct address, admins click on `Get GPS coordinates` to automatically get coordinates and display on Maps

###### 2.2.2.2. Review Map

![](https://i.imgur.com/22qt7Q1.png)

- The coordinates of the store location are shown here
- They can be obtained automatically when admins `Get GPS coordinates`, admins can also manually fill
- The coordinates change with the marker icon when it moves to another location, however the information on the address above (street, city, etc.) will not change.

##### 2.2.3. Time

###### 2.2.3.1. Open Hours

![](https://i.imgur.com/gZBuyd0.png)

###### 2.2.3.2. Holiday

![](https://i.imgur.com/BYOdkdd.png)

- Holidays created under `Content > Store Locator > Holidays` will be displayed in this section
- The selected holidays will be applied for the store. Opening times on the Frontend will change from Open to Close on holidays

##### 2.2.4. Contact

![](https://i.imgur.com/bhsNsSt.png)

- Admins can enter their contact information to display on the frontend
- Basic information includes: phone number, website address, fax number and email address

##### 2.2.5. Images

![](https://i.imgur.com/QXDBgfn.png)

- Admins can upload typical images of the store to display on the Frontend.
- The uploaded first image is displayed on the store locator page, the remaining images is displayed as a slider when the customer clicks on the location detail.

##### 2.2.6 Available Products

![](https://i.imgur.com/uPvDQl9.png)

- **Show on Product Page**: Select **Yes** to allow showing specific store can be picked up on **Product Page**. For each Product page, customer can click to `See available pickup stores` to check in which stores that product is available. 


![](https://i.imgur.com/LetNmhr.gif)

- **Selected Product**: This part records the information of products within related stores. Admin can search, filter product ID, SKU, Price in the Grid. Admin can add products to each store locator. 

![](https://i.imgur.com/c63fmUb.png)


#### 2.3. Manage Holidays Grid

![](https://i.imgur.com/CI4jaOd.png)

- This is a place to store all the Holidays that admins installed for store
- From the Grid, admins can capture basic Holiday information such as: ID, Name, Status, No. of Locations, Create Date and Action that can be done with Holiday
- In the `Action` dialog, admins can execute the following actions:
  - `Delete`: Admin need tick tick Holiday to delete, then select delete in the Actions (upper left of the Grid) to delete. A confirmation dialog will appear, select OK to continue deleting
  - `Change Status`: Admins need tick tick Holiday that they want to change status, then, choose `Change Status > Yes/No` in the `Action` dialog (top left of the Grid) to change. A confirmation dialog will appear, select `OK` to confirm the change

- In the `Action` column, Admin can click Edit to modify Holiday information
- In addition, admins can Filter, Change Store View, hide/show Columns, Export Grid or edit inline


![](https://i.imgur.com/QDhVqAq.png)

#### 2.4 Add New/Edit Form

##### 2.4.1. General

![](https://i.imgur.com/BLXAwCD.png)

##### 2.4.2. Locations

![](https://i.imgur.com/9EJOjjP.png)

- The created locations in the `Content > Store Locator > Locations` section will be displayed in this section
- Selected stores will be applied for this holiday. Opening times on the Frontend will change from Open to Close on holidays.


## How to add Map Style
- Step 1: Choose `Map Style = Custom`

![](https://i.imgur.com/qcYHaJD.png)

- Step 2: Click here in the comment. The link will be lead to https://snazzymaps.com/

![](https://i.imgur.com/qBwCXvK.png)

- Step 3: Click on Map Style that you want. For example: `Lost in the desert`

![](https://i.imgur.com/UbXsqgD.png)

- Step 4: Expand Code and Copy JAVASCRIPT STYLE ARRAY into the Custom checkbox in the configuration

![](https://i.imgur.com/Dbl5elA.png)

- Step 5: Save and check on the frontend

![](https://i.imgur.com/ST2Xc41.png)



## Mageplaza Store Pickup

### 1. Configuration

Login to the **Magento Admin**, choose `Stores > Configuration > Sales > Shipping Methods > Mageplaza Store Pickup`.

![](https://i.imgur.com/A46M7gC.png)

- **Enable**: Select **Yes** to enable using the Shipping Methods feature with Mageplaza Store Pickup.
- **Title**:
  - Enter the title for the **Shipping Methods** type with [Mageplaza Store Pickup]().
  - If left blank, the default is *Select Store to pickup*.

![](https://i.imgur.com/CbTInj1.png)

- **Method Name**:
  - Enter a name for this Shipping methods type and will appear on Shipping methods when the customer checkout.
  - If left blank, the default is *Store Pickup*.
  
  ![](https://i.imgur.com/cz58Vbv.png)

- **Price**: Enter the price for shipping methods. If left blank, the ship price will default to 0.
- **Calculate Handling Fee**: Select the **Handling Fee** for the shipping methods, this price will be added to the Price field and displayed in shipping methods when the customer checkout. With two **Handling Fee** types:
  - **Fixed**: Shipping methods will be calculated according to the price and handling free fields as follows: Price + Handling Fee. For example: Price: 5, Handling Fee: 6, so the total ship charge is: 5 + 6 = 11.
  - **Precent**: Shipping methods will be calculated according to the free and handling price fields: Price + Handling Fee. For example: Price: 5, Handling Fee: 6, so the ship's total charge is: 5 + 5 * 6/100 = 5.3.
- **Handling Fee**: Enter the price for Handling Free. If left blank, the default is 0.
- **Pickup ready after**:
  - Enter the number of days after ordering at least how many days customers can pick up the goods.
  - If left blank means that the product is always available in the store so customers can pick it up during business hours at any time.
  
  ![](https://i.imgur.com/sNS9uV6.png)
  
- **Sort Order**:
  - Enter the number in the Sort Order field. Display sort order for Shipping method when customer pays. The higher the number, the more priority the shipping method has. With 0 being the highest.
  - If left blank, the default is 0.

### 2. Form Add New/Edit Product

Login to the **Magento Admin**, choose `Catalog > Products Add new/Edit any product`

![](https://i.imgur.com/BZ8iBe2.png)

- **Available Store Pickup**:
  - Select store locator to display product on that store locator.
  - If left blank, the product will not display and be in any store locator.
- **Note**: If the Form **Add New/Edit Store locator** has been selected, in this part the product will be selected for that store locator. Or you can edit the store locator for each product here.

### 3. Orders Backend
This section records the store locator's address information, after ordering for how long the customer can come to pick up the goods and the amount of additional charges customers have to pay as shipping,...

![](https://i.imgur.com/gNEm5l5.png)


## Notation

If you want to **uninstall the extension**, please use composer to run the command `bin/magento module:uninstall Mageplaza_StoreLocator`

Find the follow table to delete extension `mp_mageplaza_storelocator_holiday`, `mp_mageplaza_storelocator_location`, `mp_mageplaza_storelocator_location_holiday` attribute in your data base. 

![](https://i.imgur.com/ljzEl0d.png)


Go to data base > table `eav_attribute`. At `attribute_code`, delete attribute `mp_pickup_locations`

![](https://i.imgur.com/7ZXhr7g.png)

Next, go to `mp_cms_block` then delete `mp-storelocator-block`

![](https://i.imgur.com/ayowyoM.png)
