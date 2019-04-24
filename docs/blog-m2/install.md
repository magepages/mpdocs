How to install Blog
================================

### Important: 

- We recommend you to duplicate your live store on a staging/test site and try installation on it in advance
- Backup magento files and the store database

*It’s very important to backup all of themes and extensions in Magento before installation, especially when you are working on a live server. We strongly recommend you to do not omit this step.*


## Method 1: Install via composer (recommend)

Run the following command in Magento 2 root folder:

```
composer require mageplaza/magento-2-blog-extension
php bin/magento setup:upgrade
php bin/magento setup:static-content:deploy
```


## Method #2: Copy & Paste

### 1.1 Step 1: Download SFTP clients

Download SFTP clients, we recommend clients: <a href="https://filezilla-project.org/download.php" rel="nofollow">FileZilla</a>, <a href="https://winscp.net/eng/download.php" rel="nofollow">WinSCP</a>. In this case, we are using **WinSCP** to install the module.

### Step 2: Download the Package

After purchasing order from Mageplaza, go to <a href="https://store.mageplaza.com/downloadable/customer/products/" target="_blank">My Downloadable Products</a> page to download the module package. You have to log in (User/Password or Social accounts) before accessing the `My Downloadable Products`.

![](https://cdn.mageplaza.com/media/general/XLDM5l7.png)

Here are the screenshot of `My Downloadable Products` page.

![](https://cdn.mageplaza.com/media/general/e7bwTUF.png) 

Now click on extension version link to download the package. 

![](https://cdn.mageplaza.com/media/general/pdbYAoU.png)

### Step 3: Upload files to server

Let's extract the package and connect to your server using SFTP Clients above.
Then upload files, folders to your server, see this video:

![](https://cdn.mageplaza.com/media/general/01LVyw5.gif)

Upload the app folder to Magento 2 root folder.

### Step 4: Run command line

To complete the installation process, we need to run the following command lines to install Mageplaza Core module:

```
composer require mageplaza/module-core
php bin/magento setup:upgrade
php bin/magento setup:static-content:deploy
```


If you got the error: `Mageplaza_Core has been already defined`, read [this solution](https://github.com/mageplaza/module-core/issues/3)


### Step 5: Check result

Now time to check result in frontend.

If you get any issues, check [FAQs](https://www.mageplaza.com/faqs/social-login/). If you get still get issues, report [here](https://github.com/mageplaza/magento-2-social-login/issues).



