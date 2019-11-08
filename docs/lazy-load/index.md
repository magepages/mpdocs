# Lazy Load

## Overview

Normally, all images of a web page are loaded at the same time, which likely slow down the page speed and customers will leave because it takes too much time to wait. Therefore, Mageplaza has released [Lady Load extension](https://mageplaza.com/magento-2-lazy-load/)  which helps reduce bandwidth, page loading time and enhance the website performance by loading images only when necessary. Lady Load can be applied to: Category Page, Product Detail Page, CMS Page, Search Result Page, Related, Up-sell, Cross-sell products and exclude any page or image you want.

In addition, the extension also supports lazy loading by icons or placeholders and setting Loading Threshold for images. And especially, Lazy Load extension is fully compatible with [SEO extension](https://www.mageplaza.com/magento-2-seo-extension/) to automatically insert alt attributes if the image does not already have this attribute. This is an extremely useful feature that Mageplaza has created.

## How to use

### Process Lady Load with the icon

![](https://i.imgur.com/6pnOIvc.png)

### Process Lady Load with placeholder

![](https://i.imgur.com/Gcj9Bp3.png)

## How to configure

Login to the Magento Admin, go to `Stores > Settings > Configuration > Mageplaza Extensions > Lazy Loading`.


![](https://i.imgur.com/ENQJs3I.gif)

### General configuration

![](https://i.imgur.com/0s7h7kA.png)

- **Enable = Yes/No**: To enable/disable the extension feature.
- **Apply For**: Select pages to apply lady load. You can select one or multiple pages at the same time. 

![](https://i.imgur.com/x6BuaNK.png)

- **Exclude Pages With URL Including**: Click **Add** button to enter the path of the page that you do not want to apply lady loading. Pages with URLs entered in this field will not apply lady load. Click **Delete** icon to delete the path you have just entered.
- *Example*:

![](https://i.imgur.com/gc7Er3V.png)

- **Exclude Css Class**: Click **Add** button to enter the class name containing the image that you do not want to apply Lady Load. Click **Delete** icon to delete the class name just entered.
- *Example*:

![](https://i.imgur.com/uAEyJ7D.png)

`<img class = "downloadable-product" src = "lifelong.jpg">`. Images of the "downloadable-product" class will not apply lazy load.

- **Exclude Text**: Click the **Add** button to enter the title or alt of the Image tag. Images with the tags that contain the text entered do not apply lady load.
- *Example*:

![](https://i.imgur.com/3cfqi4O.png)

`<img title = "lifelong" src = "download.jpg">` or `<img name = "lifelong" src = "product.jpg">`. When filling in "lifelong", this image will not apply lazy load.
- **Loading Threshold**: Set the distance from the screen to the product image to process lady load. Products in the threshold range will still load without scrolling.
- **Loading Type**: Select the lady load processing effect.
![](https://i.imgur.com/v9SthIM.png)

  - **Icon**: Process lazy load with Icon. Show more fields:
  ![](https://i.imgur.com/Q851Wsr.png)
  
    - **Upload Icon**: Click the **Choose File** button to select the image you want to display during lady load processing. If left blank, the default icon will be displayed. Click **Delete Image** button to delete the selected image.
    - **NOTE**: Only support files in the format: gif, png, jpg, svg.
    - **Resize Icon Width**: Enter the width of the image displayed when processing lady load. The default value is 64px.
    - **Resize Icon Height**: Enter the height of the displayed image when processing lady load. The default value is 64px.
    
  - **Placeholder**: Processing the lady load with the placeholder. Show additional **Placeholder Type** field with the following options:
  ![](https://i.imgur.com/ZmRJM79.png)

    - **Blurred**: Product image is blurred during processing of lady load.
    ![](https://i.imgur.com/MV5aHpP.gif)

    - **Low Resolution**: Product image quality is reduced during lady load processing.
    ![](https://i.imgur.com/Ighh5wH.gif)

    - **Transparent**: Display transparent images during lady load processing.
    ![](https://i.imgur.com/7QFFTBf.gif)
