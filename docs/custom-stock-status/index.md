# Custom Stock Status User Guide

## Overview


Custom Stock Status will help admin install additional stock statuses for the products. Information about the product's stock status is displayed at the frontend more accurately and clearly, giving customers better shopping experience and increasing the ability to buy from them. In particular, admins can custom stock status automatically or manually with image, text to quickly attract customers' attention with appealing status. That's the feature of [Mageplaza Custom Stock Status](https://www.mageplaza.com/magento-2-custom-stock-status/) extension.

## How to download and install 

- [Download Mageplaza Custom Stock Status](https://www.mageplaza.com/magento-2-custom-stock-status/)
- [Install Custom Stock Status](https://www.mageplaza.com/install-magento-2-extension/)

## How to use

Custom Stock Status apply for the followign product types:

- Simple Product

![Imgur](https://i.imgur.com/7Dc7N7i.png)

- Bundle Product: Can apply for child products of Bundle products

![Imgur](https://i.imgur.com/hWVisBa.png)

- Group Product: Can apply for child products of Bundle products

![Imgur](https://i.imgur.com/GdHFzkq.png)

- Configurable Product: With this product type, you can configure the Custom Stock Status by size and color of products

![Imgur](https://i.imgur.com/CRmRC4F.gif)

## How to configure

### 1. Configuration

Login to the **Admin Magento**, choose `Stores> Custom Stock Status> Configuration`.

![Imgur](https://i.imgur.com/arLBQ5Q.png)

#### 1.1. General configuration

![Imgur](https://i.imgur.com/0JUZZGZ.png)

- **Enable**: Select `Yes` to turn on the module
- **Apply for Products**: Choose to apply **Custom Stock Status** to products:
  - **Instock**: only instock products will be applied **Custom Stock Status**.
  - **Out of stock**: only out of stock products are applied **Custom Stock Status**.
  - **Both**: apply custom stock status to all products.
- **Status format**: Choose to display the status of the product in **Frontend** with:
  - Image + Text: Show by the order of image then text
  
  ![Imgur](https://i.imgur.com/wSXuNsY.png)
  
  - Image Only: Only show Custom Stock Status with image
  
  ![Imgur](https://i.imgur.com/FVSXLYF.png)
  
  - Text only: Only show Custom Stock Status with text
  
  ![Imgur](https://i.imgur.com/Hv5nOfh.png)
  
  - Text + Image: Show by the order of text then image
  
  ![Imgur](https://i.imgur.com/0Jkk4Mq.png)
  
  
- **Display On**: Choose to display the **Custom Stock Status** on the page below. You can choose to apply to multiple pages at the same time. Those not selected will not be applied:
  - Product Listing Page:
  
  ![Imgur](https://i.imgur.com/5q577ZY.png)
  
  
  - Product View Page
  
  ![Imgur](https://i.imgur.com/Jf1uKVo.png)
  
  - Shopping Cart Page
  
  ![Imgur](https://i.imgur.com/IRw72Hm.png)
  
  
  - Mageplaza One Step Checkout: This option only displays **Custom Stock Status** when you install the [Mageplaza's One Step Checkout](https://www.mageplaza.com/magento-2-one-step-checkout-extension/) extension. With this extension integration, you can summarize 6 payment steps in just one page to make it easier for customers to shorten the payment process.
  
  ![Imgur](https://i.imgur.com/amI1oMI.png)
  
- **Apply with Child Configurable Product Options**:
  - Selecting "Yes" to display the **Custom Stock Status** on options such as size, color, ... with the **Configurable Product** and the **sub-products** of **Group Product, Bundle Product**.
  - Selecting "No" will not display the **Custom Stock Status** at any child product type.
  
- **Enable Automatic Stock Status based on Dynamic Quantity Ranges**:
  - Select `Yes`, it will enable **Automatic Stock Status based on Dynamic Quantity Ranges**. If the product satisfies Dynamic Group, it will apply Stock Status with Group Name group. Dynamic Group applies only to Simple Group.
  - If "No" is selected, it will not apply **Dynamic Groups**.
  - In case both the **Custom Stock Status** and **Dynamic Groups** are selected and enable, it will prioritize the information in the previous **Dynamic Groups** field. You can access  Store> Attributes> Product` to search with 2 attributes to create additional options for **Custom Stock Status** and **Dynamic Groups**.
  
**Note**:
- If you want the inventory status to become clear and notify the email to the customer when the product comes back to the warehouse or change the product price, with [Mageplaza's Product Alerts](https://www.mageplaza.com/magento-2-product-alerts/) extension, it will help you do that and it is completely compatible with **Custom Stock Status** extension.
- Or customers can pre-order and order later if you don't currently have enough products, with [Mageplaza's Pre Order](https://www.mageplaza.com/magento-2-pre-order/) extension, it will help you solve that problem and it is also fully compatible with **Custom Stock Status** extension.
