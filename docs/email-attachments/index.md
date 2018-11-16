# Email Attachments
## Overview

Email Attachments allows you to automatically attach the documents as PDF Invoices, Credit memos, Shipments and attach your Terms and Conditions to the sale emails. Mageplaza Email Attachments extension is released to solve the problem about sending the email with billing documents in PDF format in Magento. With the help of this module, it helps admins to reduce time in managing the store as well as help your customers understand better about the products on your store. Now let's experience this module!!!

## How to configure

### 1. Configuration

Login to the Magento Admin, choose `Store > Configuration > Mageplaza > Email Attachments`

![email attachments](https://i.imgur.com/CGI157U.gif)

#### 1.1. General Configuration


![email attachments 2](https://i.imgur.com/ev3T7Zh.png)


- **Enable**: Select "Yes" to turn on this module or "No" to turn it off.
- **CC to emails**:
  - Enter the email address to send Attachments file copy to the customers you want to share.
  - Allows importing multiple emails at the same time and all the recipients of the mail will see the list of emails of those who have received Attachments file copy. These emails are separated by commas.

- **BCC to emails**:
  - Enter the email address to send Attachments file copy to the customers you want to share.
  - Allows importing multiple emails at the same time and all recipients of the message will not see the BCC recipient list. These emails are separated by commas.

- **Enable Attach PDF**: Select "Yes" to automatically attach billing documents in PDF format in the email and will display additional fields:
  - **Attach PDF file for**: Select the item you want to display `Attach PDF` file. PDF files for the above billing document(s) will be generated and attached to emails. Displayed in categories:
    - Invoice
    - Credit memo
    - Shipment
    
![email attachments 5](https://i.imgur.com/zalbhHD.png)    

- **Enable Attach Terms and Conditions**: Select "Yes" to display the `Attach Terms and Conditions` in the email and it will display two more fields:
  - `Attach Terms and Conditions`: Select the item to display `Attach Terms and Conditions` in the email. Terms and Conditions will be attached to the above billing document(s) as a file. Displayed in categories:
    - Order
    - Invoice
    - Credit memo
    - Shipment

  - `Terms and Conditions file`:
    - Click `Choose file` button to upload PDF file for `Terms and Conditions`.
    - Allowed uploading the files: .pdf, .doc, .docx, .txt.
