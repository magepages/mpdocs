# Shipping Rules
## Overview

Default Magento only allows fixed shipping fees for item or order, admins can only set rules to free items / orders that can not be custom shipping price. The Shipping Rules module provides some solutions for admins to change, add or subtract shipments by item or order. Or admins can create rules to apply ship fees for certain days or time frames or apply shipping fees to each store or different customer groups.

## How to use
- The rule is applied on the frontend
- The rule is apllied in the backend

## How to configure

From the Admin Panel, go to `Sales > Shipping Rules > Configuration`

### 1. Configuration

#### General

- **Enable**: Choose Yes to use the features of this module
- **Apply for Backend Order**: Choose Yes to apply the rule when admins create a new order

### 2. Manage Rules
#### How to add a new rules
- Step 1: Enter the full General information
- Step 2: Set the conditions to apply the rule in the `Conditions` section
- Step 3: Set up shipment calculation in `Actions` section

##### Step 1: Enter the full General information

- **Name**: Enter the name of the rule
- **Decription**: Enter a description for the rule
- **Status**: Select "Enable" to apply the rule
- **Select Shipping Methods**
  - Select the delivery method
  - You can choose from a variety of delivery methods

- **Store Views**
  - Only the products in the selected store will be applied the rule
  - Multiple stores can be selected at the same time

- **Customer Groups**
  - Apply the rule to the customers of the selected group
  - Multiple groups can be selected at the same time
  
- **From**: Choose the date/month/year to start applying the rule
- **To**: Select the date/month/year to end applying the rule
- **Select Days**
  - Select the day of the week to apply the rule
  - Multiple dates can be selected at the same time

- **Time From**
  - Select the hours of the day to start applying the rule
  - For countries located in different time zones, they will apply according to the hours configured for those countries. This page has had visits All times are GMT +7. Time From is 8:00 AM, then 8:00 AM of Vietnam and 8:00 AM of America will start applying the rule when there are buyers.
Time To
Select the hours of the day to finish applying the rule
For countries located in different time zones, they will apply according to the hours configured for those countries. This page has had visits All times are GMT +7. Time From is 17:00 PM after 17:00 PM of Vietnam and 17:00 PM of the US will not apply the rule when there are buyers.
Priority
 Enter priority for synchronizing objects
The smaller the number, the higher the priority
Rules with equal priority, the priority will be based on what rules are created in advance will be higher priority



##### Step 2: Set the conditions to apply the rule in the Conditions section


##### Step 3: Set up shipment calculation in Actions section

