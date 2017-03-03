SELECT * FROM product
JOIN products_in_order
ON product.productid = products_in_order.product_id
JOIN orders 
ON products_in_order.order_id = orders.id
JOIN users
ON orders.user_id = users.userid
WHERE orders.id = $1