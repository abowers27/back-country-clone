SELECT * FROM product
JOIN products_in_order
ON product.productid = products_in_order.product_id
WHERE products_in_order.order_id = $1