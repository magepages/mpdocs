# Better Maintenance

## Overview

With [Mageplaza Better Maintenance](https://www.mageplaza.com/magento-2-better-maintenance/), instead of seeing each error page every time store maintains, visitors will see the page is attractively and not boring at all. You can insert useful information on pages such as countdown timer, subscribe forms, and social sharing buttons that allow customers to share with their friends. This gives customers many interesting benefits in the process of waiting for the page. This is a great way to bring satisfaction to fastidious customers. 

We also support Coming Soon Page with similar features in this module.

## How to download and install

- [Download Mageplaza Better Maintenance](https://www.mageplaza.com/magento-2-better-maintenance/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


## How to Use

### Display Maintenance Page during maintenance time

![](https://i.imgur.com/I44SSJL.png)

### Show Coming Soon Page for New Products or Services

![](https://i.imgur.com/v5oIKHi.png)


## How to Configure

From the Admin Panel, go to `Stores > Settings > Configuration`, at the **Mageplaza Extension** tab select **Better Maintenance**

![](https://i.imgur.com/psjaf4M.png)

### 1. General Configuration

![](https://i.imgur.com/N4cZWlv.png)

- **Enable**: Select **Yes** to use the module's feature
- **Real Time of Website**:
  - Displays the current time according to the **Timezone** of the Website
  - Admin can check Timezone at **Configuration**, **Locale Options** in **General Options** of General tab
- **End Date Time**:
  - Select the end date of Maintenance mode
  - Countdown Timer will rely on End Date to count down
  - Time is calculated from the **Save Configuration** time to the **End Date**
- **Redirect To Page**
  - Select page to redirect customers to during maintenance/ waiting time
  - Admin can choose any **CMS Page** or design by yourself follow **Mageplaza's Maintenance Page or Coming Soon Page** templates
  - When it comes to **End Date** Time, any store's link will be redirected to the selected page (except **Whitelist IPs** and **Whitelist Page Links**).
- **Auto Switch to Live Site Mode**:
  - Select **Yes** to automatically switch to **Live Site Mode** when it comes to **End Date Time**
  - If **No**, **Maintenance** is always applied until the admin turn off the module or switches the **Auto Switch** to **Yes**
- **Whitelist IP(s)**:
  - Only IP addresses filled in this section can access the page without being redirected to **Maintenance Page**
  - It is possible to allow 1 IP address, multiple IP addresses, 1 range of IP addresses or multiple IP address ranges, IP addresses are separated by commas.
  - Store owners can also allow IP addresses as follows:
    - `10.0.0.10`, `10.0.0.*`, `10.0.*.*`, `10.0.0.* - 123.0.0.*`, `12.3.*.* - 222.0.*.*`
    - Symbol "*" in range 0 - 255
- **Whitelist Page link(s)**:
  - With the pages filled in this section, customers still can access them without being redirected to Maintenance Page. 
  - The pages are separated by a line. Each page link is on one line


### 2. Display Setting

The settings here will apply to both Better Maintenance Page and Coming Soon Page

#### 2.1. Clock Setting

- **Enable Clock**: Select **Yes** to display **Countdown Timer** in Frontend
- **Countdown Clock Style**:
  - We offer 5 types of Clock Style: **Simple, Circle, Square, Stack, Modern**
  - Admin needs to select 1 of 5 types to display at Frontend
- **Clock Background Color**:
  - The setting allows changing the background color of the clock
  - Not displayed with **Style = Simple**
  - After loading the template, if you don't like the background color, admin can choose the background color for the clock you want
- **Clock Inner Background Color**:
  - Allows changing the 2nd background color (internal color) of the clock
  - Only displayed with **Style = Stack**
- **Clock Number Color**:
  - You can choose the color of the numbers in the clock
  - After loading the template, if you don't like the color of the numbers, admin can choose the color of the number for the clock you want.

#### 2.2. Subscribe Setting

![](https://i.imgur.com/4oVdEqc.png)

- **Subscription Type**: 3 options can be selected:
  - **None**: Subscription form will not be displayed in Frontend
  - **Newsletter Subscription**: Subscribe form only includes **Email** field and **Subscribe** button. Admin can check the customer who subscribed by going to `Marketing > Communications > Newsletter Subscribers`
  - **Account Registration**: Display the form to register an account with the checkbox subscribe. Customers need to create an account to receive email newsletter
- **Subscription Description**:
  - Enter description of the Subscribe form.
  - If left blank, there is no description
- **Description Text Color**:
  - Change the text color of Description
  - If left blank, description will not be displayed in Frontend
- **Label Button**:
  - Set Label for **Submit form** button. Admin can customize in different languages
  - If left blank, **Default = Subscribe**
- **Button Text Color**:
  - Change the text color of Label
  - If left blank, **default = #FFFFFF**
- **Button Background Color**:
  - Change the background color of the button
  - If left blank, there is no default


#### 2.3. Footer Block

![](https://i.imgur.com/VVkhzxj.png)

- Select CMS Block to be the Footer at Frontend.
- The selected CMS Block is the footer of **Maintenance/ Coming Soon Page**. Therefore, it is recommended to select CMS Block Link on the **Whitelist Page Link(s)** list for customers to access.

#### 2.4. Social Contact

![](https://i.imgur.com/bHCgbCJ.png)

- **Enable**: Select **Yes** to display social contacts at Frontend
- **Label**: Set Label for **Social Contact** field
- **Label Color**: Change the text color of Label
- **Social Page Link**:
  - Admin can fill the links of the social page according to the corresponding fields
  - We offer 6 basic social pages: **Facebook, Twitter, Instagram, Google+, Youtube, Pinterest**
  - Each field is filled with links, their icons will be displayed in Frontend


### 3. Maintenance Page Setting

![](https://i.imgur.com/fr8j1W7.png)

- **Page Route**:
  - Enter the route name which appears on the URL. 
  - If you leave it blank, the default Route name is `mpmaintenance`. 
  - Example Route name is `https://domain.com/mpmaintenance`. You can change it to anything you want

- **Select Layout**: we provide 3 types of layout for the page
  - **Single-column**
  - **Double-column**
  - **Double-column with Left-side content**

- **Page Title**:
  - Set the Title of the Page
  - If left blank, **default = Under Maintenance**

- **Page Description**:
  - Enter Page Description 
  - If left blank, default = `We're currently down for maintenance. Be right back!`

- **Text Color**: Change the text color of **Page Title** and **Description**

- **Logo**:
  - Admin can upload the store **Logo** to **Maintenance Page**
  - Logo supports image files

- **Background Type**: 3 types of Background admin can be selected as follows:
  - **Image**: Background is a fixed image uploaded by admin
  - **Video**: Background is a fixed video uploaded by admin
  - **Multi-image**: Background is displayed as a photo slide uploaded by admin.

- **Upload File**:
  - Depending on the background type, the type file is changed.
  - Only upload **image files** if background type is **Image/ Multi Image**
  - Only upload **mp4 files** if background type is **Video**

- **Show Progress Bar**:

  - Select **Yes** to display the Progress Bar in **Maintenance Page**
  - This will help customer estimate the maintenance progress of the page

  - **Progress Value**: Enter the maintenance percentage that the page has made.
  - **Label**: Enter the label for **Progress bar**
  - **Label Color**: Change the font color for Label
  - **Progress Bar Color**: Change the background color of Progress bar
  
- **HTTP Response Header**: Send the status of the page to Google
  - **503 Service Unavailable**
  
  ![](https://i.imgur.com/LiqboYP.png)

  - **200 OK**
  
  ![](https://i.imgur.com/Ickb1Fm.png)

- **Preview button**: Admin can click **Preview** to quickly see the edited page. The **Preview** page has the same content as Frontend. If uploading files, need to save the configuration before previewing

### 4. Coming Soon Page Setting

![](https://i.imgur.com/1ufp4m1.png)

- **Page Route**:
  - Enter the route name which appears on the URL. 
  - If you leave it blank, the default Route name is `mpcomingsoon`. 
  - Example: Page route is https://domain.com/mpcomingsoon. You can change it to anything you want
  
  - **Select Layout**: we provide 3 types of layout for the page
  - **Single-column**
  - **Double-column**
  - **Double-column with Left-side content**

- **Page Title**:
  - Set the Title of the Page
  - If left blank, **default = Coming Soon**
  
- **Page Description**:
  - Enter Page Description 
  - If left blank, default = `Our new site is coming soon. Stay tuned!`

- **Text Color**: Change the text color of **Page Title** and **Description**

- **Logo**:
  - Admin can upload the store **Logo** to **Coming Soon Page**
  - Logo supports image files

- **Background Type**: 3 types of Background admin can be selected as follows:
  - **Image**: Background is a fixed image uploaded by admin
  - **Video**: Background is a fixed video uploaded by admin
  - **Multi-image**: Background is displayed as a photo slide uploaded by admin.

- **Upload File**:
  - Depending on the background type, the type file is changed.
  - Only upload **image files** if background type is **Image/ Multi Image**
  - Only upload **mp4 files** if background type is **Video**

- **Meta Title**: Enter the Meta Title for Coming Soon Page. This helps improve your SEO
- **Meta Description**: Enter Meta Description for Coming Soon Page. This will support better SEO
- **Meta Keywords**: Enter Meta Keyword for Coming Soon Page. This will support better SEO
- **Preview button**: Admin can click **Preview** to quickly see the edited page. The **Preview** page has the same content as Frontend. If the admin uploads files, need to save the configuration before previewing.
