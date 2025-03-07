### Get all invoices
GET https://invoice-product-portal.onrender.com/api/invoices

### Get a specific invoice by ID
GET https://invoice-product-portal.onrender.com/api/invoices/67c9a363efda87094cf63cc0

### Create a new invoice
POST https://invoice-product-portal.onrender.com/api/invoices
Content-Type: application/json

{
  "storeName": "D Mart",
  "orderId": "ORD12345",
  "orderDate": "2025-03-06",
  "quantity": 10,
  "regularPrice": 100,
  "dealPrice": 90,
  "itemTotal": 900,
  "itemTax": 45,
  "grandTotalWithoutTax": 900,
  "grandTotalWithTax": 945,
  "paymentStatus": "Pending"
}

### Update an existing invoice
PUT https://invoice-product-portal.onrender.com/api/invoices/67c9c64c525a35cdf58f1398
Content-Type: application/json

{
  "paymentStatus": "Paid"
}

### Delete an invoice
DELETE https://invoice-product-portal.onrender.com/api/invoices/67c9c64c525a35cdf58f1398

### Get all products
GET https://invoice-product-portal.onrender.com/api/products

### Get Product by ID
GET https://invoice-product-portal.onrender.com/api/products/67c9a78ee8c59ff44f304ad7

### Create a new product
POST https://invoice-product-portal.onrender.com/api/products
Content-Type: application/json

{
  "storeName": "Insta Mart",
  "productName": "Laptop",
  "price": 50000,
  "stock": 15,
  "category": "Electronics"
}

### Update a Product
PUT https://invoice-product-portal.onrender.com/api/products/67c9a78ee8c59ff44f304ad7
Content-Type: application/json

{
  "productName": "Wireless Gaming Mouse",
  "price": 1500,
  "stock": 30
}

### Delete a Product
DELETE https://invoice-product-portal.onrender.com/api/products/67c9a78ee8c59ff44f304ad7
