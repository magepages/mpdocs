# Webhook
## Overview

## How to configure
### I. Configuration

Login to the Magento Admin, choose `Store > Settings > Configuration > Mageplaza Extensions > Webhook`.

![Imgur](https://i.imgur.com/xijwOba.png)

#### 1. General

- **Enable**: Choose "Yes" to enable this module or "No" to disable it.
- **Abandoned Cart After (hours)**: Set the hours for Abandoned CArt. We recommend the period time as 1, 6, 10, 12, 24.
- **Keep Logs**: Enter the number of keep logs. It will auto-delete the logs if it reaches to the selected number and keeps the number of selected logs. It will make the logs clear everyday.
- **Alert on Error**: Choose "Yes" to send the notification when sending an email. To avoid sending the email to the spambox, you should install [SMTP extension](https://www.mageplaza.com/magento-2-smtp/)

![Imgur](https://i.imgur.com/9KZ0x0v.png)

### II. Manage Hook
#### 1. Grid

From the Admin Panel, go to `Mageplaza > Webhook > Manage Hooks`.

![Imgur](https://i.imgur.com/d0XVzUM.png)

- This section records created Webhooks with basic information as *Name, Status, Store View, Entity, Created Date and Update date, etc*
- Admins can perform some actions:
  - `Delete`: Choose Webhooks that you want to delete
  - `Change Status`: Tick to choose the Webhook that you want to change the status, choose "Enable" to use Webhook
  - `Edit`: Click "Edit" to edit the contend of Webhook.
  
- Also, admins can filter, change the Store View, hide/show columns on Grid.
- For `Add New` button, you can choose `Trigger` type to `Create New Hook` and activate the data to the server.

![Imgur](https://i.imgur.com/2RIgtHF.png)

#### 2. Create a Hook
##### How to Create New Hook

