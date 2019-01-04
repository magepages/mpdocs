# Better Change Quantity

## Overview

For the convenience of customers when purchasing multiple products with various discount options, Mageplaza integrates the ability to display Magento tier price notifications into the Better Change Qty module. Customers can easily choose different options at different prices. With only 1 select option and Add To Cart, customers have added products to the cart conveniently, quickly without entering the number of products corresponding to Mgento's announcement to receive the same discount.

## Download & Install

- [Mageplaza Better Change Quantity]()
- [How to Install](https://www.mageplaza.com/install-magento-2-extension/)


## How to use

### 1. Option Template
### 2. Open Quantity

## How to Configure

From the **Admin Panel**, go to `Store > Settings > Configuration > MAGEPLAZA EXTENSIONS > Better Change Qty`

### Configuration 

#### General 

- **Enable**: Select `Yes` to activate the module 

- **Change Qty Step**
  - *Change Qty Step = Product Qty Increment*: Display step increasing by the number configured in Magento products
  
  For example: If **Qty Increments = 3** as in Magento product configuration; Step 1 is 1 product, Step 2 is 4 products, Step 3 is 7 products and so on. The difference of product quantity is 3. 
  
  
  - *Change Qty Step = Fixed Value*: Display step as similar as in **Qty Step Value** configuration
    - **Qty Step Value**: 
      - Enter the number of products for each time adding products to your cart
      - For example: If **Qty Step Value = 2**, every time you add product to the cart, you must add 2 products

  - **Change Qty Step = Custom Value**: Display step increasing by the number configured in **Custom Step** field
    - **Custom Step**
      - Enter the number of products for each step
      - You can enter multiple steps with different product numbers, steps must be separated by a commas
      - For example: **Qty Step Value = 3,5,9**, means that Step 1 is 3 product, Step 2 is 5 prodducts and Step 3 is 9 products
      
- **Max Qty Step**

  - Max Qty Step = Stock Quantity: Hiển thị số lượng sản phẩm của từng step cho đến khi sản phẩm hết hàng
  
  - Max Qty Step = Fixed Value: Hiển thị số lượng sản phẩm của từng step cho đến khi số lượng sản phẩm bằng giá trị đã cấu hình ở trường Max Qty Value
    - Max Qty Value: Nhập số lượng sản phẩm tối đa để hiển thị các step tương ứng
    
  - Max Qty Step = Both: Hiển thị số lượng sản phẩm của từng step cho đến khi số lượng sản phẩm bằng giá trị đã cấu hình ở trường Max Qty Value hoặc đến khi sản phẩm hết hàng (giá trị nào nhỏ hơn thì sẽ hiển thị step theo giá trị đó). Ví dụ: Stock Quantity là 50, Max Qty Value là 70 thì step sẽ dừng lại ở mốc 50
    - Max Qty Value: Nhập số lượng sản phẩm tối đa để hiển thị các step tương ứng
    
  - Allow Open Qty: Chọn Yes để hiển thị ô text box cho khách hàng nhập số lượng sản phẩm tùy ý
  
  - Option Template
    - Template sẽ có kiểu Buy {qty}, kiểu này sẽ được áp dụng nếu số lượng sản phẩm là 1
  
  - Option Template for Multiple Qty
    - Template sẽ có kiểu Buy {qty} for {price} each, kiểu này sẽ được áp dụng nếu số lượng sản phẩm lớn hơn 1

  - Option Template with tier price
    - Template sẽ có kiểu Buy {qty} for {price} each and save {percent}, kiểu này sẽ được áp dụng nếu tier price được áp dụng
Bỏ trống trường này thì template ở trường Option Template được áp dụng
Các Option Template sẽ hiển thị ngoài frontend dưới dạng select
Bạn có thể sử dụng một số biến mà chúng tôi hỗ trợ (tất cả giá trị của các biến này đều được lấy theo cấu hình tier price của Magento): 
{qty}: số lượng sản phẩm
{price}: giá sản phẩm
{total}: Tổng số tiền của order
{percent}: phần trăm được giảm giá
Apply for Categories
Chọn category áp dụng hiển thị Qty step
Có thể chọn hiển thị ở nhiều category
Apply for Product Types
Chọn loại sản phẩm áp dụng hiển thị Qty step
Có thể chọn hiển thị ở nhiều loại sản phẩm khác nhau
Apply on
Chọn trang áp dụng hiển thị Qty step
Có thể chọn nhiều trang cùng áp dụng một lúc. Có 3 trang có thể lựa chọn: Product List page, Product View page, Wishlist page
Hide Tier price notice: Chọn Yes để ẩn thông báo tier price của Magento





