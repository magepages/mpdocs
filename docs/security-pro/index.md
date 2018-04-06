# Security Professional

## Overview 
Security issues for Magento have left a big question mark in the community of online stores. This problem is specially cared when Magento-based stores which own critical information and huge transactional volume can easily become ideal prey for blackhat hackers to attack. To help online stores prevent brutal break-ins, Mageplaza has developed the Security extension. [Magento 2 Security extension](https://www.mageplaza.com/magento-2-security/) gives store owners the ability to detect the IP addresses that are intentionally attacking their store at any given time. Therefore, they have timely measures to prevent this issue such as blocking those IP addresses or sending warning emails to store owners.

Security Professional grants store owners the ability to forbid all login attempts at a period of time, which is called Away Mode. Furthermore, they can keep track and spot out all changed files, activities of other admin users as well as back up logs for the record purpose.  

## How to use
You can review login records from the dashboard when entering the backend. The log displays the newest 5 logins and you can click on the login name to view the details.

![i6](https://i.imgur.com/X4qv87Y.png)

## How to configure
After logging in Magento backend, go to ``System > Security``. We will provide detail guides to these bellow configuration
* Login Log
* Checklist
* Action Log
* Action Log Backup
* File Change Log

![i1](https://i.imgur.com/QmVUjki.png)

### I. Configuration
#### 1.1. General
After entering ``Store > Settings > Configuration > Mageplaza Extensions > Security``, expand the General configuration

![i10](https://i.imgur.com/uqGBWW1.png)

* In the **Enable** field: Choose “Yes” to turn the Security module on.
* In the **Send warning emails to** field: 
  * Enter the email address to be able to receive warning emails. 
  * You can fill multiple emails separated with commas ``,`` 

#### 1.2. Brute Force Protection
Follow ``System > Security > Configuration > General > Brute Force Protection``

![i2](https://i.imgur.com/PC2809t.png)

* In the **Enable** field: Choose "Yes" to enable this function.
* In the **Maximum number of failed login attempts** field:
  * Enter an allowable number of failed logins.
  * Default number of maximum failed login attempts is ``5`` when you enable Security module.
  * If you leave it blank or enter 0, after a failed login happens, an email will be sent.
* In the **Allowed Duration** field:
  * Enter the number of minute(s) which presents the length of a session. During this session, If the **Maximum number of failed login attempts** is reached, warning emails will be sent.
  * Default number of allowed duration is ``10`` minutes when you enable Security module.
  * If you leave the field blank or enter 0, no warning emails will be sent even if the maximum number of acceptable logins is reached.
* In the **Locked User Alert** field: Select "Yes" to send the alert email when the admin account is locked due to failed login attempts is exceeded. 
* In the **Email Template** field: 
  * Choose the template for the warning email.
  * You can edit/customize one at ``Marketing > Email Template``.

Here’s an example of a warning emails:

![i7](https://i.imgur.com/ymrlPta.png)

#### 1.2. Blacklist/Whitelist IPs

![i3](https://i.imgur.com/CI5lmut.jpg)

* In the **Blacklist(s)** field:
  *  All IP addresses filled in this section will be blocked whenever accessing the admin login page.
  * You are able to block one IP address, multiple IP addresses, an IP address range or multiple IP address ranges.  IP addresses are separated with commas ``,``.
  * You can also block IP addresses as wildcard masks as below:
    * ``10.0.0. *``
    * ``10.0. *. *``
    * ``10.0.0. * - 123.0.0. *``
    * ``12.3. *. * - 222.0. *. *``
 * The mark ``*`` is in the `0 - 255` range.*
* In the **Whitelist(s)** field:
  * All IP addresses that are filled in this section will be allowed whenever accessing the admin login page.
  * You can allow one IP address, multiple IP addresses, an IP address range or multiple IP address ranges.  IP addresses are separated with commas ``,``.
  * You can also allow IP addresses as wildcard masks as these follows:
    * ``10.0.0. *``
    * ``10.0. *. *``
    * ``10.0.0. * - 123.0.0. *``
    * ``12.3. *. * - 222.0. *. *``
 * The mark ``*`` is in the `0 - 255` range.*
 
* To learn how to reset Blacklist/Whitelist IPs, please refer this [Reset command lines](https://docs.mageplaza.com/security-pro/index.html#reset-command-line) 
```
Blacklist(s) has higher priority than Whitelist(s) which means if a IP address is in the Blacklist, it will be blocked even it's in the Whitelist as well. So please make sure that you add your IP address in the Whitelist only. 
```

#### 1.3. Action Log Backup

![i6](https://i.imgur.com/aDKC0r1.png)

* In the **Enable** field: Choose "Yes" to back up the Action log.
* In the **Frequency** field: Choose one of avalable time options
  * **Frequency = Daily**: Action log will be backed up daily.
  * **Frequency = Weekly**: Action log will be backed up weekly.
  * ** Frequency = Monthly**: Action log will be backed up monthly.
* In the **Clear Log After Backup** field: Select "Yes" to clear the log in Action Log after the log has been backed up.

#### 1.4. Amway Mode

![i7](https://i.imgur.com/BH3q7dc.png)

* In the **Enable** field: Choose "Yes" to forbid all login attempts in this configured time.
* In the **From Time** field: Choose the start time you want to set Away Mode.
* In the **To Time** field: Choose the end time you want to set Away Mode.

```
Away Mode time will be set between "From Time" and "To Time". Other admin users can't access backend in this period.
```
* In the **Day of Week** field: 
  * You can select to forbid some specific the whole day(s) weekly.
  * You can select multiple days.
  
* To learn how to reset Away Mode, please refer this [Reset command lines](https://docs.mageplaza.com/security-pro/index.html#reset-command-line) 
```  
Configured Away Mode time will follow the store's timezone.
```

#### 1.5. File Change

![i8](https://i.imgur.com/OEaGepV.png)

* In the **Exclude folders** field: This will exclude folders which are
  * Paths have ``/`` at the start is permanent links. *E.g: /var means magento_root_directory/var/*
  * If paths don't have ``/`` at the start line, all folders having entered name in this field will be excluded. *E.g: all folders named git will be excluded.*
  * Normally, folders which can't be accessed from the store frontend should be excluded.
* In the **Exclude File Type** field: 
  * Entered file types will not be scanned to keep track possible changes.
  * You can enter multiple file types separated by commas ``,``.
* In the **Create Master Hashes** field:
  * Important note: You must click ``Save Config`` before proceeding to click ``Reindex`` button, to prevent the directory or files added, modified, deleted to be automatically converted the file type into Deleted status.
  * When Security module is turned on/off, or when new folders/files have been added to the system, you should click ``Reindex`` button to scan all the files again.
* In the **Enable Cron** field:
  * Choose "Yes" to turn on the send email function while running Cronjob.
  * After being run the Cronjob program, changed files will be backed up.
* In the **Email Template** field: 
  * Choose the template for the File Change Notification email.
  * You can edit/customize one at ``Marketing > Email Template``.
To see how the File Change Notification looks like, please check this below image

![i10](https://i.imgur.com/CxZCHGE.png)
  
### III. Login Log
From the admin panel, make your way to ``System > Security > Login Log``. All logins and login attempts will be recorded here.

![i4](https://i.imgur.com/gIBNONW.png)

Click ``View`` to see login details. Here’s an example:

![i5](https://i.imgur.com/8CbThoJ.png)

* Once an admin account has exceeded the allowed login attempts (which is configured at ``Store> Settings> Configuration> Advanced> Maximum Login Failures to Lockout Account``), there will be a mail notification to the store owner that this account has been lock up. Store owner should review this case again to reset safety settings. You can refer this [article](https://www.mageplaza.com/kb/how-to-reset-a-locked-admin-account-in-magento-2.html) to learn how to unlock an admin user account. 

![i7](https://i.imgur.com/EE2EZq9.png)

* Also, store owners can check the last login of a specific administratore. You can follow ``System > Permissions > All Users``

![i8](https://i.imgur.com/f7a0SkZ.png)

* The **Last login** column records the newest recent login attempt of an admin.
* The **IP Address** column records the IP address corresponding to the newest recent login attempt of an admin. Clicking on an IP address, it will redirect to the [Traceip](http://www.traceip.net/) page.  

### II. Checklist
Checklist is a bunch of outlines pointing out which factor(s) can be the possible vulnarablity for your stores. Go to ``System > Security > Checklist``

![i6](https://i.imgur.com/YyRbNhE.png)

* In the **Check admin's username** box: 
  * Check the name of the admin account, if the default name is too obvious to guess or popular to name, the message will alert the store owner.
  * Click **Fix it** to be redirected to the Edit User page
* In the **Check captcha** box
  * Check if captcha is enabled outside the frontend or in the backend.
  * Notify if store owner has enabled captcha. If not, message will warn store owner to enable captcha.
  * Click to **Fix it**, CAPTCHA will be enabled automatically and the confirmation message will be delivered.
* In the **Check Magento Version** box: 
  * Check the version of Magento that the store owner is using. If this is not the latest version, the checklist will alert store owners to update to the latest version.
  * Click to **Fix it** to be redirected to the Update version guidance. 
* In the **Check database prefix** box: 
  * Check if the store owner has used the database prefix or not. If not, the checklist will alert store owners to use them for database security.
  * If the store owner uses a database prefix, the checklist will notify them that their database is working properly.
  * Click **Fix it** to display the **Add table prefix**, enter the table prefix name to add them.
  
### III. Action Log
From the admin panel, go to ``System > Security > Action Log``

![i9](https://i.imgur.com/FkZPClU.png)

Here records all the actions of admin users when they logged into the admin page. Clicking on any IP address will redirect the store owner to the [Trace IP](http://www.traceip.net/) page. Click ``View`` to display detailed information of that log. All logs at this directory will be deleted if the store owner chooses to delete the log after the log has been backed up.

### IV. Action Log Backup
You can go to ``System > Security > Action Log Backup``.

![i10](https://i.imgur.com/G3iA78m.png)

In this section, all logs in the Action Log are automatically backed up as a csv file. Clicking on any file will automatically be downloaded.

### V. File Change Log
Please check at ``System > Security > File Change log``

![i11](https://i.imgur.com/EBOcIL5.png)

This section records all created, modified, deleted files. All files are scanned and recorded daily at 0:00 PM according to the store's configuration time and automatically. Email alert will also be sent to the store owner about the change of files. Clicking ``View`` to display information for the log.

When the store owner clicks on **Check File Change**, it will check whether the current has been modified, created or deleted instead of waiting until 00:00. If there are too many recorded logs that the store owner does not want to store anymore, they can click on ``Clear Log`` to clear all the logs are stored here


### Reset Command line

* If store admins mistakenly enter their IP addresses in the Blacklist, this following command lines can be run first: 
```
bin/magento security:reset blacklist 
```
Next, run this command line:
```
bin/magento cache:flush
```
*  After you have finished running those above command lines which reset the **Blacklist(s)** field, you will be able to access the admin page again. Note that the **Blacklist(s)** field is reset now so don’t forget to reenter the blacklist IPs.
* Similarly, the **Whitelist(s)** can be reset using these command lines: 
```
bin/magento security:reset whitelist
bin/magento cache:flush
```
* When admin users want to access backend in the period of Away Mode suddenly, follow two command lines to turn Away Mode off.
```
bin/magento security:reset away mode
bin/magento cache:flush
```

* If you run the command ``bin/magento security:reset``, both **Blacklist(s)**, **Whitelist(s)** and **Away Mode** will be reset.
