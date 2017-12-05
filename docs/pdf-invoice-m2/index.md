# PDF Invoice

## Overview
Mageplaza offers a solution to help customers easily print, download PDF Invoice, PDF Order, PDF Shipment, PDF Credit Memo quickly and easily with just a single click on the customer information page. To enhance user experience, PDF files are included in emails to customers. In addition, Mageplaza also adds the HTML edit feature so shop owners can customize their PDF files, and Preview function also allows them to take an overview look at the newly created design conveniently.

```
* This extension can be used in multiple stores.
* Stores will be defaulted under the Default Configuration.
* To change the configuration of each store, admins have to uncheck "Use Website" at the left of each Option.
* Extension’s configuration in each store will be applied to the selected store.
* Configuration of this store won’t take impact on the other store’s configuration.
```

## How to configure
Log in to your Magento Admin, follow the path ``Mageplaza > PDF Invoice`` 

### 1. Configuration.
#### 1.1. General Configuration
Keep going from ``Mageplaza > PDF Invoice: Configuration > General Configuration``, expand the section

![i2](https://i.imgur.com/b2B1s43.png)

* In **Enable PDF Invoice** field:
  * Uncheck the **Use system value** to configure the extension. Choose “Yes” to enable it
  * Tick **Use system value** again to use “Enable PDF Invoice = Yes” as your default.
* Expand **Business Information** field:
  * In **Company Name** field:
    * Enter your company/store name, it will be displayed in your PDF invoice.
    * If you leave it blank, the Company Name place won’t have a name.
    * Check **Use system value** to use it as default.
  * In **Logo** field:
    * Select your logo file displayed on the PDF file.
    * Only image/video file can be valid; otherwise, there will be an error message.
    * If you leave it blank, the default logo will be displayed.
    * Check **Use system value** to use it as default.
  * In **Address** field:
    * This is the place where you can fill in your company/store’s address, this will be displayed in the PDF invoice file.
    * If you leave it blank, address information won’t be seen.
    * Check **Use system value** to use it as default.
  * In **VAT number** field:
    * Enter your company/store’s VAT number to perform it on the PDF file.
    * There won’t be VAT number displayed if you leave it blank.
    * Check **Use system value** to use it as default.
  * In **Phone** field:
    * Enter your company/store’s phone numbers.
    * If you leave it blank, phone numbers won’t be seen.
    * Check **Use system value** to use it as default.
  * In **Email** field:
    * Enter your company/store’s official email address.
    * There won’t be email displayed if you leave it blank.
    * Check **Use system value** to use it as default.
  * In **Registered Number** field:
    * Enter your company/store’s business number in this field.
    * If you leave it blank, PDF invoice file won’t display it.
    * Check **Use system value** to use it as default.

#### 1.2. Order 

![i3](https://i.imgur.com/1SL9eM6.png)

* In **Enable PDF Attachment** field:
  * Uncheck the **Use system value** to configure the extension. Choose “Yes” to send the PDF invoice attached along with the email.
  * Tick **Use system value** again to use “Enable PDF Attachment = Yes” as your default.
* In **Select Template** field:
  * Uncheck the **Use system value** to configure the extension. Choose “Template” to display the PDF file as in the selected template.
  * All your created templates will be displayed as a drop-down list in this section.
  * Tick **Use system value** to use “Select Template = Template 1” as the default setting.

![i4](https://i.imgur.com/CUtdV3I.png)

* In **Show Custom Print Button** field:
  * Uncheck **Use system value** to configure this field.
    * **Show Custom Print Button = Both**: This will display an additional ``Print PDF Order`` button in the backend’s Order and the frontend’s My order page. When customers click the ``Print PDF Order`` button, the designed PDF template will be downloaded automatically. 

*Frontend*
![i5](https://i.imgur.com/WjZc6ND.png)
    
* 
  *
    * **Show Custom Print Button = Custom PDF**: This won’t display ``Print PDF Order`` button. The button will be combinated with ``Print`` button by Magento 2. When the button is clicked,  the designed PDF template will be downloaded automatically. 

*Frontend*
![i6](https://i.imgur.com/AeoHW8i.png)
*Backend*
![i7](https://i.imgur.com/fVa7xjP.png)

*
  *
    * **Show Custom Print Button = No**: This won’t display ``Print PDF Order`` button. When the button is clicked at My Order page on the frontend,  the file will be downloaded as the Magento 2’s template.
  * Check **Use system value** to use “Show Custom Print Button = Both” as the default setting.

#### 1.3. Invoice

![i8](https://i.imgur.com/1SL9eM6.png)

* In **Enable PDF Attachment** field:
  * Uncheck **Use system value** to configure the extension. Choose “Yes” to send emails along with the attached PDF invoice.
  * Check **Use system value** to set “Enable PDF Attachment = Yes” as the default setting.
* In **Select Template** field:
  * Uncheck **Use system value** to configure the extension. Choose “Template” to display the PDF file as selected template.
  * Check **Use system value** to use “Select Template = Template 1” as the default setting.

![i9](https://i.imgur.com/CUtdV3I.png)

* In **Show Custom Print Button**:

![i10](https://i.imgur.com/JvnB0RG.png)

* 
  * Uncheck **Use system value** to configure the extension. Choose ``Print`` button to display:
    * **Show Custom Print Button = Both**: This will display ``Print PDF Invoice`` button in the backend’s invoice and on the My Order page of the frontend. When clicking that button, the designed PDF template will be downloaded automatically.

*Frontend*
![i11](https://i.imgur.com/8iZR8Me.png)
*Backend*
![12](https://i.imgur.com/I4UlfDC.png)

* 
  *
    * **Show Custom Print Button = Custom PDF**: This won’t display ``Print PDF Invoice`` button. The button will be combinated with ``Print`` button by Magento 2. When the button is clicked,  the designed PDF template will be downloaded automatically. 

*Frontend*
![i13](https://i.imgur.com/PtXw5rO.png)
*Backend*
![i14](https://i.imgur.com/iHsaijO.png)

*
  *
    * **Show Custom Print Button = No**: This won’t display ``Print PDF Invoice`` button. When admins click ``Print`` in the backend’s Invoice and customers click ``Print Invoice`` in My Order of the frontend, the order file will be downloaded as the Magento 2’s template.

*Frontend*
![i15](https://i.imgur.com/PtXw5rO.png)
*Backend*
![i16](https://i.imgur.com/iHsaijO.png)

#### 1.4. Shipment

![i17](https://i.imgur.com/afiFw01.png)

* In **Enable PDF Attachment** field:
  * Uncheck **Use system value** to configure the extension. Choose “Yes” to send emails along with the attached PDF invoice.
  * Check **Use system value** to set “Enable PDF Attachment = Yes” as the default setting.
* In **Select Template** field:
  * Uncheck **Use system value** to configure the extension. Choose “Template” to display the PDF file as selected template.
  * Check **Use system value** to use “Select Template = Template 1” as the default setting.

* In **Show Custom Print Button**:
  * Uncheck **Use system value** to configure the extension. Choose ``Print`` button to display:
    * **Show Custom Print Button = Both**: This will display an additional ``Print PDF Shipment`` button in the backend’s Order and the frontend’s My order page. When customers click the ``Print PDF Shipment`` button, the designed PDF template will be downloaded automatically.

*Frontend*
![i18](https://i.imgur.com/DRntQ9g.png)
*Backend*
![i19](https://i.imgur.com/hasdakk.png)
    
* 
  *
    * **Show Custom Print Button = Custom PDF**: This won’t display ``Print PDF Order`` button. The ``Print PDF Shipment** button will be combinated with ``Print`` button by Magento 2. When admins click ``Print`` of the Shipment (in the backend) or customers click ``Print Shipment`` (``My account > My Order`` of the frontend),  the designed PDF template will be downloaded automatically. 

*Frontend*: 
![i19](https://i.imgur.com/VrxYhFb.png)
*Backend*
![20](https://i.imgur.com/gJtIkNC.png)

*
  *
    * **Show Custom Print Button = No**: This won’t display ``Print PDF Shipment`` button. When admins click ``Print``of the Shipment in the backend’s or customers click ``Print Shipment`` in My Order of the frontend, the file will be downloaded as the Magento 2’s template.

*Frontend*
![i21](https://i.imgur.com/VrxYhFb.png)
*Backend*
![i22](https://i.imgur.com/gJtIkNC.png)

#### 1.5. Credit Memo

![i23](https://i.imgur.com/mqEQiqt.png)

* In **Enable PDF Attachment** field:
  * Uncheck **Use system value** to configure the extension. Choose “Yes” to send emails along with the attached PDF invoice.
  * Check **Use system value** to set “Enable PDF Attachment = Yes” as the default setting.
* In **Select Template** field:
  * Uncheck **Use system value** to configure the extension. Choose “Template” to display the designed PDF as in the selected template.
  * Check **Use system value** to set “Select Template = Template 1” as default setting. 
* In **Show Custom Print Button**:
   * Uncheck **Use system value** to configure the extension. Choose ``Print`` button to display:
     * **Show Custom Print Button = Both**: This will display an additional ``Print PDF Refund`` button in the backend’s Credit Memo and the frontend’s My order page. When customers click the ``Print PDF Refund`` button, the designed PDF template will be downloaded automatically.

*Frontend*
![i24](https://i.imgur.com/CggDPNS.png)
*Backend*
![i25](https://i.imgur.com/l2NTuok.png)
*
  *
    * **Show Custom Print Button = Custom PDF**: This won’t display ``Print PDF Refund`` button. The ``Print PDF Refund** button will be combinated with ``Print`` button by Magento 2. When admins click ``Print`` of the Credit Memo (in the backend) or customers click ``Print Credit Memo`` (``My account > My Order`` of the frontend),  the designed PDF Credit Memo template will be downloaded automatically. 

*Frontend*: 
![i26](https://i.imgur.com/sCEwclh.png)
*Backend*
![27](https://i.imgur.com/c4DyTPY.png)

*
  *
    * **Show Custom Print Button = No**: This won’t display ``Print PDF Refund`` button. When admins click ``Print``of the Credit Memo section (in the backend) or customers click ``Print Refund`` in My Order (of the frontend), the file will be downloaded as the Magento 2’s template.

*Frontend*
![i28](https://i.imgur.com/sCEwclh.png)
*Backend*
![i29](https://i.imgur.com/c4DyTPY.png)

### 2. Manage Templates
From the Admin Panel, go to ``Mageplaza > PDF Invoice > Manage Templates``

![i30](https://i.imgur.com/3O8f7Gz.png)

Click ``Add New Template Order`` button and choose the kind of template you want to generate. There will be 4 kinds of template corresponds to 4 kinds of PDF file:
* Order
* Invoice
* Shipment
* Credit Memo
You’re able to freely design template in your own style of use available template in the extension’s configuration.

![i31](https://i.imgur.com/2AtEexW.png)

For example, if you choose to create an “Order” template, the design form will appear like this below image:

![i32](https://i.imgur.com/MbiNMtY.png) 

* In **Load default template** field:
  * **Template**
    * You can choose one of available templates. After having it done, the chosen template will show up right your left side to be previewed.
    * If you don’t choose a template form, the default template will be “Template = Template 1”.
  * **Load Template**: The selected template’s code will be displayed automatically in the below HTML box.

![i33](https://i.imgur.com/CiqOtSP.png) 

* In **Template Information** field:
  * **Currently Used for**: Click the **PDF Invoice** link to direct to the configuration section.
  * **Template Name**
    * This is the place where you name your own template.
    * If you leave it blank, there will be an error message.
  * **Insert Variables**: Choose a variable to display the value of that variable in the PDF file.

![i34](https://i.imgur.com/lwsjHPP.png)

* 
  * **Edit HTML**: This section allows you generate a unique PDF form by your own idea.
  * **Preview**: After editing the PDF form, click here to have an overview glance again.
  * **Link CSS**: This will direct you to a detail CSS support guide that how to learn to design by CSS properly.
  * **Link HTML Support**: Click it to direct to a detail HTML support guide which points out what HTML tags you can use to create a template.
  * **Template Style**: You can add CSS codes at here.

### 3. Sale
From the Admin backend, follow ``Sales > Operation > Orders``. In this section, you can output a printable PDF Order. Moreover, PDF Invoice, PDF Shipment or PDF Credit Memo can be had in the same method. Here the detail guide for the Order's part:

![i35](https://i.imgur.com/sTKZSvN.png)

In the Order section, click ``Print PDF Order`` button to download the PDF Order.

![i36](https://i.imgur.com/wUVtP0x.png) 

The downloaded PDF will have your designed template from previous steps you’ve done above.

![i37](https://i.imgur.com/aEzT3Sn.png)

When you click ``Send Email``, the sending email will be attached that PDF Order if in the [1.2. Order’s configuration](https://docs.mageplaza.com/pdf-invoice-m2/index.html#order), “Enable PDF Attachment = Yes”. Besides, when customers place a new order, stores will send that particular order billing to their emails. Your customers can preview and download to print this PDF Order instantly.

![i38](https://i.imgur.com/TKyMVds.png)

When you create Invoice, Shipment or Credit Memo, if you check the “Email Copy of Invoice”, “Email Copy of Shipment” or “Email Copy of Credit Memo” box, the sent mail will also include the PDF file.

```
* Similar to the Order section, Invoice, Shipment or Credit Memo PDF files will be attached to the sent mail, or when customer click Print button, the PDF file will be downloaded automatically.
* With the virtual product’s Order, in the PDF Order, PDF Invoice, PDF Credit Memo, there won’t be included Shipping To, Shipping Information or Shipment Method section.

