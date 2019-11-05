# Quick Flush Cache

## Overview

In Magento default, after configuring some actions at backend, it will show a message with flush cache request to apply change or invalid indexer. The admin then needs to open the **Cache Management** page and click on **Flush Magento Cache**, which takes a few minutes to completely flush the cache, similar to the reindex. With [Mageplaza Quick Flush Cache](https://mageplaza.com/quick-flush-cache/) will help admin save time as quickly as possible. The module adds a link right next to the system notification message, when clicked, the ajax flush is the type of cache that is invalid or indexer is invalid.



## How to Configure

From the Admin Panel, go to `Stores > Settings > Configuration > Mageplaza Extensions > Quick Flush Cache`

![](https://i.imgur.com/TfdVUDM.png)

- **Enable Quick Flush Cache*:
- *Yes (Automatic)*: automatically clear cache when admin saves information: product, configuration, etc. at backend. After saving the information configured, always notice that the cache was successfully flushed.

![](https://i.imgur.com/W0cwcbf.png)

- *Yes (Manual)*: Show a message after saving configuration. Instead of clicking **Cache Management** to move to the **Flush Magento Cache**, now you only need to click **Flush Now** link and wait for a few seconds, the cache will be cleared.

![](https://i.imgur.com/vxoigcQ.png)

- *No*: disables auto-flushing cache and keep displaying default Magento's Flush Cache request message.

![](https://i.imgur.com/VvKNpRU.png)

- *Enable Quick Reindex*: Select "Yes" to automatically reindex by clicking **Reindex Now**

![](https://i.imgur.com/N3Lnms7.png)

- After the reindex is completed, you will receive a notification

![](https://i.imgur.com/EC4TrnY.png)
