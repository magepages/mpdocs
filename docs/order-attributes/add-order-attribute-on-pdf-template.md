# How to add Order Attribute to the PDF Order Template


To Add the Order Attribute to the PDF Order Template, Admin needs to follow these steps:

## 1. Get Order Attribute code

Admin needs to go to `Sales > Order Attributes > Manage Attributes`, choose to edit Order Attribute that you want to add to email. The copy the Attribute code

![](https://i.imgur.com/o7mDvuv.png)

## 2. Create PDF Order Template

Go to `Stores > PDF Invoice > Manage Templates`, select **Add New Order Template** (or edit template if you want)

![](https://i.imgur.com/6up2oWq.png)

- Then please load Template of New Order template

![](https://i.imgur.com/q5Z0Rs0.png)

- Insert Order Attribute into Template at any place you want following this structure:

  - For **Input Type = Text, Text Area, Date, Content, Media Image, Single File Attachment**
  
  ```
{{order order.getOrderAttrText1 ()}}
     <p> {{var order.getOrderAttrText1Label ()}} {{var order.getOrderAttrText1 () | raw}} </p>
{{/ depend}}
```

  - For **Input Type = Yes / No, Dropdown, Multiple Select, Single-select with Image, Multiple-select with Image**

```
{{order order.getOrderAttrText1Option ()}}
     <p> {{var order.getOrderAttrText1Label ()}} {{var order.getOrderAttrText1Option () | raw}} </p>
{{/ depend}}
```


  - For **Single File Attachment**, when inserting this code, the attachment is displayed in the email as a link. Customer can click the link to download the file:
  
  
  ```
  {{order order.getOrderAttrText1 ()}}
     <p> {{var order.getOrderAttrText1Label ()}}: <a target="_blank" href="{{var order.getOrderAttrText1Url()}}"> {{var order.getOrderAttrText1Name ()}} </a> </p>
{{/ depend}}
```
  - For **Media Image**. When inserting this code, Media Image is displayed in the email. Customer can click the link to open the image in a new tab
  
  ```
{{order order.getOrderAttrText1 ()}}
     <p> {{var order.getOrderAttrText1Label ()}}: <a target="_blank" href="{{var order.getOrderAttrText1Url()}}"> <img title = "View Full Size" alt = "{{ var order.getOrderAttrText1Name ()}} "src =" {{var order.getOrderAttrText1Url ()}} "/> </a> </p>
{{/ depend}}
```

  - In which: 
    - Depend tag is to check that attribute is empty or not. If not, it will not be shown and either the html. 
    - OrderAttrText1 is Attribute code capitalized each word

    - For example: Order Attribute with input type = **Date**, with attribute code is `delivery_time`, so you need to add the following code:
    
    ```
{{depend order.getDeliveryTime ()}}
   <p> {{var order.getDeliveryTimeLabel ()}} {{var order.getDeliveryTime () | raw}} </p>
{{/ depend}}
```


- Order Attribute type input = **Dropdown**, with attribute code is `choose_gift_wrap`, so you need to add the following code:

```
{depend order.getChooseGiftWrapOption ()}}
   <p> {{var order.getChooseGiftWrapLabel ()}} {{var order.getChooseGiftWrapOption () | raw}} </p>
{{/ depend}}
```


- Order Attribute type input = **Single File Attachment**, with attribute code is `attachment`, so you need to add the following code:


```
{depend order.getAttachment ()}}
     <p> {{var order.getAttachmentLabel ()}}: <a target="_blank" href="{{var order.getAttachmentUrl()}}"> {{var order.getAttachmentName ()}} </a> </p>
{{/ depend}}
```


- Order Attribute type input = **Media Image**, with attribute code is `media_image`, so you need to add the following code:

```
{{order order.getMediaImage ()}}
     <p> {{var order.getMediaImageLabel ()}}: <a target="_blank" href="{{var order.getMediaImageUrl()}}"> <img title = "View Full Size" alt = "{{ var order.getMediaImageName ()}} "src =" {{var order.getMediaImageUrl ()}} "/> </a> </p>
{{/ depend}}
```


### 3. Apply the PDF Order Template created
- Go to `Stores > Settings > Configuration`, select the `Mageplaza > PDF Invoice` tab
- In Order, select PDF Order Template just created

![](https://i.imgur.com/eXF9Y2n.png)

### Check the function 
- You cna check the setup above by placing Order at Frontend
- Then check email that the system sends to customer

![](https://i.imgur.com/6i1vHDT.png)
