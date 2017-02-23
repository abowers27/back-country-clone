select product.*, brands.* from product
join brands on product.brand = brands.brandname
where product.productid = $1