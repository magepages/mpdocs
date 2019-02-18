# Custom Stock Status User Guide

## Overview


[Custom Stock Status]() will help admin install additional stock status for the product, information about the product's stock status is displayed at the frontend more accurately and clearly, giving customers sympathy and increasing the ability to buy from customers. In particular, you can Custom stock status automatically or manually with image, label to easily attract customers' attention with attractive status. That's the feature of Mageplaza's new Custom stock status extension.

## How to download and install 

- [Download Mageplaza Custom Stock Status](https://www.mageplaza.com/magento-2-custom-product-status/)
- [Install Custom Stock Status](https://www.mageplaza.com/install-magento-2-extension/)

## How to use


## How to configure

### 1. Configuration

Login to the **Admin Magento**, choose Stores> Custom Stock Status> Configuration.
1.1. General

- **Enable**: Select `Yes` to turn on the module
- **Apply for Product**: Choose to apply **Custom Stock Status** to products:
  - **Instock**: only instock products will be applied **Custom Stock Status**.
  - **Out of stock**: only out of stock products are applied **Custom Stock Status**.
  - **Both**: apply custom stock status to all products.
- **Status format**: Choose to display the status of the product in **Frontend** with:
  - Image + Label
  - Image Only
  - Only label
  - Label + Image
- **Display On**: Choose to display the **Custom Stock Status** on the page below. You can choose to apply to multiple pages at the same time. Those not selected will not be applied:
  - Product List:
  - Product View
  - Product Widget
  - Shopping Cart
  - Mageplaza OSC: This option only displays **Custom Stock Status** when you install the [Mageplaza's One Step Checkout](https://www.mageplaza.com/magento-2-one-step-checkout-extension/) extension. With this extension integration, you can summarize 6 payment steps in just one page to make it easier for customers to shorten the payment process.
  
  
- **Display on child product option**:
  - Selecting "Yes" to display the **Custom Stock Status** on options such as size, color, ... with the **Configurable Product** and the **sub-products** of **Group Product, Bundle Product**.
  - Selecting "No" will not display the **Custom Stock Status** at any product type.
- **Enable Dynamic Status base on Quantity Ranges**:
  - Select `Yes`, it will enable **Dynamic Status** base on **Quantity Ranges**. There will be an additional **Dynamic Groups field** when creating or editing a product and automatically displaying **Quantity Stock Label**.
  - If "No" is selected, it will not apply **Dynamic Groups** to any product.
  - In case both the **Custom Stock Status** and **Dynamic Groups** are selected and enable, it will prioritize the information in the previous **Dynamic Groups** field. You can access  Store> Attributes> Product` to search with 2 attributes to create additional options for **Custom Stock Status** and **Dynamic Groups**.
  
**Note**:
- If you want the inventory status to become clear and notify the email to the customer when the product comes back to the warehouse or change the product price, with [Mageplaza's Product Alerts](https://www.mageplaza.com/magento-2-product-alerts/) extension, it will help you do that and it is completely compatible with **Custom Stock Status** extension.
- Or customers can pre-order and order later if you don't currently have enough products, with [Mageplaza's Pre Order](https://www.mageplaza.com/magento-2-pre-order/) extension, it will help you solve that problem and it is also fully compatible with **Custom Stock Status** extension.
