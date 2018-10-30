# Order Export Extension
## Overview

## How to configure

From the Admin Panel, go to ``Sales > Order Export``

![how to configure](https://i.imgur.com/HPLYLTv.png)

### Admin can export the profile by 4 ways:

- 1. Manual: Go to `Manage Profiles > Edit Profile`, Click `Generate`. After the file is generated, go to `Donwload link` to download file
- 2. Cron: Profile is generated based on Cron: After a long time, profile will auto-generate the file content. After refresh, go to `Download link` to download file
- 3. Quick Export: Easy to export quickly order/invoice/memo/shipment in `Sales > Order/Invoice/Memo/Shipment`
- 4. Command: Use the command: `php bin/magento orderexport:generate`. After the profile is generated the content, go to `Download link` to download file

### 1. Configuration

Go to `Sales > Order Export > Configuration`

![configuration](https://i.imgur.com/2LmBvEJ.png)

Choose `Yes` to enable this module and display int he `Sales` section

### 2. Manage Profiles
#### 2.1. Grid

![manage profiles](https://i.imgur.com/ibNd7x0.png)

