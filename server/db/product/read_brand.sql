select * from product
join brands on product.brand = brands.brandname
where brands.brandname = $1