# Two Factors Authentication

## Overview

Mageplaza Two Factors Authentication extension assure more security for online stores' backend. Admin users need to verify two factors when logging in the backend on every device. This extension supports three commonly used authentication authors: Authy, Duo or Google Authenticator. This authentication tool applies only to admin users, not to the Frontend Customer Account

## Download & Install

- [Mageplaza Two Factors Authentication]()
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/) 

## How to use

When logging in the backend, admin users need to fill in the authentication factors

![Imgur](https://i.imgur.com/E44IPCO.png)


When turn on Trusted Device, authentication request page looks like this:

![Imgur](https://i.imgur.com/Y63ZbDO.png)

## How to Configure

### 1. Configuration

From **Admin panel**, go to `Stores > Configuration > Mageplaza > Two factor Authentication`

![Imgur](https://i.imgur.com/nAeDTM4.png)

- **Enable**: Select `Yes` to activate the module

- **Force Using 2FA**: 
  - Choose `Yes` to force all admin users to register Two Factors Authentication 
  - When 2FA is enable, all admin users who have not registered 2FA must go to **My Account** page to set it up. After that, they can access others admin pages
  
- **Enable Trusted Device**: 
  - Select `Yes` to enable saving the trusted devices. In a certain period of time, when logging in with this device, admin users do not need to authenticate the two factors
  - This certain period is configured at **Trusted Time** field
  
- **Trusted Time**: 
  - During the time period set in this section, when logging in with this device, the admin users do not need to authenticate two factors. 
  - Time is set by day
  
### 2. My Account Admin

Admins need to go to **Account Setting** to set **QR/Pin code**


![Imgur](https://i.imgur.com/5s0e8hG.png)


- **Register 2FA**:


![Imgur](https://i.imgur.com/5hiAK7A.png)


- **Check and remove Trusted Devices**:


![Imgur](https://i.imgur.com/8Pbn2NY.png)

