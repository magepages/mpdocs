# SEO-Friendly URL

## Introduction

SEO Friendly URL helps store owners generate search engine friendly URLs for any pages filtered by the layered navigation or any category page.

### Why do you need SEO-friendly URL?

- Filter options can create unoptimized filtered pages URLs. For example, when customers select "Allweather" and "price", the filtered results will be : `yourstore.com/men/tops-men/hoodies-and-sweatshirts-men.html?climate=201&price=50-60`

![](https://i.imgur.com/Q1MTDFO.png)

- Filtered pages, therefore, created duplicate content, as they have the same meta and description as the category page. If Google is allowed to index or follow these pages, your ranking will be highly affected. This SEO-friendly URL can solve the problem by stopping Google from doing that.

## 1. Configuration
Login to your Magento 2 backend, then select `Stores > Settings > Configurations > Mageplaza Extension: SEO friendly URL` and follow our given guide below to complete SEO configurations:

- General Configuration
- SEO-friendly URLs for Attributes
- Add Attribute code
- Add Filter Key
- Allow Google to index the Category Page with the Filter Applied
- Allow Google to follow links on the Category Page with the Filter Applied
- Attribute URL Alias

![](https://i.imgur.com/itPUR52.png)

### 1.1. General Configuration
- Select `Enable = Yes` to activate the module to optimize the store URLs by making URLs short and clean. 

![](https://i.imgur.com/OT7rOrZ.png)

- For example, when filtering `Men > Tops > Jackets > Climate > All weather`, this is the result if you set **Yes** - the selected attribute is included and can be easily located.

![](https://i.imgur.com/8opXwuc.png)

- If you set **No**:

![](https://i.imgur.com/uB8At6R.png)

### 1.2. SEO-friendly URLs for Attributes

![](https://i.imgur.com/QApm938.png)

- Select **Yes** to apply the SEO-friendly feature for attributes. To configure more in detail, please go to `Stores > Attributes > Product > {attribute_name} > SEO friendly URLs` to set for each attribute you want. 

### 1.3. Add Attribute Code

![](https://i.imgur.com/rMyIuWV.png)

- Select **Yes** to add attribute code to the URL scheme.
- For example: “allweather” > “climate_allweather”

### 1.4. Add Filter Key

![](https://i.imgur.com/Ddw2n27.png)

- Customers enter filter key to add to the URL scheme if necessary,
- For example: climate/allweather -> shopby/allweather

![](https://i.imgur.com/Kxee4JL.png)

![](https://i.imgur.com/oFp62Qr.png)

## 2. SEO friendly URL for Attributes

### 2.1. Generate SEO friendly URL

![](https://i.imgur.com/8M4FUVU.png)

- **Use Config Settings**: Apply selection in the configuration section
- Select **Yes**: Generate SEO friendly URL for this attribute. If filtering based on the attribute Heavy Duty, URL will be optimized, for example, `jackets-women/heavyduty.html` instead of `jackets-women.html?style_general=121`

### 2.2. Allow Google to index the Category Page with the Filter Applied

![](https://i.imgur.com/bZ1o1tF.png)

- Select **No**: Stop Goolge from indexing pages with filters applied by handling meta-tag robots.

### 2.3. Allow Google to follow links on the Category Page with the Filter Applied 

![](https://i.imgur.com/oOIbzAY.png)

- Select **No**: Stop Goolge from crawling filtered pages by handling meta-tag robots.

### 2.4. Attribute URL Alias

![](https://i.imgur.com/Fb8QFk6.png)

- Customers can enter custom URL alias for this attribute if necessary. If you leave the field blank, the attribute code value will be used instead.

![](https://i.imgur.com/VOyZNkU.png)

![](https://i.imgur.com/DGfGY1L.png)

### 2.5. Add rel=“nofollow” to filter links

![](https://i.imgur.com/DHLWxBY.png)

- The field is set as **No** by Default. It is only activated when installing Mageplaza Layered Navigation Pro module. 
- Select **Yes** to add rel as “nofollow” to the URL of filtered option.
