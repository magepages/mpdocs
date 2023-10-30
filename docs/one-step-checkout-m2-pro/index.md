# One Step Checkout

One Step Checkout extension for Magento 2, developed by Mageplaza, is the best marketing tool that helps you to reduce your store abandonment cart, increase your conversion rate, and totally grow your store revenue. That extension helps customers checkout quickly and conveniently on one page with all six steps. Many outstanding plugins such as Ajax loading, Google address suggestion, Auto-update order information, Apply coupon on the checkout page, and Support multi-payment methods will improve your checkout page and make it more powerful and more effective.
Mageplaza One Step Checkout for Magento 2 User Guide will provide detailed instructions to know How to use on the frontend and How to Config on the backend.

## I. How to use
After adding the right products in the cart, the customer will be navigated to the checkout page. The checkout page will be shown with all six steps as the image below.

![Alt text](link_image)

A one-step checkout will be totally done on one page only by completing the information and selecting options.

### 1.1. Log In / Sign Up

- Proceed with the checkout with the customer’s existing information by clicking on the blue link “Already have an account, click here to login”. A pop-up box will appear to allow buyers to fill in their accounts as below:

![Alt text](link_image)

- Otherwise, buyers are able to purchase without registering an account

- Buyers can create a new account at the same time when selecting the box Create Account:

![Alt text](link_image)

### 1.2. Shipping Address

![Alt text](link_image)

- Customers enter their personal information into required fields (which are marked by a red *).
- In the box Street Address, One Step Checkout helps display a list of addresses suggested automatically by typing only one letter. Furthermore, Country, City, and State/Province will be consequently auto-updated based on the selected street address.

### 1.3. Billing Address

![Alt text](link_image)

- Buyers can tick the box My billing and shipping address are the same to have their item(s) delivered to their billing address. Otherwise, the Billing Address section allows buyers to fill in their information to check out.

### 1.4. Shipping Method

![Alt text](link_image)

- Depending on the configuration in the backend, the shipping method will be variable to meet customers’ requirements.
- Admin can add more other shipping methods at the backend Sale > Shipping Method. You can refer here for more information.
- Buyers can choose their favourable time to receive the delivery at Delivery Time. This extension is entirely compatible with OSC
- Also, buyers can enter their house security code if it’s necessary.
- Moreover, the One Step Checkout module allows buyers to leave their comments about the orders, and products in the Comments field

### 1.5. Payment Method

![Alt text](link_image)
One Step Checkout allows customers to quickly select their favorable payment method with only by a single click.
Admin can add more other payment methods at the backend Sale > Payment Method. You can refer here for more information.

### 1.6. Order Review and Place Order

![Alt text](link_image)

In the Order Review section, One Step Checkout allows buyers to easily adjust their item’s quantity by using the minus/plus button. In addition, it allows editing each item:

![Alt text](link_image)
Subtotal, shipping fee, tax, and grand total are displayed clearly by One Step Checkout.
One Step Checkout enables customers to apply coupons in the Apply Discount Code box.
The box Sign up for newsletter can be selected if customers desire to receive information from the online store via email.
Customers may request the purchased product to be wrapped and send a gift message with that product.

![Alt text](link_image)
Terms and conditions will be displayed in a pop-up box and can be accepted by clicking on I agree with terms and conditions.
Eventually, the one step checkout can be finished with a click on the Place Order button. The whole process is completed in one page only.
Seal block is displayed to make sure this is the official checkout page of the store, not forged.

### 1.7. Quickly add Product and Coupon by URL
Customers can quickly add a certain number of Products by SKU by adding some information at the URL
Supported Product Types include: Simple Product, Child Configurable Product, Downloadable Product
Customers can also quickly add Coupon when inserting information into the URL
Adding Product: For example, adding 2 products whose SKU is MH01 and 3 products whose SKU is WSH12-28-Red to OSC at the store with a website: www.example.com
www.example.com/onestepcheckout/?sku[MH01]=2&sku[WSH12-28-Red]=3
Add Coupon: For example, add a coupon with the code COUPON123 to the OSC at the store with a website: www.example.com
www.example.com/onestepcheckout/? coupon = COUPON123
Add Coupon and Product at the same time: For example, add 2 products with SKU as MH01 and coupon with code CO COONON123 to OSC at the store with a website: www.example.com
www.example.com/onestepcheckout/?sku [MH01] = 2 & coupon = COUPON123
II. How to configure
Login to Magento Admin, following our given guide below to complete One Step Checkout configuration
Manage Checkout Layout 
Configuration
General Configuration
Display Configuration
Design Configuration
2.1. Manage Fields
2.1.1. Address Information
From the Admin Panel, go to Stores > One Step Checkout > Manage Fields, and choose Address Information. Drag and drop tabs from Disabled Fields to Enabled Fields to have them appear on the checkout page.
Manage Field is completely compatible with Mageplaza Customer Attributes and Order attributes so that you can add preferred fields to the One step checkout page.
Here, the admin can configure Required by checking the right corner of each field, changing the frame length by dragging and dropping (length can be dragged: 25%, 50%, 100%), drag and drop tabs from Available fields to Sorted fields to have them appeared in the checkout page:

![Alt text](link_image)
2.1.2. Shipping Method
From the Admin Panel, go to Stores > One Step Checkout > Manage Fields, chọn Shipping Method
Drag and drop tabs from Available fields to Sorted fields to have them appeared in the checkout page.
Please install Mageplaza Order Attributes to add more custom checkout fields.

![Alt text](link_image)
2.1.3. Payment Method
From the Admin Panel, go to Stores > One Step Checkout > Manage Fields, chọn Payment Method
Drag and drop tabs from Available fields to Sorted fields to have them appeared in the checkout page.
Please install Mageplaza Order Attributes to add more custom checkout fields.

![Alt text](link_image)
2.1.4. Order Summary
From the Admin Panel, go to Stores > One Step Checkout > Manage Fields, select Order Summary
Drag and drop tabs from Available fields to Sorted fields to have them appeared in the checkout page.
Please install Mageplaza Order Attributes to add more custom checkout fields.

![Alt text](link_image)
2.2. Configuration
2.2.1. General Configuration
Open the Stores > Settings > Configuration > Mageplaza Extensions > One Step Checkout > General Configuration section:

![Alt text](link_image)

![Alt text](link_image)

![Alt text](link_image)


In the Enable One Step Checkout field: Select “Yes” to enable One Step Checkout extension.
In the One Step Checkout Page Title field: Enter the page title you want.
In the One Step Checkout Description field: Enter the short description to describe the One Step Checkout page.
In the Default Shipping Method field: Set default shipping method in the checkout process.
In the Default Payment Method field: Set default payment method in the checkout process.
In the Allow Guest Checkout field:
Select “Yes” to allow checking out as a guest. Also, guests can create an account on the checkout page.
Select “No (require create account)” : Guest must enter password to create account at checkout
Select “No (require login)”: Guest must login before checkout
In the Auto-redirect to One Step Checkout page field: Select “Yes” to turn this function on
In the Show Billing Address field: Select “Yes” to allow shipping items to a different address from billing address.The system will then display another field:
 Billing Address and Shipping Address are the same” checked by default: If you choose Yes, the checkbox will be automatically checked and collect address information according to the Shipping address. If the customer wants the Billing address information different from the Shipping address, then uncheck the checkbox and fill in the necessary information for the Billing address.
In the Use Auto Suggestion Technology field: Select one of the following options:
No: if you don’t want to use auto-suggestion technology
Google: if you select Google option, when the customer fills address fields, it will suggest a list of full addresses.
In Google API Key field: Insert the Key. About how to get this key, you can refer this guide.
In Restrict the auto suggestion for a specific country field: Select one or multiple nations so that when filling address into the Shipping address fields, the Billing Address will automatically suggest based on the address from the selected country.
Enable GeoIP: GeoIP allows you to lookup the approximate location of an IP address. If store owners enable this function, when a customer comes to the checkout page, State, country, city and zip code will be automatically entered based on his current IP address. Ask customers fill less, they will buy yours more! You need install `GeoIP Mageplaza Extension to use this function.
Select No: If you don’t want to use GeoIP
Select Yes to enable GeoIP Extension.
Route: Allow admin to modify the URL route of One Step Checkout Page. You can left this field blank if you want to use the default route which is onestepcheckout.
2.2.2. Display Configuration
Make your way to MStores > Settings > Configuration > Mageplaza Extensions > One Step Checkout
Open the Display Configuration section, and continue with following:

![Alt text](link_image)

![Alt text](link_image)
In the Show Login Link field: Set “Yes” to show the Login link which allows the customer to sign in. Leave “No” to disable this link.
Show/Hide Footer/Header: Depending on each theme that the checkout page will or will not display the Header/Footer of that page.
With themes which display, choose Yes in this section to make it also display in the One Step Checkout page and choose No to hide it
With themes which not, you can pass this config
In the Discount Code Section field:
Select “No” to hide Apply Discount Code box on the Checkout page.
Select “In Payment Area” to display the Apply Discount Code box in the Payment Methods area.
Select “In Review Area” to display the Apply Discount Code box in the Review Order area.
In the Show Order Comment field: Select “Yes” to show the Order Comment box that allows the customer to enter their comment on the order.
In the Enable Gift Message on order field: Select “Yes” to show the Gift Message box that allows the customer to enter their gift message.

![Alt text](link_image)
In the Enable Gift Messages on item field: This means you will be able to send gift message for each of item. Enable to use this function by choosing “Yes”

![Alt text](link_image)
In the Show Terms and Conditions field: You can choose “No” to not display the Terms and Conditions OR select “YES” to display it in two different positions: In Payment Area and In Review Area.
Enable Social Login On Checkout Page: Choose "Yes" to allow customer to login via social media accounts. This feature is completely compatible with Mageplaza Social Login.

![Alt text](link_image)
In the Show Check Out with Multiple Addresses Link field: You can choose “Yes” to display the Check Out with Multiple Addresses Link on the one page checkout step, so that customers can make payments with multiple addresses.

![Alt text](link_image)
2.2.2.1. Review Cart Section

![Alt text](link_image)
In the Show Order Review Section field: The Order Review is enabled by default, if you want to disable to review order, let select “Disabled” option.
Show Product List Toggle: Choose Yes so customers can shorten the product list before checkout
In the Show Product Thumbnail Image field: Choose “Yes” to show thumbnail
2.2.2.2. Gift Wrap

![Alt text](link_image)
Select “Yes” if you allow the customer to choose Gift Wrap option. After choosing, the change will be applied automatically to the order.If you allow showing Gift Wrap option, two following fields will be shown:
Calculate Method field, select Per Order or Per Item to calculate the gift wrap fee based on the item quantity or the order total. Comment box will be shown at the Shipping Method area.
Amount field, enter the gift wrap fee. If you leave it blank, Gift wrap fee = 0
2.2.2.3. Newsletter

![Alt text](link_image)
Select “Yes” if you want to show Sign up newsletter selection.
Checked Newsletter by default will be displayed. Select “Yes” to keep this item be checked as always.
2.2.2.4. Survey

![Alt text](link_image)
Set “Yes” to allow store owner can issue a survey question to buyers when they placed order successfully, some additional fields will be expanded.
Survey Question: The questionnaire is filled in this section
Survey Answers: Store owners can offer multiple answer options to their customers. Each of an answer options are displayed as a checkbox, which means that customers can select multiple answers at a time.
Allow Customer Add Other Option: Select “Yes” so that customers can make their own answers to survey questions.
2.2.2.5. Seal Block
Seal Block always displays under Place Order button

![Alt text](link_image)
There are 3 display Seal Block options:
Enable = No: Not display Seal Block in One Step Checkout

![Alt text](link_image)
Enable = Select Static Block. When the admin selects this option, the Block option will be displayed to admin select the CMS block that he or she wants to act as Seal Block to show outside the Frontend. We also provide you seal block default which is One Step Checkout Seal Content to refer

![Alt text](link_image)
Enable = Use Default Design. When choosing this option, admin can customize the images and contents of Seal Block quickly and easily

![Alt text](link_image)
2.2.2.6. Static CMS Block

![Alt text](link_image)
Choose Yes to insert Static CMS Blocks into Top/Bottom of One Step Checkout page or insert in Success Page. The display order is set in the Sort Order column
2.2.3. Design Configuration
Open the Design Configuration section, and continue with following:

![Alt text](link_image)
In the Checkout Page Layout field: Select one of the following layouts to have your checkout page be shown in four different interfaces
1 column
2 columns
3 columns
3 columns with Colspan
In the Design Style field, there are 3 design styles for the One Step Checkout page
Default Design style

![Alt text](link_image)
Flat Design style. If you choose this, you can customize colors of
Heading Background Color
Heading Text Color

![Alt text](link_image)
Material Design style: If you choose this style, you’ll be able to change
Radio Button Style
Checkbox Button Style
Material color

![Alt text](link_image)
In the Place Order button color field: Choose the color for the place order button which should be a highlight to attract shoppers the most.
In the Order Summary Background Color field: Choose the color for the Order Summary section.
In the One Step Checkout Page Background Color field: Choose the background color for the whole One Step Checkout page.
In the One Step Checkout Page Title Color field: Choose the color for the title of the One Step Checkout page.
In the One Step Checkout Description Color field: Choose the color for the description section of the One Step Checkout page.
In the Text Font field: Select text font for the one step checkout page. You can change among multiple text fonts as you wish.
In the Custom CSS field: You can add the CSS code to custom your own style.
2.2.4 Custom Fields Configuration
Open the Custom Fields Configuration section, and continue with the following:

![Alt text](link_image)
Add 3 default Custom Field with Custom Field 1 and 2 as Text, Custom Field 3 as Date:

![Alt text](link_image)
Show in Customer Grid : Choose one or multiple options with these fields: Custom Field 1, Custom Field 2, Custom Field 3 to display on Customer Grid. This function helps admins catch up with their information in the above fields right when they navigate to the Customer Grid.

![Alt text](link_image)
2.3. Other configurations
Sometimes you can’t display some minor fields on the checkout page even you’ve enabled them in the backend configuration. Don’t worry that there’re no serious technical issue here, please follow those below instructions to display them properly.
2.3.1. Terms and Conditions Configuration
Term and Conditions might not appear on the frontend due to:
Term and Conditions hasn’t been created yet. Follow Admin > Stores > Settings > Terms and Conditions > Add New Condition to create a new form.
You haven’t turn Term of Magento configuration on`yet. Please go to Stores > Settings > Configuration > Sales > Checkout > Checkout Options`, set Enable Terms and Conditions to “Yes”.
Then, refer here to learn how to enable the Term and Conditions on the checkout page.

![Alt text](link_image)
2.3.2. Enable Gift Messages on item
When you enable this option but can’t see its icon on the frontend, you might not have allowed the product to have the message. Please log in to Catalog > Product, choose that product you want it to have gift message, enable this below option and save the product.

![Alt text](link_image)
2.3.3. Add Shipping Method
In general, Magento just displays two basic shipping methods are Flat Rate and Table Rates. To add another shipping method, go to Stores > Settings > Configuration, enter Sale > Shipping Method and follow this guide.
2.3.4. Compatible One Step Checkout with Paypal
One Step Checkout Module can be compatible with Paypal Payment Gateway. To know more about Paypal, please visit here
Moreover, One Step Checkout also support Braintree, a Paypal service. To know more about Braintree, please visit here.
To configure the Payment methods integrated with One Step Checkout, go to Stores > Settings > Configuration > Sales > Payments Method. Then choose the Payment method you want to configure.

![Alt text](link_image)
For Paypal Express Checkout Configuration, please follow the guide here
For Braintree Configuration, please follow the guide here

![Alt text](link_image)
2.3.5. Add comment into Order Confirmation Email
To add comment into Order Confirmation Email, please refer the guide here
III. Compatible Order Attribute

![Alt text](link_image)
IV. Compatible Customer Attribute

![Alt text](link_image)

V: Compatible Abandoned Cart Email
One Step Checkout extension hoàn toàn tương thích với Abandoned Cart Email extension của Mageplaza, thông qua trang One Step Checkout page có thể biết được những thông tin liên quan đến giỏ hàng, giỏ hàng nào được khôi phục và giỏ hàng nào đã là Abandoned cart và những báo cáo liên quan đến giỏ hàng,...

![Alt text](link_image)

![Alt text](link_image)
