# Barcode

## Overview

With [Mageplaza Barcode Extension](https://www.mageplaza.com/magento-2-barcode/), admin can easily create barcode to manage products in store easily. This extension supports automatically generating barcode with 18 different barcode encryption types. Admin can also design barcode labels, preview before printing and print multiple barcodes for many products at the same time.

## How to download and install

- [Download Mageplaza Barcode](https://www.mageplaza.com/magento-2-barcode/)
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


## How to Use

With Barcode extension, admin can perform the following actions:

### Automatically generate barcode with the preselected template

![Imgur](https://i.imgur.com/gFKPzG4.png)

### Select Product Attribute for barcode printing

![Imgur](https://i.imgur.com/2Pv0qtK.png)

***Product Attribute = Mageplaza Barcode***

![Imgur](https://i.imgur.com/NbisV0e.png)

***Product Attribute = SKU***

![Imgur](https://i.imgur.com/67QNYoT.png)

### Design barcode: 

Choose **Barcode Type**, **Label Content** and **Printing Paper** by the available templates. 

![Imgur](https://i.imgur.com/n8wMo8U.png)

***Preview barcode before printing***

![Imgur](https://i.imgur.com/uJ2jqg0.png)

***Print multiple labels of multiple products***

![Imgur](https://i.imgur.com/98FIHtP.png)

![Imgur](https://i.imgur.com/ldshDpZ.png)

## How to Configure

From the Admin panel, go to `Stores > Settings > Configuration > Mageplaza > Barcode`

![Imgur](https://i.imgur.com/14SpuRK.png)

### 1. Configuration

#### 1.1. General Configuration

![Imgur](https://i.imgur.com/0vddXyX.png)

- **Enable**: Select **Yes** to activate extension
- **Attribute for Barcode**: Select the coded attribute to scan barcode.
- **For example**: Attribute for **Barcode = SKU**, module then will use the product SKU to encode into barcode. When scanning the barcode, we get the SKU of the product.
- **Barcode number template**: Sample format to generate barcode codes, Example: **MPBC-[4AN]-[3A]-[5N]** => The generated barcode may be **MPBC-J34T-OEC-54354**
- **Auto generate barcode**: Click **Run** to automatically generate barcode for products not yet available. To generate barcode faster, you can use `php bin/magento mpbarcode: autogen command`


#### 1.2. Barcode Design

- **Barcode Type**: Choose the type of encryption code barcode. Currently, the module supports **18 different encryption types**.

##### 1.2.1 Label Content

![Imgur](https://i.imgur.com/QGLyFjR.png)

**Logo**: Admin can upload the logo/ image you want to display on the barcode label
Barcode Label Template: choose the template displayed for barcode labels. There are 4 types of templates:

***Classic 1***

![Imgur](https://i.imgur.com/zIMibGF.png)

***Classic 2***

![Imgur](https://i.imgur.com/XOdcdxv.png)

***Standard***

![Imgur](https://i.imgur.com/KTOedWT.png)

***Standard with QR code***

![Imgur](https://i.imgur.com/VzRDf0B.png)

- **Load Template**: After selecting one of the 4 types of templates above, click **Load template**, the value of the setting fields for the paper will automatically be filled.
- **Barcode Width**: in Inches. Set the length of the barcode code displayed on a barcode label. Self-recognition by template or editable.
- **Barcode Height**: in Inch. Set the width of the barcode displayed on a barcode label. Self-recognition by template or editable.
- **QR Code Size**: in Inches. Set the length/ width of the QR Code displayed on a barcode label. This field is only displayed when the template is selected with **Standard with QR code**. Self-recognition by template or editable.

![Imgur](https://i.imgur.com/INt6gTE.png)

- **Barcode Label Content**: Install content on barcode labels. Support variables can be used to display content such as barcode, barcode content after scanning, product name, SKU, product price, QR code, logo and some other attributes of the product.
With the variable `{{logo_url}}`, you must use the `<img>` tag to display the selected logo image in the above field: `<img src = "{{logo_url}}" alt = "logo">`
With variable `{{attribute_code}}`, you must replace the `attribute_code` with the code of the attribute you want to display. You can go to `Store > Attributes > Product` to get the value in the **Attribute Code** field

![Imgur](https://i.imgur.com/7tvu8vS.png)

- **For example**: You want to display **Activity** and **Color** Attribute, write more:

```
<div class = "attribute-code">
        <div>
            Activities: {{activity}}
        </div>
        <div>
            Color: {{color}}
        </div>
</div>
```
Then, your barcode label printed will contain information about the **Activity** and **Color** of the product.

![Imgur](https://i.imgur.com/bUEFP7g.png)

- **Barcode CSS**: Display settings (font, color, format) for content on barcode labels.
- **Preview Barcode Label Content**: Click this button to see the preview of the barcode label according to the settings above.

#### 1.2.2 Printing Paper

![Imgur](https://i.imgur.com/HfC5BaL.png)

- **Paper Template**: Choose to use the template for available print paper or you can customize the paper size
- **Paper Size**: Select the paper size to print barcode labels. The paper size will default to the template available in the **Paper Template** field or edit it when the **Paper Template** field selects **Custom**.
- **Barcode Label Width**: Calculated in Inches. The length setting of a barcode label will appear on the paper. Self-recognition by template or editable.
- **Barcode Label Height**: Calculated in Inch. The width setting of a barcode label will be displayed on the paper. Self-recognition by template or editable.
- **Barcode Label Padding**: Calculated in Inches. Set the distance between the barcode labels on a printed paper. Self-recognition by template or editable.
- **Orientation**: Choose a layout method. There are 2 options: **Portrait (vertical)** and **Landscape (horizontal)**.
- **Preview Paper Template**: Clicking on this button will display the paper preview that will be printed when the above settings are satisfied.

#### 1.3. Print Sample File

![Imgur](https://i.imgur.com/cMd993y.png)

- **Print Sample**: Click on the button to print the barcode labels on 1 paper according to the above settings.
- **Note**: Must **Save Config** before clicking **Print** to make sure the printout will print the latest installation correctly.

### 2. Print Barcode

- To print barcode, we can use 2 ways:
- Print barcode for **each product** by clicking the **Print Barcode** button at their edit page
- Print for **multiple products** at the **Product Grid** page using **Mass action Print Barcode Label**.

![Imgur](https://i.imgur.com/pLDN8DN.png)

![Imgur](https://i.imgur.com/tiMRT5E.png)

After clicking **print**, the **popup** will appear for admin to install barcode printing.

![Imgur](https://i.imgur.com/RRzlhpM.png)

- **In Popup**:

  - At **Qty** field, admin select the number of barcode to print it out 
  - Admin can reselect the barcode and paper configuration again. Unless you can choose **Use Config Settings** to use the preset information in Configuration before
  - Admin can also preview the barcode label and paper before printing by clicking to **Preview Print Paper Type**.

