# Admin Permissions

## Overview

With [Mageplaza Admin Permissions Extension](https://www.mageplaza.com/magento-2-admin-permissions/), you can easily decentralize the management of your website in detail for each specific manager. The admin users can be authorized to view order list, invoice or shipment by each store, decentralize to be added, view, edit, delete categories, product, customer, product attribute and user role. It is also possible to authorize logging in or not to log in according to the time frames of the day and day of the week.

## How to download and install

- [Download Mageplaza Admin Permissions](https://www.mageplaza.com/magento-2-admin-permissions/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


## How to Configure

Login to the Admin Magento, choose `Stores > Configuration > Mageplaza > Admin Permissions`

![Imgur](https://i.imgur.com/z3oYaW9.png)

### I. Configuration
#### 1.General Configuration

![Imgur](https://i.imgur.com/Zud3vjy.png)

- **Enable**: Select **Yes** to enable the extension

### II. Admin Permissions

![Imgur](https://i.imgur.com/Vd5bHkz.png)

- Add the **Admin Permissions** field at **Add New /Edit User Role**.
- **Active**: If choose**Yes**,you are allowed to apply additional permissions settings below for users of that **User Role**.

#### 1. Sales

![Imgur](https://i.imgur.com/cdXDKGv.png)

- **Allow Access to**: Set the permissions to view the **Sales** item information according to **Store View** for admin accounts.
- **Limit Access to**: Limits the right to view details of the **Sales** item for the backend admin account: **Orders, Invoices, Shipments, Memo, Transaction.**


#### 2. Category

![Imgur](https://i.imgur.com/komQ7rX.png)

- **Can Create New**: Select **Yes** to allow admin account to create a new **Category**.
- **Allow Action (s)**: Set the **Action** that admin is allowed to perform with this Category:
  - **View**: Admin is only allowed to view authorized Categories.
  - **Edit**: Admin is allowed to edit authorized Category information.
  - **Delete**: Admin is allowed to delete authorized Categories.
- **Apply for**: Install the categories which the admin account is allowed to perform actions at **Allow Action** field
  - **All Categories**: Allows admin to perform actions with all categories.
  - **Specific Categories**: Allow admin to perform actions with some Categories selected in the **Category table**.

#### 3. Product

![Imgur](https://i.imgur.com/NFG4KXG.png)

- **Allow Create New**: Select **Yes** to allow an admin account to create a new Product.
- **Allow Action (s)**: Select the actions that admin is allowed to use with Product:
  - **View**: Admin is only allowed to view authorized products.
  - **Edit**: Admin is allowed to edit the information of authorized products.
  - **Delete**: Admin is allowed to delete authorized products.
- **Apply for**: Install products that admin accounts are allowed to perform actions at **Allow Action** field
  - **All**: Allows the admin user to do actions with every product.
  - **Specific Products**: Allows the admin user to do actions with some product selected in the **Product table**.
  - **Products created by this user**: Allows the user admin to perform actions with the product they create.
  - **Products created by the same-role users**: Enables admin users to do actions with the product created by themselves and those created by same user roles. 


#### 4. Customer

![Imgur](https://i.imgur.com/73b00zm.png)

- **Can Create New**: Select **Yes** to allow the admin account to create new customers.
- **Allow Action (s)**: Set the Action that the admin is allowed to use with Customer:
  - **View: Admin is only allowed to see customers authorized.
  - **Edit**: Admin is allowed to edit the information that customers are authorized.
  - **Delete**: Admin is allowed to view and delete Customer created by new and authorized customers.
- **Apply for**: Customer settings where the admin account is allowed to perform actions at **Allow Action** field
  - **All Customers**: Allows the admin to execute actions for every Customer.
  - **Specific Customers**: Allow the admin to perform actions with some Customer selected in the **Customer table**.


#### 5. Product Attribute

![Imgur](https://i.imgur.com/g79qqAy.png)

- **Allow Create New**: Select **Yes** to allow the admin account to create a new Product Attribute.
- **Allow Action (s)**: Install the actions that admin is allowed to use with Product Attribute:
  - **View**: Admin is only allowed to view the Product Attribute assigned.
  - **Edit**: Admin is allowed to edit the information of Attribute Attributes.
  - **Delete**: Admin is allowed to delete authorized Product Attributes.
- **Apply for**: Install product attributes that admin accounts are allowed to perform actions at **Allow Action** field
  - **All Product Attributes**: Allows admin to do actions with all Product Attribute.
 - **Specific Product Attributes**: Allow admin to perform actions with some Product Attributes selected in **Product Attribute table**.


#### 6.User Role

![Imgur](https://i.imgur.com/AdY2rmB.png)

- **Can Create New**: Select **Yes** to allow the admin account to create a new User Role.
- **Allow Action**: Install the Action that admin is allowed to use with the User Role:
  - **View**: Admin is allowed to view authorized User Roles.
  - **Edit**: Admin is allowed to edit the authorized User Role.
  - **Delete**: Admin is allowed to delete the authorized User Roles.
- **Apply for**: Install User Roles for which the admin account is allowed to perform actions at **Allow Action**
  - **All User Roles**: Allows the admin to do actions with all User Roles.
  - **Specific User Roles**: Allows admin to do actions with some User Roles selected in the **User Role table**.

#### 7.Time Valid

![Imgur](https://i.imgur.com/HGCDto7.png)

- Setting the valid/invalid time permission of the admin account.
- **Type**: Select a limited form for admin users:
  - **Allow**: Allow user account to login within the selected time
  - **Disallow**: Not allow user account to login within the selected time
- **Choose Day**: Select the days of the week that admin is authorized to work/not work. 
- **From**: Select the start time of the day that admin is authorized to work/not work. 
- **To**: Choose the end time of the day that the admin is authorized to work/not work. 
