SELECT * FROM product
WHERE LOWER(name) like $1
or LOWER(brand) like $1
or LOWER(category) like $1
or LOWER(gender) like $1